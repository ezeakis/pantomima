 import System.IO;
 var fileName = "list.txt";
  
 function Start () {
 
      // read from filename
     var sr = new StreamReader(Application.dataPath + "/" + fileName);
     var fileContents = sr.ReadToEnd();
     sr.Close();
  
      // put data from filename into a variable
     var mydata = fileContents.Split("\n"[0]);
 
     // pick a random number between 1 and 10
     var myrandom = Random.Range(1,10);
     print(mydata[myrandom]);
 }
