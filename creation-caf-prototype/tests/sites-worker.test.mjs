import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";
import worker from "../worker/index.js";

test("serves existing static assets without a fallback", async () => {
  const calls = [];
  const response = await worker.fetch(new Request("https://example.test/assets/app.js"), {
    ASSETS: {
      fetch: async (request) => {
        calls.push(new URL(request.url).pathname);
        return new Response("asset", { status: 200 });
      },
    },
  });

  assert.equal(response.status, 200);
  assert.deepEqual(calls, ["/assets/app.js"]);
});

test("falls back to index.html for an unknown app route", async () => {
  const calls = [];
  const response = await worker.fetch(
    new Request("https://example.test/flow/step-two?source=share", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async (request) => {
          const url = new URL(request.url);
          calls.push(url.pathname + url.search);
          return new Response(url.pathname === "/index.html" ? "app" : "missing", {
            status: url.pathname === "/index.html" ? 200 : 404,
          });
        },
      },
    },
  );

  assert.equal(response.status, 200);
  assert.deepEqual(calls, ["/flow/step-two?source=share", "/index.html"]);
});

test("does not turn missing API or write requests into the app shell", async () => {
  for (const request of [
    new Request("https://example.test/api/missing", { headers: { accept: "application/json" } }),
    new Request("https://example.test/flow", { method: "POST", headers: { accept: "text/html" } }),
  ]) {
    let calls = 0;
    const response = await worker.fetch(request, {
      ASSETS: {
        fetch: async () => {
          calls += 1;
          return new Response("missing", { status: 404 });
        },
      },
    });

    assert.equal(response.status, 404);
    assert.equal(calls, 1);
  }
});

test("emits the files required by Sites packaging", async () => {
  await access(new URL("../dist/client/index.html", import.meta.url));
  await access(new URL("../dist/server/index.js", import.meta.url));
  await access(new URL("../dist/.openai/hosting.json", import.meta.url));
});

test("emits indexable English SEO entry pages", async () => {
  const entries = [
    ["en/index.html", "Business Services in Morocco"],
    ["en/company-formation-morocco/index.html", "Company Formation in Morocco"],
    ["en/accounting-tax-morocco/index.html", "Accounting and Tax Services in Morocco"],
    ["en/tax-advisory-morocco/index.html", "Tax Advisory in Morocco"],
    ["en/audit-accounting-morocco/index.html", "Audit and Accounting in Morocco"],
    ["en/legal-payroll-morocco/index.html", "Legal, Payroll and HR in Morocco"],
    ["en/market-entry-morocco/index.html", "Morocco Market Entry Advisory"],
    ["en/services/index.html", "Accounting, Tax, Audit and Advisory Services"],
    ["en/invest-in-morocco-cfc/index.html", "Invest in Morocco and CFC Status"],
    ["en/about/index.html", "About CAF Management"],
    ["en/contact/index.html", "Contact CAF Management"],
  ];

  for (const [relativePath, expectedTitle] of entries) {
    const html = await readFile(new URL(`../dist/client/${relativePath}`, import.meta.url), "utf8");
    assert.match(html, new RegExp(`<title>${expectedTitle}`));
    assert.match(html, /<html lang="en">/);
    assert.match(html, /<link rel="canonical" href="https:\/\/www\.caf\.ma\/en/);
  }

  await access(new URL("../dist/client/sitemap.xml", import.meta.url));
  await access(new URL("../dist/client/robots.txt", import.meta.url));
});
