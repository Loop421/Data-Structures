public class SinglyLinkedlist
{
  Node head;
  Node tail;
  int length = 0;

  static class Node
  {
    int data;
    Node next;// Next is by default initialized as null

    Node(int d) 
    { 
      data = d;
      next = null; 
    }  
  }

  public SinglyLinkedlist push(int data)
  {

    Node newNode = new Node(data); 
    newNode.next = null;

    if(this.head == null)
    {
      this.head = newNode;
      this.tail = this.head;
    }
    else
    {
      this.tail.next = newNode;
      this.tail = newNode;
      // Node last = list.head;
      // while(last.next != null)
      // {
      //   last = last.next;
      // }

      // last.next = newNode;
    }
    this.length++;
    return this;
  }

  public int pop()
  {
    if(this.head == null) return -1;
    
    Node current = this.head;
    Node newTail = current;
    while(current.next != null)
    {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    // int node = current.data;

    return current.data;
  }

  public int shift()
  {
    if(this.head == null) return -1;

    Node current = this.head;
    this.head = current.next;
    this.length--;

    if(this.length == 0)
    {
      this.head = null;
      this.tail = null;
    }
    return current.data;
  }

  public static void printList(SinglyLinkedlist list)
  {
    Node currentNode = list.head;
    System.out.print("SinglyLinkedlist: ");

    while(currentNode != null)
    {
      System.out.print(currentNode.data + " ");

      currentNode = currentNode.next;
    }
  }
}
