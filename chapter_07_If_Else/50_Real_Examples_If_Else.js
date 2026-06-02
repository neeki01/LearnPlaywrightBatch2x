let isLoggedIn = true;
let userRole = "editor";

if ( isLoggedIn ) {

    if ( userRole === "admin" ) {
        console.log( "admin can do all the things" );
    } else if ( userRole === "editor" ) {
        console.log( "Edit role access" )
    }
    else if ( userRole === "viewer" ) {
        console.log( "View role access" )
    } else {
        console.log( "no role assigned" )
    }
} else {
    console.log( "you are not logged." );
}
