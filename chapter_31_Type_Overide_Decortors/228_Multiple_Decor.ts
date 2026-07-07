function beforeSomething(method: any) {
    return function () {
        console.log("EAT");
        return method();
    };
}

function BeforeSomeSomeThing(method: any) {
    return function () {
        console.log("SLEEP");
        return method();
    };
}

class Dog {
    @beforeSomething
    @BeforeSomeSomeThing
    bark() {
        return "woof";
    }
}

let r = new Dog().bark();
console.log(r);