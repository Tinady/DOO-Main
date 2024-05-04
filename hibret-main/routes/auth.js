const express = require('express');

const router= express.Router();

router.post('/', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Prepare Payload CMS login request with your credentials
      const response = await axios.post(`${process.env.payloadUrl}/users/login`, {
        email,
        password,
        headers: {
          Authorization: `Bearer ${process.env.apiKey}`, // Include API key in header
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