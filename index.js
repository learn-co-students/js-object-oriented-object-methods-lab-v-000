function BoardMember(name, homeState, training){
  this.name = name;
  this.homeState = homeState;
  this.training = training
  this.veto = function() {
    return "No, I must disagree";
  }
  this.approve = function(){
    return "You can do that!"
  }
  this.doCharity = function() {
    return "I like to help people."
  }
  this.releasePressStatement = function(){
    return "You will see great things from Scuber."
  }
  this.sayHi = function() {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
  }
}


// expect(polishedBoardMember.doCharity()).to.equal("I like to help people.")
// })
// })
//
// describe('releasePressStatement()', function() {
// it('returns "You will see great things from Scuber."', function() {
// expect(polishedBoardMember.releasePressStatement()).to.equal("You will see great things from Scuber.")
// })
// })
//
// describe('sayHi()', function() {
// it('returns "Hi, my name is <name>. I am from <homestate>, and I was trained in <training>."', function() {
// expect(polishedBoardMember.sayHi()).to.equal("Hi, my name is Mr. Polished. I am from New York, and I was trained in law.")
// })
// })
// })
