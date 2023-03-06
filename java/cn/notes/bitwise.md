~x == (x + 1) * -1
binary representation of -x == 2's complement of binary representation of x
2's complement of x => invert the bits of binary representation of x, and then add 1

42 , 6 bits normally, and to be cautious, we take 8 bits so it in binary = 00101010
i have studied, ~42 == -43, since ~3 == -4
now what is binary representation of -4, it is negative, 4 takes 3 bits and for negative 1 more bit, total 4 bits, rest 4 bits are placeholders, so representation of -4 = first take 1s complement of 4 and then add 1.
1s complement of 4 = 1s(0000 0100) = 1111 1011, now add 1 =>1111 1100 this is binary representation of -4;this is also binary representation of ~3

a=5
a+=5+(++a)+(a++);
a= a + 5+ (6)+(6)//a=7
a=a+17=> 22

public static void main (String[] args) {
    int a=10;
    a+=++a-5/3+6*a;
    System.out.print(a);
} ans = 86

there are 4 components in for loop, initialization(i),condition(c),body(b),afterWork(a);
the sequence of for loop is as follows; i cba cba cba, if c returns false, for loop ends.
# -
public static void main (String[] args) {
    int i=0;
    for(;;)
    {
        if(i==5)
            break;
        System.out.print(i);
        i++;
    }
} 01234
# - will produce error, unreachable code
for(int i=1;;i++)
    {   if(i>5)
        {
            break;
            System.out.print("break statement reached");
        }
        System.out.print(i);
    }
# 1 2 with inifinite loop
int i = 1;
while(i < 5) {
    if(i == 3) {
        continue;
    }
    System.out.print(i + " ");
    i++;
}
https://www.geeksforgeeks.org/sieve-of-eratosthenes/
https://www.youtube.com/watch?v=pAX4xp6LK18

# there is no pass by reference in java.