# BarCodeScanner mobile app

### Requirements
- `npm` and `node` installed in your system
- `expo` app in your android or IOS phone (recommended)

### Setup
- Clone repo using `https://github.com/Aadhieaswar/BarCodeScanner-App.git`
- Do `npm install -g expo-cli` if you don't have `expo-cli` installed in your machine
- `cd` into the cloned repo and run `npm install`
- Run start scripts from the following:
  - `npm start`: provides a QR code which you can scan from your phone to view the app in the expo app (recommended)
  - `npm android`: starts the app in the android studio's virtual device
  - `npm ios`: starts the app in ios device emulator (only works in mac)
  - `npm web`: starts the app in the web browser view

### Files and Directories
- The crucial files in the repo home directory are:
  - `App.js`: the file that is run to view the app
  - `package.json`: consists of all the dependencies and the run scripts for the app
  - `Screens`: this directory consists of all the different screen views files for the app
  - `Components`: this directory consists of all the components created in react for the app
  - `assets`: this directory consists of all the images for the splash screens and such

### Feature
###### Scan the barcode of items to get information on the objects or add items to the database (in development)

### Credits
- Aditdi for this idea of a wonderful project.
- Implemented by __Aadhieaswar Senthil Kumar__
    - Contact me at: <aadhieaswar@gmail.com>
