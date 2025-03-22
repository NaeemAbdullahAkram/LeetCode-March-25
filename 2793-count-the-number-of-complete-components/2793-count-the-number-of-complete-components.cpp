class Solution {
public:
    int countCompleteComponents(int n, vector<vector<int>>& edges) {
        vector<bool> visited(n, false);
        vector<unordered_set<int>> components;

        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                unordered_set<int> comp = {i};
                bool added = true;
                while (added) {
                    added = false;
                    for (auto e : edges) {
                        if (comp.count(e[0]) && !comp.count(e[1])) {
                            comp.insert(e[1]);
                            added = true;
                        }
                        if (comp.count(e[1]) && !comp.count(e[0])) {
                            comp.insert(e[0]);
                            added = true;
                        }
                    }
                }
                for (int node : comp)
                    visited[node] = true;
                components.push_back(comp);
            }
        }

        int cnt = 0;
        for (auto comp : components) {
            int k = comp.size();
            int expected = k * (k - 1) / 2;
            int actual = 0;
            for (auto e : edges)
                if (comp.count(e[0]) && comp.count(e[1]))
                    actual++;
            if (actual == expected)
                cnt++;
        }

        return cnt;
    }
};