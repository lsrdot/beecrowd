namespace SalarioComBonus;

class Program
{
    static void Main()
    {
        string temp = Console.ReadLine();
        string name;
        if (!string.IsNullOrEmpty(temp))
            name = temp;
        double salary = double.TryParse(Console.ReadLine(), out double x) ? x : 0;
        double sales = double.TryParse(Console.ReadLine(), out double y) ? y : 0;
        Console.WriteLine($"TOTAL = R$ {salary + (sales * .15):F2}");
    }
}