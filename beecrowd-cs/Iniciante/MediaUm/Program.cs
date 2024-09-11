
namespace MediaUm
{
    class URI
    {   static double PESO_A = 3.5;
        static double PESO_B = 7.5;
        public static void Main(string[] args)
        {
            double? a, b = .0;
            a = double.Parse(Console.ReadLine());
            b = double.Parse(Console.ReadLine());
            Console.WriteLine($"MEDIA = {(a * PESO_A + b * PESO_B) / (PESO_A + PESO_B):F5}");
        }
    }
}
