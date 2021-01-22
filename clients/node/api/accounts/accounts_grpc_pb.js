// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var api_accounts_accounts_pb = require('../../api/accounts/accounts_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_api_accounts_ExchangeAuthCodeRequest(arg) {
  if (!(arg instanceof api_accounts_accounts_pb.ExchangeAuthCodeRequest)) {
    throw new Error('Expected argument of type api.accounts.ExchangeAuthCodeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_accounts_ExchangeAuthCodeRequest(buffer_arg) {
  return api_accounts_accounts_pb.ExchangeAuthCodeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_accounts_ExchangeAuthCodeResponse(arg) {
  if (!(arg instanceof api_accounts_accounts_pb.ExchangeAuthCodeResponse)) {
    throw new Error('Expected argument of type api.accounts.ExchangeAuthCodeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_accounts_ExchangeAuthCodeResponse(buffer_arg) {
  return api_accounts_accounts_pb.ExchangeAuthCodeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_accounts_GetAuthURLRequest(arg) {
  if (!(arg instanceof api_accounts_accounts_pb.GetAuthURLRequest)) {
    throw new Error('Expected argument of type api.accounts.GetAuthURLRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_accounts_GetAuthURLRequest(buffer_arg) {
  return api_accounts_accounts_pb.GetAuthURLRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_accounts_GetAuthURLResponse(arg) {
  if (!(arg instanceof api_accounts_accounts_pb.GetAuthURLResponse)) {
    throw new Error('Expected argument of type api.accounts.GetAuthURLResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_accounts_GetAuthURLResponse(buffer_arg) {
  return api_accounts_accounts_pb.GetAuthURLResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_api_accounts_RefreshTokenRequest(arg) {
  if (!(arg instanceof api_accounts_accounts_pb.RefreshTokenRequest)) {
    throw new Error('Expected argument of type api.accounts.RefreshTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_accounts_RefreshTokenRequest(buffer_arg) {
  return api_accounts_accounts_pb.RefreshTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_accounts_RefreshTokenResponse(arg) {
  if (!(arg instanceof api_accounts_accounts_pb.RefreshTokenResponse)) {
    throw new Error('Expected argument of type api.accounts.RefreshTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_accounts_RefreshTokenResponse(buffer_arg) {
  return api_accounts_accounts_pb.RefreshTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AccountsService = exports.AccountsService = {
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
  getAuthURL: {
    path: '/api.accounts.Accounts/GetAuthURL',
    requestStream: false,
    responseStream: false,
    requestType: api_accounts_accounts_pb.GetAuthURLRequest,
    responseType: api_accounts_accounts_pb.GetAuthURLResponse,
    requestSerialize: serialize_api_accounts_GetAuthURLRequest,
    requestDeserialize: deserialize_api_accounts_GetAuthURLRequest,
    responseSerialize: serialize_api_accounts_GetAuthURLResponse,
    responseDeserialize: deserialize_api_accounts_GetAuthURLResponse,
  },
  exchangeAuthCode: {
    path: '/api.accounts.Accounts/ExchangeAuthCode',
    requestStream: false,
    responseStream: false,
    requestType: api_accounts_accounts_pb.ExchangeAuthCodeRequest,
    responseType: api_accounts_accounts_pb.ExchangeAuthCodeResponse,
    requestSerialize: serialize_api_accounts_ExchangeAuthCodeRequest,
    requestDeserialize: deserialize_api_accounts_ExchangeAuthCodeRequest,
    responseSerialize: serialize_api_accounts_ExchangeAuthCodeResponse,
    responseDeserialize: deserialize_api_accounts_ExchangeAuthCodeResponse,
  },
  refreshToken: {
    path: '/api.accounts.Accounts/RefreshToken',
    requestStream: false,
    responseStream: false,
    requestType: api_accounts_accounts_pb.RefreshTokenRequest,
    responseType: api_accounts_accounts_pb.RefreshTokenResponse,
    requestSerialize: serialize_api_accounts_RefreshTokenRequest,
    requestDeserialize: deserialize_api_accounts_RefreshTokenRequest,
    responseSerialize: serialize_api_accounts_RefreshTokenResponse,
    responseDeserialize: deserialize_api_accounts_RefreshTokenResponse,
  },
};

exports.AccountsClient = grpc.makeGenericClientConstructor(AccountsService);
