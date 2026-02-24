import sys


A_WEIGHT = 2
B_WEIGHT = 3
C_WEIGHT = 5


def main() -> int:
    a, b, c = float(input().strip()), float(input().strip()), float(input().strip())
    avg = (a * A_WEIGHT + b * B_WEIGHT + c * C_WEIGHT) / (
        A_WEIGHT + B_WEIGHT + C_WEIGHT
    )
    print(f"MEDIA = {avg:.1f}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
