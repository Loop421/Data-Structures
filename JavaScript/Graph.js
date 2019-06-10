//Undirected Graph
class Graph 
{
  constructor()
  {
    this.adjacencyList = {};
  }

  addVertex(vertex)
  {
    /*
      -Write a method called addVertex, which accepts a name of a vertex
      -It should add a key to the adjacency list with the name of the vertex 
       and set its value to be an empty array
    */
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2)
  {
    /*
      -This function should accept two vertices, we can call them vertex1 and vertex2
      -The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
      -The function should find in the adjacency list the key of vertex2 and push vertex1 to the array 
    */
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2)
  {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
    );
  }

  removeVertex(vertex)
  {
    /*
      -The function should accept a vertex to remove
      -The function should loop as long as the there are any other
       vertices in the adjacency list for that vertex
      -Inside of the loop, call our removeEdge function with the
       vertex we are removing and any values in the adjacency list
       for that vertex
      -delete the key in the adjacency list for that vertex
    */
    while(this.adjacencyList[vertex].length)
    {
      const adjacencyVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacencyVertex);
    }

    delete this.adjacencyList[vertex];
  }
}
