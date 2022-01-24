// Business Logic for AddressBook

function AddressBook (){
  this.contacts = {};
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact){
  contact.id = this.assignId();
  this.contacts[contact.id] = contact;
}

AddressBook.prototype.assignId = function(contact){
  this.currentId +=1;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id){
  if(this.contacts[id] != undefined){
    return this.contacts[id];
  }
  return false;
}

AddressBook.prototype.deleteContact = function(id){
  if(this.contacts[id] === undefined){
    return false;
  }
  delete this.contacts[id];
  return true;
}

//Business Logic for Contacts

function Contact(firstName, lastName, phoneNumber){
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function(){
  return this.firstName + " " + this.lastName;
}

/*function PlacesIveBeen() {
  this.destinations = {};
  this.currentId = 0;
}

PlacesIveBeen.prototype.addDestination = function(destination) {
  destination.id = this.assignId();
  this.destinations[destination.id] = destination;
}

PlacesIveBeen.prototype.assignId = function(destination){
  this.currentId += 1;
  return this.currentId;
};


function Destination(location, landmarks, timeOfYear, notes){
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
};

let lasVegas = new Destination("Las Vegas, NV", "Omega-Mart", "Christmas", "This place ruled");

console.log(lasVegas);
*/