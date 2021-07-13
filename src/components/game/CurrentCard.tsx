import { CardSuit } from "../../shared/enums/CardSuit";
import { CardValue } from "../../shared/enums/CardValue";
import Deck from "../ui/PlayingCard";

const CurrentCard = () => {
    return (
        <Deck suit={CardSuit.Spade} value={CardValue.Ace} />
    );
};

export default CurrentCard;
