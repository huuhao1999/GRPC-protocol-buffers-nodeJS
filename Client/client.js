const path = require('path');
const PROTO_PATH = path.join(__dirname, "../") + '/proto/employee.proto';
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

let packageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  });
let employee_proto = grpc.loadPackageDefinition(packageDefinition).employee;

function main() {
  let client = new employee_proto.Employee('localhost:4500',
    grpc.credentials.createInsecure());
  let employeeId;
  if (process.argv.length >= 3) {
    employeeId = process.argv[2];
  } else {
    employeeId = 1;
  }
  client.getDetails({ id: 5 }, function (err, response) {
    if (err) console.log(err);

    console.log('Employee Details for Employee Id:', 5, '\n', JSON.stringify(response.message));
    console.log(response.message);
  });
}

main();