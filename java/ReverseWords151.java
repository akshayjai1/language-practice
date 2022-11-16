import java.util.Arrays;
import java.util.Collections;

class ReverseWords151 {
	public String reverseWords(String s) {
		String [] words = s.trim().split(" +");
		Collections.reverse(Arrays.asList(words));
		return String.join(" ",words);
	}

	public static void main(String [] args){
		ReverseWords151 s = new ReverseWords151();
		String n = s.reverseWords(" the sky ss    is blue");
		System.out.println(n);
	}
}

