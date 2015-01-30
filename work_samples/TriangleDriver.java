//Justin Tew 
//October 13, 2012
//CSCD 211 @ 11am
//Assignment 2

public class TriangleDriver 
{ 
    public static void main(String[] args) 
    { 
    	Triangle pascal = new Triangle(10); //10 represents the number of rows changing it will increase or decrease the number of rows
    										        //any number of rows greater then 35 starts to produce negative numbers at the last rows of the triangle, i wonder why? lol

    	pascal.pascalTriangle(); 
    	pascal.print();
    	
    }
    

        
        
       
}

	


