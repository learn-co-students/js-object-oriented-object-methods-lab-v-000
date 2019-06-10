function BoardMember(name, homeState, training, veto){
  this.name = name;
  this.homeState = homeState;
  this.training = training;
  this.veto = function(){
    var result = 'No, I must disagree'
    return result}
  this.approve = function(){
    let result = "You can do that!"
    return result}
  this.doCharity = function(){
    let result = "I like to help people."
    return result};
  this.releasePressStatement = function(){
    let result = "You will see great things from Scuber."
    return result
  };
  this.sayHi = function(){
    let result = `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
    return result
  };
}
