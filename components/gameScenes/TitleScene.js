import Phaser from 'phaser';
import createAligned from '@utils/createAligned';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('title-screen');
  }

  preload() {
    this.width = this.scale.width;
    this.height = this.scale.height;
    this.loadInfo();
  }

  create() {  
    this.cameras.main.fadeIn(1000, 0, 0, 0);

    this.scene.pauseOnBlur = false;

    const bgh = this.textures.get('background').getSourceImage().height;

    this.add.tileSprite(0, this.height, this.width, bgh, 'background')
      .setOrigin(0, 1).setScrollFactor(0);

    this.bg2 = createAligned(this, -120, 'pine2', true);
    this.bg3 = createAligned(this, -120, 'pine2', true);
    this.bg1 = createAligned(this, -70, 'mountain', true);
    this.bg5 = createAligned(this, -350, 'sky1', true);
    this.bg6 = createAligned(this, -230, 'pine2', true);
    this.bg7 = createAligned(this, -510, 'sky1', true);
    this.bg4 = createAligned(this, -250, 'light1', true);
    this.bg9 = createAligned(this, -550, 'cloud', true);
    this.bg8 = createAligned(this, 10, 'floor', true, -250);

    this.player = this.add.sprite(200, this.height - 95, 'player_rest');
    this.player.anims.play('rest');

    const title = this.make.text({
      x: this.width / 2,
      y: this.height / 2 - 140,
      text: 'DANGER IS NEAR',
      style: {
        fontSize: '90px',
        fill: '#ffffff',
        fontFamily: 'Arcadia, monospace',
      },
    });
    this.make.text({
      x: this.width / 2 - 90,
      y: this.height / 2 - 60,
      text: window.walletConnection.getAccountId(),
      style: {
        fontSize: '15px',
        fill: '#ffffff',
        fontFamily: 'Arcadia, monospace',
      },
    }).setDepth(1);
    title.setOrigin(0.5, 0.5);

    this.playBtn = this.add.image(this.width / 2 , this.height / 2, 'button').setInteractive({ useHandCursor: true }).setOrigin(0.5, 0.5).setDisplaySize(300,50)
      .on('pointerup', () => {
        this.start();
      });

    this.make.text({
      x: this.playBtn.x - 75,
      y:this.playBtn.y - 12,
      text: "PLAY",
      style: {
        fontSize: '25px',
        fill: '#ffffff',
        fontFamily: 'Arcadia, monospace',
      },
    }).setDepth(1);

    this.vaultBtn = this.add.image(this.width / 2, this.height / 2 + 70, 'button').setInteractive({ useHandCursor: true }).setOrigin(0.5, 0.5).setDisplaySize(300,50)
    .on('pointerup', () => {
      this.scene.start('vault', {totalSupply : this.totalSupply, previousScore: this.previousScore, yourBalance: this.yourBalance})
    });

    this.make.text({
      x: this.vaultBtn.x - 75,
      y:this.vaultBtn.y - 12,
      text: "VAULT",
      style: {
        fontSize: '25px',
        fill: '#ffffff',
        fontFamily: 'Arcadia, monospace',
      },
    }).setDepth(1);

    this.leaderBtn = this.add.image(this.width / 2, this.height / 2 + 140, 'button').setInteractive({ useHandCursor: true }).setOrigin(0.5, 0.5).setDisplaySize(300,50)
    .on('pointerup', () => {
      this.scene.start('leaderboard-table', {player: null, score: null})
    });

    this.make.text({
      x: this.leaderBtn.x - 75,
      y:this.leaderBtn.y - 12,
      text: "LEADERBOARD",
      style: {
        fontSize: '25px',
        fill: '#ffffff',
        fontFamily: 'Arcadia, monospace',
      },
    }).setDepth(1);

    this.exitBtn = this.add.image(this.width / 2, this.height / 2 + 210, 'button').setInteractive({ useHandCursor: true }).setOrigin(0.5, 0.5).setDisplaySize(300,50)
      .on('pointerup', () => {
        this.exit();
    });

    this.make.text({
      x: this.exitBtn.x - 75,
      y:this.exitBtn.y - 12,
      text: "LOG OUT",
      style: {
        fontSize: '25px',
        fill: '#ffffff',
        fontFamily: 'Arcadia, monospace',
      },
    }).setDepth(1);

    ['A', 'S', 'SPACE', 'ENTER'].forEach(key => {
      const keyP = this.input.keyboard.addKey(key);
      keyP.on('down', () => {
        this.start();
      });
    });

    this.add.image(this.width / 2 - 110 , this.height / 2 - 2, 'gameIcon').setOrigin(0.5,0.5).setDepth(2)
    this.add.image(this.width / 2 - 110 , this.height / 2 + 66, 'vaultIcon').setOrigin(0.5,0.5).setDepth(2)
    this.add.image(this.width / 2 - 110 , this.height / 2 + 136, 'leaderBoardIcon').setOrigin(0.5,0.5).setDepth(2)
    this.add.image(this.width / 2 - 110 , this.height / 2 + 206, 'exitIcon').setOrigin(0.5,0.5).setDepth(2)
  }

  start() {
    this.cameras.main.fadeOut(2000, 255, 255, 255);
    this.scene.start('instructions');
  }

  exit() {
    const ending = this.sound.add('ending', { volume: 0.25, loop: true });
    ending.play();
    this.cameras.main.fadeOut(2000, 0, 0, 0);
    walletConnection.signOut();
    window.location.href = "/";
  }

  update() {
    const bgs = [this.bg1, this.bg2, this.bg3, this.bg4, this.bg5, this.bg6, this.bg7, this.bg8, this.bg9];
    const fact = [0.1, 0.15, 0.25, 0.4, 0.5, 0.6, 1, 1.5, 2];
    bgs.forEach((bg, index) => {
      bg.tilePositionX += fact[index];
    });
  }

  async loadInfo() {
    this.totalSupply = await window.contract.ft_total_supply()
    this.previousScore = await window.contract.getScore({"id" : window.walletConnection.getAccountId()})
    this.yourBalance = await window.contract.ft_balance_of({"account_id": window.walletConnection.getAccountId()})
    this.previousScore = this.previousScore === null ? "No record" : this.previousScore["value"]
  }
}