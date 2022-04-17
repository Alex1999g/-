(() => {
    let studentsList = [
        { name: 'Алексей', surName: 'Решетов', middleName: 'Леонидович', birthday: new Date(1999, 5, 21), startYear: 2017, faculty: 'Социологический' },
        { name: 'Дмитрий', surName: 'Тютрин', middleName: 'Дмитриевич', birthday: new Date(1998, 6, 17), startYear: 2017, faculty: 'Энергетический' },
        { name: 'Виктор', surName: 'Гергес', middleName: 'Олегович', birthday: new Date(2000, 8, 9), startYear: 2017, faculty: 'Строительный' },
        { name: 'Галина', surName: 'Фирсова', middleName: 'Павловна', birthday: new Date(1995, 10, 16), startYear: 2017, faculty: 'Программирование' },
        { name: 'Владимир', surName: 'Петров', middleName: 'Глебович', birthday: new Date(1993, 3, 29), startYear: 2017, faculty: 'Социологический' },
    ];

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

    function addedStudentTable(studentsList) {
        let object = {};
        object.name = createFormAdded().inputName.value;
        object.surName = createFormAdded().inputSurname.value;
        object.middleName = createFormAdded().inputMiddleName.value;
        object.birthday = createFormAdded().inputBithdate.value;
        object.startYear = createFormAdded().inputYearStart.value;
        object.faculty = createFormAdded().inputFaculty.value;

        studentsList.push(object);
        console.log(studentsList);
    };

    function createTableStudents(array) {
        const table = document.createElement('table');

        const mainTr = document.createElement('tr');
        const nameTh = document.createElement('th');
        nameTh.textContent = 'ФИО';
        const facultyTh = document.createElement('th');
        facultyTh.textContent = 'Факультет';
        const dateBithTh = document.createElement('th');
        dateBithTh.textContent = 'Дата рождения';
        const yearStartTh = document.createElement('th');
        yearStartTh.textContent = 'Год начала обучения';

        table.append(mainTr);
        mainTr.append(nameTh);
        mainTr.append(facultyTh);
        mainTr.append(dateBithTh);
        mainTr.append(yearStartTh);

    };

    document.addEventListener('DOMContentLoaded', (e) => {
        
        e.preventDefault();

        const container = document.querySelector('.container');
        container.append(createFormAdded().form);
        createFormAdded().button.addEventListener('click', addedStudentTable);
    });
})();

// getDate - день месяца указанной даты
// getFullYear - год указанной даты
// getMonth - месяц указанной даты