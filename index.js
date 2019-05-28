function BoardMember(name, home_state, training) {
  this.name = name
  this.homeState = home_state
  this.training = training
  this.veto = function veto() { return "No, I must disagree" }
  this.approve = function approve () { return "You can do that!" }
  this.doCharity = function charity () { return "I like to help people."}
  this.releasePressStatement = function () { return  "You will see great things from Scuber."}
  this.sayHi = function () { return `Hi, my name is ${name}. I am from ${home_state}, and I was trained in ${training}.`}
}
