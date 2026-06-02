let browser = "Edge";

//1-Mon,2 -Tuesday

switch ( browser ) {
    case "Chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log( "Chromium preoject" );
        break;
    case "Firefox":
        console.log( "Mozilla Project" );
        break;
    case "Safari":
        console.log( "Apple browser" );
        break;
    default:
        console.log( "No idea" );
}