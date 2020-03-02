function countNoOfWords() {

    document.myform.noofwords.value = document.myform.inpString.value.split(' ').length + " words";
    document.myform.noofspaces.value = document.myform.inpString.value.split(" ").length - 1 + " spaces";
   
   }
   function getNoOfSentences() {
    var val = document.myform.inpString.value;
    var sentences = val.split(/[\.!?]+/); // split on punctuation
    return sentences.length - 1; // subtract 1 to account for last sentence
}