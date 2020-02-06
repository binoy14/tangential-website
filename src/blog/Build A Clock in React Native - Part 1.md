---
title: Build A Clock in React Native — Part 1
description: >-
  For anyone who does not know what React Native is please check here. Image
  below shows the final version of the application running on…
date: "2016-09-09T21:25:09.236Z"
categories: []
keywords: []
---

For anyone who does not know what React Native is please check [here](https://facebook.github.io/react-native/). Image below shows the final version of the application running on android tablet.

![](https://cdn-images-1.medium.com/max/800/1*HJznj-ZLUm-9UK1Pxqo8Zw.png)

### Getting Started

Check out my video on setting up React Native development environment before continuing with this tutorial. The video goes through setting up your machine for running react native application on android and ios emulators.

Once you have everything setup, open terminal and type the following command to create a scaffold of the application using the react native command line tools.

react-native init clock

The command line tools will scaffold the application, install npm modules and setup android and ios folders.

```bash
.
├── **android**
├── **ios**
├── **node_modules
**├── **app**
│ └── App.js
├── index.android.js
├── index.ios.js
└── package.json
```

This application will look and feel the same on both android and ios, we can share all the code for android and ios by writing component in one file. For that we will use the **_App.js_** file located in the _app folder._

### Project Setup

The next step is replacing code in the _index.ios.js_ and _index.android.js_ to the following.

```jsx
import React, { Component } from "react";
import { AppRegistry } from "react-native";

import App from "./app/App";

class clock extends Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent("clock", () => clock);
```

We are importing the App component from App.js file which will be rendered the same on both Android and iOS, instead of maintaining code on two different files.

Finally we will write some boilerplate code inside _App.js_ which, for now, will export the component and display Hello.

```jsx
import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  //...
});

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  }
}
```

We will also be installing some libraries from npm which we will be using later in the project. First library will be [moment](https://www.npmjs.com/package/moment), which is a time parser and manipulating library. The second library will be installing [react-native-keep-awake](https://www.npmjs.com/package/react-native-keep-awake), which will prevent the device from going to sleep. Follow the instructions on the site to install it in the project.

In this part we setup the project and wrote some boilerplate to get everything setup. In the next part we will be writing the actual code to make our clock working. I have also published a video on youtube to build this. Check it out [here](https://youtu.be/XaJb4pP5phk).

**Update**: Check out [Part 2](https://binoy.io/blog/build-a-clock-in-react-native-part-2)
