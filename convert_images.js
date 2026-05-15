import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';

const baseDir = '/Users/dan/jordiee';

async function convertImage(inputPath) {
    try {
        const ext = path.extname(inputPath).toLowerCase();
        if (!['.png', '.jpg', '.jpeg'].includes(ext)) return;

        const outputPath = inputPath.replace(/\.[^/.]+$/, '.webp');
        const backupPath = inputPath + '.bak';

        // Get original size
        const originalStats = fs.statSync(inputPath);
        const originalSizeKb = Math.round(originalStats.size / 1024);

        // Create backup
        fs.copyFileSync(inputPath, backupPath);

        // Convert to WebP
        await sharp(inputPath)
            .webp({ quality: 75 })
            .toFile(outputPath);

        // Get new size
        const newStats = fs.statSync(outputPath);
        const newSizeKb = Math.round(newStats.size / 1024);
        const savingPct = Math.round((originalSizeKb - newSizeKb) * 100 / originalSizeKb);
        const status = newSizeKb <= 200 ? '✓' : '⚠';

        const relPath = inputPath.replace(baseDir + '/', '');
        console.log(`${status} ${relPath}: ${originalSizeKb}KB → ${newSizeKb}KB (saved ${savingPct}%)`);

    } catch (err) {
        console.error(`✗ Failed to convert: ${inputPath}`, err.message);
    }
}

async function main() {
    console.log('Starting image conversion to WebP format...');
    console.log('=========================================\n');

    // Find all image files
    const patterns = [
        `${baseDir}/src/assets/**/*.png`,
        `${baseDir}/src/assets/**/*.jpg`,
        `${baseDir}/src/assets/**/*.jpeg`,
        `${baseDir}/public/**/*.png`,
        `${baseDir}/public/**/*.jpg`,
        `${baseDir}/public/**/*.jpeg`
    ];

    const files = [];
    for (const pattern of patterns) {
        const matches = globSync(pattern, { nocase: true });
        files.push(...matches);
    }

    for (const file of files) {
        await convertImage(file);
    }

    console.log('\nConversion complete!');
}

main().catch(console.error);
