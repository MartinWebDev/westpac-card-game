import { ICard } from "./ICard";

export interface IDeck {
    GetCurrentDeck(): ICard[]
    CreateFullDeck(): void;
    Shuffle(): void;
    Clear(): void;

    AddCard(card: ICard): void;
    AddCards(cards: ICard[]): void;

    Deal(): ICard;
}
