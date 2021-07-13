import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

interface IReactionProps {
    value: number,
    setValue: (value: number) => {};
}

const Slider = styled.input`
    background-color: red;
`;

const Reaction: React.FC<IReactionProps> = ({ value, setValue }) => {
    return (
        <Slider type="range" min="1" max="100" value={value} onChange={(event) => setValue(parseInt(event.target.value))} />
    );
};

Reaction.propTypes = {
    value: PropTypes.number.isRequired,
    setValue: PropTypes.func.isRequired
};

export default Reaction;
