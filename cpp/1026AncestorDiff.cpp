Front-end development experience for the web, mobile and Web Apps on iOS, Android and Windows
Worked in multiple domains Finance, Telecommunication, Marketing, Automobile, E-Commerce, CRM, Analytics and Mobility, HR
Had been a mentor at GreyAtom for a year for Frontend Development in 20-21


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
    int maxAncestorDiff(TreeNode* root) {
        int diff = 0, mx = INT_MIN, mn = INT_MAX;
        helper(root,diff,mx,mn);
        return diff;
    }
    void helper(TreeNode* root, int & diff, int m, int n){
        if(root == NULL) return;
        if(m!=INT_MIN) diff = max(diff,abs(root->val-m));
        if(n!=INT_MAX) diff = max(diff,abs(root->val-n));
        m = max(m,root->val);
        n = min(m,root->val);
        helper(root->left,diff,m,n);
        helper(root->right,diff,m,n);
    }
};