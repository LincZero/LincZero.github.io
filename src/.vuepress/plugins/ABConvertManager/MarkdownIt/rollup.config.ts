// take from: https://github.com/mdit-plugins/mdit-plugins/blob/main/scripts/rollup.ts

import alias from '@rollup/plugin-alias' // [+code] rollup不走tsconfig.json的paths别名，得自己处理别名
import path from 'path'

import { basename } from "node:path";
import { cwd } from "node:process";

// 这个codecov是用于代码覆盖率统计，还需要TOKEN，我不需要，注释掉了
// import { codecovRollupPlugin } from "@codecov/rollup-plugin";
import type { RollupOptions } from "rollup";
import { defineConfig } from "rollup";
import { dts } from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";

const isProduction = process.env.NODE_ENV === "production";

export interface RollupTypescriptOptions {
  dts?: boolean;
  external?: (RegExp | string)[];
  dtsExternal?: (RegExp | string)[];
  resolve?: boolean;
  output?: Record<string, unknown>;
  inlineDynamicImports?: boolean;
}

export const rollupTypescript = (
  {
    dts: enableDts = true,
    external = [],
    dtsExternal = [],
    output = {},
    inlineDynamicImports = false,
  }: RollupTypescriptOptions = {},
): RollupOptions[] =>
  defineConfig([
    {
      input: `./index.ts`,
      output: [
        {
          file: `./lib/index.js`,
          format: "esm",
          sourcemap: true,
          exports: "named",
          inlineDynamicImports,
          ...output,
        },
      ],
      plugins: [
        esbuild({ charset: "utf8", minify: isProduction, target: "node20" }),
        // process.env.CODECOV_TOKEN
        //   ? [
        //       codecovRollupPlugin({
        //         enableBundleAnalysis: true,
        //         bundleName: basename(cwd()),
        //         uploadToken: process.env.CODECOV_TOKEN,
        //       }),
        //     ]
        //   : [],
        // alias({
        //   entries: [
        //     { 
        //       find: '@',
        //       replacement: path.resolve(__dirname, '../../src') // 根据实际路径调整
        //     }
        //   ]
        // }),
      ],
      // external: [/^markdown-it/, ...external],  // 原来这里排除以 markdown-it 开头的依赖
      treeshake: {
        preset: "smallest",
      },
    },
    ...(enableDts
      ? [
          defineConfig({
            input: `./index.ts`,
            output: [{ file: `./lib/index.d.ts`, format: "esm" }],
            plugins: [
              dts({
                compilerOptions: {
                  preserveSymlinks: false,
                },
              }),
            ],
            external: dtsExternal,
            treeshake: {
              preset: "smallest",
            },
          }),
        ]
      : []),
  ]);

export default rollupTypescript();
