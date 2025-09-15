# Contentstack Chat SDK
A lightweight, plug-and-play React component library for adding a powerful, AI-driven chatbot to any website using Contentstack as a content source.

This SDK provides a beautiful chat widget that connects to a custom backend API, allowing you to create domain-specific chat agents powered by your own Contentstack data.

## Features
1. **Easy Integration:** Add a full-featured chat widget to your React app with a single component.

2. **Customizable:** Connects to your custom LLM Model API backend.

3. **Lightweight:** Minimal dependencies and a small bundle size.

4. **Styled by Default:** Comes with clean, modern styling that is scoped to prevent conflicts.

## Installation
- Install the package using npm or yarn:

<pre>npm install contentstack-chat-sdk</pre>

or

<pre>yarn add contentstack-chat-sdk</pre>

## Usage
- To add the chat widget to your application, import the ChatWidget component.

In your main App.js, App.tsx, or any other component

<pre>import React from 'react';
import { ChatWidget } from 'contentstack-chat-sdk';

function App() {
  return (
    <div>
      <h1>My Awesome Website</h1>
      <p>This is the main content of my page. The chat widget will appear in the corner.</p>
      <ChatWidget
      />
    </div>
  );
}

export default App;</pre>

**Component Props**
The ChatWidget component accepts the following props:

- apiEndpoint - The full URL of the /chat endpoint on your LLM Model API backend.

- agent key - The unique identifier for your indexed Contentstack data source, as configured on your backend.


## How It Works
This SDK is the frontend component of a larger system. It sends user messages to the apiEndpoint you provide. That backend is responsible for:

- Retrieving relevant content from your indexed Contentstack data (identified by collectionName).

- Constructing a prompt for a Large Language Model (LLM).

- Streaming the LLM's response back to the widget.

This SDK was built as part of the Contentstack's Techsurf 2025.
