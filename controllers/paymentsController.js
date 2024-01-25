const asyncHandler = require('express-async-handler');
const axios = require('axios');
const { mpesaConstants } = require('../mpesaConstants');
const generateReference = require('../helpers/generateReference');
const getBearerToken = require('../helpers/getBearrerToken');





//@desc C2B payment
//@rotue POST /ipg/v1x/b2cPayment/
//@access PUBLIC
const initateC2BPayment =  async (req, res) => {
    const BearerToken = getBearerToken(mpesaConstants.publicKey, mpesaConstants.apiKey);
    const reference = generateReference(7);
    const postData = req.body;

    const input_TransactionReference = postData.input_TransactionReference;
    const input_CustomerMSISDN = postData.input_CustomerMSISDN;
    const input_Amount = postData.input_Amount;
    const input_ThirdPartyReference = reference;
    const input_ServiceProviderCode = postData.input_ServiceProviderCode;
    
    if(!input_TransactionReference || !input_CustomerMSISDN || !input_Amount || 
          !input_ServiceProviderCode ){
            res.status(400);
            throw new Error("All fields are required");
    }

    const apiUrl = 'https://' + mpesaConstants.baseUrl + ':18352/ipg/v1x/c2bPayment/singleStage/';

    await axios.post(apiUrl,postData, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization':'Bearer ' + BearerToken,
            'Origin': mpesaConstants.origin
        }
      }).then((response) => {
         console.log("Response Data: " + response.data);
         console.log("Response : " + res);
         res.status(201).json(response.data);

      }).catch((err) => {
        console.error('Error fetching data:', err.message);
        res.status(500).json({ err: 'Internal Server Error' });
      });
};

module.exports = {initateC2BPayment};