let currentIndex = 0

const contact1 = {}
contact1.name = 'Friend 1'
contact1.phone = '555-555-5555'
contact1.birthday = '1/1/1970'
contact1.imageURL = 'https://images.code.org/53a5bdfb7f4ec83174756c8e094558fd-image-1449518131328.png'

const contact2 = {
  name: 'Friend2', phone: '123123', birthdate: '1232134', imageURL: '',
}
// Add properties

const contact3 = {
  name: 'Friend3', phone: '3445657', birthdate: '124345', imageURL: '',
}
// Add properties

const contacts = []
appendItem(contacts, contact1)
appendItem(contacts, contact2)
appendItem(contacts, contact3)

showCurrentContact()

onEvent('viewContactsScreen', 'keydown', (event) => {
  if (event.key === 'Left') {
    currentIndex -= 1
    currentIndex = wrap(currentIndex, 0, contacts.length - 1)
    showCurrentContact()
  } else if (event.key === 'Right') {
    currentIndex += 1
    currentIndex = wrap(currentIndex, 0, contacts.length - 1)
    showCurrentContact()
  }
})

onEvent('addContactBtn', 'click', () => {
  setScreen('addContactsScreen')
})

onEvent('backBtn', 'click', () => {
  setScreen('viewContactsScreen')
})

function showCurrentContact() {
  /*
  Although we would never normally do this, if we wanted to return the entire
  JavaScript object to the screen, we would write it using the built in JSON method stringify
  The second argument alters the contents of the string before returning it.
   The third argument specifies how many spaces to use as white space for readability.
   */
  setText('contactInfo', JSON.stringify(contacts[currentIndex], null, 4))
}

function wrap(val, low, high) {
  let output
  if (val < low) {
    output = high
  } else if (val > high) {
    output = low
  } else {
    output = val
  }
  return output
}
