const submitButton = document.querySelector('#submit-button')
submitButton.addEventListener ('click', function(submit) {
console.log(submitButton)

})


function submit() {
    var month = parseInt(document.getElementById('month').value);
    var day = parseInt(document.getElementById('day').value);
    if (month > 0 && month < 13 && day > 0){
    }
}