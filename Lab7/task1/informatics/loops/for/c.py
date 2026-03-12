a = int(input())
b = int(input())

for x in range(a, b + 1):
    if int(x ** 0.5) ** 2 == x:
        print(x, end=' ')