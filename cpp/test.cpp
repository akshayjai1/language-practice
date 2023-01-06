#include<iostream>
using namespace std;
class IndiaBix
{
    int x, y;
    public:
    IndiaBix(int xx)
    {
        x = ++xx;
    }
    ~IndiaBix()
    {
				cout << "\n";
				cout << "hello";
				cout << x - 1 << " ";
		}
    void Display()
    {
				cout <<"e" << "\n"<<"d";
				cout << "display";
				cout << --x + 1 << " ";
		}
};
int main()
{
		cout << "\n";
		IndiaBix objBix(5);
		objBix.Display();
    // int *p = (int*) &objBix;
    // *p = 40;
    // objBix.Display();
    return 0;
}