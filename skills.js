let number = document.querySelectorAll(".number");

number.forEach(number => {
    let counter = 0;
    let target = parseInt(number.innerHTML); // لو مكتوب مثلا 90%

    let interval = setInterval(() => {

        if(counter >= target){
            clearInterval(interval);
        }
        else{
            counter++;
            number.innerHTML = counter + "%";
        }

    }, 25);

});