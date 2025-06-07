#include<stdio.h>
#include<stdlib.h>
#define INFI 99
int edges[10][10],n,wt[10][10];
void prims();
void main()
{
    int i,j;
    printf("Enter the Number of Vertices:\n");
    scanf("%d",&n);
    printf("Enter the Cost Matrix\n");
    for(i=1;i<=n;i++)
    {
        for(j=1;j<=n;j++)
        {
            scanf("%d",&wt[i][j]);
        }
    }
        prims();
}
void prims()
{
  int u[10],lowcost[10],visited[10];
  int min,mincost=0,i,j,v;
  visited[1]=1;
  for(i=2;i<=n;i++)
   {
    visited[i]=0;
    u[i]=1;
    lowcost[i]=wt[1][i];
   }  
    for(i=1;i<n-1;i++)
    {
     min=lowcost[2];
     v=2;
      for(j=3;j<=n;j++)
        {
         if(lowcost[j]<min)
          {
            min=lowcost[j];
            v=j;
          }
        }
    edges[i][1]=u[v];
    edges[i][2]=v;
    mincost+=lowcost[v];
    visited[v]=1;
    lowcost[v]=INFI;
    for(j=2;j<=n;j++)
    {
        if(wt[v][j]<lowcost[j] && !visted[j])
        {
            lowcost[j]=wt[v][j];
            u[v]=j;
        }
    }
    
    printf("Edges of Minimum Spanning tree are\n");
    printf("(%d %d)\n",edges[i][1],edges[i][2]);
    printf("Minimum Cost is %d",mincost);
 }
}

