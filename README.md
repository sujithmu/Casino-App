# Project Title - Casino-App
This project is a responsive web application built with React and TypeScript. Using which users can login and play casino games.


## Technologies Used
**React**: A JavaScript library for building user interfaces.
**TypeScrip**t: A strict syntactical superset of JavaScript, adding optional static typing.
**Vite**: Build tool that creates and loads react applications faster than CRA (Create React App).
**Vitest**: Vitest is a JavaScript unit testing framework.

## Project Structure
This project is designed with a user-friendly interface and consists of several key components

1. **Login Page**: Is the entry point of the application. 
2. **Games List page**: Screen where user can find complete list of games available. Users can search.
3. **Games Page**: On Selecting a particular game users will be redirected to that selected games screen.

## Key Features
1. **Semantic UI**: Semantic UI React provides a way to compose React components through the as prop. It allows composing component features and props without adding extra nested components.
2. **Reusable Components, Hooks**: The project is structured to promote reusability, with common functionality extracted into reusable components and hooks.

## Testing
Unit testing is configure using **Vitest** which is a JavaScript unit testing framework.

## Error Handling
**Error Boundary**: This project uses Error Boundaries provided by React for better error handling. Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

## Performance Optimization
**React.lazy**: This project uses React.lazy for code splitting by route. React.lazy function lets you render a dynamic import as a regular component. It helps to load components lazily as they are rendered, which can significantly improve performance in larger apps.

## Running the Project Locally
To run the project locally:

1. Clone the repository to your local machine.
2. Navigate to the project directory in the terminal.
3. Run **npm install** to install the project dependencies.
4. Run **npm run dev** to start the frontend development server. Is should open up in 'http://localhost:5173/'
5. Run unit tests using **npx vitest** from the root of the project.
