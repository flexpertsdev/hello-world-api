/**
 * Vercel Serverless Function Handler
 * 
 * Pipeline Step 1: HTTP Trigger (GET)
 * Pipeline Step 2: Return JSON Greeting
 */
export default function handler(req, res) {
  try {
    // 1. Validate HTTP Method (Step 1: HTTP Trigger)
    if (req.method !== 'GET') {
      return res.status(405).json({
        error: 'Method Not Allowed',
        message: 'Please use GET requests for this endpoint.'
      });
    }

    // Extract query parameters
    const queryParams = req.query || {};
    const name = queryParams.name || 'World';

    // 2. Construct Response (Step 2: Return JSON)
    const responsePayload = {
      message: `Hello, ${name}!`,
      timestamp: new Date().toISOString(),
      received_params: queryParams
    };

    // Send response
    return res.status(200).json(responsePayload);

  } catch (error) {
    // Robust Error Handling
    console.error('Runtime Error:', error);
    return res.status(500).json({
      error: 'Internal Server Error',
      message: error.message || 'An unexpected error occurred processing the request.'
    });
  }
}