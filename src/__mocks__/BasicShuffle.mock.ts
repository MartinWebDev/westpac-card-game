import { CardSuit } from "../shared/enums/CardSuit";
import { CardValue } from "../shared/enums/CardValue";
import { ICard } from "../services/domain/interfaces/ICard";
import { IShuffleStrategy } from "../services/domain/interfaces/IShuffleStrategy";
import { Card } from "../services/domain/models/Card";

export class BasicShuffle implements IShuffleStrategy {
    // We use this mock in order to manipulate the order rather than relying on random, thus we have a predictable order for tests.
    Shuffle(_: ICard[]) {
        return [
            new Card(CardSuit.Spade, CardValue.Ace),
            new Card(CardSuit.Diamond, CardValue.Ace),
            new Card(CardSuit.Club, CardValue.Ace),
            new Card(CardSuit.Heart, CardValue.Ace),
        ];
    }
}