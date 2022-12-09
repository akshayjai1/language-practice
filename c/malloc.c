// how to dynamically allocate memory to structure;
// use malloc to dynamically allocate a point structure
#include <stdio.h>
#include <stdlib.h>

typedef struct
{
	char *name;
	int age;
} person;

typedef struct
{
	int x;
	int y;
} point;

int main()
{

	person *p = (person *)malloc(sizeof(person));
	point *t = malloc(sizeof(point));

	return 0;
}