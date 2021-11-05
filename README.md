# unplugin-svgr

[![NPM package](https://img.shields.io/npm/v/unplugin-svgr)](https://www.npmjs.com/package/unplugin-svgr)
[![LICENSE - MIT](https://img.shields.io/github/license/daangn/unplugin-svgr)](#LICENSE)

[unplugin](https://github.com/unjs/unplugin) - Unified bundler plugin for [SVGR](https://react-svgr.com/)

## Installation

```bash
yarn add -D unplugin-svgr
```

## Usage

### Vite

```ts
// vite.config.ts
import svgr from 'unplugin-svgr';

export default {
  plugins: [
    svgr.vitePlugin({ /* options */ }),
  ],
};
```

### Rollup

```js
// rollup.config.js
import svgr from 'unplugin-svgr';

export default {
  plugins: [
    svgr.rollupPlugin({ /* options */ }),
  ],
};
```

### Webpack

```js
// webpack.config.js
module.exports = {
  plugins: [
    require('unplugin-svgr').webpackPlugin({ /* options */ }),
  ],
};
```

## LICENSE

MIT
