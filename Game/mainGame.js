(() => {
    function createCintainer() {
      const container = document.createElement('div');
      const gameCard = createGameCard();
      container.classList.add('container');
  
      for (let car of gameCard) {
        container.append(car);
      };
  
      return container;
    };
  
    function createTitle() {
      const title = document.createElement('h1');
      title.classList.add('title');
      title.textContent = 'Игра в пары';
      return title;
    };
  
    function createButton() {
      let buttonGame = document.createElement('button');
      buttonGame.classList.add('btn-prog');
      buttonGame.textContent = 'Начать заново';
      return buttonGame;
    };
  
    function shuffle(arr){
      let j, temp;
      for(var i = arr.length - 1; i > 0; i--){
        j = Math.floor(Math.random()*(i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
      return arr;
    }
  
    function getDoubleArr(numbers) {
      let startArr = [];
      let cloneArr = [];
  
      for (let number = 1; number <= numbers; number++) {
        startArr.push(number);
      };
  
      Object.assign(cloneArr, startArr);
  
      return shuffle(startArr.concat(cloneArr));
    };
  
    function createGameCard() {
      let fisher = getDoubleArr(8);
      const cards = [];
      for (let number of fisher) {
        let card = document.createElement('button');
        card.classList.add('card');
        card.classList.add('card-total');
        card.textContent = number;
        cards.push(card);
      }
  
      return cards;
    };
  
    function disableCards(params) {
      params.firstCard.removeEventListener('click', flip);
      params.secondCard.removeEventListener('click', flip);
    }
  
    function unflipCards(params) {
      params.lockBoard = true;
  
    setTimeout(() => {
      params.firstCard.classList.add('card-total');
      params.secondCard.classList.add('card-total');
  
      params.lockBoard = false;
      }, 1500);
    };
  
    function checkForMatch(params) {
      if (params.firstCard.textContent === params.secondCard.textContent) {
        disableCards(params);
        return;
      };
      unflipCards(params);
    };
  
    function flip(params) {
      if (params.lockBoard) return;
      params.btn.classList.remove('card-total');
  
      if (!params.hasFlippedCard) {
        params.hasFlippedCard = true;
        params.firstCard = params.btn;
        return;
      }
        params.secondCard = params.btn;
        params.hasFlippedCard = false;
        checkForMatch(params);
    };
  
    function game() {
      let params = {
        hasFlippedCard: false,
        firstCard: null,
        secondCard: null,
        lockBoard: false,
        btn: null
      };
  
      const app = document.querySelector('.js-app');
      const btnGame = createButton();
      const gameContainer = createCintainer();
      const gameTitle = createTitle();
  
      app.innerHTML = '';
  
      app.append(gameTitle);
      app.append(gameContainer);
      app.append(btnGame);
  
      // for (let cell of gameCard) {
      //   if (cell.classList.contains('card-total')) {
      //     continue;
      //   } else {cell.classList.add('card-total')};
      // };
  
      gameContainer.addEventListener('click', (e) => {
        params.btn = e.target;
        if (e.target.classList.contains('card')) {
          flip(params);
        }
      });
  
      btnGame.addEventListener('click', game);
    };
  
    game();
  
  })();
  