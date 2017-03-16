
export const capitalize = ( string ) => {

  var words = string.split( ' ' );

  words.forEach( function( word, wordIndex ) {
    var firstLetter = word.charAt( 0 );
    var otherLetters = word.slice( 1 );

    firstLetter = firstLetter.toUpperCase();
    otherLetters = otherLetters.toLowerCase();

    word = firstLetter + otherLetters;
    words[ wordIndex ] = word;
  });

  words = words.join( ' ' );
  return words;
}
