let txt = "Reshad Shukurov";
console.log(txt.length);

//slice
let str = "Reshad, Mamed, Rasim";
let part = str.slice(7, 13);
let part1 = str.slice(7);
let part2 = str.slice(-13, -7);
console.log(part);
console.log(part1);
console.log(part2);

//substr
let str1 = "Reshad, Mamed, Rasim";
let part3 = str.substr(0, 7);
console.log(part3);

//replace
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
let text1 = "Please visit Microsoft!";
let newText1 = text.replace("MICROSOFT", "W3Schools");
console.log(newText);
console.log(newText1);

//toUpperCase
let text3 = "What is your Name!";
let text2 = text3.toUpperCase();
console.log(text2);

//toLowerCase
let text4 = "WHAT IS YOUR NAME!";
let text5 = text4.toLowerCase();
console.log(text5);

//concat
let text6 = "Hello";
let text7 = "World";
let text8 = text6.concat(" ", text7);
console.log(text8);

//trim
let tex1 = "      Hello World!      ";
let tex2 = tex1.trim();
console.log(tex2);

//padStart
let tex3 = "5";
let padded = tex3.padStart(4,"0");
console.log(padded);

//padend
let tex4 = "5";
let padend = tex4.padEnd(4,"x");
console.log(padend);

//char
let text9 = "HELLO WORLD";
let char = text9.charAt(8);
console.log(char);

//charCodeAt
let text10 = "HELLO WORLD";
let char1 = text.charCodeAt(0);
console.log(char1);

//split
let st = "Reshad, Mamed, Rasim,Isabala,";
let split=st.split(" ");
console.log(split);



