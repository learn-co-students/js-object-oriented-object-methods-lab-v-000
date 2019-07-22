 function BoardMember (name, homeState, training) {
   this.name = name;
   this.homeState = homeState;
   this.training = training;

   this.veto = function veto () {
     return "No, I must disagree";
   };

   this.approve = function approve () {
     return "You can do that!";
   };

   this.doCharity = function doCharity () {
     return "I like to help people.";
   };

   this.releasePressStatement = function releasePressStatement () {
     return "You will see great things from Scuber.";
   };

   this.sayHi = function sayHi () {
     return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
   };
 };

// Add following methods to the class:
// veto — returns No, I must disagree
// approve — returns You can do that!
// doCharity — returns I like to help people.
// releasePressStatement — returns You will see great things from Scuber.
// sayHi — returns "Hi, my name is <name>. I am from <homestate>, and I was trained in <training>.
