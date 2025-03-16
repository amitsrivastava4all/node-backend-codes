// Main Entry File

import { takeInput } from "./input.js";
import { intro } from "./intro.js";

// IIFE
(async function (){
    // Intro 
    console.log(await intro());
    await takeInput();
})();