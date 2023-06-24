//You might be tempted to look back at previous code, 
//but don't. Use your knowledge and documentation from the internet (if needed), to build the application.

// Defining text characters for the empty and full hearts for you to use later.

const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const articleHearts = document.querySelectorAll(".like-glyph");

for (const icon of articleHearts){
icon.addEventListener('click', fillHeart)
}

function fillHeart(e){
  let heart = e.target;
  mimicServerCall()
  .then(function(){
    if(heart.innerText === EMPTY_HEART){
      heart.innerText = FULL_HEART;
      heart.className = 'activated-heart'
    }else{
      heart.innerText = EMPTY_HEART;
      heart.className = ''
    }
  })
  .catch(function(error){
    const modal = document.getElementById("modal");
    modal.className = '';
    modal.innerText = error;
    setTimeout(() => modal.className = 'hidden', 3000)

  })
}






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
