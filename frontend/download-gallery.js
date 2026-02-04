const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
  { url: "https://loremflickr.com/800/600/nails,manicure/all?lock=1", name: "nail1.jpg" },
  { url: "https://loremflickr.com/800/600/nails,art/all?lock=2", name: "nail2.jpg" },
  { url: "https://loremflickr.com/800/600/manicure,luxury/all?lock=3", name: "nail3.jpg" },
  { url: "https://loremflickr.com/800/600/nailpolish,fashion/all?lock=4", name: "nail4.jpg" },
  { url: "https://loremflickr.com/800/600/nails,beauty/all?lock=5", name: "nail5.jpg" },
  { url: "https://loremflickr.com/800/600/hand,jewelry/all?lock=6", name: "nail6.jpg" },
  { url: "https://loremflickr.com/800/600/nails,glitter/all?lock=7", name: "nail7.jpg" },
  { url: "https://loremflickr.com/800/600/manicure,spa/all?lock=8", name: "nail8.jpg" }
];

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      // Handle redirects (LoremFlickr redirects to the actual image)
      if (res.statusCode === 302 || res.statusCode === 301 || res.statusCode === 307) {
        console.log(`Redirecting for ${path.basename(filepath)}...`);
        downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
        return;
      }
      
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download: Status Code ${res.statusCode}`));
        return;
      }

      const stream = fs.createWriteStream(filepath);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        console.log(`Downloaded ${filepath}`);
        resolve();
      });
      stream.on('error', reject);
    }).on('error', reject);
  });
};

async function downloadAll() {
  console.log('Starting download...');
  for (const img of images) {
    try {
      const dest = path.join(__dirname, 'public', 'assets', 'gallery', img.name);
      // Delete if exists to ensure clean download
      if (fs.existsSync(dest)) {
        fs.unlinkSync(dest);
      }
      await downloadImage(img.url, dest);
    } catch (e) {
      console.error(`Failed to download ${img.name}:`, e.message);
    }
  }
  console.log('Download complete.');
}

downloadAll();