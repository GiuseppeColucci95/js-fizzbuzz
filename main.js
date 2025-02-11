/*

#TRACCIA
Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

*/

//create for cicle with variable i starting from 1 to 100
for (let i = 1; i <= 100; i++) {
  //check if i is a 3 and a 5 multiple number
  if ((i % 3 == 0) && (i % 5 == 0)) {
    console.log("FizzBuzz");
  }
  //check if i is only a 3 multiple number
  else if (i % 3 == 0) {
    console.log("Fizz");
  }
  //check if i is only a 5 multiple number
  else if (i % 5 == 0) {
    console.log("Buzz");
  }
  //cases with i not multiple of 3 or 5
  else {
    console.log(i);
  }
}