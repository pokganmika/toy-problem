/**
 * Write a stack using your preferred instantiation pattern. 
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {
  // this.storage = [];
  const storage = [];

  // add an item to the top of the stack
  this.push = function (value) {
    // this.storage.push(value);
    storage[storage.length] = value;
  };

  // remove an item from the top of the stack
  this.pop = function () {
    // this.storage.pop();
    const value = storage.splice(storage.length - 1, 1)
    return value[0];
  };

  // return the number of items in the stack
  this.size = function () {
    // this.storage.length;
    return storage.length;
  };
};

/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function(value){
    // TODO: implement `enqueue`
    // this.inbox.push(value);
    inbox.push(value);
  };

  // called to remove an item from the `queue`
  this.dequeue = function(){
    // TODO: implement `dequeue`
    // if (this.outbox.size() === 0) {
    //   while (this.inbox.size() > 0) {
    //     this.outbox.push(this.inbox.pop())
    //   }
    // }
    // return this.outbox.pop();
    while ( inbox.size() ) {
      console.log('inbox size: ', inbox.size())
      var value = inbox.pop()
      outbox.push(value)
    }
    var dequeue = outbox.pop()
    while ( outbox.size() ) {
      var element = outbox.pop()
      inbox.push(element)
    }
    return dequeue
  };

  // should return the number of items in the queue
  this.size = function(){
    // TODO: implement `size`
    // return this.inbox.size() + this.outbox.size();
    return inbox.size();
  };
};
