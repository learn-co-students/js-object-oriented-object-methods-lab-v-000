function BoardMember(name, homeState, training) {
  this.name = name
  this.homeState = homeState
  this.training = training
  this.veto = function(){//beginnig
    return "No, I must disagree"
  }//end
  this.approve = function(){//beginnig
    return `You can do that!`;
  }//end
  this.doCharity = function(){//beginnig
    return `I like to help people.`;
  }//end
  this.releasePressStatement = function(){//beginnig
    return `You will see great things from Scuber.`;
  }//end
  this.sayHi = function(){//beginnig
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
  }//end

}
