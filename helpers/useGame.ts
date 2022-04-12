import { useState, useEffect } from "react";
import { Game, Types } from "phaser";

const useGame = (
  config: Types.Core.GameConfig,
  containerRef: React.RefObject<HTMLDivElement>
): { game: Phaser.Game | undefined; } => {
  const [game, setGame] = useState<Game>();
  useEffect(() => {
    if (!game && containerRef.current) {
      const newGame = new Game({ ...config, parent: containerRef.current });
      setGame(newGame);
    }
    return () => {
      game?.destroy(true);
    };
  }, [config, containerRef, game]);

  return { game };
}

export default useGame;
