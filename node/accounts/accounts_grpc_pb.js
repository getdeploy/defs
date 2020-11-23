// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var accounts_accounts_pb = require('../accounts/accounts_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_accounts_OAuthExchangeRequest(arg) {
  if (!(arg instanceof accounts_accounts_pb.OAuthExchangeRequest)) {
    throw new Error('Expected argument of type accounts.OAuthExchangeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_accounts_OAuthExchangeRequest(buffer_arg) {
  return accounts_accounts_pb.OAuthExchangeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_OAuthExchangeResponse(arg) {
  if (!(arg instanceof accounts_accounts_pb.OAuthExchangeResponse)) {
    throw new Error('Expected argument of type accounts.OAuthExchangeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_accounts_OAuthExchangeResponse(buffer_arg) {
  return accounts_accounts_pb.OAuthExchangeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_OAuthLoginRequest(arg) {
  if (!(arg instanceof accounts_accounts_pb.OAuthLoginRequest)) {
    throw new Error('Expected argument of type accounts.OAuthLoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_accounts_OAuthLoginRequest(buffer_arg) {
  return accounts_accounts_pb.OAuthLoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_OAuthLoginResponse(arg) {
  if (!(arg instanceof accounts_accounts_pb.OAuthLoginResponse)) {
    throw new Error('Expected argument of type accounts.OAuthLoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_accounts_OAuthLoginResponse(buffer_arg) {
  return accounts_accounts_pb.OAuthLoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_TokenExchangeRequest(arg) {
  if (!(arg instanceof accounts_accounts_pb.TokenExchangeRequest)) {
    throw new Error('Expected argument of type accounts.TokenExchangeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_accounts_TokenExchangeRequest(buffer_arg) {
  return accounts_accounts_pb.TokenExchangeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_TokenExchangeResponse(arg) {
  if (!(arg instanceof accounts_accounts_pb.TokenExchangeResponse)) {
    throw new Error('Expected argument of type accounts.TokenExchangeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_accounts_TokenExchangeResponse(buffer_arg) {
  return accounts_accounts_pb.TokenExchangeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AccountsService = exports.AccountsService = {
  oAuthLogin: {
    path: '/accounts.Accounts/OAuthLogin',
    requestStream: false,
    responseStream: false,
    requestType: accounts_accounts_pb.OAuthLoginRequest,
    responseType: accounts_accounts_pb.OAuthLoginResponse,
    requestSerialize: serialize_accounts_OAuthLoginRequest,
    requestDeserialize: deserialize_accounts_OAuthLoginRequest,
    responseSerialize: serialize_accounts_OAuthLoginResponse,
    responseDeserialize: deserialize_accounts_OAuthLoginResponse,
  },
  oAuthExchange: {
    path: '/accounts.Accounts/OAuthExchange',
    requestStream: false,
    responseStream: false,
    requestType: accounts_accounts_pb.OAuthExchangeRequest,
    responseType: accounts_accounts_pb.OAuthExchangeResponse,
    requestSerialize: serialize_accounts_OAuthExchangeRequest,
    requestDeserialize: deserialize_accounts_OAuthExchangeRequest,
    responseSerialize: serialize_accounts_OAuthExchangeResponse,
    responseDeserialize: deserialize_accounts_OAuthExchangeResponse,
  },
  tokenExchange: {
    path: '/accounts.Accounts/TokenExchange',
    requestStream: false,
    responseStream: false,
    requestType: accounts_accounts_pb.TokenExchangeRequest,
    responseType: accounts_accounts_pb.TokenExchangeResponse,
    requestSerialize: serialize_accounts_TokenExchangeRequest,
    requestDeserialize: deserialize_accounts_TokenExchangeRequest,
    responseSerialize: serialize_accounts_TokenExchangeResponse,
    responseDeserialize: deserialize_accounts_TokenExchangeResponse,
  },
};

exports.AccountsClient = grpc.makeGenericClientConstructor(AccountsService);
