---
title: Simple Carousel in React Native
description: >-
  In this tutorial we will be building a simple carousel. As a change we will be
  using snack to build this instead of setting a new react…
date: "2017-07-06T00:55:32.216Z"
categories: []
keywords: []
---

In this tutorial we will be building a simple carousel. As a change we will be using snack to build this instead of setting a new react native project. Below is the final version of the application we will be building.

![Scan in the Expo App](https://cdn-images-1.medium.com/max/800/1*wxeL66mJjwdUdurk7SDsXg.png)
Scan in the Expo App

You can scan the QR code in the expo app to open this app in your phone or alternatively you can open the link below in your browser and see the Android and iOS simulator online.

[**Simple Carousel**
\_Try this project on your phone! Use Expo's online editor to make changes and save your own copy.\_snack.expo.io](https://snack.expo.io/HJwkkLffW "https://snack.expo.io/HJwkkLffW")[](https://snack.expo.io/HJwkkLffW)

Now that is out of the way, lets get to to building the carousel component. First lets take a look at the code below which builds the carousel component.

The carousel is nothing more than a ScrollView component. There are three props that make this happen:

- **_Horizontal_**: As the name suggests, it makes it scroll horizontal instead of vertical.
- **_pagingEnabled_**: This scroll is based on the size of the view inside. In our case, if we set the image width to the size of the view container, the scroll action will change to next image.
- **_showsHorizontalScrollIndicator_**: Setting this to false, will hide the scroll bars.

Inside the ScrollView we are mapping over the _images_ props providing and returning images.

```jsx
{
  images.map(image => <Image style={styles.image} source={image.source} />);
}
```

Finally we are wrapping it inside a _View_ with a specific width and height, this is because when we are consuming this, we can place in a specific container instead of taking the whole page. _Note: To make this more reusable, it will be useful to provide props to override the width and height of the view._

This concludes the tutorial on building a simple carousel. Comment and let me know if you would like to see more advance stuff such as setting a default index, infinite scrolling and anything else.

_If you liked this, click the 💚 below and share. Follow for more content._
