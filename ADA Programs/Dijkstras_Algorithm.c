#include<stdio.h>
#include<stdlib.h>
#define INFI 99
void dijkstra(int);
void printpath(int);
int Minvertex();
int dist[10],p[10],visit[10];
int wt[10][10],n,edge;
int main()
{
    int i,j,s;
    printf("Enter the number of vertices: ");
    scanf("%d",&n);
    for(i=1;i<=n;i++)
    {
        dist[i]=0;
        p[i]=0;
        visit[i]=0;
    }
    printf("Enter the Distance Matrix:\n");
    for(i=1;i<=n;i++)
    {
        for(j=1;j<=n;j++)
        {
            scanf("%d",&wt[i][j]);

        }
    }
        printf("Enter the Source Vertex:\n");
        scanf("%d",&s);
        printf("\n\nThe Shortest Distance from the Source Vertex  %d\n",s);
        dijkstra(s);
        printpath(s);
        return 0;
}
void dijkstra(int s)
{
    int i,j,step,u;
    
    for(i=1;i<=n;i++)
    {
        dist[i]=wt[s][i];
        if(dist[i]==INFI)
        {
            p[i]=0;
        }
        else{
            p[i]=s;
        }
    }
    visit[s]=1;
    dist[s]=0;
    for(step=0;step<=n;step++)
    {
        u=Minvertex();
        visit[u]=1;
        for(j=1;j<=n;j++)
        {
            if((dist[u]+wt[u][j])<dist[j] && !visit[j])
            {
                dist[j]=wt[u][j]+dist[u];
                p[j]=u;
            }
        }
    }
}
int Minvertex()
{
    int i,u;
    int min=INFI;
    for(i=1;i<=n;i++)
    {
        if(dist[i]<min && visit[i]==0)
        {
            min=dist[i];
            u=i;
        }
    }
    return u;
}
void printpath(int s)
{
    int i,t;
    for(i=1;i<=n;i++)
    {
        if(visit[i]==1 && i!=s)
        {
            printf("Vertex %d :length %d path %d",i,dist[i],i);
            t=p[i];
            
        while(t!=s)
        {
            printf("<---%d",t);
            t=p[t];
        }
         printf("<---%d\n",s);

        }
    }

    
}