// One-time image compression script — run with: node scripts/compress-images.js
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const imgDir = path.join(__dirname, '..', 'assets', 'images');

// Settings: hero gets more width, cards get 900px
const rules = [
  { file: 'hero.jpg',                       width: 1600, quality: 82 },
  { file: 'about-portrait.jpg',             width: 900,  quality: 82 },
  { file: 'projects/sae-suspension.jpg',    width: 900,  quality: 80 },
  { file: 'projects/sae-cockpit.jpg',       width: 900,  quality: 80 },
  { file: 'projects/kll-simulations.jpg',   width: 900,  quality: 80 },
  { file: 'projects/simeros.jpg',           width: 900,  quality: 80 },
  { file: 'projects/luthieria.jpg',         width: 900,  quality: 82 },
  { file: 'projects/luthieria-tele.jpg',    width: 900,  quality: 82 },
  { file: 'projects/luthieria-pyro.jpg',    width: 900,  quality: 82 },
  { file: 'projects/arte-astronaut.jpg',    width: 900,  quality: 82 },
  { file: 'projects/arte-portrait.jpg',     width: 900,  quality: 82 },
  { file: 'projects/arte-r2d2.jpg',         width: 900,  quality: 82 },
  { file: 'projects/rs-racing-cockpit.jpg', width: 900,  quality: 80 },
  { file: 'projects/rs-racing-team.jpg',    width: 900,  quality: 80 },
  { file: 'projects/rs-racing-car.jpg',     width: 900,  quality: 80 },
];

async function compress() {
  for (const { file, width, quality } of rules) {
    const fullPath = path.join(imgDir, file);
    const tmpPath  = fullPath + '.tmp';

    const before = fs.statSync(fullPath).size;
    await sharp(fullPath)
      .rotate()              // auto-rotate from EXIF
      .resize({ width, withoutEnlargement: true })
      .jpeg({ quality, mozjpeg: true })
      .toFile(tmpPath);

    fs.renameSync(tmpPath, fullPath);
    const after = fs.statSync(fullPath).size;
    const pct = Math.round((1 - after / before) * 100);
    console.log(`${file.padEnd(38)} ${Math.round(before/1024)}KB → ${Math.round(after/1024)}KB  (-${pct}%)`);
  }
  console.log('\nDone.');
}

compress().catch(console.error);
