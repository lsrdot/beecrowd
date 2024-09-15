namespace MediaUm
{
    class URI
    {
        int PESO_A, PESO_B, PESO_C;

        public static void Main()
        {            
            double notaA, notaB, notaC;

            var aux = Console.ReadLine();
            !(string.IsNullOrWhiteSpace(aux)) ? notaA = double.Parse(aux) : notaA = .0;

        }
    }
}