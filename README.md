<div align="center" style="margin-bottom: 24px;">
  <img src="./useink-logo.svg" alt="ink!" height="136" />
</div>

[![Element][k1]][k2] [![stack-exchange][s1]][s2]

[k1]: https://img.shields.io/badge/matrix-chat-brightgreen.svg?style=flat
[k2]: https://matrix.to/#/#useink:parity.io
[s1]: https://img.shields.io/badge/click-white.svg?logo=StackExchange&label=useink%20Support%20on%20StackExchange&labelColor=white&color=blue
[s2]: https://substrate.stackexchange.com/questions/tagged/useink?tab=Votes

`useink` is a React hooks library for Substrate and Wasm contracts on Substrate

## Getting Started

1. Wrap your application in the `UseInkProvider`. The field `dappName` will show
   up in browser wallet extensions when a user is prompted to authorize a
   connection.

```ts
import { UseInkProvider } from 'useink';
import { ContractsRococo } from 'useink/chains';

root.render(
  <UseInkProvider
    config={{
      dappName: 'My Dapp',
      chains: [ContractsRococo],
    }}
  >
    {children}
  </UseInkProvider>,
);
```

2. Connecting a wallet - `useink` provides a hook called `useWallet`. Once a
   wallet is connected the account is stored in local storage so that if the
   page refreshes the Dapp will auto connect. You can turn this feature off by
   passing in `{ wallet: { skipAutoConnect: true } }` to the config in
   `UseInkProvider`.

```tsx
import { useWallet } from 'useink';

export const Connector = () => {
  const { account, connect, disconnect, getWallets } = useWallet();
  const wallets = useMemo(() => getWallets(), []);

  if (!account) {
    return (
      <ul>
        {wallets.map((w) => (
          <li key={w.title}>
            <button onClick={() => connect(w.extensionName)}>
              <img src={w.logo.src} alt={w.logo.alt} />
              Connect to {w.title}
            </button>
          </li>
        ))}
      </ul>
    )
  }

  return {
    <button onClick={disconnect}>Disconnect</button>;
  }
};
```

There are more features inside of `useWallet` and many more hooks in `useink`.

You can find examples and patterns here:

- [useink Kitchen Sink](https://github.com/paritytech/useink-kitchen-sink)
- [Link - A URL shortener built with ink!](https://github.com/paritytech/link).

## Code of Conduct

Everyone interacting in this repo is expected to follow the
[code of conduct](CODE_OF_CONDUCT.md).

## Contributing

Contributions are welcome and appreciated! Check out the
[contributing guide](CONTRIBUTING.md) before you dive in.

## License

useInk! is [Apache licensed](LICENSE).
