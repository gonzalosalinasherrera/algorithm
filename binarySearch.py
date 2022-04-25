def binarySearch(array,largo,seeker,index):
    while index <= largo:
        mid = (largo//2)+ index
        if (array[mid] == seeker):
            return mid
        if array[mid] < seeker:
            index = mid + 1
        if array[mid] > seeker:
           largo = mid - 1
    return -1

array= [5,1,3,7,0,10,4,20]
largo = len(array)
seeker = 4
array.sort()
inArray = binarySearch(array,largo-1,seeker,0)
if (inArray == 0):
    print('number is not in the array')
else:
    print('the position of the number is:',inArray)

