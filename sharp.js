const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
 
const target = path.resolve(__dirname, 'src/public/images');
const destination = path.resolve(__dirname, 'dist/images');
 
if (!fs.existsSync(destination)) {
fs.mkdirSync(destination);
}
 
fs.readdirSync(target).forEach(image => {
  // mengubah ukuran gambar dengan lebar 900px, dengan prefix -large.jpg
  sharp(`${target}/${image}`)
    .resize(900)
    .jpeg({ quality: 50 })
    .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
      .slice(0, -1)
      .join('.')}-large.jpg`));
 
  // mengubah ukuran gambar dengan lebar 480px, dengan prefix -small.jpg
  sharp(`${target}/${image}`)
    .resize(768)
    .jpeg({ quality: 50 })
    .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
      .slice(0, -1)
      .join('.')}-small.jpg`));
  
  // mengubah ukuran gambar dengan lebar 1200px, dengan prefix -xl.jpg
  sharp(`${target}/${image}`)
    .resize(1400)
    .jpeg({ quality: 50 })
    .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
      .slice(0, -1)
      .join('.')}-xl.jpg`));
});