#include<stdlib.h>
#include<stdio.h>
#include<time.h>
void Merge(int arr[],int low,int mid,int high)
{
    int i=low;
    int j=mid+1;
    int k=low;
    int res[high+1];
    while(i<=mid && j<=high)
    {
        if(arr[i]<arr[j])
        {
            res[k++]=arr[i++];
        }
        else{
            res[k++]=arr[j++];

        }
    }
    while(i<=mid)
    {
        res[k++]=arr[i++];
    }
    while(j<=high)
    {
        res[k++]=arr[j++];
    }
    for(int m=low;m<=high;m++)
    {
        arr[m]=res[m];
    }
}
void generaterandomarray(int arr[],int n)
{
    srand(time(NULL));
    for(int i=0;i<n;i++)
    {
        arr[i]=rand();
    }
}
void sort(int arr[],int low,int high)
{
    if(low<high)
    {
        int mid=(low+high)/2;
       sort(arr,low,mid);
       sort(arr,mid+1,high);
       Merge(arr,low,mid,high);
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
        sort(arr,0,n-1);
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
