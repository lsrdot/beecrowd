import sys

PESO_A = 3.5
PESO_B = 7.5


def avg(*grades) -> float:
    a, b = grades
    return (a * PESO_A + b * PESO_B) / (PESO_A + PESO_B)


def main() -> int:
    a, b = float(input()), float(input())
    print(f"MEDIA = {avg(a, b):.5f}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
