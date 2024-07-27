const regexName = new RegExp(/^[А-Яа-я]*$/);
let values = {
    lastName: undefined,
    firstName: undefined,
    middleName: undefined,
    group: undefined
};

function validateName(id) {
    let inputElement = document.getElementById(id);
    if (regexName.test(inputElement.value) && inputElement.value.length <= 20)
        values[inputElement.id] = inputElement.value;
    else
        inputElement.value = values[inputElement.id];
}

function saveData() {
    values.group = document.querySelector('.group-select').value;
    localStorage.setItem('values', JSON.stringify(values));
}

function loadData() {
    values = JSON.parse(localStorage.getItem('values')) || { lastName: undefined, firstName: undefined, middleName: undefined, group: undefined };
}

function updatePage() {
    document.querySelector('.full-name').innerHTML = values.firstName + ' ' + values.middleName + ' ' + values.lastName;
    document.querySelector('.group').innerHTML = values.group;
}

function checkAnswers() {
    let counter = 0;
    if (document.querySelector('input[name="q1-answers"]:checked') === document.getElementById("q1-5")) counter++;
    if (document.querySelector('input[name="q2-answers"]:checked') === document.getElementById("q2-2")) counter++;
    if (document.getElementById("q3-1").checked) counter--;
    if (document.getElementById("q3-2").checked) counter++;
    if (document.getElementById("q3-3").checked) counter++;
    if (document.getElementById("q3-4").checked) counter--;
    if (document.getElementById("q4-1").checked) counter--;
    if (document.getElementById("q4-2").checked) counter++;
    if (document.getElementById("q4-3").checked) counter++;
    if (document.getElementById("q4-4").checked) counter--;
    if (document.getElementById("q4-5").checked) counter++;
    if (document.getElementById("q4-6").checked) counter++;
    if (document.getElementById("q4-7").checked) counter--;
    if (document.getElementById("q4-8").checked) counter++;
    if (document.getElementById("q4-9").checked) counter++;
    if (document.getElementById("q4-10").checked) counter--;
    if (document.getElementById("q4-11").checked) counter++;
    if (document.getElementById("q5-1").checked) counter++;
    if (document.getElementById("q5-2").checked) counter++;
    if (document.getElementById("q5-3").checked) counter++;
    if (document.getElementById("q5-4").checked) counter++;

    document.querySelector('.result').innerHTML = counter + ' / 15';
}