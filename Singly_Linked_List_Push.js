// piece of data - val
// refernce to next node - next

class Node{
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
    this.lenght = 0
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
}

var list = new SinglyLinkedList();
list.push("Hi");
list.push("there");
console.log(list);
