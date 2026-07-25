# Merge Sort Pseudocode

**Note:** This pseudocode is language-independent.

```text
MergeSort(A, low, high)

if low < high then

    mid ← (low + high) / 2

    MergeSort(A, low, mid)

    MergeSort(A, mid + 1, high)

    Merge(A, low, mid, high)

end if
```
## Merge Procedure

```text
Merge(A, low, mid, high)

Create temporary array Temp

i ← low

j ← mid + 1

k ← 0

while i ≤ mid and j ≤ high do

    if A[i] ≤ A[j] then

        Temp[k] ← A[i]

        i ← i + 1

    else

        Temp[k] ← A[j]

        j ← j + 1

    end if

    k ← k + 1

end while

while i ≤ mid do

    Temp[k] ← A[i]

    i ← i + 1

    k ← k + 1

end while

while j ≤ high do

    Temp[k] ← A[j]

    j ← j + 1

    k ← k + 1

end while

for p ← 0 to k − 1 do

    A[low + p] ← Temp[p]

end for
```
