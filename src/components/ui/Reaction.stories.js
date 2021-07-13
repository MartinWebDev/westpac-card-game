import React from "react";

import Reaction from "./Reaction";

// Definitely not the right way :P
let value = 20;

export default {
    title: "Game UI/Reaction",
    component: Reaction,
    // TODO: Come back to this, can't remember how to map a function value back to a prop with this new format in storybook.
    // Assume for now that it will work, it is literally just a simple onChange function
    argTypes: {
        value: {
            control: {
                type: "number",
            }
        },
    },
};

const Template = (args) => <Reaction {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    value: value,
    setValue: v => value = v
};
