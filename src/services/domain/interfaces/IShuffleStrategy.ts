import { ICard } from "./ICard";

export interface IShuffleStrategy {
    Shuffle(cards: ICard[]): ICard[];
}