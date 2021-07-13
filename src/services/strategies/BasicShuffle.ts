import { ICard } from "../domain/interfaces/ICard";
import { IShuffleStrategy } from "../domain/interfaces/IShuffleStrategy";

export class BasicShuffle implements IShuffleStrategy {
    Shuffle(cards: ICard[]) {
        // Fisher–Yates shuffle
        for (let i = cards.length - 1; i > 0; i--) {
            const rnd = Math.floor(Math.random() * i);
            const temp = cards[rnd];
            cards[rnd] = cards[i];
            cards[i] = temp;
        }

        return cards;
    }
}