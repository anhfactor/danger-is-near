import { useRef, useEffect } from "react";
import  useGame  from "../helpers/useGame";
import { Types } from "phaser";
import Game from './gameScenes/Game';
import Boot from './gameScenes/Boot';
import PreLoader from './gameScenes/PreLoader';
import titleScene from './gameScenes/TitleScene';
import instructions from './gameScenes/InstructionsScene';
import gameover from './gameScenes/GameOver';
import leaderboardScene from './gameScenes/LeaderboardScene';
import VaultScene from './gameScenes/VaultScene';
import leaderboardTable from './gameScenes/LeaderboardTable';

const gameConfig: Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'game',
  width: "100%",
  height: 725,
  scale: {
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
  dom: {
    createContainer: true,
  },
  scene: [Boot, PreLoader, titleScene, instructions, VaultScene, Game, gameover, leaderboardScene, leaderboardTable]
};

const PhaserGame = () => {
  const parentEl = useRef<HTMLDivElement>(null);
  const { game } = useGame(gameConfig, parentEl);

  useEffect(() => {
    if (game) {
      game.scene.start('boot')
    }
  }, [game]);
  return (
    <div className="container">
      <div ref={parentEl} />
    </div>
  );
};

export default PhaserGame;