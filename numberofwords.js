let str = "salik";

let words = 0;

for(let i=0; i<str.length; i++){
    if(str.charCodeAt(i) == 32){
        continue;
    }
    else{words++}
}
console.log(words);
