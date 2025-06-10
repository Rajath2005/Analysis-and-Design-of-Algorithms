#include<stdio.h>
#include<stdlib.h>
int main()
{
    int max_qty,n,m,array[2][20],i,j=0;
    float sum=0,max;
    printf("Enter the Number of Items:\n");
    scanf("%d",&n);
    printf("Enter the Weights of the items:\n");
    for(i=0;i<n;i++)
    {
        scanf("%d",&array[0][i]);
    }
    printf("Enter the Values of Each items:\n");
    for(i=0;i<n;i++)
    {
        scanf("%d",&array[1][i]);
    }
    printf("Enter the Maximum Value:\n");
    scanf("%d",&max_qty);
    m=max_qty;
    while(m>0)
    {
        max=0;
        for(i=0;i<n;i++)
        {
            if(((float)array[1][i]/(float)array[0][i])>max)
            {
                max=(float)array[1][i]/(float)array[0][i];
                j=i;
            }
        }
        if(array[0][j]>m)
        {
            printf("Quantity of item number %d added is %d\n",(j+1),m);
            sum+=m*max;
            m=-1;
        }
        else
        {
            printf("Quantity of item number %d added is %d\n",(j+1),array[0][j]);
            m-=array[0][j];
            sum+=(float)array[1][j];
            array[1][j]=0;
        }
    }
    printf("Total Profit is %.2f\n",sum);
    return 0;
}