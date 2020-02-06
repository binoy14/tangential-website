---
title: Using Ex-Navigation in React Native
description: >-
  Navigation in React Native is confusing for someone new to React Native. There
  are many different routing solutions in React Native…
date: "2017-01-14T00:17:59.852Z"
categories: []
keywords: []
---

Navigation in React Native is confusing for someone new to React Native. There are many different routing solutions in React Native, starting from [NavigatorExperimental](http://facebook.github.io/react-native/releases/0.40/docs/navigation.html) to [Ex-Navigation](https://github.com/exponent/ex-navigation). In this post I will be using Ex-Navigation to setup simple routing.

The first step, just as any react native project, is to setup project using the React Native Cli.

```bash
react-native init exnavexample
```

Once inside the folder we will install ex-navigation.

```bash
yarn add @exponent/ex-navigation babel-preset-react-native-stage-0
```

or using npm

```bash
npm i --save @exponent/ex-navigation babel-preset-react-native-stage-0
```

we will also need to edit the *.babelrc* and replace it with the following.

```bash
{
"presets": \["react-native-stage-0/decorator-support"\]
}
```

Next thing we will do is a create three different files. _App.js_, _Home.js_ and _About.js_ and update the index.android.js and index.ios.js to the following code. This will basically display the same application on android and ios.

```jsx
import App from "./App";

export default class exnav extends Component {
  render() {
    return <App />;
  }
}
```

In the App.js we will add the following code where we will setup the ex-navigation.

```jsx
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from "@exponent/ex-navigation";
import HomePage from "./Home";
import AboutPage from "./About";

const Router = createRouter(() => ({
  home: () => HomePage,
  about: () => AboutPage,
}));

class App extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute("home")} />
      </NavigationProvider>
    );
  }
}

export default App;
```

We import **createRouter, NavigationProvider** and **StackNavigation** from `@exponent/ex-navigation.` The first step is we create a Router where we will register all the routes of our application, in this case just home and about which will return the component for Home and About.

In the **NavigationProvider** we will pass the the _Router_ we created as a router prop and it will have a **StackNavigation** as a child where we will have the initialRoute as home. As the name suggests initial route is the first route the application will launch at. In this example we are using StackNavigation but Ex-Navigation also supports _Tab Navigation_ and _DrawerNavigation_

![Application flow](https://cdn-images-1.medium.com/max/800/1*VtI-jrhwA99RPmUpNO1I0Q.gif)

This is how the application is going to be working, from home we will be able to go to the about page and back. This is a simple application but it will help demonstrate on using Stack Navigation.

In Our Home.js we will have the following code.

```jsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.goToAbout = this.goToAbout.bind(this);
  }

  static route = {
    navigationBar: {
      title: "Home",
    },
  };

  goToAbout() {
    this.props.navigator.push("about");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from Home Page</Text>
        <Text onPress={this.goToAbout}>Go to About</Text>
      </View>
    );
  }
}

export default Home;
```

The first step is create a static route where in the navigationBar object we will add the title for the route. There are many other options available in the navigationBar which can be used as per the need of the application.

- `title` - a string or a function that returns a string. The function is provided with the route params as the first argument.
- `titleStyle` - Text.propTypes.style object to use for the title.
- `backgroundColor` - the background color to use for the `navigationBar`.
- `tintColor` - the color to use for the title text and back button or drawer button icons.
- `visible` - boolean that indicates whether the `navigationBar` should be visible for this route.
- `translucent` - iOS and Exponent only, use background blur on the `navigationBar`, like in the Apple Podcasts app, for example.
- `borderBottomWidth` - the width of the bottom border
- `borderBottomColor` - the color of the bottom border
- `renderLeft` - a function that should return a React component that will be rendered in the left position of the `navigationBar`.
- `renderTitle` - a function that should return a React component that will be rendered in the title position of the `navigationBar`.
- `renderRight` - a function that should return a React component that will be rendered in the right position of the `navigationBar`.
- `renderBackground` - a function that should return a React component that will be rendered in the background of the `navigationBar`.

To change the route we will use the navigator prop and call the push function with the name of the route. Note: To use the name, the route needed to be registered with the _createRouter_ function created earlier. You can also do `this.navigator.push(Router.getRoute('about'))`

The code in the _About.js_ will be very similar to our Home file with few changes as below.

```jsx
static route = {
  navigationBar: {
    title: "About",
  }
}

goBack() {
  this.props.navigator.pop();
}

render() {
  return (
    <View style={styles.container}>
      <Text>Hello from About Page</Text>
      <Text onPress={this.goBack}>Go Back</Text>
    </View>
  )
}
```

We changed the function to instead go back to a previous route by simply calling the _this.props.navigator.pop()_ which will simply go to the previous route it came from. Note that we can also call _this.props.navigator.push(‘home’)_ but this will push the home route in the stack instead of doing a back animation. We do not need to add any code for the back button since Ex-Navigation handles it out of the box.

If you liked this post please share and follow for more posts on React and React Native.
