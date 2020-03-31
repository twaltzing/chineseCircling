
// arr=[1,2,3,4,5];

arr=['會','討厭','喜歡','要','得','應該','要];
// arr=[會,討厭,喜歡,想要,得,能,應該,要,將];
minimum=0;
maximum=arr.length-1;
var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;


console.log(arr[randomnumber]);