let tapIn = document.querySelector('.calcOutText')
let inputSection = document.querySelector('.timeInputsContainer')
let timeInputsContainer = document.querySelector('.timeInputsContainer')
let outputAnswer = document.getElementById('outputAnswer')


const time = document.getElementById('time');


let timeValue = ''
let timeSplit;
let timeCount = 0

function calculateTime() {
    timeValue += time.value
    timeSplit = time.value.split(':')
    tapIn.innerHTML = `Calculated Time is ${time.value}`
    let hoursCalc = parseInt(timeSplit[0], 10) * 60 + parseInt(timeSplit[1], 10)

    for(let x = 1; x < timeInputsContainer.childElementCount; x++) {
        let newTime = document.getElementById(`time${x}`)
        timeSplit = newTime.value.split(':')
        hoursCalc += parseInt(timeSplit[0], 10) * 60 + parseInt(timeSplit[1], 10)
    }
    
    let hours = Math.floor(hoursCalc / 60)
    let minutes = (hoursCalc % 60)
    outputAnswer.innerText = `The total amount of time is ${hours} hours and ${minutes} minutes`
    outputAnswer.style.display = "block"
}

function addTimeButton() {
    timeCount++
    const newInput = document.createElement("input")
    newInput.type = 'time'
    newInput.id = `time${timeCount}`
    newInput.step = 2
    timeInputsContainer.appendChild(newInput)
    
}