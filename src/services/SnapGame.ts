import EventEmitter from "events";
import { Events } from "../shared/enums/Events";

import { GameState } from "../shared/enums/GameState";
import { IDeck } from "./domain/interfaces/IDeck";
import { IPlayer } from "./domain/interfaces/IPlayer";
import { IShuffleStrategy } from "./domain/interfaces/IShuffleStrategy";
import { Deck } from "./domain/models/Deck";
import { Player } from "./domain/models/Player";
import { BasicShuffle } from "./strategies/BasicShuffle";

class SnapGame {
    player1: IPlayer;
    player2: IPlayer;
    deck: IDeck;
    gameState: GameState;
    private _shuffleStrategy;
    // currentTurn: IPlayer;
    winEvent: EventEmitter

    constructor(shuffleStrategy: IShuffleStrategy = new BasicShuffle()) {
        // TODO: Create "ShufflableDeck" which accepts a shuffle strat, so that a normal deck cannot be shuffled.
        const p1deck = new Deck();
        const p2deck = new Deck();
        this.player1 = new Player(p1deck);
        this.player2 = new Player(p2deck);
        this._shuffleStrategy = shuffleStrategy;
        this.deck = new Deck(shuffleStrategy);
        this.gameState = GameState.NotStarted;
        // this.currentTurn = this.player1;
        this.winEvent = new EventEmitter();
    }

    StartNewGame() {
        // Clear all decks
        this.player1.ClearDeck();
        this.player2.ClearDeck();
        this.deck.Clear();

        // Create new deck, shuffle, and split between players.
        const newDeck = new Deck(this._shuffleStrategy);
        newDeck.CreateFullDeck();
        newDeck.Shuffle();
        // Multiple methods to split are available, the "objectively best" way would be to move the split function into the deck itself,
        // then pass in an array of players, then loop through them all taking advantage of the deal method.
        // This would be better in terms of coding practice, but would also be slower and take longer to implement.
        // This would also allow for more than 2 players if the need arrises. For speed and time here though, let's just split right in half between 2 players.
        const shuffledDeck = newDeck.GetCurrentDeck();
        this.player1.ReceiveCards(shuffledDeck.splice(0, shuffledDeck.length / 2));
        this.player2.ReceiveCards(shuffledDeck);

        // Start new game
        // this.currentTurn = Math.random() < 0.5 ? this.player1 : this.player2;
        this.gameState = GameState.GameRunning;
    }

    ListenToWinEvent(fnc: (winner: IPlayer) => void) {
        this.winEvent.on(Events.WinEvent, fnc);
    }

    PlayerTurn(player: IPlayer) {
        const card = player.DealCard();
        this.deck.AddCard(card);
    }

    CallSnap(player: IPlayer) {
        // Get current card, get previous card, if match, award cards, and return true.
        const currentDeck = this.deck.GetCurrentDeck();
        const indexOfLastCard = currentDeck.length - 1;
        const currentCard = currentDeck[indexOfLastCard];
        const previousCard = currentDeck[indexOfLastCard - 1];

        // I prefer early exit conditions rather than large nested if blocks
        if (currentCard.GetValue() !== previousCard.GetValue()) {
            return false;
        }

        player.ReceiveCards(currentDeck);
        this.deck.Clear();

        this.CheckForWin();

        return true;
    }

    CheckForWin() {
        if (this.player1.GetDeck().GetCurrentDeck().length === 0) {
            this.winEvent.emit(Events.WinEvent, this.player2);
        }

        if (this.player2.GetDeck().GetCurrentDeck().length === 0) {
            this.winEvent.emit(Events.WinEvent, this.player1);
        }
    }
}

export default SnapGame;
