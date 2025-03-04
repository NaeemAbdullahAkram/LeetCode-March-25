class Solution {
public:

// Check if two strings are neighbors by counting differing characters
bool isNeighbour(string &s1, string &s2) {
    int n = s1.length(), diff = 0;
    for (int i = 0; i < n; ++i)
        if (s1[i] != s2[i])
            diff++;
    return diff == 1;
}

// Perform BFS to find shortest paths from src to all nodes
void BFS(int src, vector<vector<int>>& graph, vector<vector<int>>& parent, int n) {
    vector<int> dist(n, 1e9);
    dist[src] = 0;
    parent[src].push_back(-1);
    queue<int> q;
    q.push(src);

    while (!q.empty()) {
        int node = q.front();
        q.pop();
        for (int nbr : graph[node]) {
            if (dist[nbr] > dist[node] + 1) {
                dist[nbr] = dist[node] + 1;
                q.push(nbr);
                parent[nbr].clear();
                parent[nbr].push_back(node);
            } else if (dist[nbr] == dist[node] + 1) {
                parent[nbr].push_back(node);
            }
        }
    }
}

// Perform DFS to collect all paths from src to dest
void DFS(int node, vector<vector<int>>& parent, vector<int>& path, vector<vector<int>>& allpath) {
    if (node == -1) {
        allpath.push_back(path);
        return;
    }
    for (int par : parent[node]) {
        path.push_back(par);
        DFS(par, parent, path, allpath);
        path.pop_back();
    }
}

vector<vector<string>> findLadders(string beginWord, string endWord, vector<string>& wordList) {
    int src = -1, dest = -1, n = wordList.size();
    for (int i = 0; i < n; ++i) {
        if (wordList[i] == beginWord) src = i;
        if (wordList[i] == endWord) dest = i;
    }

    vector<vector<string>> ans;
    if (dest == -1) return ans;
    if (src == -1) {
        wordList.push_back(beginWord);
        src = n++;
    }

    vector<vector<int>> parent(n);
    vector<vector<int>> graph(n);
    for (int i = 0; i < n; ++i) {
        for (int j = i + 1; j < n; ++j) {
            if (isNeighbour(wordList[i], wordList[j])) {
                graph[i].push_back(j);
                graph[j].push_back(i);
            }
        }
    }

    BFS(src, graph, parent, n);
    vector<int> path;
    vector<vector<int>> allpath;
    DFS(dest, parent, path, allpath);

    for (auto& paths : allpath) {
        vector<string> current_path;
        for (int i = paths.size() - 2; i >= 0; --i) {
            current_path.push_back(wordList[paths[i]]);
        }
        current_path.push_back(endWord);
        ans.push_back(current_path);
    }
    return ans;
}
};