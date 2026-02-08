import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = './public';
const outputDir = './public/optimized';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Get all image files
const files = fs.readdirSync(publicDir).filter(file =>
    /\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i.test(file)
);

console.log(`Found ${files.length} images to optimize...`);

let processed = 0;

for (const file of files) {
    const inputPath = path.join(publicDir, file);
    const outputName = file.replace(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i, '.webp');
    const outputPath = path.join(outputDir, outputName);

    try {
        await sharp(inputPath)
            .resize(1920, 1080, {
                fit: 'inside',
                withoutEnlargement: true
            })
            .webp({ quality: 80 })
            .toFile(outputPath);

        const originalSize = fs.statSync(inputPath).size;
        const newSize = fs.statSync(outputPath).size;
        const savings = ((1 - newSize / originalSize) * 100).toFixed(1);

        processed++;
        console.log(`[${processed}/${files.length}] ${file} → ${outputName} (${savings}% smaller)`);
    } catch (err) {
        console.error(`Error processing ${file}:`, err.message);
    }
}

console.log(`\nDone! Optimized ${processed} images.`);
console.log(`Images saved to: ${outputDir}`);
