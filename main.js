// const submitButton = document.querySelector('#submit-button')
// submitButton.addEventListener ('click', function(submit) {
// console.log(submitButton)

// })


// function submit() {
//     var month = parseInt(document.getElementById('month').value);
//     var day = parseInt(document.getElementById('day').value);
//     if (month > 0 && month < 13 && day > 0){
//     }
// }



function zodiac(){
    var birthmonth = document.getElementById("month").value;
     var birthday = document.getElementById("day").value;
    var result = " unknown because you didn't put a valid date.";

  
  
  if (birthmonth == 1&& birthday >= 20 || birthmonth == 2 && birthday <= 18
      ){
          result = ("Aquarius");
          document.getElementsByClassName("zodiac-sub-box").innerHTML
          document.getElementsByClassName("sign-name-aquarius").innerHTML="Aquarius";
          document.getElementsByClassName("sign-image-aquarius").innerHTML="<img src= graphics/aquarius-monica-gaztambide.jpg>";
          document.getElementsByClassName("name-of-person-aquarius").innerHTML="Esther Acebo · Monica Gaztambide";
          document.getElementsByClassName("person-bio-aquarius").innerHTML="You Match with Esther Acebo AKA Monica Gaztambide from Money Hesit";
      }
  
      if (birthmonth == 2&& birthday >= 19 || birthmonth == 3&& birthday <= 20){
         result = ("Pisces");
         document.getElementsByClassName("zodiac-sub-box").innerHTML
          document.getElementsByClassName("sign-name-aquarius").innerHTML="Pisces";
          document.getElementsByClassName("sign-image-aquarius").innerHTML="<img src= graphics/pisces-marsella.jpg>";
          document.getElementsByClassName("name-of-person-aquarius").innerHTML="Luka Peroš · Marsella";
          document.getElementsByClassName("person-bio-aquarius").innerHTML="You Match with Luka Peroš AKA Marsella from Money Hesit";
        
      }
     if (birthmonth == 3&& birthday >= 21 || birthmonth == 4 && birthday <= 19){
         result = ("Aries");
         document.getElementsByClassName("zodiac-sub-box").innerHTML
         document.getElementsByClassName("sign-name-aquarius").innerHTML="Aries";
         document.getElementsByClassName("sign-image-aquarius").innerHTML="<img src= graphics/aries-berlin.jpg>";
         document.getElementsByClassName("name-of-person-aquarius").innerHTML="Pedro Alonso · Berlin";
         document.getElementsByClassName("person-bio-aquarius").innerHTML="You Match with Pedro Alonso AKA Berlin from Money Hesit";
        
    }
    
      if (birthmonth == 4&& birthday >= 20|| birthmonth == 5 && birthday <= 20){
          result = ("Taurus");
          document.getElementsByClassName("zodiac-sub-box").innerHTML
          document.getElementsByClassName("sign-name-aquarius").innerHTML="Taurus";
          document.getElementsByClassName("sign-image-aquarius").innerHTML="<img src= graphics/taurus-raquel-murillo.jpg>";
          document.getElementsByClassName("name-of-person-aquarius").innerHTML="Itziar Ituño · Raquel Murillo";
          document.getElementsByClassName("person-bio-aquarius").innerHTML="You Match with Itziar Ituño AKA Raquel Murillo from Money Hesit";

      }
    
      if (birthmonth == 5&& birthday >= 21 || birthmonth == 6 && birthday <= 20){
          result = ("Gemini");
         document.getElementsByClassName("zodiac-sub-box").innerHTML
          document.getElementsByClassName("sign-name-aquarius").innerHTML="Gemini";
          document.getElementsByClassName("sign-image-aquarius").innerHTML="<img src= graphics/gemini-rio.jpg>";
          document.getElementsByClassName("name-of-person-aquarius").innerHTML="Miguel Herrán · Rio";
          document.getElementsByClassName("person-bio-aquarius").innerHTML="You Match with Miguel Herrán AKA Rio from Money Hesit";

      }
    
      if (birthmonth == 6&& birthday >= 21 || birthmonth == 7&& birthday <= 22){
          result = ("Cancer");
         document.getElementsByClassName("zodiac-sub-box").innerHTML
          document.getElementsByClassName("sign-name-aquarius").innerHTML="Cancer";
          document.getElementsByClassName("sign-image-aquarius").innerHTML="<img src= graphics/cancer-nairobi.jpg>";
          document.getElementsByClassName("name-of-person-aquarius").innerHTML="Alba Flores · Nairobi";
          document.getElementsByClassName("person-bio-aquarius").innerHTML="You Match with Alba Flores AKA Nairobi from Money Hesit";

      }
      if (birthmonth == 7&& birthday >= 23 || birthmonth == 8 && birthday <= 22){
          result = ("Leo");
         document.getElementsByClassName("zodiac-sub-box").innerHTML
          document.getElementsByClassName("sign-name-aquarius").innerHTML="Leo";
          document.getElementsByClassName("sign-image-aquarius").innerHTML="<img src= graphics/leo-martin-berrote.jpg>";
          document.getElementsByClassName("name-of-person-aquarius").innerHTML="Rodrigo de la Serna · Martin Berrote";
          document.getElementsByClassName("person-bio-aquarius").innerHTML="You Match with Rodrigo de la Serna AKA Martin Berrote from Money Hesit";

      }
      if (birthmonth == 8 && birthday >= 23 || birthmonth == 9 && birthday <= 22){
          result = ("Virgo");
         document.getElementsByClassName("zodiac-sub-box").innerHTML
          document.getElementsByClassName("sign-name-aquarius").innerHTML="Virgo";
          document.getElementsByClassName("sign-image-aquarius").innerHTML="<img src= graphics/virgo-the-professor.jpg>";
          document.getElementsByClassName("name-of-person-aquarius").innerHTML="Álvaro Morte · The Professor";
          document.getElementsByClassName("person-bio-aquarius").innerHTML="You Match with Álvaro Morte AKA The Professor from Money Hesit";
        
        }
      if (birthmonth == 9&& birthday >= 23 || birthmonth == 10&& birthday <= 22){
        result = ("Libra");
        document.getElementsByClassName("zodiac-sub-box").innerHTML
        document.getElementsByClassName("sign-name-aquarius").innerHTML="Libra";
        document.getElementsByClassName("sign-image-aquarius").innerHTML="<img src= graphics/libra-tokyo.jpg>";
        document.getElementsByClassName("name-of-person-aquarius").innerHTML="Úrsula Corberó · Tokyo";
        document.getElementsByClassName("person-bio-aquarius").innerHTML="You Match with Úrsula Corberó AKA Tokyo from Money Hesit";
    
    }
      if (birthmonth == 10 && birthday >= 23|| birthmonth == 11 && birthday <= 21){
         result = ("Scorpio");
         document.getElementsByClassName("zodiac-sub-box").innerHTML
         document.getElementsByClassName("sign-name-aquarius").innerHTML="Scorpio";
         document.getElementsByClassName("sign-image-aquarius").innerHTML="<img src= graphics/scorpio-denver.jpg>";
         document.getElementsByClassName("name-of-person-aquarius").innerHTML="Jaime Lorente · Denver";
         document.getElementsByClassName("person-bio-aquarius").innerHTML="You Match with Jaime Lorente AKA Denver from Money Hesit";
        
        }
      if (birthmonth == 11 && birthday >= 22 || birthmonth == 12 && birthday <= 21){
          result = ("Sagittarius");
          document.getElementsByClassName("zodiac-sub-box").innerHTML
          document.getElementsByClassName("sign-name-aquarius").innerHTML="Sagittarius";
          document.getElementsByClassName("sign-image-aquarius").innerHTML="<img src= graphics/sagittarius-bogota.jpg>";
          document.getElementsByClassName("name-of-person-aquarius").innerHTML="Hovik Keuchkerian · Bogota";
          document.getElementsByClassName("person-bio-aquarius").innerHTML="You Match with Hovik Keuchkerian AKA Bogota from Money Hesit";
        
        }
    
    if(birthmonth == 12 && birthday >= 22 || birthmonth == 1 && birthday <= 19){
   
          result = ("Capricorn");
          document.getElementsByClassName("zodiac-sub-box").innerHTML
          document.getElementsByClassName("sign-name-aquarius").innerHTML="Capricorn";
          document.getElementsByClassName("sign-image-aquarius").innerHTML="<img src= graphics/capricorn-helsinki.jpg>";
          document.getElementsByClassName("name-of-person-aquarius").innerHTML="Darko Perić · Helsinki";
          document.getElementsByClassName("person-bio-aquarius").innerHTML="You Match with Darko Perić AKA Helsinki from Money Hesit";
        
        }
        else if (birthmonth>12||birthday>31){
         alert("Please enter an accurate date ! ");
      }
   document.getElementById("output").innerHTML= result;
console.log(result)
  }
    