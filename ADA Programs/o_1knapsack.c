#include<stdio.h>
#include<stdlib.h>
int my_max(int a, int b)
{
    return (a>b)?a:b;
}
int val[20],wt[20],v[20][20],n,c;
int knap()
{
    int i,j;
    for(i=0;i<=n;i++)
    {
        for(j=0;j<=c;j++)
        {
            if(i==0 || j==0)
            {
                v[i][j]=0;
            }
            else if(wt[i]>j)
            {
                v[i][j]=v[i-1][j];
            }
            else{
                v[i][j]=my_max(v[i-1][j],(v[i-1][j-wt[i]])+val[i]);
            }
        }
    }
    return v[n][c];
}
int main()
{ 
    int i,j,opt;
    printf("Enter the Number of Items:\n");
    scanf("%d",&n);
    printf("Enter the Value(profit) for the %d elements:",n);
    for(i=1;i<=n;i++)
    {
        scanf("%d",&val[i]);
    }
      printf("Enter the Weight for the %d elements:",n);
    for(i=1;i<=n;i++)
    {
        scanf("%d",&wt[i]);
    }
    printf("Enter the Capacity of KnapSack:\n");
    scanf("%d",&c);
    opt=knap();
    printf("\n\nCapacity");
    for(j=0;j<=c;j++)
    {
        printf("%4d",j);
    }
    printf("\n");
    for(i=0;i<=n;i++)
    {
        printf("\nItem--%2d",i);
        for(j=0;j<=c;j++)
        {
            printf("%4d",v[i][j]);
        }
    }
    printf("\nThe optimal Solution is :%d\n",opt);
    printf("The Selected Items are :");
    while(n>0)
    {
        if(v[n][c]!=v[n-1][c])
        {
            printf("%d\t",n);
            c=c-wt[n];
        }
        n--;
    }

        return 0;

}