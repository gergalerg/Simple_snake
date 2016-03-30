var Menu = {
    preload: function() {
        game.load.image('menu', './assets/images/menu.png');
    },
    create: function() {
        // Add menu screen
        // button to start game
        this.add.button(0,0, 'menu', this.startGame, this);
    },

    startGame: function() {
        // change the state to the actual game
        this.state.start('Game');
    }
};