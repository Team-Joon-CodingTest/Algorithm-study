import sys
input = sys.stdin.readline

def mergeSort(L):
    if len(L) == 1:
        return L
    
    mid = (len(L) + 1)//2
    left = mergeSort(L[:mid])
    right = mergeSort(L[mid:])
    

n, k = map(int, input().split())
a = list(map(int, input().split()))
