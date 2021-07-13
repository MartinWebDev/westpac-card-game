import { ICard } from "../interfaces/ICard";
import { IDeck } from "../interfaces/IDeck";
import { IPlayer } from "../interfaces/IPlayer";

export class Player implements IPlayer {
    _deck: IDeck;

    constructor(deck: IDeck) {
        this._deck = deck;
    }

    DealCard() {
        const dealCard = this._deck.Deal();
        return dealCard;
    }

    ReceiveCards(cards: ICard[]) {
        this._deck.AddCards(cards);
    }

    ClearDeck() {
        this._deck.Clear();
    }

    GetDeck() {
        return this._deck;
    }

    Snap(i: unknown) { }
}
