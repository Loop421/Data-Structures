class Node {
  constructor(val)
  {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor()
  {
    this.head = null;
    this.tail = null;
    this.lenght = 0;
  }

  push(val)
  {
    var newNode = new Node(val);

    if(!this.head)
    {
      this.head = newNode;
      this.tail = this.head;
    }
    else 
    {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.lenght++;
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
    this.lenght--;

    if(this.lenght == 0)
    {
      this.head = null;
      this.tail = null;
    }

    return current;
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

console.log(list.pop());
console.log(list);
console.log(list.pop());
console.log(list);
console.log(list.pop());
console.log(list.pop());
// list.traverse();
