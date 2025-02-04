let string = "";
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", (e) => {
        let clicked = e.target.innerText
            // console.log(clicked)
        if (clicked == "=") {
            string = eval(string)
                // console.log(string)
            document.querySelector(".display").innerText = `${string}`
        } else if (clicked == "C") {
            string = ""
            document.querySelector(".display").innerText = `${string}`
        } else {

            string = string + clicked
                // console.log(string)
            document.querySelector(".display").innerText = `${string}`
        }

    })
})