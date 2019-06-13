class WeightedGraph
{
  constructor()
  {
    this.adjacencyList = {};
  }
  addVertex(vertex)
  {
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight)
  {
    this.adjacencyList[vertex1].push({node: vertex2, weight});
    this.adjacencyList[vertex2].push({node: vertex1, weight});
  }
  Dijkstra(start, finish)
  {
    /*
      -This function should accept a starting and ending vertex
      -Create an object and set each key to be every vertex in the adjacency list
       with a value of infinity, except for the starting vertex which should have
       value of 0
      -After setting a value in the distances object, add each vertex with a priority
       of infinity to the priority queue, except the starting vertex, which should
       have a priority of 0 because that's where we begin
      -Create another object called previous and set each key to be every vertex in
       the adjacency list with a value of null
      -Start looping as long as there is anything in the priority queue
        -dequeue a vertex from the priority queue
        -If that vertex is the same as the ending vertex - we are done
        -Otherwise loop through each value in the adjacency list at that vertex
          -Calculate the distance to that vertex from the starting vertex
          -If the distance is less than what is currently stored in our distances
           object
            -update the distance object with new lower distance
            -update the previous object to contain that vertex
            -enqueue the vertex with total distance from the start node
    */

    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [] //to return at end
    let smallest;

    //build up initial state
    for(let vertex in this.adjacencyList)
    {
      if(vertex === start)
      {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      }
      else
      {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    
    // as long as there is something to visit
    while(nodes.values.length)
    {
      smallest = nodes.dequeue().val; //A
      if(smallest === finish)
      {
        //WE ARE DONE
        //BUILD UP PATH TO RETURN AT END
        while(previous[smallest])
        {
          
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if(smallest || distances[smallest] !== Infinity)
      {
        
        for (let neighbor in this.adjacencyList[smallest])
        {
          //find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          //Calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;

          let nextNeightbor = nextNode.node;
          
          if(candidate < distances[nextNode.node])
          {
            //updating new smallest distance to neighbor
            distances[nextNeightbor] = candidate;
            //updating previous - How we got to next node
            previous[nextNeightbor] = smallest;
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNeightbor, candidate);
          }
        }
      }
    }
    
    return path.concat(smallest).reverse();
  }
}

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
    this.values = [];
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
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp()
  {
    let index = this.values.length - 1;
    const element = this.values[index];
    while(index > 0)
    {
      let parentIndex = Math.floor((index-1)/2);
      let parent = this.values[parentIndex];

      if(element.priority >= parent.priority) break;
      
      this.values[parentIndex] = element;
      this.values[index] = parent;
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
    
    
    const min = this.values[0];
    const end = this.values.pop();
    if(this.values.length > 0)
    {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown()
  {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while(true)
    {
      let leftChildIndex = (2*index) + 1;
      let rightChildIndex = (2*index) + 2;
      let rightChild, leftChild;
      let swap = null;

      if(leftChildIndex < length)
      {
        leftChild = this.values[leftChildIndex];
        if(leftChild.priority < element.priority)
        {
          swap = leftChildIndex;
        }
      }
      if(rightChildIndex < length)
      {
        rightChild = this.values[rightChildIndex];
        if((swap === null && rightChild.priority < element.priority)
        || (swap !== null && rightChild.priority < leftChild.priority))
        {
          swap = rightChildIndex;
        }
      }
      if(swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}




var g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A","B",4);
g.addEdge("A","C",2);
g.addEdge("B","E",3);
g.addEdge("C","D",2);
g.addEdge("C","F",4);
g.addEdge("D","E",3);
g.addEdge("D","F",1);
g.addEdge("E","F",1);

console.log(g.Dijkstra("A", "E"));
// console.log(g.adjacencyList);
