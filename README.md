# React Vite Chat Application

## Description

This project is a React application built with Vite that includes a chat component and box. The chat component allows users to interact with a chat interface, perform searches, and receive responses generated by the OpenAI GPT-3.5 Turbo model.

## Features

- Create New Chats
- View Chat History
- Clear Chat History
- Generate Responses with GPT-3.5 Turbo
- Modal for Clear Chat Confirmation

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-project.git
    ```

2. **Change to the project directory:**

    ```bash
    cd your-project
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

## Usage

1. **Start the development server:**

    ```bash
    npm run dev
    ```

2. **Open your browser and navigate to [http://localhost:3000](http://localhost:3000).**

## Components

### ChatComponent

- Manages the overall structure of the chat application.
- Includes a sidebar with chat history and buttons for creating new chats, clearing history, and exiting.

### ChatBox

- Handles the chat box interface where users input queries, receive responses, and interact with suggestions.
- Utilizes the OpenAI GPT-3.5 Turbo model for generating responses.
- Provides options to clear the chat and stop generating responses.

## API Integration

The project integrates with the OpenAI API for generating responses. Make sure to replace the placeholder API key in the `handleSearch` function in the `ChatBox` component with your actual OpenAI API key.

```javascript
const apiKey = 'your-openai-api-key';
