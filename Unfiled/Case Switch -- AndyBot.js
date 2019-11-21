let instructions = 0;
let andy = Scene.getItem('OqQEkcF4');
// let m1 = Scene.getItem('bQV0hrwp');
// let m2 = Scene.getItem('yNMyf1nV');
// let m3 = Scene.getItem('YiOKwKk0');
// let m4 = Scene.getItem('jjoTgSCl');
// let mail = [m1, m2, m3, m4];
let seenInstructions = false

while (seenInstructions === false) {
  andy.onActivate(function () {
    switch (true) {
      case instructions === 0:
        andy.say("Hi! My name is Andy.");
        instructions++;
        break;
      case instructions === 1:
        andy.say("I am training to be the world's first robot personal assistant.");
        instructions++;
        break;
      case instructions === 2:
        andy.say('Here is a problem I am trying to solve.');
        instructions++;
        break;
      case instructions === 3:
        andy.say('I want to deliver these mail packages to the people here as quickly as possible.');
        instructions++;
        break;
      case instructions === 4:
        andy.say(
          'The mail packages are marked: M1, M2, M3, and M4. Each time you start this map, they appear in different places'
        );
        instructions++;
        break;
      case instructions === 5:
        andy.say('The people we must deliver to are marked as P1, P2, P3, and P4 on the map.');
        instructions++;
        break;
      case instructions === 6:
        andy.say('I will need to create an algorithm that will help me to get these mail packages to the people as quickly as possible.');
        instructions++;
        break;
      case instructions === 7:
        andy.say('Good luck!');
        instructions++;
        seenInstructions === true;
        break;
      default:
        andy.say('');
        instructions++;;
        seenInstructions === true;
        break;
    }
  });
};

//  mail.forEach(function(package) {
//      let xpos = Math.floor(Math.random() * (15 - -30 + 1) ) + -30;
//      let ypos = Math.floor(Math.random() * (15 - -30 + 1) ) + -30;
//      package.moveTo(xpos, ypos);
// });
