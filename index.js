const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout 
});

rl.question(`What is your name?`, function(name){rl.question(`How old are you?`,function (age){if(age < 15){
  console.log(`Hello ${name} we do not have the kids and teens option check back later`);
  rl.close();
}
                                                                              
  rl.question(`How much cash do you have?`,function(cash){
      cash < 10
      console.log(`Hello ${name}, I recommend Pizza Hut`)
      cash > 100 && cash <250
        console.log(`Hello ${name}, I recommend Xhi Chinese Restaurant`)
      cash > 300 && cash <600
        console.log(`Hello ${name}, I recommend Tianas Deluxe Lounge`)

      cash < 600
        console.log(`Hello ${name}, We do not have any recommendations at the moment`)
})
  })
    rl.close();
})
   ;
;
