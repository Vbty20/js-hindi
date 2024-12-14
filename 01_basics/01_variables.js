const accountId = 2312051
let accountEmail = "vbty223@gmail.com"
var acccountPassword = "12345"
accountCity = "Guwahati"
let accountState;

// accountId = 2 // not allowed
accountEmail = "vb@gmail.com"
accountPassword = "32425"
accountCity = "Shillong"

/*
Prefer not to use var
because of issue in block scope and functional scope.
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
