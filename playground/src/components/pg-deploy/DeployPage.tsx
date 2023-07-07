import { ConnectWallet } from '../ConnectWallet';
import { FileDropper } from '../FileDropper';
import { Notifications } from '../Notifications';
import { SelectList, SelectOption } from '../SelectList';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import { AbiParamInput } from './AbiParamInput';
import { XMarkIcon } from '@heroicons/react/24/solid';
import classNames from 'classnames';
import { useCallback, useMemo, useState } from 'react';
import {
  useCodeHash,
  useDeployer,
  useMetadata,
  useSalter,
  useWallet,
} from 'useink';
import { useTxNotifications } from 'useink/notifications';
import {
  BN_ZERO,
  asContractInstantiatedEvent,
  formatEventName,
  isContractInstantiatedEvent,
  isExtrinsicFailedEvent,
  shouldDisable,
} from 'useink/utils';

export const DeployPage: React.FC = () => {
  const { account } = useWallet();
  const [requireWasm, setRequireWasm] = useState(true);
  const C = useCodeHash();
  const M = useMetadata({ requireWasm });
  const S = useSalter();
  // Optionally pass in a ChainId to deploy to another chain. e.g.
  // `useDeployer('shibuya-testnet')`.
  // ChainId must be configured in your UseInkProvider config props.
  const D = useDeployer();
  useTxNotifications(D);
  const [constructorOption, setConstructorOption] =
    useState<SelectOption | null>(null);
  // If the constructor isPayable, then you will want to set the `value` via an input field
  const [value] = useState(BN_ZERO);
  const [constructorParams, setConstructorParams] = useState<
    Record<string, unknown>
  >({});

  const constructorOptions = useMemo(() => {
    if (!M.abi) return [];

    return M.abi.constructors.map((cn) => ({
      value: cn.method, // JavaScript message name in camelCase
      label: cn.identifier, // Rust message name in snake_case
    }));
  }, [M.abi]);

  const konstructor = useMemo(() => {
    if (!constructorOption?.label) return;
    return M.abi?.findConstructor(constructorOption.label);
  }, [M.abi, constructorOption?.label]);

  const handleToggleChange = useCallback(() => {
    setRequireWasm(!requireWasm);
    M.clear();
    D.resetState();
  }, [requireWasm]);

  if (!account) {
    return (
      <section className='w-full mx-auto px-6 max-w-3xl mt-6'>
        <ConnectWallet />
      </section>
    );
  }

  return (
    <section className='w-full mx-auto px-6 max-w-3xl mb-12'>
      <Notifications />

      <hgroup className='my-6 text-center'>
        <h1 className='text-5xl font-bold text-blue-500'>Deploy a Contract</h1>

        <h2 className='text-2xl font-bold text-blue-500 text-center my-6'>
          This example will currently only work with contracts that have default
          constructors. We will add input fields for constructor args in the
          future. If you do this, please share with us!
        </h2>
        <span className='text-center w-full'>
          <a
            href='https://github.com/paritytech/ink-examples/tree/main/flipper'
            rel='noreferrer'
            target='_blank'
            className='underline mb-6 mx-auto'
          >
            Try the Flipper Contract
          </a>
        </span>
      </hgroup>

      <div className='mb-3'>
        <div className='flex items-center gap-3 mb-3'>
          <ToggleSwitch enabled={requireWasm} onChange={handleToggleChange} />
          <label
            className='text-xs p-0 m-0 cursor-pointer'
            onKeyDown={handleToggleChange}
            onClick={handleToggleChange}
          >
            {requireWasm ? 'Require WASM' : 'Upload from code hash'}
          </label>
        </div>
        <p className='text-white/70'>
          {requireWasm
            ? 'Upload a Wasm blob and instantiate it.'
            : 'Use a code hash to reference a Wasm blob that is already on chain.'}
        </p>
      </div>

      {!M.abi ? (
        <>
          <FileDropper
            onDrop={(f: File[]) => {
              setConstructorOption(null);
              M.set(f?.[0]);
            }}
            cta={
              requireWasm
                ? 'Upload a contract file. e.g. "flipper.contract"'
                : 'Upload a metadata json file. e.g. "flipper.json"'
            }
          />

          {M.error && (
            <p className='text-md text-error-500 text-center mx-auto mt-6'>
              {M.error}
            </p>
          )}
        </>
      ) : (
        <div className='flex flex-col items-center'>
          <div className='mx-auto inline-flex items-center rounded border border-gray-300 p-6 shadow dark:border-gray-700 dark:bg-elevation-1'>
            <span className='min-w-600 mr-20 justify-self-start text-xs text-gray-500 dark:text-gray-300'>
              {M.formattedFileName}
            </span>

            <XMarkIcon
              aria-hidden='true'
              className='mr-2 h-5 w-5 cursor-pointer justify-self-end text-gray-500 hover:text-white/90 transition duration-75'
              onClick={() => {
                M.clear();
                D.resetState();
                S.resetState();
              }}
            />
          </div>

          <div className='my-6 flex flex-col w-full max-w-3xl'>
            <div className='mb-6'>
              <label htmlFor='constructor' className='text-xs uppercase mb-1'>
                Constructor
              </label>
              <SelectList
                onChange={setConstructorOption}
                options={constructorOptions}
                value={constructorOption}
                placeholder='Select a constructor...'
              />

              {konstructor?.docs.map((doc) => (
                <p className='text-white/70 mt-3' key={doc}>
                  {doc}
                </p>
              ))}
            </div>

            <div className='mb-6'>
              {konstructor?.args.map((abiParam) => (
                <AbiParamInput
                  key={abiParam.name}
                  abiParam={abiParam}
                  onChange={(e, _jsType) => {
                    // Optionally convert string to _jsType. e.g. string -> BN Or you
                    // could convert the data type in the AbiParamInput and just return
                    // the BN value.
                    const value = e.value;
                    setConstructorParams({
                      ...constructorParams,
                      [abiParam.name]: value,
                    });
                  }}
                />
              ))}

              {konstructor?.isPayable && (
                <>
                  <p className='mt-3 font-semibold uppercase text-green-500'>
                    This constructor is payable, which means you must enter the
                    amount (<b className='underline'>value</b>) you will pay to
                    instantiate.
                  </p>
                  <p className='mt-3 text-green-500'>
                    <b className='underline'>Value</b> - TODO: implement an
                    input that uses BN as the value in options for dryRun() and
                    signAndSend().
                  </p>
                </>
              )}
            </div>

            {!requireWasm && (
              <>
                <div className='opacity-50 mb-6 text-xs border-l-4 border-white pl-6 pb-2'>
                  <p className='mb-1 p-0 mt-0'>
                    Here is a code hash for the flipper contract on Contract on
                    Rococo. You must upload the flipper.json metadata.
                  </p>
                  <span className='p-1 rounded-md bg-brand-800'>
                    0x0f466d0c332258ce41c0b4aaaba4f1708671da275c8fbe395dc81b1fdfedc662
                  </span>
                </div>
                <label htmlFor='codeHash' className='text-xs uppercase mb-1'>
                  Code Hash
                </label>
                <input
                  name='codeHash'
                  className='px-4 py-2 rounded-md bg-white/5'
                  value={C.codeHash}
                  onChange={(e) => {
                    D.resetState();
                    C.set(e.target.value);
                  }}
                />
                {C.error && <p className='text-red-500 mt-3'>{C.error}</p>}
              </>
            )}

            <label htmlFor='salt' className='text-xs uppercase mt-3 mb-1'>
              Salt
            </label>
            <input
              name='salt'
              className='px-4 py-2 rounded-md bg-white/5'
              value={S.salt}
              onChange={(e) => S.set(e.target.value)}
            />
            {S.error && <p className='text-red-500 mt-3'>{S.error}</p>}
            <button
              type='button'
              onClick={S.regenerate}
              className='mt-3 rounded-md text-white px-4 py-2 bg-brand-300 hover:bg-blue-600 disabled:bg-brand-200 hover:disabled:bg-blue-300 transition duration-75'
              disabled={shouldDisable(D) || D.isSubmitting}
            >
              Regenerate
            </button>
          </div>

          <div className='rounded-lg bg-white/5 p-4 mt-6 w-full'>
            <h3 className='uppercase font-semibold font-xs'>Dry Run Results</h3>

            {D.contractAddress && (
              <hgroup>
                <h4 className='test-xs'>Contract Address</h4>
                <h3 className='test-sm'>{D.contractAddress}</h3>
              </hgroup>
            )}

            {D.gasConsumed && (
              <div className='mt-6'>
                <h3 className='test-xs uppercase font-semibold'>
                  Gas Consumed
                </h3>
                <ul className='p-0 list-none'>
                  <li>refTime: {D.gasConsumed.refTime.toString()}</li>
                  <li>proof size: {D.gasConsumed.proofSize.toString()}</li>
                </ul>
              </div>
            )}

            {D.gasRequired && (
              <div className='mt-6'>
                <h3 className='test-xs uppercase font-semibold'>
                  Gas Required
                </h3>
                <ul className='p-0 list-none'>
                  <li>refTime: {D.gasRequired.refTime.toString()}</li>
                  <li>proof size: {D.gasRequired.proofSize.toString()}</li>
                </ul>
              </div>
            )}

            {D.storageDeposit && (
              <div className='mt-6'>
                <ul className='p-0 list-none'>
                  <li>Storage Deposit: {D.storageDeposit.toString()}</li>
                </ul>
              </div>
            )}
          </div>

          {D.error && (
            <p className='text-md text-error-500 text-center mx-auto mt-6'>
              {D.error}
            </p>
          )}

          {D.events?.length > 0 && (
            <div className='mt-6 w-full'>
              <h3 className='text-sm'>Events</h3>
              <ul>
                {D.events.map((event) => (
                  <li
                    key={event.toString()}
                    className={classNames(
                      'bg-brand-500 rounded-md px-4 py-2 mt-1 w-full',
                      isContractInstantiatedEvent(event) && 'bg-green-700',
                      isExtrinsicFailedEvent(event) && 'bg-red-700',
                    )}
                  >
                    {isContractInstantiatedEvent(event) ? (
                      <div>
                        <h4 className='font-bold'>{formatEventName(event)}</h4>
                        <h4>
                          Deployer:{' '}
                          {asContractInstantiatedEvent(event)?.deployer}
                        </h4>

                        <h4>
                          Contract Address:{' '}
                          {asContractInstantiatedEvent(event)?.contractAddress}
                        </h4>
                      </div>
                    ) : (
                      formatEventName(event)
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className='flex items-center gap-3'>
            <button
              type='button'
              onClick={() => {
                if (!M.abi) return;

                if (requireWasm) {
                  D.dryRun(M.abi, konstructor?.method, constructorParams, {
                    value,
                  });
                  return;
                }

                D.dryRun(M.abi, konstructor?.method, constructorParams, {
                  salt: S.salt,
                  codeHash: C.codeHash,
                  value,
                });
              }}
              className='mt-6 rounded-2xl text-white px-6 py-4 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 hover:disabled:bg-blue-300 transition duration-75'
              disabled={shouldDisable(D) || D.isSubmitting || !konstructor}
            >
              {shouldDisable(D) ? 'Dry run...' : <span>Dry Run</span>}
            </button>

            <button
              type='button'
              onClick={() => {
                if (!M.abi) return;

                if (requireWasm) {
                  D.signAndSend(M.abi, konstructor?.method, constructorParams, {
                    value,
                  });
                  return;
                }

                D.signAndSend(M.abi, konstructor?.method, constructorParams, {
                  salt: S.salt,
                  codeHash: C.codeHash,
                  value,
                });
              }}
              className='mt-6 rounded-2xl text-white px-6 py-4 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 hover:disabled:bg-blue-300 transition duration-75 disabled:hover:cursor-not-allowed'
              disabled={shouldDisable(D) || !D.willBeSuccessful || !konstructor}
            >
              {shouldDisable(D) ? (
                'Deploying...'
              ) : (
                <span>
                  Deploy <i>{M.name}</i>
                </span>
              )}
            </button>

            <button
              type='button'
              onClick={() => {
                D.resetState();
              }}
              className='mt-6 rounded-2xl text-white px-6 py-4 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 hover:disabled:bg-blue-300 transition duration-75'
              disabled={shouldDisable(D)}
            >
              Reset State
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
