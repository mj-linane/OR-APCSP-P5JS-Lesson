
const textColor = document.querySelector('#content')

setInterval(() => {
  if (textColor.style.color === 'black') {
    textColor.style.color = 'red'
  } else {
    textColor.style.color = 'black'
  }
}, 500)
