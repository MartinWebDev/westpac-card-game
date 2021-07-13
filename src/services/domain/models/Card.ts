import { CardSuit } from "../../../shared/enums/CardSuit";
import { CardValue } from "../../../shared/enums/CardValue";
import { ICard } from "../interfaces/ICard";

export class Card implements ICard {
    private _suit: CardSuit;
    private _value: CardValue;

    constructor(suit: CardSuit, value: CardValue) {
        this._suit = suit;
        this._value = value;
    }

    GetValue() {
        return this._value;
    }
}
