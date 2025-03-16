// Intro Message
import figlet from "figlet";
export async function intro(){
   try{
    const result = await  figlet('Numerology');
    return result;
   }
   catch(err){
    console.log('Intro Error ', err);
   }
// figlet('Numerology', function(error, result){
//     if(error){
//         console.log('Intro Error');
//     }
//     else{
//         console.log(result);
//     }
// });
}