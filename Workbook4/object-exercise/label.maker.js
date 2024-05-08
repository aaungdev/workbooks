"use strict";

const contactInfo = {
    name: "Pursalane Faye",
    address: "121 Main Street",
    city: "Benbrook",
    state: "Texas",
    zip: "76126"
  };
  

  function printContact(info) {
    console.log(`${info.name}`);
    console.log(`${info.city}`);
    console.log(`${info.address}`);
    console.log(`${info.state}`);
    console.log(`${info.zip}`);
  }

  printContact(contactInfo);
  