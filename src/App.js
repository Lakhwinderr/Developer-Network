import React, { useEffect } from 'react'

import { Widget } from '@typeform/embed-react'


const Typeform = () => {
  return <Widget id="H5vg8GDc" style={{ width: '100%', height: "90vh" }} className="my-form" />
}

//fetching the data from the responses api



export default function App() {

  useEffect(() => {
 const apiToken = 'tfp_2umtj7Ji517VXmQsURXkruez8gKn7B9pSWZSGJwc5awC_3stYNKLUrws81k';
const formId = "H5vg8GDc"; // Replace with your Typeform form ID

// Endpoint URL to fetch responses from the Typeform API
const apiUrl = `https://api.typeform.com/forms/${formId}/responses`;

// Fetch Typeform data
fetch(apiUrl, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${apiToken}`,
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    // Process the data received from Typeform API
    console.log(data);
  })
  .catch((error) => {
    console.error('Error fetching Typeform data:', error);
  });

}) 

  return (
    <div>
      <h1>Creating typeform app</h1>
      <Typeform></Typeform>
      
    </div>
  )
}
