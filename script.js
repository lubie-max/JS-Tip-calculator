
console.log('hi there!')


// get  info by IDs

let totalBillDiv= document.getElementById('total-bill')
let tipInputDiv = document.getElementById('tip-input')
let numberOfPeopleDiv = document.getElementById('noOfPeople')
let totalDiv = document.getElementById('total')

// typecast text to integer by Number()
var numberOfPeople = Number(numberOfPeopleDiv.innerText)


// calculateBill() fuction for calculation
const calculateBill= () =>{

    // typecasting into integer by Number()
    const bill = Number(totalBillDiv.value)
    const tipPercents = Number(tipInputDiv.value)/100 * bill
    const billWithTipAmount = bill + tipPercents
    const totalPerPerson = billWithTipAmount /numberOfPeople
    totalDiv.innerText= `${totalPerPerson.toFixed(2)}`  //toFixed(2) takes only 2 places point value.    

}

    // logic for increasing and decreasing number of people 
const increasePeople = () =>{
    
    numberOfPeople += 1
    numberOfPeopleDiv.innerText = numberOfPeople
    calculateBill()
}

const decreasePeople = ()=>{
    if (numberOfPeople > 1){
        numberOfPeople  -= 1
        numberOfPeopleDiv.innerText = numberOfPeople
    }
    else{
        numberOfPeople.innerText= 1
    }
    calculateBill()
}