func findTheDifference(s string, t string) byte {
	var out = t[len(t) - 1]
	for i:=0; i < len(s); i++ {
			out^=s[i]^t[i]
	}
	return out
}
// https://www.youtube.com/watch?v=sRwElQ_TOr8