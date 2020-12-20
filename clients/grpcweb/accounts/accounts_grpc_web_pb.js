/**
 * @fileoverview gRPC-Web generated client stub for accounts
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.accounts = require('./accounts_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.accounts.AccountsClient =
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
proto.accounts.AccountsPromiseClient =
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
 *   !proto.accounts.CreateRequest,
 *   !proto.accounts.CreateResponse>}
 */
const methodDescriptor_Accounts_Create = new grpc.web.MethodDescriptor(
  '/accounts.Accounts/Create',
  grpc.web.MethodType.UNARY,
  proto.accounts.CreateRequest,
  proto.accounts.CreateResponse,
  /**
   * @param {!proto.accounts.CreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accounts.CreateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accounts.CreateRequest,
 *   !proto.accounts.CreateResponse>}
 */
const methodInfo_Accounts_Create = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accounts.CreateResponse,
  /**
   * @param {!proto.accounts.CreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accounts.CreateResponse.deserializeBinary
);


/**
 * @param {!proto.accounts.CreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accounts.CreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accounts.CreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accounts.AccountsClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accounts.Accounts/Create',
      request,
      metadata || {},
      methodDescriptor_Accounts_Create,
      callback);
};


/**
 * @param {!proto.accounts.CreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accounts.CreateResponse>}
 *     A native promise that resolves to the response
 */
proto.accounts.AccountsPromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accounts.Accounts/Create',
      request,
      metadata || {},
      methodDescriptor_Accounts_Create);
};


module.exports = proto.accounts;

