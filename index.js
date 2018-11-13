function BoardMember(name,homeState, training) {
    this.name = name
    this.homeState = homeState
    this.training = training
    this.veto = function(){
        return ("No, I must disagree");
      }
    this.approve = function() {
        return ("You can do that!")
    }
    this.doCharity = function() {
        return ("I like to help people.")
    }
    this.releasePressStatement = function() {
        return ("You will see great things from Scuber.")
    }
    this.sayHi = function() {
        return `Hi, my name is ${polishedBoardMember.name}. I am from ${polishedBoardMember.homeState}, and I was trained in ${polishedBoardMember.training}.`
    }
}

let polishedBoardMember = new BoardMember('Mr. Polished', 'New York', 'law')
polishedBoardMember.veto()
polishedBoardMember.approve()
polishedBoardMember.doCharity()
polishedBoardMember.releasePressStatement()
polishedBoardMember.sayHi()
