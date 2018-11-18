import Phaser from 'phaser';

class GameTitle extends Phaser.Scene {
  startGame() {
    this.game.scene.start('Main');
  }
}

export default GameTitle;
