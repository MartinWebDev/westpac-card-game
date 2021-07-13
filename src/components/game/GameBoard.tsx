import { useContext } from "react";
import styled from "styled-components";
import PlayerHand from "./PlayerHand";
import ComputerHand from "./ComputerHand";
import CurrentCard from "./CurrentCard"

import { GameContext } from "../../App";
import { GameState } from "../../shared/enums/GameState";
import { clamp, zeroInfinity } from "../../utils/math";

const Board = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

const GameBoard = () => {
    const Game = useContext(GameContext);

    const getGameStateString = () => {
        switch (Game.gameState) {
            case GameState.NotStarted:
                return "Welcome to the game!";
            case GameState.GameRunning:
                return "Game in progress";
            default:
                return "Hello World!";
        }
    };

    const p1deckSize = Game.players?.p1.GetDeck().GetCurrentDeck().length || 0;
    const p2deckSize = Game.players?.p2.GetDeck().GetCurrentDeck().length || 0;

    return (
        <>
            <h1>{getGameStateString()}</h1>
            <Board>
                <ComputerHand deckThickness={zeroInfinity(clamp((52 / p2deckSize) * 100, 0, 100))} />
                <CurrentCard />
                <PlayerHand deckThickness={zeroInfinity(clamp((52 / p1deckSize) * 100, 0, 100))} />
            </Board>
            <button onClick={Game.startNewGame}>New Game</button>
        </>
    );
};

export default GameBoard;
