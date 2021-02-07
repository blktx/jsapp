const birthday = "16 Oct 2021";

function countdown() {

    const birthdayDate = new Date(birthday);
    const currentDate = new Date();

    console.log(birthdayDate - currentDate);
}

countdown();