﻿namespace Diferenca;

class URI
{
    static void Main()
    {
        int a = Convert.ToInt32(Console.ReadLine());
        int b = Convert.ToInt32(Console.ReadLine());
        int c = Convert.ToInt32(Console.ReadLine());
        int d = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine($"DIFERENCA = {a * b - c * d}");
    }
}