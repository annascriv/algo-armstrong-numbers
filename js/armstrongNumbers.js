// How can you make this more scalable and reusable later?

exports.findArmstrongNumbers = function() {
    let arr = [];
    let newArr = [];

    for (let i=0;i<1000;i++) {
        arr.push(i);
    }
   // console.log(arr)
    for (let i=0;i<arr.length;i++) {
        let num = arr[i].toString().split('');
        let length = num.length;
       // console.log(num)
        let armNum = 0;
        for (let j=0;j<length;j++) {
            armNum += parseInt(num[j])**length;
        } newArr.push(armNum)

};  
    let finalArr =[];
    for (let i=0;i<newArr.length;i++) {
        if (newArr[i]==i) {
            finalArr.push(newArr[i]);
        }
} return finalArr;
}
console.log(this.findArmstrongNumbers())