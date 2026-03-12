a, b, c, d = map(int, input().split())

if d > 0 and 0 <= c < d:
    start = a + (c - a) % d

    if start <= b:
        print(*range(start, b + 1, d))