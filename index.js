const MORSE_CODE = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    ".-.-.-": ".",
    "--..--": ",",
    "..--..": "?",
    ".----.": "'",
    "-.-.--": "!",
    "-..-.": "/",
    "-.--.": "(",
    "-.--.-": ")",
    ".-...": "&",
    "---...": ":",
    "-.-.-.": ";",
    "-...-": "=",
    ".-.-.": "+",
    "-....-": "-",
    "..--.-": "_",
    ".-..-.": "\"",
    "...-..-": "$",
    ".--.-.": "@",
    "...---...": "SOS"
}

const codeToCheck = '.... . -.--  .--- ..- -.. . .-.-.-'; // HEY JUDE
let convertedResult = codeToCheck.split("  ")
                .map( splitElements )
                .map( convertElements( MORSE_CODE ) )
                .join("");
console.log(" Morse code ", codeToCheck, " translates to ", convertedResult );

function splitElements(element) {
    return element.split(" ");
}

function convertElements( MORSE_CODE ){
    return function( element ){
        element = element.map( function( item ){
            if ( MORSE_CODE[item] !== undefined ) {
                return item = MORSE_CODE[item];
            }
        } );
        return element.join("") + " ";
    }
}
