"use strict";
let output;
let value = [];
function main() {
    output = document.getElementById("output");
    const form = document.getElementsByTagName("form");
    form[0].addEventListener("submit", submit, true);
}
function submit(event) {
    event.preventDefault();
    value = document.getElementsByClassName("info");
    if (!value[0].value || !value[1].value || !value[2].value) {
        output.innerText = `Please fill out all forms`;
    }
    else {
        output.innerText = `Thank you ${value[0].value}`;
    }
}
