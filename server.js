const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');
const cors = require('cors');

const PORT = 3001;

const app = express();

            app.engine('handlebars', exphbs());
            app.set('view engine', 'handlebars');

            app.use('/public', express.static(path.join(__dirname, 'publick')));
            console.log(path.join(__dirname, 'publick'))

            app.use(bodyParser.urlencoded({extended: true}));
            app.use(bodyParser.json());
            app.use(cors());


            app.use((req, res, next) => {
              res.header("Access-Control-Allow-Origin", "*");
              res.header("Access-Control-Allow-Headers", "Content-Type");
              next();
            });

            app.post('/main/order-form', (req, res)=>{

              nodemailer.createTestAccount((err, account) => {
                const htmlEmail = `
                <p>You have new order</p>
                <h3>Order Details</h3>
                <ul>
                  <li>Name: ${req.body.userName}</li>
                  <li>Phone: ${req.body.userPhone}</li>
                  <li>Email: ${req.body.userEmail}</li>
                  <li>Message: ${req.body.userMessage}</li>
                </ul>
              `
              let transporter = nodemailer.createTransport({
                host: 'smtp-relay.sendinblue.com',
                port: 587,
                secure: false,
                auth: {
                  user: 'nazar_-@ukr.net',
                  pass: 'X8kvg3FVrMcWh1jA'
                },

                tls:{
                    rejectUnauthorized: false
                }
            })
            let mailOptions = {
              from: '"Client 👻"<nazar_-@ukr.net>', // sender address
              to: "nazar_-@ukr.net",// list of receivers
              subject: "Fenhel_Sport ✔", // Subject line
              text: req.body.message, // plain text body
              html: htmlEmail // html body
            }
              
              transporter.sendMail(mailOptions, (err, info) => {
                if(err){
                  return console.log(err)
                }
                console.log("Message sent: %s", info.messageId);
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
              })

              })
              res.send({showModalSubmit: true});
            })

                  // create reusable transporter object using the default SMTP transport

  

    app.get('/main/order-form', (req, res) => { 
      // if(typeof user !== 'object') return res.sendFile(__dirname + '/main/order-form')   
        
          // console.log({showModalSubmit: true})
          res.send({showModalSubmit: true}) 
    
        console.log('ERROR')
      // user = undefined  
  })

  
  app.listen(PORT, () => console.log(`server listening at http://localhost:${PORT}/main`))

