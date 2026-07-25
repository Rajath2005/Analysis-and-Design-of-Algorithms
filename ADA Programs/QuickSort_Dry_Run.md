# Quick Sort Dry Run

## Example Input
Array:
50 20 70 10 60 30 40

## Partition Scheme
This dry run uses the **Lomuto Partition Scheme**, where the last element is chosen as the pivot.

# Initial Call
QuickSort(A, 0, 6)

Array:
50 20 70 10 60 30 40

Pivot = 40
i = -1

## Partition Process
### Step 1

j = 0
Compare A[0] = 50 with Pivot = 40

50 > 40
No swap.

Array:
50 20 70 10 60 30 40

### Step 2

j = 1
Compare A[1] = 20 with Pivot = 40

20 <= 40
Increment i

i = 0
Swap A[0] and A[1]

Array:
20 50 70 10 60 30 40

### Step 3

j = 2
Compare A[2] = 70 with Pivot = 40

70 > 40
No swap.

Array:
20 50 70 10 60 30 40

### Step 4

j = 3
Compare A[3] = 10 with Pivot = 40

10 <= 40
Increment i

i = 1
Swap A[1] and A[3]

Array:
20 10 70 50 60 30 40

### Step 5

j = 4
Compare A[4] = 60 with Pivot = 40

60 > 40
No swap.

Array:
20 10 70 50 60 30 40

### Step 6

j = 5
Compare A[5] = 30 with Pivot = 40

30 <= 40
Increment i

i = 2
Swap A[2] and A[5]

Array:
20 10 30 50 60 70 40

### Final Pivot Swap

Swap A[i+1] and Pivot
Swap A[3] and A[6]

Array:
20 10 30 40 60 70 50

Pivot Index = 3

# Recursive Calls

QuickSort(A, 0, 2)

QuickSort(A, 4, 6)

# Left Subarray

Subarray:
20 10 30

Pivot = 30
i = -1

### Step 1

20 <= 30

i = 0
Swap with itself

Array:
20 10 30 40 60 70 50

### Step 2

10 <= 30
i = 1

Swap with itself

Array:
20 10 30 40 60 70 50

Final Pivot Swap
Swap Pivot with itself

Array:
20 10 30 40 60 70 50

Pivot Index = 2

## Recursive Calls

QuickSort(A,0,1)

QuickSort(A,3,2)

Second call returns because low > high.

# Left Subarray

Subarray:
20 10

Pivot = 10
i = -1

### Step 1

20 > 10
No swap.

Final Pivot Swap
Swap 20 and 10

Array:
10 20 30 40 60 70 50

Pivot Index = 0

Recursive Calls

QuickSort(A,0,-1)

QuickSort(A,1,1)

Both return.

# Right Subarray

Subarray:
60 70 50

Pivot = 50
i = 3

### Step 1

60 > 50
No swap.

### Step 2

70 > 50
No swap.

Final Pivot Swap
Swap 60 and 50

Array:
10 20 30 40 50 70 60

Pivot Index = 4

Recursive Calls

QuickSort(A,4,3)

QuickSort(A,5,6)

First call returns.

# Final Right Subarray

Subarray:
70 60

Pivot = 60
i = 4

### Step 1

70 > 60
No swap.

Final Pivot Swap
Swap 70 and 60

Array:
10 20 30 40 50 60 70

Pivot Index = 5

Recursive Calls

QuickSort(A,5,4)

QuickSort(A,6,6)

Both return.

# Final Sorted Array

10 20 30 40 50 60 70

# Time Complexity

- Best Case: O(n log n)
- Average Case: O(n log n)
- Worst Case: O(n²)

# Space Complexity

- O(log n) (Recursive Call Stack)

# Conclusion

The Quick Sort algorithm recursively partitions the array using the **Lomuto Partition Scheme** until every element is placed in its correct sorted position.
