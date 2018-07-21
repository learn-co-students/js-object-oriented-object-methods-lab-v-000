
function BoardMember(name, homestate, training) {
  this.name = name;
  this.homestate = homestate;
  this.training = training;
  console.log(this.name, this.homestate, this.training)

  this.veto = () => { return `No, I must disagree` };
  console.log(this.veto())
  this.approve = () => { return `You can do that!` };
  console.log(this.approve())

  this.doCharity = () => { return `I like to help people.` };
  console.log(this.doCharity())

  this.releasePressStatement = () => { return `You will see great things from Scuber.` };
  console.log(this.releasePressStatement())

  this.sayHi = () => { return `Hi, my name is ${name}. I am from ${homestate}, and I was trained in ${training}.` };
  console.log(this.sayHi())
}
