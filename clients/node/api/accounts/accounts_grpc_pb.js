// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var api_accounts_accounts_pb = require('../../api/accounts/accounts_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_api_accounts_CreateRequest(arg) {
  if (!(arg instanceof api_accounts_accounts_pb.CreateRequest)) {
    throw new Error('Expected argument of type api.accounts.CreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_accounts_CreateRequest(buffer_arg) {
  return api_accounts_accounts_pb.CreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_accounts_CreateResponse(arg) {
  if (!(arg instanceof api_accounts_accounts_pb.CreateResponse)) {
    throw new Error('Expected argument of type api.accounts.CreateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_accounts_CreateResponse(buffer_arg) {
  return api_accounts_accounts_pb.CreateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_accounts_GetRequest(arg) {
  if (!(arg instanceof api_accounts_accounts_pb.GetRequest)) {
    throw new Error('Expected argument of type api.accounts.GetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_accounts_GetRequest(buffer_arg) {
  return api_accounts_accounts_pb.GetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_accounts_GetResponse(arg) {
  if (!(arg instanceof api_accounts_accounts_pb.GetResponse)) {
    throw new Error('Expected argument of type api.accounts.GetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_accounts_GetResponse(buffer_arg) {
  return api_accounts_accounts_pb.GetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AccountsService = exports.AccountsService = {
  create: {
    path: '/api.accounts.Accounts/Create',
    requestStream: false,
    responseStream: false,
    requestType: api_accounts_accounts_pb.CreateRequest,
    responseType: api_accounts_accounts_pb.CreateResponse,
    requestSerialize: serialize_api_accounts_CreateRequest,
    requestDeserialize: deserialize_api_accounts_CreateRequest,
    responseSerialize: serialize_api_accounts_CreateResponse,
    responseDeserialize: deserialize_api_accounts_CreateResponse,
  },
  get: {
    path: '/api.accounts.Accounts/Get',
    requestStream: false,
    responseStream: false,
    requestType: api_accounts_accounts_pb.GetRequest,
    responseType: api_accounts_accounts_pb.GetResponse,
    requestSerialize: serialize_api_accounts_GetRequest,
    requestDeserialize: deserialize_api_accounts_GetRequest,
    responseSerialize: serialize_api_accounts_GetResponse,
    responseDeserialize: deserialize_api_accounts_GetResponse,
  },
};

exports.AccountsClient = grpc.makeGenericClientConstructor(AccountsService);
