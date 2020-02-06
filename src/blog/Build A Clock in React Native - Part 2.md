---
title: Build A Clock in React Native — Part 2
description: >-
  Before reading this article, please check out Part 1 where we setup the
  application code and installed the packages we will be using in…
date: "2016-12-27T07:33:41.454Z"
categories: []
keywords: []
---

Before reading this article, please check out [Part 1](https://binoy.io/blog/build-a-clock-in-react-native-part-1) where we setup the application code and installed the packages we will be using in this project.

### Styling

When I am making an application what I usually like to do is setting up the UI first, then adding the functionality. There is no right or wrong way to do it but this usually ends up working for me. Following that idea we will first setup the UI for the clock then add the functionality.

Inside the _App.js_ in the _app_ folder. Replace the render function with the following as well as add styles.

```jsx
import { View, Text, StatusBar } from "react-native";
import KeepAwake from "react-native-keep-awake";

const styles = Stylesheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  timeText: {
    color: "#999999",
    fontSize: 150,
  },
  dateText: {
    color: "#999999",
    fontSize: 40,
  },
});

return (
  <View style={styles.container}>
    <StatusBar style={{ backgroundColor: "transparent" }} />
    <Text style={styles.timeText}>...</Text>
    <Text style={styles.dateText}>...</Text>
    <KeepAwake />
  </View>
);
```

We are creating a View with two text items, one to display the time and another for displaying the date. We also also setting the Status Bar color to transparent so our application works in full screen.

The KeepAwake library, as the name suggests, stops the application from having the tablet go to sleep.

### Functionality

We will be using the moment library so it makes it easier to format the date. We definitely do not need moment to make out application work but it makes it easier to format date as per out need.

The first step would be set the initial state. In the constructor for _App.js_ add the following.

```js
constructor(props) {
  super(props);

  this.state = {
    time: moment().format("LTS"),
    date: moment().format("LL"),
  };
}
```

The magic for making the clock working is the beauty of how React works. Every time the state is change React will re-render the component with the new state. To make the clock work we will have to update the time every second using a _setTimeout_ function.

Create a _componentDidMount_ function where we will write the setTimeout function.

```js
componentDidMount() {
  setTimeout(() => {
    this.setState({
      time: moment().format("LTS"),
      date: moment().format("LL"),
    })
  }, 1000);
}
```

This function is setting the date and time as state every one second which will re-render our view.

The final code for **App.js** is listed below.

In an application where there are multiple views it is important to clear the timeout when the component is unmounted. In this application there is only one view so there is not really a need to clear the timeout.
