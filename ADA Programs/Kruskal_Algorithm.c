#include<stdio.h>
#include<stdlib.h>
#define MAX 10
#define INFI 99
int a[MAX][MAX],n,cost=0;
void findmin(int *v1,int *v2)
{
    int edge=INFI,i,j;
        for(i=1;i<=n;i++)
        {
            for(j=i+1;j<=n;j++)
            {
                if(a[i][j]>0 && a[i][j]<edge )
                {
                    edge=a[i][j];
                   *v1=i;
                   *v2=j;
                }
                
            }
        }
}
void update(int root[],int v1,int v2)
{
    int temp,i;
    temp=root[v2];
    for(i=1;i<=n;i++)
    {
        if(root[i]==temp)
        {
            root[i]=root[v1];
        }
    }
}
void kruskal ()
{
    int root[MAX],edge,i,v1,v2;
    for(i=1;i<=n;i++)
    {
        root[i]=i;
    }
    i=0;
    while(i!=n-1)
    {
        findmin(&v1,&v2);
        edge=a[v1][v2];
        a[v1][v2]=a[v2][v1]=0;
        if(root[v1]!=root[v2])
        {
            printf("(%d,%d)\n",v1,v2);
            update(root,v1,v2);
            cost+=edge;
            i++;

        }

    }

}
int main()
{
    int i,j;
    printf("Enter the Number of Vertices\n");
    scanf("%d",&n);
    printf("Enter the Weighted grapgh \n");
    for(i=1;i<=n;i++)
    {
        for(j=1;j<=n;j++)
        {
            scanf("%d",&a[i][j]);
        }
    }
    printf("Edges of Spanning tree is:\n");
    kruskal();
    printf("\nMinimum cost is :%d\n",cost);
    return(0);
}