const express = require('express');
const app = express();
const social = require("./routes/socials")

app.use(express.json());
app.use('/api/socials', social)

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});