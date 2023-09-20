import Link from 'next/link';
/* eslint-disable @next/next/no-img-element */
import { useCall, useContract, useDryRun } from 'useink';
import {
  RustResult,
  pickDecodedError,
  pickTxInfo,
  planckToDecimalFormatted,
} from 'useink/utils';
import metadata from '../../metadata/playground.json';
import { Notifications } from '../Notifications';

const CONTRACTS_ROCOCO_ADDRESS =
  '5G31GiBqWPFCm8S9cknY7UWAPA8SwNJJdoG4RrmtVDQyrk7Y';

interface Happy {
  mood: string;
}
interface BadMood {
  BadMood: { mood: string };
}
// RustResult<T, E> is a convenience type to define { Ok?: T, Err?: E }, returned by calls
// to contracts that return a Result<T, E>
type MoodResult = RustResult<Happy, BadMood>;
export const HomePage: React.FC = () => {
  const cRococoContract = useContract(CONTRACTS_ROCOCO_ADDRESS, metadata);

  const dryRunError = useDryRun<boolean>(cRococoContract, 'mood');
  const flipDryRun = useDryRun<boolean>(cRococoContract, 'flip');
  const panic = useCall<boolean>(cRococoContract, 'panic');
  const mood = useCall<MoodResult>(cRococoContract, 'mood');

  console.log({ dryRunError, mood, moodValue: mood.result });
  console.log({ cRococoContract });

  if (!cRococoContract?.contract) {
    return (
      <div className="justify-center h-screen flex items-center w-full">
        <h1 className="text-3xl font-bold">Loading contract...</h1>
      </div>
    );
  }

  return (
    <section className="w-full mx-auto">
      <Notifications />
      <div className="max-w-3xl w-full mx-auto py-16 px-4">
        <h1 className="text-5xl font-bold text-blue-500">
          useink Kitchen Sink
        </h1>
        <h2 className="text-2xl text-blue-500 mb-16">
          See the contract definitions{' '}
          <a
            className="underline hover:opacity-80 transition duration-75"
            href="https://github.com/paritytech/useink-kitchen-sink/blob/master/lib.rs"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </h2>

        <div className="mt-8">
          <ul className="list-none flex flex-col gap-12 mt-8">
            <li className="flex flex-col gap-4">
              <button
                type="button"
                onClick={() => flipDryRun.send([], { defaultCaller: true })}
                disabled={flipDryRun.isSubmitting}
                className="rounded-2xl text-white px-6 py-4 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 hover:disabled:bg-blue-300 transition duration-75"
              >
                {flipDryRun.isSubmitting ? 'Flipping' : 'Flip as Dry Run!'}
              </button>

              <h3 className="text-xl">
                <b>Gas Required:</b>{' '}
                {planckToDecimalFormatted(
                  pickTxInfo(flipDryRun.result)?.partialFee,
                  { api: cRococoContract.contract.api },
                )}

                {pickDecodedError(flipDryRun, cRococoContract, {}, '--')}
              </h3>
            </li>

            <li className="flex flex-col gap-4">
              <button
                type="button"
                onClick={() => dryRunError.send([1], { defaultCaller: true })}
                disabled={dryRunError.isSubmitting}
                className="rounded-2xl text-white px-6 py-4 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 hover:disabled:bg-blue-300 transition duration-75"
              >
                {dryRunError.isSubmitting ? 'Flipping' : 'Dry Run with Error!'}
              </button>

              <h3 className="text-xl">
                <b>Gas Required:</b>{' '}
                {planckToDecimalFormatted(
                  pickTxInfo(dryRunError.result)?.partialFee,
                  { api: cRococoContract.contract.api },
                )}

                {pickDecodedError(dryRunError, cRococoContract, {}, '--')}
              </h3>
            </li>

            <li className="flex flex-col gap-4">
              <button
                type="button"
                onClick={() => panic.send([], { defaultCaller: true })}
                disabled={panic.isSubmitting}
                className="rounded-2xl text-white px-6 py-4 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 hover:disabled:bg-blue-300 transition duration-75"
              >
                Call panic()
              </button>

              <h3 className="text-xl">
                {pickDecodedError(
                  panic,
                  cRococoContract,
                  {
                    ContractTrapped:
                      'This is a custom message. There was a panic in the contract!',
                  },
                  'this is a default error message',
                )}
              </h3>
            </li>

            <li className="flex flex-col gap-4">
              <h3 className="text-xl">
                Handle Results. An even number will return an Ok Result, and an
                odd number will return an Error
              </h3>
              <button
                type="button"
                onClick={() => mood.send([0], { defaultCaller: true })}
                disabled={mood.isSubmitting}
                className="rounded-2xl text-white px-6 py-4 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 hover:disabled:bg-blue-300 transition duration-75"
              >
                {mood.isSubmitting ? 'Getting mood...' : 'Get Ok Result'}
              </button>

              <button
                type="button"
                onClick={() => mood.send([1], { defaultCaller: true })}
                disabled={mood.isSubmitting}
                className="rounded-2xl text-white px-6 py-4 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 hover:disabled:bg-blue-300 transition duration-75"
              >
                {mood.isSubmitting ? 'Getting mood...' : 'Get Err Result'}
              </button>
            </li>

            <li>
              <h3 className="text-xl">Deploy a Contract</h3>
              <Link
                className="text-brand-200 hover:text-brand-300 transition duration-75 underline"
                href="/deploy"
              >
                See a Deploy Example
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
