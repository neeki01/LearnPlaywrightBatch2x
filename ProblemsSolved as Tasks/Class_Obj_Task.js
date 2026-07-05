class Calculator {

    // CAB
    //  Constructor. 
    constructor( num1, num2 ) {
        this.num1 = num1;
        this.num2 = num2;
    }
    // Attribute 
    // Behavior. 
    sum() {
        return this.num1 + this.num2;
        //cconsole.log( "Addition is:--", num3 )
    }
    sub() {
        return this.num1 - this.num2;
    }
    multiply() {
        return this.num1 * this.num2;
    }
    div() {
        return this.num1 / this.num2;
    }
    mod() {
        return this.num1 % this.num2;
    }

}

let add = new Calculator( 3, 2 );
console.log( "Addition is:--", add.sum() );
console.log( "Subtraction is:--", add.sub() );
console.log( "Multiplication is:--", add.multiply() );
console.log( "Division is:--", add.div() );
console.log( "Modolus is:--", add.mod() );


