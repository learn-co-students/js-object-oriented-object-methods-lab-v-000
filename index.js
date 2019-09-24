function BoardMember(name, homeState, training) {
 this.name = name;
 this.homeState = homeState;
 this.training = training;
 this.veto = function(){
   return 'No, I must disagree';
 };
 this.approve = function(){
   
 };
 this.sayHi = function() {
   `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was training in ${this.training}.`;
 }
}