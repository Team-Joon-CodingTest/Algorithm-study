N = int(input())
dic = {}
for i in range(N):
    root, l, r = map(str, input().split())
    dic[root] = [l, r]


def preorder_traversal(root):
    if root != '.':
        print(root, end='')
        preorder_traversal(dic[root][0])
        preorder_traversal(dic[root][1])


def inorder_traversal(root):
    if root != '.':
        inorder_traversal(dic[root][0])
        print(root, end='')
        inorder_traversal(dic[root][1])


def postorder_traversal(root):
    if root != '.':
        postorder_traversal(dic[root][0])
        postorder_traversal(dic[root][1])
        print(root, end='')

preorder_traversal('A')
print()
inorder_traversal('A')
print()
postorder_traversal('A')