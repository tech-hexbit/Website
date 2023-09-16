#include <stdio.h>

int main() {
    int rows = 3; // Number of rows in the pattern

    for (int i = 1; i <= rows; i++) {
        for (int j = 1; j <= i; j++) {
            printf("1");
        }
        printf("\n");
    }

    return 0;
}