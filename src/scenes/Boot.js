import Phaser from 'phaser';

class Boot extends Phaser.Scene {
  create() {
    this.game.scene.start('Preload');
  }
}

export default Boot;
