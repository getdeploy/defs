// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var api_services_services_pb = require('../../api/services/services_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_api_services_CreateRequest(arg) {
  if (!(arg instanceof api_services_services_pb.CreateRequest)) {
    throw new Error('Expected argument of type api.services.CreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_services_CreateRequest(buffer_arg) {
  return api_services_services_pb.CreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_services_CreateResponse(arg) {
  if (!(arg instanceof api_services_services_pb.CreateResponse)) {
    throw new Error('Expected argument of type api.services.CreateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_services_CreateResponse(buffer_arg) {
  return api_services_services_pb.CreateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_services_GetBuildLogRequest(arg) {
  if (!(arg instanceof api_services_services_pb.GetBuildLogRequest)) {
    throw new Error('Expected argument of type api.services.GetBuildLogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_services_GetBuildLogRequest(buffer_arg) {
  return api_services_services_pb.GetBuildLogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_services_GetBuildLogResponse(arg) {
  if (!(arg instanceof api_services_services_pb.GetBuildLogResponse)) {
    throw new Error('Expected argument of type api.services.GetBuildLogResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_services_GetBuildLogResponse(buffer_arg) {
  return api_services_services_pb.GetBuildLogResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_services_GetRequest(arg) {
  if (!(arg instanceof api_services_services_pb.GetRequest)) {
    throw new Error('Expected argument of type api.services.GetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_services_GetRequest(buffer_arg) {
  return api_services_services_pb.GetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_services_GetResponse(arg) {
  if (!(arg instanceof api_services_services_pb.GetResponse)) {
    throw new Error('Expected argument of type api.services.GetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_services_GetResponse(buffer_arg) {
  return api_services_services_pb.GetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_services_ListGithubReposRequest(arg) {
  if (!(arg instanceof api_services_services_pb.ListGithubReposRequest)) {
    throw new Error('Expected argument of type api.services.ListGithubReposRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_services_ListGithubReposRequest(buffer_arg) {
  return api_services_services_pb.ListGithubReposRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_services_ListGithubReposResponse(arg) {
  if (!(arg instanceof api_services_services_pb.ListGithubReposResponse)) {
    throw new Error('Expected argument of type api.services.ListGithubReposResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_services_ListGithubReposResponse(buffer_arg) {
  return api_services_services_pb.ListGithubReposResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_services_ListRequest(arg) {
  if (!(arg instanceof api_services_services_pb.ListRequest)) {
    throw new Error('Expected argument of type api.services.ListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_services_ListRequest(buffer_arg) {
  return api_services_services_pb.ListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_services_ListResponse(arg) {
  if (!(arg instanceof api_services_services_pb.ListResponse)) {
    throw new Error('Expected argument of type api.services.ListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_services_ListResponse(buffer_arg) {
  return api_services_services_pb.ListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_services_ListVersionsRequest(arg) {
  if (!(arg instanceof api_services_services_pb.ListVersionsRequest)) {
    throw new Error('Expected argument of type api.services.ListVersionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_services_ListVersionsRequest(buffer_arg) {
  return api_services_services_pb.ListVersionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_services_ListVersionsResponse(arg) {
  if (!(arg instanceof api_services_services_pb.ListVersionsResponse)) {
    throw new Error('Expected argument of type api.services.ListVersionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_services_ListVersionsResponse(buffer_arg) {
  return api_services_services_pb.ListVersionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ServicesService = exports.ServicesService = {
  get: {
    path: '/api.services.Services/Get',
    requestStream: false,
    responseStream: false,
    requestType: api_services_services_pb.GetRequest,
    responseType: api_services_services_pb.GetResponse,
    requestSerialize: serialize_api_services_GetRequest,
    requestDeserialize: deserialize_api_services_GetRequest,
    responseSerialize: serialize_api_services_GetResponse,
    responseDeserialize: deserialize_api_services_GetResponse,
  },
  create: {
    path: '/api.services.Services/Create',
    requestStream: false,
    responseStream: false,
    requestType: api_services_services_pb.CreateRequest,
    responseType: api_services_services_pb.CreateResponse,
    requestSerialize: serialize_api_services_CreateRequest,
    requestDeserialize: deserialize_api_services_CreateRequest,
    responseSerialize: serialize_api_services_CreateResponse,
    responseDeserialize: deserialize_api_services_CreateResponse,
  },
  list: {
    path: '/api.services.Services/List',
    requestStream: false,
    responseStream: false,
    requestType: api_services_services_pb.ListRequest,
    responseType: api_services_services_pb.ListResponse,
    requestSerialize: serialize_api_services_ListRequest,
    requestDeserialize: deserialize_api_services_ListRequest,
    responseSerialize: serialize_api_services_ListResponse,
    responseDeserialize: deserialize_api_services_ListResponse,
  },
  listVersions: {
    path: '/api.services.Services/ListVersions',
    requestStream: false,
    responseStream: false,
    requestType: api_services_services_pb.ListVersionsRequest,
    responseType: api_services_services_pb.ListVersionsResponse,
    requestSerialize: serialize_api_services_ListVersionsRequest,
    requestDeserialize: deserialize_api_services_ListVersionsRequest,
    responseSerialize: serialize_api_services_ListVersionsResponse,
    responseDeserialize: deserialize_api_services_ListVersionsResponse,
  },
  getBuildLog: {
    path: '/api.services.Services/GetBuildLog',
    requestStream: false,
    responseStream: true,
    requestType: api_services_services_pb.GetBuildLogRequest,
    responseType: api_services_services_pb.GetBuildLogResponse,
    requestSerialize: serialize_api_services_GetBuildLogRequest,
    requestDeserialize: deserialize_api_services_GetBuildLogRequest,
    responseSerialize: serialize_api_services_GetBuildLogResponse,
    responseDeserialize: deserialize_api_services_GetBuildLogResponse,
  },
  listGithubRepos: {
    path: '/api.services.Services/ListGithubRepos',
    requestStream: false,
    responseStream: false,
    requestType: api_services_services_pb.ListGithubReposRequest,
    responseType: api_services_services_pb.ListGithubReposResponse,
    requestSerialize: serialize_api_services_ListGithubReposRequest,
    requestDeserialize: deserialize_api_services_ListGithubReposRequest,
    responseSerialize: serialize_api_services_ListGithubReposResponse,
    responseDeserialize: deserialize_api_services_ListGithubReposResponse,
  },
};

exports.ServicesClient = grpc.makeGenericClientConstructor(ServicesService);
