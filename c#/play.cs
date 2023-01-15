System.Console.WriteLine("Hello World!");
        Dictionary <String,String> d = new Dictionary<String,String>();
        d["d"]="d";
        d["de"]="de";
        System.Console.WriteLine(d.ContainsKey("d"));
                    System.Console.WriteLine(d["d"]);
                            System.Console.WriteLine(d["d"[0]+""]);

        System.Console.WriteLine(d);
        foreach(var s in d.Keys){
            System.Console.WriteLine(s);
        }