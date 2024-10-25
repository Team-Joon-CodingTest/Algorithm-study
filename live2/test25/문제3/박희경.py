import sys

input = sys.stdin.readline

n = int(input())
tree = {}

for _ in range(n):
    root, left, right = map(str, input().split())
    tree[root] = [left, right]


# 전위 순회 (부모 노드 -> 왼쪽 노드 -> 오른쪽 노드)
def preorder(node):
    if node != '.':
        print(node, end='')
        preorder(tree[node][0])
        preorder(tree[node][1])


# 중위 순회 (왼쪽 노드 -> 부모 노드 -> 오른쪽 노드)
def inorder(node):
    if node != '.':
        inorder(tree[node][0])
        print(node, end='')
        inorder(tree[node][1])


# 후위 순회 (왼쪽 노드 -> 오른쪽 노드 -> 부모 노드)
def postorder(node):
    if node != '.':
        postorder(tree[node][0])
        postorder(tree[node][1])
        print(node, end='')


preorder('A')
print()
inorder('A')
print()
postorder('A')