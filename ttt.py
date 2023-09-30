def quickSort(arr):
    for i in range(len(arr)):
        pivot = i
        pivot_list = []
        highers_list = []
        lesser_list = []
        
        pivot_list.append(arr[pivot])
        for i in range(len(arr)):
            if arr[pivot] > arr[i]:
                lesser_list.append(arr[i])
            if arr[pivot] < arr[i]:
                highers_list.append(arr[i])
            if arr[pivot] == arr[i] and i != pivot:
                pivot_list.append(arr[i])
                
        arr = lesser_list + pivot_list + highers_list
        pivot_list = []

    return arr


arr = [3, 8, 2, 4, 10, 5, 9, 1, 11, 5, 6, 8, 21, 31, 27, 22, 18]

print(quickSort(arr))