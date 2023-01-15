// working solution
/* this is created without hashmap so it is more efficient */
bool isIsomorphic(char *s, char *t)
{
	char a[127] = {0};
	char b[127] = {0};
	int n = strlen(s);
	// int n1 = strlen(t);
	// if(n != n1) return false;
	for (int i = 0; i < n; i++)
	{
		if ((a[s[i]] || b[t[i]]) && (a[s[i]] != t[i] || b[t[i]] != s[i]))
		{
			return false;
		}
		else
		{
			a[s[i]] = t[i];
			b[t[i]] = s[i];
		}
	}
	return true;
}

char *createCode(char *s)
{
	// create a pointer of pointer of string, to store string array;
	// unordered_map<char, char[]> cm;
	int i = 0;
	char[] res = "";
	for (int k = 0; s[k] != 0; k++)
	{
		if (cm[s[k]])
		{
			res = strcat(res, strcat(cm[s[k]], "."));
		}
		else
		{
			cm[s[k]] = strcat(i, "");
			res = strcat(res, strcat(cm[s[k]], "."));
			res += cm[s[k]] + "."
		}
	}
	return res;
}
bool isIsomorphic(char *s, char *t)
{
	char *a = createCode(s);
	char *b = createCode(t);
	return strcmp(a, b);
	// if( a.size() != b.size()) return false;
	// for(int i = 0; i < a.size() && i < b.size(); i++){
	//     if(a[i] != b[i]){
	//         return false;
	//     }
	// }
	// return true;
}
