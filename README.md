# Alexa Skill and Admin Web Application

Este proyecto es una habilidad de Alexa que proporciona información sobre los seres queridos ya no estan con nosotros.

Esta tiene un modo lector y un modo administrador.

![In Memoriam](in_memoriam.jpg)


## Project Structure

```
in-memoriam
├── alexa
│   ├── index.ts
│   ├── intents
│   │   └── readerIntent.ts
│   └── models
│       └── en-US.json
├── lambda
│   ├── index.ts
│   ├── handlers
│   │   └── readerHandler.ts
│   ├── utils
│   │   └── dynamoDB.ts
│   ├── package.json
│   └── tsconfig.json
├── web
│   ├── src
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   ├── components
│   │   │   └── AdminForm.tsx
│   │   └── styles
│   │       └── App.css
│   ├── public
│   │   └── index.html
│   ├── package.json
│   ├── tsconfig.json
├── terraform
│   ├── main.tf
│   ├── variables.tf
│   ├── outputs.tf
│   └── lambda
│       └── lambda-deployment-package.zip
├── tsconfig.json
└── README.md

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd memorial
   ```

2. **Install dependencies:**
   - For the Alexa skill and Lambda function, ensure you have Node.js installed and run:
     ```
     npm install
     ```
   - For the web application, navigate to the `web` directory and run:
     ```
     npm install
     ```

3. **Configure AWS credentials:**
   Ensure your AWS credentials are configured properly to allow deployment of the Lambda function and access to DynamoDB.

4. **Deploy the Lambda function and Alexa skill:**
   terraform will help us to deploy:
   ```
   terraform apply deploy (choose dev.tfvars or prod.tfvars)
   ```

## Usage

- **Reader Mode:** 
  Users can interact with the Alexa skill by asking for information about a specific deceased person. The skill will respond with their first name, last name, year of birth, year of death, and a brief description.

- **Admin Mode:** 
  Access the web application to input information about deceased individuals. The form allows users to enter the first name, last name, year of birth, year of death, and a description.

## License

This project is licensed under the MIT License.

## Contact me 

- **Alejandro Mercado** 
https://www.linkedin.com/in/alexmarket/
