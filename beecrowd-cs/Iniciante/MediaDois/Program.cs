namespace MediaDois;

class URI
{
    private static readonly UInt16 PesoA = 2;
    private static readonly UInt16 PesoB = 3;
    private static readonly UInt16 PesoC = 5;

    static void Main()
    {
        // double notaA = 0, notaB = 0, notaC = 0;
        // double? nota = double.TryParse(Console.ReadLine(), out var parsingA) ? parsingA : null;
        // if (nota.HasValue)
        //     notaA = nota.Value;
        // nota = double.TryParse(Console.ReadLine(), out var parsingB) ? parsingB : null;
        // if (nota.HasValue)
        //     notaB = nota.Value;
        // nota = double.TryParse(Console.ReadLine(), out var parsingC) ? parsingC : null;
        // if (nota.HasValue)
        //     notaC = nota.Value;
        // var media = (notaA * PesoA + notaB * PesoB + notaC * PesoC) / (PesoA + PesoB + PesoC);
        // Console.WriteLine($"MEDIA = {media:F2}");

        double notaA = Convert.ToDouble(Console.ReadLine());
        double notaB = Convert.ToDouble(Console.ReadLine());
        double notaC= Convert.ToDouble(Console.ReadLine());
        var media = (notaA * PesoA + notaB * PesoB + notaC * PesoC) / (PesoA + PesoB + PesoC);
        Console.WriteLine($"MEDIA = {media:F1}");
        
    }
}