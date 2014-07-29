/* Anthony Davis
* 07/28/2014
* Assignment 4
* Problem Solving
*/

// Initial variables
var phoneReturn;

// Functions

// Does a string follow a phone number?
// needs to follow 111-111-1111 format only boolean

var phoneNumberCheck = function (phoneNumber) {
    var bool;
    var stringLength = phoneNumber.length;
    for (var cnt = 0; cnt < stringLength; cnt++) {
        if (phoneNumber[cnt] === 
            ("1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9" || "0") || phoneNumber[cnt] === "-"){
            
            bool = true;
        };
    };
        
       
    if (bool === true){
            
        if (phoneNumber[3] === "-" && phoneNumber[7] === "-"){
                
            if (stringLength === 12){
                bool = true;
                console.log("This is a Valid Phone Number");
                return bool;
            };
        };
    };

    console.log("This is not a valid phone number. Please enter it in 123-456-7890 format.");
    bool = false;
    return bool;
};



// Does the email follow email format?
// need to follow the aaaa@bbbb.com format return only boolean
var emailCheck = function (email) {
  
    
};




// Main Body Code

console.log(phoneReturn = phoneNumberCheck("123-456-7890"));
console.log("-------------");
console.log(" ");
console.log(phoneReturn = phoneNumberCheck("123-4567890"));
console.log(" ");
console.log(phoneReturn = phoneNumberCheck("123-456789-0"));
console.log(" ");
console.log("testing below");


