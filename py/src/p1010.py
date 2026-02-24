import sys


def bill() -> float:
    code, quant, price = input().split(" ")
    return int(quant) * float(price)


def main() -> int:
    amount = []
    amount.append(bill())
    amount.append(bill())
    amount = sum(amount)
    print(f"VALOR A PAGAR: R$ {amount:.2f}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
