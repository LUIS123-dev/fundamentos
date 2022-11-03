/*
onst proto = { hello () {
      return `Hello, my name is ${ this.name }`;
    }
};

  const greeter = (name) => Object.assign(Object.create(proto), {
    name
  });

  const george = greeter('george');

  const msg = george.hello();

  console.log(msg);

*/

///Quando não é uma função construtora, é chamada de função de fábrica)


const proto = {
    hello () {return `Hello, my name is ${ this.name }`;}
  };

  const greeter = (name) => Object.assign(Object.create(proto),
  {name});

  const george = greeter('george');

  const msg = george.hello();

  console.log(msg);