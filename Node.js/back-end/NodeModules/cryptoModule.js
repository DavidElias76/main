
// The crypto module is essential for handling sensitive information securely 
// It is used for user authentication. secure data transmission file encryption and decryption and secure commnunication chnannels

// NOTE: The crypto module provies cryptographic functionality that includes a set of wrapper of OpenSSL's Hash, HMAC, Cipher, Decipher, sign-in and verify functions
// install the crypto module or library before using it

// Basic Hashing ExampleGet your own Node.js Server
const crypto = require('crypto');

// Create a SHA-256 hash of a string
const hash_obj_1 = crypto.createHash('sha256')
  .update('Hello, Node.js!')  //updates the hash content with the given data
  .digest('hex'); // calculates the digest and outputs it in the specified format
console.log('SHA-256 Hash:', hash);

// SHA-256 Hash: 4695813a8d1ade632d4bcf74d2e58e296883db03306149e8c78f2de0886ef665

// import the crypto module
const crypto = require('crypto');

// Create a hash object with specifies algorithm
const hash_obj = crypto.createHash('sha256');

// Update the hash with data
hash_obj.update('Hello, World!');

// Get the digest in hexadecimal format
const digest = hash_obj.digest('hex');
console.log(digest);
// In this example:

// createHash() creates a hash object with the specified algorithm
// update() updates the hash content with the given data
// digest() calculates the digest and outputs it in the specified format


const data = 'Hello, World!';

// MD5 (not recommended for security-critical applications) - NOTE RECOMMENDED
const md5 = crypto.createHash('md5').update(data).digest('hex');
console.log('MD5:', md5);

// SHA-1 (not recommended for security-critical applications) - NOTE RECOMMENDED
const sha1 = crypto.createHash('sha1').update(data).digest('hex');
console.log('SHA-1:', sha1);

// SHA-384 - RECOMMENDED
const sha384 = crypto.createHash('sha384').update(data).digest('hex');
console.log('SHA-256:', sha384);

// SHA-256 - RECOMMENDED
const sha256 = crypto.createHash('sha256').update(data).digest('hex');
console.log('SHA-256:', sha256);

// SHA-512 - RECOMMENDED
const sha512 = crypto.createHash('sha512').update(data).digest('hex');
console.log('SHA-512:', sha512);

// NOTE: MD5 and SHA-1 are considered cryptographically weak and should not be used for security-critical applications.
// Use SHA-256, SHA-384, or SHA-512 instead.

// salting:
// A salt is a random string that is unique to each user.
// It's combined with the password before hashing to ensure that even if two users have the same password, their hashes will be different.
// This prevents attackers from using precomputed tables (like rainbow tables) to crack multiple passwords at once.

// Function to hash a password
function hashPassword(password) {
    
  // Generate a random salt (16 bytes)
  const salt = crypto.randomBytes(16).toString('hex');

  // Use scrypt for password hashing (recommended) - scriptsync - slow password hashing algorithm - designed to make brute force attacks very expensive 
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');

  // Return both salt and hash for storage - stored in the database 
  return { salt, hash }; 
}

// Function to verify a password - it will retur true or false
function verifyPassword(password, salt, hash) {

    // Re-hash the entered password - Same password + same salt = same hash
  const hashedPassword = crypto.scryptSync(password, salt, 64).toString('hex');

  return hashedPassword === hash;
}

// Example usage
const password = 'mySecurePassword';

// Hash the password for storage
const { salt, hash } = hashPassword(password);
console.log('Salt:', salt);
console.log('Hash:', hash);

// Verify a login attempt
const isValid = verifyPassword(password, salt, hash); // used for re-hashing
console.log('Password valid:', isValid); // true 

const isInvalid = verifyPassword('wrongPassword', salt, hash);
console.log('Wrong password valid:', isInvalid); // false

// HMAC (Hash-based Message Authentication Code)
// HMAC is a specific type of message authentication code (MAC) involving a cryptographic hash function and a secret cryptographic key.

const secretKey = 'mySecretKey';

// create a HMAC
const hmac = crypto.createHmac('sha256'. secretKey)

// update with data
hmac.update('Hello World')

// get the digest 
const hmacDigest = hmac.digest('hex')

console.log('HMAC:', hmacDigest);

// HMAC for Message Verification

// Function to create an HMAC for a message
function createSignature(message, key){
    const new_hmac = crypto.createHmac('sha256', key)
    hmac.update(message)
    return new_hmac.digest('hex')
}

// Function to verify a message's signatures - - it return true
function verifySignatures(message, signature, key){
    
    const expectedSignature = createSignature(message, key)
    // the timingSafeEqual method is used for cryptographic comparison to prevent timing attacks 
    return crypto.timingSafeEqual(
        Buffer.from(signature, 'hex'),
        Buffer.from(expectedSignature, 'hex')
    )
}

// Example usage
const my_secretKey = 'verySecretKey';
const message = 'Important message to verify';

// the sender creates a secret key
const signatures = createSignature(message, my_secretKey)

try{
    const isValid = verifySignatures(message, signatures. my_secretKey)
    console.log("Signatures Valid:", isValid) // true 

    // Try with a tampered message
  const isInvalid = verifySignatures('Tampered message', signatures, secretKey);
  console.log('Tampered message valid:', isInvalid); // false
}catch(error){
    console.error('Verification error:', error.message);
}

// Symmetric Encryption - used the same key for both the encryption snad decryption of message
// AES (Advanced Encryption Standard)

function encrypt(message, key){
    // generate a random initialization vector
    const iv = crypto.randomBytes(16)

    // Create cipher with AES-256-CBC
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv)

    // Encypt the data
    let encrypted =  cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    // Return both the encrypted data and the IV
    return {
        iv: iv.toString('hex'),
        encryptedData: encrypted
    };
}

function decrypt(encryptedData, iv, key){
     // Create decipher
     const decipher = crypto.createDecipheriv(
        'aes-256-cbc',
        key,
        Buffer.from(iv, 'hex')
     )

     // Decrypt the data
    let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8'); // convert to a string

    return decrypted;
}

// Example usage
// Note: In a real application, use a properly generated and securely stored key

const salt = crypto.randomBytes(16);
const key = crypto.scryptSync('secretPassword', salt, 32) // 32 bytes = 256 bits- encrypt the secret key using the data

const new_message = 'This is a secret message '

const { iv, encryptedData } = encrypt(message, key);

console.log('Original:', new_message);
console.log('Encrypted:', encryptedData);
console.log('IV:', iv);

// Decrypt
const decrypted = decrypt(encryptedData, iv, key);
console.log('Decrypted:', decrypted);


// Asymmetric Encryption
// Asymmetric encryption (public-key cryptography) uses a pair of mathematically related keys:

// Performance Note: Asymmetric encryption is much slower than symmetric encryption.

// Public Key: Can be shared publicly, used for encryption
// Private Key: Must be kept secret, used for decryption

// RSA (Rivest-Shamir-Adleman)

// Generate RSA key pair - to be revisited
function generateKeyPair() {
    
  return crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048, // Key size in bits
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem'
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem'
    }
  });
}

// Encrypt with public key
function encryptWithPublicKey(text, publicKey) {

  const buffer = Buffer.from(text, 'utf8');
  const encrypted = crypto.publicEncrypt(
    {
      key: publicKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING
    },
    buffer
  );
  return encrypted.toString('base64');
}

// Decrypt with private key
function decryptWithPrivateKey(encryptedText, privateKey) {

  const buffer = Buffer.from(encryptedText, 'base64');
  const decrypted = crypto.privateDecrypt(
    {
      key: privateKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING
    },
    buffer
  );
  return decrypted.toString('utf8');
}

// Generate keys
const { publicKey, privateKey } = generateKeyPair();
console.log('Public Key:', publicKey.substring(0, 50) + '...');
console.log('Private Key:', privateKey.substring(0, 50) + '...');

// Example usage
const message_2 = 'This message is encrypted with RSA';
const encrypted = encryptWithPublicKey(message_2, publicKey);
console.log('Encrypted:', encrypted.substring(0, 50) + '...');

const decrypted_2 = decryptWithPrivateKey(encrypted, privateKey);
console.log('Decrypted:', decrypted_2);


// Digital Signatures
// Digital signatures provide a way to verify the authenticity and integrity of messages, software, or digital documents.

// use the rsa cryptographic algorithm
// Generate RSA key pair - generate the public key and the private key 
const { new_publicKey, new_privateKey } = crypto.generateKeyPairSync('rsa', 
    // the public key 
    {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
  },
// the private key 
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem'
  }
});

// Function to sign a message - display the sign in prompt 
function signMessage(message, new_privateKey) {
  const signer = crypto.createSign('sha256'); // thsi is a create sign in method 
  signer.update(message);
  return signer.sign(new_privateKey, 'base64');
}

// Function to verify a signature
function verifySignature(message, signature, new_publicKey) {
  const verifier = crypto.createVerify('sha256'); // create verify method
  verifier.update(message);
  return verifier.verify(new_publicKey, signature, 'base64');
}

// Example usage
const message_3 = 'This message needs to be signed';
const signature = signMessage(message_3, privateKey);
console.log('Message:', message_3);
console.log('Signature:', signature.substring(0, 50) + '...');

// Verify the signature
const isValid_1 = verifySignature(message_3, signature, publicKey);
console.log('Signature valid:', isValid_1); // true

// Verify with a modified message
const isInvalid_2 = verifySignature('Modified message', signature, publicKey);
console.log('Modified message valid:', isInvalid_2); // false


// Random Data Generation
// Generating secure random data is important for many cryptographic operations, such as creating keys, salts, and initialization vectors.

const crypto = require('crypto');

// Generate random bytes
const randomBytes = crypto.randomBytes(16);
console.log('Random bytes:', randomBytes.toString('hex'));

// Generate a random string (Base64)
const randomString = crypto.randomBytes(32).toString('base64');
console.log('Random string:', randomString);

// Generate a random number between 1 and 100
function secureRandomNumber(min, max) {
  // Ensure we have enough randomness
  const range = max - min + 1;
  const bytesNeeded = Math.ceil(Math.log2(range) / 8);
  const maxValue = 256 ** bytesNeeded;

  // Generate random bytes and convert to a number
  const randomBytes = crypto.randomBytes(bytesNeeded);
  const randomValue = randomBytes.reduce((acc, byte, i) => {
    return acc + byte * (256 ** i);
  }, 0);

  // Scale to our range and shift by min
  return min + Math.floor((randomValue * range) / maxValue);
}

// Example: Generate 5 random numbers
for (let i = 0; i < 5; i++) {
  console.log(`Random number ${i+1}:`, secureRandomNumber(1, 100));
}