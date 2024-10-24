namespace salario;

class URI
{
    static void Main()
    {
        var number = int.TryParse(Console.ReadLine(), out int x) ? x : -1;
        var hoursWorked = int.TryParse(Console.ReadLine(), out int y) ? y : -1;
        var salary = double.TryParse(Console.ReadLine(), out double s) ? s : -1;
        Console.WriteLine($"NUMBER = {number}" + "\n" + $"SALARY = U$ {hoursWorked * salary:F2}");
    }
}