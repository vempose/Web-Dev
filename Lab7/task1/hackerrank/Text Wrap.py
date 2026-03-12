import textwrap

def wrap(string, max_width):
    return textwrap.fill(string, max_width)

string = input()
max_width = int(input())

print(wrap(string, max_width))