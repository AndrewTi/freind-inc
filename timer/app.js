(()=>{
    "use strict"
    const arr = ["aaa","bbb","ccc","ddd"];
    const lengthArr = arr.length;
    let count = 0

    const recurs = () => {
        if(count >= lengthArr) return false;
        
        count++;

        let showArr = arr.slice(0, lengthArr - (lengthArr - count))

        alert(showArr);
        setTimeout(recurs,1000)
    };

    recurs();
})()