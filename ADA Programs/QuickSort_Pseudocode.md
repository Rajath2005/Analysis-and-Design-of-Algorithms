# Quick Sort Pseudocode
>**Note:** This pseudocode uses the **Lomuto partition scheme**, where the last element(A[high]) is chosen as the pivot.

```text
QuickSort(A, low, high)
    if low < high
        p = Partition(A, low, high)
        QuickSort(A, low, p - 1)
        QuickSort(A, p + 1, high)

Partition(A, low, high)
    pivot = A[high]
    i = low - 1

    for j = low to high - 1
        if A[j] <= pivot
            i = i + 1
            swap A[i] and A[j]

    swap A[i + 1] and A[high]

    return i + 1
```
