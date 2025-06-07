#include<stdio.h>
#include<stdlib.h>
#define MAX 10
int D[MAX][MAX],n;
void warshall()
{
    int i,j,k;
    for(k=1;k<=n;k++)
    {
        for(i=1;i<=n;i++)
        {
            for(j=1;j<=n;j++)
            {
                D[i][j]=(D[i][j]||(D[i][k] && D[k][j]));
            }
        }
    }
}
int main()
{
    int i,j;
    printf("Enter the Number of Vertices:\n");
    scanf("%d",&n);
    printf("Enter the Adjacency Matrix is:\n");
    for(i=1;i<=n;i++)
    {
        for(j=1;j<=n;j++)
        {
            scanf("%d",&D[i][j]);
        }
    }
    warshall();
     printf("Transitive Closure Graph is:\n");
    for(i=1;i<=n;i++)
    {
        for(j=1;j<=n;j++)
        {
            printf("%d\t",D[i][j]);
        }
        printf("\n");
    }
    return 0;

}