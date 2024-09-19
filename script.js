
class Animal {

    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    speak() {
        console.log("Hello my name is " + this.name);
    }

}



const arr = [
    new Animal('Luna', 'Cat'),
    new Animal('Max', 'Dog')
];

arr.forEach(animal => {
    animal.name = "Bob";
    animal.speak();
})

