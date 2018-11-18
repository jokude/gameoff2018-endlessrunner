import Phaser from 'phaser';
import ExampleObject from '../objects/ExampleObject';

class Main extends Phaser.Scene {
  create() {
    const exampleObject = new ExampleObject(this.game);
  }
}

export default Main;
