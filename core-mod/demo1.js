import fs from 'fs';
import { getDirPath } from './util.js';
import path from 'path';
// Async Thread
// __filename - common js (by default)
const currentDir = getDirPath();
const fullPath = path.join(currentDir, 'demo1.js');
fs.readFile('/Users/amitsrivastava/Documents/temp/05-SyncAndAsyncCode.mp4', function(err, content){
    if(err){
        console.log('Error During File Read ', err);
    }
    else{
        console.log('File Content is ', content);
    }
})
