function spellcheck(word){
 let words = ['add']
 let check = word.toLowerCase();

    
   if( words.includes(check)){
       return word
       //console.log(word)
   } else{
       return `~${word}~`
       // console.log(`${word} ~`)
   }

    

}