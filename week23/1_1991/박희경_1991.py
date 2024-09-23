import sys

input = sys.stdin.readline

N = int(input())
tree = {}

for n in range(N):
    root, left, right = input().split()
    tree[root] = [left, right]

# 전위; 루트 -> 왼쪽 -> 오른쪽 순으로
def preorder(root):
    if not root == '.':
        print(root, end='')
        preorder(tree[root][0])
        preorder(tree[root][1])


# 중위; 왼쪽 -> 루트 -> 오른쪽
def inorder(root):
    if not root == '.':
        inorder(tree[root][0])
        print(root, end='')
        inorder(tree[root][1])


# 후의; 왼쪽 -> 오른쪽 -> 루트
def postorder(root):
    if not root == '.':
        postorder(tree[root][0])
        postorder(tree[root][1])
        print(root, end='')


preorder('A')
print()
inorder('A')
print()
postorder('A')

