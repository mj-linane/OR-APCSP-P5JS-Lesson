let dogsList = [
  { 'Dog': 'Corgi', 'Unlock1': 'Button 1', 'Unlock2': 'Button 2' },
  { 'Dog': 'Dalmatian', 'Unlock1': 'Button 3', 'Unlock2': 'Button 4' }
]



for (let i = 0; i < dogsList.length; i++) {
  if (dogsList[i].Unlock1 == 'Button 3' && dogsList[i].Unlock2 == 'Button 4') {
    console.log(dogsList[i].Dog)
  }
}