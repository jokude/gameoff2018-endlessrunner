import Phaser from 'phaser';

class Preload extends Phaser.Scene {
  create() {
    this.game.scene.start('Main');
  }
}

export default Preload;
