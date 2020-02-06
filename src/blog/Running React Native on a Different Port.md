---
title: Running React Native on a Different Port
description: >-
  If you are trying to run react native application on a port other than 8081,
  it’s not an easy process. The reason for that is because…
date: "2017-06-01T04:43:29.293Z"
categories: []
keywords: []
---

_If you are trying to run react native application on a port other than 8081, it’s not an easy process. The reason for that is because internally the ports are hard coded on the Android and iOS projects. There is currently an_ [_open issue_](https://github.com/facebook/react-native/issues/9145) _which would have the up-to-date instructions._

**_Note that this guide is only valid for iOS._**

### Getting Started

This steps can be used either on a new or an existing project. In this post we will be assuming you already have a react native project. If you don’t have an existing project then you can create one using [react-native-cli](https://www.npmjs.com/package/react-native-cli).

The next steps involve changing some files using Xcode. First we need to change the ports on packager scripts. Navigate to Libraries and select React.xcodeproject on the side.

![Packager Ports](https://cdn-images-1.medium.com/max/800/1*KKK3AFdmb_7yKl3SzJbvQA.png)

Next step is to change the ports in _RCTBundleURLProvider.m._ It is located in Libraries > React > Base

![](https://cdn-images-1.medium.com/max/800/1*tSo3b9ybZvV9FDSJ4QK09Q.png)

The next step is changing the port in _RCTDevSettings.mm_ file which is located in React > Modules

![](https://cdn-images-1.medium.com/max/800/1*COjvQVd69kxAYFheJM0O5Q.png)

The final change is to change the port in RCTWebSocketExecutor.m which is located in Libraries > RCTWebSocket.xcodeproj > RCTWebSocketExecutor.m

![](https://cdn-images-1.medium.com/max/800/1*W_ic0pJ4Tz5rkKFBllTG8Q.png)

Finally when running the packager we need to specify what port it should be running on this can be done using following command

```bash
react-native start --port \[port to run on\]
```

### Conclusion

This process could be easier if the port were not hard coded and hopefully this process will be much easier in the future versions react native.

_If you liked this, click the 💚 below and share. Follow for more content._
