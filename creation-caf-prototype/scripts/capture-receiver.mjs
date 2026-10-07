import { createServer } from "node:http";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = join(process.cwd(), "qa");
mkdirSync(outputDir, { recursive: true });

const server = createServer((request, response) => {
  if (request.method !== "POST") {
    response.writeHead(405).end("POST only");
    return;
  }

  const names = {
    "/mobile": "implementation-mobile.png",
    "/english-desktop": "english-home-desktop.png",
    "/english-mobile": "english-home-mobile.png",
    "/services-responsive": "english-services-responsive.png",
    "/about-team-responsive": "english-about-team-responsive.png",
  };
  const safeName = names[request.url] || "implementation-desktop.png";
  const chunks = [];
  request.on("data", (chunk) => chunks.push(chunk));
  request.on("end", () => {
    writeFileSync(join(outputDir, safeName), Buffer.concat(chunks));
    response.writeHead(200, { "Access-Control-Allow-Origin": "*" }).end(safeName);
  });
});

server.listen(4199, "127.0.0.1", () => {
  console.log("Capture receiver ready on http://127.0.0.1:4199");
});
