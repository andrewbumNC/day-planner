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
var saveButton1 = $('#save-btn1');
var saveButton2 = $('#save-btn2');
var saveButton3 = $('#save-btn3');
var saveButton4 = $('#save-btn4');
var saveButton5 = $('#save-btn5');

var isSaved8 = true;
var isSaved9 = true;
var isSaved10 = true;
var isSaved11 = true;
var isSaved12 = true;
var isSaved1 = true;
var isSaved2 = true;
var isSaved3 = true;
var isSaved4 = true;
var isSaved5 = true;

//This creates and renders the time tracker at top of planner
function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  dateTracker.text(rightNow);


}
setInterval(displayTime, 1000);


hourTracker()

function hourTracker() {
  var hourNow = moment().hours()
  var inputGroup = $('.input-group')
  inputGroup.each(function () {
    var trackHour = parseInt($(this).attr("id"))
    console.log(trackHour)

  });
}


//Why won't this assign 
function assignHour() {
  for (var i = 0; i < 8; i++) {


    $(".input-group").children().eq(2).children(0).addClass('saveButton' + i)
    $(".saveButton" + i).css('color', 'red');




  }
}


assignHour()






















//quite a bit of hard code. First draft: 



//save to local storage button
saveButton8.on('click', function () {
  if (isSaved8 || saveButton8 === $('#save-btn8')) {
    localStorage.setItem("eightAm", JSON.stringify(eightAm.val()));
    isSaved8 = !isSaved8;
  } else {
    console.log("is it false?")
    localStorage.removeItem("eightAm")
    isSaved8 = !isSaved8;
  }
});


//save to local storage button
saveButton9.on('click', function () {
  if (isSaved9 || saveButton9 === $('#save-btn9')) {
    localStorage.setItem("nineAm", JSON.stringify(nineAm.val()));
    isSaved9 = !isSaved9;
  } else {
    console.log("is it false?")
    localStorage.removeItem("nineAm") 
    isSaved9 = !isSaved9;
  }
});

saveButton10.on('click', function () {
  if (isSaved10 || saveButton10 === $('#save-btn10')) {
    localStorage.setItem("tenAm", JSON.stringify(tenAm.val()));
    isSaved10 = !isSaved10;
  } else {
    console.log("is it false?")
    localStorage.removeItem("tenAm")
    isSaved10 = !isSaved10;
  }
});

saveButton11.on('click', function () {
if (isSaved11 || saveButton11 === $('#save-btn11')) {
  localStorage.setItem("elevenAm", JSON.stringify(elevenAm.val()));
  isSaved11 = !isSaved11;
} else {
  console.log("is it false?")
  localStorage.removeItem("elevenAm") 
  isSaved11 = !isSaved11;
}
});

saveButton12.on('click', function () {
  if (isSaved12 || saveButton12 === $('#save-btn12')) {
    localStorage.setItem("twelvePm", JSON.stringify(twelveAm.val()));
    isSaved12 = !isSaved12;
  } else {
    console.log("is it false?")
    localStorage.removeItem("twelvePm") 
    isSaved12 = !isSaved12;
  }
  });

  saveButton1.on('click', function () {
    if (isSaved1 || saveButton1 === $('#save-btn1')) {
      localStorage.setItem("onePm", JSON.stringify(onePm.val()));
      isSaved1 = !isSaved1;
    } else {
      console.log("is it false?")
      localStorage.removeItem("onePm") 
      isSaved1 = !isSaved1;
    }
    });

    saveButton2.on('click', function () {
      if (isSaved2 || saveButton2 === $('#save-btn2')) {
        localStorage.setItem("twoPm", JSON.stringify(twoPm.val()));
        isSaved2 = !isSaved2;
      } else {
        console.log("is it false?")
        localStorage.removeItem("twoPm") 
        isSaved2 = !isSaved2;
      }
      });

      saveButton3.on('click', function () {
        if (isSaved3 || saveButton3 === $('#save-btn3')) {
          localStorage.setItem("twoPm", JSON.stringify(threePm.val()));
          isSaved3 = !isSaved3;
        } else {
          console.log("is it false?")
          localStorage.removeItem("threePm") 
          isSaved3 = !isSaved3;
        }
        });

        saveButton3.on('click', function () {
          if (isSaved3 || saveButton3 === $('#save-btn3')) {
            localStorage.setItem("threePm", JSON.stringify(threePm.val()));
            isSaved3 = !isSaved3;
          } else {
            console.log("is it false?")
            localStorage.removeItem("threePm") 
            isSaved3 = !isSaved3;
          }
          });

          saveButton4.on('click', function () {
            if (isSaved4 || saveButton4 === $('#save-btn4')) {
              localStorage.setItem("fourPm", JSON.stringify(fourPm.val()));
              isSaved4 = !isSaved4;
            } else {
              console.log("is it false?")
              localStorage.removeItem("fourPm") 
              isSaved4 = !isSaved4;
            }
            });

            saveButton5.on('click', function () {
              if (isSaved5 || saveButton5 === $('#save-btn5')) {
                localStorage.setItem("fivePm", JSON.stringify(fivePm.val()));
                isSaved5 = !isSaved5;
              } else {
                console.log("is it false?")
                localStorage.removeItem("fivePm") 
                isSaved5 = !isSaved5;
              }
              });


//this 
function backgroundShading1() {}

var today = new moment().hours();

if (today >= 9) {
  $('#eightAm').css('background-color', 'red')
} else {
  eightAm.css('background-color', 'white')
}

if (today >= 10) {
  $('#nineAm').css('background-color', 'red')
} else {
  $('#nineAm').css('background-color', 'white')
}

if (today >= 11) {
  $('#tenAm').css('background-color', 'red')
} else {
  $('#tenAm').css('background-color', 'white')
}

if (today >= 12) {
  $('#elevenAm').css('background-color', 'red')
} else {
  $('#elevenAm').css('background-color', 'white')
}

if (today >= 13) {
  $('#twelvePm').css('background-color', 'red')
} else {
  $('#twelvePm').css('background-color', 'white')
}

if (today >= 14) {
  $('#onePm').css('background-color', 'red')
} else {
  $('#onePm').css('background-color', 'white')
}

if (today >= 15) {
  $('#twoPm').css('background-color', 'red')
} else {
  $('#twoPm').css('background-color', 'white')
}

if (today >= 16) {
  $('#threePm').css('background-color', 'red')
} else {
  $('#threePm').css('background-color', 'white')
}

if (today >= 17) {
  $('#fourPm').css('background-color', 'red')
} else {
  $('#fourPm').css('background-color', 'white')
}

if (today >= 18) {
  $('#fivePm').css('background-color', 'red')
} else {
  $('#fivePm').css('background-color', 'white')
}

backgroundShading1()






