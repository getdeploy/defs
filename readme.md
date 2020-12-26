# Deploy Api Definitions

This repository contains the protobuf definitions for all of the apis available for the Deploy platform.

## Packages

Upon a commit to `main` this repo will publish packages for the respective languages.

### Go
`Go` doesnt need a published package as such, as uses Github with go modules.

##### Installation
Packages for Go are separated by protobuf package.

For example..
```
go get github.com/getdeploy/proto/accounts
go get github.com/getdeploy/proto/auth
```

### gRPC Web
`grpcweb` is a Javascript/Typescript package for using the apis via [Grpc-Web](https://github.com/grpc/grpc-web), this is most often used in a browser based context, as browsers can't currently communicate in a fully gRPC compatible way. For backend javascript/node usage, see below.

##### Installation
gRPC-Web is provided as a single package installation via NPM, using Github's package manager.
```
echo "@getdeploy:registry=https://npm.pkg.github.com" >> .npmrc
npm i -s @getdeploy/grpcweb
```

### Node
`node` is a Javascript/Typescript package for using the apis via standard gRPC [grpc-js](https://github.com/grpc/grpc-node#pure-javascript-client), it uses the pure JS client.

The node package is provided as a single package installation via NPM, also using Github's package manager.
```
echo "@getdeploy:registry=https://npm.pkg.github.com" >> .npmrc
npm i -s @getdeploy/node
```
