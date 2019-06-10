class MaxBinaryHeap
{
  constructor()
  {
    this.value = [41,39,33,18,27,12];
  }

  insert(element)
  {
    /*
      *Push the value into the values property on the heap
      *Bubble Up:
        *Create a variable called index which is the length of the 
        *Create a variable called parentIndex which is the floor of (index-1)/2
        *Keep looping as long as the values element at the parentIndex is less than the values element at the child index
          *Swap the value of the value element at the parentIndex with value of the element of property at the child index
          *Set the index to be the parentIndex, and start over
    */
    this.value.push(element);
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

      if(element <= parent) break;
      
      this.value[parentIndex] = element;
      this.value[index] = parent;
      index = parentIndex;
    }
  }
  extractMax()
  {
    /*
      *Swap the first value in the values property with the last one
      *Pop from the values property, so you can return the value at the end
      *Have the new root "sink down" to the correct spot...
        *Your parent index starts at 0 (the root)
        *Find the index of the left child: 2*index + 1
        *Find the index of the right child: 2*index + 2
        *If the left or right child is greater than element...swap. If both left and right children are larger, swap with the largest child.
        *The child index you swapped to now becomes the new parent index
        *Keep looping and swapping until neither child is larger than the element.
        Return the old root
    */
    
    
    const max = this.value[0];
    const end = this.value.pop();
    if(this.value.length > 0)
    {
      this.value[0] = end;
      this.sinkDown();
    }
    return max;
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
        if(leftChild > element)
        {
          swap = leftChildIndex;
        }
      }
      if(rightChildIndex < length)
      {
        rightChild = this.value[rightChildIndex];
        if((swap === null && rightChild > element)
        || (swap !== null && rightChild > leftChild))
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
