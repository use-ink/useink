import { build } from '../deps/dnt.ts';
import * as fs from '../deps/std/fs.ts';
import * as path from '../deps/std/path.ts';

const outDir = path.join('target', 'npm');

await fs.emptyDir(outDir);

await Promise.all([
  build({
    entryPoints: [
      'mod.ts',
      {
        name: './core',
        path: 'core/mod.ts',
      },
      {
        name: './chains',
        path: 'chains/mod.ts',
      },
      {
        name: './notifications',
        path: 'notifications/mod.ts',
      },
      {
        name: './utils',
        path: 'utils/mod.ts',
      },
    ],
    outDir,
    importMap: 'import_map.json',
    mappings: {
      'https://cdn.skypack.dev/react?dts': {
        name: 'react',
        version: '^18.0.0',
        peerDependency: true,
      },
    },
    package: {
      name: 'useink',
      version: Deno.args[0]!,
      description:
        'A React hooks library for Substrate and Wasm contracts on Substrate',
      license: 'Apache-2.0',
      repository: 'github:paritytech/useink',
      keywords: [
        'useink',
        'ink!',
        'Polkadot',
        'Kusama',
        'Substrate',
        'AlephZero',
        'Astar',
        'Phala',
        'React',
        'hooks',
      ],
    },
    compilerOptions: {
      lib: ['dom', 'esnext'],
      importHelpers: true,
      sourceMap: true,
      target: 'ES2021',
    },
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
