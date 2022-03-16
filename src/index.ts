/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import pLimit from "../p-limit";
import endpoints from "../endpoints";

export default {
  async fetch(request: Request): Promise<Response> {
    // const start = Date.now();
    // const res = await fetch("http://season-gravel-flute.glitch.me", request);
    // const end = Date.now();
    // console.log(`ws handshake duration: ${end - start}ms`);
    // // res.headers.set("x-bbaa", "eeww");

    // console.log(res.webSocket);
    // return res;

    const url = new URL(request.url);
    const vendor = url.searchParams.get("vendor");

    if (!vendor) {
      return new Response("No vendor specified");
    }

    const eps: { name: string; url: string; fixed?: boolean }[] = [];
    for (const [k, v] of Object.entries(endpoints)) {
      if (k.startsWith(vendor)) {
        eps.push({ name: k, url: v.url });
      }
    }

    if (!eps.length) {
      return new Response("No endpoints found");
    }

    const limit = pLimit(6);

    const tasks = eps.map((endpoint) => {
      return limit(async () => {
        let target = endpoint.url;
        if (!target.startsWith("http")) {
          target = "https:" + target;
        }

        const start = Date.now();
        await fetch(target, request);
        const end = Date.now();
        return `<div style="width: 300px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; line-height: 32px;">
        <div>${endpoint.name}</div>
        <div>${end - start} ms</div>
      </div>`;
      });
    });

    const result = await Promise.all(tasks);

    const text = `<html><body>
      <h3>COLO: ${request.cf?.colo}</h3>
      <h3>IP: ${request.headers.get("x-real-ip")}</h3>
      <h3>COUNTRY: ${request.cf?.country}</h3>
      <h3>CITY: ${request.cf?.city}</h3>
      <h3>REGION: ${request.cf?.region}</h3>
      ${result.join("")}

      <div>v1.0.1</div>
    </body></html>`;

    return new Response(text, {
      headers: {
        "content-type": "text/html",
      },
    });
  },
};
