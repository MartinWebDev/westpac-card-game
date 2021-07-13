import React from "react";

import Deck from "./Deck";

export default {
    title: "Game UI/Deck",
    component: Deck,
    argTypes: {
        thicknessPercentage: {
            control: {
                type: "number",
            }
        },
    },
};

const Template = (args) => <Deck {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    thicknessPercentage: 50
};
