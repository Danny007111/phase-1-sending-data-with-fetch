// Add your code here
function submitData(Uname, Uemail){

// Setting data aside for easy access.
const formData = {
    name: `${Uname}`,
    email: `${Uemail}`,
  };

// function inside fetch "POST"
const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };

  return fetch("http://localhost:3000/users", configurationObject)
  .then(function (response) {
    return response.json();
  })
  .then(function (object) {
    // From this object, find the new id and append this value to the DOM.
    // let newId = document.querySelector(object);
    
    let newId = document.querySelector('section#user h4');
    

    newId.innerText = object.id;
  

    
  })
  .catch(function (error) {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
  });
  

};

submitData("danny", "danny007111@hotmail.com");