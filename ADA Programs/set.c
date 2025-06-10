#include <stdlib.h>
#include <stdio.h>
int set[10], x[10], n, d;
void sumofsub(int, int);
int main()
{
    int i,sum=0;
    printf("Enter the Number of Elements:\n");
    scanf("%d", &n);
    printf("Enter the Elements in Increasing Order\n");
    for (i = 1; i <= n; i++)
    {
        scanf("%d", &set[i]);
    }
    printf("Enter the Maximum Limit:\n");
    scanf("%d", &d);
    printf("Sets with Maximum limit %d are:\n", d);
    for (i = 1; i <= n; i++)
     {
        sum+=set[i];
     }
        if (sum< d || set[1]> d)
        {
            printf("No Subsets are Possible!\n");
        }
        else
        {
            sumofsub(0, 1);
        }
    
    return 0;
}
void sumofsub(int s, int k)
{
    int i,f=1;
    x[k] = 1;
    if (s + set[k] == d)
    {
         printf("{ ");
        for (i = 1; i <= n; i++)
        {
            if (x[i] == 1)
            {
                if(!f)
                 printf(", ");
                 printf("%d", set[i]);
                 f=0;


             
            }
        }
           printf(" }\n");
    }
    else{

        if(s+set[k]<d && k+1<=n)
        {
            sumofsub(s+set[k],k+1);
            x[k+1]=0;
        }
        if(s+set[k+1]<=d && k+1<=n)
        {
            x[k]=0;
            sumofsub(s,k+1);
            x[k+1]=0;
        }
    }
}
