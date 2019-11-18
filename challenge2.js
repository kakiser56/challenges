function resolveAfter3Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 3000);
  });
}
resolveAfter3Seconds().then((data) => {console.log(data)});
 
async function resolveAfter3Seconds2() {
    const result = await resolveAfter3Seconds();
    console.log(result);
}
 
resolveAfter3Seconds2();
 
class Animal {
    constructor (type) {
        this.type = type;
    }
   
    printType () {
        console.log('I am a ' + this.type);
    }
   
    get Type() {
        return this.type;
    }
   
}
 
class Cat extends Animal {
    constructor() {
        super('Cat');
    }
}
 
let dog = new Animal('dog');
dog.printType();
let type = dog.Type;
console.log(type);
 
let cat = new Cat();
cat.printType();
 
