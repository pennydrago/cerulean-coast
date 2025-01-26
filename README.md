# Cerulean Coast Restaurant

## This is a React single-page application for a restaurant's website.

### Description
This single-page application was built using React, JavaScript, CSS and HTML. It is a website for a fictional restaurant that shows the restaurant's menu and booking form that allows people to submit a booking, which will be displayed on the website.

### Technology stack
- HTML
- CSS
- JavaScript
- React

### Instructions for phase 2 project without json server (to display bookings data in browser only)

1. Install Node.js v16 and set as the default version:
```bash
nvm install 16
nvm alias default 16
nvm use 16
```

2. Update npm:
```bash
npm install -g npm
```

3. Fork and clone this repository (current version) into a local repository on your computer. Navigate into the directory of the local repository.

4. Get and install all the required dependences:
```bash
npm install
```

5. In the terminal, start the server for the application, which will be displayed on `http://localhost:3000`:
```bash
npm start
```

6. To stop the application server:
```bash
ctrl + c
```

### Instructions for phase 2 project using json server (to persist bookings data to db.json data file)

1. Install Node.js v16 and set as the default version:
```bash
nvm install 16
nvm alias default 16
nvm use 16
```

2. Update npm:
```bash
npm install -g npm
```

3. Install JSON server globally on your computer:
```bash
npm install -g json-server
```

4. Fork and clone this repository (at phase-2 tag) into a local repository on your computer. Navigate into the directory of the local repository.

5. Get and install all the required dependences:
```bash
npm install
```

6. Run JSON server to host the application's db.json data file, which will be displayed on `http://localhost:4000`:
```bash
json-server --watch db.json --port 4000
```

7. Open a new terminal. Start the server for the application, which will be displayed on `http://localhost:3000`:
```bash
npm start
```

8. To stop the application server:
```bash
ctrl + c
```

9. To stop the JSON server:
```bash
ctrl + c
```

### Instructions for release of project

1. Ensure local repository is up-to-date with the remote repository:
```bash
git pull
```

2. Create `build` directory, which contains files that can be deployed as a static website:
```bash
npm run build
```

3. Delete `docs` directory.

4. Rename `build` directory to `docs` directory.

5. Check changes to files:
   1. Discard change to CNAME file.
   2. Stage all other changes.

6. Commit changes.

7. Push changes to remote repository.

### Resources
- [Create React App, Getting Started](https://create-react-app.dev/docs/getting-started)
- [Create React App, Folder Structure](https://create-react-app.dev/docs/folder-structure/)
- [web.dev, Add a web app manifest with Create React App](https://web.dev/add-manifest-react/)
- [Google Search Central, Control your snippets in search results](https://developers.google.com/search/docs/appearance/snippet)
- [Gemma Fontane, HubSpot Blog, Full List of Meta Tags, Why They Matter for SEO & How to Write Them](https://blog.hubspot.com/marketing/meta-tags)
- [Solved by Flexbox, Sticky Footer](https://philipwalton.github.io/solved-by-flexbox/demos/sticky-footer/)
- [Chris Coyier, CSS-Tricks, A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Remix/React Router, Quick Start](https://v5.reactrouter.com/web/guides/quick-start)
- [Ibas Majeed, React Router: The Beginners Guide](https://ibaslogic.com/routing-with-react-router/)
- [mdn web docs, background-position](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)
- [mdn web docs, CSS values and units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
- [Remix/React Router, <NavLink>](https://v5.reactrouter.com/web/api/NavLink)
- [Dave Ceddia, Using the image tag in React](https://daveceddia.com/react-image-tag/)
- [Microsoft, Screen sizes and breakpoints](https://learn.microsoft.com/en-us/windows/apps/design/layout/screen-sizes-and-breakpoints-for-responsive-design)
- [mdn web docs, Your first form](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form)
- [mdn web docs, The HTML5 input types](https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types)
- [mdn web docs, HTML attribute: min](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/min)
- [mdn web docs, HTML attribute: size](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/size)
- [Adobe Color, Contrast checker](https://color.adobe.com/create/color-contrast-analyzer)
- [Adobe Color, Color blind safe tool](https://color.adobe.com/create/color-accessibility)
- [mdn web docs, box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
- [Kolade Chris, freeCodeCamp news article](https://www.freecodecamp.org/news/html-horizontal-line-hr-tag-example/)
- [mdn web docs, The Thematic Break (Horizontal Rule) element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr)
- [mdn web docs, cursor](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)
- [Remix/React Router, <Link>](https://v5.reactrouter.com/web/api/Link)
- [answer by Adele, stack overflow](https://stackoverflow.com/questions/58431946/why-does-my-react-router-link-bring-me-to-the-middle-of-a-page)
- [mdn web docs, Window: scrollTo() method](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo)
- [Web Zone, YouTube video](https://www.youtube.com/watch?v=yS9OZyyY4TE)
- [color-hex, #e1d1c1 Color Hex](https://color-hex.org/color/e1d1c1)
- [color-hex, #121212 Color Hex](https://www.color-hex.com/color/121212)
- [Julie K, The Healthy Fish, Perfect Pairings: 5 Refreshing Drink Ideas to Serve With Fish](https://thehealthyfish.com/refreshing-drink-ideas-serve-fish/)
- [Jamie Juviler, HubSpot Blog, What Is a Modal and When Should I Use One?](https://blog.hubspot.com/website/modal-web-design)
- [CodeBucks, DevDreaming, Creating an efficient modal component in React using hooks and portals](https://devdreaming.com/blogs/create-efficient-modal-react-portals)

### Resources - Image credits
- Photo by [Fabio Fistarol](https://unsplash.com/@fabiofistarol?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/vkLv1LP_xCw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
- Photo by [Louis Hansel](https://unsplash.com/de/@louishansel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/MlPD-AzZYMg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
- Photo by [Hermes Rivera](https://unsplash.com/fr/@hermez777?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/k-sTTFdcZek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
- Photo by [David B Townsend](https://unsplash.com/@dbtownsend?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/AnC569NdAJc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
- Photo by [Alyssa Kowalski](https://unsplash.com/@lockandkey?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/kQhCD2q9_XI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
- Photo by [Razvan Cristea](https://unsplash.com/@focuspro?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/V-MaZ44zMLk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
- Photo by [Razvan Mirel](https://unsplash.com/@razvan_mirel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/ufK6dVE4KHA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
- Photo by [Luke Pennystan](https://unsplash.com/@lukepennystan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/09FcOqmi8R0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
- Photo by [13on](https://unsplash.com/@13on?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/z4BJGODf6O4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
- Photo by [Alexandra Kusper](https://unsplash.com/@alexandrakusper?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/88sNfcLB_KM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

### License
None

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
