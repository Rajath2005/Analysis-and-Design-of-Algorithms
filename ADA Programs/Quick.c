#include<stdio.h>
#include<stdlib.h>
#include<time.h>
void Quicksort(int arr[],int low,int high);
int partition(int arr[],int low,int high);
void swap(int *a,int *b);
void generaterandomarray(int arr[],int n);
int partition(int arr[],int low,int high)
{
    int pivot=arr[low];
    int i=low;
    int j=high;
    while(i<j)
    {
        while(arr[i]<=pivot && i<=high-1)
        {
            i++;
        }
        while(arr[j]>pivot && j>=low+1)
        {
            j--;
        }
        if(i<j)
        {
            swap(&arr[i],&arr[j]);
        }
    }
    swap(&arr[low],&arr[j]);
    return j;
}
void swap(int *a,int *b)
{
    int temp=*a;
    *a=*b;
    *b=temp;
}
void generaterandomarray(int arr[],int n)
{
    srand(time(NULL));
    for(int i=0;i<n;i++)
    {
        arr[i]=rand();
    }
}
void Quicksort(int arr[],int low,int high)
{
    if(low<high)
    {
        int partindex=partition(arr,low,high);
        Quicksort(arr,low,partindex-1);
        Quicksort(arr,partindex+1,high);
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
        generaterandomarray(arr,n);
        clock_t start=clock();
        Quicksort(arr,0,n-1);
        clock_t end =clock();
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
