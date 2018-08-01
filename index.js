// create a boardmember object
// has three porperties (name, homeState, training)
// veto() method returns string "No, I must disagree"
// approve() method returns string "You can do that!"
// doCharity() method returns string "I like to help people."
// releasePressStatement() method string "You will see great things from Scuber."
// sayHi() method return string "Hi, my name is ${name}.  I am from ${homeState}, and I was trained in ${training}."
let BoardMember = function BoardMember(name, homeState, training) {
  this.name = name
  this.homeState = homeState
  this.training = training
  this.veto = function() {
    return "No, I must disagree"
  }
  this.approve = function(){
    return "You can do that!"
  }
  this.doCharity = function(){
    return "I like to help people."
  }
  this.releasePressStatement = function(){
    return "You will see great things from Scuber."
  }
  this.sayHi = function(){
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
  }
}
