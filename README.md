# Using GRPC with NodeJS
An Example showing how to use GRPC with NodeJS

Please read this [article](https://developers.google.com/protocol-buffers/docs/overview) to make the best use of this repo

## Cloning the Code Into Local

Clone the code into your local using the following command
I follow by https://github.com/aditya-sridhar/grpc-nodejs-demo.git
```bash
git clone https://github.com/huuhao1999/GRPC-protocol-buffers-nodeJS.git
```

## Installing the NPM Packages

Once the code is cloned. Get into the project folder and then Install npm packages using the following command

```bash
cd GRPC-protocol-buffers-nodeJS
npm install
    "@grpc/proto-loader": "^0.1.0",
    "grpc": "^1.11.0",
    "lodash": "^4.6.1",
    "path": "^0.12.7"
```

## Running the Server 

In order to run the server code, Open a command prompt and run the following command
In forder Server
```bash
node server.js
```

## Running the Client

In order to run the client code, Open a separate Command prompt and run the following command
In forder Client
```bash
node client.js
```
