import Phaser from 'phaser';
import Leaderboard from '@utils/leaderboard';

export default class LeaderboardTable extends Phaser.Scene {
  constructor() {
    super('leaderboard-table');
  }

  init(data) {
    this.player = data.player;
    this.score = data.score;
    this.song = data.song;
  }

  preload() {
    this.width = this.scale.width;
    this.height = this.scale.height;
    const leaderboard = new Leaderboard();

    if (this.player && this.score) {
      this.leaderboard = leaderboard.postScore(this.player, this.score);
    } else {
      this.leaderboard = leaderboard.getScores();
    }
  }

  create() {
    const title = this.make.text({
      x: this.width / 2,
      y: 50,
      text: 'LEADERBOARD',
      style: {
        fontSize: '100px',
        fill: '#fff200',
        fontFamily: 'Arcadia, monospace',
      },
    }).setOrigin(0.5, 0.5);

    this.sub = this.make.text({
      x: this.width / 2,
      y: title.y + 110,
      text: 'Player       Score       Time',
      style: {
        fontSize: '50px',
        fill: '#003fff',
        fontFamily: 'Arcadia, monospace',
      },
    }).setOrigin(0.5, 0.5);

    this.time.delayedCall(1000, () => {
      this.leaderboard.then(result => {
        let prevName;
        let prevScore;
        let prevTime;
        for (let i = 0; i <= 4; i += 1) {
          try {
          
            const { value, timestamp, userId } = result[i];
            const milliseconds = timestamp * 1000

            const dateObject = new Date(milliseconds)

            const humanDateFormat = dateObject.toLocaleString() 

            const name = this.nameText(userId);
            const scoreN = this.scoreText(value);
            const time = this.timeText(humanDateFormat);

            if (i >= 1) {
              name.y = prevName.y + 70;
              scoreN.y = prevScore.y + 70;
              time.y = prevTime.y + 70;
            }

            prevName = name;
            prevScore = scoreN;
            prevTime = time;
          } catch (error) {
            
          }
        }

        if (this.player && this.score) {
          for (let i = 0; i <= result.length - 1; i += 1) {
            const { value, timestamp, userId } = result[i];
            try {
              if (userId === this.player && parseInt(score, 10) === this.score) {
                this.text = this.make.text({
                  x: this.width / 5.7,
                  y: this.height - 100,
                  text: timestamp,
                  style: {
                    fontSize: '60px',
                    fill: '#ffffff',
                    fontFamily: 'Arcadia, monospace',
                  },
                }).setOrigin(0.5, 0.5);

                this.make.text({
                  x: this.width / 2 - 20,
                  y: this.height - 100,
                  text: userId,
                  style: {
                    fontSize: '60px',
                    fill: '#ffffff',
                    fontFamily: 'Arcadia, monospace',
                  },
                }).setOrigin(0.5, 0.5);

                this.make.text({
                  x: this.width - 235,
                  y: this.height - 100,
                  text: value,
                  style: {
                    fontSize: '60px',
                    fill: '#ffffff',
                    fontFamily: 'Arcadia, monospace',
                  },
                }).setOrigin(0.5, 0.5);
              }
            } catch (error) {
              
            }

            if (this.text) {
              break;
            }
          }
        }
      });
    });

    this.make.text({
      x: this.width / 2,
      y: this.height - 30,
      text: "[ Please wait for Loading! Press 'ENTER' to exit... ]",
      style: {
        fontSize: '30px',
        fill: '#505050',
        fontFamily: 'Monogram, monospace',
        align: 'justify',
      },
    }).setOrigin(0.5, 0.5);

    const enter = this.input.keyboard.addKey('ENTER');
    enter.on('down', () => {
      this.cameras.main.fadeOut(1000, 0, 0, 0);
      this.scene.start('title-screen');
    });
  }

  nameText(player) {
    return this.make.text({
      x: this.width / 5.7,
      y: this.sub.y + 75,
      text: player,
      style: {
        fontSize: '30px',
        fill: '#ffffff',
        fontFamily: 'Arcadia, monospace',
      },
    }).setOrigin(0.5, 0.5);
  }

  scoreText(score) {
    return this.make.text({
      x: this.width / 2 - 20,
      y: this.sub.y + 75,
      text: score,
      style: {
        fontSize: '30px',
        fill: '#ffffff',
        fontFamily: 'Arcadia, monospace',
      },
    }).setOrigin(0.5, 0.5);
  }

  timeText(time) {
    return this.make.text({
      x: this.width - 235,
      y: this.sub.y + 75,
      text: time.toLocaleString(),
      style: {
        fontSize: '30px',
        fill: '#ffffff',
        fontFamily: 'Arcadia, monospace',
      },
    }).setOrigin(0.5, 0.5);
  }
}