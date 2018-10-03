// class BoardMember(){
//   constructor (name, homeState, training){
//   this.name = name
//   this.homeState = homeState
//   this.training = training
//
//   //Begin BoardMember Specific Functions
//    this.veto = function(){
//      console.log("No, I must disagree")
//    }
//
//    this.approve = function(){
//      console.log("You can do this!")
//    }
//
//    this.doCharity = function(){
//      console.log("I like to help people.")
//    }
//
//    this.releasePressStatement = funtion(){
//      console.log("You will see great things from Scuber.")
//    }
//
//    this.sayHi = function(){
//      console.log(`Hi, my name is ${this.name}. I am from ${this.homeState}, and I trained in ${this.training}`)
//    }
//  }
// }

function BoardMember(name, homeState, training){
  this.name = name
  this.homeState = homeState
  this.training = training
  this.veto = function(){
    return 'No, I must disagree'
  }
  this.approve = function(){
    return 'You can do that!'
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
