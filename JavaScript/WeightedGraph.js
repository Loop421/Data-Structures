class PriorityQueue
{
  constructor()
  {
    this.values = [];
  }

  enqueue(val, priority)
  {
    this.values.push({val, priority});
    this.sort();
  }
  dequeue()
  {
    return this.values.shift();
  }
  sort()
  {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

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
      smallest = nodes.dequeue().val;
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
