const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port

// Replace with your full name and date of birth (YYYYMMDD format)
const userId = 'your_full_name_yyyymmdd';

app.use(bodyParser.json()); // Parse incoming JSON data

app.post('/bfhl', (req, res) => {
  const { inputArray } = req.body;

  if (!inputArray || !Array.isArray(inputArray)) {
    return res.status(400).json({
      is_success: false,
      message: 'Invalid request: Please provide an array in the request body.',
    });
  }

  const evenNumbers = [];
  const oddNumbers = [];
  const upperCaseAlphabets = [];

  for (const element of inputArray) {
    if (typeof element === 'number') {
      if (element % 2 === 0) {
        evenNumbers.push(element);
      } else {
        oddNumbers.push(element);
      }
    } else if (typeof element === 'string' && element.match(/^[a-zA-Z]+$/)) {
      upperCaseAlphabets.push(element.toUpperCase());
    } else {
      // Handle invalid elements gracefully (e.g., log or skip)
      console.warn(`Ignoring invalid element: ${element}`);
    }
  }

  const response = {
    is_success: true,
    user_id: userId,
    email_id: 'youremail@example.com', // Replace with your email
    college_roll_number: 'your_college_roll_number', // Replace with your roll number (optional)
    even_numbers: evenNumbers,
    odd_numbers: oddNumbers,
    alphabets: upperCaseAlphabets,
  };

  res.status(200).json(response);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
