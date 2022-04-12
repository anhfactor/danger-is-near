import Phaser from 'phaser';

export default class Instructions extends Phaser.Scene {
  constructor() {
    super('vault');
  }

  init(data) {
    this.totalSupply = data.totalSupply;
    this.previousScore = data.previousScore;
    this.yourBalance = data.yourBalance;
    this.player = window.walletConnection.getAccountId()
  }

  preload() {
    this.width = this.scale.width;
    this.height = this.scale.height;
  }

  create() {
    this.cameras.main.fadeIn(1000, 255, 255, 255);

    this.bg = this.add.sprite(0, 0, 'instructions_bg').setOrigin(0, 0);
    this.bg.setDisplaySize(this.width, this.height);

    const title = this.make.text({
      x: this.width / 2,
      y: 150,
      text: 'DANGER IS NEAR',
      style: {
        fontSize: '60px',
        fill: '#ff0000',
        fontFamily: 'Monogram, monospace',
      },
    });
    title.setOrigin(0.5, 0.5);

    const nextLine = this.make.text({
      x: this.width / 2,
      y: 200,
      text: 'Your vault: ' + window.walletConnection.getAccountId(),
      style: {
        fontSize: '45px',
        fill: '#000000',
        fontFamily: 'Monogram, monospace',
        align: 'justify',
        wordWrap: { width: this.width - 400 },
      },
    });
    nextLine.setOrigin(0.5, 0.5);

    const nextLine1 = this.make.text({
      x: this.width / 2,
      y: 250,
      text: 'Your previous score: ' + this.previousScore,
      style: {
        fontSize: '45px',
        fill: '#000000',
        fontFamily: 'Monogram, monospace',
        align: 'justify',
        wordWrap: { width: this.width - 400 },
      },
    });
    nextLine1.setOrigin(0.5, 0.5);

    const nextLine2 = this.make.text({
      x: this.width / 2,
      y: 300,
      text: 'Your balance: ' + this.yourBalance +" $DANGER",
      style: {
        fontSize: '45px',
        fill: '#000000',
        fontFamily: 'Monogram, monospace',
        align: 'justify',
        wordWrap: { width: this.width - 400},
      },
    });
    nextLine2.setOrigin(0.5, 0.5);

    const nextLine3 = this.make.text({
      x: this.width / 2,
      y: 350,
      text: 'Total supply token $DANGER: ' + this.totalSupply,
      style: {
        fontSize: '45px',
        fill: '#000000',
        fontFamily: 'Monogram, monospace',
        align: 'justify',
        wordWrap: { width: this.width - 400},
      },
    });
    nextLine3.setOrigin(0.5, 0.5);

    const cont = this.make.text({
      x: this.width / 2 - 10,
      y: 640,
      text: "[ Press 'ENTER' to exit... ]",
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
        this.scene.start('title-screen');
      });
    });
  }
}