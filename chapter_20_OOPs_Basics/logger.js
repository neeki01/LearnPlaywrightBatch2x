export default function log( message ) {
    console.log( "[LOG] - default " + message );
}

//by default we will use the above code

export function log2( message ) {
    console.log( "[LOGS] " + message );
}