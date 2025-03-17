class Solution {
public:
    bool divideArray(vector<int>& nums) {
        sort(nums.begin(), nums.end());

        stack<int> st;
        for(int num : nums){
            if(st.empty()){
                st.push(num);
            }else if(st.top() == num){
                st.pop();
            }else {
                st.push(num);
            }
        }
        return st.empty();
    }
};