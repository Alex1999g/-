(function() {
  let todoArray = [];

  function createAppTitle(title) {
    let appTitle = document.createElement('h1');
    appTitle.textContent = title;
    return appTitle;
  };

  function createFormTitle() {
    let form = document.createElement('form');
    let input = document.createElement('input');
    let buttonWrapper = document.createElement('div');
    let button = document.createElement('button');

    form.classList.add('input-group', 'mb-3');
    input.classList.add('form-control');
    input.placeholder = 'Введите название нового дела';
    buttonWrapper.classList.add('input-group-append');
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Добавить дело';
    button.disabled = true;

    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    return {
      form,
      input,
      button,
    };
  };

  function createTodoList() {
    let list = document.createElement('ul');
    list.classList.add('list-group');
    return list;
  };

  function createTodoItem(name) {
    let item = document.createElement('li');
    let buttonGroup = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    let randomID = Math.random() * 15.75;
    item.id = randomID.toFixed(2);

    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    item.textContent = name;

    buttonGroup.classList.add('btn-group', 'btn-group-sm');
    doneButton.classList.add('btn', 'btn-success');
    doneButton.textContent = 'Готово';
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent = 'Удалить';

    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    return {
      item,
      doneButton,
      deleteButton,
      buttonGroup,
    };
  };

  function createTodoApp(container, title = 'Список дел', key, startArray = [{ name: 'Сходить за хлебом', done: true }]) {

    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createFormTitle();
    let todoList = createTodoList();

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    if (startArray) {
      for (let inf of startArray) {
        let item = createTodoItem(inf.name);
        if (inf.done == true) {
          item.item.classList.add('list-group-item-success');
        } else {
          item.item.classList.remove('list-group-item-success');
        }
        todoList.append(item.item);
      };
    };

    if (localStorage.getItem(key)) {
      todoArray = JSON.parse(localStorage.getItem(key));

      for (let obj of todoArray) {
          let todoItem = createTodoItem(todoItemForm.input.value);

          todoItem.item.textContent = obj.name;
          todoItem.item.id = obj.id;

          if (obj.done == true) {
              todoItem.item.classList.add('list-group-item-success');
          } else {
              todoItem.item.classList.remove('list-group-item-success');
          };

          todoItem.doneButton.addEventListener('click', function() {
            todoArray = JSON.parse(localStorage.getItem(key));
            todoItem.item.classList.toggle('list-group-item-success');
            changeTodoArr(todoArray, todoItem.item);

            localStorage.setItem(key, JSON.stringify(todoArray));
          })

          todoItem.deleteButton.addEventListener('click', function() {
            if (confirm('Вы уверены')) {
              todoArray = JSON.parse(localStorage.getItem(key));

              let newList = todoArray.filter(obj => obj.id !== todoItem.item.id)

              localStorage.setItem(key, JSON.stringify(newList))
              todoItem.item.remove();
            };
          });

          todoList.append(todoItem.item);
          todoItem.item.append(todoItem.buttonGroup);
        }
      };

    function changeTodoArr(arr, item) {
      arr.map(obj => {
        if (obj.id === item.id && obj.done === false) {
            obj.done = true;
        } else if (obj.id === item.id && obj.done === true) {
            obj.done = false;
        };
      });
    };

    function buttonAttribute() {
      if (todoItemForm.input.value) {
        todoItemForm.button.disabled = false;
      } if (!todoItemForm.input.value) {
        todoItemForm.button.disabled = true;
      };
    };

    todoItemForm.input.addEventListener('input', buttonAttribute);

    todoItemForm.form.addEventListener('submit', function(e) {

      e.preventDefault();

      if (!todoItemForm.input.value) {
        return;
      };

      let todoItem = createTodoItem(todoItemForm.input.value);

      todoItem.doneButton.addEventListener('click', function() {
        todoArray = JSON.parse(localStorage.getItem(key));
        todoItem.item.classList.toggle('list-group-item-success');
        changeTodoArr(todoArray, todoItem.item);

        localStorage.setItem(key, JSON.stringify(todoArray));
      })

      todoItem.deleteButton.addEventListener('click', function() {
        if (confirm('Вы уверены')) {
          todoArray = JSON.parse(localStorage.getItem(key));

          let newList = todoArray.filter(obj => obj.id !== todoItem.item.id)

          localStorage.setItem(key, JSON.stringify(newList))
          todoItem.item.remove();
        };
      });

      let localStorageData = localStorage.getItem(key);

      if (localStorageData == null) {
          todoArray = [];
      } else {
          todoArray = JSON.parse(localStorageData);
      };

      function createObjApp(arr) {
        let itemObj = {};
        itemObj.name = todoItemForm.input.value;
        itemObj.id = todoItem.item.id;
        itemObj.done = false;

        arr.push(itemObj);
      };

      createObjApp(todoArray);
      localStorage.setItem(key, JSON.stringify(todoArray));

      todoList.append(todoItem.item);
      todoItemForm.input.value = '';
      todoItemForm.button.disabled = true;
    });
  };

  window.createTodoAppMain = createTodoApp;
})();
