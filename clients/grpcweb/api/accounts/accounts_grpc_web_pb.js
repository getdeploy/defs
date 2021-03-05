/**
 * @fileoverview gRPC-Web generated client stub for api.accounts
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.api = {};
proto.api.accounts = require('./accounts_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.api.accounts.AccountsClient =
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
proto.api.accounts.AccountsPromiseClient =
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
 *   !proto.api.accounts.CreateRequest,
 *   !proto.api.accounts.CreateResponse>}
 */
const methodDescriptor_Accounts_Create = new grpc.web.MethodDescriptor(
  '/api.accounts.Accounts/Create',
  grpc.web.MethodType.UNARY,
  proto.api.accounts.CreateRequest,
  proto.api.accounts.CreateResponse,
  /**
   * @param {!proto.api.accounts.CreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.accounts.CreateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.accounts.CreateRequest,
 *   !proto.api.accounts.CreateResponse>}
 */
const methodInfo_Accounts_Create = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.accounts.CreateResponse,
  /**
   * @param {!proto.api.accounts.CreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.accounts.CreateResponse.deserializeBinary
);


/**
 * @param {!proto.api.accounts.CreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.accounts.CreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.accounts.CreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.accounts.AccountsClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.accounts.Accounts/Create',
      request,
      metadata || {},
      methodDescriptor_Accounts_Create,
      callback);
};


/**
 * @param {!proto.api.accounts.CreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.accounts.CreateResponse>}
 *     A native promise that resolves to the response
 */
proto.api.accounts.AccountsPromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.accounts.Accounts/Create',
      request,
      metadata || {},
      methodDescriptor_Accounts_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.accounts.GetRequest,
 *   !proto.api.accounts.GetResponse>}
 */
const methodDescriptor_Accounts_Get = new grpc.web.MethodDescriptor(
  '/api.accounts.Accounts/Get',
  grpc.web.MethodType.UNARY,
  proto.api.accounts.GetRequest,
  proto.api.accounts.GetResponse,
  /**
   * @param {!proto.api.accounts.GetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.accounts.GetResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.accounts.GetRequest,
 *   !proto.api.accounts.GetResponse>}
 */
const methodInfo_Accounts_Get = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.accounts.GetResponse,
  /**
   * @param {!proto.api.accounts.GetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.accounts.GetResponse.deserializeBinary
);


/**
 * @param {!proto.api.accounts.GetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.accounts.GetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.accounts.GetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.accounts.AccountsClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.accounts.Accounts/Get',
      request,
      metadata || {},
      methodDescriptor_Accounts_Get,
      callback);
};


/**
 * @param {!proto.api.accounts.GetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.accounts.GetResponse>}
 *     A native promise that resolves to the response
 */
proto.api.accounts.AccountsPromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.accounts.Accounts/Get',
      request,
      metadata || {},
      methodDescriptor_Accounts_Get);
};


module.exports = proto.api.accounts;

