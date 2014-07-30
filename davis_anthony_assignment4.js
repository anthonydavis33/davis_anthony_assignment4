/* Anthony Davis
* 07/28/2014
* Assignment 4
* Problem Solving
*/

// Initial variables
var phoneReturn;
var caseReturn;

// Functions

// Does a string follow a phone number?
// needs to follow 111-111-1111 format only boolean

var phoneNumberCheck = function (phoneNumber) {
    var bool;
    var stringLength = phoneNumber.length;
    console.log(phoneNumber);
    for (var cnt = 0; cnt < stringLength; cnt++) {
        if (phoneNumber[cnt] === "1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9" || "0" || "-"){
            
            bool = true;
        };
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
var emailCheck = function (email) {
  
    
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


// Main Body Code
/* ---- Phone Function calls ----
console.log(phoneReturn = phoneNumberCheck("123-456-7890"));
console.log("This is a Valid Phone Number");
console.log("-------------");
console.log(" ");
console.log(phoneReturn = phoneNumberCheck("123-4567890"));
console.log("This is not a valid phone number. Please enter it in 123-456-7890 format.");
console.log("-------------");
console.log(" ");
console.log(phoneReturn = phoneNumberCheck("123-456789-0"));
console.log("This is not a valid phone number. Please enter it in 123-456-7890 format.");
console.log("-------------");
console.log(" ");
*/

// TitleCase return function
//console.log(caseReturn = titleCase("aNtHoNy"));

console.log("testing below");




/*
        for (var caps = 0; caps < stringArray.length; caps++){
            var makeBig = stringArray[cnt][0].toUpperCase();
            console.log(makeBig);
        
            }
            
        for (var i = 1; i < stringArray[cnt].length; i++){
            //console.log(stringArray[cnt][i]);
            var makeSmall = stringArray[cnt][i].toLowerCase();
            console.log(makeSmall);
        } 
*/