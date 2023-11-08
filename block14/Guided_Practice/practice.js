// This first set of code is defining the instruments in the array.
const myInstruments = ["flute", "clarinet", "saxophone", "trumpet", "trombone"];
// This section (push) is adjusting the array to add the 2 instruments to the end of the array. 
myInstruments.push("tuba", "basoon");
// This section (unshift) is adding the instrument to the beginning of the array. 
myInstruments.unshift("saxophone");
// This section is calling the myInstruments constant to printout to verify functionality
console.log (myInstruments);
// This section is defining and adding the function to get the first instrument. It is referencing index 0, otherwise known as the first instrument, in the closed brackets for recall
function getFirstInstruments(instrument) {
    return instrument[0];
}
// This section is assigning the label for the previous function defined and calling it "firsInstrument" for recall in the console.log function to verify functionality. 
const firstInstrument = getFirstInstruments(myInstruments);
console.log (firstInstrument);

// This section is defining and adding the function to get the last instrument. It is referencing index.length, otherwise known as the full length of variables in the array -1, in the closed brackets for recall
function getLastInstruments(instrument) {
    return instrument[instrument.length -1]
};
// This section is assigning the label for the previous function defined and calling it "lastInstrument" for recall in the console.log function to verify functionality. 
const lastInstrument = getLastInstruments(myInstruments);
console.log (lastInstrument);
//This is a new function to obtain the last and first variable in the same function. I had to adjust the code in the function to reflect a double bracket. This allowed the return function to run and display both values. 
function getFirstandLast(instrument) {
    return [instrument[0], instrument[instrument.length -1]]
}; 
const FirstandLast = getFirstandLast(myInstruments);
console.log (FirstandLast);
// ***I ACTUALLY USED SLICED TO OBTAIN THE CORRECT RESULTS, HOWEVER, I WILL REATTEMPT WITH A LOOP
const first3instruments = myInstruments.slice(0,3);
console.log(first3instruments);
//This will use a loop to display the first three instruments in the array. I had to adjust the code several times to make it work. I had to make sure to add the constant and then console.log that constant to get the correct response. In this function, I am recalling the instruments by index numbers. 
function getFirst3instruments(instrument) {
    const output = [];
    output.push(instrument[0]);
    output.push(instrument[1]);
    output.push(instrument[2]);
    return output;
}
const first3=getFirst3instruments(myInstruments);
console.log(first3);
//This is the same as the previous 2 examples but in a loop. In order to make it work, I had to make sure that my variables/arguments that are defined in the for lop or seperated by a semicolon instead of a comma. This fixed the code. 
function getFirst3loop(instrument) {
    const output=[];
    for (let i = 0; i < 3; i++) {
        output.push(instrument[i]);
    }
    return output;
}
const First3loop = getFirst3loop(myInstruments);
console.log(First3loop);

//This is to try and get the instruments that begin with the letter "t". I had to make the "for loop" with another function inside to call out the indices for the strings and starting with "t". This added a function inside my function. 
function getLetterT(instrument) {
    const output=[];
    for (let i=0; i < instrument.length; i++) {
        const instrumento = instrument[i];
        if (instrumento[0] === "t") {
            output.push(instrumento);
        }
    }
    return output;
}
const LetterT = getLetterT(myInstruments);
console.log(LetterT);
// This last function will get the "string" with the longest name. 
function getLongestName(instruments) {
   let longestInstrument = "";
   for (const instrument of instruments) {
    if (instrument.length > longestInstrument.length) {
        longestInstrument = instrument;
    }
   }
return longestInstrument;
}
const LongestName = getLongestName(myInstruments);
console.log(LongestName)