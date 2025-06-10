#include<stdio.h>
#include<stdlib.h>
#include<time.h>
void selection(int arr[],int n)
{
    int temp,i,j;
    for(i=0;i<n-2;i++)
    {
        int Minindex=i;
        for(j=i+1;j<n-1;j++)
        {
            if(arr[j]<arr[Minindex])
            {
                Minindex=j;
            }
        }
        temp=arr[i];
        arr[i]=arr[Minindex];
        arr[Minindex]=temp;
    }
}
void GenerateRandomArray(int arr[],int n)
{
    srand(time(NULL));
    for(int i=0;i<n;i++)
    {
        arr[i]=rand();
    }
}
int main()
{
    int num_values[]={5000,10000,15000,20000};
    int n_values=sizeof(num_values)/sizeof(num_values[0]);
    double time_taken[n_values];
    for(int i=0;i<n_values;i++)
    {
        int n=num_values[i];
        int *arr=(int *)malloc(n*sizeof(int));
        GenerateRandomArray(arr,n);
        clock_t start=clock();
        selection(arr,n);
        clock_t end=clock();
        time_taken[i]=(double)(end-start)/CLOCKS_PER_SEC;
        free(arr);
    }
    printf("n\tTime_taken\n");
    for(int i=0;i<n_values;i++)
    {
        printf("%d\t%f\n",num_values[i],time_taken[i]);
    }
    return 0;
}
