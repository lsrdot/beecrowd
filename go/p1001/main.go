package main

import (
	"fmt"
	"os"
)

func main() {
	var num1, num2 int64
	{
		_, err := fmt.Scanln(&num1)
		if err != nil {
			os.Exit(-1)
		}
	}
	{
		_, err := fmt.Scanln(&num2)
		if err != nil {
			os.Exit(-1)
		}
	}
	fmt.Printf("X = %v\n", num1+num2)
}
