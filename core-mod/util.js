import { fileURLToPath } from 'url';
import { dirname } from 'path';
export function getFilePath(){
    const __filename = fileURLToPath(import.meta.url);
    console.log(import.meta.url, __filename);
    return __filename;
}
export function getDirPath(){
    const __dirname = dirname(getFilePath());
    return __dirname;
}
