func smallestEquivalentString(s1 string, s2 string, baseStr string) string {
	parent := make([] byte, 26)
	for i := 0; i < 26; i++ {
			parent[i] = byte(i)
	}
	for i:=0; i < len(s1) ; i++ {
			union(s1[i] - 'a', s2[i] - 'a', parent)
	}
	var s string = ""
	for i := 0; i < len(baseStr);i++ {
			s+= string('a' + find(baseStr[i] - 'a', parent))
	}
	return s
	}

	func union(u,v byte, parent []byte ) {
			var pu byte = find(u, parent)
			var pv byte = find(v, parent)
			if pu < pv {
					parent[pv] = pu
			} else {
					parent[pu] = pv
			}
	}

	func find(b byte, parent [] byte) byte {
			if parent[b] == b {
					return b
			}
			parent[b] = find(parent[b], parent)
			return parent[b]
	}