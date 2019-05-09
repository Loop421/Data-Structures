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
    
  shift()
  {
    /*
      If length is 0, return undefined
      Store the current head property in a variable
      If the length is 1, set the head and tail to null
      Otherwise update the head to be the next of the old head
      Set the head's prev property to null
      Set the old head's next to null
      Decrement the length
      Return old head
    */
    if(!this.head) return undefined;

    var oldHead = this.head;

    if(this.length == 1)
    {
      this.head = null;
      this.tail = null;
    }
    else 
    {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
    
  unshift(val)
  {
    /*
      Create a new node with the value passed to the function
      If the length is 0
        Set the head to be the new node
        Set the tail to be the new node
      Otherwise
        Set the prev property on the head of the list to be the new node
        Set the next property on the new node to be the head property
        Update the head to be the new node
      increment the length
      Return the list
    */
    var newNode = new Node(val);

    if(this.length == 0)
    {
      this.head = newNode;
      this.tail = newNode;
    }
    else
    {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index)
  {
    /*
      If the index is less than 0 or greater or equal to the length, return null
      if the index is less than or equal to half the length of the list
        loop through the list starting from the head and loop towards the middle
        return the node once it is found
      if the index is greater than half the length of the list
        loop through the list starting from the tail and loop towards the middle
        return the node once it is found

    */

    if(index < 0 || index >= this.lenght ) return null;

    if(index <= this.length / 2)
    {
      var count = 0;
      var current = this.head;
      while(count !== index)
      {
        current = current.next;
        count++
      }
      console.log(current.val);
      
    }

    else
    {
      var count = this.length - 1;
      var current = this.tail;
      while(count !== index)
      {
        current = current.prev;
        count--;
      }

      console.log(current.val);

      
    }

    return current;

  }

  set(index, val)
  {
    /*
      Create a variable which is the result of the get method at the index passed to the function
      if the get method returns a vaild node, set the value of that node to be the value passed to the function return true
      Otherwise, return false
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
      If the index is less than zero or greater than or equal to the length return false
      If the index is 0, unshift
      If the index is the same as the length, push
      Use the get method to access the index - 1
      Set the next property on that node to be the new node
      Set the next property on the new node to be the previous next
      Increment the length
      return true
    */

    if(index < 0 || index >= this.length) return false;

    if(index == 0)
    {
      this.unshift(val);
    }
    else if(index == this.length)
    {
      this.push(val);
    }
     var newNode = new Node(val);
     var foundNode = this.get(index - 1);
     var temp = foundNode.next; // store link to the other nodes if there are any

     foundNode.next = newNode;
     newNode.next = temp;
     

     this.length++;
     return true;
    
  }

}
