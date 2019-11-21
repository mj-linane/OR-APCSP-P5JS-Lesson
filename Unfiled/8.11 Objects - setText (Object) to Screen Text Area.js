var currentIndex = 0;

var contact1 = {};
contact1.name = "Friend 1";
contact1.phone = "555-555-5555";
contact1.birthday = "1/1/1970";
contact1.imageURL = "https://images.code.org/53a5bdfb7f4ec83174756c8e094558fd-image-1449518131328.png";

var contact2 = { name: "Friend2", phone: "123123", birthdate: '1232134', imageURL: "" };
// Add properties

var contact3 = { name: "Friend3", phone: "3445657", birthdate: '124345', imageURL: "" };
// Add properties

var contacts = [];
appendItem(contacts, contact1);
appendItem(contacts, contact2);
appendItem(contacts, contact3);

showCurrentContact();

onEvent("viewContactsScreen", "keydown", function (event) {
  if (event.key == "Left") {
    currentIndex--;
    currentIndex = wrap(currentIndex, 0, contacts.length - 1);
    showCurrentContact();
  } else if (event.key == "Right") {
    currentIndex++;
    currentIndex = wrap(currentIndex, 0, contacts.length - 1);
    showCurrentContact();
  }
});

onEvent("addContactBtn", "click", function () {
  setScreen("addContactsScreen");
});

onEvent("backBtn", "click", function () {
  setScreen("viewContactsScreen");
});

function showCurrentContact() {
  /*
  Although we would never normally do this, if we wanted to return the entire 
  javascript object to the screen, we would write it using the built in JSON method stringify
  The second argument alters the contents of the string before returning it. 
   The third argument specifies how many spaces to use as white space for readability.
   */
  setText("contactInfo", JSON.stringify(contacts[currentIndex], null, 4));
}

function wrap(val, low, high) {
  var output;
  if (val < low) {
    output = high;
  } else if (val > high) {
    output = low;
  } else {
    output = val;
  }
  return output;
}
