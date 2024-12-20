exports.paymentSuccessEmail = (name, result, paymentId) => {
    return `<!DOCTYPE html>
      <html>
      
      <head>
          <meta charset="UTF-8">
          <title>Payment Confirmation</title>
          <style>
              body {
                  background-color: #ffffff;
                  font-family: Arial, sans-serif;
                  font-size: 16px;
                  line-height: 1.4;
                  color: #333333;
                  margin: 0;
                  padding: 0;
              }
      
      
              .container {
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                  text-align: center;
              }
      
              .logo {
                  max-width: 200px;
                  margin-bottom: 20px;
              }
      
              .message {
                  font-size: 18px;
                  font-weight: bold;
                  margin-bottom: 20px;
              }
      
              .body {
                  font-size: 16px;
                  margin-bottom: 20px;
              }
      
              .cta {
                  display: inline-block;
                  padding: 10px 20px;
                  background-color: #FFD60A;
                  color: #000000;
                  text-decoration: none;
                  border-radius: 5px;
                  font-size: 16px;
                  font-weight: bold;
                  margin-top: 20px;
              }
      
              .support {
                  font-size: 14px;
                  color: #999999;
                  margin-top: 20px;
              }
      
              .highlight {
                  font-weight: bold;
              }
          </style>
      
      </head>
      
      <body>
          <div class="container">
              
              <div class="message">Products  Payment Confirmation</div>
              <div class="body">
                  <p>Dear ${name},</p>
                  <p>Your Order is/are <b>${result}</b>,</p>
                  <p>Your Order ID is <b>${paymentId}</b></p>

                 <p>Please  discuss the payment process with the owner for all the 
                 taxation, allowance over the products and find out the total amount over the products </p>

                 <p><b>
                    //edit here..........
                    // Contact Details: +91 ${phoneNumber}, <br\> address: ${address}
                 </b></p>
              </div>
              <div class="support">If you have any questions or need assistance, please feel free to reach out to us at <a
					href="mailto:info@aeromat.in">info@aeromat.in</a>. We are here to help! Aeromat creative Labs pvt ltd</div>
          </div>
      </body>
      
      </html>`
  }