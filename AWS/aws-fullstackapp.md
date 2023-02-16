# Amplify

## Getting started in the AWS Console
- AWS Amplify service console

Option 1:
- build an app

Option 2:
- Hosting
    - hosting a built app

## Steps
1. Select a repository to link 
2. Select Repo
3. Build Settings - can leave as is
4. Save and deploy
    - will run the build and once it's built, see a thumbnail preview

## Initializing a local amplify app

### amplify configure
1. install aws-amplify/cli globally 
2. Configure the AWS CLI
    - `amplify configure` opens the AWS console - sign in
    - specify a region
    - create an IAM user in console => opens the IAM dash in the AWS console preconfigured w/ the username specified in the CLI
    - click next permissions => next tags => next review
    - creates an access key, and a secret access key. **only given once, to save, download the CSV file**
    - paste the keys in the prompt
    - prompted to update profile name, can leave as default

## deploying a backend
1. backend environments => get started => launch studio
2. local setup instructions => copy the cli code into the root of your project

```bash
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building javascript
? What javascript framework are you using react
? Source Directory Path:  src 
? Distribution Directory Path: build
? Build Command:  npm run-script build
? Start Command: npm run-script start
? Do you plan on modifying this backend? Y
```

## AWS Amplify APIs

### Key concepts
Amplify libraries – The Amplify libraries allow you to interact with AWS services from a web or mobile application.  

Authentication – In software, authentication is the process of verifying and managing the identity of a user using an authentication service or API.  

1. Install amplify libraries - `npm install aws-amplify @aws-amplify/ui-react`
We will need two Amplify libraries for our project. The main aws-amplify library contains all of the client-side APIs for interacting with the various AWS services we will be working with and the @aws-amplify/ui-react library contains framework-specific UI components. Install these libraries in the root of the project.
2. `amplify add auth`
```js
? Do you want to use the default authentication and security configuration? Default configuration
? How do you want users to be able to sign in? Username
? Do you want to configure advanced settings? No, I am done.
```
3. Deploy the auth service `amplify push --y` now that it's configured locally, delpoy

## Configure the react proj with amplify resources

### index.js
```js
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);
```

### app.js
```js
import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);
```
## test locally

Open the AWS console:

App settings > Build Settings 
- modify to add the backend section
```js
version: 1
backend:
  phases:
    build:
      commands:
        - '# Execute Amplify CLI with the helper script'
        - amplifyPush --simple
frontend:
  phases:
    preBuild:
      commands:
        - yarn install
    build:
      commands:
        - yarn run build
  artifacts:
    baseDirectory: build
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

Scroll down to build image settings => choose edit 
- select 'Add package version override' dropdown and select **Amplify CLI**

Next Update the frontend branch and point to stage:
    - point to backend
    - make sure role for backend service has been created
        - create role => amplify backend
        - general settings connect role to whole app
        - build
        - now can push and watch for changes

## Deploy an API
> can be GraphQL or REST API

- `amplify add api` => this adds an api, will get a prompt of questions
- will create the schema in the amplify folder
- save the file, this will create the schema for the DynamoDB
- `amplify push --y` will start the deploy
    - creates the API, table, local files
    - view it `amplify console api` will open up, select respected GraphQL or REST

## Example code

```js
import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { listNotes } from "./graphql/queries";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "./graphql/mutations";

const App = ({ signOut }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    const notesFromAPI = apiData.data.listNotes.items;
    setNotes(notesFromAPI);
  }

  async function createNote(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      name: form.get("name"),
      description: form.get("description"),
    };
    await API.graphql({
      query: createNoteMutation,
      variables: { input: data },
    });
    fetchNotes();
    event.target.reset();
  }

  async function deleteNote({ id }) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    await API.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    });
  }

  return (
    <View className="App">
      <Heading level={1}>My Notes App</Heading>
      <View as="form" margin="3rem 0" onSubmit={createNote}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="name"
            placeholder="Note Name"
            label="Note Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="description"
            placeholder="Note Description"
            label="Note Description"
            labelHidden
            variation="quiet"
            required
          />
          <Button type="submit" variation="primary">
            Create Note
          </Button>
        </Flex>
      </View>
      <Heading level={2}>Current Notes</Heading>
      <View margin="3rem 0">
        {notes.map((note) => (
          <Flex
            key={note.id || note.name}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
              {note.name}
            </Text>
            <Text as="span">{note.description}</Text>
            <Button variation="link" onClick={() => deleteNote(note)}>
              Delete note
            </Button>
          </Flex>
        ))}
      </View>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default withAuthenticator(App);
```

1. `fetchNotes` - This function uses the API class to send a query to the GraphQL API and retrieve a list of notes.

2. `createNote` - This function also uses the API class to send a mutation to the GraphQL API. The main difference is that in this function we are passing in the variables needed for a GraphQL mutation so that we can create a new note with the form data.
3. `deleteNote` - Like createNote, this function is sending a GraphQL mutation along with some variables, but instead of creating a note, we are deleting a note.

## create a storage service
To add image storage functionality, we'll use the Amplify storage category. You can keep the default selections for most of the options below, but be sure to select the create/update, read, and delete options individually by pressing the spacebar on each before pressing Enter to continue with the prompt.  

- `amplify add storage`
- will recieve questions, choose the oens that fit your needs

## deleting the resources 
Removing individual services

To remove individual services, you can use the Amplify remove command:

amplify remove auth

? Choose the resource you would want to remove: <your-service-name>
Then run the Amplify push command:
`amplify push`
Deleting the entire project

To delete the project and the associated resources, you can run the Amplify delete command:

`amplify delete`