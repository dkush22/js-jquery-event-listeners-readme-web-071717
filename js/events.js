function getIt() {
  $('p').on('click', function() {
    alert('hey!')
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.')
  })
}

function pressIt() {
  $('#typing').on('keydown', function(key) {
    if (key.which === 71) {
      alert("You pressed 'g'!")
    }
  })
}

$(document).ready(function(){

// call functions here
getIt()
submitIt()
frameIt()
submitIt()

});
