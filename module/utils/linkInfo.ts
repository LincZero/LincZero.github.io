/**
 * @description 修改：文件名使用文件名而非其他名
 */

import { ensureEndingSlash, isLinkAbsolute } from "@vuepress/helper/client";
import { resolveRoute } from "vuepress/client";

// x import type { ArticleInfo, AutoLinkOptions } from "../../shared/index.js";
// v import { ArticleInfoType } from "../../shared/index.js";
import { ArticleInfoType } from "vuepress-theme-hope/client/../shared/index.js";

export const resolvePrefix = (prefix = "", path = ""): string =>
  isLinkAbsolute(path) ? path : `${ensureEndingSlash(prefix)}${path}`;

const getLastPartOfPath = (path: string) : String => {
  path = decodeURIComponent(path);

  const lastSlashIndex = path.lastIndexOf("/");
  if (lastSlashIndex != -1) path = path.substring(lastSlashIndex + 1);
  
  if (path.endsWith(".html")) path = path.slice(0, -5);
  
  return path;
}

/**
 * Resolve AutoLink props from string
 *
 */
export const resolveLinkInfo = (
  item: string,
  preferFull = false,
): AutoLinkOptions => {
  const { meta, path, notFound } = resolveRoute<ArticleInfo>(item);

  return notFound
    ? { text: path, link: path }
    : {
        text:
          !preferFull && meta[ArticleInfoType.shortTitle]
            ? meta[ArticleInfoType.shortTitle]
            : getLastPartOfPath(item) || meta[ArticleInfoType.title] || path,
        link: path,
        ...(meta[ArticleInfoType.icon]
          ? { icon: meta[ArticleInfoType.icon] }
          : {}),
      };
};
