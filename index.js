function BoardMember(n, h, t) {
  this.name = n;
  this.homeState = h;
  this.training = t;
  this.veto = function() {
    return "No, I must disagree"
  }
  this.approve = function() {
    return "You can do that!"
  }
  this.doCharity = function(){
    return "I like to help people."
  }
  this.releasePressStatement = function(){
    const statement = "You will see great things from Scuber."
    return statement;
  }
  this.sayHi = function() {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
  }
}
