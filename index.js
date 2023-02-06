const express = require('express');
const app = express();
const social = require("./routes/social")

app.use(express.json());
app.use('/api/social', social)

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});