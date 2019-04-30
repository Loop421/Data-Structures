// piece of data - val
// refernce to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // traverse()
  // {
  //   var current = this.head;
  //   while(current)
  //   {
  //     console.log(current.val);
  //     current = current.next;
  //   }
  // }
  pop() 
  {
    /*
    Poping pseudocode
    *if there are no node in the list, return undefined
    *Store the current head property in variable
    *create a var to be the new tail of the list and set the same as current head
    *Loop through the list until you reach the tail
    *In the loop set the new tail to current head
    *Set the current to the next property
    *Outside the loop
    *Set the tail to be the 2nd to last node
    *Set the next property of the 2nd to last node to be null
    *Decrement the lenght of the list by 1
    *Return the value of the node removed
    */  
    if(!this.head) return undefined;

    var current = this.head;
    var newTail = current;
    while(current.next)
    {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    return current;


  }

  shift() 
  {
    
    if(!this.head) return undefined;

    var current = this.head;
    this.head = current.next;
    this.length--;

    if(this.length == 0)
    {
      this.head = null;
      this.tail = null;
    }

    return current;

   
  }

  unShift(val) 
  {
   
    var newHead = new Node(val);

    if(!this.head)
    {
      this.head = newHead;
      this.tail = newHead;

    }
    else 
    {
      newHead.next = this.head;
      this.head = newHead;
    }

    this.length++;
    return this;

  }

  get(index)
  {
    /*
      *This function should accept an index
      *If the index is less than zero or greater than or equal to 
      the length of the list, return null
      *Loop through the list until you reach the index and return 
      the node at that specific index
    */

    if(index < 0 || index >= this.length) return null;
    
    var count = 0;
    var current = this.head;
    while(count !== index)
    {
      current = current.next;
      count++;
    }
    
    console.log(current.val);

    return current;

  }

  set(index, val)
  {
    /*
      *This funciton should accept a value and an index
      *Use your get function to find the specific node
      *if the node is not found return false
      *if the node if found, set the value of that node to be there
      value passes to the function and return true
    */
    var foundNode = this.get(index);
    if(foundNode)
    {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  
  insert(index, val)
  {
    /*
      Insert pseudocode
      *if the index is less than zero or greater than the length, return false
      *if the index is the same as the length, push new node to the end of the list
      *if the index is 0, unshift a new node to the start of the list
      *Otherwise, using the get method, access the node at the index - 1
      *Set the next property on that node to be the new node
      *Set the next property on the new node to be the previous next
      *Increment the length
      *return true
    */

    // if((index < 0) || (index > this.length)) return false;

    // one bang -> ! would return false depend what follow after
    // two bangs -> !! would return true depend what follow after
    // if(index == this.length) return !!this.push(val);

    // if(index == 0) return !!this.unShift(val);

    if(index < 0 || index > this.length)
    {
      return false;
    }
    else if(index == 0)
    {
      this.unShift(val);
      return true;
    }
    else if(index == this.length)
    {
      this.push(val);
      return true;
    }
    var newNode = new Node(val);

    var prev = this.get(index - 1);

    var temp = prev.next;

    prev.next = newNode;

    newNode.next = temp;

    this.length++

    return true;


  }
  
  remove(index)
  {
    /*
      Remove pseudocode
      *if the index is less than zero or greater than the length return undefinded
      *if the index is the same as the length - 1, pop
      *if the is 0, shift
      *Otherwise, using the get method, access the node at the index - 1
      *Set the next property on that node to be the next of the next node
      *Decrement the length
      *Return the value of the node removed
    */

    if((index < 0) || (index >= this.length))
    {
      return undefined;
    }
    else if(index == 0)
    {
      return this.shift();
    }
    else if(index == this.length - 1)
    {
      return this.pop();
    }
    

    var prev = this.get(index - 1);
    var removeNode = prev.next;
    prev.next = removeNode.next;
    this.length--;
    return removeNode;

  }

  reverse()
  {
    /*
      Reverse pseudocode
      *Swap the head and tail
      *Create a variable called next
      *Create a variable called prev
      *Create a variable called node and initialize it to the head property
      *Loop through the list
      *Set next to be the next property on whatever node insert
      *Set the next property on the node to be whatever prev is
      *Set prev to be the value of the node variable
      *Set the node variable to be the value of the next variable

    */

    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var prev = null;
    var next;

    for(var i = 0; i < this.length; i++)
    {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }
    
}

// var first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

var list = new SinglyLinkedList();

list.push("HELLO");
list.push("GOODBYE");
list.push("!");

// console.log(list.pop());
// console.log(list);
// list.unShift("Hey");
// console.log(list);

list.get(2);
list.set(2, "!!!");
list.get(2);
console.log(list.tail);

// list.traverse();
