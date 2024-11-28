#include <iostream>
#include <string>

using namespace std;

class myClass{

    public:

    int myNum;
    string myString;

};

int main(){

    myClass myObj; // Create an object of myClass

    // Accessing Attributes and set values
    myObj.myNum = 20;
    myObj.myString = "Hello, World!"; 

    // print values 
    cout << myObj.myNum << "\n" ;
    cout << myObj.myString << "\n";
}
