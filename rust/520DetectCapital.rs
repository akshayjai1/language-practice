impl Solution {
	pub fn detect_capital_use(word: String) -> bool {
					// case 1: check it word.lowercase keeps it same, then its valid
					let s = word.to_lowercase();
					if s == word {
							return true;
					}
					// case 2: check if word.uppercase keeps it same, then its valid
					let s1 = word.to_uppercase();
					if s1 == word {
							return true;
					}
					// case 3: check if first char is upper and rest is lower, then it is valid
					let f = word.chars().next().unwrap().is_uppercase();
					// now next should be all lowercase, because all upper case is covered in point 2
					let rests:String = word.chars().skip(1).collect();
					let rest_lower = rests.to_lowercase();
					if rests == rest_lower {
							return true;
					}
					return false;
	}
}