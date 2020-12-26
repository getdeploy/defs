// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var auth_auth_pb = require('../auth/auth_pb.js');

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

function serialize_auth_OAuthURLRequest(arg) {
  if (!(arg instanceof auth_auth_pb.OAuthURLRequest)) {
    throw new Error('Expected argument of type auth.OAuthURLRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_OAuthURLRequest(buffer_arg) {
  return auth_auth_pb.OAuthURLRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_OAuthURLResponse(arg) {
  if (!(arg instanceof auth_auth_pb.OAuthURLResponse)) {
    throw new Error('Expected argument of type auth.OAuthURLResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_OAuthURLResponse(buffer_arg) {
  return auth_auth_pb.OAuthURLResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
  oAuthURL: {
    path: '/auth.Auth/OAuthURL',
    requestStream: false,
    responseStream: false,
    requestType: auth_auth_pb.OAuthURLRequest,
    responseType: auth_auth_pb.OAuthURLResponse,
    requestSerialize: serialize_auth_OAuthURLRequest,
    requestDeserialize: deserialize_auth_OAuthURLRequest,
    responseSerialize: serialize_auth_OAuthURLResponse,
    responseDeserialize: deserialize_auth_OAuthURLResponse,
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
};

exports.AuthClient = grpc.makeGenericClientConstructor(AuthService);
