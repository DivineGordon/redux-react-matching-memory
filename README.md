# Matching Memory (Redux & React)

**Find live site here =>  [Matching Memory](https://realgordon.github.io/redux-react-matching-memory/)**

This project explores where react-redux fits into an application.

The application consists of 5 React components:

1. `App`: The root component, App renders the Score and Board components.
2. `Score`: Child of the App component, Score will display the number of matched cards.
3. `Board`: Child of the App component, Board will create the card grid for gameplay.
4. `CardRow`: Child of the Board component, CardRow renders a row of Card components.
5. `Card`: Child of the CardRow component, Card displays the card content when flipped over.
One goal of **this project will be to show that a nested component like `Card` can access data and dispatch actions as easily as a higher-level component like `App` or `Score`**.

Most of the Redux store logic is implemented in boardSlice.js. This includes initializing the state, the reducers, and the action creators.

The application state is an array of 12 objects with each object representing a card:

```javascript
// card object
{
  id: uniqueID, 
  contents: wordString, 
  visible: visibleBoolean, 
  matched: matchedBoolean
}
```