class Solution {
public:
    int countDays(int days, vector<vector<int>>& meetings) {
        sort(begin(meetings) , end(meetings) , [](vector<int>&a , vector<int>&b){
            if(a[0] == b[0]) return a[1] < b[1] ;
            return a[0] < b[0] ;
        }) ;
        int ans = 0 ; 
        for(int i = 1 ; i < meetings.size() ; i++){
            if(meetings[i][0] > meetings[i-1][1]){
                ans += (meetings[i][0] - meetings[i-1][1]) - 1 ;
            }
            meetings[i][1] = max(meetings[i][1] , meetings[i-1][1]) ; 
        }
        return ans + (days - meetings[meetings.size()-1][1]) + meetings[0][0] - 1; 
    }
};