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
    this.length = 0;
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

  shift()
  {
    /*
      Shift pseudocode
      *If there are nodes, return undefined
      *Store the current head property in variable
      *Set the head property to be the current head next property
      *Decrement the lenght by 1
      *Return the value of the node removed
    */
    
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

}



var list = new SinglyLinkedList();

list.push("HELLO");
list.push("GOODBYE");
list.push("!");

console.log(list.shift())
console.log(list);
// list.traverse();
