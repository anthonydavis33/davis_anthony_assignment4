/* Anthony Davis
* 07/28/2014
* Assignment 4
* Problem Solving
*/

// Initial variables
var phoneReturn,
    caseReturn,
    numberReturn,
    emailReturn,
    seperatorReturn,
    arrayCompareReturn
;

var numberArray = [1,4,7,9,10,14,15];
// Functions

// Does a string follow a phone number?
// needs to follow 111-111-1111 format only boolean

var phoneNumberCheck = function (phoneNumber) {
    
    var bool = false;
    var stringLength = phoneNumber.length;
    
    console.log(phoneNumber);
    
    for (var cnt = 0; cnt < stringLength; cnt++) {
        
        if (phoneNumber[cnt] !== "1" && 
            phoneNumber[cnt] !== "2" && 
            phoneNumber[cnt] !== "3" && 
            phoneNumber[cnt] !== "4" && 
            phoneNumber[cnt] !== "5" && 
            phoneNumber[cnt] !== "6" && 
            phoneNumber[cnt] !== "7" && 
            phoneNumber[cnt] !== "8" && 
            phoneNumber[cnt] !== "9" && 
            phoneNumber[cnt] !== "0" && 
            phoneNumber[cnt] !== "-"){
        
            console.log(phoneNumber[cnt]);
            bool = false;
            return bool;
        };
        bool = true;
    };
        
       
    if (bool === true){ 
        if (phoneNumber[3] === "-" && phoneNumber[7] === "-"){
            if (stringLength === 12){
                
                bool = true;
                return bool;
            };
        };
    };
    
    bool = false;
    return bool;
};



// Does the email follow email format?
// need to follow the aaaa@bbbb.com format return only boolean
var emailCheck = function (emailInput) {
    
    var atSymbolPos = emailInput.indexOf("@");
    //console.log(atSymbolPos);
    var dotSymbolPos = emailInput.indexOf(".");
    //console.log(dotSymbolPos);
    var dotComCheck = emailInput.substr(dotSymbolPos, emailInput.legnth);
    
    if (atSymbolPos < dotSymbolPos){
        
        if (dotComCheck === ".com"){
            
            return true;
        };
    };
    
    return false;
};

// change string number to actual number
// has to return a number
var numberSwap = function (numberInput){
    
    var strToInt = parseInt(numberInput);
    return strToInt;
};




// Title-case'ing a string
// returning a string with each word has first letter capitolized, then rest is lower case.
var titleCase = function (properName) {
    
    var caps = properName[0].toUpperCase();
    var seperateHalf = properName.substr(1, properName.length);
    var lowerSecond = seperateHalf.toLowerCase();
    //console.log(caps);
    //console.log(lowerSecond);
    var finalName = caps.concat(lowerSecond);
    //console.log(finalName);
    
    
    
    return finalName;
};

// Separator replacement function
// Returns String
var seperateFunction = function (strInput, sep, newSep){
    var i;
    for (i in strInput){
        while (strInput[i] === sep){
            strInput = strInput.replace(sep, newSep);
        };
        //console.log(strInput[i]);
    };
 
    //console.log(strInput);
    return strInput;
};

// Number check in array
// Returns number
var numberCompare = function (numArray, numInput){

    var i;
    
    for (i in numArray){
        if (numInput <= numArray[i]){
            //console.log(numArray[i]);
            return numArray[i];
        };
    };
};

// Main Body Code

// ---- Phone Function calls ----
console.log(phoneReturn = phoneNumberCheck("123-456-7890"));
console.log("This is a Valid Phone Number");
console.log(" ");
console.log(phoneReturn = phoneNumberCheck("123-4567890"));
console.log("This is not a valid phone number. Please enter it in 123-456-7890 format.");
console.log(" ");
console.log(phoneReturn = phoneNumberCheck("123-456789-0"));
console.log("This is not a valid phone number. Please enter it in 123-456-7890 format.");
console.log("-------------");
console.log(" ");


// TitleCase return function
console.log("an input of \"aNtHoNy\" will result in \"Anthony\" as an output.");
console.log(caseReturn = titleCase("aNtHoNy"));
console.log("-------------");
console.log(" ");


// Returns an int value from a string number value
console.log("This function swaps a string number into an Int value.");
console.log(numberReturn = numberSwap("42"));
console.log("-------------");
console.log(" ");


// Returns Boolean is email is proper or not.
console.log("This is a proper email address.");
console.log(emailReturn = emailCheck("joe@abcmail.com"));
console.log("-------------");
console.log(" ");

console.log("This is NOT a proper email address.");
console.log("Please follow the \"aaa@bbb.com\" guidelines.");
console.log(emailReturn = emailCheck("joe@abcmail"));
console.log("-------------");
console.log(" ");


// This function replaces seperators (2nd arg) with new seperators (3rd arg)
console.log("Input was a,b,c");
console.log("argument asked to change \",\" to \"/\"");
console.log(seperatorReturn = seperateFunction("a,b,c", ",", "/"));
console.log("-------------");
console.log(" ");

// This function checks input through array and outputs closest number to it always equal to or higher
console.log("The number inputed is 12. " + numberArray + " The output will be equal to or the closest number one higher than inputed.");
console.log(arrayCompareReturn = numberCompare(numberArray, 12));
