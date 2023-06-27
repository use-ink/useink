import { useInstalledWallets, useWallet } from 'useink';

export const ConnectWallet = () => {
  const { account, connect } = useWallet();
  const installedWallets = useInstalledWallets();

  if (account) return null;

  if (installedWallets.length === 0) {
    return (
      <h2 className='text-xl font-bold'>
        You don&apos;t have any wallets installed...
      </h2>
    );
  }

  return (
    <>
      <h2 className='text-xl font-bold'>Connect a Wallet</h2>
      <h3 className='text-md'>Installed Wallets</h3>
      <ul className='flex flex-col gap-4'>
        {installedWallets.map((w) => (
          <li key={w.title}>
            <button
              type='button'
              onClick={() => connect(w.extensionName)}
              className='flex items-center w-full rounded-2xl text-white px-6 py-4 bg-blue-500 hover:bg-blue-600 transition duration-75'
            >
              <img className='w-12 mr-2' src={w.logo.src} alt={w.logo.alt} />
              Connect to {w.title}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
