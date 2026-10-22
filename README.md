# ReNaAI Backend

A TypeScript and Express backend for ReNaAI's weekly productivity coaching endpoint. It sends the submitted data to an AI coach powered through the Groq SDK and returns the generated response.

## API

### Generate a weekly coaching response

`POST /api/weekly-productivity`

Send the user data as a JSON request body. The endpoint returns the generated coaching response. If the AI service fails, it responds with status `500` and an error message.

## Requirements

- Node.js
- A Groq API key

## Setup

Install dependencies:

```sh
npm install
```

Create a `.env` file in the project root:

```env
GROQ_API_KEY=your_groq_api_key
PORT=3000
```

Build and start the server:

```sh
npm run build
npm start
```

The server listens on port `3000` by default. Set `PORT` to use a different port.

## Development

```sh
npm run build
```
