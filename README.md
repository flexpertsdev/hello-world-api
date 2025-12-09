# Hello World API

A simple serverless API that returns a greeting, deployed on Vercel.

## Pipeline Description

1. **HTTP Trigger**: Receives an incoming GET request.
2. **Return JSON**: Returns a JSON object containing a "Hello World" message and echoes any query parameters.

## Project Structure

- `api/index.js`: The main entry point for the Serverless Function.
- `package.json`: Project configuration and scripts.

## Setup & Deployment

### Prerequisites

- [Node.js](https://nodejs.org/) installed.
- [Vercel CLI](https://vercel.com/docs/cli) installed (`npm i -g vercel`).

### Local Development

1. Install dependencies (if any are added later):
   ```bash
   npm install
   ```

2. Run the local development server:
   ```bash
   vercel dev
   ```

3. Open your browser or use curl to test:
   ```bash
   curl "http://localhost:3000/api?name=Developer"
   ```

### Deploy to Vercel

1. Run the deploy command:
   ```bash
   vercel deploy
   ```

2. Follow the prompts to link the project to your Vercel account.

## Usage Example

**Request:**
`GET /api?name=Vercel`

**Response:**
```json
{
  "message": "Hello, Vercel!",
  "timestamp": "2023-10-27T10:00:00.000Z",
  "received_params": {
    "name": "Vercel"
  }
}
```