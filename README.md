# moonstar

### how to run the project

1. open a terminal to clone the repo
2. `git clone https://github.com/JohnGeorgiadis/moonstar.git`
3. cd into the project
4. `yarn` or `npm install`
5. `yarn start` or `npm start`

The project will then run on http://localhost:3000/

### how to run the tests

1. have the project running as mentioned on the `how to run the project` section.
2. On a new terminal instance run `yarn cypress` or `npm run cypress`
3. A new window will appear, and you will be able to interact with the cypress gui.

### inspect the code of the project

If you just want to inspect the code then you can use github1s
https://github1s.com/JohnGeorgiadis/moonstar

### assumptions

Assumptions:
1. I used the api that you provided. Unfortunately I was not able to find a nice way to include pagination. If I had more
time I would have created a backend with the ability to add pagination for the posts (probably infinity scrolling).

2. I saw the data structure of the comments and post and maybe I missed some relation between them too.

3. I assumed that we do not have a username for comments but user email only.I used a similar design language with material
UI.