import * as path from 'path';
import * as fs from 'fs';

function getConvertedImageToBase64(imageNumber: number): string {
  const imagePath = path.join(
    process.cwd(),
    'public',
    'images',
    `${imageNumber}.jpeg`,
  );
  const imageBuffer = fs.readFileSync(imagePath);
  const imageBase64 = imageBuffer.toString('base64');

  return `data:image/png;base64,${imageBase64}`;
}

export default getConvertedImageToBase64;
