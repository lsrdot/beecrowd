
namespace AreaDoCirculo
{
    
    class URI
    {
        private const double Pi = 3.14159;
        public static void Main()
        {
            double radius;
            bool success = Double.TryParse(Console.ReadLine(), out radius);
            Console.WriteLine(success ? $"A={Pi * Math.Pow(radius, 2):F4}" : "error");

        }
    }
}