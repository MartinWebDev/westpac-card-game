# README
This is unfinished. I kept retrying new ideas, and each time just running out of spare time to finish it.\
Since I assumed Westpac would not wait much longer I never got around to finishing it. 

Hopefully it is clear to see what my end goal was here. To try and entirely separate the game logic from the UI logic.\
The game rules, game manager, game logic, whatever, is not supposed to be the responsibility of the UI layer.\
Though I love React, too many people rely on it to do all the heavy lifting for their apps, and this is bad practice as it results in tightly coupled code.\
Hence, I tried to make the game manager as a stand alone class library, which could then be utilised using a form of middleware in React, which I started to experiment using a custom hook to do.

# Run me
Standard create-react-app scripts, you know what to do 😉\
- yarn install
- yarn start
npm is obviously fine too.

# Assumptions

# Additions

# Further notes/decisions

## Storybook
I often like to use storybook for the component aspect of any app, be it react, angular, or otherwise.\
I feel this helps to encourage a more single responsibility and uncoupled method of writing components, before needing to consider functionality.

## Acknowledgements
Playing Card back design from https://depositphotos.com/vector-images/playing-card-back.html and used in the understanding that this is a personal project and not for commercial use of any kind.
Westpac logo obviously from Westpac and used in the understanding that this project is used specifically for Westpac internal viewing.

---
---
---
---

# Copied from test online
## RULES
- standard 52 card deck
- shuffle
- 26 cards each
- first player chosen randomly
- take turns to put a card down from your pile in the middle, by clicking your pile
- if card matches previous (value), each player may call "snap". Player by clicking middle pile, computer after a "reaction" time, controlled by a slider.
- snap winner takes middle deck to bottom of their pile
- when a player runs out of card, they lose, other wins

## INCLUDES
- Indicate turn
- Indicate how much deck remains
- New game button
- Indicate who called snap
- Slider for computer reaction

