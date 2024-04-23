const dotenv=require("dotenv");

dotenv.config();

const apiKey=process.env.API_KEY;



// Define the tools
const tools = [
    {
        type: "function",
        function: {
            name: "adder",
            inputs: ["a", "b"],
            outputs: ["result"],
            body: "result = a + b;"
        }
    },
    {
        type: "function",
        function: {
            name: "exponentiator",
            inputs: ["a", "b"],
            outputs: ["result"],
            body: "result = Math.pow(a, b);"
        }
    },
    {
        type: "function",
        function: {
            name: "modulo",
            inputs: ["a", "b"],
            outputs: ["result"],
            body: "result = a % b;"
        }
    }
];

// Define the request data with the tools
const requestData = {
    model: "gpt-3.5-turbo",
    messages: [{
        role: "system",
        content: "You are ChatGPT, a helpful assistant."
    }, {
        role: "user",
        content: "Add 5 and 23"
    }],
    tools: tools
};

// Define the API URL and headers
const apiUrl = 'https://api.openai.com/v1/chat/completions';
const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
};

// Make the API call
fetch(apiUrl, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(requestData)
})
.then(response => response.json())
.then(data => {
   // Log the tool calls
    data.choices[0].message.tool_calls.forEach(call => {
      // console.log(call.function.name + " called with arguments: " + JSON.stringify(call.function.arguments));
       console.log(call);
    });
   //console.log(data)
})
.catch(error => {
    console.error('Error:', error);
});
