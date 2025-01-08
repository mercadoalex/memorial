# Alexa Skill and Admin Web App

This project consists of an Alexa skill that provides information about deceased individuals and a web-based admin interface for data entry. The project is structured into three main components: the Alexa skill, the AWS Lambda function, and the web application.

## Project Structure

```
alexa-skill-app
├── alexa
│   ├── index.js                # Entry point for the Alexa skill
│   ├── intents
│   │   └── readerIntent.js     # Logic for handling reader intent
│   └── models
│       └── en-US.json          # Interaction model for the Alexa skill
├── lambda
│   ├── index.js                # Entry point for the AWS Lambda function
│   ├── handlers
│   │   └── readerHandler.js     # Processes reader mode requests
│   └── utils
│       └── dynamoDB.js         # Utility functions for DynamoDB interaction
├── web
│   ├── src
│   │   ├── App.js               # Main component of the web application
│   │   ├── components
│   │   │   └── AdminForm.js     # Form for entering deceased individual data
│   │   └── styles
│   │       └── App.css          # Styles for the web application
│   ├── public
│   │   └── index.html           # Main HTML file for the web application
│   ├── package.json             # Configuration file for the web application
│   └── README.md                # Documentation for the web application
├── serverless.yml               # Configuration for deploying Lambda and Alexa skill
└── README.md                    # Overall project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd alexa-skill-app
   ```

2. **Install dependencies:**
   - For the web application:
     ```
     cd web
     npm install
     ```

3. **Deploy the AWS Lambda function and Alexa skill:**
   - Ensure you have the Serverless Framework installed and configured.
   - Run the following command in the root directory:
     ```
     serverless deploy
     ```

4. **Run the web application:**
   ```
   cd web
   npm start
   ```

## Usage

- **Reader Mode:** Use the Alexa skill to ask for information about a deceased individual. The skill will respond with their first name, last name, year of birth, year of death, and a brief description.
  
- **Admin Mode:** Access the web application to enter new data about deceased individuals through the admin form.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.