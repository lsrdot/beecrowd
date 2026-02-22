import sys

PI = 3.14159


def area(radius) -> float:
    return PI * radius**2


def main() -> int:
    result = area(float(input()))
    print(f"A={result:.4f}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
