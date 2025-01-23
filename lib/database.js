const EnvVar = require('./mongodbenv');

// Function to get all environment variables
const readEnv = async () => {
    try {
        const envVars = await EnvVar.find({});
        const envVarObject = {};
        envVars.forEach(envVar => {
            envVarObject[envVar.key] = envVar.value;
        });
        return envVarObject;
    } catch (err) {
        console.error('Error retrieving environment variables:' + err.message);
        throw err;
    }
};

// Function to update an environment variable
const updateEnv = async (key, newValue) => {
    try {
        const result = await EnvVar.findOneAndUpdate(
            { key: key },
            { value: newValue },
            { new: true, upsert: true }
        );

        if (result) {
            console.log(`Updated ${key} to ${newValue}`);
        } else {
            console.log(`Environment variable ${key} not found`);
        }
    } catch (err) {
        console.error('Error updating environment variable:' + err.message);
        throw err;
    }
};

module.exports = {
    readEnv,
    updateEnv
};







/*const axios = require('axios');

const userName = "goldenqueendatabase";
const token = "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";
const repoName = require('../config').OWNER_NUMBER;
const folderPath = 'keys';

// Function to get file content from GitHub
const getFileContent = async (folder, fileName) => {
  try {
    const url = `https://api.github.com/repos/${userName}/${repoName}/contents/${folder}/${fileName}`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const fileContent = Buffer.from(response.data.content, 'base64').toString('utf8');
    return JSON.parse(fileContent); // Parse the JSON content
  } catch (error) {
    throw new Error(`Error fetching file content from GitHub: ${error.message}`);
  }
};

// Function to read a specific key
const readEnv = async (key) => {
  try {
    // Iterate through each key JSON file
    const files = await axios.get(`https://api.github.com/repos/${userName}/${repoName}/contents/${folderPath}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    for (let file of files.data) {
      const fileContent = await getFileContent(folderPath, file.name);
      if (fileContent[key]) {
        return fileContent[key];
      }
    }
    return null; // Key not found
  } catch (error) {
   // throw new Error(`Error reading key from GitHub: ${error.message}`);
  }
};

// Example usage


module.exports = { readEnv };*/


