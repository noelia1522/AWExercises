class Stack{
  constructor(){
    this.top = -1;
    this.items = {};
  }

  push(value){
    this.top += 1;
    this.items[this.top] = value //{"0": value}å
  }

  pop(){
    this.top -=1;
  }
}

module.exports = Stack;
