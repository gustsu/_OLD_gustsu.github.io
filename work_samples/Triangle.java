//Justin Tew 
//October 13, 2012
//CSCD 211 @ 11am
//Assignment 2


   public class Triangle {
   
      private int rows;
      private int[][] ara;
   /**
    * @param rows
    */
   
      public Triangle()
      {
         this.rows = 0;
      }
   
      public Triangle(int rows) 
      {
         this.rows = rows;
      }
   
   
   
      public void pascalTriangle() //i used http://introcs.cs.princeton.edu/java/14array/Pascal.java.html to help me with this algorithm  
      {
      
         this.ara  = new int[this.rows][];
         this.ara[1] = new int[3]; //sets the second row to 3 columns long
      
      
         this.ara[1][1] = 1; //set the middle number to 1
      
         for (int currentRow = 2; currentRow < this.rows; currentRow++) //loops through all the rows
         {
            this.ara[currentRow] = new int[currentRow + 2];  //create a jagged array, making each row 2 columns longer than the last row 
           
            for (int currentColumn=1;currentColumn < this.ara[currentRow].length-1; currentColumn++)//loops through all the columns
            {
               this.ara[currentRow][currentColumn] = this.ara[currentRow-1][currentColumn-1] + this.ara[currentRow-1][currentColumn]; //the sum of the number above and to the left, and the number above and to the right
            }
         
         }
      
      }
    
      public void print()
      {
      
         for (int currentR = 1; currentR < this.rows; currentR++) //start at row 1
         {
            for (int currentC = 1; currentC < this.ara[currentR].length - 1; currentC++) //and column 1 
            {
               
               System.out.print(this.ara[currentR][currentC] + "  ");
            }
         	 
            System.out.println();
         }
      
      }
   
   
   
   
   
   
   }
