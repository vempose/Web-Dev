from datetime import datetime

t = int(input())

for _ in range(t):
    d1 = input()
    d2 = input()

    time1 = datetime.strptime(d1, "%a %d %b %Y %H:%M:%S %z")
    time2 = datetime.strptime(d2, "%a %d %b %Y %H:%M:%S %z")

    print(int(abs((time1 - time2).total_seconds())))