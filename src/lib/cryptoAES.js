import CryptoJS from 'crypto-js'

console.log(
  'x-connection-encrypted:',
  CryptoJS.AES.encrypt(
    'postgresql://postgres:9TIDh5tClzkfCnToShjQ@containers-us-west-191.railway.app:7658/railway',
    'SAMPLE_KEY'
  ).toString()
)
