import React from "react";

import PlayingCard from "./PlayingCard";

export default {
    title: "Game UI/Card",
    component: PlayingCard,
    argTypes: {
        suit: {
            control: {
                type: "select",
                options: ["Spade", "Heart", "Club", "Diamond"]
            }
        },
        value: {
            control: {
                type: "select",
                options: ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
            }
        },
    },
};

const Template = (args) => <PlayingCard {...args} />;

export const Primary = Template.bind({});
// Always default to Motorhead ;)
Primary.args = {
    suit: "Spade",
    value: "A"
};
