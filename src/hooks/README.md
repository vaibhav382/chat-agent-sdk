Contentstack Chat SDK
A lightweight, plug-and-play React component library for adding a powerful, AI-driven chatbot to any website using Contentstack as a content source.

This SDK provides a beautiful chat widget that connects to a custom backend API, allowing you to create domain-specific chat agents powered by your own Contentstack data.

Features
Easy Integration: Add a full-featured chat widget to your React app with a single component.

Customizable: Connects to your custom LLM Model API backend.

Lightweight: Minimal dependencies and a small bundle size.

Styled by Default: Comes with clean, modern styling that is scoped to prevent conflicts.

Installation
Install the package using npm or yarn:

npm install contentstack-chat-sdk

or

yarn add contentstack-chat-sdk

Usage
To add the chat widget to your application, import the ChatWidget component and its required stylesheet.

// In your main App.js, App.tsx, or any other component

import React from 'react';
import { ChatWidget } from 'contentstack-chat-sdk';

// Don't forget to import the stylesheet!
import 'contentstack-chat-sdk/dist/style.css';

function App() {
  return (
    <div>
      <h1>My Awesome Website</h1>
      <p>This is the main content of my page. The chat widget will appear in the corner.</p>

      <ChatWidget
        apiEndpoint="[https://your-backend-api.com/chat](https://your-backend-api.com/chat)"
        collectionName="my-unique-collection-name"
      />
    </div>
  );
}

export default App;

Component Props
The ChatWidget component accepts the following props:

Prop

Type

Required

Description

apiEndpoint

string

Yes

The full URL of the /chat endpoint on your LLM Model API backend.

collectionName

string

Yes

The unique identifier for your indexed Contentstack data source, as configured on your backend.

openerIcon

ReactNode

No

An optional React node (e.g., an SVG icon) to replace the default chat opener button icon.

widgetTitle

string

No

The title displayed at the top of the chat window. Defaults to "Chat Assistant".

How It Works
This SDK is the frontend component of a larger system. It sends user messages to the apiEndpoint you provide. That backend is responsible for:

Retrieving relevant content from your indexed Contentstack data (identified by collectionName).

Constructing a prompt for a Large Language Model (LLM).

Streaming the LLM's response back to the widget.

This SDK was built as part of the Contentstack Challenge.