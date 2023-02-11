
let dM = localStorage.getItem("dM")

let valueOutputa = 0
let valueOutputb = 0
let valueInput = 0

const switchBtn = document.getElementById("switch")
const convertBtn = document.getElementById("onClick")

const darkMode = () => {
    document.getElementById("night").style.backgroundColor = "#1F2937"

    document.querySelectorAll('.box1').forEach(box1 => {
        box1.style.backgroundColor = '#273549';

    });


    document.querySelectorAll('.box2').forEach(box2 => {
        box2.style.color = '#CCC1FF';

    });

    document.querySelectorAll('.box3').forEach(box3 => {
        box3.style.color = '#FFFFFF';

    });

    localStorage.setItem("dM", "enabled")

}

const lightMode = () => {

    document.getElementById("night").style.backgroundColor = "#F4F4F4"

    document.querySelectorAll('.box1').forEach(box1 => {
        box1.style.backgroundColor = '#FFFFFF';

    });


    document.querySelectorAll('.box2').forEach(box2 => {
        box2.style.color = '#5A537B';

    });

    document.querySelectorAll('.box3').forEach(box3 => {
        box3.style.color = '#353535';

    });

    localStorage.setItem("dM", null)

}

switchBtn.addEventListener("click", () => {

    dM = localStorage.getItem("dM")

    if (dM !== "enabled") {
        darkMode()
    }
    else {
        lightMode()
    }

})

convertBtn.addEventListener("click", () => {


    conversionOne()
    conversionTwo()
    conversionThree()

})



const conversionOne = () => {

    let valueInput = document.getElementById("pop").value;
    valueOutputa = 3.281 * valueInput
    valueOutputb = valueInput / 3.281

    document.getElementById("output1").textContent = `${valueInput} meters = ${valueOutputa.toFixed(3)} feet | ${valueInput} feet = ${valueOutputb.toFixed(3)} meters`

}

const conversionTwo = () => {

    let valueInput = document.getElementById("pop").value;
    valueOutputa = 0.264 * valueInput
    valueOutputb = valueInput / 0.264

    document.getElementById("output2").textContent = `${valueInput} liters = ${valueOutputa.toFixed(3)} gallons | ${valueInput} gallons = ${valueOutputb.toFixed(3)} liters`

}

const conversionThree = () => {

    let valueInput = document.getElementById("pop").value;
    valueOutputa = 2.204 * valueInput
    valueOutputb = valueInput / 2.204

    document.getElementById("output3").textContent = `${valueInput} kilos = ${valueOutputa.toFixed(3)} pounds | ${valueInput} pounds = ${valueOutputb.toFixed(3)} kilos`

}