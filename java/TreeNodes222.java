// https://leetcode.com/problems/count-complete-tree-nodes/discuss/61958/Concise-Java-solutions-O(log(n)2)
class TreeNodes222 {
	public int countNodes(TreeNode root) {
		int h = height(root);
		if(h < 0){
				return 0;
		} else {
				int hr = height(root.right);
				if(hr + 1 == h){
						return (1 << h) + countNodes(root.right);
				} else {
						return (1 << (h - 1)) + countNodes(root.left);
				}
		}
}
public int height(TreeNode root){
		if(root == null) return -1;
		return 1 + height(root.left);
}

	public static void main(String args[]) {
		System.out.println(2 << -1);
		System.out.println(2 << 5);
		System.out.println(1 << 1);
		System.out.println(1 << 2);
		System.out.println(1 << 3);
		System.out.println(1 << 4);
		System.out.println(1 << 5);
		int number = 8;

        // 2 bit signed right shift
        int Ans = number >> 2;

        System.out.println(Ans);
	}
}