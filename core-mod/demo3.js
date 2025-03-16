// watch
import fs from 'fs';
const SCORE_FILE = '/Users/amitsrivastava/Documents/node-core/core-mod/score.txt';
fs.watchFile(SCORE_FILE, function(curr,prev){
    
    console.log('File Get Updated...');
    fs.readFile(SCORE_FILE, function(err, content){
        if(err){
            console.log('unable to read the score', err);
        }
        else{
            console.log('Current Score is ', content.toString());
        }
    })
})
console.log('File is in Watch mode');
