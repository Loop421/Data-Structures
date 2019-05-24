class Node
{
  constructor(val)
  {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree
{
  constructor()
  {
    this.root = null;
  }

  insert(val)
  {
    /*
      *Create a new Node
      *Starting at the root
        *Check if there is a root, if not - the root now becomes that new node!
        *If there is root, check if the value of the new node is greater than or less than the value of the root
        *If it is greater
          *Check to see if there is a node to the right
            *If there is, move to that node and repeat these steps
            *If there is not, add that node as the right.property
        *If is less
          *Check to see if there is a node to the left
            *If there is, move to that node and repeat these steps
            *If there is not, add that node as the left property
    */
    var notfinish = true;
    var newNode = new Node(val);

    if(this.root === null)
    {
      this.root = newNode;
      return this;
    }
    else
    {
      var current = this.root;
      while(true)
      {
        if(val === current.val) return undefined;
        if(val < current.val)
        {
          if(current.left === null)
          {
            current.left = newNode;
            return this;
          } else
          {
            current = current.left;
          }
        }
        else if(val > current.val)
        {
          if(current.right === null)
          {
            current.right = newNode;
            return this;
          }
          else
          {
            current = current.right;
          }
        }
      }
    }
    
  }

  Search(val)
  {
    /*
      *Starting at the root
      *Check if there is a root, if not - we're done searching
      *If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
      *If not, check to see if the value is greater than or less than the value of the root
      *If it is greater
        *Check to see if there is a node to the right
        *If there is, move to that node and repeat these steps
        *If there is not, we're done searching
      *If it is less
        *Check to see if there is a node to the left
        *If there is, move to that node and repeat these steps
        *If there is not, we're done searching
    */
    if(this.root === null) return false;

    var current = this.root;
    var found = false;
    while(current && !found)
    {
      if(val < current.val)
      {
        current = current.left;
      }
      else if(val > current.val)
      {
        current = current.right;
      } else
      {
        found = true;
      }
    }
    if(!found) return undefined;
    return current;
  }
  
  breadthFirstSearch()
  {
    /*
      *Create a queue and a variable to store the values of nodes visited
      *Place the root node in the queue
      *Loop as long as there is anything in the queue
      *Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
      *If there is a left property on the node Dequeue - add it to the queue
      *If there is a right property on the node Dequeue - add it to the 
      *Return the variable that stores the values
    */
    var node = this.root,
        data = [],
        queue = [];

    queue.push(node);
    while(queue.length)
    {
      node = queue.shift();
      data.push(node.val);

      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    return data;

  }
  
  DFSPerOrder()
  {
    /*
      Depth First Search - PerOrder
      *Create a variable to store that values of nodes visited
      *Store the root of the BST in a variable called current
      *Write a helper function which accepts a node
      *Push the value of the node to the variable that stores
      *If the node has a left property, call the helper function with left property on the node
      *If the node has a right property, call the helper function with right property on the node
      *Invoke the helper function with the current variable
      *Return the array of values
    */
    var data = [],
        current = this.root;
        function traverse(node)
        {
          data.push(node.val);
          if(node.left) traverse(node.left);
          if(node.right) traverse(node.right);
        }
        traverse(current);
        console.log(data);
    return data;

  }
  
  DFSPostOrder()
  {
    /*
      Depth First Search - PostOrder
      *Create a variable to store the values of nodes visited
      *Store the root of the BST in a variable called current
      *Write a helper function which accepts a node
      *If the node has a left property, call the helper function with the left property on the node
      *If the node has a right property, call the helper function with right property on the node
      *Push the value of the node to the variable that stores the values
      *Invoke the helper function with current variable
      *Return the array of values
    */
    var data = [];
        
    function traverse(node)
    {
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      data.push(node.val);
    }
    traverse(this.root);
    console.log(data);
    return data;
  }
  
  DFSInOrder()
  {
    /*
      Depth First Search - PostOrder
      *Create a variable to store the values of nodes visited
      *Store the root of the BST in a variable called current
      *Write a helper function which accepts a node
      *If the node has a left property, call the helper function with the left property on the node
      *Push the value of the node to the variable that stores the values
      *If the node has a right property, call the helper function with right property on the node
      *Invoke the helper function with current variable
      *Return the array of values
    */

    var data = [];
        
    function traverse(node)
    {
      if(node.left) traverse(node.left);
      data.push(node.val);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    console.log(data);
    return data;
  }
}
