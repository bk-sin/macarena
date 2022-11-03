require("dotenv").config()
require("./config/database")

const express = require("express")
const cors = require("cors")
const Router = require("./routes/routes")
const passport = require("passport")
const app = express()
const path = require("path")

app.use(cors())
app.use(express.json())
app.use(passport.initialize())
app.use("/api", Router)

app.use(express.static("frontend/build"))
app.get("*", (req, res) => {
  res.status(200).sendFile(path.join(__dirname + "/frontend/build/index.html"))
})

app.listen(4000, () => console.log("App listening on port " + 4000))
