import Router from "next/router";
import urls from "./urls.json";
import config from "../config";
import getConfig from "next/config";
import fetch from "isomorphic-fetch";

export function routerPush(href, query = "") {
  const url = buildUrl(href);

  Router.push(url.href + query, url.as + query);
}

export function buildUrl(href) {
  const splitHref = href.split("/");

  if (splitHref.length > 2) {
    for (let index in urls) {
      if (index.indexOf("/" + splitHref[1]) > -1) {
        let asHref = urls[index];
        let tmpUrl = href.replace("/" + splitHref[1], "");

        return {
          href: asHref + tmpUrl,
          as: href
        };
      }
    }
  }

  return {
    href: urls[href],
    as: href
  };
}
