class Father {
    home(): void {
        console.log("2BHK");
    }
}

class Pramod extends Father {
    override home(): void {
        console.log("3BHK");
    }
}

let pramod = new Pramod();
let parent = new Father();
//pramod.home();

parent.home();