import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const sourceDir = path.resolve(root, "..", "food product");
const outDir = path.join(root, "public", "products");
const assets = "C:\\Users\\negio\\.cursor\\projects\\c-Users-negio-OneDrive-Desktop-workspace\\assets";

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

function lightEdit(pipeline) {
  return pipeline.rotate().modulate({ brightness: 1.05, saturation: 1.1 }).sharpen({ sigma: 0.8 });
}

async function brandBuffer(buffer, width, height, output) {
  await sharp(buffer)
    .composite([{ input: badgeSvg(width, height), top: 0, left: 0 }])
    .jpeg({ quality: 88 })
    .toFile(output);
  console.log("branded", path.basename(output));
}

/** Find the vertical white gutter in a collage and return the main left panel crop. */
async function mainPanelRegion(input) {
  const { data, info } = await sharp(input)
    .rotate()
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const startX = Math.round(width * 0.45);
  const endX = Math.round(width * 0.75);
  const stepY = Math.max(1, Math.floor(height / 120));
  const scores = [];

  for (let x = startX; x < endX; x++) {
    let white = 0;
    let samples = 0;
    for (let y = 0; y < height; y += stepY) {
      const idx = (y * width + x) * channels;
      if (data[idx] > 245 && data[idx + 1] > 245 && data[idx + 2] > 245) white++;
      samples++;
    }
    scores.push(white / samples);
  }

  // Collage gutters can be thin (6–12px) but nearly pure white
  let gutterStart = -1;
  let gutterEnd = -1;
  let run = 0;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > 0.7) {
      run++;
      if (run >= 4 && gutterStart < 0) gutterStart = startX + i - run + 1;
      gutterEnd = startX + i;
    } else if (gutterStart >= 0 && run >= 4) {
      break;
    } else {
      run = 0;
      gutterStart = -1;
      gutterEnd = -1;
    }
  }

  const fallback = Math.round(width * 0.56);
  const panelWidth =
    gutterStart > 0 ? Math.max(40, gutterStart - 4) : fallback;
  return {
    left: 0,
    top: 0,
    width: Math.min(panelWidth, width - 2),
    height,
    gutterEnd: gutterEnd > 0 ? gutterEnd + 2 : panelWidth + 8,
  };
}

async function fabricBackground(input, region) {
  const sample = await sharp(input)
    .rotate()
    .extract({
      left: region.left + 8,
      top: region.top + 8,
      width: Math.min(24, region.width - 16),
      height: Math.min(24, region.height - 16),
    })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  let r = 0;
  let g = 0;
  let b = 0;
  const n = sample.info.width * sample.info.height;
  for (let i = 0; i < sample.data.length; i += sample.info.channels) {
    r += sample.data[i];
    g += sample.data[i + 1];
    b += sample.data[i + 2];
  }
  return {
    r: Math.round(r / n),
    g: Math.round(g / n),
    b: Math.round(b / n),
    alpha: 1,
  };
}

async function collageThenBrand(input, output, w = 1200, h = 1500) {
  const { gutterEnd: _g, ...region } = await mainPanelRegion(input);
  // Full bleed — no letterbox borders / white frame lines
  const sized = await lightEdit(sharp(input))
    .extract(region)
    .resize(w, h, { fit: "cover", position: "centre" })
    .jpeg({ quality: 90 })
    .toBuffer();
  await brandBuffer(sized, w, h, output);
}

async function landscapeThenBrand(input, output, w = 1600, h = 1000) {
  const meta = await sharp(input).rotate().metadata();
  const width = meta.width || w;
  const height = meta.height || h;
  if (width / height > 1.15) {
    const { gutterEnd: _g, ...region } = await mainPanelRegion(input);
    const bg = await fabricBackground(input, region);
    const sized = await lightEdit(sharp(input))
      .extract(region)
      .resize(w, h, { fit: "contain", background: bg })
      .toBuffer();
    await brandBuffer(sized, w, h, output);
    return;
  }
  const sized = await lightEdit(sharp(input)).resize(w, h, { fit: "cover", position: "attention" }).toBuffer();
  await brandBuffer(sized, w, h, output);
}

async function portraitThenBrand(input, output, w = 1200, h = 1500) {
  const sized = await lightEdit(sharp(input)).resize(w, h, { fit: "cover", position: "attention" }).toBuffer();
  await brandBuffer(sized, w, h, output);
}

async function squareThenBrand(input, output, size = 1400) {
  const image = lightEdit(sharp(input));
  const { width = size, height = size } = await image.metadata();
  const edge = Math.min(width, height);
  const left = width > height * 1.15 ? 0 : Math.round((width - edge) / 2);
  const top = Math.round((height - edge) / 2);
  const square = await lightEdit(sharp(input))
    .extract({ left, top, width: edge, height: edge })
    .resize(size, size)
    .toBuffer();
  await brandBuffer(square, size, size, output);
}

/** After main panel, skip the white vertical gutter and return where the side column starts. */
async function sideColumnLeft(input, main) {
  if (main.gutterEnd && main.gutterEnd > main.width) {
    return Math.min((await sharp(input).rotate().metadata()).width - 2, main.gutterEnd);
  }
  const { data, info } = await sharp(input)
    .rotate()
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const startX = Math.min(width - 2, main.width);
  const stepY = Math.max(1, Math.floor(height / 80));

  let inWhite = false;
  for (let x = startX; x < width - 4; x++) {
    let white = 0;
    let samples = 0;
    for (let y = 0; y < height; y += stepY) {
      const idx = (y * width + x) * channels;
      if (data[idx] > 245 && data[idx + 1] > 245 && data[idx + 2] > 245) white++;
      samples++;
    }
    const ratio = white / samples;
    if (ratio > 0.7) inWhite = true;
    else if (inWhite && ratio < 0.5) return x + 2;
  }
  return Math.min(width - 2, main.width + 20);
}

/** Horizontal white strip between the two right panels. */
async function horizontalGutterY(input, left, width) {
  const { data, info } = await sharp(input)
    .rotate()
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { height, channels } = info;
  const startY = Math.round(height * 0.4);
  const endY = Math.round(height * 0.6);
  const stepX = Math.max(1, Math.floor(width / 40));
  let bestY = Math.round(height / 2);
  let bestScore = 0;

  for (let y = startY; y < endY; y++) {
    let white = 0;
    let samples = 0;
    for (let x = left; x < left + width; x += stepX) {
      const idx = (y * info.width + x) * channels;
      if (data[idx] > 248 && data[idx + 1] > 248 && data[idx + 2] > 248) white++;
      samples++;
    }
    const score = white / samples;
    if (score > bestScore) {
      bestScore = score;
      bestY = y;
    }
  }
  return bestY;
}

/** Split collage into main + two side panels (skip white gutters). */
async function threePanelRegions(input) {
  const main = await mainPanelRegion(input);
  const meta = await sharp(input).rotate().metadata();
  const width = meta.width || 1000;
  const height = meta.height || 1000;
  const rightLeft = await sideColumnLeft(input, main);
  const rightWidth = Math.max(80, width - rightLeft);
  const midY = await horizontalGutterY(input, rightLeft, rightWidth);
  const gap = 10;
  const { gutterEnd: _gutterEnd, ...mainRegion } = main;
  return {
    main: mainRegion,
    topRight: { left: rightLeft, top: 0, width: rightWidth, height: Math.max(40, midY - gap) },
    bottomRight: {
      left: rightLeft,
      top: Math.min(height - 40, midY + gap),
      width: rightWidth,
      height: Math.max(40, height - midY - gap),
    },
  };
}

async function extractPanel(input, region, w, h) {
  // Edge-to-edge cover — no beige borders, no white frame lines
  return lightEdit(sharp(input))
    .extract(region)
    .resize(w, h, { fit: "cover", position: "centre" })
    .jpeg({ quality: 90 })
    .toBuffer();
}

async function threeShotCollage(input, output, outW = 1400, outH = 1400) {
  const panels = await threePanelRegions(input);
  // No gap — seamless collage, no white divider lines
  const gap = 0;
  const mainW = Math.round(outW * 0.62);
  const sideW = outW - mainW - gap;
  const sideH = Math.round((outH - gap) / 2);

  const mainBuf = await extractPanel(input, panels.main, mainW, outH);
  const topBuf = await extractPanel(input, panels.topRight, sideW, sideH);
  const botBuf = await extractPanel(input, panels.bottomRight, sideW, sideH);

  const base = await sharp({
    create: { width: outW, height: outH, channels: 3, background: { r: 40, g: 36, b: 32 } },
  })
    .composite([
      { input: mainBuf, left: 0, top: 0 },
      { input: topBuf, left: mainW + gap, top: 0 },
      { input: botBuf, left: mainW + gap, top: sideH + gap },
    ])
    .jpeg({ quality: 90 })
    .toBuffer();

  await brandBuffer(base, outW, outH, output);
}

async function saveThreeAngles(input, prefix) {
  const panels = await threePanelRegions(input);
  const size = 1200;
  const jobs = [
    [panels.main, `${prefix}-1.jpg`, size, size],
    [panels.topRight, `${prefix}-2.jpg`, size, size],
    [panels.bottomRight, `${prefix}-3.jpg`, size, size],
  ];
  for (const [region, name, w, h] of jobs) {
    const buf = await extractPanel(input, region, w, h);
    await brandBuffer(buf, w, h, path.join(outDir, name));
  }
}

await mkdir(outDir, { recursive: true });

await threeShotCollage(path.join(sourceDir, "IMG_4188.PNG"), path.join(outDir, "soy-trio.jpg"));
await threeShotCollage(path.join(sourceDir, "IMG_4189.PNG"), path.join(outDir, "cafe-trio.jpg"));
await saveThreeAngles(path.join(sourceDir, "IMG_4188.PNG"), "soy");
await saveThreeAngles(path.join(sourceDir, "IMG_4189.PNG"), "cafe");

await collageThenBrand(path.join(sourceDir, "IMG_4188.PNG"), path.join(outDir, "soy-pack.jpg"));
await collageThenBrand(path.join(sourceDir, "IMG_4189.PNG"), path.join(outDir, "cafe-pack.jpg"));
await collageThenBrand(path.join(sourceDir, "IMG_4188.PNG"), path.join(outDir, "soy-full.jpg"));
await collageThenBrand(path.join(sourceDir, "IMG_4189.PNG"), path.join(outDir, "cafe-full.jpg"));
await collageThenBrand(path.join(sourceDir, "IMG_4188.PNG"), path.join(outDir, "soy-tempeh-cubes.jpg"));
await collageThenBrand(path.join(sourceDir, "IMG_4189.PNG"), path.join(outDir, "cafe-tempeh-lot.jpg"));
await portraitThenBrand(path.join(assets, "promo-1-wood-plate.png"), path.join(outDir, "promo-1-wood.jpg"));
await portraitThenBrand(path.join(assets, "promo-2-studio.png"), path.join(outDir, "promo-2-studio.jpg"));
await portraitThenBrand(path.join(assets, "promo-3-studio.png"), path.join(outDir, "promo-3-studio.jpg"));
await landscapeThenBrand(
  path.join(sourceDir, "WhatsApp Image 2026-09-24 at 2.44.31 AM.jpeg"),
  path.join(outDir, "tempeh-zip-bag.jpg"),
);

{
  const input = path.join(assets, "promo-1-wood-plate.png");
  const size = 1400;
  await squareThenBrand(input, path.join(outDir, "promo-1-wood-square.jpg"), size);
}

await landscapeThenBrand(path.join(sourceDir, "IMG_4189.PNG"), path.join(outDir, "tempeh-studio-dark.jpg"));
await landscapeThenBrand(
  path.join(sourceDir, "WhatsApp Image 2026-09-24 at 2.44.31 AM.jpeg"),
  path.join(outDir, "tempeh-studio-light.jpg"),
);
