package main

import (
	"fmt"
	"os"
)

func main() {
	var a, b int64
	_, err := fmt.Scan(&a, &b)
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
	fmt.Printf("X = %d\n", a + b)
}