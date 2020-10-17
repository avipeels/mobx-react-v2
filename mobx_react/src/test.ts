import { observable, action, autorun, runInAction } from "mobx";

// controlled by mobx
// const person = observable({
//   firstName: "Avinash",
//   lastName: "Peelukhana",
// });

// console.log(`person: ${person}`);

class Person {
  @observable // controlled by developer
  firstName: string;
  @observable
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  @action
  updateFirstName(firstName: string) {
    this.firstName = firstName;
  }

  @action
  updateLastName(lastName: string) {
    this.lastName = lastName;
  }
}

const nPerson = new Person("Bhanu", 'D');

autorun(() => {
  console.log(`person's name is: ${nPerson.firstName}, ${nPerson.lastName}`);
});

runInAction(async () => {
  nPerson.firstName = 'Manoj';
  nPerson.lastName = 'P';
})

// nPerson.updateFirstName("Manoj");
// nPerson.updateLastName("P");


export { };
