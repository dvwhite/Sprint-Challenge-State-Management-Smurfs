1. What problem does the context API help solve?

_David_: It helps provide application level (global) access to state. State is then accessible using the useContext hook and contexts.

2. In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

_David_: Actions are JavaScript objects that are consumed by reducers. Reducers are pure functions that are directed by action object's type property to return a copy of state with potential modifications. Redux then updates the state tree (the store) with a copy of the previous state plus those potential modifications. The store, otherwise known as the "state tree" is the JavaScript tree structure (an object) that stores the application state. The store is the single source of truth because it is the sole object representing application level state and can only be modified following a specific set of commands executed in a predefined order (action => reducer => store (state tree) => view). 

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

_David_: The difference is between global and local state. Global state is useful when you want to make data readily accessible without having to pass it up and down potentially complex nested component chains. Global state is what the entire app needs, such as the user's loing state when you need to display either "Login" or "Logout" text on every page. Local state is what just that component needs to have knowledge of. This could be the state storing the text entered in a form field. The submit action would send the state, but while the user is entering data into the input, the input only needs to make that state local to the component.

4. Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

_David_: It's a library that provides the ability to execute asynchronous actions. It allows action creators to have access to dispatch and previous state, and to function asynchronous when the default behavior of Redux is to run synchronously.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

_David_: I'm a big fan of Redux personally because of the functional style and beautiful code. I like that there is a single source of truth in the app, with well-defined steps to update it, and pure functions utilized rather than worrying about global state that could be modified anywhere in the app by anything with access to it.

