// Here server of protocol buffer (google) 
const path=require('path');
const PROTO_PATH = path.join(__dirname, "../") + '/proto/employee.proto';
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const _ = require('lodash');
let packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
let employee_proto = grpc.loadPackageDefinition(packageDefinition).employee;

let {employees} = require('./data.js');

function getDetails(call, callback) {
  callback(null, 
    {
       message: _.find(employees, { id: call.request.id })
    });
}
function main() {
  let server = new grpc.Server();
  server.addService(employee_proto.Employee.service, {getDetails: getDetails});
  server.bind('0.0.0.0:4500', grpc.ServerCredentials.createInsecure());
  console.log("Lisening Port: 4500");
  server.start();
}

main();