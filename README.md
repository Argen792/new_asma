# Digital Greeting Card

This is a simple, screen-by-screen digital greeting card built with Svelte, TypeScript, and Vite. The application displays a sequence of ten screens, each with a unique message or design, to create a thoughtful and interactive experience for the user.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You will need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1.  Clone the repo:
    ```sh
    git clone https://github.com/your_username/your_project_name.git
    ```
2.  Install NPM packages:
    ```sh
    npm install
    ```

### Running the Application

To run the application in development mode, use the following command. This will start a local development server.

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser. The page will reload if you make edits.

## Project Structure

The main application logic is contained within the `src` directory.

-   `src/main.ts`: The entry point of the application, where the root Svelte component is mounted.
-   `src/App.svelte`: The main Svelte component that acts as a screen manager. It controls the flow of the greeting card, displaying one screen at a time.
-   `src/lib/`: This directory contains all the individual screen components, from `Screen1.svelte` to `Screen10.svelte`. Each component is a self-contained screen with its own styling and content.
-   `public/`: This directory contains static assets that are publicly accessible.

## Usage

The application is designed to be navigated by clicking anywhere on the screen or by pressing the `Enter` or `Space` key. Each interaction advances the user to the next screen in the sequence.
