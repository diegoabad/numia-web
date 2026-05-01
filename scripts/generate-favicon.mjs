import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const logo = path.join(root, "assets", "numia-logo.png");
const squarePng = path.join(root, ".tmp-favicon-square.png");

const buf = await sharp(logo)
  .resize(256, 256, {
    fit: "contain",
    background: { r: 255, g: 255, b: 255, alpha: 1 },
  })
  .png()
  .toBuffer();

await fs.promises.writeFile(squarePng, buf);
const ico = await pngToIco(squarePng);
await fs.promises.writeFile(path.join(root, "public", "favicon.ico"), ico);
await fs.promises.unlink(squarePng);
