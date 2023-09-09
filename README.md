# Face Recognition App

This is a simple web application that can detect faces in images. Users can input image URLs to identify faces in the pictures.

![Sample Application](https://i.imgur.com/YrnSkFD.png)

## How It Works

To run the application, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/face-recognition-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd face-recognition-app
   ```

3. Run `npm install`

   ```bash
   npm install
   ```

4. Run `npm start`

   ```bash
   npm start
   ```

# The application should now be running at http://localhost:3000.

## Clarifai API Account Setup

This application uses the Clarifai API for face recognition. To use the Clarifai API, follow these steps:

### Create a Clarifai Account:

1. Go to the official Clarifai website: [https://www.clarifai.com/](https://www.clarifai.com/).
2. Click "Login" in the top right corner.
3. Provide the required information to create an account.

### Get Your API Key (Personal Access Token):

1. After logging into your account, you can access your main dashboard.

2. Click on your profile icon in the top right corner to open the user menu.

3. Select "Security" to access the Security settings.

4. Find the section labeled "Personal Access Token".

5. Here, you can create your Personal Access Token (PAT). Click "Create Personal Access Token."

6. Select all the available scopes to grant access for your PAT.

7. Optionally, add a description to identify the purpose of this PAT.

8. Click "Confirm" to generate your PAT.

9. Keep your Personal Access Token (PAT) secure. It provides access to the Clarifai API and is sensitive information.

### Integrate Your Personal Access Token (PAT) into Your Application:

- To use the Clarifai API in your project, you need to integrate your Personal Access Token (PAT) into your application's source code.
- Locate the `App.jsx` file in your project.
- Find the `PAT` constant in the code, and replace `"YOUR_PAT_KEY"` with your actual Personal Access Token (PAT).

Now, your application is configured to use the Clarifai API securely with your Personal Access Token (PAT).

### Create a Face Recognition Application:

1. In your main dashboard, you will find a section for "Applications" or "Apps."
2. Click "Create Application" or "New App" to create a new application.
3. Give your application a name (e.g., "Face Recognition").
4. You will find details for the newly created application, including its ID.

### Integrate User ID and App ID into Your Application:

- Developers using your face recognition application will need to integrate the User ID and App ID to access the Clarifai API.

To integrate the User ID and App ID into your application, follow these steps:

1. Open your project's `App.jsx` file in a code editor.

2. Locate the section where you make API calls to the Clarifai API using your Personal Access Token (PAT).

3. Find the place in your code where you make API requests and need to include the User ID and App ID.

4. Integrate the User ID and App ID into your API requests by including them in the appropriate fields or headers as required by the Clarifai API.

By completing these steps, your application will be configured to use the Clarifai API with the User ID and App ID securely integrated into your API requests.

## Technologies Used

- React.js
- Tailwind CSS
- react-parallax-tilt
- particles-bg

## Contributing

<p> If you would like to contribute to this project, you can follow these steps: </p>

1. Fork this repository.
2. Add your feature or fix.
3. Commit your changes to a branch.
4. Push your branch to the main repository.
5. Create a pull request.

# Special Thanks to Andrei Neagoie

I would like to express my sincere gratitude to Andrei Neagoie for inspiring this project idea and for his exceptional course that guided me through the process. His teachings and expertise have been instrumental in helping me develop this Face Recognition App.

Andrei's commitment to providing high-quality educational content has made a significant impact on my learning journey. I am grateful for his dedication to helping others grow in their skills and knowledge.

Thank you, Andrei, for your invaluable contributions to the tech community and for being an outstanding mentor and teacher.

With appreciation,
Yunus Emre Civan
