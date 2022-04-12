import loadFont from '@utils/fontLoader';

export default class PreLoad extends Phaser.Scene {
  constructor() {
    super('preLoader');
  }

  preload() {
    this.width = this.scale.width;
    this.height = this.scale.height;
    this.sound.pauseOnBlur = false;
    this.scene.pauseOnBlur = false;
    loadFont('Monogram', 'assets/font/monogram_extended.ttf');

    const progressBox = this.add.graphics();
    const progressBar = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(this.width / 2 - 160, this.height / 2 - 25, 320, 50);

    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        fontSize: '20px',
        fill: '#ffffff',
        fontFamily: 'Arcadia, monospace',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2,
      y: height / 2,
      text: '0%',
      style: {
        fontSize: '18px',
        fill: '#ffffff',
        fontFamily: 'Arcadia, monospace',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    this.load.image('panel', 'assets/buttons/panel.png');
    this.load.image('light1', 'assets/background/light1.png');
    this.load.image('light2', 'assets/background/light2.png');
    this.load.image('pine1', 'assets/background/pine1.png');
    this.load.image('pine2', 'assets/background/pine2.png');
    this.load.image('sky1', 'assets/background/sky1.png');
    this.load.image('sky2', 'assets/background/sky2.png');
    this.load.image('mountain', 'assets/background/mountain.png');
    this.load.image('cloud', 'assets/background/cloud.png');
    this.load.image('floor', 'assets/background/floor.png');
    this.load.image('platform', 'assets/platform.png');

    this.load.image('button', 'assets/buttons/button.png');
    this.load.image('exitIcon', 'assets/buttons/exitIcon.png');
    this.load.image('gameIcon', 'assets/buttons/gameIcon.png');
    this.load.image('leaderBoardIcon', 'assets/buttons/leaderBoardIcon.png');
    this.load.image('vaultIcon', 'assets/buttons/vaultIcon.png');

    this.load.image('instructions_bg', 'assets/paperbackground.png');

    this.load.image('spike', 'assets/obstacle/spike collection.png');

    this.load.image('player_avatar', 'assets/player/player_avatar.png');
    this.load.spritesheet('player', 'assets/player/player_run.png', {
      frameWidth: 70,
      frameHeight: 58,
    });

    this.load.spritesheet('player_rest', 'assets/player/player_rest.png', {
      frameWidth: 70,
      frameHeight: 55,
    });

    this.load.spritesheet('player_jump', 'assets/player/player_jump.png', {
      frameWidth: 56.7,
      frameHeight: 59,
    });

    this.load.spritesheet('player_falling', 'assets/player/player_falling.png', {
      frameWidth: 60,
      frameHeight: 70,
    });

    this.load.spritesheet('player_attack', 'assets/player/player_attack.png', {
      frameWidth: 150,
      frameHeight: 76,
    });

    this.load.spritesheet('player_dead', 'assets/player/player_dead.png', {
      frameWidth: 50,
      frameHeight: 50,
    });

    this.load.spritesheet('skeleton_walk', 'assets/monsters/monster_walk.png', {
      frameWidth: 66,
      frameHeight: 68,
    });

    this.load.spritesheet('skeleton_attack', 'assets/monsters/monster_attack.png', {
      frameWidth: 148,
      frameHeight: 95,
    });

    this.load.spritesheet('skeleton_dead', 'assets/monsters/monster_dead.png', {
      frameWidth: 60,
      frameHeight: 65,
    });

    this.load.audio('menu', 'assets/music/VGMA Challenge - July 12th.wav');
    this.load.audio('gameMusic', 'assets/music/A mystical journey_3.ogg');
    this.load.audio('ending', 'assets/music/Dee Yan-Key - III. Finale_ Slowly.mp3');
    this.load.audio('death_sound', 'assets/sound effects/death_4_alex.wav');
    this.load.audio('gameover', 'assets/sound effects/gameover.mp3');

    this.load.on('progress', (value) => {
      progressBar.clear();
      percentText.setText(`${parseInt(value * 100, 10)}%`);
      progressBar.fillStyle(0x00cccc, 1);
      progressBar.fillRect(625 - 150, 362.5 - 15, 300 * value, 30);
    });

    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
    });
  }

  create() {
    this.anims.create({
      key: 'run',
      frames: this.anims.generateFrameNumbers('player', {
        start: 0,
        end: 2,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'dead',
      frames: this.anims.generateFrameNumbers('player_dead', {
        start: 0,
        end: 1,
      }),
      frameRate: 2,
    });

    this.anims.create({
      key: 'rest',
      frames: this.anims.generateFrameNumbers('player', {
        start: 0,
        end: 2,
      }),
      frameRate: 7,
      repeat: -1,
    });

    this.anims.create({
      key: 'jump',
      frames: this.anims.generateFrameNumbers('player_jump', {
        start: 0,
        end: 2,
      }),
      frameRate: 8,
    });

    this.anims.create({
      key: 'falling',
      frames: this.anims.generateFrameNumbers('player_falling', {
        start: 0,
        end: 2,
      }),
      frameRate: 6,
    });

    this.anims.create({
      key: 'attack',
      frames: this.anims.generateFrameNumbers('player_attack', {
        start: 0,
        end: 3,
      }),
      frameRate: 6,
    });

    this.anims.create({
      key: 'skeleton_walking',
      frames: this.anims.generateFrameNumbers('skeleton_walk', {
        start: 0,
        end: 5,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: 'skeleton_attacking',
      frames: this.anims.generateFrameNumbers('skeleton_attack', {
        start: 0,
        end: 5,
      }),
      frameRate: 4,
    });

    this.anims.create({
      key: 'skeleton_death',
      frames: this.anims.generateFrameNumbers('skeleton_dead', {
        start: 0,
        end: 1,
      }),
      frameRate: 1,
    });

    this.scene.start('title-screen');
  }
}
