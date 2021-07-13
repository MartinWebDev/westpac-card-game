import { BasicShuffle } from "../../strategies/BasicShuffle";
import { CardSuit } from "../../../shared/enums/CardSuit";
import { CardValue } from "../../../shared/enums/CardValue";
import { ICard } from "../interfaces/ICard";
import { IDeck } from "../interfaces/IDeck";
import { IShuffleStrategy } from "../interfaces/IShuffleStrategy";
import { Card } from "./Card";

export class Deck implements IDeck {
    _cards: ICard[];
    _shuffleStrategy: IShuffleStrategy;

    constructor(shuffleStrategy: IShuffleStrategy = new BasicShuffle()) {
        this._cards = [];
        this._shuffleStrategy = shuffleStrategy;
    }

    GetCurrentDeck() {
        return this._cards;
    }

    CreateFullDeck() {
        this._cards = [
            new Card(CardSuit.Spade, CardValue.Ace),
            new Card(CardSuit.Spade, CardValue.Two),
            new Card(CardSuit.Spade, CardValue.Three),
            new Card(CardSuit.Spade, CardValue.Four),
            new Card(CardSuit.Spade, CardValue.Five),
            new Card(CardSuit.Spade, CardValue.Six),
            new Card(CardSuit.Spade, CardValue.Seven),
            new Card(CardSuit.Spade, CardValue.Eight),
            new Card(CardSuit.Spade, CardValue.Nine),
            new Card(CardSuit.Spade, CardValue.Ten),
            new Card(CardSuit.Spade, CardValue.Jack),
            new Card(CardSuit.Spade, CardValue.Queen),
            new Card(CardSuit.Spade, CardValue.King),

            new Card(CardSuit.Heart, CardValue.Ace),
            new Card(CardSuit.Heart, CardValue.Two),
            new Card(CardSuit.Heart, CardValue.Three),
            new Card(CardSuit.Heart, CardValue.Four),
            new Card(CardSuit.Heart, CardValue.Five),
            new Card(CardSuit.Heart, CardValue.Six),
            new Card(CardSuit.Heart, CardValue.Seven),
            new Card(CardSuit.Heart, CardValue.Eight),
            new Card(CardSuit.Heart, CardValue.Nine),
            new Card(CardSuit.Heart, CardValue.Ten),
            new Card(CardSuit.Heart, CardValue.Jack),
            new Card(CardSuit.Heart, CardValue.Queen),
            new Card(CardSuit.Heart, CardValue.King),

            new Card(CardSuit.Club, CardValue.Ace),
            new Card(CardSuit.Club, CardValue.Two),
            new Card(CardSuit.Club, CardValue.Three),
            new Card(CardSuit.Club, CardValue.Four),
            new Card(CardSuit.Club, CardValue.Five),
            new Card(CardSuit.Club, CardValue.Six),
            new Card(CardSuit.Club, CardValue.Seven),
            new Card(CardSuit.Club, CardValue.Eight),
            new Card(CardSuit.Club, CardValue.Nine),
            new Card(CardSuit.Club, CardValue.Ten),
            new Card(CardSuit.Club, CardValue.Jack),
            new Card(CardSuit.Club, CardValue.Queen),
            new Card(CardSuit.Club, CardValue.King),

            new Card(CardSuit.Diamond, CardValue.Ace),
            new Card(CardSuit.Diamond, CardValue.Two),
            new Card(CardSuit.Diamond, CardValue.Three),
            new Card(CardSuit.Diamond, CardValue.Four),
            new Card(CardSuit.Diamond, CardValue.Five),
            new Card(CardSuit.Diamond, CardValue.Six),
            new Card(CardSuit.Diamond, CardValue.Seven),
            new Card(CardSuit.Diamond, CardValue.Eight),
            new Card(CardSuit.Diamond, CardValue.Nine),
            new Card(CardSuit.Diamond, CardValue.Ten),
            new Card(CardSuit.Diamond, CardValue.Jack),
            new Card(CardSuit.Diamond, CardValue.Queen),
            new Card(CardSuit.Diamond, CardValue.King)
        ];
    }

    Shuffle() {
        if (this._cards.length === 0) {
            throw new Error("Cannot shuffle an empty deck. Add some cards first.");
        }

        const newDeck = this._shuffleStrategy.Shuffle(this._cards);
        this._cards = newDeck;
    }

    Clear() {
        this._cards = [];
    }

    AddCard(card: ICard) {
        this._cards.push(card);
    }

    AddCards(cards: ICard[]) {
        this._cards.push(...cards);
    }

    Deal(): ICard {
        if (this._cards.length === 0) {
            throw new Error("Deck is empty. Nothing to deal.");
        }

        const dealCard = this._cards.shift();
        return dealCard!;
    }
}
