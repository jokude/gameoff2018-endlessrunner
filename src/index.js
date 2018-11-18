import Phaser from 'phaser';
import Boot from './scenes/Boot';
import GameTitle from './scenes/GameTitle';
import Main from './scenes/Main';
import GameOver from './scenes/GameOver';
import Preload from './scenes/Preload';

class Game extends Phaser.Game {
  constructor() {
    super(
      window.innerWidth * window.devicePixelRatio,
      window.innerHeight * window.devicePixelRatio,
      Phaser.AUTO,
      GAME_ROOT,
    );
  }

  initGame() {
    this.scene.add('Boot', Boot, false);
    this.scene.add('Preload', Preload, false);
    this.scene.add('GameTitle', GameTitle, false);
    this.scene.add('Main', Main, false);
    this.scene.add('GameOver', GameOver, false);
    this.scene.start('Boot');
  }
}

const game = new Game();
game.initGame();

if (module.hot) {
  module.hot.accept();
}
