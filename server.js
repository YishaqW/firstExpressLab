// Require modules
const express = require('express')
const morgan = require('morgan')

// Create the Express app
const app = express();
const PORT = 3000

// Configure the app (app.set)


// Mount middleware (app.use)
app.use(morgan('dev')) // Always in install!

// Mount routes
app.get('/greeting/:name', (req, res) => {
    const { name } = req.params
  	res.send(`${name}! It's so great to see you!`);
});

app.get('/tip/:total/:tipPercentage', (req, res) => {
  let { total, tipPercentage } = req.params
  let tip = total *= (tipPercentage / 100) 
  tip.toFixed(2)
  res.send(`Your tip is $${tip}`)
})

app.get('/magic/:question', (req, res) =>{
  const {question} = req.params
  const qArray = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
  let answer = qArray[Math.floor(Math.random() * qArray.length)]
  res.send(`${question}: Magic 8 Ball saids, ${answer}`)
})

// Tell the app to listen on port 3000
app.listen(PORT, function() {
 console.log(`Listening on port ${PORT}`);
});