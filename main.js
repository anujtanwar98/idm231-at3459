let sign = "";
let img = "";
let charName = "";
let bio = "";
// function to figure out the zodiac character
function zodiac(){
    // changed these to const bc they're not gonna change
    const birthmonth = document.getElementById("month").value;
    const birthday = document.getElementById("day").value;

// alert for no date
    if (!birthmonth || !birthday){
      return alert('no date')
    }
    // change this to let instead of var
    let result = " unknown because you didn't put a valid date.";

    // order of operations makes this condition okay but let's add parenthesis
    if ((birthmonth == 1 && birthday >= 20) || (birthmonth == 2 && birthday <= 18)){
      
      document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign = "Aquarius";
      img = "graphics/aquarius-monica-gaztambide.jpg";
      charName = "Esther Acebo · Monica Gaztambide";
      bio = "You Match with Esther Acebo AKA Monica Gaztambide from Money Hesit";
      }
  
    if ((birthmonth == 2&& birthday >= 19) || (birthmonth == 3&& birthday <= 20)){
      
      document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign="Pisces";
      img="graphics/pisces-marsella.jpg";
      charName="Luka Peroš · Marsella";
      bio="You Match with Luka Peroš AKA Marsella from Money Hesit";
        
      }
    if ((birthmonth == 3 && birthday >= 21) || (birthmonth == 4 && birthday <= 19)){
     
      document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign="Aries";
      img="graphics/aries-berlin.jpg";
      charName="Pedro Alonso · Berlin";
      bio="You Match with Pedro Alonso AKA Berlin from Money Hesit";
      
    }
    
    if ((birthmonth == 4 && birthday >= 20)|| (birthmonth == 5 && birthday <= 20)){
      
      document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign="Taurus";
      img="graphics/taurus-raquel-murillo.jpg";
      charName="Itziar Ituño · Raquel Murillo";    
      bio="You Match with Itziar Ituño AKA Raquel Murillo from Money Hesit";

      }
    
    if ((birthmonth == 5 && birthday >= 21) || (birthmonth == 6 && birthday <= 20)){
     
      document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign="Gemini";
      img="graphics/gemini-rio.jpg";
      charName="Miguel Herrán · Rio";
      bio="You Match with Miguel Herrán AKA Rio from Money Hesit";

      }
    
    if ((birthmonth == 6 && birthday >= 21) || (birthmonth == 7 && birthday <= 22)){
      
      document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign="Cancer";
      img="graphics/cancer-nairobi.jpg";
      charName="Alba Flores · Nairobi";
      bio="You Match with Alba Flores AKA Nairobi from Money Hesit";

      }
    if ((birthmonth == 7 && birthday >= 23) || (birthmonth == 8 && birthday <= 22)){
      
      document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign="Leo";
      img="graphics/leo-martin-berrote.jpg";
      charName="Rodrigo de la Serna · Martin Berrote";
      bio="You Match with Rodrigo de la Serna AKA Martin Berrote from Money Hesit";

      }
      if ((birthmonth == 8 && birthday >= 23) || (birthmonth == 9 && birthday <= 22)){

        document.getElementsByClassName("zodiac-sub-box").innerHTML
        sign="Virgo";
        img="graphics/virgo-the-professor.jpg";
        charName="Álvaro Morte · The Professor";
        bio="You Match with Álvaro Morte AKA The Professor from Money Hesit";
        
        }
      if ((birthmonth == 9 && birthday >= 23) || (birthmonth == 10 && birthday <= 22)){
        
        document.getElementsByClassName("zodiac-sub-box").innerHTML
        sign="Libra";
        img="graphics/libra-tokyo.jpg";
        charName="Úrsula Corberó · Tokyo";
        bio="You Match with Úrsula Corberó AKA Tokyo from Money Hesit";
    
    }
      if ((birthmonth == 10 && birthday >= 23) || (birthmonth == 11 && birthday <= 21)){
       
        document.getElementsByClassName("zodiac-sub-box").innerHTML
        sign="Scorpio";
        img="graphics/scorpio-denver.jpg";
        charName="Jaime Lorente · Denver";
        bio="You Match with Jaime Lorente AKA Denver from Money Hesit";
        
        }
      if ((birthmonth == 11 && birthday >= 22) || (birthmonth == 12 && birthday <= 21)){
        
        document.getElementsByClassName("zodiac-sub-box").innerHTML
        sign="Sagittarius";
        img="graphics/sagittarius-bogota.jpg";
        charName="Hovik Keuchkerian · Bogota";
        bio="You Match with Hovik Keuchkerian AKA Bogota from Money Hesit";
        
        }
    
    if((birthmonth == 12 && birthday >= 22) || (birthmonth == 1 && birthday <= 19)){
       
        document.getElementsByClassName("zodiac-sub-box").innerHTML
        sign="Capricorn";
        img="graphics/capricorn-helsinki.jpg";
        charName="Darko Perić · Helsinki";
        bio="You Match with Darko Perić AKA Helsinki from Money Hesit";
        
        }
        else if (birthmonth>12||birthday>31){
          alert("Please enter an accurate date !!!");
  

      }

  const charOutput = document.querySelector('.output');
  
   
      setCharacter();
  }

function setCharacter(){
  const signName = document.querySelector('.js-sign-name');
  signName.innerHTML = sign;

  const imageName = document.querySelector('.js-character-img');
  imageName.src = img;

  const characterName = document.querySelector('.js-character-name-person');
  characterName.innerHTML = charName;

  const bioName = document.querySelector('.js-character-bio');
  bioName.innerHTML = bio;

  const revealBox = document.querySelector('.js-character-reveal');
  revealBox.style.display = "block";
}


// event listener for the submit button
const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', function(event){
  event.preventDefault();
  zodiac();
});