import java.util.Stack;

public class DecodeString394 {
	public static void main(String args[]) {
		DecodeString394 d = new DecodeString394();
		String input = "3[a]2[bc]4[d]";
		// String input = "3[a2[c]]";
		String output = d.decodeString(input);
		System.out.println("This is output " + output + " for input = " + input);
	}

	public String decodeString(String s) {
		Stack<String> ss = new Stack<>();
		Stack<Integer> is = new Stack<>();
		int ptr = 0;
		String res = "";
		while (ptr < s.length()) {
			char c = s.charAt(ptr);
			String ptrc = ptr + " " + c;
			if (Character.isDigit(c)) {
				int num = 0;
				while (Character.isDigit(s.charAt(ptr))) {
					num = num * 10 + s.charAt(ptr) - '0';
					ptr++;
				}
				is.push(num);
				System.out.println(ptrc + " added  " + num + " to integer stack");
			} else if (c == '['){
				ss.push(res);
				System.out.println(ptrc + " added  " + res + " to string stack");
				res = "";
				ptr++;
			} else if (c == ']') {
				String initial = ss.pop();
				StringBuilder sb = new StringBuilder(initial);
				System.out.println(ptrc + " created string builder with   " + initial + " ");
				int count = is.pop();
				for (int i = 0; i < count; i++) {
					sb.append(res);
					System.out.println(ptrc + " added  " + res + " to string builder");
				};
				res = sb.toString();
				System.out.println(ptrc + " finally put  " + res + " in res");
				ptr++;
			} else {
				res += c;
				System.out.println(ptrc + " res+=  " + c + " final res = " + res);
				ptr++;
			}
		}
		return res;
	}
}
