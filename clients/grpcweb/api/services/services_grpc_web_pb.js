/**
 * @fileoverview gRPC-Web generated client stub for api.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.api = {};
proto.api.services = require('./services_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.api.services.ServicesClient =
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
proto.api.services.ServicesPromiseClient =
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
 *   !proto.api.services.GetRequest,
 *   !proto.api.services.GetResponse>}
 */
const methodDescriptor_Services_Get = new grpc.web.MethodDescriptor(
  '/api.services.Services/Get',
  grpc.web.MethodType.UNARY,
  proto.api.services.GetRequest,
  proto.api.services.GetResponse,
  /**
   * @param {!proto.api.services.GetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.services.GetResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.services.GetRequest,
 *   !proto.api.services.GetResponse>}
 */
const methodInfo_Services_Get = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.services.GetResponse,
  /**
   * @param {!proto.api.services.GetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.services.GetResponse.deserializeBinary
);


/**
 * @param {!proto.api.services.GetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.services.GetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.services.GetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.services.ServicesClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.services.Services/Get',
      request,
      metadata || {},
      methodDescriptor_Services_Get,
      callback);
};


/**
 * @param {!proto.api.services.GetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.services.GetResponse>}
 *     A native promise that resolves to the response
 */
proto.api.services.ServicesPromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.services.Services/Get',
      request,
      metadata || {},
      methodDescriptor_Services_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.services.CreateRequest,
 *   !proto.api.services.CreateResponse>}
 */
const methodDescriptor_Services_Create = new grpc.web.MethodDescriptor(
  '/api.services.Services/Create',
  grpc.web.MethodType.UNARY,
  proto.api.services.CreateRequest,
  proto.api.services.CreateResponse,
  /**
   * @param {!proto.api.services.CreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.services.CreateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.services.CreateRequest,
 *   !proto.api.services.CreateResponse>}
 */
const methodInfo_Services_Create = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.services.CreateResponse,
  /**
   * @param {!proto.api.services.CreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.services.CreateResponse.deserializeBinary
);


/**
 * @param {!proto.api.services.CreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.services.CreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.services.CreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.services.ServicesClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.services.Services/Create',
      request,
      metadata || {},
      methodDescriptor_Services_Create,
      callback);
};


/**
 * @param {!proto.api.services.CreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.services.CreateResponse>}
 *     A native promise that resolves to the response
 */
proto.api.services.ServicesPromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.services.Services/Create',
      request,
      metadata || {},
      methodDescriptor_Services_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.services.ListRequest,
 *   !proto.api.services.ListResponse>}
 */
const methodDescriptor_Services_List = new grpc.web.MethodDescriptor(
  '/api.services.Services/List',
  grpc.web.MethodType.UNARY,
  proto.api.services.ListRequest,
  proto.api.services.ListResponse,
  /**
   * @param {!proto.api.services.ListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.services.ListResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.services.ListRequest,
 *   !proto.api.services.ListResponse>}
 */
const methodInfo_Services_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.services.ListResponse,
  /**
   * @param {!proto.api.services.ListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.services.ListResponse.deserializeBinary
);


/**
 * @param {!proto.api.services.ListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.services.ListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.services.ListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.services.ServicesClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.services.Services/List',
      request,
      metadata || {},
      methodDescriptor_Services_List,
      callback);
};


/**
 * @param {!proto.api.services.ListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.services.ListResponse>}
 *     A native promise that resolves to the response
 */
proto.api.services.ServicesPromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.services.Services/List',
      request,
      metadata || {},
      methodDescriptor_Services_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.services.ListVersionsRequest,
 *   !proto.api.services.ListVersionsResponse>}
 */
const methodDescriptor_Services_ListVersions = new grpc.web.MethodDescriptor(
  '/api.services.Services/ListVersions',
  grpc.web.MethodType.UNARY,
  proto.api.services.ListVersionsRequest,
  proto.api.services.ListVersionsResponse,
  /**
   * @param {!proto.api.services.ListVersionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.services.ListVersionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.services.ListVersionsRequest,
 *   !proto.api.services.ListVersionsResponse>}
 */
const methodInfo_Services_ListVersions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.services.ListVersionsResponse,
  /**
   * @param {!proto.api.services.ListVersionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.services.ListVersionsResponse.deserializeBinary
);


/**
 * @param {!proto.api.services.ListVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.services.ListVersionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.services.ListVersionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.services.ServicesClient.prototype.listVersions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.services.Services/ListVersions',
      request,
      metadata || {},
      methodDescriptor_Services_ListVersions,
      callback);
};


/**
 * @param {!proto.api.services.ListVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.services.ListVersionsResponse>}
 *     A native promise that resolves to the response
 */
proto.api.services.ServicesPromiseClient.prototype.listVersions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.services.Services/ListVersions',
      request,
      metadata || {},
      methodDescriptor_Services_ListVersions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.services.GetBuildLogRequest,
 *   !proto.api.services.GetBuildLogResponse>}
 */
const methodDescriptor_Services_GetBuildLog = new grpc.web.MethodDescriptor(
  '/api.services.Services/GetBuildLog',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.api.services.GetBuildLogRequest,
  proto.api.services.GetBuildLogResponse,
  /**
   * @param {!proto.api.services.GetBuildLogRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.services.GetBuildLogResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.services.GetBuildLogRequest,
 *   !proto.api.services.GetBuildLogResponse>}
 */
const methodInfo_Services_GetBuildLog = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.services.GetBuildLogResponse,
  /**
   * @param {!proto.api.services.GetBuildLogRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.services.GetBuildLogResponse.deserializeBinary
);


/**
 * @param {!proto.api.services.GetBuildLogRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.api.services.GetBuildLogResponse>}
 *     The XHR Node Readable Stream
 */
proto.api.services.ServicesClient.prototype.getBuildLog =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/api.services.Services/GetBuildLog',
      request,
      metadata || {},
      methodDescriptor_Services_GetBuildLog);
};


/**
 * @param {!proto.api.services.GetBuildLogRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.api.services.GetBuildLogResponse>}
 *     The XHR Node Readable Stream
 */
proto.api.services.ServicesPromiseClient.prototype.getBuildLog =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/api.services.Services/GetBuildLog',
      request,
      metadata || {},
      methodDescriptor_Services_GetBuildLog);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.services.ListGithubReposRequest,
 *   !proto.api.services.ListGithubReposResponse>}
 */
const methodDescriptor_Services_ListGithubRepos = new grpc.web.MethodDescriptor(
  '/api.services.Services/ListGithubRepos',
  grpc.web.MethodType.UNARY,
  proto.api.services.ListGithubReposRequest,
  proto.api.services.ListGithubReposResponse,
  /**
   * @param {!proto.api.services.ListGithubReposRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.services.ListGithubReposResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.services.ListGithubReposRequest,
 *   !proto.api.services.ListGithubReposResponse>}
 */
const methodInfo_Services_ListGithubRepos = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.services.ListGithubReposResponse,
  /**
   * @param {!proto.api.services.ListGithubReposRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.services.ListGithubReposResponse.deserializeBinary
);


/**
 * @param {!proto.api.services.ListGithubReposRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.services.ListGithubReposResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.services.ListGithubReposResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.services.ServicesClient.prototype.listGithubRepos =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.services.Services/ListGithubRepos',
      request,
      metadata || {},
      methodDescriptor_Services_ListGithubRepos,
      callback);
};


/**
 * @param {!proto.api.services.ListGithubReposRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.services.ListGithubReposResponse>}
 *     A native promise that resolves to the response
 */
proto.api.services.ServicesPromiseClient.prototype.listGithubRepos =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.services.Services/ListGithubRepos',
      request,
      metadata || {},
      methodDescriptor_Services_ListGithubRepos);
};


module.exports = proto.api.services;

