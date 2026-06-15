function print() {
    console.log( "Normal function" );
}
function placeOrder( ClipboardItem, Callback ) {// ccallback name can be anything.
    console.log( "Hi, You order is placed" );
    Callback();
}

// First  way
placeOrder( "Pizza", print );


//second way
placeOrder( "Burger", function () {
    //console.log( "Hi , how are you!?" );
    console.log( "Annomus function" );
} );

//third way-Arrow function

placeOrder( "Momos", () => {
    //console.log( "Hi , how are you!?" );
    console.log( "Arrow function" );
} );




