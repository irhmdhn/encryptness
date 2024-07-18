import cryptoJs from 'crypto-js'

const Encryptness = {

    encryption(text, key='encness'){
        return btoa(cryptoJs.AES.encrypt(text, key).toString())
    },
    decryption(text, key='encness'){
        return cryptoJs.AES.decrypt(atob(text), key).toString(cryptoJs.enc.Utf8)
    }
}

export default Encryptness