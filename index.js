let BillAmt = document.getElementById('billTotal')
let no_of_people = document.getElementById('people')
function calculate(percent){
    let tip = BillAmt.value * percent
    console.log(tip)
    document.getElementById('total-tip').innerText = tip 
    let total = parseInt(BillAmt.value) + parseInt(tip)
    let people = parseInt(no_of_people)
    document.getElementById('total-amtt').innerText = total
}
