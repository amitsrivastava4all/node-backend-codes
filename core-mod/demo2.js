// Read a Big File
import fs from 'fs';
import event from 'events';
const eventEmitter = new event.EventEmitter();
const stream = fs.createReadStream('/Users/amitsrivastava/Documents/temp/05-SyncAndAsyncCode.mp4');
const writeStream = fs.createWriteStream('/Users/amitsrivastava/Documents/temp/05-SyncAndAsyncCode-copy.mp4')
console.log('Copy Start...');
stream.pipe(writeStream);
stream.on('end', function(){
    console.log('Data Copy Done...');
})
stream.on('error', function(err){
    console.log('Error is ', err);
})
/*stream.on('open', function(){
    console.log('Stream is Open');

})
stream.on('data', function(chunk){
    console.log('Chunk is ', chunk);
    writeStream.write(chunk);
});
stream.on('error', function(err){
    console.log('Stream has error ', err);
})
stream.on('end', function(){
    console.log('Stream End ');
})
stream.on('close', function(){
    console.log('Stream is Close');
})
*/
//event
// event.on('eventname', callBackFn)
//  Event Listener
// eventEmitter.on('knock', function(){
//     console.log('Open the Door');
// })
// eventEmitter.emit('knock'); // event fire
