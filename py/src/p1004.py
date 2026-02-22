import sys


def main() -> int:
    a, b = int(input()), int(input())
    print(f"PROD = {a * b}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
