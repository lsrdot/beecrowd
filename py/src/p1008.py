import sys


def main() -> int:
    id, h_worked, h_pay = int(input()), int(input()), float(input())
    salary = h_worked * h_pay
    print(f"NUMBER = {id}\nSALARY = U$ {salary:.2f}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
