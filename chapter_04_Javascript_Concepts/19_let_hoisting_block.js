//let is block-scoped
let x = "global";
if ( true ) {//TDZ for x starts here
    //console.log(x);//reference error



    let x = "block";//TDZ ends here
    console.log( x );//block
}