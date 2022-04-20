const container = document.querySelector('.container');

let listStudent = [
    { name: 'Алексей', surName: 'Решетов', middleName: 'Леонидович', faculty: 'Программирование', bidthDay: new Date('05.11.19'), startYeur: 2000 },
    { name: 'Дмитрий', surName: 'Тютрин', middleName: 'Владимирович', faculty: 'Агрономический', bidthDay: new Date('1994.8.28'), startYeur: 2004 },
    { name: 'Галина', surName: 'Фирсова', middleName: 'Павловна', faculty: 'Социологический', bidthDay: new Date('1995.11.24'), startYeur: 2000 },
];

// function changeDate() {
//     for (let i = 0; i < listStudent.length; i++) {
//         let dateStudent = listStudent[i].bidthDay
//         let dd = dateStudent.getDate();
//         if (dd < 10) {
//             dd = '0' + dd;
//         };
//         let mm = dateStudent.getMonth() + 1; // месяц 1-12
//         if (mm < 10) {
//             mm = '0' + mm;
//         };
//         let gg = dateStudent.getFullYear();
//         let dateSt = dd + mm + gg;
//         console.log(dateSt);
//     }
// };
// changeDate();

function createFormStudents() {
    const formSt = document.createElement('form');
    const legend = document.createElement('legend');
    const divRow = document.createElement('div');
    const divRow1 = document.createElement('div');
    const divRow2 = document.createElement('div');
    const divRow3 = document.createElement('div');
    const divRow4 = document.createElement('div');
    const divRow5 = document.createElement('div');
    const divRow6 = document.createElement('div');
    const divRow7 = document.createElement('div');
    const divRow8 = document.createElement('div');
    let input = document.createElement('input');
    let input1 = document.createElement('input');
    let input2 = document.createElement('input');
    let input3 = document.createElement('input');
    let input4 = document.createElement('input');
    let input5 = document.createElement('input');
    const button = document.createElement('button');
    formSt.classList.add('form-group');
    legend.textContent = 'Форма для добавления студентов';
    divRow.classList.add('row');
    divRow1.classList.add('row');
    divRow2.classList.add('row');
    divRow3.classList.add('col');
    divRow4.classList.add('col');
    divRow5.classList.add('col');
    divRow6.classList.add('col');
    divRow7.classList.add('col');
    divRow8.classList.add('col');
    input.classList.add('form-control', 'input');
    input1.classList.add('form-control', 'input');
    input2.classList.add('form-control', 'input');
    input3.classList.add('form-control', 'input');
    input4.classList.add('form-control', 'input');
    input5.classList.add('form-control', 'input');
    input.type = 'text';
    input.placeholder = 'Имя';
    input.id = 'myname';
    input1.id = 'mysurname';
    input2.id = 'middlename';
    input3.id = 'faculty';
    input4.id = 'year';
    input5.id = 'startyear';
    input1.type = 'text';
    input1.placeholder = 'Фамилия';
    input2.type = 'text';
    input2.placeholder = 'Отчество';
    input3.type = 'text';
    input3.placeholder = 'Факультет';
    input4.type = 'date';
    input4.min = '1900-01-01';
    input4.max = '2022-02-20';
    input4.placeholder = 'Дата рождения';
    input5.type = 'number';
    input5.placeholder = 'Год начала обучения';
    input5.min = 2000;
    input5.max = 2022;
    button.type = 'submit';
    button.classList.add('btn', 'btn-primary', 'mb-2');
    button.textContent = 'Добавить студента';
    formSt.append(legend);
    formSt.append(divRow);
    formSt.append(divRow1);
    formSt.append(divRow2);
    formSt.append(button);
    divRow.append(divRow3);
    divRow.append(divRow4);
    divRow1.append(divRow5);
    divRow1.append(divRow6);
    divRow2.append(divRow7);
    divRow2.append(divRow8);
    divRow3.append(input);
    divRow4.append(input1);
    divRow5.append(input2);
    divRow6.append(input3);
    divRow7.append(input4);
    divRow8.append(input5);

    let inputSet = document.getElementsByClassName('input');

    return {
        formSt,
        inputSet,
        input,
        input1,
        input2,
        input3,
        input4,
        input5,
    };
};

function createTableStudents() {
    const table = document.createElement('table');
    const titleTable = document.createElement('h1');
    const tableHead = document.createElement('thead');
    const tableBody = document.createElement('tbody');
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    const th1 = document.createElement('th');
    const th2 = document.createElement('th');
    const th3 = document.createElement('th');

    titleTable.textContent = 'Таблица студентов';
    table.classList.add('table', 'table-bordered');
    tableHead.classList.add('thead-dark');
    tableBody.classList.add('table-striped', 'table-hover');
    th.textContent = 'ФИО';
    th1.textContent = 'Факультет';
    th2.textContent = 'Дата рождения';
    th3.textContent = 'Годы обучения';

    table.append(tableHead);
    table.append(tableBody);
    tableHead.append(tr);
    tableHead.prepend(titleTable);
    tr.append(th);
    tr.append(th1);
    tr.append(th2);
    tr.append(th3);

    return {
        table,
        tableBody,
    };
};

function createFormFilter() {
    const fielderFilter = document.createElement('fieldset');
    const legendFilter = document.createElement('legend');
    const div = document.createElement('div');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const div4 = document.createElement('div');
    const div5 = document.createElement('div');
    const inputFiler = document.createElement('input');
    const inputFiler1 = document.createElement('input');
    const inputFiler2 = document.createElement('input');
    const inputFiler3 = document.createElement('input');
    const buttonfilter = document.createElement('button');

    fielderFilter.classList.add('form-group');
    div.classList.add('row');
    div1.classList.add('row');
    div2.classList.add('col');
    div3.classList.add('col');
    div4.classList.add('col');
    div5.classList.add('col');
    inputFiler.type = 'text';
    inputFiler.classList.add('form-control');
    inputFiler.placeholder = 'Фильтровать по имени';
    inputFiler1.type = 'text';
    inputFiler1.classList.add('form-control');
    inputFiler1.placeholder = 'Фильтровать по факультету';
    inputFiler2.type = 'number';
    inputFiler2.classList.add('form-control');
    inputFiler2.placeholder = 'Фильтровать по дате начала обучения';
    inputFiler3.type = 'number';
    inputFiler3.classList.add('form-control');
    inputFiler3.placeholder = 'Фильтровать по дате окончания обучения';
    buttonfilter.textContent = 'Фильтровать';

    fielderFilter.append(legendFilter);
    fielderFilter.append(div);
    fielderFilter.append(div1);
    fielderFilter.append(buttonfilter);
    div.append(div2);
    div.append(div3);
    div1.append(div4);
    div1.append(div5);
    div2.append(inputFiler);
    div3.append(inputFiler1);
    div4.append(inputFiler2);
    div5.append(inputFiler3);

    return {
        fielderFilter,
        inputFiler,
        inputFiler1,
        inputFiler2,
        inputFiler3,
        buttonfilter,
    };
};

let formStudent = createFormStudents(); //добавление нового студента
let changeStudent = formStudent.formSt; // получение формы добавления студентов
let tableStudent = createTableStudents(); // таблица со студентами
let tableCreateBody = tableStudent.tableBody; // получение тела таблицы
let filterStudent = createFormFilter(); // получение формы с фильтрами

changeStudent.addEventListener('submit', (event) => {
    event.preventDefault();
    console.dir(changeStudent.elements.myname.value);
    let array = {};
    array.name = changeStudent.elements.myname.value;
    array.surName = changeStudent.elements.mysurname.value;
    array.middleName = changeStudent.elements.middlename.value;
    array.faculty = changeStudent.elements.faculty.value;
    array.bidthDay = changeStudent.elements.year.value;
    array.startYeur = changeStudent.elements.startyear.value;

    // if (!changeStudent.elements.myname.value.trim()) {
    //     alert ('Все поля обязательны для заполнения');
    //     return false;
    // };
    // if (!changeStudent.elements.mysurname.value.trim()) {
    //     alert ('Все поля обязательны для заполнения');
    //     return false;
    // };
    // if (!changeStudent.elements.middlename.value.trim()) {
    //     alert ('Все поля обязательны для заполнения');
    //     return false;
    // };
    // if (!changeStudent.elements.year.value.trim()) {
    //     alert ('Все поля обязательны для заполнения');
    //     return false;
    // };
    // if (!changeStudent.elements.startyear.value.trim()) {
    //     alert ('Все поля обязательны для заполнения');
    //     return false;
    // };
    // if (!changeStudent.elements.faculty.value.trim()) {
    //     alert ('Все поля обязательны для заполнения');
    //     return false;
    // };
    // if (parseInt(changeStudent.elements.startyear.value) < 2000) {
    //     return false;
    // }

    while (tableCreateBody.firstChild) {
        tableCreateBody.removeChild(tableCreateBody.lastChild);
    };
    console.log(array);
    listStudent.push(array);
    console.log(listStudent);
    console.log(tableCreateBody);
    changeTableStudent(tableCreateBody, listStudent);
    formStudent.input.value = '';
    formStudent.input2.value = '';
    formStudent.input1.value = '';
    formStudent.input3.value = '';
    formStudent.input4.value = '';
    formStudent.input5.value = '';
});

function changeTableStudent(tableCreateBody, listStudent) {
    for (let i = 0; i < listStudent.length; i++) {
        let obj = Object.assign({}, listStudent[i]);
        obj.name = `${obj.name} ${obj.surName} ${obj.middleName}`;
        delete obj.surName;
        delete obj.middleName;
        let string = document.createElement('tr');
        let values = Object.values(obj);
            for (let j of values) {
                let cell = document.createElement('td');
                cell.textContent = j;
                string.appendChild(cell);
            };

        tableCreateBody.append(string);
    };
};

filterStudent.inputFiler.addEventListener('input', () => {
    while (tableCreateBody.firstChild) {
                tableCreateBody.removeChild(tableCreateBody.lastChild);
            };
            for (let i = 0; i < listStudent.length; i++) {
                let obj = Object.assign({}, listStudent[i]);
                obj.name = `${obj.name} ${obj.surName} ${obj.middleName}`;
                delete obj.surName;
                delete obj.middleName;
                let values = Object.values(obj);
                let string = document.createElement('tr');
                    if (values[0].includes(filterStudent.inputFiler.value)) {
                        for (let j of values) {
                                let cell = document.createElement('td');
                                cell.textContent = j;
                                string.appendChild(cell);
                            };
                        };
                tableCreateBody.append(string);
            };
}); // фильтры

filterStudent.inputFiler1.addEventListener('input', () => {
    while (tableCreateBody.firstChild) {
                tableCreateBody.removeChild(tableCreateBody.lastChild);
            };
            for (let i = 0; i < listStudent.length; i++) {
                let obj = Object.assign({}, listStudent[i]);
                obj.name = `${obj.name} ${obj.surName} ${obj.middleName}`;
                delete obj.surName;
                delete obj.middleName;
                let values = Object.values(obj);
                let string = document.createElement('tr');
                    if (values[1].includes(filterStudent.inputFiler1.value)) {
                        for (let j of values) {
                                let cell = document.createElement('td');
                                cell.textContent = j;
                                string.appendChild(cell);
                            };
                        };
                tableCreateBody.append(string);
            };
}); фильтры

container.append(formStudent.formSt);
container.append(filterStudent.fielderFilter);
container.append(tableStudent.table);

changeTableStudent(tableCreateBody, listStudent);
