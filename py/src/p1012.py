import sys


PI = 3.14159


def get_input() -> tuple:
    a, b, c = input().split(" ")
    a, b, c = float(a), float(b), float(c)
    return (a, b, c)


def main() -> int:
    a, b, c = get_input()
    print(f"TRIANGULO: {a * c / 2:.3f}")
    print(f"CIRCULO: {PI * c**2:.3f}")
    print(f"TRAPEZIO: {((a + b) * c) / 2:.3f}")
    print(f"QUADRADO: {b**2:.3f}")
    print(f"RETANGULO: {a * b:.3f}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
