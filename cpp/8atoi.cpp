#include <string>
#include <iostream>

using namespace std;

class Solution {
public:
    int myAtoi(string s) {
        int i =0,base =0,sign=1;
        while(s[i]==' '){i++;}
        if(s[i]=='-'){sign = -1;
					i++;
				}
				else if (s[i]=='+'){
					i++;
				}
				cout << INT_MAX % 10 << endl;
				while (s[i] >= '0' && s[i] <= '9')
				{
					// cout << "i is " << i << s[i] <<"  -- ";
					// cout << "base is = " << base << endl
							//  << s;
					if (base > INT_MAX / 10 || base == INT_MAX / 10 && (s[i] - '0') > INT_MAX % 10)
					{
						if (sign == 1)
							return INT_MAX;
						else
							return INT_MIN;
					}
					base = base * 10 + s[i] - '0';
					i++;
				}
		//     string str=s;
    //      while (str[i] >= '0' && str[i] <= '9') {
		// 			 cout << i<<endl;
		// 			 if (base > INT_MAX / 10 || (base == INT_MAX / 10 && str[i] - '0' > 7))
		// 			 {
		// 				 if (sign == 1)
		// 					 return INT_MAX;
		// 				 else
		// 					 return INT_MIN;
		// 			 }
		// 		base  = 10 * base + (str[i++] - '0');
    // }
        return sign*base;
    }
};
int main(){
		Solution sol;
		string sd = "abc";
		// cout << "length s = " << sd.size() <<" end";
		cout << sol.myAtoi("42") << endl;
};