var pos=make([] int,'z'-'a' + 1)
func inOrder(s,t string) bool {
    ls := len(s)
    lt := len(t)
    for i:= 0 ; i < ls && i < lt; i++ {
        a,b := s[i] - 'a', t[i] - 'a'
        if pos[a] > pos[b]{
            return false
        } else if pos[a] < pos[b]{
            return true
        }
    }
    return len(s) <= len(t)
}
func isAlienSorted(words []string, order string) bool {
    for i := range order {
        pos[order[i]-'a'] = i
    }
    for i:=1; i < len(words); i++ {
        if !inOrder(words[i-1],words[i]) {
            return false
        }
    }
    return true
}
// https://leetcode.com/problems/verifying-an-alien-dictionary/solutions/442016/clean-go-solution/
// https://leetcode.com/problems/verifying-an-alien-dictionary/solutions/1149930/python-go-o-w-by-index-mapping-w-hint/