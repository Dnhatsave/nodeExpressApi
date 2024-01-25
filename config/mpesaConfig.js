const { mpesaConstants } = require("../mpesaConstants");

const valitadeMpesaConfigurations = () => {
       let mpesaConfig = {
            baseUrl: mpesaConstants.baseUrl,
            apiKey: mpesaConstants.apiKey,
            publicKey: mpesaConstants.publicKey,
            origin: mpesaConstants.origin,
            serviceProviderCode: mpesaConstants.serviceProviderCode,
        };
        
        for (const param in mpesaConfig) {
            if (!mpesaConfig[param]) {
                throw showErrorMessage(param);
            }
        }       
        console.log("Using M-pesa environment configuration")   
}

const showErrorMessage = (argName) => (
    `Please provide a valid ${argName} in the configuration`
);


module.exports = valitadeMpesaConfigurations;