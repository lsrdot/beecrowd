package main

import (
	"fmt"
	"math"
	"os"
)

const pi = 3.14159

func main() {
	var radius float64
	_, err := fmt.Scanln(&radius)
	if err != nil {
		os.Exit(-1)
	}
	output := fmt.Sprintf("A=%.4f\n", pi*math.Pow(radius, 2))
	fmt.Print(output)
}
