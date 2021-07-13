import SnapGame from "../services/SnapGame";
import { useState } from "react";
import { BasicShuffle } from "../services/strategies/BasicShuffle";
import { IPlayer } from "../services/domain/interfaces/IPlayer";
import { GameState } from "../shared/enums/GameState";

declare global {
    interface Window { Game: SnapGame; }
}

export const useSnapGameManager = () => {
    if (!window.Game) {
        window.Game = new SnapGame(new BasicShuffle());
        // window.Game.StartNewGame();
    }

    interface IPlayersState { player1: IPlayer, player2: IPlayer }
    const [players, setPlayers] = useState<IPlayersState>({
        player1: window.Game.player1,
        player2: window.Game.player2
    });

    const [gameState, setGameState] = useState<GameState>(window.Game.gameState);

    const startNewGame = () => {
        window.Game.StartNewGame();
        setGameState(window.Game.gameState);
    };

    return {
        p1: players.player1,
        p2: players.player2,
        gameState,
        startNewGame
    };
};
