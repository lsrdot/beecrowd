import sys


def main() -> int:
    name, salary, sales = input(), float(input()), float(input())
    salary += sales * 0.15
    print(f"TOTAL = R$ {salary:.2f}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
