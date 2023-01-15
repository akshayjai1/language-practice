func mergeAlternately(word1 string, word2 string) string {
	i:=0
	j:=0
	k:=0
	a:=len(word1)
	b:=len(word2)
	l := a+b
	var s string = ""
	for k < l {
			if i < a{
					s+=string(word1[i])
					i++
			}
			if j < b{
					s+=string(word2[j])
					j++
			}
			k++
	}
	return s
}