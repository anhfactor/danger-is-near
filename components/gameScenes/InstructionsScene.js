import Phaser from 'phaser';

export default class Instructions extends Phaser.Scene {
  constructor() {
    super('instructions');
  }

  preload() {
    this.width = this.scale.width;
    this.height = this.scale.height;
  }

  create() {
    this.cameras.main.fadeIn(1000, 255, 255, 255);

    this.bg = this.add.sprite(0, 0, 'instructions_bg').setOrigin(0, 0);
    this.bg.setDisplaySize(this.width, this.height);

    const topIns = this.make.text({
      x: this.width / 2,
      y: 150,
      text: 'You are fire knight who go to forest, facing ',
      style: {
        fontSize: '45px',
        fill: '#000000',
        fontFamily: 'Monogram, monospace',
        align: 'justify',
        wordWrap: { width: this.width - 400 },
      },
    });
    topIns.setOrigin(0.5, 0.5);

    const endless = this.make.text({
      x: this.width / 2,
      y: 190,
      text: 'Danger is NEAR',
      style: {
        fontSize: '45px',
        fill: '#ff0000',
        fontFamily: 'Monogram, monospace',
      },
    });
    endless.setOrigin(0.5, 0.5);

    const nextLine1 = this.make.text({
      x: this.width / 2,
      y: 255,
      text: 'Kill the monsters and dodge the obsctacles',
      style: {
        fontSize: '45px',
        fill: '#000000',
        fontFamily: 'Monogram, monospace',
        align: 'justify',
        wordWrap: { width: this.width - 400, useAdvancedWrap: true },
      },
    });
    nextLine1.setOrigin(0.5, 0.5);

    const title = this.make.text({
      x: this.width / 2,
      y: 315,
      text: 'Controls',
      style: {
        fontSize: '60px',
        fill: '#000000',
        fontFamily: 'Monogram, monospace',
      },
    });
    title.setOrigin(0.5, 0.5);

    const nextLine2 = this.make.text({
      x: this.width / 2,
      y: 370,
      text: "To jump over use keys 'W' or 'SPACE'",
      style: {
        fontSize: '45px',
        fill: '#000000',
        fontFamily: 'Monogram, monospace',
        align: 'justify',
        wordWrap: { width: this.width - 400, useAdvancedWrap: true },
      },
    });
    nextLine2.setOrigin(0.5, 0.5);

    const nextLine3 = this.make.text({
      x: this.width / 2 + 100,
      y: 445,
      text: "To attack use the key 'A' or the 'LEFT CLICK' from the mouse button",
      style: {
        fontSize: '45px',
        fill: '#000000',
        fontFamily: 'Monogram, monospace',
        align: 'justify',
        wordWrap: { width: this.width - 350, useAdvancedWrap: true },
      },
    });
    nextLine3.setOrigin(0.5, 0.5);

    const nextLine4 = this.make.text({
      x: this.width / 2 + 100,
      y: 545,
      text: "To drop faster use key 'S' or the 'RIGHT CLICK' from the mouse button",
      style: {
        fontSize: '45px',
        fill: '#000000',
        fontFamily: 'Monogram, monospace',
        align: 'justify',
        wordWrap: { width: this.width - 350, useAdvancedWrap: true },
      },
    });
    nextLine4.setOrigin(0.5, 0.5);

    const cont = this.make.text({
      x: this.width / 2 - 10,
      y: 640,
      text: "[ Press 'ENTER' to continue... ]",
      style: {
        fontSize: '45px',
        fill: '#505050',
        fontFamily: 'Monogram, monospace',
        align: 'justify',
        wordWrap: { width: this.width - 255, useAdvancedWrap: true },
      },
    });
    cont.setOrigin(0.5, 0.5);

    ['A', 'S', 'SPACE', 'ENTER'].forEach(key => {
      const keyP = this.input.keyboard.addKey(key);
      keyP.on('down', () => {
        this.cameras.main.fadeOut(2000, 255, 255, 255);
        this.scene.start('game-start');
      });
    });
  }
}