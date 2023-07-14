let enddate="14 Jul 2023 02:35 PM"

document.getElementById("end-date").innerText=enddate;
let inputs = document.querySelectorAll("input");

function clock(){
    let end = new Date(enddate);
    let now = new Date();
    let diff = (end - now) / 1000; // get seconds
    if (diff < 0) return;  
    inputs[0].value = Math.floor(diff/3600/24); // get days
    inputs[1].value = Math.floor((diff/3600)%24); // get hours
    inputs[2].value = Math.floor((diff/60)%60); // get minutes
    inputs[3].value = Math.floor(diff%60);
}

clock();

// time interval to automate the function

setInterval(
    () => {
        clock()
    },1000
)