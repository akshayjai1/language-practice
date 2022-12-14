#include <stdio.h>
#include <stdlib.h>

typedef struct node
{
	int value;
	struct node *next;
} node_t;
node_t *head = NULL;

/* Iterating over list */
void printLinkedList(node_t *head)
{
	printf("\nstart of function printLinkedList \n");
	node_t *current = head;
	while (current != NULL)
	{
		printf("\n %d", (current)->value);
		current = current->next;
	}

	printf("\nend of function printLinkedList \n");
}

void push(node_t **head, int data)
{
	printf("\n pushing %d to list", data);
	node_t *current = *head;
	while (current->next != NULL)
	{
		current = current->next;
	}
	current->next = (node_t *)malloc(sizeof(node_t));
	current->next->value = data;
	current->next->next = NULL;
}

void addToStart(node_t **head, int data)
{
	printf("Adding %d to start of list", data);
	// allocate new memory
	node_t *newAddress = (node_t *)malloc(sizeof(node_t));
	newAddress->value = data;
	// make newAddress's next point to head
	newAddress->next = *head;
	// put newAddress in head
	*head = newAddress;
}

int removeFirst(node_t **head)
{
	printf("removing first item from list = %d", (*head)->value);
	int return_value = (*head)->value;
	(*head) = (*head)->next;
	return return_value;
}
int remove_last(node_t **head)
{
	printf("\nremoving last item from list\n");
	/*
	pseudo code: how we will remove the last, in order to remove the last, we will have to traverse to the last node, after traversing to the last node, the ret_value will be value of last node and last_node->next is null, we have to keep reference of a node previous to it, and make the next of the previous node to equal null and

	that means first we have to write the while loop to go to end
	*/
	/* boundary condition if the current item is the only item, we return it and set head to point to null */
	int ret_value;
	if ((*head)->next == NULL)
	{
		ret_value = (*head)->value;
		free(*head);
		return ret_value;
	}
	node_t *current = *head;
	while (current->next->next != NULL)
	{
		current = current->next;
		// when this while loop ends, current next will be null, this this the time, we have to first set the ret_value
	}
	ret_value = current->next->value;
	free(current->next);
	return ret_value;
}

int remove_nthItemByIndex(node_t **head, int n)
{
	/* pseudo code
		we want to remove nth Item, in order to remove nth item, we have to reach nth item first, then
		it"s value should be returned and whatever it is pointing to , should be stored in it"s previous thing
	 cases
	 case 1: length of list is less than n;
		then we cannot return anything, we have to throw error.
		case 2:
	 */
	int current_index = -1;
	int return_value;
	if (*head != NULL && n == 0)
	{
		current_index += 1;
		free(*head);
		return_value = (*head)->value;
		return return_value;
	}
	node_t *current = *head;
	while (current->next != NULL)
	{ /* while there is next node available, we increment the index,
	if this is the index to be removed, then we get the node value and return that node value from the function, and mark current->next = current -> next -> next(with this we have dropped the next element reference)
	 + we have to create a temp variable, which will store initial current -> next, then we can call free on this temporary variable
	else
	 current should be = current-> next, i.e. we should repeat same on current->next
	 */
		current_index++;
		if (n == current_index)
		{
			return_value = current->next->value;
			current->next = current->next->next;
		}
	}
}
int main()
{
	head = (node_t *)malloc(sizeof(node_t));
	head->value = 1;
	head->next = (node_t *)malloc(sizeof(node_t));
	head->next->value = 2;
	head->next->next = NULL;
	printLinkedList(head);
	push(&head, 3);
	push(&head, 4);
	push(&head, 5);
	push(&head, 6);
	printLinkedList(head);
	addToStart(&head, 0);
	printLinkedList(head);
	removeFirst(&head);
	printLinkedList(head);
	printf(remove_last(&head));
	printLinkedList(head);
	return 0;
}