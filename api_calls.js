const apiKey="Remove this and Place your api key here"
const apiUrl = 'https://api.openai.com/v1/chat/completions';

const requestData = {
  "model": "gpt-3.5-turbo",
    //To output in Json you have to include that you want output in JSON format in content also include  response_format: { type: "json_object" },
  "messages": [{
      "role": "system",
      "content": "You are ChatGPT, a helpful assistant to output JSON."
  }, {
      "role": "user",
      "content": "If Jesus,Moses and Abraham had a Tea party,then will they invite Zarathustra?"
  }],
  response_format: { type: "json_object" },
};

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${apiKey}`
};

fetch(apiUrl, {
  method: 'POST',
  headers: headers,
  body: JSON.stringify(requestData)
})
  .then(response => response.json())
  .then(data => {
    console.log(data.choices[0].message.content);
  })
  .catch(error => {
    console.error('Error:', error);
  });




  //output in JSON

//   {
//     "Jesus": {
//         "name": "Jesus"
//     },
//     "Moses": {
//         "name": "Moses"
//     },
//     "Abraham": {
//         "name": "Abraham"
//     },
//     "Zarathustra": {
//         "invited": false,
//         "reason": "Zarathustra lived in ancient Persia and predated the other figures mentioned. Therefore, it is unlikely that he would be invited to a tea party with Jesus, Moses, and Abraham."
//     }
// }