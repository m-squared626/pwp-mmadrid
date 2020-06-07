const express = require("express")
const morgan = require('morgan')

const app = express()

app.use(morgan("dev"))
app.use(express.json())

const indexRoute = express.Router()

const indexRouteMiddleware = function (request, response, nextFunction) {
  console.log("is this thing on")
  nextFunction()
}


indexRoute.route("/apis").get(indexRouteMiddleware)

app.use(indexRoute)

app.listen(4200, () => {console.log("Express has Started")})