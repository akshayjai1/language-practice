#include <stdio.h>
#include <string.h>

int main()
{
	int l = 0;
	double b = 33.3;
	float c = 380.23;
	float sum = l + b + c;
	printf("\nsum of numbers is %f\n", sum);

	int a[10];
	for (int i = 0; i < 10; i++)
	{
		a[i] = i;
	}
	int sum2 = 0;
	for (int i = 0; i < sizeof(a); i++)
	{
		sum2 += a[i];
	}
	printf("\nsum of numbers is %d\n", sum2);

	char dest[20] = "Hello";
	char src[20] = "World";
	strncat(dest, src, 3);
	printf("%s\n", dest);
	strncat(dest, src, 20);
	printf("%s\n", dest);

	return 0;
}