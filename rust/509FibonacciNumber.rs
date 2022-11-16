impl Solution {
	pub fn fib(n: i32) -> i32 {
			let mut a = 0;
			let mut b = 1;
			// 0,1 when n = 2, i.e. 2 iterations
			for _ in 0..n {
					let temp = b;
					b = a + b;
					a = temp;
			}
			return a;
	}
}

impl Solution {
	pub fn fib(n: i32) -> i32 {
			if n == 0 {
					return 0;
			}
			if  n == 1 {
					return 1;
			}
			return Self::fib(n-1) + Self::fib(n - 2);
	}
}

impl Solution {
	pub fn fib(n: i32) -> i32 {
			(0..n)
					.fold((0, 1), |(a, b), _| (b, a + b))
					.0
	}
}

impl Solution {
	pub fn fib(n: i32) -> i32 {
			fn calculate (n: i32) -> i32 {
					if n == 1 {
							return 1;
					}
					if n == 0 {
							return 0;
					}
					return calculate(n - 1) + calculate(n - 2);
			}

			calculate(n)
	}
}	