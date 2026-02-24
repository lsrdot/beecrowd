import sys


PI = 3.14159


def sphere_vol() -> None:
    radius = float(input())
    vol = (4 / 3) * PI * radius**3
    print(f"VOLUME = {vol:.3f}")


def main() -> int:
    sphere_vol()
    return 0


if __name__ == "__main__":
    sys.exit(main())
