import express from "express";
import path from 'path';
import users from './data.js'

const __dirname = path.resolve()

const app = express();

app.use(express.urlencoded({extended: false}));


app.get('/', (req, res)=>{

  res.sendFile(__dirname + "/index.html");
})
console.log(users[0].password, users[0].email)

app.post('/login', function(req,res){
  //get from body page
  let email = req.body.email;
  let password = req.body.password

  //verify data users
  for(let x = 0; x<users.length; x++){
    if(users[x].email == email){
        if(users[x].password == password){          
          console.log('Wellcome')
          res.send('Weeeellcoommeeeee')
    }else{
      console.log('senha incorrega')
      res.send('Incorrect Password')
      }
    }
  }
})

const port = 3000
app.listen(port, () =>
      console.log(`server started on http://localhost:${port}`)
    )