function BoardMember(a, b, c) {
  this.name = a;
  this.homeState = b;
  this.training = c;

  this.veto = () => {
    return "No, I must disagree";
  }

  this.approve = () => {
    return "You can do that!";
  }

  this.doCharity = () => {
    return "I like to help people.";
  }

  this.releasePressStatement = () => {
    return "You will see great things from Scuber." ;
  }

  this.sayHi = () => {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
  }
}
