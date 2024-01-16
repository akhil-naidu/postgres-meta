import CryptoJS from 'crypto-js'

console.log(
  'x-connection-encrypted:',
  CryptoJS.AES.encrypt(
    'postgresql://postgres:5wBneBK7LEA8SypB@db.bzfrjzvsapgipjatiyrv.supabase.co:5432/postgres',
    'SAMPLE_KEY'
  ).toString()
)
