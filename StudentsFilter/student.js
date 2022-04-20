(() => {
    let studentsList = [
        { name: 'Алексей', surName: 'Решетов', middleName: 'Леонидович', birthday: new Date(1999, 5, 21), startYear: 2017, faculty: 'Социологический' },
        { name: 'Дмитрий', surName: 'Тютрин', middleName: 'Дмитриевич', birthday: new Date(1998, 6, 17), startYear: 2017, faculty: 'Энергетический' },
        { name: 'Виктор', surName: 'Гергес', middleName: 'Олегович', birthday: new Date(2000, 8, 9), startYear: 2017, faculty: 'Строительный' },
        { name: 'Галина', surName: 'Фирсова', middleName: 'Павловна', birthday: new Date(1995, 10, 16), startYear: 2017, faculty: 'Программирование' },
        { name: 'Владимир', surName: 'Петров', middleName: 'Глебович', birthday: new Date(1993, 3, 29), startYear: 2017, faculty: 'Социологический' },
        { name: 'Вячеслав', surName: 'Красиков', middleName: 'Владимирович', birthday: new Date(1999, 5, 20), startYear: 2017, faculty: 'Социологический' }
    ];
    const container = document.querySelector('.container');
    container.classList.add('container');
    // добавление нового студента
    function createFormAdded() {
        const form = document.createElement('form');
        form.classList.add('form');

        const inputName = document.createElement('input');
        inputName.classList.add('input');
        inputName.placeholder = 'Введите ваше имя';
        const inputSurname = document.createElement('input');
        inputSurname.classList.add('input');
        inputSurname.placeholder = 'Введите вашу фамилию';
        const inputMiddleName = document.createElement('input');
        inputMiddleName.classList.add('input');
        inputMiddleName.placeholder = 'Введите ваше отчество(при наличии)';
        const inputBithdate = document.createElement('input');
        inputBithdate.classList.add('input');
        inputBithdate.type = 'date';
        const inputYearStart = document.createElement('input');
        inputYearStart.classList.add('input');
        inputYearStart.placeholder = 'Введите год начала обучения';
        const inputFaculty = document.createElement('input');
        inputFaculty.classList.add('input');
        inputFaculty.placeholder = 'Введите ваш факультет';

        const button = document.createElement('button');
        button.classList.add('button');
        button.textContent = 'Добавить студента';
        button.type = 'submit';

        form.append(inputName);
        form.append(inputSurname);
        form.append(inputMiddleName);
        form.append(inputBithdate);
        form.append(inputYearStart);
        form.append(inputFaculty);
        form.append(button);

        return {
            form,
            inputName,
            inputSurname,
            inputMiddleName,
            inputBithdate,
            inputYearStart,
            inputFaculty,
            button,
        };
    };
    //отрисовка таблицы
    function createTableStudents() {
        const table = document.createElement('table');
        table.classList.add('table');
        const caption = document.createElement('caption');
        caption.classList.add('caption');
        caption.textContent = 'Список студентов';
        const tableHead = document.createElement('thead');
        const tableBody = document.createElement('tbody');

        const mainTr = document.createElement('tr');
        mainTr.classList.add('tr');
        const nameTh = document.createElement('th');
        nameTh.classList.add('th');
        nameTh.textContent = 'ФИО';
        const facultyTh = document.createElement('th');
        facultyTh.classList.add('th');
        facultyTh.textContent = 'Факультет';
        const dateBithTh = document.createElement('th');
        dateBithTh.classList.add('th')
        dateBithTh.textContent = 'Дата рождения';
        const yearStartTh = document.createElement('th');
        yearStartTh.classList.add('th')
        yearStartTh.textContent = 'Год начала обучения';

        tableHead.append(mainTr);
        table.append(caption);
        table.append(tableHead);
        table.append(tableBody);
        mainTr.append(nameTh);
        mainTr.append(facultyTh);
        mainTr.append(dateBithTh);
        mainTr.append(yearStartTh);

        return {
            table,
            tableBody,
            nameTh,
            facultyTh,
            dateBithTh,
            yearStartTh,
        };
    };
    //отрисовка формы с фильтрами
    function createFormFilter() {
        const formFilter = document.createElement('form');
        formFilter.classList.add('form');

        const inputFio = document.createElement('input');
        inputFio.placeholder = 'ФИО';
        inputFio.classList.add('input');
        inputFio.type = 'text';
        const inputFacultyFilter = document.createElement('input');
        inputFacultyFilter.classList.add('input');
        inputFacultyFilter.placeholder = 'Факультет';
        inputFacultyFilter.type = 'text';
        const startYearStudy = document.createElement('input');
        startYearStudy.classList.add('input');
        startYearStudy.placeholder = 'Год начала обучения';
        startYearStudy.type = 'number';
        const endYearStudy = document.createElement('input');
        endYearStudy.classList.add('input');
        endYearStudy.placeholder = 'Год окончания обучения';
        endYearStudy.type = 'number';

        formFilter.append(inputFio);
        formFilter.append(inputFacultyFilter);
        formFilter.append(startYearStudy);
        formFilter.append(endYearStudy);

        return {
            formFilter,
            inputFio,
            inputFacultyFilter,
            startYearStudy,
            endYearStudy,
        };
    };

    let formAddedStudent = createFormAdded(); // получение функции добавления студента
    let changeStudentTable = formAddedStudent.form; // получение формы добавления студентов
    let tableT = createTableStudents(); // функция создания таблицы (заголовка)
    let tableBodyStudent = tableT.tableBody; // получение тела таблицы
    let filterStudentList = createFormFilter(); // функция фильтрации

    formAddedStudent.button.addEventListener("click", (e) => {
        e.preventDefault();
        let object = {};
        object.name = formAddedStudent.inputName.value;
        object.surName = formAddedStudent.inputSurname.value;
        object.middleName = formAddedStudent.inputMiddleName.value;
        object.birthday = formAddedStudent.inputBithdate.valueAsDate;
        object.startYear = formAddedStudent.inputYearStart.value;
        object.faculty = formAddedStudent.inputFaculty.value;
        while (tableBodyStudent.firstChild) {
            tableBodyStudent.removeChild(tableBodyStudent.lastChild);
        };
        studentsList.push(object);
        createTableBody(tableBodyStudent, studentsList);
    });

    function createTableBody(tableBodyStudent, studentsList) {
        for (let i = 0; i < studentsList.length; i++) {
            let obj = studentsList[i];
            let value = Object.values(obj);
            let tr = document.createElement('tr');
            tr.classList.add('tr');
            for (let j = 1; j <= 4; j++) {
                let td = document.createElement('td');
                td.classList.add('th');
                if (j === 1) {
                    td.textContent = `${value[1]} ${value[0]} ${value[2]}`;
                    tr.append(td);
                } else if (j === 2) {
                    td.textContent = `${value[5]}`;
                    tr.append(td);
                } else if (j === 3) {
                    let date = value[3];
                    let year = date.getFullYear();
                    let mounth = date.getMonth();
                    if (mounth < 10) {
                        mounth = `0${mounth}`;
                    }
                    let day = date.getDate();
                    td.textContent = `${year}.${mounth}.${day}`;
                    tr.append(td);
                } else {
                    td.textContent = `${value[4]}`;
                    tr.append(td);
                }
            }
            tableBodyStudent.append(tr);
        };
        formAddedStudent.inputName.value = '';
        formAddedStudent.inputSurname.value = '';
        formAddedStudent.inputMiddleName.value = '';
        formAddedStudent.inputBithdate.value = '';
        formAddedStudent.inputYearStart.value = '';
        formAddedStudent.inputFaculty.value = '';
    };
    container.append(changeStudentTable);
    container.append(filterStudentList.formFilter);
    container.append(tableT.table);
    createTableBody(tableBodyStudent, studentsList);
})();
