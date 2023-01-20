impl Solution {
	pub fn insert(intervals: Vec<Vec<i32>>, new_interval: Vec<i32>) -> Vec<Vec<i32>> {
			use std::cmp::{min, max};
			let mut ans = vec![];
			let mut right = vec![];
			let n = intervals.len();
			let mut s = new_interval[0];
			let mut e = new_interval[1];
			for curr in intervals {
					if curr[1] < new_interval[0] {
							ans.push(curr)
					} else if curr[0] > new_interval[1] {
							right.push(curr);
					} else {
							s = min(s, curr[0]);
							e = max(e, curr[1]);
					}
			}
			ans.push(vec![s,e]);
			ans.append(&mut right);
			ans
	}
}