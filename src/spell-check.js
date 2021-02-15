function spellcheck(word){
 let words = ['add']

   if( words.includes(word)){
       return word
       //console.log(word)
   } else{
       return `${word} ~`
       // console.log(`${word} ~`)
   }

    

}