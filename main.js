// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const posts = document.getElementsByClassName('media-post')

for (const post of posts) {
  let heart = post.children[2].children[0].children[0].children[0]
  heart.addEventListener("click", (e) => {
    if (e.target.innerText === FULL_HEART) {
      e.target.innerText = EMPTY_HEART
      e.target.className = 'like-glyph'
    } else {
      mimicServerCall()
      .then(() => {
        e.target.innerText = FULL_HEART
        e.target.className = "like-glyph activated-heart"
      })
      .catch((resp) => {
        console.log("failed")
        showError(resp)
      })    
    }
})}

function showError(message) {
  const modal = document.getElementById('modal')
  modal.className = ""
  modal.lastChild.textContent = message
  setTimeout(hideError,3000)
}

function hideError() {
  const modal = document.getElementById('modal')
  modal.className = "hidden"
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
