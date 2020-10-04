import {observable} from 'mobx';

const person = observable({
  firstName: 'Avinash',
  lastName: 'Peelukhana'
});

console.log(`person: ${person}`);// controlled by mobx

class Person {
  @observable // controlled by developer
  firstName: string

  constructor(name:string){
    this.firstName = name;
  }
}
const nPerson = new Person('Bhanu');
console.log(`new person: ${nPerson}`);

export {};
