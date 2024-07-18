const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"
// There has been some change to the api end points, please refer to the below documentation and code
//https://github.com/fawazahmed0/exchange-api#endpoints
//https://github.com/fawazahmed0/exchange-api/blob/main/MIGRATION.md
//https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json - EXAMPLE URL
//json = fetchJSON(`/currencies/{fromCurrency}`)
//rate = json[fromCurrency][toCurrency]

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCur = document.querySelector(".from select");
const toCur = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// for (let code in countryList){
//     console.log(code, countryList[code]);
// }

window.addEventListener("load",()=>{
    updateExchangeRate();
})

for(let select of dropdowns){
    for (let currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name == 'from' && currCode == 'USD'){
            newOption.selected = "selected";
        }
        else if(select.name == 'to' && currCode == 'INR'){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(evt)=>{ // add event listner to select so that the flat is updated once the drop down country is changed.
        updateFlag(evt.target);// target is where the change happened and we'll pass that to the updateFlag() function.
    })
}

const updateFlag = (element) => {
    //console.log(element);
    let curCode = element.value;
    //console.log(curCode);
    let countryCode = countryList[curCode];
    let newFlagSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newFlagSrc;
}


// get Exchange rate
btn.addEventListener('click', (evt)=>{
    evt.preventDefault();
    updateExchangeRate();
    
});

const updateExchangeRate = async ()=>{
    let amt = document.querySelector(".amount input");
    let amtVal = amt.value;
    console.log(amtVal);
    if(amtVal == "" || amtVal < 1){
        amtVal = 1;
        amt.value = 1;
    }
    //console.log(fromCur.value,toCur.value);
    const URL = `${BASE_URL}/${fromCur.value.toLowerCase()}.json`;
    let response = await fetch(URL); // fetch the data from the URL
    let data = await response.json(); // parse it to json format
    let rate = data[fromCur.value.toLowerCase()][toCur.value.toLowerCase()];
    console.log(rate);

    let finalAmt = amtVal * rate;
    msg.innerText = `${amtVal} ${fromCur.value} = ${finalAmt} ${toCur.value}`;
};


// pushing the changes to remote github from vscode.