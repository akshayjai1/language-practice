int main(){
    // string s = "00100100";
    string s = "10000";
    int K = 2;
    int n = s.size();
    set<int> ss;
    for(int i = 0; i < n; i++){
        if(s[i]=='1'){
            ss.insert(i);
            int j = i + 1;
            while(j <= i + K && j < n){
                if (ss.find(j) == ss.end()){
                    ss.insert(j);
                    // cout << "\ninserting j = " << j << " --";
                    // cout << ss.size() << "-- size" ;
                    j++;
                } else {
                    break;
                }

            }
            j = i - 1;
            // cout << "second part "<< j << endl;
            while(j >= i - K && j >= 0){
                // cout << "inserting j = " << j << " --";
                if (ss.find(j) == ss.end()){
                    ss.insert(j);
                    // cout << "\ninserting j = " << j << " --";
                    // cout << ss.size() << "-- size" ;
                    j--;
                } else {
                    break;
                }
            }
        }
    }
    // cout << "\n ans => "<< ss.size()<<endl;
    return ss.size();

}