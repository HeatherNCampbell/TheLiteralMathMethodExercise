//  1a
let warmHugs = "Hi, I'm Olaf and I like warm hugs.";
console.log(warmHugs);

// 1b
console.log(warmHugs.toUpperCase());

//  1c
warmHugs = warmHugs.replace("like", "love");
console.log(warmHugs);


// 2a
// let beenImpaled = "Oh, look at that. I've been impaled."
// console.log(beenImpaled);

//  2b
let beenImpaled = "I've been impaled.";
console.log(beenImpaled);

// 3a
let dotDotDot = "...";
console.log(dotDotDot);

// 3b
let skullBones = `I don't have a skull${dotDotDot}or bones`;
console.log(skullBones);

//  4
console.log(Math.PI);

//  5
// These are the steps. Create randomNumber(which is random) by using let(which is set) and Math.random which is set. Next set top number multiplier. Next set to exclude decimals to include only whole numbers. randomNumber ++ adds the number 1 
let randomNumber = Math.random();
randomNumber *= 3;
randomNumber = Math.floor(randomNumber);
randomNumber++;
console.log(randomNumber);





