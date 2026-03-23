let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");

buttons.forEach (button => {
    button.addEventListener("click", () => {
        
        let value = button.textContent;

        if (value === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.valye = "Ошибка"
            }
        } else if (value === "C") {
            display.value = "";
        } else if (value === "CE") {
            display.value = display.value.slice(0, -1);
        }else {
            let lastChar = display.value.slice(-1);

            let operators = ["+", "-", "*", "/", "."];

            if (operators.includes(value) && operators.includes(lastChar)) {
                return;
            }

            display.value += value
        }
    });
});