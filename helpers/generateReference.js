
function generateReference(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let reference = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      reference += characters.charAt(randomIndex);
    }
  
    return reference;
  }
  
  module.exports = generateReference;