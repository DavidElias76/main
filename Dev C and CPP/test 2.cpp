#include <iostream> 

using namespace std;

int main() {

    char myname[10];

    cout << "Hello World" << "\n";
    cin >> myname;

    cout << "Hello %s" << myname;

    return 0;
}