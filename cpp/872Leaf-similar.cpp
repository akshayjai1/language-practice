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
    vector<int> l,r;
    void getLeaves(TreeNode* root, vector<int> &vec){
        if(root == NULL) return;
        if(root -> left == NULL && root-> right == NULL) vec.push_back(root->val);
        getLeaves(root ->left, vec);
        getLeaves(root -> right, vec);
    }
    bool leafSimilar(TreeNode* root1, TreeNode* root2) {
        getLeaves(root1,l);
        getLeaves(root2,r);
        return l == r;
    }
};
// https://www.youtube.com/watch?v=J55XGsHQAWc