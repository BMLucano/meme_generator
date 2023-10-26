
let submitForm = document.querySelector('#submitForm')
submitForm.addEventListener("submit", function (e) {
  e.preventDefault();

  //create new elements for meme div, divs for top and bottom text, meme image, and button to remove meme


  const memeDiv = document.createElement('div')
  const textTop = document.createElement('div')
  const textBottom = document.createElement('div')
  const memeImage = document.createElement('img')
  const buttonDelete = document.createElement('button')

  //create class for each new element for CSS styling
  const textColor = document.querySelector('input[name="textColor"]:checked').value
  textTop.classList.toggle(toggleTop(textColor))
  textBottom.classList.toggle(toggleBottom(textColor))

  memeImage.classList.add('memeImage')
  buttonDelete.classList.add('buttonDelete')


  //create class for meme container and add image and texts
  memeDiv.classList.add('memeContainer')
  memeDiv.appendChild(textTop)
  memeDiv.appendChild(textBottom)
  memeDiv.appendChild(memeImage)
  memeDiv.appendChild(buttonDelete)

  //add value from input to the html of each new element
  memeImage.src = document.querySelector('#imageURLInput').value
  textTop.innerHTML = document.querySelector('#memeTopInput').value
  textBottom.innerHTML = document.querySelector('#memeBottomInput').value
  buttonDelete.innerHTML = '<button id="delete" type="Button">Delete</button>'

  //add new class to location where meme goes
  const memeLocation = document.querySelector('#memeLocation')
  memeLocation.appendChild(memeDiv)

  //erase current input
  document.querySelector('#imageURLInput').value = '';
  document.querySelector('#memeTopInput').value = '';
  document.querySelector('#memeBottomInput').value = '';

  //event listener for delete button click
  buttonDelete.addEventListener('click', function(e){
    memeDiv.remove()
  })
});

function toggleTop (inputValue){
  return(inputValue === 'black')? 'textTopBlack' : 'textTopWhite';
}
function toggleBottom (inputValue){
  return(inputValue === 'black')? 'textBottomBlack' : 'textBottomWhite';
}