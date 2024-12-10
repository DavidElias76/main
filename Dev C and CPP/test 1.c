#include<stdio.h>
#include <string.h>

int main(){

char myname[10];

    printf("Enter name: \n");
    scanf("%s", &myname);

    printf("Hello %s", myname);

    return 0;
}