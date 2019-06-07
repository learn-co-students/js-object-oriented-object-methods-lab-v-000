function BoardMember(name, homeState, training) {
  this.name = name
  this.homeState = homeState
  this.training = training
  this.veto = function Veto() {
    return 'No, I must disagree'
  }
  this.approve = function Approve() {
    return 'You can do that!'
  }
  this.doCharity = function DoCharity() {
    return 'I like to help people.'
  }
  this.releasePressStatement = function ReleasePressStatement() {
    return 'You will see great things from Scuber.'
  }
  this.sayHi = function SayHi() {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
  }
}
