#### Usage and Tools

This application accepts a POST request to the URL https://sleepy-fortress-37475.herokuapp.com/test/, which accepts one argument “string_to_cut”

It'll return a JSON object with the key “return_string” and a string containing every third letter from the original string

Recommended Tool: Postman

Alternatively, you can use the following command:

```curl -X POST https://sleepy-fortress-37475.herokuapp.com/test/ --data '{"string_to_cut": "helloworld"}' -H 'Content-Type: application/json'```