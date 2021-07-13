import React from "react";
import Deck from "../ui/Deck";

interface IComputerHand {
    deckThickness: number
};

const ComputerHand: React.FunctionComponent<IComputerHand> = ({ deckThickness }) => {
    return (
        <Deck thicknessPercentage={deckThickness} />
    );
};

export default ComputerHand;
