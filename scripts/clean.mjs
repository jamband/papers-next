import { rm } from "node:fs/promises";

await rm(".next", { recursive: true, force: true });
await rm("node_modules", { recursive: true, force: true });
await rm("tsconfig.tsbuildinfo", { recursive: true, force: true });
