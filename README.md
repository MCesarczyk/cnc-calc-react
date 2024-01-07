# CNC-parameters-calc

<img src="%PUBLIC_URL%/../public/CNC.jpg" width="500" alt="CNC machining"/>

## Simple calculator of cutting parameters for CNC and traditional machininsts.

### Demo:

[https://mcesarczyk.github.io/cnc-calc-react/](https://mcesarczyk.github.io/cnc-calc-react/)

### Brief description:

Since my first profession is **CNC Programming** I use this formulas in my day to day work.
I plan to add next functionalities with time.
So, don't hesitate to contact me on: michal.cesarczyk@gmail.com to propose another one.

### Features:

1. Calculation forms:

   - Drilling/milling:

     - linear cutting speed in function of diameter and spindle speed
     - tool rotational speed in function of diameter and surface speed
     - feed rate in function of spindle speed and:
       - feed per revolution
       - feed per tooth, numer of tooth

   - Threading/tapping:
     - feed rate for tapping in function of spindle speed and threading tool pitch  
       (pitch value is selected from list according to tool diameter)

2. Language switching between english and polish.

![language versions](src/assets/images/language_switching.gif)

3. Memory mode to transfer values beetween forms.

- below is default forms behaviour:

![memory mode off](src/assets/images/default_bahaviour.gif)

- and with memory mode active:

![memory mode on](src/assets/images/memory_mode.gif)

And this is how it works:

![memory mode demo](src/assets/images/using_memory_mode.gif)

### Used technologies

1. html
1. CSS
1. BEM
1. JavaScript/ES6: const variables, arrow functions, arrays, objects
1. Immutability
1. React: hooks, controlled components
1. React Router

I've decided to use UseContext hook to manage globa state of app, but in future updates I plan to switch to Redux, since there is more variables to handle globally.
Newly added memory mode function inclined me to start thinking about switching to Redux.\
This would, beside obvious benefits of Redux as code clarity and raliability, allow to keep values in fields even when calculations wasn't perform yet.\
But in the first place, I'd like to replace snapshot tests with solid unit and integration tests to avoid functional regression errors.

### Areas of future improvement:

1. Switching to Redux since more variables become propagated in context and more code repeats in all forms.
2. Squash app into widget form to enable embedding in other applications/websites.
3. Use some API data to obtain material related data to automatically propose cutting speeds and feeds.

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run e2e`

Launches end to end test in console using cypress:
https://docs.cypress.io/guides/overview/why-cypress

### `npm run e2e:preview`
Launches end to end tests of choice in Chrome, Firefox or Electron environment
https://docs.cypress.io/guides/end-to-end-testing/testing-your-app

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
