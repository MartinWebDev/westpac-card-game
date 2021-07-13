import React from "react";
import { GameState } from "./shared/enums/GameState";
import GameBoard from "./components/game/GameBoard";
import { useSnapGameManager } from "./hooks/useSnapGameManager";
import { IPlayer } from "./services/domain/interfaces/IPlayer";

export interface IGameContext {
    gameState: GameState;
    players?: {
        p1: IPlayer,
        p2: IPlayer,
    }
    startNewGame?: () => void
};

export const GameContext = React.createContext<IGameContext>({
    gameState: GameState.NotStarted,
});

const App = () => {
    const {
        p1,
        p2,
        gameState,
        startNewGame
    } = useSnapGameManager();

    // 4 spaces tabs better then 2. Change my mind. More readable, and more consistent with all other languages.
    return (
        <div>
            <GameContext.Provider
                value={{
                    players: { p1, p2 },
                    gameState,
                    startNewGame
                }}
            >
                <GameBoard />
            </GameContext.Provider>
        </div>
    );
};

export default App;



// import React from "react";
// import GameBoard from "./components/game/GameBoard";
// import SnapGame from "./services/SnapGame";
// import { BasicShuffle } from "./services/strategies/BasicShuffle";
// import { GameState } from "./shared/enums/GameState";

// export interface IGameContext {
//     gameState: GameState;
//     startNewGame?: () => void;
// };

// export const GameContext = React.createContext<IGameContext>({
//     gameState: GameState.NotStarted,
//     // startNewGame: () => { }
// });

// interface IGameState {
//     snapGame: SnapGame;
//     gameState?: GameState;
// };

// class App extends React.Component<{}, IGameState> {
//     // _snapGame: SnapGame;

//     constructor(props: any) {
//         super(props);
//         // this._snapGame = new SnapGame(new BasicShuffle());
//         this.state = {
//             snapGame: new SnapGame(new BasicShuffle()),
//         };
//     }

//     startNewGame() {
//         this.state.snapGame.StartNewGame();
//         this.setState({
//             gameState: this.state.snapGame.gameState
//         });
//     }

//     render() {
//         // 4 spaces tabs better then 2. Change my mind. More readable, and more consistent with all other languages.
//         return (
//             <div>
//                 <GameContext.Provider
//                     value={{
//                         gameState: GameState.NotStarted,
//                         startNewGame: this.startNewGame
//                     }}
//                 >
//                     <GameBoard />
//                 </GameContext.Provider>
//             </div>
//         );
//     }
// }

// export default App;
