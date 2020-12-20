// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var accounts_accounts_pb = require('../accounts/accounts_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_accounts_CreateRequest(arg) {
  if (!(arg instanceof accounts_accounts_pb.CreateRequest)) {
    throw new Error('Expected argument of type accounts.CreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_accounts_CreateRequest(buffer_arg) {
  return accounts_accounts_pb.CreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_CreateResponse(arg) {
  if (!(arg instanceof accounts_accounts_pb.CreateResponse)) {
    throw new Error('Expected argument of type accounts.CreateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_accounts_CreateResponse(buffer_arg) {
  return accounts_accounts_pb.CreateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AccountsService = exports.AccountsService = {
  create: {
    path: '/accounts.Accounts/Create',
    requestStream: false,
    responseStream: false,
    requestType: accounts_accounts_pb.CreateRequest,
    responseType: accounts_accounts_pb.CreateResponse,
    requestSerialize: serialize_accounts_CreateRequest,
    requestDeserialize: deserialize_accounts_CreateRequest,
    responseSerialize: serialize_accounts_CreateResponse,
    responseDeserialize: deserialize_accounts_CreateResponse,
  },
};

exports.AccountsClient = grpc.makeGenericClientConstructor(AccountsService);
