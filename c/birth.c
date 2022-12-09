// write a function which adds 1 to age of person in; here we are learning, how to pass structure as pointer
#include <stdio.h>

typedef struct
{
	char *name;
	int age;
} person;

void birthday(person *p)
{
	p->age++;
}
int main()
{
	person ram;
	ram.name = "Ram";
	ram.age = 26;
	printf("\nage of ram before birthday is %d\n", ram.age);
	birthday(&ram);
	printf("\nage of ram after birthday is %d\n", ram.age);
	return 0;
}