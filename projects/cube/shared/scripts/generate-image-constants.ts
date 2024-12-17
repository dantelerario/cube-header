import * as fs from 'fs';
import * as path from 'path';

// Directory contenente le immagini
const PROJECT_ROOT: string = process.cwd();
const IMAGE_DIR: string = path.join(PROJECT_ROOT,'projects','cube','shared','src','assets','images');
const OUTPUT_FILE: string = path.join(PROJECT_ROOT,'projects','cube','shared','src','lib','constants','image-constants.ts');


/***
 * npm run generate-images
 * questo comando fa partire lo script che genere in base64 le immagini nel file delle constants image-constants.ts, 
 * prima di lanciarlo in console, cancellare il file delle immagini in base64 ed assicurarsi che in assets\images ci siano
 * tutte le immagini da convertire.
 */
function generateImageConstants(): void {
    try {
        if (!fs.existsSync(IMAGE_DIR)) {
            console.error(`Directory ${IMAGE_DIR} non trovata`);
            return;
        }

        const files: string[] = fs.readdirSync(IMAGE_DIR);
        console.log('Files trovati:',files);

        let fileContent: string = `// File generato automaticamente
export const IMAGES = {
`;

        files.forEach((file: string) => {
            if (file.match(/\.(png|jpg|jpeg|svg)$/i)) {
                const filePath: string = path.join(IMAGE_DIR,file);
                const imageBuffer: Buffer = fs.readFileSync(filePath);
                const base64: string = imageBuffer.toString('base64');
                const extension: string = path.extname(file).toLowerCase();
                const mimeType: string = extension === '.svg' ? 'image/svg+xml' : `image/${extension.slice(1)}`;
                const constName: string = file.replace(/\.[^/.]+$/,'').toUpperCase().replace(/-/g,'_');

                fileContent += `    ${constName}: 'data:${mimeType};base64,${base64}',\n`;
            }
        });

        fileContent += `};\n`;

        const outputDir: string = path.dirname(OUTPUT_FILE);
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir,{ recursive: true });
        }

        fs.writeFileSync(OUTPUT_FILE,fileContent);
        console.log('File generato con successo:',OUTPUT_FILE);

    } catch (error) {
        console.error('Errore durante la generazione:',error);
    }
}

generateImageConstants();