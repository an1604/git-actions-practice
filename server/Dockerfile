# Use a Node.js version that supports the nullish coalescing assignment operator
FROM node:16-alpine

# Set working directory
WORKDIR /usr/src/git-actions-practice/server

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm i

# Copy the rest of the application code
COPY . .

# Expose port
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
