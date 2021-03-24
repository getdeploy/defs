/**
 * @fileoverview gRPC-Web generated client stub for api.projects
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.api = {};
proto.api.projects = require('./projects_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.api.projects.ProjectsClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.api.projects.ProjectsPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.projects.GetRequest,
 *   !proto.api.projects.GetResponse>}
 */
const methodDescriptor_Projects_Get = new grpc.web.MethodDescriptor(
  '/api.projects.Projects/Get',
  grpc.web.MethodType.UNARY,
  proto.api.projects.GetRequest,
  proto.api.projects.GetResponse,
  /**
   * @param {!proto.api.projects.GetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.projects.GetResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.projects.GetRequest,
 *   !proto.api.projects.GetResponse>}
 */
const methodInfo_Projects_Get = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.projects.GetResponse,
  /**
   * @param {!proto.api.projects.GetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.projects.GetResponse.deserializeBinary
);


/**
 * @param {!proto.api.projects.GetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.projects.GetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.projects.GetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.projects.ProjectsClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.projects.Projects/Get',
      request,
      metadata || {},
      methodDescriptor_Projects_Get,
      callback);
};


/**
 * @param {!proto.api.projects.GetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.projects.GetResponse>}
 *     A native promise that resolves to the response
 */
proto.api.projects.ProjectsPromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.projects.Projects/Get',
      request,
      metadata || {},
      methodDescriptor_Projects_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.projects.CreateRequest,
 *   !proto.api.projects.CreateResponse>}
 */
const methodDescriptor_Projects_Create = new grpc.web.MethodDescriptor(
  '/api.projects.Projects/Create',
  grpc.web.MethodType.UNARY,
  proto.api.projects.CreateRequest,
  proto.api.projects.CreateResponse,
  /**
   * @param {!proto.api.projects.CreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.projects.CreateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.projects.CreateRequest,
 *   !proto.api.projects.CreateResponse>}
 */
const methodInfo_Projects_Create = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.projects.CreateResponse,
  /**
   * @param {!proto.api.projects.CreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.projects.CreateResponse.deserializeBinary
);


/**
 * @param {!proto.api.projects.CreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.projects.CreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.projects.CreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.projects.ProjectsClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.projects.Projects/Create',
      request,
      metadata || {},
      methodDescriptor_Projects_Create,
      callback);
};


/**
 * @param {!proto.api.projects.CreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.projects.CreateResponse>}
 *     A native promise that resolves to the response
 */
proto.api.projects.ProjectsPromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.projects.Projects/Create',
      request,
      metadata || {},
      methodDescriptor_Projects_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.projects.ListRequest,
 *   !proto.api.projects.ListResponse>}
 */
const methodDescriptor_Projects_List = new grpc.web.MethodDescriptor(
  '/api.projects.Projects/List',
  grpc.web.MethodType.UNARY,
  proto.api.projects.ListRequest,
  proto.api.projects.ListResponse,
  /**
   * @param {!proto.api.projects.ListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.projects.ListResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.projects.ListRequest,
 *   !proto.api.projects.ListResponse>}
 */
const methodInfo_Projects_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.projects.ListResponse,
  /**
   * @param {!proto.api.projects.ListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.projects.ListResponse.deserializeBinary
);


/**
 * @param {!proto.api.projects.ListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.projects.ListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.projects.ListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.projects.ProjectsClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.projects.Projects/List',
      request,
      metadata || {},
      methodDescriptor_Projects_List,
      callback);
};


/**
 * @param {!proto.api.projects.ListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.projects.ListResponse>}
 *     A native promise that resolves to the response
 */
proto.api.projects.ProjectsPromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.projects.Projects/List',
      request,
      metadata || {},
      methodDescriptor_Projects_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.projects.InviteRequest,
 *   !proto.api.projects.InviteResponse>}
 */
const methodDescriptor_Projects_Invite = new grpc.web.MethodDescriptor(
  '/api.projects.Projects/Invite',
  grpc.web.MethodType.UNARY,
  proto.api.projects.InviteRequest,
  proto.api.projects.InviteResponse,
  /**
   * @param {!proto.api.projects.InviteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.projects.InviteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.projects.InviteRequest,
 *   !proto.api.projects.InviteResponse>}
 */
const methodInfo_Projects_Invite = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.projects.InviteResponse,
  /**
   * @param {!proto.api.projects.InviteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.projects.InviteResponse.deserializeBinary
);


/**
 * @param {!proto.api.projects.InviteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.projects.InviteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.projects.InviteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.projects.ProjectsClient.prototype.invite =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.projects.Projects/Invite',
      request,
      metadata || {},
      methodDescriptor_Projects_Invite,
      callback);
};


/**
 * @param {!proto.api.projects.InviteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.projects.InviteResponse>}
 *     A native promise that resolves to the response
 */
proto.api.projects.ProjectsPromiseClient.prototype.invite =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.projects.Projects/Invite',
      request,
      metadata || {},
      methodDescriptor_Projects_Invite);
};


module.exports = proto.api.projects;

