import { CardSuit } from "../shared/enums/CardSuit";
import { CardValue } from "../shared/enums/CardValue";
import { Card } from "../services/domain/models/Card";

// The Card class in this system is only really to be treated as a domain value object so there shouldn't be much to test.
// Let's just ensure that when we initialise a card, the properties are correctly stored in the class instance.
describe("Card", () => {
    it("Can initialise with expected suit and value", () => {
        const card = new Card(CardSuit.Club, CardValue.Queen);
        expect(card._suit).toBe(CardSuit.Club);
        expect(card._value).toBe(CardValue.Queen);
    });
});
