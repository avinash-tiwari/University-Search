# Technologies used
* React
* SASS
# Project structure
* **Api.js** will consist of all the APIs in use in the application. Since, we are not using any backend, I've done some mocking for it.
* **components/dumb** will be having all the dumb components, that is, the components which are just dumb and not having any logic attached.
* **components/smart** will be having smart components, that is, the one with some logic, generally the container components, using dumb components inside it.
* **common.scss** will consist of all the design tokens, classes like display property, font-sizes, colors. These are the styles that can be used across the whole project.
* Each component will be having a folder with the .js file and a .scss file. The .scss file will be there for styling the component only.

# Project setup
Go to the root directory and then open the terminal and run **yarn** this will install all the packages required for the project to run. Then you can simply run the project by running **yarn start**.
