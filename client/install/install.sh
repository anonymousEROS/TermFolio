#!/bin/bash
set -e -u

# Clone the repository
echo "Cloning the repository..."
git clone 'https://github.com/blkkap/TermFolio.git'

# Change directory to the cloned repository
cd TermFolio

# Install Node.js and npm if not installed
if ! command -v node &> /dev/null
then
    echo "Node.js is not installed. Installing Node.js..."
    sudo apt-get update
    sudo apt-get install -y nodejs npm
fi

# Ensure npm is up-to-date
echo "Updating npm..."
sudo npm install -g npm@latest

# Change directory to the client folder
cd client

# Install the required npm packages with specific versions
echo "Installing npm packages..."
npm install react-icons@4.4.0 \
            react-loading@2.0.3 \
            react-router-dom@5.3.3 \
            react-scripts@5.0.1 \
            styled-components@5.3.5

echo "Setup complete!"
