/* we start with two pointers, both pointing to start of respective strings,
and we increment both the pointers if both have same characters
else we increment only j (which points to big string)
after our loop is ended because either i >= sl or j>=tl, the we check if our subsequence is exhausted if yes, then we say it is a valid subsequence, other wise not.
 */
bool isSubsequence(char * s, char * t){
    int sl = strlen(s);
    int tl = strlen(t);
    if(tl < sl) return false;
    int j = 0;
    int i = 0;
    while(i < sl && j < tl){
        if(t[j] == s[i]){
            i++;j++;
        } else {
            j++;
        }
    }
    if(i < sl){
        return false;
    }
    return true;
}