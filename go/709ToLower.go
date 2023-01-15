func toLowerCase(s string) string {
	res:=make([]rune,len(s))
	for i,ch:=range s {
			if ch >= 'A' && ch <= 'Z' {
					res[i] = ch+32
					continue
			}
			res[i]=ch
	}
	return string(res)
}