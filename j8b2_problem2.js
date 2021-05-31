const getPattern = (n)=> {
    let num=n;
    for(let i =1;i<=n;i++) {
        let str = "";
        for(j=i;j<=num;j++) {
            str = str+j;
        }
        num +=1;
        console.log(str);
    }
}
getPattern(4);