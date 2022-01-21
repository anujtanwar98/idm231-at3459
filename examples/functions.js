// function calculateTipOfBill () {
//     console.log("calculateTipOfBill");
// }
// calculateTipOfBill ();


function calculateTipOfBill (total, tipPercentage) {
    // we need to know the total of the bill
    // percentage want to tip
    // calculate the tip by doing math like 100 * .2 =20
    // goal = return the amount of money i should tip

    let percentage = tipPercentage * 0.01; //20 -> .2
    // convert the percentage to decimal form
    let tip = total * percentage; // 100 * .2 = 20
    console.log(`you should tip $${tip}`);
}
calculateTipOfBill (100 , 20);
calculateTipOfBill (50 , 30);
calculateTipOfBill (40 , 10);

function emailAnuj(){
    // write code to email anuj
}

emailAnuj();

printHello = () => {
    console.log("Hello")
}

printHello ();