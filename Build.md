# Installation

- Install nodejs and npm
- Clone the repository to a folder - [Company Dir Repo](https://github.com/tobyemmanuel/company-dir)
git clone https://github.com/tobyemmanuel/company-dir
- Navigate to the local repository to configure the app. 
- run ``npm install`` in the terminal of your vscode. If you done correct to this stage, at the end of the process, you will see words along these lines on your terminal.

    run `npm fund` for details
    found ..... severity vunerablity
    run `npm audit fix` to fix them or `npm audit` for details

You will also see your package-lock.json file and node_modules folder at the left side of the vscode window.
- Create a `dotenv` file in the directory root. Insert the `API key` for Google MAPS. You can get your API using this link [Google Maps API](https://developers.google.com/maps/documentation/javascript/get-api-key)

You should attach the key to this parameter - REACT_APP_GMAP_API_KEY. Your dotenv file should contain the following:
    `REACT_APP_GMAP_API_KEY = '<\Google Maps API>\'`

- run npm start on the terminal. Ensure you are in the correct directory before running the command to prevent errors. The app will open on locally on your default browser.
    [https://localhost:3000](https://localhost:3000)
