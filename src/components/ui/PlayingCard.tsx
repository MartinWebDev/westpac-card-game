import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import { CardSuit } from "../../shared/enums/CardSuit";
import { CardValue } from "../../shared/enums/CardValue";

import Suits from "./SuitImage";

interface IValueProps {
    suit: CardSuit;
}

interface IPlayingCard {
    suit: CardSuit;
    value: CardValue;
}

const Card = styled.div`
    border: 1px solid #333;
    border-radius: 12px;
    height: 339px;
    width: 242px;
    display: grid;
    align-items: center;
    justify-content: center;
    font-family: var(--card-font);
    font-size: 64px;
    text-align: center;

    * { font-family: inherit; }
`;

const Suit = styled.div`
    img {
        display: inline-block;
        width: 50%;
    }
`;

const Value = styled.div<IValueProps>`
    // Quick lazy way to choose the text color
    color: ${({ suit }) => [CardSuit.Heart, CardSuit.Diamond].includes(suit) ? `#b8000a` : `#000`};
`;

const PlayingCard: React.FC<IPlayingCard> = ({ suit, value }) => {
    // We could do some type checking here, eg make sure only a valid suit is used,
    // however as long as the application is set up correctly, and nobody bypasses it, proptypes below would be sufficient for this task

    return (
        <Card>
            <Suit>{Suits[suit]}</Suit>
            <Value suit={suit}>{value}</Value>
        </Card>
    );

    // Has the word "suit" started to sound weird to you yet? I've written it so many times, it's sounding weird to me now.
};

// Converting to typescript made proptypes *somewhat* redundant.
// PlayingCard.propTypes = {
//     suit: PropTypes.oneOf([CardSuit.Spade, CardSuit.Heart, CardSuit.Club, CardSuit.Diamond]).isRequired,
//     // value: PropTypes.oneOf(["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]).isRequired
//     value: PropTypes.oneOfInstance(CardValue);
// };

export default PlayingCard;
