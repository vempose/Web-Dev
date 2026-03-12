x = int(input())

count = 0
d = 1

while d * d <= x:
    if x % d == 0:
        if d * d == x:
            count += 1
        else:
            count += 2
    d += 1

print(count)