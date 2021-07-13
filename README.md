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

