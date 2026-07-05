class Student {
    constructor( name_student, age, phoneNo ) {
        this.name_student = name_student;
        this.age = age;
        this.phoneNo = phoneNo;
    }
    static name = "Playwright2x";
    static mentor_name = "PrammodDutta";

    static display() {
        console.log( "Hi, I am commoin f(n)" );
    }

}

const s1 = new Student( "ABC", 32, "9876543210" );
const s2 = new Student( "DEF", 30, "8210910909" );
const s3 = new Student( "Yasho", 32, "9876543210" );
const s4 = new Student( "Sharad", 30, "8210910909" );
const s5 = new Student( "GHI", 32, "9876543210" );
const s6 = new Student( "JKL", 30, "8210910909" );
const s7 = new Student( "MNO", 32, "9876543210" );
const s8 = new Student( "PQR", 30, "8210910909" );
const s9 = new Student( "STU", 32, "9876543210" );
const s10 = new Student( "VWX", 30, "8210910909" );




console.log( s1.name_student );
console.log( s2.name_student );

console.log( Student.name );
console.log( Student.mentor_name );
