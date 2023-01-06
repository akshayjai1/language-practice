// https://leetcode.com/problems/maximum-ice-cream-bars/solutions/3005125/c-java-c-python-explained-beats-100/
int comparator(const void *p, const void *q)
{
	return (*(int *)p - *(int *)q);
}
int maxIceCream(int *costs, int costsSize, int coins)
{
	qsort((void *)costs, costsSize, sizeof(costs[0]), comparator);
	for (int i = 0; i < costsSize; i++)
	{
		if ((coins - costs[i]) < 0)
			return i;
		coins -= costs[i];
	}
	return costsSize;
}