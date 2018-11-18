import Phaser from 'phaser';

class GameOver extends Phaser.Scene {
  restartGame() {
    this.game.scene.start('Main');
  }
}

export default GameOver;
