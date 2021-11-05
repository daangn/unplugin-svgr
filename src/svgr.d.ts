declare module '@svgr/core' {
  export interface Config {
    ref?: boolean
    titleProp?: boolean
    expandProps?: boolean | 'start' | 'end'
    dimensions?: boolean
    icon?: boolean
    native?: boolean
    namedExport?: string,
    exportType?: string,
    svgProps?: {
      [key: string]: string
    }
    replaceAttrValues?: {
      [key: string]: string
    }
  }

  export interface Plugin {
    (code: string, config: Config, state: State): string
  }

  export type ConfigPlugin = string | Plugin

  export interface State {
    filePath?: string
    componentName: string
    caller?: {
      name?: string
      previousExport?: string | null
      defaultPlugins?: ConfigPlugin[]
    }
  }

  export default function convert(
    code: string,
    config: Config,
    state?: Partial<State>,
  ): Promise<string>;
}

declare module '@svgr/plugin-svgo' {
  import type { ConfigPlugin } from '@svgr/core';

  const plugin: ConfigPlugin;
  export default plugin;
}

declare module '@svgr/plugin-jsx' {
  import type { ConfigPlugin } from '@svgr/core';

  const plugin: ConfigPlugin;
  export default plugin;
}
