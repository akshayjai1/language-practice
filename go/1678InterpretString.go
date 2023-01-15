func interpret(command string) string {
	var s string = ""
	for i:= 0; i < len(command); i++{
			if string(command[i]) == "(" {
					if string(command[i+1]) ==")" {
							s+="o"
							i++
					} else {
							s+="al"
							i+=3
					}

			} else {
					s+="G"
			}
	}
	return s
}