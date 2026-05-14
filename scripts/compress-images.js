const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const BASE = 'C:\\Users\\Carol\\Downloads\\backup portfolio';
const DEST = 'C:\\Users\\Carol\\Projects\\portfolio\\assets\\images\\projects';

function getFiles(folder) {
  return fs.readdirSync(folder)
    .filter(f => /\.(jpg|jpeg|png)$/i.test(f))
    .sort((a, b) => {
      const na = parseInt(path.basename(a, path.extname(a)));
      const nb = parseInt(path.basename(b, path.extname(b)));
      return na - nb;
    });
}

async function processImage(src, destPath, maxDim, quality) {
  if (maxDim === undefined) maxDim = 1400;
  if (quality === undefined) quality = 82;
  await sharp(src)
    .rotate()
    .resize({ width: maxDim, height: maxDim, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: quality, mozjpeg: true })
    .toFile(destPath);
  var kb = (fs.statSync(destPath).size / 1024).toFixed(0);
  console.log('  ' + path.basename(destPath) + ' -- ' + kb + ' KB');
}

async function main() {
  var categories = [
    { folder: '1 - Product Cases',                     prefix: 'pc',       cover: true },
    { folder: '2 - Modeling and Structural Simulation', prefix: 'mod',      cover: true },
    { folder: '3 - Motorsport',                        prefix: 'moto',     cover: false },
    { folder: '4 - Luthiery',                          prefix: 'luth',     cover: false },
    { folder: '5 - Drawing',                           prefix: 'draw',     cover: false },
    { folder: '6 - Explorer',                          prefix: 'explorer', cover: true },
  ];

  for (var c = 0; c < categories.length; c++) {
    var cat = categories[c];
    var folder = path.join(BASE, cat.folder);
    var files = getFiles(folder);
    console.log('\n' + cat.folder + ' (' + files.length + ' files)');

    if (cat.cover) {
      await processImage(path.join(folder, files[0]), path.join(DEST, cat.prefix + '-cover.jpg'), 1000);
    }

    for (var i = 0; i < files.length; i++) {
      await processImage(path.join(folder, files[i]), path.join(DEST, cat.prefix + '-' + (i + 1) + '.jpg'));
    }
  }

  console.log('\nDone.');
}

main().catch(function(err) { console.error(err); process.exit(1); });
