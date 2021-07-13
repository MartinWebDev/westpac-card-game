import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";

// I really need to add more to this map library and stick it on npm.
// I have used it so many times now, so I'll just make up a random name for it today.
import * as MathX from "../../utils/math";
import CardBack from "../../img/card-back.png";

interface ICardProps {
    thickness: number;
}

interface IDeckProps {
    thicknessPercentage: number;
}

const Card = styled.div<ICardProps>`
    background-image: url(${CardBack});
    background-position: center center;
    // Maximise fit. Other ways to achieve this include object-fit, but that requires explicit img tag rather than background.
    background-size: 190%;
    border-radius: 12px;
    height: 339px;
    width: 242px;
    // Take in a thickness 0-100 which is representative of how much of the total 52 cards you have,
    // then map that to a border/shadow to appear as if there is depth to the deck.
    box-shadow: 8px 8px ${({ thickness }) => `${MathX.map(thickness, 0, 100, 1, 20)}px`} -4px #333;
`;

const Deck: React.FC<IDeckProps> = ({ thicknessPercentage }) => {
    console.log("thicknessPercentage", thicknessPercentage);
    // Just one of several ways to check this value
    if (thicknessPercentage < 0 || thicknessPercentage > 100) throw new Error("Thickness should be a valid percentage");
    return (
        <Card thickness={thicknessPercentage} />
    );
};

// Below is one instance where proptypes could still be of use in typescript. While the prop type is number, we would like to be able to check the range.

// There's a few ways we could check if this is a valid number.
// For now, I have done an inline check in the component itself.
// We could do "oneOf(1, 2, 3, 4, 5...)" but this would get pretty silly if we're looking at a percentage 0-100!
// The best way would be to write a custom prop validator, but as I can't remember how to write these,
// and no copying from online is allowed in this test...insert StackOverflow answer here ;)
// Deck.propTypes = {
//     thicknessPercentage: PropTypes.number.isRequired
// };

export default Deck;
