// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var auth_auth_pb = require('../auth/auth_pb.js');

function serialize_auth_CreateRequest(arg) {
  if (!(arg instanceof auth_auth_pb.CreateRequest)) {
    throw new Error('Expected argument of type auth.CreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_CreateRequest(buffer_arg) {
  return auth_auth_pb.CreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_CreateResponse(arg) {
  if (!(arg instanceof auth_auth_pb.CreateResponse)) {
    throw new Error('Expected argument of type auth.CreateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_CreateResponse(buffer_arg) {
  return auth_auth_pb.CreateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_OAuthExchangeRequest(arg) {
  if (!(arg instanceof auth_auth_pb.OAuthExchangeRequest)) {
    throw new Error('Expected argument of type auth.OAuthExchangeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_OAuthExchangeRequest(buffer_arg) {
  return auth_auth_pb.OAuthExchangeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_OAuthExchangeResponse(arg) {
  if (!(arg instanceof auth_auth_pb.OAuthExchangeResponse)) {
    throw new Error('Expected argument of type auth.OAuthExchangeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_OAuthExchangeResponse(buffer_arg) {
  return auth_auth_pb.OAuthExchangeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_OAuthLoginRequest(arg) {
  if (!(arg instanceof auth_auth_pb.OAuthLoginRequest)) {
    throw new Error('Expected argument of type auth.OAuthLoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_OAuthLoginRequest(buffer_arg) {
  return auth_auth_pb.OAuthLoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_OAuthLoginResponse(arg) {
  if (!(arg instanceof auth_auth_pb.OAuthLoginResponse)) {
    throw new Error('Expected argument of type auth.OAuthLoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_OAuthLoginResponse(buffer_arg) {
  return auth_auth_pb.OAuthLoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_TokenExchangeRequest(arg) {
  if (!(arg instanceof auth_auth_pb.TokenExchangeRequest)) {
    throw new Error('Expected argument of type auth.TokenExchangeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_TokenExchangeRequest(buffer_arg) {
  return auth_auth_pb.TokenExchangeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_TokenExchangeResponse(arg) {
  if (!(arg instanceof auth_auth_pb.TokenExchangeResponse)) {
    throw new Error('Expected argument of type auth.TokenExchangeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_TokenExchangeResponse(buffer_arg) {
  return auth_auth_pb.TokenExchangeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthService = exports.AuthService = {
  oAuthLogin: {
    path: '/auth.Auth/OAuthLogin',
    requestStream: false,
    responseStream: false,
    requestType: auth_auth_pb.OAuthLoginRequest,
    responseType: auth_auth_pb.OAuthLoginResponse,
    requestSerialize: serialize_auth_OAuthLoginRequest,
    requestDeserialize: deserialize_auth_OAuthLoginRequest,
    responseSerialize: serialize_auth_OAuthLoginResponse,
    responseDeserialize: deserialize_auth_OAuthLoginResponse,
  },
  oAuthExchange: {
    path: '/auth.Auth/OAuthExchange',
    requestStream: false,
    responseStream: false,
    requestType: auth_auth_pb.OAuthExchangeRequest,
    responseType: auth_auth_pb.OAuthExchangeResponse,
    requestSerialize: serialize_auth_OAuthExchangeRequest,
    requestDeserialize: deserialize_auth_OAuthExchangeRequest,
    responseSerialize: serialize_auth_OAuthExchangeResponse,
    responseDeserialize: deserialize_auth_OAuthExchangeResponse,
  },
  tokenExchange: {
    path: '/auth.Auth/TokenExchange',
    requestStream: false,
    responseStream: false,
    requestType: auth_auth_pb.TokenExchangeRequest,
    responseType: auth_auth_pb.TokenExchangeResponse,
    requestSerialize: serialize_auth_TokenExchangeRequest,
    requestDeserialize: deserialize_auth_TokenExchangeRequest,
    responseSerialize: serialize_auth_TokenExchangeResponse,
    responseDeserialize: deserialize_auth_TokenExchangeResponse,
  },
  create: {
    path: '/auth.Auth/Create',
    requestStream: false,
    responseStream: false,
    requestType: auth_auth_pb.CreateRequest,
    responseType: auth_auth_pb.CreateResponse,
    requestSerialize: serialize_auth_CreateRequest,
    requestDeserialize: deserialize_auth_CreateRequest,
    responseSerialize: serialize_auth_CreateResponse,
    responseDeserialize: deserialize_auth_CreateResponse,
  },
};

exports.AuthClient = grpc.makeGenericClientConstructor(AuthService);
