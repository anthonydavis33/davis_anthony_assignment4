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
    
    var stringLength = phoneNumber.length;
    
    if (stringLength !== 11) {
        
        return true;
    }
    
    console.log("This is not a valid phone number. Please enter it in 123-456-7890 format.");
    return false;
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