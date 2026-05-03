
// used to read os properties

// common.js 
const os = require('os')

// Es Modules
import os from 'os'
import { arch, platform, cpus } from "os";

// Basic system information
console.log(`OS Platform: ${os.platform()}`); // windows or macos
console.log(`OS Type: ${os.type()}`); // windows or macos
console.log(`OS Release: ${os.release()}`); // os(windows) release date 
console.log(`CPU Architecture: ${os.arch()}`); // os architecture : x64 amd64
console.log(`Hostname: ${os.hostname()}`); // checker if i linux

// Memory information
const totalMemGB = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2);
const freeMemGB = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2);
console.log(`Memory: ${freeMemGB}GB free of ${totalMemGB}GB`); // memory size remaining 

// User information
const userInfo = os.userInfo();
console.log(`Current User: ${userInfo.username}`);
console.log(`Home Directory: ${os.homedir()}`);

// os.arch()
// Returns the operating system CPU architecture for which the Node.js binary was compiled.
// Get CPU architecture
console.log(`CPU Architecture: ${os.arch()}`); //  'x64' for 64-bit systems for windows


// os.platform()
// Returns a string identifying the operating system platform.

// Get platform information
const platform = os.platform();
console.log(`Platform: ${platform}`); // 'win32' for Windows (both 32-bit and 64-bit) /  'darwin' for macOS


// os.type()
// Returns the operating system name as returned by uname on POSIX systems, or from the ver command on Windows.

// Get OS type
console.log(`OS Type: ${os.type()}`); // 'Windows_NT' on Windows


// os.release()
// Returns the operating system release number.

// Get OS release information
console.log(`OS Release: ${os.release()}`); // windows 10 or windows 11


// os.version()
// Returns a string identifying the kernel version. On Windows, this includes build information.

// Get kernel version
console.log(`Kernel Version: ${os.version()}`); // Windows: 'Windows 10 Enterprise 10.0.19044'


// User and environment 

// os.userInfo()
// Returns information about the currently effective user.
// Get current user information

const user = os.userInfo(); // returns an object with properties
console.log('User Information:');
console.log(`- Username: ${user.username}`);
console.log(`- User ID: ${user.uid}`);
console.log(`- Group ID: ${user.gid}`);
console.log(`- Home Directory: ${user.homedir}`);

// On Windows, you can also get the user's domain
if (os.platform() === 'win32') {
  console.log(`- Domain: ${user.domain || 'N/A'}`);
}

// Note: user.shell is only available on POSIX platforms
if (user.shell) {
  console.log(`- Default Shell: ${user.shell}`);
}


// const path = require('path');

// os.homedir()
// Returns the home directory of the current user.
// Get the home directory
const homeDir = os.homedir();
console.log(`Home Directory: ${homeDir}`);

// Example: Create a path to a config file in the user's home directory
const configPath = path.join(homeDir, '.myapp', 'config.json');
console.log(`Config file will be saved to: ${configPath}`);

// os.hostname()
// Returns the hostname of the operating system.

// Get the system hostname
const hostname = os.hostname();
console.log(`Hostname: ${hostname}`); // the host name of the os 

// Example: Use hostname in logging or configuration
console.log(`Server started on ${hostname} at ${new Date().toISOString()}`); // host namewith the current date 


// os.tmpdir()
// Returns the operating system's default directory for temporary files.

// Get the system default temp dir
console.log(`Temporary Directory: ${os.tmpdir()}`);


// system properties

// os.cpus
// Returns an array of objects containing information about each logical CPU core.

// Get CPU information
const cpus = os.cpus();
console.log(`Number of CPU Cores: ${cpus.length}`);

// Display information about each CPU core - get the model and speed 
cpus.forEach((cpu, index) => {
  console.log(`\nCPU Core ${index + 1}:`);
  console.log(`- Model: ${cpu.model}`);
  console.log(`- Speed: ${cpu.speed} MHz`);
  console.log('- Times (ms):', {     user: cpu.times.user,
    nice: cpu.times.nice,
    sys: cpu.times.sys,
    idle: cpu.times.idle,
    irq: cpu.times.irq
  });
});
// Calculate total CPU usage (example, requires two measurements)
function calculateCpuUsage(prevCpus) {
  const currentCpus = os.cpus();
  const usage = [];

  for (let i = 0; i < currentCpus.length; i++) {
    const current = currentCpus[i];
    const prev = prevCpus ? prevCpus[i] : { times: { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 } };

    const prevIdle = prev.times.idle;
    const idle = current.times.idle - prevIdle;

    let total = 0;
    for (const type in current.times) {
      total += current.times[type] - (prev.times[type] || 0);
    }

    const usagePercent = ((1 - idle / total) * 100).toFixed(1);
    usage.push(parseFloat(usagePercent));
  }

  return {
    perCore: usage,
    average: (usage.reduce((a, b) => a + b, 0) / usage.length).toFixed(1),
    cpus: currentCpus
  };
}

// Example usage of CPU usage calculation
console.log('\nCPU Usage (requires two measurements):');
const firstMeasure = os.cpus();

// Simulate some CPU work
for (let i = 0; i < 1000000000; i++) {}
const usage = calculateCpuUsage(firstMeasure);
console.log(`Average CPU Usage: ${usage.average}%`);

// os.totalmem() and os.freemem()
// Return the total and free system memory in bytes, respectively.

// Format bytes to human-readable format
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

// Get memory information
const totalMem = os.totalmem();
const freeMem = os.freemem();
const usedMem = totalMem - freeMem; // 
const usagePercent = ((usedMem / totalMem) * 100).toFixed(2);

console.log('Memory Information:');
console.log(`- Total Memory: ${formatBytes(totalMem)}`);
console.log(`- Free Memory: ${formatBytes(freeMem)} (${((freeMem / totalMem) * 100).toFixed(2)}%)`);
console.log(`- Used Memory: ${formatBytes(usedMem)} (${usagePercent}%)`);

// Example: Check if there's enough free memory
const MIN_FREE_MEMORY = 200 * 1024 * 1024; // 200MB
if (freeMem < MIN_FREE_MEMORY) {
  console.warn('Warning: Low on memory!');
} else {
  console.log('System has sufficient memory available');
}


// os.loadavg()
// Returns an array containing the 1, 5, and 15 minute load averages.

// Get load averages
const loadAverages = os.loadavg();
console.log('System Load Averages (1, 5, 15 min):', loadAverages);

// On Linux/Unix, load average represents the average system load over the last 1, 5, and 15 minutes
// The values represent the number of processes in the system run queue
const [oneMin, fiveMin, fifteenMin] = loadAverages;
const cpuCount = os.cpus().length;

console.log(`1-minute load average: ${oneMin.toFixed(2)} (${(oneMin / cpuCount * 100).toFixed(1)}% of ${cpuCount} cores)`);
console.log(`5-minute load average: ${fiveMin.toFixed(2)}`);
console.log(`15-minute load average: ${fifteenMin.toFixed(2)}`);

// Example: Check if system is under heavy load
const isSystemOverloaded = oneMin > cpuCount * 1.5;
if (isSystemOverloaded) {
  console.warn('Warning: System is under heavy load!');
} else {
  console.log('System load is normal');
}


// Network Information

// os.networkInterfaces()
// Returns an object containing network interfaces that have been assigned a network address.

// Get network interfaces information
const networkInterfaces = os.networkInterfaces();

console.log('Network Interfaces:');

// Iterate over each network interface
Object.entries(networkInterfaces).forEach(([name, addresses]) => {
  console.log(`\nInterface: ${name}`);
  addresses.forEach((address) => {
    console.log(`- Family: ${address.family}`);
    console.log(` Address: ${address.address}`);
    console.log(` Netmask: ${address.netmask}`);
    console.log(` MAC: ${address.mac || 'N/A'}`);
    console.log(` Internal: ${address.internal}`);
  });
});

// Example: Find the first non-internal IPv4 address
function getLocalIpAddress() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return '127.0.0.1'; // Fallback to localhost
}

const localIp = getLocalIpAddress();
console.log(`\nLocal IP Address: ${localIp}`);


// os.uptime()
// Returns the system uptime in seconds.

// Get system uptime in seconds
const uptime = os.uptime();
console.log(`System Uptime: ${uptime} seconds`);

// Format uptime in a more readable way
const uptimeDays = Math.floor(uptime / (60 * 60 * 24));
const uptimeHours = Math.floor((uptime % (60 * 60 * 24)) / (60 * 60));
const uptimeMinutes = Math.floor((uptime % (60 * 60)) / 60);
const uptimeSeconds = Math.floor(uptime % 60);

console.log(`System has been running for: ${uptimeDays} days, ${uptimeHours} hours, ${uptimeMinutes} minutes, ${uptimeSeconds} seconds`);


// os.networkInterfaces()
// Returns an object containing information about network interfaces.

// interfaces in only used in strict mode

// Get network interfaces
// const networkInterfaces_2 = os.networkInterfaces();
// console.log('Network Interfaces:');
// console.log(JSON.stringify(networkInterfaces, null, 2));

// // Iterate through network interfaces
// Object.keys(networkInterfaces).forEach((interfaceName) => {
//   console.log(`\nInterface: ${interfaceName}`);

//   networkInterfaces[interfaceName].forEach((interface) => {
//     console.log(` Address Family: ${interface.family}`);
//     console.log(` IP Address: ${interface.address}`);
//     console.log(` Netmask: ${interface.netmask}`);
//     if (interface.mac) {
//       console.log(` MAC Address: ${interface.mac}`);
//     }
//     console.log(` Internal: ${interface.internal ? 'Yes' : 'No'}`);
//   });
// });

// // Function to get primary IPv4 address (non-internal)
// function getPrimaryIPv4Address() {
//   const interfaces = os.networkInterfaces();
//   for (const name of Object.keys(interfaces)) {
//     for (const interface of interfaces[name]) {
//       // Skip internal and non-IPv4 addresses
//       if (!interface.internal && interface.family === 'IPv4') {
//         return interface.address;
//       }
//     }
//   }
//   return 'No IPv4 address found';
// }

// console.log(`\nPrimary IPv4 Address: ${getPrimaryIPv4Address()}`);


// OS Constants and Utilities

// os.constants()
// Returns an object containing commonly used operating system specific constants for error codes, process signals, and more.

// Get all signal constants
console.log('Signal Constants:', os.constants.signals);

// Example: Handle common signals
process.on('SIGINT', () => {
  console.log('Received SIGINT. Performing cleanup...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('Received SIGTERM. Shutting down gracefully...');
  process.exit(0);
});

console.log('Process is running. Press Ctrl+C to exit.');


// os.EOL ()
// Returns the end-of-line marker for the current operating system.

// Get the end-of-line marker for the current OS
console.log('End of Line character:', JSON.stringify(os.EOL));

// Example: Write a file with platform-specific line endings
const lines = [
  'First line',
  'Second line',
  'Third line'
];

// Join lines with the correct EOL character
const content = lines.join(os.EOL);
fs.writeFileSync('output.txt', content);
console.log('File written with platform-appropriate line endings');


// SYSTEM INFROMATION REPORT

function getSystemInfo() {

  const info = {
    // SYSTEM INFORMATION
    os: {
      type: os.type(),
      platform: os.platform(),
      architecture: os.arch(),
      release: os.release(),
      hostname: os.hostname(),
      uptime: formatUptime(os.uptime())
    },
    // USER AND ENVIRONMENTS 
    user: {
      username: os.userInfo().username,
      homedir: os.homedir(),
      tempdir: os.tmpdir()
    },
    // SYSTEM RESOURCES - MEMORY
    memory: {
      total: formatBytes(os.totalmem()),
      free: formatBytes(os.freemem()),
      usage: `${((1 - os.freemem() / os.totalmem()) * 100).toFixed(2)}%`
    },

    cpu: {
      model: os.cpus()[0].model,
      cores: os.cpus().length,
      speed: `${os.cpus()[0].speed} MHz`
    }
  };

  return info;
}

function formatUptime(seconds) {
  const days = Math.floor(seconds / (60 * 60 * 24));
  const hours = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((seconds % (60 * 60)) / 60);
  const secs = Math.floor(seconds % 60);

  return `${days}d ${hours}h ${minutes}m ${secs}s`;
}

function formatBytes(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Bytes';
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
}

// Display the system information dashboard
const systemInfo = getSystemInfo();
console.log('======= SYSTEM INFORMATION DASHBOARD =======');
console.log(JSON.stringify(systemInfo, null, 2));

// Display in a more formatted way
console.log('\n======= FORMATTED SYSTEM INFORMATION =======');
console.log(`OS: ${systemInfo.os.type} (${systemInfo.os.platform} ${systemInfo.os.architecture})`);
console.log(`Version: ${systemInfo.os.release}`);
console.log(`Hostname: ${systemInfo.os.hostname}`);
console.log(`Uptime: ${systemInfo.os.uptime}`);
console.log(`User: ${systemInfo.user.username}`);
console.log(`Home Directory: ${systemInfo.user.homedir}`);
console.log(`CPU: ${systemInfo.cpu.model}`);
console.log(`Cores: ${systemInfo.cpu.cores}`);
console.log(`Speed: ${systemInfo.cpu.speed}`);
console.log(`Memory Total: ${systemInfo.memory.total}`);
console.log(`Memory Free: ${systemInfo.memory.free}`);
console.log(`Memory Usage: ${systemInfo.memory.usage}`);


// Resource Monitor
// This example creates a basic resource monitor that updates every second:

function monitorResources() {
  console.clear(); // Clear console for a cleaner display

  const now = new Date().toLocaleTimeString();
  console.log(`======= RESOURCE MONITOR (${now}) =======`);

  // CPU Usage
  const cpus = os.cpus();
  console.log(`\nCPU Cores: ${cpus.length}`);

  // Calculate CPU usage (this is approximate since we need two measurements)
  const cpuUsage = cpus.map((cpu, index) => {
    const total = Object.values(cpu.times).reduce((acc, tv) => acc + tv, 0);
    const idle = cpu.times.idle;
    const usage = ((total - idle) / total * 100).toFixed(1);
    return `Core ${index}: ${usage}% used`;
  });

  console.log(cpuUsage.join('\n'));

  // Memory Usage
  const totalMem = os.totalmem();
  const freeMem = os.freemem();
  const usedMem = totalMem - freeMem;

  console.log('\nMemory Usage:');
  console.log(`Total: ${formatBytes(totalMem)}`);
  console.log(`Used: ${formatBytes(usedMem)} (${(usedMem / totalMem * 100).toFixed(1)}%)`);
  console.log(`Free: ${formatBytes(freeMem)} (${(freeMem / totalMem * 100).toFixed(1)}%)`);

  // System Uptime
  console.log(`\nSystem Uptime: ${formatUptime(os.uptime())}`);

  // Process Info
  console.log('\nProcess Information:');
  console.log(`PID: ${process.pid}`);
  console.log(`Memory Usage: ${formatBytes(process.memoryUsage().rss)}`);
  console.log(`User: ${os.userInfo().username}`);
}

function formatBytes(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Bytes';
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
}

function formatUptime(seconds) {
  const days = Math.floor(seconds / (60 * 60 * 24));
  const hours = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((seconds % (60 * 60)) / 60);
  const secs = Math.floor(seconds % 60);

  return `${days}d ${hours}h ${minutes}m ${secs}s`;
}

// Initial display
monitorResources();

// Update every second (note: in a real application, you might not want
// to update this frequently as it uses CPU resources)
const intervalId = setInterval(monitorResources, 1000);

// In a real application, you would need to handle cleanup:
// clearInterval(intervalId);

// For this example, we'll run for 10 seconds then stop
console.log('Monitor will run for 10 seconds...');
setTimeout(() => {
  clearInterval(intervalId);
  console.log('\nResource monitoring stopped.');
}, 10000);


// Platform-Specific Behavior
// This example demonstrates how to adapt your application's behavior based on the operating system:

// Function to determine a good location for app data based on the OS
function getAppDataPath(appName) {
  const platform = os.platform();

  let appDataPath;

  switch (platform) {
    case 'win32': // Windows
      appDataPath = path.join(process.env.APPDATA || '', appName);
      break;
    case 'darwin': // macOS
      appDataPath = path.join(os.homedir(), 'Library', 'Application Support', appName);
      break;
    case 'linux': // Linux
      appDataPath = path.join(os.homedir(), '.config', appName);
      break;
    default: // Fallback for other platforms
      appDataPath = path.join(os.homedir(), `.${appName}`);
  }

  return appDataPath;
}

// Function to get appropriate command based on OS
function getOpenCommand() {
  const platform = os.platform();

  switch (platform) {
    case 'win32': // Windows
      return 'start';
    case 'darwin': // macOS
      return 'open';
    default: // Linux and others
      return 'xdg-open';
  }
}

// Example usage
const appName = 'myapp';
const appDataPath = getAppDataPath(appName);
const openCommand = getOpenCommand();

console.log(`OS Platform: ${os.platform()}`);
console.log(`OS Type: ${os.type()}`);
console.log(`Recommended App Data Path: ${appDataPath}`);
console.log(`Open Command: ${openCommand}`);

// Example of platform-specific behavior
console.log('\nPlatform-Specific Actions:');

if (os.platform() === 'win32') {
  console.log('- Using Windows-specific registry functions');
  console.log('- Setting up Windows service');
} else if (os.platform() === 'darwin') {
  console.log('- Using macOS keychain for secure storage');
  console.log('- Setting up launchd agent');
} else if (os.platform() === 'linux') {
  console.log('- Using Linux systemd for service management');
  console.log('- Setting up dbus integration');
}

// Example of checking for available memory and adjusting behavior
const availableMemGB = os.freemem() / (1024 * 1024 * 1024);
console.log(`\nAvailable Memory: ${availableMemGB.toFixed(2)} GB`);

if (availableMemGB < 0.5) {
  console.log('Low memory mode activated: reducing cache size and disabling features');
} else if (availableMemGB > 4) {
  console.log('High memory mode activated: increasing cache size and enabling all features');
} else {
  console.log('Standard memory mode activated: using default settings');
}

// Example of CPU core detection for parallel processing
const cpuCount2 = os.cpus().length;
console.log(`\nCPU Cores: ${cpuCount}`);

const recommendedWorkers = Math.max(1, cpuCount - 1); // Leave one core for the system
console.log(`Recommended worker processes: ${recommendedWorkers}`);