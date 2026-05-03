
// The DNS (Domain Name System) module provides functionality for name resolution in Node.js.
// It offers two main APIs:

// Callback-based API: Traditional Node.js style with callback functions
// Promise-based API: Modern async/await support via dns.promises

const dns = require('dns'); // importing the dns module

// Look up a domain name - the lockup method converts the domain name into an ip address
dns.lookup('example.com', (err, address, family) => {
  if (err) {
    console.error('Lookup error:', err);
    return;
  }
  console.log(`IP address: ${address}`); // get the address and the family of the ip address
  console.log(`IP version: IPv${family}`);
});

// Importing and Setup
// To use the DNS module, you can import it in your Node.js application using either the callback or promise-based API:

// Callback-based API

// the lcokup is used to get the address and the family of the address
const dns_2 = require('dns')
dns_2.lookup('example.com', (err, address, family) => {
    if (err) throw err;
    console.log(`Resolved: ${address} (IPv${family})`); 
})

// Promises based API - RECOMMENDED

// Import the promises API
const { promises: dns } = require('dns');
// Or: const dns = require('dns').promises;

async function lookupDomain(domain) {
  try {
        // The resukt that has been created ai an object and has the properties of address and the family and their values 
    const address = await dns.lookup(domain);
    console.log(`Resolved: ${address.address} (IPv${address.family})`);
  } catch (err) {
    console.error('Lookup failed:', err);
  }
}
lookupDomain('example.com');



// Resolving Domain Names to IP Addresses
const dns = require('dns');
const { Recoverable } = require('repl');

// Callback-based API
dns.lookup('www.example.com', (err, address, family) => {
  if (err) throw err;
  console.log('IP address: %s', address); // it will show a array of addresses and display them by looping into it
  console.log('IP version: IPv%s', family);
})

// Promise-based API
async function lookupExample() {
  try { 
    // The resukt that has been created ai an object and has the properties of address and the family
    const result = await dns.lookup('www.example.com');
    console.log('IP address:', result.address); // show an array
    console.log('IP version: IPv' + result.family);
  } catch (err) {
    console.error('Lookup failed:', err);
  }
}

lookupExample();

// Get all IPv4 addresses - give all the IP4 Addresses for google.com - or soecific domain name - Domain → IP
dns.resolve4('www.google.com', (err, addresses) => {
  if (err) throw err;

  console.log('IPv4 addresses:');
  addresses.forEach(address => {
    console.log(` ${address}`);
// example of list of addresses provied by the domain name 
//   [
       '142.250.190.68',
      '142.250.190.78'
//  ]
  });

// Perform a reverse lookup on the first IP - used to ask the DNS which domain name is this:  - IP → Domain
// Access the first ip address and give the domain name of that IP Address
  dns.reverse(addresses[0], (err, hostnames) => {
    if (err) throw err;

    console.log(`Reverse lookup for ${addresses[0]}:`);
    hostnames.forEach(hostname => {
      console.log(` ${hostname}`);
    });
  });
});


// Advanced DNS Operations
// Node normally uses the system DNS settings. bu there you are creating a node
// 1. Custom DNS Resolution
// Create a custom DNS resolver with specific settings for more control over DNS lookups:

// create a new resolver - The Resolver () is a method that finds tHe IP Adrress of the domain name  
const resolver=  new dns.Resolver();

// Set custom server (Google's public DNS) and the Backup Google DNS
resolver.setServers(['8.8.8.8', '8.8.4.4']); // this acts as a database that stores the domain records so we are asking the IP Address of the domain name "www.example.com"

resolver.resolve('www.example.com', (err, address) => {
     if (err) throw err;

     console.log('Addresses resolved using Google DNS:');
    //  The Adresses contains the IP addesss of the domain name 
     address.forEach(address => {
        console.log(`${address}`)
     })
})
// See what servers are configured - Displays which DNS servers this resolver is using.
console.log('Current resolver servers:', resolver.getServers());


// Error Handling and Retries: 
// Robust DNS handling requires proper error management. Here's how to handle common DNS errors and implement retry logic:

const dns = require('dns');

function lookupWithErrorHandling(domain) {

  dns.lookup(domain, (err, address, family) => {
    if (err) {
      console.error(`DNS lookup failed for ${domain}`);

       // Check specific error codes
       switch (err.code) {
         case 'ENOTFOUND':
           console.error(' Domain name not found');
           break;
         case 'ETIMEDOUT':
           console.error(' DNS lookup timed out');
           break;
         case 'ENODATA':
           console.error(' Domain exists but no data of requested type');
           break;
         case 'ESERVFAIL':
           console.error(' DNS server returned general failure');
           break;
         default:
           console.error(` Error code: ${err.code}`);
         }

         return;
     }

     console.log(`DNS lookup successful for ${domain}`);
     console.log(` IP address: ${address}`);
     console.log(` IP version: IPv${family}`);
     });
}

// Test with valid and invalid domains
lookupWithErrorHandling('www.google.com');
lookupWithErrorHandling('this-domain-does-not-exist-123456789.com');


// Performance Optimization
// DNS lookups can be a performance bottleneck in applications. Here are strategies to optimize DNS resolution:

// 1. Caching
// Implement a simple DNS cache to avoid repeated lookups for the same domain:

const dns = require('dns');
const util = require('util');
const lookup = util.promisify(dns.lookup);
const dnsCache = new Map();
async function cachedLookup(domain) {
  if (dnsCache.has(domain)) {
    console.log('Cache hit for:', domain);
    return dnsCache.get(domain);
  }
  console.log('Cache miss for:', domain);
  const result = await lookup(domain);
  dnsCache.set(domain, result);
  return result;
}
// Example usage
(async () => {
  const domains = ['google.com', 'facebook.com', 'google.com'];
  for (const domain of domains) {
    const result = await cachedLookup(domain);
    console.log(`${domain} → ${result.address}`);
  }
})();


// 2. Parallel Lookups - to be revisisted
// Use Promise.all() to perform multiple DNS lookups in parallel:

const dns = require('dns').promises;
async function lookupMultiple(domains) {
  try {
    const lookups = domains.map(domain => dns.lookup(domain));
    const results = await Promise.all(lookups);
    return domains.map((domain, i) => ({
      domain,
      ...results[i]
    }));
  } catch (err) {
    console.error('One or more lookups failed:', err);
    throw err;
  }
}
// Example usage
lookupMultiple(['google.com', 'facebook.com', 'github.com'])
  .then(results => console.log(results))
  .catch(console.error);


// 3. Custom Resolvers and Timeouts
// Configure custom DNS servers and timeouts for better control:

// const dns = require('dns');
// const { Resolver } = dns;

// // Create a custom resolver with timeout
// const resolver = new Resolver();
resolver.setServers(['8.8.8.8', '1.1.1.1']); // Google and Cloudflare DNS
// Set timeout for all operations (in ms)
const TIMEOUT = 2000;
async function resolveWithTimeout(domain, rrtype = 'A') {
  return new Promise((resolve, reject) => {
    // handle the errors and timeouts for better control
    const timer = setTimeout(() => {
      reject(new Error(`DNS query timed out after ${TIMEOUT}ms`));
    }, TIMEOUT);

    // get the Ip Address
    resolver.resolve(domain, rrtype, (err, addresses) => {
      clearTimeout(timer);
      if (err) return reject(err);
      resolve(addresses);
    });
  });
}
// Example usage
resolveWithTimeout('example.com')
  .then(console.log)
  .catch(console.error);