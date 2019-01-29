/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function(){
  //fill me in!
  this.list = [];
  this.head = null;
  this.tail = null;
};

//write methods here!

LinkedList.prototype.addToTail = function(value){
  const newNode = this.makeNode(value);
  if(!this.list.length) {
    this.list.push(newNode);
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.list.push(newNode);
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

LinkedList.prototype.removeHead = function () {
  const prevHead = this.head;
  this.head = this.head.next;
  return prevHead.value;
};

LinkedList.prototype.contains = function (value) {
  for(let i = 0; i < this.list.length; i++) {
    if(this.list[i].value === value) {
      return true;
    }
  }
  return false;
};

LinkedList.prototype.makeNode = function (value) {
  return {
    value,
    next: null
  }
};
