function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var a = [1, 2, 3];
for(let x = 0;x < a.length;x+=3) {
	let l = new TreeNode(a[2 * x + 1]);
	let r = new TreeNode(a[2 * x + 2]);
	let t = new TreeNode(a[x], l, r);
}

class Tree{
	constructor(val) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : new Tree(left);
		this.right = right === undefined ? null : new Tree(right);
	}
	createTree(ar) {
		let t = new Tree(ar[0], ar[1], ar[2]);
		for(let i = 0;i < ar.length;i += 3){

		}
	}
}