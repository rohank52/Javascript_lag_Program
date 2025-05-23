function DisplayTime(Division) {
    if (Division == "A") {
        console.log("YOUR exam is at 7 AM ");
    }
    else if (Division == "B") {
        console.log("Your exam is at 8 AM");
    }
    else if (Division == "C") {
        console.log("YOur exam is at 9 AM");
    }
    else if (Division == "D") {
        console.log("Your exam is at 10 AM");
    }
    else {
        console.log("wrong input ,it shuld be either A,B,C,D");
    }
}
var Value = "c";
DisplayTime(Value);
