import sys


def main() -> int:
    a, b, c, d = int(input()), int(input()), int(input()), int(input())
    diff = a * b - c * d
    print(f"DIFERENCA = {diff}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
