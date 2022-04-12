import Phaser from 'phaser';

export default class LeaderboardScene extends Phaser.Scene {
  constructor() {
    super('leaderboard-scene');
  }

  init(data) {
    this.subScore = data.score;
    this.kills = data.kills;
    this.ending = data.song;
    this.player = window.walletConnection.getAccountId()
  }

  preload() {
    this.width = this.scale.width;
    this.height = this.scale.height;
  }

  create() {
    this.cameras.main.fadeIn(1000, 0, 0, 0);

    this.totalScore = this.subScore + this.kills * 10;

    this.make.text({
      x: this.width / 2,
      y: this.height / 2 - 150,
      text: `Total Score/Token\n${this.totalScore}`,
      style: {
        fontSize: '60px',
        fill: '#ffffff',
        fontFamily: 'Arcadia, monospace',
        align: 'center',
      },
    }).setOrigin(0.5, 0.5);
    
    this.make.text({
      x: this.width / 2,
      y: this.height / 2,
      text: `Score: ${this.subScore} | Kills: ${this.kills}`,
      style: {
        fontSize: '30px',
        fill: '#ffffff',
        fontFamily: 'Arcadia, monospace',
      },
    }).setOrigin(0.5, 0.5);

    this.make.text({
      x: this.width / 2,
      y: this.height / 2 + 50,
      text: this.player,
      style: {
        fontSize: '30px',
        fill: '#ffffff',
        fontFamily: 'Arcadia, monospace',
      },
    }).setOrigin(0.5, 0.5);

    const keys = this.input.keyboard.addKeys({
      space: 'SPACE',
      a: 'A',
      s: 'S',
      w: 'W',
      enter: 'ENTER',
    });

    keys.a.on('down', (e) => {
      e.preventDefault();
    });

    keys.s.on('down', (e) => {
      e.preventDefault();
    });

    keys.enter.on('down', (e) => {
      e.preventDefault();
    });

    keys.space.on('down', (e) => {
      e.preventDefault();
    });

    keys.w.on('down', (e) => {
      e.preventDefault();
    });

    const btn = this.add.image(this.width / 2 + 15, this.height / 2 + 160, 'button').setDisplaySize(300,80);
    const textBtn = this.add.text(btn.x - 100, btn.y - 15, 'Claim prize!', 
    {  fontSize: '25px',
        fill: '#ffffff',
        fontFamily: 'Arcadia, monospace' 
    });
    btn.setInteractive({ useHandCursor: true });
    btn.on('pointerdown', () => {
        this.cameras.main.fadeOut(1000, 0, 0, 0);
        this.scene.start('leaderboard-table', { player: this.player, score: this.totalScore, song: this.ending });
    })
  }
}