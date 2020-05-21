interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: 'Seokje',
  age: 40,
  gender: 'male'
}

const sayHi = (person: Human): void => {
  console.log(
    `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}..`
  );
};

sayHi(person);

export {};
