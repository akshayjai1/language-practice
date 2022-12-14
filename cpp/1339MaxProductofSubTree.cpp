/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    long maxP = 0;
    long sum = 0;
    int maxProduct(TreeNode* root) {
        fillSum(root);
        maximiseSubTree(root);
        return (int)(maxP % (1000000007));
    }
    void fillSum(TreeNode* root){
        if(!root) return;
        sum+=root->val;
        fillSum(root->left);
        fillSum(root->right);
    }
    long maximiseSubTree(TreeNode* root){
        if(!root) return 0;
        long l = maximiseSubTree(root->left);
        long r = maximiseSubTree(root -> right);
        long subSum = l + r + (root -> val);
        maxP = max(maxP, subSum*(sum - subSum));
        return subSum;
    }
};