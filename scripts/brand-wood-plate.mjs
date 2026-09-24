import path from "node:path";
import sharp from "sharp";

const assets = "C:\\Users\\negio\\.cursor\\projects\\c-Users-negio-OneDrive-Desktop-workspace\\assets";
const outDir = path.resolve(import.meta.dirname, "..", "public", "products");
const input = path.join(assets, "promo-1-wood-plate.png");

function badgeSvg(width, height) {
  const pad = Math.max(44, Math.round(Math.min(width, height) * 0.08));
  const bw = Math.min(400, Math.max(250, Math.round(width * 0.42)));
  const bh = Math.max(78, Math.round(bw * 0.34));
  const x = pad;
  const y = height - bh - pad;
  const stamp = Math.max(56, Math.round(width * 0.085));
  const sx = width - stamp - pad;
  const sy = pad;
  const titleSize = Math.round(bh * 0.3);
  const subSize = Math.round(bh * 0.16);
  const titleY = y + Math.round(bh * 0.48);
  const subY = y + Math.round(bh * 0.78);

  return Buffer.from(`<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect x="${x}" y="${y}" rx="10" width="${bw}" height="${bh}" fill="#76a713"/>
    <rect x="${x}" y="${y}" width="7" height="${bh}" fill="#ff7800"/>
    <text x="${x + 20}" y="${titleY}" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="${titleSize}">SATVIK WAY</text>
    <text x="${x + 20}" y="${subY}" fill="#eaf6c8" font-family="Arial, Helvetica, sans-serif" font-size="${subSize}">RISHIKESH CAFE SUPPLY</text>
    <circle cx="${sx + stamp / 2}" cy="${sy + stamp / 2}" r="${stamp / 2}" fill="#1a2428"/>
    <circle cx="${sx + stamp / 2}" cy="${sy + stamp / 2}" r="${stamp / 2 - 3}" fill="none" stroke="#76a713" stroke-width="3"/>
    <text x="${sx + stamp / 2}" y="${sy + stamp / 2 + Math.round(stamp * 0.12)}" text-anchor="middle" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="${Math.round(stamp * 0.28)}">SW</text>
  </svg>`);
}

async function brand(inputPath, output, w, h, mode) {
  let buffer;
  if (mode === "square") {
    const { width = w, height = h } = await sharp(inputPath).rotate().metadata();
    const edge = Math.min(width, height);
    const left = Math.round((width - edge) / 2);
    const top = Math.max(0, height - edge);
    buffer = await sharp(inputPath)
      .rotate()
      .modulate({ brightness: 1.05, saturation: 1.1 })
      .sharpen({ sigma: 0.8 })
      .extract({ left, top, width: edge, height: edge })
      .resize(w, h)
      .toBuffer();
  } else {
    buffer = await sharp(inputPath)
      .rotate()
      .modulate({ brightness: 1.05, saturation: 1.1 })
      .sharpen({ sigma: 0.8 })
      .resize(w, h, { fit: "cover", position: "attention" })
      .toBuffer();
  }

  await sharp(buffer)
    .composite([{ input: badgeSvg(w, h), top: 0, left: 0 }])
    .jpeg({ quality: 88 })
    .toFile(output);
  console.log("branded", path.basename(output));
}

await brand(input, path.join(outDir, "promo-1-wood.jpg"), 1200, 1500, "portrait");
await brand(input, path.join(outDir, "promo-1-wood-square.jpg"), 1400, 1400, "square");
