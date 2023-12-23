const dateDollar = document.querySelector('.iconDollar');
const dateAllPerson = document.querySelector('.AllDatePerson');
const dateAmount = document.querySelector('.AllDate');
const btonAll = document.querySelectorAll('.bton-porcent');
const dateUsers = document.querySelector('.iconUser');
const textAlertDom = document.querySelector('.textAlert');
const inputCamp = document.querySelector('.dateOneCardUser')
const customPorcent = document.querySelector('.custom');

let dateDollarFloat = 0;
let dateBtonAll = 0;
let dateNumberUsers = 0;
let customsDatesNew = 0;

dateDollar.addEventListener('input',textDomAll)
function textDomAll(){
    dateDollarFloat = parseFloat(dateDollar.value);
    sumDate();
};
btonAll.forEach(dateAll =>{
    dateAll.addEventListener('click',dateBton);
    function dateBton(e){
        e.target.removeEventListener('click',dateBton);
        dateBtonAll = parseFloat(e.target.dataset.porcent);
        sumDate();
    }
});
dateUsers.addEventListener('input',textDomUsers);
function textDomUsers(){
    if(dateUsers.value == '0'){
        textAlertDom.textContent = 'Can´t be zero';
        inputCamp.style.border = '1px solid rgb(231, 78, 78)'
    }else{
        textAlertDom.textContent = '';
        inputCamp.style.border = 'none'
        dateNumberUsers = parseFloat(dateUsers.value);
        sumDate()
    }
}
customPorcent.addEventListener('input',dateCustom);
function dateCustom(){
    let customsDates = (customPorcent.value) / 100;
    customsDatesNew = parseFloat(customsDates.toFixed(2))
    console.log(customsDatesNew)
}
function sumDate(){
    if (isNaN(dateDollarFloat) || isNaN(dateNumberUsers) || dateNumberUsers === 0) {
        return;
    }
    if(customsDatesNew > 0){
        let sumaa = ((dateDollarFloat * customsDatesNew) + dateDollarFloat ) / dateNumberUsers;
        sumaa = parseFloat(sumaa.toFixed(2));
        dateAllPerson.textContent = '$' + sumaa;
        let Amount = (((dateDollarFloat * customsDatesNew) + dateDollarFloat)  - dateDollarFloat) / dateNumberUsers;
        Amount = parseFloat(Amount.toFixed(2));
        dateAmount.textContent = '$' + Amount;
    }else{
        let sumaa = ((dateDollarFloat * dateBtonAll) + dateDollarFloat ) / dateNumberUsers;
        sumaa = parseFloat(sumaa.toFixed(2));
        dateAllPerson.textContent = '$' + sumaa;
        let Amount = (((dateDollarFloat * dateBtonAll) + dateDollarFloat)  - dateDollarFloat) / dateNumberUsers;
        Amount = parseFloat(Amount.toFixed(2));
        dateAmount.textContent = '$' + Amount;
    }
}