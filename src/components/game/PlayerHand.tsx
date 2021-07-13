import Deck from "../ui/Deck";

interface IPlayerHand {
    deckThickness: number
};

const PlayerHand: React.FunctionComponent<IPlayerHand> = ({ deckThickness }) => {
    return (
        <Deck thicknessPercentage={deckThickness} />
    );
};

export default PlayerHand;
