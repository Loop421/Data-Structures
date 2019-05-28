//MinBinaryHeap
class Node
{
  constructor(val, priority)
  {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue
{
  constructor()
  {
    this.value = [];
  }

  enqueue(val, property)
  {
    /*
      *Push the value and priority into the values, priority property on the heap
      *Bubble Up:
        *Create a variable called index which is the length of the 
        *Create a variable called parentIndex which is the floor of (index-1)/2
        *Keep looping as long as the values element at the parentIndex is less than the values element at the child index
          *Swap the value of the value element at the parentIndex with value of the element of property at the child index
          *Set the index to be the parentIndex, and start over
    */
    let newNode = new Node(val, property);
    this.value.push(newNode);
    this.bubbleUp();
  }
  bubbleUp()
  {
    let index = this.value.length - 1;
    const element = this.value[index];
    while(index > 0)
    {
      let parentIndex = Math.floor((index-1)/2);
      let parent = this.value[parentIndex];

      if(element.priority >= parent.priority) break;
      
      this.value[parentIndex] = element;
      this.value[index] = parent;
      index = parentIndex;
    }
  }
  dequeue()
  {
    /*
      *Swap the first value in the values property with the last one
      *Pop from the values property, so you can return the value at the end
      *Have the new root "sink down" to the correct spot...
        *Your parent index starts at 0 (the root)
        *Find the index of the left child: 2*index + 1
        *Find the index of the right child: 2*index + 2
        *If the left or right priority is less than element...swap. If both left and right children are high priority, swap with the highest priority.
        *The child index you swapped to now becomes the new parent index
        *Keep looping and swapping until neither child is larger than the element.
        Return the old root
    */
    
    
    const min = this.value[0];
    const end = this.value.pop();
    if(this.value.length > 0)
    {
      this.value[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown()
  {
    let index = 0;
    const length = this.value.length;
    const element = this.value[0];
    while(true)
    {
      let leftChildIndex = (2*index) + 1;
      let rightChildIndex = (2*index) + 2;
      let rightChild, leftChild;
      let swap = null;

      if(leftChildIndex < length)
      {
        leftChild = this.value[leftChildIndex];
        if(leftChild.priority < element.priority)
        {
          swap = leftChildIndex;
        }
      }
      if(rightChildIndex < length)
      {
        rightChild = this.value[rightChildIndex];
        if((swap === null && rightChild.priority < element.priority)
        || (swap !== null && rightChild.priority < leftChild.priority))
        {
          swap = rightChildIndex;
        }
      }
      if(swap === null) break;
      this.value[index] = this.value[swap];
      this.value[swap] = element;
      index = swap;
    }
  }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("High fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);



// console.log(ER.value);

