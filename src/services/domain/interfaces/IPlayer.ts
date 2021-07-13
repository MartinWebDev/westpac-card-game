import { ICard } from "./ICard";
import { IDeck } from "./IDeck";

export interface IPlayer {
    DealCard(): ICard;
    ReceiveCards(cards: ICard[]): void;
    Snap(i: unknown): unknown;
    ClearDeck(): void;
    GetDeck(): IDeck;
}