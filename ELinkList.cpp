#include <iostream>
#include <stdio.h>   
#include <stdlib.h>

struct ELinkList
{
  public:
  int head;
  ELinkList *next;

};

 void printList(struct ELinkList *n) 
{ 
  while (n != NULL) 
  { 
     printf(" %d ", n->head); 
     n = n->next; 
  } 
}   

int main()
{
  ELinkList* head;
  ELinkList* second;
  ELinkList* thrid;

  head = new ELinkList();
  second = new ELinkList();
  thrid = new ELinkList();

  // head  = (struct ELinkList*)malloc(sizeof(struct ELinkList));  
  // second = (struct ELinkList*)malloc(sizeof(struct ELinkList)); 
  // thrid  = (struct ELinkList*)malloc(sizeof(struct ELinkList)); 

  head->head = 1;
  head->next = second;

  second->head = 2;

  second->next = thrid;

  thrid->head = 3;

  thrid->next = NULL;

  printList(head);
}
