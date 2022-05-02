# Challenge for TeamWay

In this challenge I created a quizzes application where you can create and solve quizzes for the moment only the option to solve quizzes is implemented, in the application I created 2 quizzes one about a personality test as indicated in the instructions of the challenge and another shorter math

For reasons of time I was only able to develop the mobile version, for PC I modified the project a bit, here are the project links for mobile and desktop, I recommend using the links with these devices for a better experience:

- **mobile** -> [Mobile App](https://cerulean-pudding-817c42.netlify.app/)
- **desktop** -> [Desktop App](https://aesthetic-basbousa-6bfce6.netlify.app/)

In a few days I will convert this app into an Android app using Cordova, to have a native app experience.

# Stack

The stack that I chose for this project that seems to me so far the most modern, professional and scalable within the vuejs environment is:

- Vue.js 3
- Vue-class-component
- Vue-router
- Vuex
- Typescript
- Sass
- Pug
- PWA
- Jest
- Cypress
- i18n
- Eslint(Airbnb)

I also thought it was a good option to use vue 3 with composition-api but vue-class-component is much more friendly with typescript. Due to time issues, I could not separate the store into modules, so the project is centralized in a single main store :(.

# Design

To develop this project I chose a professional design of a quiz app, as you can see:

![Screenshot_5](https://user-images.githubusercontent.com/16966767/166191704-e7c88793-133a-4881-80e0-4c87365851a4.png)

Basically it is a mobile application, for desktop limit the size so that it is only visible as a mobile version, for reasons of time I could not add the responsive version for tablets and computers.

![image](https://user-images.githubusercontent.com/16966767/166192214-fd8790f0-341c-44c9-b0d2-293f24b9b861.png)

In the part of the description of the project I leave 2 links of the project to enter this from desktop and cell phone, for a better experience I recommend using the links on the indicated devices.

# Project

## SASS

I used BEM standar for the name of the diferent classes of the elements in the project.

## Vue

As I mentioned use vue-class-component because it is more typescript friendly and allows to implement some complex js features inside vue more easily.

I also forgot to mention that the app has support for multiple languages with the i18n library.

## PWA

In addition, the project was developed as a pwa so you can see the main features of the project offline, I did not have time to take the API data to firestore to make them persistent, so for the moment it loads the main features of the project but not the data .

## Unit testing

The unit tests were carried out with jest and typescript, in total there were 7 test suites, 26 unite tests and 6 snapshots, i just tested the critical path of the application, among the different tests there are tests on:

- Asynchronous test for quizService
- Components in Vue
- Router or $router.push
- Vuex (state, getters, mutations, actions)

As you can see all the tests pass satisfactorily:

```
npm run test:unit
```

![Screenshot_3](https://user-images.githubusercontent.com/16966767/166192854-1fe638f0-8f02-4053-a438-17ce4371553f.png)

## E2E testing

Finally, I performed 3 integration tests with cypress to evaluate the correct functioning of the project, these tests perform:

- Test the navigation into the diferents routes in the app.
- Test the solving of the math test.
- Test the solving of the personality test.

As you can see all the tests pass satisfactorily:

```
npx cypress run
```

![Screenshot_4](https://user-images.githubusercontent.com/16966767/166193349-27499287-aff4-4d1d-9d74-666afe39728b.png)

And finally the videos of the integration tests performed by cypress in order.

https://user-images.githubusercontent.com/16966767/166193445-6d7b51a5-6b1c-4d30-824f-756f216874d6.mp4

https://user-images.githubusercontent.com/16966767/166193460-737b8483-ff49-4a02-8e72-4c9c1701977a.mp4

https://user-images.githubusercontent.com/16966767/166193467-23ffc128-b5e3-494e-8137-8d89dff6c98f.mp4

# License

All rigth reserved to @luisangel2895


