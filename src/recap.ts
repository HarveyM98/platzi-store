const myName = 'Harvey';
const myAge = 26;
const suma = (a: number, b: number) => {
  return a + b;
};
suma(12, 23);

class Persona {
  constructor(
    private age: number,
    private name: string,
  ) {
    this.age = age;
    this.name = name;
  }

  getSummary() {
    return `my name is ${this.name}, ${this.age}`;
  }
}

const harvey = new Persona(myAge, myName);
harvey.getSummary();
