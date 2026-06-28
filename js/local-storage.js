// Local Storage 

// add to localStorage
const addNumberToLS = ()=> {
    const number = Math.ceil(Math.random() * 100)
    console.log(number);
    localStorage.setItem("number", number)
};

// get from localStorage
const getNumerFromLS = ()=> {
    const number = localStorage.getItem("number")
    console.log("From saved local storage:", number)
};

// set object to localStorage
const setObjectToLS = ()=> {

    const user = {name : "Jobayer", age : 25,}
    localStorage.setItem("user", JSON.stringify(user))

};

// get object from localStorage
const getObjectToLS = ()=> {

    const savedUser = JSON.parse(localStorage.getItem('user'))
    console.log(savedUser);

};
