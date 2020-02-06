---
title: Uploading Files to Google Cloud Storage
description: Replacing Amazon S3 with Google Cloud Storage
date: "2017-03-02T03:28:32.861Z"
categories: []
keywords: []
---

_On 2/28/2017 Amazon AWS S3 had an outage which affected a lot of websites. This got me thinking if Google Cloud offered a solution which was similar to S3. In this blog I will be creating a simple API where you can upload a file which would upload it to Google Cloud Storage._

_I will be using restify to on the backend and using boilerplate I created, which can be found_ [_here_](https://github.com/binoy14/restify-boilerplate)_._

First clone the boilerplate locally using the following command

```bash
git clone [git@github.com](mailto:git@github.com):binoy14/restify-boilerplate.git GCloudStorage
```

Once inside the folder, we will install google cloud storage’s npm module, which can be found [here](https://www.npmjs.com/package/@google-cloud/storage).

```bash
yarn add @google-cloud/storage
```

or

```bash
npm install --save @google-cloud/storage
```

Before we write any code, we need to configure Google Cloud Storage on [Google Developer Console](http://console.developers.google.com). Follow the following steps to get the Cloud Platform ready for use.

1.  Create a new project on [Google Developer Console](http://console.developers.google.com)

![Create New Project Dialogue](https://cdn-images-1.medium.com/max/800/1*5XaAwjeIjYHhnY5a1DIsZA.png)

2. Enable Google Cloud Storage for your project. This API can be found by clicking on Library in the sidebar and in the searching for storage

![Searching for Google Cloud Storage API](https://cdn-images-1.medium.com/max/800/1*dHt8dDTXuXNAPyErO5fySQ.png)

Click on Enable in the Google Cloud Storage Page

![Enable Google Cloud Storage API](https://cdn-images-1.medium.com/max/800/1*7UtpkYaSeGgbE1iVq2cSCA.png)

3. To use this API we will need to create credentials and to do so we will navigate to credentials page by clicking on **Credentials i**n the sidebar. On the create credentials dropdown choose **service account key** option. And when on create service account page we will choose the below config and download the JSON file inside our project.

![Credentials Page](https://cdn-images-1.medium.com/max/800/1*fHrzKNZMoEcAGBd96b9CMw.png)

![Create Service Account Key Configuration](https://cdn-images-1.medium.com/max/800/1*HvxJV-HbZdHqAGNmm6jQmA.png)

4. Next, we need to create abucket on [Google Cloud Storage](https://console.cloud.google.com/storage). _Note: The name of the bucket needs to be unique_

![Create New Bucket](https://cdn-images-1.medium.com/max/800/1*9tpysqELE6f01stNVE1oAg.png)

5. (Optional) The Final step is to make our files read public so we can return a URL from our API. To do so we need to install Google Cloud SDK using this [link](https://cloud.google.com/sdk/) and run the following command.

```bash
gsutil defacl ch -u allUsers:R gs://your-bucket-name-here
```

Once all the configuration is done we are ready to write code to upload our file to Google Cloud Storage.

First thing first is we are going to add a new route for upload in _src/routes/index.js_ Add the following

```bash
server.post("/user/upload", User.uploadUser);
```

Next thing we need to do is export the uploadUser function in _src/routes/users/index.js_

```js
import getUsers from "./getUsers";
import getUser from "./getUser";
import postUser from "./postUser";
import putUser from "./putUser";
import deleteUser from "./deleteUser";
**import uploadUser from "./uploadUser";**

module.exports = {
  getUser,
  getUsers,
  postUser,
  putUser,
  deleteUser,
  **uploadUser,**
};
```

and finally create a new file called _uploadUser.js_ inside _src/routes/users/_

TLDR; This file is the controller for _/user/upload_ route. This controller receives the file in the request and using streams the file is uploaded to Google Cloud Storage and the public url of the file is returned in the response.

```js
const Storage = require("@google-cloud/storage");
const CLOUD_BUCKET = "your-bucket-name-here";
const storage = Storage({
  projectId: "your-project-id",
  keyFilename: "/path/to/file/downloaded/in/step/3",
});
const bucket = storage.bucket(CLOUD_BUCKET);
```

We will be importing Storage module which we installed previously. We will set the bucket name, projectId and in the keyFileName we will put the path of the file downloaded in step 3 and finally we will create a bucket constant which will be reference to our bucket.

```js
const { file } = req.files;
const gcsname = uuidv4() + file.name;
const files = bucket.file(gcsname);
```

The file object is in located in _req.files. W_e will need to create a unique file name for the file which needs to be uploaded. To do so we will use node’s uuid module to create a unique hash and append the file’s name in the end. Finally we will add the file to out bucket using \_bucket.file(gcsname)_

```js
fs.createReadStream(file.path)
  .pipe(
    files.createWriteStream({
      metadata: {
        contentType: file.type,
      },
    }),
  )
  .on("error", (err) => {
    restify.InternalServerError(err);
  })
  .on("finish", () => {
    res.json({
      success: true,
      fileUrl: `https://storage.googleapis.com/${CLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUDCLOUD\_BUCKET}/${gcsname}`,
    });
  });
```

We will use node’s _fs_ module and pipe createWriteStream which is part of the file function from _google-cloud/storage._ We also set metadata of contentType to information from our file. We will listen to error and finish events from createReadStream. In the error event we will simply return **restify.InternalServerError(err),** which just return a status code of 500. In the finish event we return the fileUrl as the public url of the file. which will be at `https://storage.googleapis.com/CLOUD_BUCKET_NAME/FILE_NAME`

To test this we can create a simple form in HTML using the following code.

```html
<html>
  <head>
    <title>File Upload</title>
  </head>
  <body>
    <form
      action="[http://localhost:3030/user/upload](http://localhost:3030/user/upload)"
      method="POST"
      enctype="multipart/form-data"
    >
      <input type="file" name="file" />
      <button>Submit</button>
    </form>
  </body>
</html>
```

Once the file is uploaded we can go to Google Cloud Storage website and see that our is file there and if we open the link we will be able to download our file as well.

![File on Google Cloud Storage](https://cdn-images-1.medium.com/max/800/1*TBt0GUc-bS213zf25npCKg.png)

This was a simple tutorial on uploading file to Google Cloud Storage. There is a lot of other features provided by the API which are not demonstrated in this blog. Checkout [API Documentation](https://googlecloudplatform.github.io/google-cloud-node/#/docs/storage/0.6.0/storage) for more functions that are available.

_If you liked this, click the 💚 below and share. Follow for more content._
