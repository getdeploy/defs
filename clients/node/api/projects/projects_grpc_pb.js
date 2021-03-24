// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var api_projects_projects_pb = require('../../api/projects/projects_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_api_projects_CreateRequest(arg) {
  if (!(arg instanceof api_projects_projects_pb.CreateRequest)) {
    throw new Error('Expected argument of type api.projects.CreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_projects_CreateRequest(buffer_arg) {
  return api_projects_projects_pb.CreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_projects_CreateResponse(arg) {
  if (!(arg instanceof api_projects_projects_pb.CreateResponse)) {
    throw new Error('Expected argument of type api.projects.CreateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_projects_CreateResponse(buffer_arg) {
  return api_projects_projects_pb.CreateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_projects_GetRequest(arg) {
  if (!(arg instanceof api_projects_projects_pb.GetRequest)) {
    throw new Error('Expected argument of type api.projects.GetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_projects_GetRequest(buffer_arg) {
  return api_projects_projects_pb.GetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_projects_GetResponse(arg) {
  if (!(arg instanceof api_projects_projects_pb.GetResponse)) {
    throw new Error('Expected argument of type api.projects.GetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_projects_GetResponse(buffer_arg) {
  return api_projects_projects_pb.GetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_projects_InviteRequest(arg) {
  if (!(arg instanceof api_projects_projects_pb.InviteRequest)) {
    throw new Error('Expected argument of type api.projects.InviteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_projects_InviteRequest(buffer_arg) {
  return api_projects_projects_pb.InviteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_projects_InviteResponse(arg) {
  if (!(arg instanceof api_projects_projects_pb.InviteResponse)) {
    throw new Error('Expected argument of type api.projects.InviteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_projects_InviteResponse(buffer_arg) {
  return api_projects_projects_pb.InviteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_projects_ListRequest(arg) {
  if (!(arg instanceof api_projects_projects_pb.ListRequest)) {
    throw new Error('Expected argument of type api.projects.ListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_projects_ListRequest(buffer_arg) {
  return api_projects_projects_pb.ListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_projects_ListResponse(arg) {
  if (!(arg instanceof api_projects_projects_pb.ListResponse)) {
    throw new Error('Expected argument of type api.projects.ListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_projects_ListResponse(buffer_arg) {
  return api_projects_projects_pb.ListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProjectsService = exports.ProjectsService = {
  get: {
    path: '/api.projects.Projects/Get',
    requestStream: false,
    responseStream: false,
    requestType: api_projects_projects_pb.GetRequest,
    responseType: api_projects_projects_pb.GetResponse,
    requestSerialize: serialize_api_projects_GetRequest,
    requestDeserialize: deserialize_api_projects_GetRequest,
    responseSerialize: serialize_api_projects_GetResponse,
    responseDeserialize: deserialize_api_projects_GetResponse,
  },
  create: {
    path: '/api.projects.Projects/Create',
    requestStream: false,
    responseStream: false,
    requestType: api_projects_projects_pb.CreateRequest,
    responseType: api_projects_projects_pb.CreateResponse,
    requestSerialize: serialize_api_projects_CreateRequest,
    requestDeserialize: deserialize_api_projects_CreateRequest,
    responseSerialize: serialize_api_projects_CreateResponse,
    responseDeserialize: deserialize_api_projects_CreateResponse,
  },
  list: {
    path: '/api.projects.Projects/List',
    requestStream: false,
    responseStream: false,
    requestType: api_projects_projects_pb.ListRequest,
    responseType: api_projects_projects_pb.ListResponse,
    requestSerialize: serialize_api_projects_ListRequest,
    requestDeserialize: deserialize_api_projects_ListRequest,
    responseSerialize: serialize_api_projects_ListResponse,
    responseDeserialize: deserialize_api_projects_ListResponse,
  },
  invite: {
    path: '/api.projects.Projects/Invite',
    requestStream: false,
    responseStream: false,
    requestType: api_projects_projects_pb.InviteRequest,
    responseType: api_projects_projects_pb.InviteResponse,
    requestSerialize: serialize_api_projects_InviteRequest,
    requestDeserialize: deserialize_api_projects_InviteRequest,
    responseSerialize: serialize_api_projects_InviteResponse,
    responseDeserialize: deserialize_api_projects_InviteResponse,
  },
};

exports.ProjectsClient = grpc.makeGenericClientConstructor(ProjectsService);
