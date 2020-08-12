const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;

const StringService = require('./services/StringService');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/test', (req, res) => {
	const { string_to_cut } = req.body;
	let resultingStr = StringService.cutString(string_to_cut);
	if (resultingStr === "") {
		res.status(404).send("Please enter a valid string");
	} else {
	  res.json({ return_string: resultingStr });
	}
  });

app.listen(process.env.PORT || port, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
