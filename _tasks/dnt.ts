import { build } from '../deps/dnt.ts';
import * as fs from '../deps/std/fs.ts';
import * as path from '../deps/std/path.ts';

const outDir = path.join('target', 'npm');

await fs.emptyDir(outDir);

await Promise.all([
  build({
    entryPoints: ['mod.ts'],
    outDir,
    mappings: {},
    package: {
      name: 'useink',
      version: Deno.args[0]!,
      description:
        'A React hooks library for Substrate and Wasm contracts on Substrate',
      license: 'Apache-2.0',
      repository: 'github:paritytech/useink',
      dependencies: {
        '@polkadot/api': '^9.14.1',
        '@polkadot/api-derive': '^9.14.1',
        '@polkadot/extension-dapp': '^0.44.8',
        '@polkadot/extension-inject': '^0.44.8',
        '@polkadot/api-contract': '^9.14.1',
        '@polkadot/types': '^9.14.1',
      },
      peerDependency: {
        'react': '^18.2.0',
        'react-dom': '^18.2.0',
      },
    },
    compilerOptions: {
      lib: ['dom', 'esnext'],
      importHelpers: true,
      sourceMap: true,
      target: 'ES2021',
    },
    scriptModule: false,
    shims: {
      deno: {
        test: true,
      },
      webSocket: true,
    },
    test: false,
    typeCheck: false,
  }),
  fs.copy('LICENSE', path.join(outDir, 'LICENSE')),
  fs.copy('README.md', path.join(outDir, 'README.md')),
]);
