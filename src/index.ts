import * as fs from 'fs/promises';
import { createUnplugin } from 'unplugin';
import convert from '@svgr/core';
import type { Static } from 'runtypes';
import { Optional, Boolean, String, Record, Dictionary } from 'runtypes';
import svgo from '@svgr/plugin-svgo';
import jsx from '@svgr/plugin-jsx';

const optionsSchema = Record({
  native: Optional(Boolean),
  icon: Optional(Boolean),
  svgProps: Optional(Dictionary(String)),
  replaceAttrValues: Optional(Dictionary(String)),
});

type Options = Static<typeof optionsSchema>;

export const unplugin = createUnplugin(options => {
  const pluginOptions = optionsSchema.check(options);
  return {
    name: 'unplugin-svgr',
    transformInclude(id) {
      return id.endsWith('.svg');
    },
    async transform(data, id) {
      const load = await fs.readFile(id, 'utf8');

      const exportMatches =
        data.match(/^module.exports\s*=\s*(.*)/) ||
        data.match(/export\sdefault\s(.*)/);

      const previousExport = exportMatches ? data : null;

      const jsCode = await convert(load, pluginOptions, {
        filePath: id,
        caller: {
          name: 'unplugin-svgr',
          previousExport,
          defaultPlugins: [svgo, jsx],
        },
      });

      return {
        code: jsCode,
      };
    },
  };
});

export const vitePlugin = unplugin.vite;
export const rollupPlugin = unplugin.rollup;
export const webpackPlugin = unplugin.webpack;
