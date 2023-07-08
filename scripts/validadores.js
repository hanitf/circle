function submitted() {
    alert("The form was submitted");
}

const validate = (event, campos) => {
    event.preventDefault();
    submitted();
    campos.map((input) => {
        console.log(
            `${document.querySelector(`${input}-label`).innerText}: ${
                document.querySelector(input).value
            }`
        );
        console.log();
    });
};

export const addValidator = (formId, campos) => {
    const form = document.querySelector(formId);
    form.addEventListener("submit", (event) => validate(event, campos));
};
