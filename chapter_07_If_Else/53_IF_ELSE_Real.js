let username = "Dev";
let password = "secure123";
let isAccountedLocked = true;

// logical operator with if - else statement

if ( ( username === "Dev" && password === "secure123" && !isAccountedLocked ) ) {
    console.log( "Allowed to enter" );
}
else {
    console.log( "Not allowed to enter" );
}