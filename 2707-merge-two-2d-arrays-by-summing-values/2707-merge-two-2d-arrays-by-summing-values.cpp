class Solution {
public:
    vector<vector<int>> mergeArrays(vector<vector<int>>& nums1, vector<vector<int>>& nums2) {
        
        unordered_map<int, int> track;
        vector <vector<int>> res;

        for(auto a:nums1) track[a[0]] += a[1];
        for(auto a:nums2) track[a[0]] += a[1];
        
        for(auto i:track)
        {
            vector <int> a;
            a.push_back(i.first);
            a.push_back(i.second);
            res.push_back(a);
        }
        sort(res.begin(), res.end());
        return res;
    }
};