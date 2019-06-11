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
  depthFirstRecursive(start)
  {
    /*
      -The function should accept a starting node
      -Create a list to store the end result, to be returned at the very end
      -Create an object to store visited vertices
      -Create a helper function which accept a vertex
        -The helper function should return early if the vertex is empty
        -The helper function should place the vertex it accepts into the
         visited object and push that vertex into the result array
        -Loop over all of the values in the adjacencyList for that vertex
        -if any of those values have not been visited, recursively invoke
         the helper function with that vertex
      -invoke the helper function with starting vertex
      -Return the result array
    */
    let result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex)
    {
      if(!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor =>
      {
        if(!visited[neighbor])
        {
          return dfs(neighbor)
        }
      });
    })(start);

    return result;
    
  }
  depthFirstIterative(start)
  {
    /*
      -The function should accept a starting node
      -Create a stack to help use keep track of vertices(use a list/array)
      -Create a list to store the end result, to be returned at the very end
      -Create an object to store visited vertices
      -Add the starting vertex to the stack, and mark it visited
      -While the stack has something in it:
        -Pop the next vertex from the stack
        -Add it to the result list
        -If that vertex hasn't been visited yet:
          -Mark it as visited
          -Push all of it neighbors into the stack
      -Return the result array
    */
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    while(stack.length)
    {
      currentVertex = stack.pop();
      result.push(currentVertex);
      
      this.adjacencyList[currentVertex].forEach(neighbor =>
      { 
        if(!visited[neighbor])
        {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
}
