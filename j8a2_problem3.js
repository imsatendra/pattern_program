const printPattern = (n) => {
    for(let i=1;i<=n;i++) {
        let str = "";
        for(j=1;j<=n;j++) {
            str +=i;
        }
        console.log(str);
    }
}
printPattern(4);