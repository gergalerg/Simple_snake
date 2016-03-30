var snake, apple, squareSize, score, speed,
    updateDelay, direction, new_direction,
    addNew, cursors, scoreTextValue, speedTextValue,
    textStyle_Key, textStyle_Value;

var Game = {
   preload: function() {
    // load all needed resources for the level
    // in our case, that's just two squares - one for snake body and one for apple
    game.load.image('snake', './assets/images/snake.png');
    game.load.image('apple', './assets/images/apple.png');
   },

   create: function() {
        snake =  []; // works as a stack containing parts of snake
        apple = {}; // an object for the apple
        squareSize = 15; // the length of  aside of squares
        score = 0;
        speed = 0;
        updateDelay = 0;
        direction= 'right';
        new_direction = null;
        addNew = false;

        cursors = game.input.keyboard.createCursorKeys();

        game.stage.backgroundColor = '#061f27';

        // Generate the initial snake stack. OUr snake will be 10 elements.
        // Begining at x=150, y = 150 and increasing the x on every iteration.
        for (var i = 0; i < 10; i++) {
            snake[i] = game.add.sprite(150 + i* squareSize, 150, 'snake');
        }

        // Generate first apple
        this.generateApple();

        // add text to top of game
        textStyle_Key  = {font: "bold 14px sans-serif", fill: "#46c0f9", align: "center"};
        textStyle_Value = { font: "bold 18px sans-serif", fill: "#fff", align: "center"}; 


        // Score:
        game.add.text(30,20, "SCORE", textStyle_Key);
        scoreTextValue = game.add.text(90, 18, score.toString(), textStyle_Value);

        // speed
        game.add.text(500, 20, "SPEED", textStyle_Key);
        speedTextValue = game.add.text(558, 18, speed.toString(), textStyle_Value);
   },

   generateApple: function  () {
    var randomX = Math.floor(Math.random() * 40) * squareSize,
    randomY = Math.floor(Math.random() * 30) * squareSize;

    apple= game.add.sprite(randomX, randomY, 'apple'); 
   }
}