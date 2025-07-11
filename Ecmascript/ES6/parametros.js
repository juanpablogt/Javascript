function newUser(name, age, country){ 
    var name= name || 'Juan';
    var age= age || 18;
    var country= country || 'MX';
    console.log(name, age, country);
  }

newUser(); // Juan 18 MX
newUser('Oscar', 32, 'CO'); // Oscar 32 CO

function newUser2(name='Juan', age=18, country='MX'){ 
    console.log(name, age, country);
  }

newUser2(); // Juan 18 MX
newUser2('Oscar', 32, 'CO'); // Oscar 32 CO

