// https://leetcode.com/problems/n-ary-tree-preorder-traversal/solutions/2244173/golang-solution-with-recursive-method/
func preorder(root *Node) []int {
	res := []int{}
	if root == nil{
			return res
	}

	res = append(res,root.Val)
	for _, child := range root.Children{
			 res = append(res, preorder(child)...)
	}

	return res
}

// https://leetcode.com/problems/n-ary-tree-preorder-traversal/solutions/2200714/go-dfs-with-stack-friendly-and-readable/
/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Children []*Node
 * }
 */

func preorder(root *Node) []int {
    var res []int

    if root == nil { return res}

    var stack []*Node
    push(&stack, root)

    for len(stack) > 0 {
        popedElement := pop(&stack)
        res = append(res, popedElement.Val)
        for i := len(popedElement.Children) - 1; i > -1; i-- {
            push(&stack, popedElement.Children[i])
        }
    }


    return res
}

func push(stack *[]*Node, item *Node) {
    if stack == nil {
        panic("nil pointer")
    }

    *stack = append(*stack, item)
}

func pop(stack *[]*Node) *Node {
    if stack == nil {
        panic("nil pointer")
    }

    if len(*stack) == 0 {
        panic("empty stack")
    }

    popedElement := (*stack)[len(*stack) - 1]

    *stack = (*stack)[:len(*stack) - 1]

    return popedElement
}

// https://leetcode.com/problems/n-ary-tree-preorder-traversal/solutions/2988926/go-10-lines-solution/
/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Children []*Node
 * }
 */

func dfs(nd *Node, arr *[]int) {
    *arr = append(*arr, nd.Val)
    for _, ch := range(nd.Children) {
        dfs(ch, arr)
    }
}

func preorder(root *Node) []int {
    res := make([]int, 0, 0)
    if root == nil {
        return res
    }
    dfs(root, &res)
    return res
}

// https://leetcode.com/problems/n-ary-tree-preorder-traversal/solutions/475016/python-go-o-n-sol-based-on-recursive-and-iterative-w-explanation/

func preorder(root *Node) []int {
	path := []int{}
	dfs(root, &path)
	return path
}


func dfs(node *Node, path *[]int){
	// base case
	if node == nil{
			return
	}
	// general cases
	*path = append(*path, node.Val)
	for _, child := range node.Children{
			dfs(child, path)
	}
}