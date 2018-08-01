function BoardMember(name, homeState, training){
    this.name = name;
    this.homeState = homeState;
    this.training = training;
    this.veto = function (){
        return "No, I must disagree";
    };
    this.approve = function(){
        return "You can do that!";
    };
    this.doCharity = function(){
        return "I like to help people.";
    };
    this.releasePressStatement = function(){
        return "You will see great things from Scuber.";
    };
    this.sayHi = function(){
        return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
    };

}

// The tests will specify whether to return or log. Big difference! Don't forget function() in method declaration. 
// We assign each newly created object(this) an attribute of approve that points to a function. 
// we are adding methods to the object(this)with the help of a constructor function. 