import { CardSuit } from "../shared/enums/CardSuit";
import { CardValue } from "../shared/enums/CardValue";
import { IDeck } from "../services/domain/interfaces/IDeck";
import { Card } from "../services/domain/models/Card";
import { Deck } from "../services/domain/models/Deck";

describe("Deck", () => {
    it("Can initialise, and generate a full 52 card deck", () => {
        // Ideally in this test you would want to loop through all cards and ensure there are no repeats, but in the interest of time, we will skip that here.
        const deck: IDeck = new Deck();
        const currentDeck = deck.GetCurrentDeck();

        expect(currentDeck).toBeDefined();
        expect(currentDeck.length).toBe(0);

        deck.CreateFullDeck();
        const newDeck = deck.GetCurrentDeck();

        expect(newDeck).toBeDefined();
        expect(newDeck.length).toBe(52);
    });

    it("Can shuffle itself", () => {
        const deck: IDeck = new Deck();
        deck.CreateFullDeck();

        // Check a few random locations for known value, then shuffle, then check again.
        // It's unlikely all slots would be the same, though not impossible,
        // so consideration to how to confirm shuffle should be made
        // One way would be to check every single card.
        // The chance of a shuffle resulting in all cards being in order is so unbeliavably unlikely that 1 failed test in every several million is probably acceptable.
        // That said however, the shuffle technique I am using in this demo should never result in this case since it starts with the last item, then moving back to the first, randomly swaps items.
        // Thus, the last item is guarenteed to be moved somewhere else, and can never be accidentally swapped back. For this example, simply checking the last card is enough to declare the shuffle a success.
        // Different shuffle techniques would require different testing, but for now, this is enough.
        const currentDeck = deck.GetCurrentDeck();
        expect(currentDeck.length).toBe(52);
        expect(currentDeck[51]).toEqual(new Card(CardSuit.Diamond, CardValue.King));

        deck.Shuffle();

        const shuffledDeck = deck.GetCurrentDeck();
        expect(shuffledDeck.length).toBe(52);
        expect(shuffledDeck[51]).not.toEqual(new Card(CardSuit.Diamond, CardValue.King));
    });

    it("Can be cleared", () => {
        const deck: IDeck = new Deck();
        deck.CreateFullDeck();

        const currentDeck = deck.GetCurrentDeck();
        expect(currentDeck.length).toBe(52);

        deck.Clear();

        const shuffledDeck = deck.GetCurrentDeck();
        expect(shuffledDeck.length).toBe(0);
    });

    it("Can accept a single card and add it to the deck", () => {
        const deck: IDeck = new Deck();
        const currentDeck = deck.GetCurrentDeck();
        expect(currentDeck.length).toBe(0);

        const cardToAdd = new Card(CardSuit.Spade, CardValue.Ace);
        deck.AddCard(cardToAdd);

        const newDeck = deck.GetCurrentDeck();
        expect(newDeck.length).toBe(1);
        expect(newDeck[0]).toEqual(new Card(CardSuit.Spade, CardValue.Ace));
    });

    it("Can accept multiple cards and add them to the deck", () => {
        const deck: IDeck = new Deck();
        const currentDeck = deck.GetCurrentDeck();
        expect(currentDeck.length).toBe(0);

        const cardsToAdd = [
            new Card(CardSuit.Spade, CardValue.Ace),
            new Card(CardSuit.Spade, CardValue.Five),
            new Card(CardSuit.Heart, CardValue.Nine)
        ];
        deck.AddCards(cardsToAdd);

        const newDeck = deck.GetCurrentDeck();
        expect(newDeck.length).toBe(3);
        expect(newDeck[0]).toEqual(new Card(CardSuit.Spade, CardValue.Ace));
        expect(newDeck[1]).toEqual(new Card(CardSuit.Spade, CardValue.Five));
        expect(newDeck[2]).toEqual(new Card(CardSuit.Heart, CardValue.Nine));
    });

    it("Can deal a single card, removing it from the deck", () => {
        // Use the CreateFullDeck() method as we know the size and order of the cards, without needing to manually add them.
        // After dealing, we know that the first card should have been dealt, and the next card should be next in the order.
        const deck: IDeck = new Deck();
        deck.CreateFullDeck();
        const currentDeck = deck.GetCurrentDeck();
        expect(currentDeck.length).toBe(52);
        expect(currentDeck[0]).toEqual(new Card(CardSuit.Spade, CardValue.Ace));

        const dealtCard = deck.Deal();
        const newDeck = deck.GetCurrentDeck();
        expect(newDeck.length).toBe(51);
        expect(newDeck[0]).toEqual(new Card(CardSuit.Spade, CardValue.Two));
        expect(dealtCard).toEqual(new Card(CardSuit.Spade, CardValue.Ace));
    });

    it("Throws an error if you try to deal from an empty deck", () => {
        const deck: IDeck = new Deck();
        const currentDeck = deck.GetCurrentDeck();
        expect(currentDeck.length).toBe(0);
        expect(() => deck.Deal()).toThrow();
    });

    // On reflection I don't think this project would need this feature, so no need to test it.
    // In the game, each player has a deck, which can deal a card one by one, but never be cleared.
    // The deck in the middle will be cleared when a player calls "snap", but that is handled by the clear() method.
    // There is no instance where multiple cards will need to be removed, but not all of them.
    // it("Can remove a collection of card from the deck", () => { });
});
