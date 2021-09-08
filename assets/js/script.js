
var dateTracker = $('#currentDay');
var eightAm = $('#eightAm')
var inputGroup = $(".input-group")
var nineAm = $('#nineAm')
var tenAm = $('#tenAm')
var elevenAm = $('#elevenAm')
var twelvePm = $('#twelvePm')
var onePm = $('#onePm')
var twoPm = $('#twoPm')
var threePm = $('#threePm')
var fourPm = $('#fourPm')
var fivePm = $('#fivePm')

var saveButton8 = $('#save-btn8');
var saveButton9 = $('#save-btn9');
var saveButton10 = $('#save-btn10');
var saveButton11 = $('#save-btn11');
var saveButton12 = $('#save-btn12');
var saveButton13 = $('#save-btn13');
var saveButton14 = $('#save-btn14');
var saveButton15 = $('#save-btn15');
var saveButton16 = $('#save-btn16');
var saveButton17 = $('#save-btn17');

var isSaved8 = true;
var isSaved9 = true;
var isSaved10 = true;
var isSaved11 = true;
var isSaved12 = true;
var isSaved13 = true;
var isSaved14 = true;
var isSaved15 = true;
var isSaved16 = true;
var isSaved17 = true;

//This creates and renders the time tracker at top of planner
function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  dateTracker.text(rightNow);


}
setInterval(displayTime, 1000);

function hourTracker() {
  var hourNow = moment().hours()
  console.log(hourNow)
  var inputGroup = $('.input-group')
  inputGroup.each(function () {
    var trackHour = parseInt($(this).attr("id"))
    console.log(trackHour)
    
    if (trackHour <= hourNow) {
      
      $((this)).addClass("past")
    } 
  });
}



function renderLastSave() { 

var savedItems = { 
 eight: JSON.parse(localStorage.getItem("eightAm")),
 nine: JSON.parse(localStorage.getItem("nineAm")),
 ten: JSON.parse(localStorage.getItem("tenAm")),
 eleven: JSON.parse(localStorage.getItem("elevenAm")),
 twelve: JSON.parse(localStorage.getItem("twelvePm")),
  one: JSON.parse(localStorage.getItem("onePm")),
  two: JSON.parse(localStorage.getItem("twoPm")),
  three: JSON.parse(localStorage.getItem("threePm")),
  four: JSON.parse(localStorage.getItem("fourPm")),
  five: JSON.parse(localStorage.getItem("fivePm")),
} 
console.log(savedItems.eight)
console.log(savedItems.one)

document.getElementById("eightAm").innerHTML = savedItems.eight
document.getElementById("nineAm").innerHTML = savedItems.nine
document.getElementById("tenAm").innerHTML = savedItems.ten
document.getElementById("elevenAm").innerHTML = savedItems.eleven
document.getElementById("twelvePm").innerHTML = savedItems.twelve
document.getElementById("onePm").innerHTML = savedItems.one
document.getElementById("twoPm").innerHTML = savedItems.two
document.getElementById("threePm").innerHTML = savedItems.three
document.getElementById("fourPm").innerHTML = savedItems.four
document.getElementById("fivePm").innerHTML = savedItems.five
}


renderLastSave()








//save to local storage button
saveButton8.on('click', function () {
  console.log("savebutton8working")
  eight()
 
});


function eight() { 
if (isSaved8 || saveButton8 === $('#save-btn8')) {
  localStorage.setItem("eightAm", JSON.stringify(eightAm.val()));
  isSaved8 = !isSaved8;
} else {
  
  localStorage.removeItem("eightAm", eightAm)
  isSaved8 = !isSaved8;
}};


saveButton9.on('click', function () {
  if (isSaved9 || saveButton9 === $('#save-btn9')) {
    localStorage.setItem("nineAm", JSON.stringify(nineAm.val()));
    isSaved9 = !isSaved9;
  } else {
    
    localStorage.removeItem("nineAm", nineAm) 
    isSaved9 = !isSaved9;
  }
});

saveButton10.on('click', function () {
  if (isSaved10 || saveButton10 === $('#save-btn10')) {
    localStorage.setItem("tenAm", JSON.stringify(tenAm.val()));
    isSaved10 = !isSaved10;
  } else {
   
    localStorage.removeItem("tenAm", tenAm)
    isSaved10 = !isSaved10;
  }
});

saveButton11.on('click', function () {
if (isSaved11 || saveButton11 === $('#save-btn11')) {
  localStorage.setItem("elevenAm", JSON.stringify(elevenAm.val()));
  isSaved11 = !isSaved11;
} else {
  
  localStorage.removeItem("elevenAm", elevenAm) 
  isSaved11 = !isSaved11;
}
});

saveButton12.on('click', function () {
  if (isSaved12 || saveButton12 === $('#save-btn12')) {
    localStorage.setItem("twelvePm", JSON.stringify(twelvePm.val()));
    isSaved12 = !isSaved12;
  } else {
    
    localStorage.removeItem("twelvePm") 
    isSaved12 = !isSaved12;
  }
  });

  saveButton13.on('click', function () {
    if (isSaved13) {
      localStorage.setItem("onePm", JSON.stringify(onePm.val()));
      isSaved13 = !isSaved13;
    } else {
   
      localStorage.removeItem("onePm") 
      isSaved13 = !isSaved13;
    }
    });

    saveButton14.on('click', function () {
      if (isSaved14) {
        localStorage.setItem("twoPm", JSON.stringify(twoPm.val()));
        isSaved14 = !isSaved14;
      } else {
       
        localStorage.removeItem("twoPm") 
        isSaved14 = !isSaved14;
      }
      });

      saveButton15.on('click', function () {
        if (isSaved15) {
          localStorage.setItem("threePm", JSON.stringify(threePm.val()));
          isSaved15 = !isSaved15;
        } else {
          
          localStorage.removeItem("threePm") 
          isSaved15 = !isSaved15;
        }
        });

        saveButton16.on('click', function () {
          if (isSaved16) {
            localStorage.setItem("fourPm", JSON.stringify(fourPm.val()));
            isSaved16 = !isSaved16;
          } else {
           
            localStorage.removeItem("fourPm") 
            isSaved16 = !isSaved16;
          }
          });

          saveButton17.on('click', function () {
            if (isSaved17 || saveButton17 === $('#save-btn4')) {
              localStorage.setItem("fivePm", JSON.stringify(fivePm.val()));
              isSaved17 = !isSaved17;
            } else {
              
              localStorage.removeItem("fivePm") 
              isSaved17 = !isSaved17;
            }
            });



hourTracker()

