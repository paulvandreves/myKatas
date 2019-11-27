using System;
using System.Linq;
using System.Text;
using System.Collections.Generic;



namespace cSharpKatats
{
    class Program
    {
        static void Main(string[] args)
        {
            //Console.WriteLine("Hello World!");
            string encode = "ZWU=";
            string decode = "dGhpcyBpcyBhIHN0cmluZyEh";
        
            
            Console.WriteLine(FromBase64(decode));
            Console.WriteLine(FromBase64(encode));
        }

        private static string ToBase64(string s)
        {// convert incoming string to binary
            var bits = string.Empty;
            foreach (var character in s)
            {
                bits += Convert.ToString(character, 2).PadLeft(8, '0');
            }
            string base64 = string.Empty;
            const byte threeOctets = 24;
            var octetsTaken = 0;
            // looping while octetsTaken < bits.Length ensures looping through the end of the string 
            while (octetsTaken < bits.Length)
            {
                var currentOctects = bits.Skip(octetsTaken).Take(threeOctets).ToList();
                // convert binary sextet to a byte for lookup in Base64Letters
                const byte sixBits = 6;
                int hextetsTaken = 0;
                while (hextetsTaken < currentOctects.Count())
                {
                    var chunk = currentOctects.Skip(hextetsTaken).Take(sixBits);
                    hextetsTaken += sixBits;
                    var bitString = chunk.Aggregate(string.Empty, (current, currentBit) => current + currentBit);
                    if (bitString.Length < 6)
                    {
                        bitString = bitString.PadRight(6, '0');
                    }
                    var singleInt = Convert.ToInt32(bitString, 2);
                    base64 += Base64Letters[singleInt];
                }
                octetsTaken += threeOctets;
            }
            // Pad with = if necessary 
            for (var i = 0; i < (bits.Length % 3); i++)
            {
                base64 += "=";
            }
            return base64;
        }
        public static string FromBase64(string s)
        {
            // convert the incoming string characters to base 10 
            string text = string.Empty;
            string bits = string.Empty;
            foreach (char c in s)
            {
                int baseTen = Array.IndexOf(Base64Letters, c);
                //base64 = base64.PadRight(base64.Length + (4 - base64.Length % 4) % 4, '=');
                string six = Convert.ToString(baseTen, 2).PadLeft(6, '0');
                // search padd right and padd left
                bits += six;
            }
            
            int remainder = bits.Length % 8;
            int end = 0; 
            Console.WriteLine(remainder); 
            if(remainder > 0){
                bits = bits.PadRight(remainder, '0');
                end = 8;
            }
            int inc = bits.Length / 8; 

            //divide the string into 8 bit groups  
            while (inc > 0)
            {
                var first8 = bits.Substring(0,8);
                bits = bits.Substring(8);
                var number = Convert.ToInt32(first8, 2);
                text += (char)number;
                inc = inc - 1;
            }
            return text = text.Substring(0,remainder);

        }


        public static readonly char[] Base64Letters = new[]
                                                {
                                              'A'
                                            , 'B'
                                            , 'C'
                                            , 'D'
                                            , 'E'
                                            , 'F'
                                            , 'G'
                                            , 'H'
                                            , 'I'
                                            , 'J'
                                            , 'K'
                                            , 'L'
                                            , 'M'
                                            , 'N'
                                            , 'O'
                                            , 'P'
                                            , 'Q'
                                            , 'R'
                                            , 'S'
                                            , 'T'
                                            , 'U'
                                            , 'V'
                                            , 'W'
                                            , 'X'
                                            , 'Y'
                                            , 'Z'
                                            , 'a'
                                            , 'b'
                                            , 'c'
                                            , 'd'
                                            , 'e'
                                            , 'f'
                                            , 'g'
                                            , 'h'
                                            , 'i'
                                            , 'j'
                                            , 'k'
                                            , 'l'
                                            , 'm'
                                            , 'n'
                                            , 'o'
                                            , 'p'
                                            , 'q'
                                            , 'r'
                                            , 's'
                                            , 't'
                                            , 'u'
                                            , 'v'
                                            , 'w'
                                            , 'x'
                                            , 'y'
                                            , 'z'
                                            , '0'
                                            , '1'
                                            , '2'
                                            , '3'
                                            , '4'
                                            , '5'
                                            , '6'
                                            , '7'
                                            , '8'
                                            , '9'
                                            , '+'
                                            , '/'
                                        };


    }
    // End of class program 
}
