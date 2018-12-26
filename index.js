function BoardMember(name, homeState, training) {
this.name = name;
this.homeState = homeState;
this.training = training;
this.veto = function() {
console.log(`No, I must disagree`);
}
this.approve = function() {
console.log(`You can do that!`);
}
this.doCharity = function () {
console.log(`I like to help people.`);
}
}
