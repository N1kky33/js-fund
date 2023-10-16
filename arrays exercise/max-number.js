function max (arr) {

    let arr2 = [];

    for (let i = 0; i < arr.length; i++) {

        if ( arr[i] > (arr[i + 1]) || i == arr.length - 1 ) {
            arr2.push(arr[i]); 
        } 
    } 

    console.log(arr2.join(''));
}
max ([1, 4, 3, 2]);