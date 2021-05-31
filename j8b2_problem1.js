const printPattern = (n) => {
    let str = "";
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= i; j++) {
            str += i;
        }
        str += "$";
    }
    console.log(str);
}

printPattern(3);