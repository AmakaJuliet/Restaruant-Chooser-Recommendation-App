const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout 
});

rl.question(`What is your name?`, function(name){rl.question(`How old are you?`,function (age){age = parseInt(age);
  if(age < 15){
  console.log(`Hello ${name} we do not have the kids and teens options please check back later`); 
  rl.close();
}
                                                     
  rl.question(`How much cash do you have?`,function(cash){cash = parseInt(cash);
     let message = '';
     switch (true) {
       case (cash <= 10):
      message = `Hello ${name}, We recommend Pizza Hut`;
       break;
      case (cash >= 100 && cash <=250):
        message = `Hello ${name}, We recommend Xhi Chinese Restaurant`;
       break;
      case (cash >= 300 && cash <=600):
        message = `Hello ${name}, We recommend Tianas Deluxe Lounge`;
       break;


       default:
        message = `Hello ${name}, We do not have any recommendations at the moment`;
       break;  
     }                                                     console.log(message);
    rl.close();
})
 });
});

rl.on('close', function(){
  console.log('\nThank You for Your Patronage!!!');
})