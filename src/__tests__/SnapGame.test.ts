import { GameState } from "../shared/enums/GameState";
import SnapGame from "../services/SnapGame";
// Interesting eslint issue, not liking mocks being imported this way, despite being exactly how jest recommends to do it: https://jestjs.io/docs/es6-class-mocks#manual-mock-that-is-another-es6-class
// eslint-disable-next-line jest/no-mocks-import
import { BasicShuffle } from "../__mocks__/BasicShuffle.mock";

describe("The snap game controller", () => {
    it("Can initialise, start new game, and split shuffled deck between players 1 and 2", () => {
        const game = new SnapGame();
        expect(game.gameState).toBe(GameState.NotStarted);

        game.StartNewGame();

        const p1 = game.player1;
        const p2 = game.player2;
        const p1deck = p1.GetDeck();
        const p2deck = p2.GetDeck();

        expect(p1deck.GetCurrentDeck().length).toBe(26);
        expect(p2deck.GetCurrentDeck().length).toBe(26);
    });

    it("Allows players to take turns adding cards to the main deck and lose them from their own deck", () => {
        const game = new SnapGame();
        game.StartNewGame();

        const p1 = game.player1;
        const p2 = game.player2;
        const p1deck = p1.GetDeck();
        const p2deck = p2.GetDeck();

        expect(game.deck.GetCurrentDeck().length).toBe(0);
        expect(p1deck.GetCurrentDeck().length).toBe(26);
        expect(p2deck.GetCurrentDeck().length).toBe(26);

        game.PlayerTurn(p1);
        game.PlayerTurn(p2);

        const p1b = game.player1;
        const p2b = game.player2;
        const p1deck2 = p1b.GetDeck();
        const p2deck2 = p2b.GetDeck();
        expect(game.deck.GetCurrentDeck().length).toBe(2);
        expect(p1deck2.GetCurrentDeck().length).toBe(25);
        expect(p2deck2.GetCurrentDeck().length).toBe(25);
    });

    it("Clears the main deck and give those cards to p1 when p1 declares snap", () => {
        const game = new SnapGame(new BasicShuffle());
        game.StartNewGame();

        // Check that cards were split equal, mock the game by adding some cards to the main deck,
        // ensure last 2 cards have same value (suit doesn't matter), then declare snap.
        // Snapping player should recieve cards from main deck.
        const p1 = game.player1;
        const p2 = game.player2;
        const p1deck = p1.GetDeck();
        const p2deck = p2.GetDeck();

        expect(game.deck.GetCurrentDeck().length).toBe(0);
        expect(p1deck.GetCurrentDeck().length).toBe(2);
        expect(p2deck.GetCurrentDeck().length).toBe(2);

        game.PlayerTurn(p1);
        game.PlayerTurn(p2);
        expect(game.deck.GetCurrentDeck().length).toBe(2);
        expect(p1deck.GetCurrentDeck().length).toBe(1);
        expect(p2deck.GetCurrentDeck().length).toBe(1);

        // At this point, the main deck will consist of 2 aces from our mock shuffle, so a snap is possible. Calling snap from p1 should clear the main deck, and give p1 those 2 cards.
        const isSnap = game.CallSnap(p1);
        const p1b = game.player1;
        const p2b = game.player2;
        const p1deck2 = p1b.GetDeck();
        const p2deck2 = p2b.GetDeck();
        expect(game.deck.GetCurrentDeck().length).toBe(0);
        expect(p1deck2.GetCurrentDeck().length).toBe(3);
        expect(p2deck2.GetCurrentDeck().length).toBe(1);
        expect(isSnap).toBeTruthy();
    });

    it("Emits a win event when a player runs out of cards", () => {
        const winCallback = jest.fn();
        const game = new SnapGame(new BasicShuffle());
        game.StartNewGame();
        game.ListenToWinEvent(winCallback);

        // If we take the above example with known card order, we can forcefully make one player win, and check for the win condition.
        const p1 = game.player1;
        const p2 = game.player2;

        // After first p1 snap, p2 will have 1 card, a win event should not be called yet
        game.PlayerTurn(p1);
        game.PlayerTurn(p2);
        game.CallSnap(p1);
        expect(p2.GetDeck().GetCurrentDeck().length).toBe(1);
        expect(winCallback).not.toBeCalled();
        expect(winCallback).toBeCalledTimes(0);

        // After second p1 snap, p2 will have 0 cards, and a win event should be emitted.
        game.PlayerTurn(p1);
        game.PlayerTurn(p2);
        game.CallSnap(p1);
        expect(p2.GetDeck().GetCurrentDeck().length).toBe(0);
        expect(winCallback).toBeCalled();
        expect(winCallback).toBeCalledTimes(1);
    });
});
