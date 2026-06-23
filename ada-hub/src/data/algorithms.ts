export interface Algorithm {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  categorySlug: string;
  timeComplexity: string;
  spaceComplexity: string;
  description: string;
  keywords: string[];
  introduction: string;
  problemStatement: string;
  realWorldApplications: string[];
  explanation: string;
  stepByStep: string[];
  code: string;
  sampleInput: string;
  sampleOutput: string;
  dryRun: string;
  advantages: string[];
  disadvantages: string[];
  vivaQuestions: { q: string; a: string }[];
  relatedAlgorithms: string[];
  githubFile: string;
}

export const algorithms: Algorithm[] = [
  {
    slug: 'kruskal-algorithm',
    title: "Kruskal's Algorithm",
    shortTitle: 'Kruskal',
    category: 'Greedy Algorithms',
    categorySlug: 'greedy',
    timeComplexity: 'O(E log E)',
    spaceComplexity: 'O(V)',
    description: "Kruskal's algorithm finds the Minimum Spanning Tree of a weighted graph by sorting edges and using union-find to avoid cycles.",
    keywords: ['kruskal algorithm', 'kruskal algorithm program in c', 'kruskal algorithm c program', 'minimum spanning tree', 'greedy algorithm', 'ada lab', 'vtu ada lab'],
    introduction: "Kruskal's Algorithm is a greedy algorithm used to find the Minimum Spanning Tree (MST) of a connected, undirected, weighted graph. Developed by Joseph Kruskal in 1956, it works by selecting the minimum weight edge at each step, ensuring no cycle is formed. It is widely used in network design, circuit design, and cluster analysis.",
    problemStatement: "Given a connected, undirected, weighted graph G = (V, E), find a spanning tree T such that the total weight of edges in T is minimized. A spanning tree connects all vertices with exactly V-1 edges and no cycles.",
    realWorldApplications: [
      "Network cable layout — minimizing the amount of cable to connect all computers in a network",
      "Road construction — finding the cheapest way to connect all cities",
      "Electrical circuit design — minimizing wire length in printed circuit boards",
      "Cluster analysis in machine learning",
      "Water pipeline networks",
    ],
    explanation: "Kruskal's algorithm sorts all edges in non-decreasing order of their weights. It then picks edges one by one, adding each to the spanning tree only if it does not form a cycle with already-selected edges. This cycle detection uses the Union-Find (Disjoint Set Union) data structure. The process continues until V-1 edges are selected.",
    stepByStep: [
      "Sort all edges in the graph in non-decreasing order of weight.",
      "Initialize each vertex as its own component (root array).",
      "Pick the smallest edge. Check if it forms a cycle using the root array.",
      "If no cycle is formed, include the edge in the MST and union the two components.",
      "If a cycle is formed, discard the edge.",
      "Repeat steps 3-5 until V-1 edges are included in the MST.",
      "Print all selected edges and the minimum cost.",
    ],
    code: `#include<stdio.h>
#include<stdlib.h>
#define MAX 10
#define INFI 99

int a[MAX][MAX], n, cost = 0;

void findmin(int *v1, int *v2) {
    int edge = INFI, i, j;
    for(i = 1; i <= n; i++) {
        for(j = i + 1; j <= n; j++) {
            if(a[i][j] > 0 && a[i][j] < edge) {
                edge = a[i][j];
                *v1 = i;
                *v2 = j;
            }
        }
    }
}

void update(int root[], int v1, int v2) {
    int temp, i;
    temp = root[v2];
    for(i = 1; i <= n; i++) {
        if(root[i] == temp)
            root[i] = root[v1];
    }
}

void kruskal() {
    int root[MAX], edge, i, v1, v2;
    for(i = 1; i <= n; i++)
        root[i] = i;
    i = 0;
    while(i != n - 1) {
        findmin(&v1, &v2);
        edge = a[v1][v2];
        a[v1][v2] = a[v2][v1] = 0;
        if(root[v1] != root[v2]) {
            printf("(%d, %d)\\n", v1, v2);
            update(root, v1, v2);
            cost += edge;
            i++;
        }
    }
}

int main() {
    int i, j;
    printf("Enter the Number of Vertices: ");
    scanf("%d", &n);
    printf("Enter the Weighted Graph (adjacency matrix):\\n");
    for(i = 1; i <= n; i++)
        for(j = 1; j <= n; j++)
            scanf("%d", &a[i][j]);
    printf("Edges of Spanning Tree:\\n");
    kruskal();
    printf("\\nMinimum Cost: %d\\n", cost);
    return 0;
}`,
    sampleInput: `4
0 10 6 5
10 0 0 15
6 0 0 4
5 15 4 0`,
    sampleOutput: `Edges of Spanning Tree:
(3, 4)
(1, 4)
(1, 2)

Minimum Cost: 19`,
    dryRun: "For a 4-vertex graph with edges: (1,2)=10, (1,3)=6, (1,4)=5, (2,4)=15, (3,4)=4\n\nStep 1: Sort edges → (3,4)=4, (1,4)=5, (1,3)=6, (1,2)=10, (2,4)=15\nStep 2: Pick (3,4)=4 → no cycle, add it. MST = {(3,4)}\nStep 3: Pick (1,4)=5 → no cycle, add it. MST = {(3,4),(1,4)}\nStep 4: Pick (1,3)=6 → cycle detected (1-4-3), skip.\nStep 5: Pick (1,2)=10 → no cycle, add it. MST = {(3,4),(1,4),(1,2)}\nDone! 3 = n-1 edges selected. Minimum Cost = 4+5+10 = 19",
    advantages: [
      "Simple and easy to implement",
      "Works well for sparse graphs",
      "Produces optimal (minimum) spanning tree",
      "Can handle disconnected graphs (finds MST for each component)",
    ],
    disadvantages: [
      "Requires sorting of all edges — O(E log E)",
      "Slower than Prim's algorithm for dense graphs",
      "Needs Union-Find structure for cycle detection",
    ],
    vivaQuestions: [
      { q: "What is the time complexity of Kruskal's algorithm?", a: "O(E log E) due to sorting edges. The Union-Find operations are nearly O(1) with path compression." },
      { q: "How does Kruskal's algorithm detect cycles?", a: "Using a root/parent array (Union-Find structure). If two vertices have the same root, adding the edge between them would create a cycle." },
      { q: "When is Kruskal's preferred over Prim's?", a: "Kruskal's is preferred for sparse graphs (fewer edges), while Prim's is better for dense graphs." },
      { q: "What is a Minimum Spanning Tree?", a: "A spanning tree of a weighted graph where the total weight of all edges is minimized. It contains exactly V-1 edges and connects all V vertices." },
      { q: "Can Kruskal's algorithm handle negative edge weights?", a: "Yes, Kruskal's algorithm works correctly with negative edge weights as it only requires sorting." },
    ],
    relatedAlgorithms: ['prims-algorithm', 'dijkstra-algorithm', 'topological-sort'],
    githubFile: 'Kruskal_Algorithm.c',
  },
  {
    slug: 'prims-algorithm',
    title: "Prim's Algorithm",
    shortTitle: "Prim's",
    category: 'Greedy Algorithms',
    categorySlug: 'greedy',
    timeComplexity: 'O(V²)',
    spaceComplexity: 'O(V)',
    description: "Prim's algorithm builds a Minimum Spanning Tree by greedily expanding from a starting vertex, always picking the minimum cost edge to an unvisited vertex.",
    keywords: ["prim's algorithm", "prims algorithm program in c", "prim algorithm c", "minimum spanning tree greedy", "ada lab programs", "vtu bcsl40a"],
    introduction: "Prim's Algorithm is a greedy algorithm that finds the Minimum Spanning Tree (MST) of a connected, undirected, weighted graph. Unlike Kruskal's which sorts all edges, Prim's grows the MST one vertex at a time — starting from any vertex and always selecting the minimum weight edge connecting the current MST to a new vertex.",
    problemStatement: "Given a connected undirected weighted graph, find a subset of edges forming a tree that includes every vertex, where the total weight is minimized.",
    realWorldApplications: [
      "Designing minimum cost network topologies",
      "Approximating Travelling Salesman Problem solutions",
      "Creating maze generation algorithms",
      "Telecommunications network layout",
      "Power grid design",
    ],
    explanation: "Prim's starts with an arbitrary vertex and maintains two sets: vertices already in the MST and those not yet included. At each step, it finds the minimum weight edge connecting the MST set to a vertex outside it, adds that vertex to the MST, and updates the minimum costs. This continues until all vertices are included.",
    stepByStep: [
      "Start with vertex 1. Mark it as visited. Set lowcost[i] = weight(1, i) for all other vertices.",
      "Find the unvisited vertex v with minimum lowcost value.",
      "Mark v as visited and add edge (u[v], v) to the MST.",
      "Update lowcost for all unvisited vertices: if weight(v, j) < lowcost[j], update lowcost[j] = weight(v, j) and u[j] = v.",
      "Repeat steps 2-4 until all vertices are visited.",
      "Print all MST edges and total minimum cost.",
    ],
    code: `#include <stdio.h>
#include <stdlib.h>
#define INFI 99

int edges[10][10], n, wt[10][10];

void prims() {
    int u[10], lowcost[10], visited[10];
    int min, mincost = 0, i, j, v;
    visited[1] = 1;
    for(i = 2; i <= n; i++) {
        visited[i] = 0;
        u[i] = 1;
        lowcost[i] = wt[1][i];
    }
    for(i = 1; i <= n - 1; i++) {
        min = lowcost[2];
        v = 2;
        for(j = 3; j <= n; j++) {
            if(lowcost[j] < min) {
                min = lowcost[j];
                v = j;
            }
        }
        edges[i][1] = u[v];
        edges[i][2] = v;
        mincost += lowcost[v];
        visited[v] = 1;
        lowcost[v] = INFI;
        for(j = 2; j <= n; j++) {
            if(wt[v][j] < lowcost[j] && !visited[j]) {
                lowcost[j] = wt[v][j];
                u[j] = v;
            }
        }
    }
    printf("Edges of Minimum Spanning Tree:\\n");
    for(i = 1; i <= n - 1; i++)
        printf("(%d %d) ", edges[i][1], edges[i][2]);
    printf("\\nMinimum Cost: %d\\n", mincost);
}

int main() {
    int i, j;
    printf("Enter the Number of Vertices: ");
    scanf("%d", &n);
    printf("Enter the Cost Matrix:\\n");
    for(i = 1; i <= n; i++)
        for(j = 1; j <= n; j++)
            scanf("%d", &wt[i][j]);
    prims();
    return 0;
}`,
    sampleInput: `4
99 10 6  5
10 99 99 15
6  99 99 4
5  15 4  99`,
    sampleOutput: `Edges of Minimum Spanning Tree:
(1 4) (4 3) (1 2)
Minimum Cost: 19`,
    dryRun: "Start at vertex 1. lowcost = [∞, 99, 10, 6, 5]\nIter 1: min = lowcost[4]=5, add edge (1,4), cost=5. Update lowcost.\nIter 2: min = lowcost[3]=4 (via vertex 4), add edge (4,3), cost=9.\nIter 3: min = lowcost[2]=10, add edge (1,2), cost=19.\nTotal MST cost = 19.",
    advantages: [
      "Efficient for dense graphs (many edges)",
      "No need to sort all edges globally",
      "Works well with adjacency matrix representation",
      "Easy to implement",
    ],
    disadvantages: [
      "O(V²) complexity — slower than Kruskal's for sparse graphs",
      "Requires the graph to be connected",
      "Must restart from scratch if the graph changes",
    ],
    vivaQuestions: [
      { q: "What is the difference between Kruskal's and Prim's algorithm?", a: "Kruskal's sorts all edges and picks globally minimum edges avoiding cycles. Prim's grows the MST from a starting vertex, always picking the minimum edge to an unvisited vertex." },
      { q: "What data structure makes Prim's algorithm O(E log V)?", a: "Using a min-heap (priority queue) instead of scanning all vertices reduces complexity to O(E log V)." },
      { q: "Is Prim's algorithm a greedy algorithm?", a: "Yes, at each step it greedily selects the minimum weight edge connecting the current MST to a new vertex." },
      { q: "What is the lowcost array in Prim's algorithm?", a: "lowcost[i] stores the minimum weight edge connecting vertex i to the current MST. It is updated as new vertices are added." },
      { q: "Can Prim's algorithm work on directed graphs?", a: "Prim's algorithm is designed for undirected graphs. For directed graphs, different algorithms like Edmonds' algorithm are used." },
    ],
    relatedAlgorithms: ['kruskal-algorithm', 'dijkstra-algorithm', 'floyd-algorithm'],
    githubFile: 'Prims_Algorithm.c',
  },
  {
    slug: 'dijkstra-algorithm',
    title: "Dijkstra's Algorithm",
    shortTitle: 'Dijkstra',
    category: 'Greedy Algorithms',
    categorySlug: 'greedy',
    timeComplexity: 'O(V²)',
    spaceComplexity: 'O(V)',
    description: "Dijkstra's algorithm finds the shortest path from a single source vertex to all other vertices in a weighted graph with non-negative edge weights.",
    keywords: ["dijkstra algorithm", "dijkstra algorithm program in c", "shortest path algorithm c", "single source shortest path", "ada lab programs", "vtu ada"],
    introduction: "Dijkstra's Algorithm, developed by Edsger Dijkstra in 1956, solves the Single Source Shortest Path (SSSP) problem for graphs with non-negative edge weights. It is one of the most famous and widely used algorithms in computer science, powering GPS navigation, network routing protocols, and many more applications.",
    problemStatement: "Given a weighted directed or undirected graph G = (V, E) with non-negative edge weights and a source vertex s, find the shortest path distance from s to every other vertex in the graph.",
    realWorldApplications: [
      "GPS navigation — finding shortest driving route",
      "Network routing protocols (OSPF uses Dijkstra's)",
      "Airline flight path optimization",
      "Social network shortest connection finder",
      "Robot path planning",
    ],
    explanation: "Dijkstra's maintains a distance array dist[] initialized to INFI (infinity) except dist[source] = 0. It repeatedly selects the unvisited vertex u with minimum dist[u], marks it visited, and relaxes all edges from u — if dist[u] + weight(u,v) < dist[v], update dist[v]. This greedy selection guarantees correctness for non-negative weights.",
    stepByStep: [
      "Initialize dist[source] = 0 and dist[all others] = INFI (99). Mark all vertices unvisited.",
      "Set dist[i] = weight[source][i] for direct neighbors.",
      "Pick the unvisited vertex u with minimum dist[u] using Minvertex().",
      "Mark u as visited.",
      "For each unvisited neighbor j of u: if dist[u] + weight[u][j] < dist[j], update dist[j] = dist[u] + weight[u][j] and set p[j] = u (parent).",
      "Repeat steps 3-5 for all vertices.",
      "Print shortest distances and paths using the parent array p[].",
    ],
    code: `#include<stdio.h>
#include<stdlib.h>
#define INFI 99

int dist[10], p[10], visit[10];
int wt[10][10], n;

int Minvertex() {
    int i, u, min = INFI;
    for(i = 1; i <= n; i++) {
        if(dist[i] < min && visit[i] == 0) {
            min = dist[i];
            u = i;
        }
    }
    return u;
}

void dijkstra(int s) {
    int i, j, step, u;
    for(i = 1; i <= n; i++) {
        dist[i] = wt[s][i];
        p[i] = (dist[i] == INFI) ? 0 : s;
    }
    visit[s] = 1;
    dist[s] = 0;
    for(step = 0; step <= n; step++) {
        u = Minvertex();
        visit[u] = 1;
        for(j = 1; j <= n; j++) {
            if((dist[u] + wt[u][j]) < dist[j] && !visit[j]) {
                dist[j] = wt[u][j] + dist[u];
                p[j] = u;
            }
        }
    }
}

void printpath(int s) {
    int i, t;
    for(i = 1; i <= n; i++) {
        if(visit[i] == 1 && i != s) {
            printf("Vertex %d: length %d, path: %d", i, dist[i], i);
            t = p[i];
            while(t != s) {
                printf(" <--- %d", t);
                t = p[t];
            }
            printf(" <--- %d\\n", s);
        }
    }
}

int main() {
    int i, j, s;
    printf("Enter the number of vertices: ");
    scanf("%d", &n);
    printf("Enter the Distance Matrix:\\n");
    for(i = 1; i <= n; i++)
        for(j = 1; j <= n; j++)
            scanf("%d", &wt[i][j]);
    printf("Enter Source Vertex: ");
    scanf("%d", &s);
    dijkstra(s);
    printf("\\nShortest paths from vertex %d:\\n", s);
    printpath(s);
    return 0;
}`,
    sampleInput: `4
99  3  99  7
 3 99   2 99
99  2  99  1
 7 99   1 99
1`,
    sampleOutput: `Shortest paths from vertex 1:
Vertex 2: length 3, path: 2 <--- 1
Vertex 3: length 5, path: 3 <--- 2 <--- 1
Vertex 4: length 6, path: 4 <--- 3 <--- 2 <--- 1`,
    dryRun: "Source = 1. dist = [0, 3, 99, 7]\nStep 1: Pick vertex 2 (dist=3). Relax: dist[3] = 3+2=5, dist[4] unchanged.\nStep 2: Pick vertex 3 (dist=5). Relax: dist[4] = min(7, 5+1)=6.\nStep 3: Pick vertex 4 (dist=6). All vertices visited.\nResult: dist = [0, 3, 5, 6]",
    advantages: [
      "Finds shortest paths from a single source to all vertices",
      "Optimal for graphs with non-negative weights",
      "Forms the basis of many network routing algorithms",
      "Easy to implement with adjacency matrix",
    ],
    disadvantages: [
      "Does not work with negative edge weights",
      "O(V²) with adjacency matrix — can be improved to O(E log V) with priority queue",
      "Only finds single-source shortest paths (not all-pairs)",
    ],
    vivaQuestions: [
      { q: "Why does Dijkstra's algorithm not work with negative edge weights?", a: "The greedy assumption that once a vertex is visited its distance is final breaks down with negative weights. Bellman-Ford should be used instead." },
      { q: "What is the time complexity of Dijkstra's with a min-heap?", a: "O(E log V) using a binary min-heap or O(E + V log V) using a Fibonacci heap." },
      { q: "What is edge relaxation in Dijkstra's algorithm?", a: "Checking if the path to vertex v through u (dist[u] + weight[u][v]) is shorter than the current known distance dist[v]. If so, updating dist[v]." },
      { q: "How is Dijkstra's different from BFS?", a: "BFS finds shortest paths in unweighted graphs. Dijkstra's handles weighted graphs by using a priority queue instead of a simple queue." },
      { q: "What is the role of the visited array in Dijkstra's?", a: "Once a vertex is marked visited (finalized), its shortest distance is confirmed and it won't be updated again." },
    ],
    relatedAlgorithms: ['kruskal-algorithm', 'prims-algorithm', 'floyd-algorithm'],
    githubFile: 'Dijkstras_Algorithm.c',
  },
  {
    slug: 'floyd-algorithm',
    title: "Floyd's Algorithm",
    shortTitle: "Floyd's",
    category: 'Dynamic Programming',
    categorySlug: 'dynamic-programming',
    timeComplexity: 'O(V³)',
    spaceComplexity: 'O(V²)',
    description: "Floyd's algorithm (Floyd-Warshall) finds the shortest paths between all pairs of vertices in a weighted graph using dynamic programming.",
    keywords: ["floyd warshall algorithm", "floyd algorithm program in c", "all pairs shortest path", "dynamic programming graph", "ada lab c program", "vtu bcsl40a"],
    introduction: "Floyd's Algorithm (Floyd-Warshall Algorithm) is a dynamic programming algorithm for finding the shortest paths between all pairs of vertices in a weighted graph. Proposed by Robert Floyd in 1962, it efficiently handles both directed and undirected graphs and can detect negative cycles.",
    problemStatement: "Given a weighted directed graph G = (V, E), compute the shortest path distance between every pair of vertices (i, j) in the graph.",
    realWorldApplications: [
      "Computing routing tables in computer networks",
      "Finding transitive closure of a graph",
      "Detecting negative cycles in financial models",
      "Geographic mapping — all-city distance computation",
      "Scheduling and dependency analysis",
    ],
    explanation: "Floyd's algorithm uses a 2D distance matrix dist[i][j]. It considers each vertex k as an intermediate vertex and checks: is the path from i to j through k shorter than the direct path? If dist[i][k] + dist[k][j] < dist[i][j], update dist[i][j]. After considering all intermediate vertices, the matrix contains all-pairs shortest path distances.",
    stepByStep: [
      "Initialize dist[i][j] with the given adjacency matrix (use INFI for no direct edge).",
      "For each intermediate vertex k from 1 to n:",
      "  For each source vertex i from 1 to n:",
      "    For each destination vertex j from 1 to n:",
      "      If dist[i][k] + dist[k][j] < dist[i][j], update dist[i][j].",
      "After all iterations, dist[i][j] contains the shortest path from i to j.",
      "Print the final distance matrix.",
    ],
    code: `#include<stdlib.h>
#include<stdio.h>
#define MAX 10
#define min(c,d) (c < d ? c : d)

int dist[MAX][MAX], n;

void floyd() {
    int i, j, k;
    for(k = 1; k <= n; k++)
        for(i = 1; i <= n; i++)
            for(j = 1; j <= n; j++)
                dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]);
}

int main() {
    int i, j;
    printf("Enter the Number of Vertices: ");
    scanf("%d", &n);
    printf("Enter the Distance Matrix (99 for no edge):\\n");
    for(i = 1; i <= n; i++)
        for(j = 1; j <= n; j++)
            scanf("%d", &dist[i][j]);
    floyd();
    printf("Shortest Distance Matrix:\\n");
    for(i = 1; i <= n; i++) {
        for(j = 1; j <= n; j++)
            printf("%4d", dist[i][j]);
        printf("\\n");
    }
    return 0;
}`,
    sampleInput: `4
0  3 99  7
3  0  2 99
99 2  0  1
7 99  1  0`,
    sampleOutput: `Shortest Distance Matrix:
   0   3   5   6
   3   0   2   3
   5   2   0   1
   6   3   1   0`,
    dryRun: "Initial matrix with 4 vertices.\nk=1: Check paths through vertex 1. Update dist[2][4]=min(99,3+7)=10, dist[4][2]=10.\nk=2: dist[1][3]=min(99,3+2)=5, dist[3][1]=5, dist[1][4]=min(7,3+99)=7, dist[4][1]=7.\nk=3: dist[1][4]=min(7,5+1)=6, dist[2][4]=min(10,2+1)=3.\nk=4: dist[1][2]=min(3,6+3)=3. Final matrix shows all shortest paths.",
    advantages: [
      "Computes all-pairs shortest paths in one pass",
      "Simple three-nested-loop implementation",
      "Handles negative edge weights (but not negative cycles)",
      "Can detect negative cycles",
    ],
    disadvantages: [
      "O(V³) time complexity — not suitable for very large graphs",
      "O(V²) space for distance matrix",
      "Only gives distances, not the actual paths (needs modification)",
    ],
    vivaQuestions: [
      { q: "What is the principle behind Floyd's algorithm?", a: "Dynamic programming: dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]) for each intermediate vertex k." },
      { q: "How can you detect a negative cycle using Floyd's algorithm?", a: "After running the algorithm, if dist[i][i] < 0 for any vertex i, there is a negative cycle." },
      { q: "What is the difference between Floyd's and Dijkstra's algorithm?", a: "Floyd's solves all-pairs shortest paths in O(V³). Dijkstra's solves single-source shortest paths in O(V²) or O(E log V) with a heap." },
      { q: "Can Floyd's algorithm handle negative edge weights?", a: "Yes, Floyd's algorithm works with negative edge weights, but fails if there are negative weight cycles." },
      { q: "How to reconstruct the actual path using Floyd's algorithm?", a: "Maintain a predecessor matrix next[i][j]. Initialize next[i][j] = j. When dist[i][j] is updated via k, set next[i][j] = next[i][k]." },
    ],
    relatedAlgorithms: ['warshall-algorithm', 'dijkstra-algorithm', 'prims-algorithm'],
    githubFile: 'Floyd_Algorithm.c',
  },
  {
    slug: 'warshall-algorithm',
    title: "Warshall's Algorithm",
    shortTitle: "Warshall's",
    category: 'Dynamic Programming',
    categorySlug: 'dynamic-programming',
    timeComplexity: 'O(V³)',
    spaceComplexity: 'O(V²)',
    description: "Warshall's algorithm computes the transitive closure of a directed graph — determining if a path exists between every pair of vertices.",
    keywords: ["warshall algorithm", "warshall algorithm program in c", "transitive closure", "dynamic programming", "ada lab programs", "vtu ada lab bcsl40a"],
    introduction: "Warshall's Algorithm, proposed by Stephen Warshall in 1962, computes the transitive closure of a directed graph. Given an adjacency matrix, it determines for every pair (i, j) whether vertex j is reachable from vertex i (directly or through any path). It is essentially the Boolean version of the Floyd-Warshall algorithm.",
    problemStatement: "Given a directed graph represented by an adjacency matrix A, compute a matrix D where D[i][j] = 1 if there is a path from vertex i to vertex j (directly or indirectly), and 0 otherwise.",
    realWorldApplications: [
      "Reachability analysis in directed graphs",
      "Database query optimization",
      "Compiler design — computing dominators",
      "Social network influence analysis",
      "Dependency checking in build systems",
    ],
    explanation: "Warshall's algorithm iterates over all intermediate vertices k. For each pair (i, j), it checks: can we reach j from i either directly (D[i][j]) OR by going through k (D[i][k] AND D[k][j])? If either is true, D[i][j] is set to 1. After processing all intermediate vertices, D[i][j] = 1 means j is reachable from i.",
    stepByStep: [
      "Initialize D = adjacency matrix of the graph.",
      "For each intermediate vertex k from 1 to n:",
      "  For each source vertex i from 1 to n:",
      "    For each destination vertex j from 1 to n:",
      "      D[i][j] = D[i][j] OR (D[i][k] AND D[k][j])",
      "After all iterations, D[i][j] = 1 indicates a path exists from i to j.",
      "Print the transitive closure matrix.",
    ],
    code: `#include<stdio.h>
#include<stdlib.h>
#define MAX 10

int D[MAX][MAX], n;

void warshall() {
    int i, j, k;
    for(k = 1; k <= n; k++)
        for(i = 1; i <= n; i++)
            for(j = 1; j <= n; j++)
                D[i][j] = D[i][j] || (D[i][k] && D[k][j]);
}

int main() {
    int i, j;
    printf("Enter the Number of Vertices: ");
    scanf("%d", &n);
    printf("Enter the Adjacency Matrix:\\n");
    for(i = 1; i <= n; i++)
        for(j = 1; j <= n; j++)
            scanf("%d", &D[i][j]);
    warshall();
    printf("Transitive Closure Matrix:\\n");
    for(i = 1; i <= n; i++) {
        for(j = 1; j <= n; j++)
            printf("%d\\t", D[i][j]);
        printf("\\n");
    }
    return 0;
}`,
    sampleInput: `4
0 1 0 0
0 0 0 1
0 0 0 0
1 0 1 0`,
    sampleOutput: `Transitive Closure Matrix:
1  1  1  1
1  1  1  1
0  0  0  0
1  1  1  1`,
    dryRun: "4-vertex graph. Adjacency: 1→2, 2→4, 4→1, 4→3.\nk=1: D[2][2]=D[2][1]&&D[1][2]=0. D[4][2]=D[4][1]&&D[1][2]=1.\nk=2: D[1][4]=D[1][2]&&D[2][4]=1. D[4][4]=D[4][2]&&D[2][4]=1.\nk=3: No updates (D[i][3]=0 for i≠4).\nk=4: D[1][1]=D[1][4]&&D[4][1]=1. D[1][3]=D[1][4]&&D[4][3]=1. D[2][1]=1, etc.\nFinal matrix shows all reachability.",
    advantages: [
      "Simple and elegant Boolean DP implementation",
      "Computes complete reachability in one pass",
      "Works for any directed graph",
      "Easy to understand and implement",
    ],
    disadvantages: [
      "O(V³) time — not suitable for very large graphs",
      "Only gives reachability (1/0), not actual paths or distances",
      "O(V²) space for the matrix",
    ],
    vivaQuestions: [
      { q: "What is transitive closure?", a: "A matrix T where T[i][j] = 1 if there exists a directed path from vertex i to vertex j (of any length), 0 otherwise." },
      { q: "How is Warshall's algorithm different from Floyd's?", a: "Warshall's computes Boolean reachability (transitive closure) using OR/AND operations. Floyd's computes actual shortest distances using min/addition." },
      { q: "What does D[i][j] = D[i][j] || (D[i][k] && D[k][j]) mean?", a: "Vertex j is reachable from i if: it was already reachable OR we can reach k from i AND reach j from k." },
      { q: "Can Warshall's algorithm detect strongly connected components?", a: "Indirectly yes. If both D[i][j] = 1 and D[j][i] = 1, vertices i and j are in the same SCC." },
      { q: "What is the input to Warshall's algorithm?", a: "The adjacency matrix of a directed graph, where D[i][j] = 1 if there is a direct edge from i to j." },
    ],
    relatedAlgorithms: ['floyd-algorithm', 'topological-sort', 'dijkstra-algorithm'],
    githubFile: 'Warshal_Algorithm.c',
  },
  {
    slug: 'topological-sort',
    title: 'Topological Sorting',
    shortTitle: 'Topological Sort',
    category: 'Graph Algorithms',
    categorySlug: 'graph-algorithms',
    timeComplexity: 'O(V + E)',
    spaceComplexity: 'O(V)',
    description: 'Topological Sort linearly orders vertices of a Directed Acyclic Graph (DAG) such that for every directed edge u→v, vertex u comes before v.',
    keywords: ['topological sort', 'topological sorting program in c', 'dag ordering', 'directed acyclic graph', 'ada lab programs', 'vtu bcsl40a'],
    introduction: "Topological Sorting produces a linear ordering of vertices in a Directed Acyclic Graph (DAG) such that for every directed edge u → v, vertex u appears before vertex v. It is only possible for DAGs — graphs with no directed cycles. The algorithm is fundamental in scheduling problems, build systems, and dependency resolution.",
    problemStatement: "Given a Directed Acyclic Graph (DAG) G = (V, E), find a linear ordering of vertices such that for every edge (u, v), u comes before v in the ordering. If a cycle exists, report that no topological ordering is possible.",
    realWorldApplications: [
      "Build systems (Make, Maven) — determine compilation order",
      "Course prerequisite scheduling",
      "Task scheduling with dependencies",
      "Package manager dependency resolution",
      "Data pipeline processing order",
    ],
    explanation: "This implementation uses an iterative approach based on in-degree. It repeatedly finds vertices with in-degree 0 (no incoming edges), adds them to the topological order, then removes their outgoing edges (setting them to 0). This is equivalent to Kahn's algorithm. If all vertices are ordered, a valid topological ordering exists; otherwise, a cycle is present.",
    stepByStep: [
      "Read the adjacency matrix of the directed graph.",
      "Repeat until all vertices are ordered or no vertex with in-degree 0 is found:",
      "  Find a vertex i with no incoming edges (no column j has ad[j][i] = 1).",
      "  If found, add it to the topological order.",
      "  Remove all outgoing edges from vertex i (set ad[i][k] = 0).",
      "If all n vertices are ordered, print the topological order.",
      "Otherwise, print 'No topological ordering possible' (cycle detected).",
    ],
    code: `#include<stdio.h>
#define MAX 10

void top(int ad[MAX][MAX], int n) {
    int f, count = 0, flag = 1, i, j, k;
    int torder[100], in = 1;
    while(flag) {
        count++;
        for(i = 1; i <= n; i++) {
            f = 0;
            for(j = 1; j <= n; j++) {
                if(ad[j][i] != 0 || torder[j] == i) {
                    f = 1;
                    break;
                }
            }
            if(f != 1) {
                torder[in++] = i;
                for(k = 1; k <= n; k++)
                    ad[i][k] = 0;
            }
        }
        if(count == n || in > n) flag = 0;
    }
    if(in <= n)
        printf("No Topological Ordering Possible (cycle detected)\\n");
    else {
        printf("Topological Order:\\n");
        for(i = 1; i <= n; i++)
            printf("%d\\t", torder[i]);
        printf("\\n");
    }
}

int main() {
    int ad[MAX][MAX], n;
    printf("Enter the Number of Vertices: ");
    scanf("%d", &n);
    printf("Enter the Adjacency Matrix of the Digraph:\\n");
    for(int i = 1; i <= n; i++)
        for(int j = 1; j <= n; j++)
            scanf("%d", &ad[i][j]);
    top(ad, n);
    return 0;
}`,
    sampleInput: `6
0 1 1 0 0 0
0 0 0 1 1 0
0 0 0 0 1 0
0 0 0 0 0 1
0 0 0 0 0 1
0 0 0 0 0 0`,
    sampleOutput: `Topological Order:
1   2   3   4   5   6`,
    dryRun: "6 vertices. Edges: 1→2,1→3, 2→4,2→5, 3→5, 4→6, 5→6.\nIter 1: Vertex 1 has no incoming edges → order[1]=1. Remove 1's edges.\nIter 2: Vertex 2 has no incoming edges → order[2]=2. Vertex 3 has no incoming → order[3]=3.\nIter 3: Vertex 4 and 5 get ordered. Iter 4: Vertex 6 gets ordered.\nFinal: 1 2 3 4 5 6",
    advantages: [
      "Detects cycle in directed graphs",
      "Foundation of many dependency solving algorithms",
      "Linear time O(V+E) with adjacency list",
      "Multiple valid orderings possible (flexibility)",
    ],
    disadvantages: [
      "Only applicable to Directed Acyclic Graphs (DAGs)",
      "This implementation is O(V²) with adjacency matrix",
      "Does not produce unique ordering",
    ],
    vivaQuestions: [
      { q: "When is topological sorting not possible?", a: "When the graph contains a directed cycle. Topological sort is only defined for Directed Acyclic Graphs (DAGs)." },
      { q: "Can a graph have more than one valid topological ordering?", a: "Yes. Multiple valid topological orderings can exist for the same DAG." },
      { q: "What is Kahn's algorithm for topological sort?", a: "Kahn's algorithm maintains a queue of vertices with in-degree 0. It repeatedly removes a vertex, adds to order, and decrements in-degrees of neighbors." },
      { q: "How is topological sort related to DFS?", a: "DFS-based topological sort adds each vertex to a stack when its DFS finishes. Popping the stack gives the topological order." },
      { q: "What is the in-degree of a vertex?", a: "The number of incoming directed edges to a vertex. A vertex with in-degree 0 has no prerequisites and can appear first in topological order." },
    ],
    relatedAlgorithms: ['kruskal-algorithm', 'warshall-algorithm', 'floyd-algorithm'],
    githubFile: 'Topological.c',
  },
  {
    slug: '01-knapsack-problem',
    title: '0/1 Knapsack Problem',
    shortTitle: '0/1 Knapsack',
    category: 'Dynamic Programming',
    categorySlug: 'dynamic-programming',
    timeComplexity: 'O(nW)',
    spaceComplexity: 'O(nW)',
    description: 'The 0/1 Knapsack problem uses dynamic programming to find the maximum profit by selecting items with given weights and values without exceeding the knapsack capacity.',
    keywords: ['0/1 knapsack', '01 knapsack program in c', 'knapsack dynamic programming', 'knapsack problem c program', 'ada lab programs', 'vtu bcsl40a'],
    introduction: "The 0/1 Knapsack Problem is a classic optimization problem solved using Dynamic Programming. Given n items each with a weight and a profit value, and a knapsack of capacity W, the goal is to determine which items to include to maximize the total profit without exceeding the capacity. Each item can either be included (1) or excluded (0) — hence the name '0/1 Knapsack'.",
    problemStatement: "Given n items with weights w[1..n] and values v[1..n], and a knapsack capacity W, find the maximum value subset of items such that the sum of weights ≤ W. Each item is either taken (1) or left (0).",
    realWorldApplications: [
      "Resource allocation in project management",
      "Portfolio optimization in finance",
      "Cargo loading for ships/planes",
      "Memory management in operating systems",
      "Cryptography and subset-sum based problems",
    ],
    explanation: "Build a 2D table v[i][j] where v[i][j] = maximum profit using items 1..i with capacity j. Base case: v[0][j] = 0 (no items) and v[i][0] = 0 (no capacity). Recurrence: if wt[i] > j, v[i][j] = v[i-1][j] (can't include item i); else v[i][j] = max(v[i-1][j], v[i-1][j-wt[i]] + val[i]). The answer is v[n][W]. Backtrack to find selected items.",
    stepByStep: [
      "Read n (number of items), val[1..n] (profits), wt[1..n] (weights), and c (capacity).",
      "Build DP table v[n+1][c+1], initialized to 0.",
      "For each item i from 1 to n and each capacity j from 0 to c:",
      "  If wt[i] > j: v[i][j] = v[i-1][j] (item too heavy)",
      "  Else: v[i][j] = max(v[i-1][j], v[i-1][j-wt[i]] + val[i])",
      "Answer = v[n][c]. Backtrack: if v[n][c] ≠ v[n-1][c], item n is selected.",
      "Print selected items and maximum profit.",
    ],
    code: `#include<stdio.h>
#include<stdlib.h>

int my_max(int a, int b) { return (a > b) ? a : b; }

int val[20], wt[20], v[20][20], n, c;

int knap() {
    int i, j;
    for(i = 0; i <= n; i++) {
        for(j = 0; j <= c; j++) {
            if(i == 0 || j == 0)
                v[i][j] = 0;
            else if(wt[i] > j)
                v[i][j] = v[i-1][j];
            else
                v[i][j] = my_max(v[i-1][j], v[i-1][j-wt[i]] + val[i]);
        }
    }
    return v[n][c];
}

int main() {
    int i, j, opt;
    printf("Enter the Number of Items: ");
    scanf("%d", &n);
    printf("Enter the Values (profits): ");
    for(i = 1; i <= n; i++) scanf("%d", &val[i]);
    printf("Enter the Weights: ");
    for(i = 1; i <= n; i++) scanf("%d", &wt[i]);
    printf("Enter the Knapsack Capacity: ");
    scanf("%d", &c);
    opt = knap();
    printf("\\nDP Table:\\n");
    printf("Capacity:");
    for(j = 0; j <= c; j++) printf("%4d", j);
    printf("\\n");
    for(i = 0; i <= n; i++) {
        printf("Item--%2d:", i);
        for(j = 0; j <= c; j++) printf("%4d", v[i][j]);
        printf("\\n");
    }
    printf("\\nMaximum Profit: %d\\n", opt);
    printf("Selected Items: ");
    while(n > 0) {
        if(v[n][c] != v[n-1][c]) {
            printf("%d ", n);
            c -= wt[n];
        }
        n--;
    }
    printf("\\n");
    return 0;
}`,
    sampleInput: `4
1 2 5 6
2 3 4 5
8`,
    sampleOutput: `Maximum Profit: 8
Selected Items: 4 2`,
    dryRun: "n=3, values=[1,2,5], weights=[2,3,4], capacity=5.\nv[1][j]: 0,0,1,1,1,1\nv[2][j]: 0,0,1,2,2,3\nv[3][j]: 0,0,1,2,5,5\nMaximum profit = v[3][5] = 5. Backtrack: item 3 selected (c=5→1). Item 2 not selected. v[1][1]=0=v[0][1]=0.\nSelected: item 3.",
    advantages: [
      "Guarantees the optimal solution",
      "Solves the exact 0/1 constraint (no fractional items)",
      "DP table helps trace back selected items",
      "Works for any weight/value combination",
    ],
    disadvantages: [
      "O(nW) time and space — can be large for high capacities",
      "Not suitable when capacity W is very large (pseudo-polynomial)",
      "Only handles integer weights in standard DP approach",
    ],
    vivaQuestions: [
      { q: "What is the difference between 0/1 Knapsack and Fractional Knapsack?", a: "In 0/1 Knapsack, items are either taken or left (no splitting). In Fractional Knapsack, items can be split and fractions can be taken." },
      { q: "Why is 0/1 Knapsack solved with DP and not greedy?", a: "Greedy (by value/weight ratio) doesn't always give optimal results for 0/1 Knapsack. DP explores all combinations systematically." },
      { q: "What is the recurrence relation for 0/1 Knapsack?", a: "v[i][j] = max(v[i-1][j], v[i-1][j-w[i]] + val[i]) if w[i] ≤ j, else v[i][j] = v[i-1][j]." },
      { q: "How do you find which items are selected after computing the DP table?", a: "Start from v[n][W]. If v[n][W] ≠ v[n-1][W], item n is selected; reduce W by w[n]. Repeat for n-1, n-2, ..." },
      { q: "What is the time complexity of 0/1 Knapsack?", a: "O(nW) where n is the number of items and W is the knapsack capacity. Space is also O(nW) for the DP table." },
    ],
    relatedAlgorithms: ['greedy-knapsack', 'subset-sum', 'floyd-algorithm'],
    githubFile: 'o_1knapsack.c',
  },
  {
    slug: 'greedy-knapsack',
    title: 'Greedy (Fractional) Knapsack',
    shortTitle: 'Greedy Knapsack',
    category: 'Greedy Algorithms',
    categorySlug: 'greedy',
    timeComplexity: 'O(n²)',
    spaceComplexity: 'O(1)',
    description: 'The Fractional Knapsack problem uses a greedy approach — selecting items by highest value-to-weight ratio — allowing fractional items to maximize profit.',
    keywords: ['greedy knapsack', 'fractional knapsack program in c', 'greedy knapsack c program', 'ada lab greedy', 'vtu bcsl40a programs'],
    introduction: "The Greedy (Fractional) Knapsack Problem allows items to be split, unlike the 0/1 version. This makes the greedy approach optimal: always pick the item with the highest profit-to-weight ratio. If the item doesn't fully fit, take a fraction of it. This gives the maximum possible profit for the given capacity.",
    problemStatement: "Given n items with weights and profits and a knapsack of capacity W, maximize the total profit. Items can be added fractionally (any portion of an item can be taken).",
    realWorldApplications: [
      "Cutting stock problems in manufacturing",
      "Loading bulk cargo (liquids, grains) with weight limits",
      "Bandwidth allocation in networks",
      "Investment portfolio management",
      "Advertisement budget allocation",
    ],
    explanation: "For each remaining item, compute profit/weight ratio. Pick the item with the highest ratio. If it fits entirely, take the full item. If not, take the fraction that fills the remaining capacity. Repeat until the knapsack is full or all items are considered.",
    stepByStep: [
      "Read number of items n, weights, values, and maximum capacity.",
      "While capacity > 0:",
      "  Find item with maximum profit/weight ratio among remaining items.",
      "  If item weight ≤ remaining capacity: take the whole item.",
      "  Else: take a fraction = remaining_capacity/item_weight.",
      "  Add profit to total. Mark item as used (set value to 0).",
      "Print total maximum profit.",
    ],
    code: `#include<stdio.h>
#include<stdlib.h>

int main() {
    int max_qty, n, m, array[2][20], i, j = 0;
    float sum = 0, max;
    printf("Enter the Number of Items: ");
    scanf("%d", &n);
    printf("Enter the Weights: ");
    for(i = 0; i < n; i++) scanf("%d", &array[0][i]);
    printf("Enter the Values: ");
    for(i = 0; i < n; i++) scanf("%d", &array[1][i]);
    printf("Enter the Maximum Capacity: ");
    scanf("%d", &max_qty);
    m = max_qty;
    while(m > 0) {
        max = 0;
        for(i = 0; i < n; i++) {
            if(((float)array[1][i] / (float)array[0][i]) > max) {
                max = (float)array[1][i] / (float)array[0][i];
                j = i;
            }
        }
        if(array[0][j] > m) {
            printf("Fraction of item %d added: %d units\\n", j + 1, m);
            sum += m * max;
            m = -1;
        } else {
            printf("Full item %d added: %d units\\n", j + 1, array[0][j]);
            m -= array[0][j];
            sum += (float)array[1][j];
            array[1][j] = 0;
        }
    }
    printf("Total Profit: %.2f\\n", sum);
    return 0;
}`,
    sampleInput: `3
10 20 30
60 100 120
50`,
    sampleOutput: `Full item 3 added: 30 units
Full item 2 added: 20 units
Fraction of item 1 added: 0 units
Total Profit: 240.00`,
    dryRun: "Items: w=[10,20,30], v=[60,100,120], W=50.\nRatios: 6, 5, 4. Pick item 1 (ratio 6), take full 10 units, profit=60, W=40.\nPick item 2 (ratio 5), take full 20 units, profit=160, W=20.\nPick item 3 (ratio 4), take 20/30 fraction, profit=160+80=240, W=0.\nTotal = 240.",
    advantages: [
      "Optimal solution guaranteed for fractional knapsack",
      "Greedy approach is simple and fast",
      "O(n log n) with sorting, O(n²) without",
      "Easier to implement than DP",
    ],
    disadvantages: [
      "Not applicable when items cannot be split (use 0/1 knapsack)",
      "Greedy does not work for 0/1 knapsack",
      "Does not track exact items selected (fractions)",
    ],
    vivaQuestions: [
      { q: "Why does greedy work for Fractional Knapsack but not 0/1 Knapsack?", a: "In fractional knapsack, we can take fractions so the greedy choice (highest ratio) is always globally optimal. In 0/1, we may need to skip a high-ratio item to fit more valuable combinations." },
      { q: "What is the optimal greedy criterion for Fractional Knapsack?", a: "Sort items by profit/weight ratio in decreasing order and greedily pick items." },
      { q: "What is the time complexity with sorting?", a: "O(n log n) for sorting + O(n) for the greedy selection = O(n log n) overall." },
      { q: "Can the fractional knapsack have a better profit than 0/1 knapsack?", a: "Yes, since fractional knapsack allows fractions, it can achieve at least as much profit as 0/1 knapsack, and often more." },
      { q: "What happens when all items have the same profit/weight ratio?", a: "Any order of selection gives the same maximum profit." },
    ],
    relatedAlgorithms: ['01-knapsack-problem', 'subset-sum', 'kruskal-algorithm'],
    githubFile: 'Dis_knapsack.c',
  },
  {
    slug: 'subset-sum',
    title: 'Subset Sum Problem',
    shortTitle: 'Subset Sum',
    category: 'Backtracking',
    categorySlug: 'backtracking',
    timeComplexity: 'O(2ⁿ)',
    spaceComplexity: 'O(n)',
    description: 'The Subset Sum problem uses backtracking to find all subsets of a given set whose elements sum to a target value.',
    keywords: ['subset sum problem', 'subset sum program in c', 'backtracking subset sum', 'ada lab programs', 'vtu bcsl40a c programs'],
    introduction: "The Subset Sum Problem is a classic backtracking problem: given a set of positive integers and a target sum, find all subsets whose elements add up to the target. It is a fundamental NP-complete problem with applications in cryptography, resource allocation, and partition problems.",
    problemStatement: "Given a set S = {s1, s2, ..., sn} of positive integers (in increasing order) and a target sum d, find all subsets T ⊆ S such that the sum of elements in T equals d.",
    realWorldApplications: [
      "Cryptography and public-key schemes based on subset sum",
      "Budget partitioning and financial planning",
      "Load balancing in parallel computing",
      "Game level design and puzzle generation",
      "Circuit partition problems",
    ],
    explanation: "The backtracking approach explores a state space tree. At each level k, we either include set[k] in the current subset (x[k]=1) or exclude it (x[k]=0). We prune branches where: the current sum already exceeds d (can't reach target), or the remaining elements can't reach d. When the current sum equals d, we print the subset.",
    stepByStep: [
      "Sort the input set in increasing order.",
      "Check feasibility: total sum < d or smallest element > d → no solution.",
      "Call sumofsub(s=0, k=1) where s is current sum, k is current index.",
      "Include set[k]: if s + set[k] == d, print subset.",
      "If s + set[k] < d and k+1 ≤ n, recurse with set[k] included.",
      "Exclude set[k]: if possible to still reach d, recurse with set[k] excluded.",
      "Backtrack and try remaining possibilities.",
    ],
    code: `#include <stdlib.h>
#include <stdio.h>

int set[10], x[10], n, d;

void sumofsub(int s, int k) {
    int i, f = 1;
    x[k] = 1;
    if(s + set[k] == d) {
        printf("{ ");
        for(i = 1; i <= n; i++) {
            if(x[i] == 1) {
                if(!f) printf(", ");
                printf("%d", set[i]);
                f = 0;
            }
        }
        printf(" }\\n");
    } else {
        if(s + set[k] < d && k + 1 <= n) {
            sumofsub(s + set[k], k + 1);
            x[k + 1] = 0;
        }
        if(s + set[k + 1] <= d && k + 1 <= n) {
            x[k] = 0;
            sumofsub(s, k + 1);
            x[k + 1] = 0;
        }
    }
}

int main() {
    int i, sum = 0;
    printf("Enter the Number of Elements: ");
    scanf("%d", &n);
    printf("Enter Elements in Increasing Order: ");
    for(i = 1; i <= n; i++) scanf("%d", &set[i]);
    printf("Enter the Target Sum: ");
    scanf("%d", &d);
    for(i = 1; i <= n; i++) sum += set[i];
    printf("Subsets summing to %d:\\n", d);
    if(sum < d || set[1] > d)
        printf("No subsets possible!\\n");
    else
        sumofsub(0, 1);
    return 0;
}`,
    sampleInput: `5
1 2 3 4 5
6`,
    sampleOutput: `Subsets summing to 6:
{ 1, 2, 3 }
{ 1, 5 }
{ 2, 4 }`,
    dryRun: "Set={1,2,3,4,5}, d=6.\nInclude 1: recurse with s=1\n  Include 2: recurse with s=3\n    Include 3: s+3=6=d → print {1,2,3} ✓\n    Exclude 3, include 4: s=1+2+4=7>6, skip.\n  Exclude 2, include 3: s=1+3=4\n    Include 4: s=1+3+4=8>6, skip.\n  Exclude 3, include 4: s=1+4=5, include 5: s=10>6.\nExclude 1: include 2: ... → {1,5}, {2,4} found similarly.",
    advantages: [
      "Finds all possible subsets summing to target",
      "Pruning reduces search space significantly",
      "Low space complexity O(n) using recursion stack",
      "Easy to understand and implement",
    ],
    disadvantages: [
      "Worst case O(2ⁿ) — exponential time",
      "Not practical for large sets",
      "Elements must be in sorted order for proper pruning",
    ],
    vivaQuestions: [
      { q: "What is backtracking?", a: "Backtracking is a systematic way of trying out different sequences of decisions until you find one that works. When a dead end is reached, it undoes (backtracks) the last decision and tries another." },
      { q: "How does pruning improve efficiency in Subset Sum?", a: "If current sum + set[k] > d, we skip including set[k] and any further elements (since the set is sorted). This prunes large portions of the search tree." },
      { q: "What is the state space tree for Subset Sum?", a: "A binary tree where each level corresponds to an element. The left branch includes the element (x[k]=1) and the right branch excludes it (x[k]=0)." },
      { q: "Is Subset Sum NP-Complete?", a: "Yes, the decision version of Subset Sum (does any subset sum to d?) is NP-Complete. The optimization version is NP-Hard." },
      { q: "How is Subset Sum different from 0/1 Knapsack?", a: "Subset Sum asks to find subsets that exactly sum to d. 0/1 Knapsack maximizes profit subject to a weight constraint. Subset Sum has no objective function — it's a feasibility problem." },
    ],
    relatedAlgorithms: ['n-queens-problem', '01-knapsack-problem', 'greedy-knapsack'],
    githubFile: 'set.c',
  },
  {
    slug: 'selection-sort',
    title: 'Selection Sort',
    shortTitle: 'Selection Sort',
    category: 'Divide and Conquer',
    categorySlug: 'divide-and-conquer',
    timeComplexity: 'O(n²)',
    spaceComplexity: 'O(1)',
    description: 'Selection Sort repeatedly finds the minimum element from the unsorted portion of an array and places it at the correct position. This implementation measures time complexity empirically.',
    keywords: ['selection sort', 'selection sort program in c', 'selection sort time complexity', 'sorting algorithm c', 'ada lab programs', 'vtu bcsl40a'],
    introduction: "Selection Sort is a simple in-place comparison sorting algorithm. It divides the array into a sorted and unsorted region. At each step, it finds the minimum element from the unsorted region and swaps it into its correct position. This VTU lab program also measures actual execution time for different input sizes to demonstrate O(n²) behavior empirically.",
    problemStatement: "Sort an array of n elements using Selection Sort and analyze its time complexity by measuring execution time for arrays of sizes 5000, 10000, 15000, and 20000.",
    realWorldApplications: [
      "Small datasets where code simplicity matters",
      "Embedded systems with limited memory",
      "Educational purposes for understanding sorting",
      "When the number of swaps must be minimized",
      "Checking if an array is nearly sorted",
    ],
    explanation: "For each position i from 0 to n-2, find the index of the minimum element in the subarray a[i..n-1]. Swap a[i] with a[minIndex]. After n-1 passes, the array is sorted. The number of comparisons is always n(n-1)/2 regardless of input order, making it O(n²) in all cases.",
    stepByStep: [
      "For i = 0 to n-2:",
      "  Set minIndex = i.",
      "  For j = i+1 to n-1: if a[j] < a[minIndex], set minIndex = j.",
      "  Swap a[i] with a[minIndex].",
      "Array is now sorted.",
      "For time analysis: generate random arrays of sizes 5000, 10000, 15000, 20000.",
      "Measure and print execution time for each size.",
    ],
    code: `#include<stdio.h>
#include<stdlib.h>
#include<time.h>

void selection(int arr[], int n) {
    int temp, i, j;
    for(i = 0; i < n - 1; i++) {
        int minIndex = i;
        for(j = i + 1; j < n; j++) {
            if(arr[j] < arr[minIndex])
                minIndex = j;
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}

void generateRandomArray(int arr[], int n) {
    srand(time(NULL));
    for(int i = 0; i < n; i++)
        arr[i] = rand();
}

int main() {
    int num_values[] = {5000, 10000, 15000, 20000};
    int n_values = 4;
    for(int i = 0; i < n_values; i++) {
        int n = num_values[i];
        int *arr = (int *)malloc(n * sizeof(int));
        generateRandomArray(arr, n);
        clock_t start = clock();
        selection(arr, n);
        clock_t end = clock();
        double time_taken = (double)(end - start) / CLOCKS_PER_SEC;
        printf("%d\\t%f\\n", n, time_taken);
        free(arr);
    }
    return 0;
}`,
    sampleInput: `(No input required — generates random arrays)`,
    sampleOutput: `n       Time_taken
5000    0.023401
10000   0.091200
15000   0.205300
20000   0.364700`,
    dryRun: "For array [64, 25, 12, 22, 11]:\nPass 1: min=11 at index 4. Swap a[0] and a[4] → [11, 25, 12, 22, 64]\nPass 2: min=12 at index 2. Swap a[1] and a[2] → [11, 12, 25, 22, 64]\nPass 3: min=22 at index 3. Swap a[2] and a[3] → [11, 12, 22, 25, 64]\nPass 4: min=25 at index 3. Already in place → [11, 12, 22, 25, 64]\nSorted!",
    advantages: [
      "Simple to understand and implement",
      "In-place sorting — O(1) extra space",
      "Minimizes number of swaps (n-1 swaps maximum)",
      "Performance is not affected by initial order",
    ],
    disadvantages: [
      "O(n²) in all cases — slow for large datasets",
      "Not stable (does not preserve relative order of equal elements)",
      "Much slower than O(n log n) algorithms for large n",
    ],
    vivaQuestions: [
      { q: "What is the time complexity of Selection Sort in all cases?", a: "O(n²) in best, average, and worst case, because it always makes n(n-1)/2 comparisons regardless of the input." },
      { q: "Is Selection Sort stable?", a: "No, Selection Sort is not stable. The swap operation can change the relative order of equal elements." },
      { q: "How many swaps does Selection Sort perform?", a: "At most n-1 swaps (one per pass), making it ideal when swap operations are expensive." },
      { q: "When is Selection Sort preferred?", a: "When memory writes are costly, since it minimizes swaps. Also for small datasets due to its simplicity." },
      { q: "What is the difference between Selection Sort and Bubble Sort?", a: "Selection Sort finds the minimum and places it correctly in each pass (at most 1 swap/pass). Bubble Sort repeatedly swaps adjacent elements (many swaps/pass)." },
    ],
    relatedAlgorithms: ['quick-sort', 'merge-sort', 'subset-sum'],
    githubFile: 'selection.c',
  },
  {
    slug: 'quick-sort',
    title: 'Quick Sort',
    shortTitle: 'Quick Sort',
    category: 'Divide and Conquer',
    categorySlug: 'divide-and-conquer',
    timeComplexity: 'O(n log n) avg, O(n²) worst',
    spaceComplexity: 'O(log n)',
    description: 'Quick Sort is a fast divide-and-conquer sorting algorithm that partitions the array around a pivot, recursively sorting subarrays. This implementation includes empirical time analysis.',
    keywords: ['quick sort', 'quick sort program in c', 'quicksort algorithm c', 'divide and conquer sort', 'ada lab programs', 'vtu bcsl40a'],
    introduction: "Quick Sort is one of the most efficient sorting algorithms in practice, developed by Tony Hoare in 1959. It uses a divide-and-conquer strategy: select a pivot element, partition the array so elements smaller than pivot go left and larger go right, then recursively sort both halves. Despite O(n²) worst case, its average case O(n log n) and excellent cache performance make it faster in practice than Merge Sort.",
    problemStatement: "Sort an array of n elements using Quick Sort and analyze time complexity empirically by measuring execution time for random arrays of sizes 5000, 10000, 15000, and 20000.",
    realWorldApplications: [
      "Default sorting in many programming languages (Java Arrays.sort for primitives)",
      "Database sorting and indexing",
      "Operating system file sorting",
      "Network packet sorting",
      "In-memory dataset processing",
    ],
    explanation: "Quick Sort picks a pivot (first element here), then partitions: scan from left for elements > pivot, from right for elements ≤ pivot, and swap them. When pointers cross, swap pivot into its correct position. Recursively apply to left and right subarrays. The key insight is that after partitioning, the pivot is in its final sorted position.",
    stepByStep: [
      "If low >= high, return (base case — subarray has 0 or 1 elements).",
      "Call partition(arr, low, high) to find partition index j.",
      "  Set pivot = arr[low]. i = low, j = high.",
      "  Move i right while arr[i] ≤ pivot. Move j left while arr[j] > pivot.",
      "  If i < j, swap arr[i] and arr[j].",
      "  When i >= j, swap arr[low] with arr[j] (pivot in final position). Return j.",
      "Recursively Quicksort(arr, low, j-1) and Quicksort(arr, j+1, high).",
    ],
    code: `#include<stdio.h>
#include<stdlib.h>
#include<time.h>

void swap(int *a, int *b) {
    int temp = *a; *a = *b; *b = temp;
}

int partition(int arr[], int low, int high) {
    int pivot = arr[low], i = low, j = high;
    while(i < j) {
        while(arr[i] <= pivot && i <= high - 1) i++;
        while(arr[j] > pivot && j >= low + 1) j--;
        if(i < j) swap(&arr[i], &arr[j]);
    }
    swap(&arr[low], &arr[j]);
    return j;
}

void Quicksort(int arr[], int low, int high) {
    if(low < high) {
        int partindex = partition(arr, low, high);
        Quicksort(arr, low, partindex - 1);
        Quicksort(arr, partindex + 1, high);
    }
}

void generateRandomArray(int arr[], int n) {
    srand(time(NULL));
    for(int i = 0; i < n; i++) arr[i] = rand();
}

int main() {
    int num_values[] = {5000, 10000, 15000, 20000};
    for(int i = 0; i < 4; i++) {
        int n = num_values[i];
        int *arr = (int *)malloc(n * sizeof(int));
        generateRandomArray(arr, n);
        clock_t start = clock();
        Quicksort(arr, 0, n - 1);
        clock_t end = clock();
        printf("%d\\t%f\\n", n, (double)(end - start) / CLOCKS_PER_SEC);
        free(arr);
    }
    return 0;
}`,
    sampleInput: `(No input — generates random arrays automatically)`,
    sampleOutput: `5000    0.003200
10000   0.007100
15000   0.011500
20000   0.016300`,
    dryRun: "Array: [3, 6, 8, 10, 1, 2, 1]. Pivot = 3 (first element).\ni starts at index 0, j at index 6.\ni moves right past 3 to 6. j moves left from 1 to 2 (≤3). i<j: swap arr[1]=6 and arr[5]=2 → [3,2,8,10,1,6,1].\ni moves to 8 (>3). j moves to 1 (≤3). i>j: stop.\nSwap arr[0]=3 with arr[j]=arr[1]=2 → [2,3,8,10,1,6,1]. Pivot 3 is at index 1.\nRecurse on [2] and [8,10,1,6,1].",
    advantages: [
      "Average case O(n log n) — very fast in practice",
      "In-place sorting — O(log n) stack space only",
      "Excellent cache performance",
      "Widely used as the standard sorting algorithm",
    ],
    disadvantages: [
      "O(n²) worst case when pivot is always min or max",
      "Not stable",
      "Poor performance on already-sorted arrays with first-element pivot",
      "Recursive — risk of stack overflow for large arrays",
    ],
    vivaQuestions: [
      { q: "What is the worst case of Quick Sort and when does it occur?", a: "O(n²) — occurs when the pivot is always the smallest or largest element (e.g., sorted array with first-element pivot). Results in n partitions of sizes 0 and n-1." },
      { q: "How can we improve Quick Sort's worst-case performance?", a: "Use random pivot selection or median-of-three pivot strategy to avoid worst-case behavior." },
      { q: "Is Quick Sort stable?", a: "No, Quick Sort is not stable. Equal elements may be rearranged during partitioning." },
      { q: "Why is Quick Sort faster than Merge Sort in practice?", a: "Quick Sort has better cache locality (works in-place), smaller constants, and O(log n) stack space vs O(n) for Merge Sort." },
      { q: "What is the role of the partition function in Quick Sort?", a: "Partition places the pivot in its correct sorted position and ensures all elements to its left are ≤ pivot and all to its right are > pivot." },
    ],
    relatedAlgorithms: ['merge-sort', 'selection-sort', '01-knapsack-problem'],
    githubFile: 'Quick.c',
  },
  {
    slug: 'merge-sort',
    title: 'Merge Sort',
    shortTitle: 'Merge Sort',
    category: 'Divide and Conquer',
    categorySlug: 'divide-and-conquer',
    timeComplexity: 'O(n log n)',
    spaceComplexity: 'O(n)',
    description: 'Merge Sort is a stable divide-and-conquer sorting algorithm that recursively divides the array in half, sorts each half, and merges them back in order.',
    keywords: ['merge sort', 'merge sort program in c', 'merge sort algorithm c', 'divide and conquer sorting', 'ada lab programs', 'vtu bcsl40a'],
    introduction: "Merge Sort is a classic divide-and-conquer sorting algorithm invented by John von Neumann in 1945. It works by recursively dividing the array into two halves, sorting each half, and merging them back in sorted order. Merge Sort guarantees O(n log n) performance in all cases, making it more reliable than Quick Sort for worst-case scenarios. It is also stable.",
    problemStatement: "Sort an array of n elements using Merge Sort and demonstrate O(n log n) time complexity by measuring execution time for random arrays of sizes 5000, 10000, 15000, and 20000.",
    realWorldApplications: [
      "External sorting (sorting data that doesn't fit in memory)",
      "Sorting linked lists efficiently",
      "Counting inversions in an array",
      "Used in merge of sorted database tables",
      "Java's Arrays.sort() for objects uses Merge Sort variant",
    ],
    explanation: "Sort(arr, low, high) computes mid = (low+high)/2, then recursively sorts arr[low..mid] and arr[mid+1..high], then calls Merge to combine them. Merge(arr, low, mid, high) uses a temporary array: compare elements from both halves and place smaller one in result. This ensures the merged result is sorted.",
    stepByStep: [
      "If low >= high, return (base case — single element is sorted).",
      "Compute mid = (low + high) / 2.",
      "Recursively sort left half: sort(arr, low, mid).",
      "Recursively sort right half: sort(arr, mid+1, high).",
      "Merge both halves: compare arr[i] and arr[j], place smaller in res[], advance that pointer.",
      "Copy remaining elements from either half into res[].",
      "Copy res[] back into arr[low..high].",
    ],
    code: `#include<stdlib.h>
#include<stdio.h>
#include<time.h>

void Merge(int arr[], int low, int mid, int high) {
    int i = low, j = mid + 1, k = low;
    int res[high + 1];
    while(i <= mid && j <= high) {
        if(arr[i] < arr[j])
            res[k++] = arr[i++];
        else
            res[k++] = arr[j++];
    }
    while(i <= mid) res[k++] = arr[i++];
    while(j <= high) res[k++] = arr[j++];
    for(int m = low; m <= high; m++)
        arr[m] = res[m];
}

void sort(int arr[], int low, int high) {
    if(low < high) {
        int mid = (low + high) / 2;
        sort(arr, low, mid);
        sort(arr, mid + 1, high);
        Merge(arr, low, mid, high);
    }
}

void generateRandomArray(int arr[], int n) {
    srand(time(NULL));
    for(int i = 0; i < n; i++) arr[i] = rand();
}

int main() {
    int num_values[] = {5000, 10000, 15000, 20000};
    for(int i = 0; i < 4; i++) {
        int n = num_values[i];
        int *arr = (int *)malloc(n * sizeof(int));
        generateRandomArray(arr, n);
        clock_t start = clock();
        sort(arr, 0, n - 1);
        clock_t end = clock();
        printf("%d\\t%f\\n", n, (double)(end - start) / CLOCKS_PER_SEC);
        free(arr);
    }
    return 0;
}`,
    sampleInput: `(No input — generates random arrays automatically)`,
    sampleOutput: `5000    0.002100
10000   0.004500
15000   0.007200
20000   0.009800`,
    dryRun: "Array: [38, 27, 43, 3, 9, 82, 10]\nDivide: [38,27,43,3] and [9,82,10]\nDivide left: [38,27] and [43,3]\nMerge [38] and [27] → [27,38]\nMerge [43] and [3] → [3,43]\nMerge [27,38] and [3,43] → [3,27,38,43]\nDivide right: [9,82] and [10]\nMerge [9] and [82] → [9,82]\nMerge [9,82] and [10] → [9,10,82]\nFinal merge: [3,9,10,27,38,43,82]",
    advantages: [
      "Guaranteed O(n log n) in all cases (best, average, worst)",
      "Stable sorting algorithm",
      "Efficient for linked lists",
      "Parallelizable — left and right halves can be sorted independently",
    ],
    disadvantages: [
      "O(n) extra space for merging",
      "Slower than Quick Sort in practice for in-memory sorting due to memory allocation",
      "Not in-place (requires extra array for merging)",
    ],
    vivaQuestions: [
      { q: "What is the recurrence relation for Merge Sort?", a: "T(n) = 2T(n/2) + O(n). By Master Theorem, this solves to T(n) = O(n log n)." },
      { q: "Why is Merge Sort stable?", a: "In the merge step, when two equal elements are encountered, the one from the left subarray is placed first, preserving relative order." },
      { q: "When is Merge Sort preferred over Quick Sort?", a: "When stability is required, for linked lists (no extra space needed), for external sorting, and when worst-case O(n log n) guarantee is needed." },
      { q: "What is external sorting and why is Merge Sort suited for it?", a: "External sorting handles data that doesn't fit in memory (on disk). Merge Sort naturally merges sorted chunks, making it ideal for sequential disk access." },
      { q: "How many levels of recursion does Merge Sort have?", a: "O(log n) levels, since the array is halved at each level." },
    ],
    relatedAlgorithms: ['quick-sort', 'selection-sort', 'n-queens-problem'],
    githubFile: 'Merge.c',
  },
  {
    slug: 'n-queens-problem',
    title: 'N-Queens Problem',
    shortTitle: 'N-Queens',
    category: 'Backtracking',
    categorySlug: 'backtracking',
    timeComplexity: 'O(N!)',
    spaceComplexity: 'O(N)',
    description: 'The N-Queens problem uses backtracking to place N queens on an N×N chessboard so that no two queens attack each other.',
    keywords: ['n queens problem', 'n queens program in c', 'n queens backtracking c', '8 queens problem c', 'ada lab programs', 'vtu bcsl40a'],
    introduction: "The N-Queens Problem is a classic backtracking problem: place N queens on an N×N chessboard such that no two queens threaten each other. A queen attacks any piece in the same row, column, or diagonal. For N=8, there are 92 distinct solutions. The problem elegantly demonstrates the backtracking paradigm — try a position, if it's safe proceed, else backtrack and try the next position.",
    problemStatement: "Given an N×N chessboard and N queens, find all arrangements of the queens such that no two queens share the same row, column, or diagonal.",
    realWorldApplications: [
      "Constraint satisfaction problems in AI",
      "VLSI circuit design — placing components without interference",
      "Scheduling problems with conflict constraints",
      "Parallel process allocation",
      "Solving puzzle games",
    ],
    explanation: "The iterative backtracking approach places queens row by row. col[r] stores the column of the queen in row r. Starting at row 1, column 0: increment col[r], check if placement is safe using place(r) — no two queens in same column or diagonal. If safe and r==n, a solution is found. If safe and r<n, move to next row. If unsafe or col[r]>n, backtrack to previous row.",
    stepByStep: [
      "Initialize col[1] = 0. Set r = 1.",
      "Increment col[r] by 1.",
      "If col[r] > n: backtrack — set r = r-1 and go to step 2.",
      "If col[r] ≤ n and place(r) is safe:",
      "  If r == n: count solution, print board.",
      "  Else: move to next row r = r+1, set col[r] = 0.",
      "If not safe, go back to step 2.",
      "Repeat until r becomes 0 (all solutions found).",
    ],
    code: `#include<stdlib.h>
#include<stdio.h>

int col[30], count = 0;

int place(int r) {
    int i;
    for(i = 1; i < r; i++) {
        if(col[i] == col[r] || abs(i - r) == abs(col[i] - col[r]))
            return 0;
    }
    return 1;
}

void Nqueen(int n) {
    int r = 1, i, j;
    col[r] = 0;
    while(r != 0) {
        col[r] = col[r] + 1;
        while(col[r] <= n && !place(r))
            col[r] = col[r] + 1;
        if(col[r] <= n) {
            if(r == n) {
                count++;
                printf("Solution #%d\\n", count);
                for(i = 1; i <= n; i++) {
                    for(j = 1; j <= n; j++) {
                        if(j == col[i]) printf("Q ");
                        else printf(". ");
                    }
                    printf("\\n");
                }
                printf("\\n");
            } else {
                r++;
                col[r] = 0;
            }
        } else {
            r--;
        }
    }
}

int main() {
    int n;
    printf("Enter the Number of Queens: ");
    scanf("%d", &n);
    Nqueen(n);
    printf("Total Solutions: %d\\n", count);
    return 0;
}`,
    sampleInput: `4`,
    sampleOutput: `Solution #1
. Q . .
. . . Q
Q . . .
. . Q .

Solution #2
. . Q .
Q . . .
. . . Q
. Q . .

Total Solutions: 2`,
    dryRun: "N=4. Try row 1:\ncol[1]=1: safe. Row 2:\ncol[2]=1: same col as row1, fail. col[2]=2: diagonal (|1-2|=|1-2|=1), fail. col[2]=3: safe. Row 3:\ncol[3]=1: diagonal with row2 (|2-3|=|3-1|=2, no; |1-3|=|1-1|=0, no). col[3]=1: col[3]=col[1]=1, fail. col[3]=2: diagonal with row1 (|1-3|=2, |1-2|=1, not equal), col 2 conflicts with row2 col 3? |2-3|=1=|2-3|=1, diagonal, fail. col[3]=3: conflicts with row2. col[3]=4: ... Eventually Solution #1: (2,4,1,3).",
    advantages: [
      "Demonstrates pure backtracking elegantly",
      "Finds all solutions, not just one",
      "O(N) space for column array",
      "Iterative version avoids recursion stack overflow",
    ],
    disadvantages: [
      "O(N!) time — exponential growth",
      "Not practical for large N (N > 20 takes very long)",
      "All solutions must be found sequentially",
    ],
    vivaQuestions: [
      { q: "How does the place() function check if a queen placement is safe?", a: "It checks two conditions for all previous queens: (1) col[i] == col[r] — same column; (2) abs(i-r) == abs(col[i]-col[r]) — same diagonal." },
      { q: "How many solutions are there for the 8-Queens problem?", a: "92 solutions." },
      { q: "Why is row conflict not checked in the place() function?", a: "The algorithm places exactly one queen per row by design (col[r] is the column for row r), so row conflicts are impossible." },
      { q: "What is the difference between implicit and explicit constraints in N-Queens?", a: "Explicit: no two queens in same row, column, or diagonal. Implicit: each queen must be on the board (1 ≤ col[r] ≤ n)." },
      { q: "Can N-Queens be solved without backtracking?", a: "Yes, there are constructive O(n) solutions based on mathematical formulas for placing queens. But backtracking finds all solutions and is the standard algorithmic approach." },
    ],
    relatedAlgorithms: ['subset-sum', 'merge-sort', 'quick-sort'],
    githubFile: 'Nqueen.c',
  },
];

export const algorithmsBySlug = Object.fromEntries(
  algorithms.map((a) => [a.slug, a])
);

export const categories = [
  { slug: 'greedy', name: 'Greedy Algorithms', description: 'Make locally optimal choices at each step to find a global optimum', color: 'green' },
  { slug: 'dynamic-programming', name: 'Dynamic Programming', description: 'Break problems into overlapping subproblems and store results', color: 'blue' },
  { slug: 'divide-and-conquer', name: 'Divide and Conquer', description: 'Divide problem into subproblems, solve, and combine results', color: 'purple' },
  { slug: 'backtracking', name: 'Backtracking', description: 'Explore all possibilities and undo bad choices', color: 'red' },
  { slug: 'graph-algorithms', name: 'Graph Algorithms', description: 'Algorithms that operate on graph data structures', color: 'teal' },
];
