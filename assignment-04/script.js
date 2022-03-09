let season = "";
let month = "";
let day = "";

const getBirthdayDay = () => {
    const date = document.querySelector('.js-birthday-date').value;
    
    if (date.length > 0){
        month = parseInt(date.substring(5,7));
        day = parseInt(date.substring(8,10));
        findBirthday();
    }
};

const findBirthday = () =>{
    if ((month == 12 && day >=22) || (month>=1 && month <3) || (month == 3 && day<=21)){
        season = "Winter";
    }
    if ((month == 3 && day >=22) || (month>3 && month <6) || (month == 6 && day<=21)){
        season = "Spring";
    }
    if ((month == 6 && day >=22) || (month>6 && month <9) || (month == 9 && day<=21)){
        season = "Summer";
    }
    if ((month == 9 && day >=22) || (month>9 && month <12) || (month == 12 && day<=21)){
        season = "Fall";
    }

    birthDayUpdate();
};

const birthDayUpdate =() =>{
    
    const revealText= document.querySelector('.js-season');
    revealText.innerHTML = "Your Season is: "+season;

    const wrapper = document.querySelector('.js-wrapper');
    wrapper.style.display = "block";
};

const submitButton = document.querySelector('.js-submit-button');
submitButton.addEventListener('click', getBirthdayDay);