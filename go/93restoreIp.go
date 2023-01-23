func restoreIpAddresses(s string) []string {
	var res []string
	if len(s) > 12 { return res }
	var backtrack func(int,int,string)
	backtrack = func(start,noOfDots int, ip string){
			if noOfDots > 4 { return }

			if noOfDots == 4 && start == len(s){
					ni  := ip[0:len(ip)-1]
					res = append(res, ni)
			}

			for i:= start; i < min(start + 3,len(s)); i++ {
					sub := s[start:i+1]

					if(isValidSub(sub)){
							backtrack(i+1, noOfDots + 1, ip + sub + '.')
					}
			}
	}
	backtrack(0,0,"")
	return res
}
func isValidSub(str string) bool {
	if len(str) > 1 && str[0] == '0'{ return false}
	val,err := strconv.Atoi(str)
	if err != nil {
			return false
	}

	return val >=0 && val < 256
}
func min(a, b int) int {
	if a < b {
			return a
	}
	return b
}
