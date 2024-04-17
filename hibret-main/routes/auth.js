import express from 'express';

const router= express.Router();

// Replace with your Payload CMS URL and API key
const payloadUrl = 'http://localhost:3000/api';
const apiKey = 'e5b0839bea8e4418fb6579f';


router.post('/', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Prepare Payload CMS login request with your credentials
      const response = await axios.post(`${payloadUrl}/users/login`, {
        email,
        password,
        headers: {
          Authorization: `Bearer ${apiKey}`, // Include API key in header
        },
      });
  
      // Handle successful login
      if (response.status === 200) {
        // You can further process the response data (e.g., filter sensitive fields)
        // before sending it back to the frontend.
        res.json(response.data);
      } else {
        // Handle login errors (e.g., invalid credentials)
        res.status(response.status).json({ message: 'Login failed' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  

  export default router;