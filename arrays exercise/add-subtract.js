function addSubtract(arr) {

    let originalSum = 0;
    let newSum = 0;

    for (let i = 0; i < arr.length; i++) {
        
        let num = arr[i];
        originalSum += num;

        if (num % 2 == 0) {
            num += i;
        } else {
            num -= i;
        }

        arr[i] = num;
        newSum += num;
    }
    console.log(arr);
    console.log(originalSum);
    console.log(newSum);
}

addSubtract([5, 15, 23, 56, 35]);