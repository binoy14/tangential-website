---
title: Using React-Navigation in React Native
description: >-
  I read about react-navigation and was curious how it compares to
  ex-navigation. In this post I will be creating the same application I…
date: "2017-02-02T04:41:58.158Z"
categories: []
keywords: []
---

I read about [react-navigation](https://reactnavigation.org) and was curious how it compares to ex-navigation. In this post I will be creating the same application I created in my previous post about [ex-navigation](https://blog.binoy.io/ex-navigation-in-react-native-2f30d21d62d9#.4mabhjhnl) but using react-navigation instead. Do note that react-navigation has taken a lot of inspiration from ex-navigation and NavigatorExperimental hence it does have similar APIs. React-navigation is still in beta and API’s may change up to the final release.

Like any other react native project using the react-native-cli create a new react native project.

```bash
react-native init reactnavigationexample
```

We will install react-navigation by running the following command

```bash
yarn add react-navigation

or

npm install --save react-navigation
```

Now create a new file called _NavigationContainer.js_

```jsx
import React from "react";
import { StackNavigator } from "react-navigation";
import HomeScreen from "./HomeScreen";
import AboutScreen from "./AboutScreen";

const navigationContainer = StackNavigator({
  Home: { screen: HomeScreen },
  About: { screen: AboutScreen },
});

export default navigationContainer;
```

We will be using _StackNavigator_ from _react-navigation_ and define a new constant with the routes in our application.

In the _HomeScreen.js_ we will use the following code.

```jsx
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation: { navigate } }) => (
  <View>
    <Text>Home Screen</Text>
    <TouchableOpacity onPress={() => navigate("About")}>
      <Text>Go to About</Text>
    </TouchableOpacity>
  </View>
);

HomeScreen.navigationOptions = {
  title: "Home",
};

export default HomeScreen;
```

Using ES6 Destructuring syntax (which is equivalent to `props.navigation.navigate`) we call the navigate function and pass the name of the route we want to navigate to. This name is the key of the routes defined in the StackNavigator function in the _NavigationContainer.js_. Next thing is we will create a new file _AboutScreen.js._

```jsx
import React from "react";
import { View, Text } from "react-native";

const AboutScreen = () => (
  <View>
    <Text>About Screen</Text>
  </View>
);

AboutScreen.navigationOptions = {
  title: "About",
};

export default AboutScreen;
```

_navigationOptions_ are set of options that are provided for the header such as the title, adding right button and more. Check out the [https://reactnavigation.org/docs/](https://reactnavigation.org/docs/) for more information.

react-navigation is quite similar to ex-navigation and removes the complexity and boilerplate code that NavigationExperimental has.

If you like the content and want more content on React or React Native be sure to follow me.
