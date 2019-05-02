class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList
{
  constructor()
  {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val)
  {
    /*
      Create a new node with the value passed to the function
      If the head property is null set the head and tail to be the newly created node
      If not, set the next property on the tail to be that node
      Set the previous property on the newly created node to be the tail
      Set the tail to be the newly created node
      increment the length
      Return the DoublyLinkedList
    */
    var newNode = new Node(val);

    if(!this.head)
    {
      this.head = newNode;
      this.tail = this.head;
    }
    else
    {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop()
  {
    /*
      If there is no head, return undefined
      Store the current tail in variable to return later
      If the length is 1, set the head and tail to be null
      Otherwise update the tail to be the previous Node
      Set the new tail's next to null
      Set the old tail previous to be null
      Decrement the length
      Return the value removed
    */
    if(!this.head) return undefined;

    var oldTail = this.tail; 

    if(this.length == 1)
    {
      this.head = null;
      this.tail = null;
    }
    else
    {
      this.tail = oldTail.prev;
      this.tail.next = null
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
    
  }

}
