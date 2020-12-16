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
 *   !proto.accounts.OAuthLoginRequest,
 *   !proto.accounts.OAuthLoginResponse>}
 */
const methodDescriptor_Accounts_OAuthLogin = new grpc.web.MethodDescriptor(
  '/accounts.Accounts/OAuthLogin',
  grpc.web.MethodType.UNARY,
  proto.accounts.OAuthLoginRequest,
  proto.accounts.OAuthLoginResponse,
  /**
   * @param {!proto.accounts.OAuthLoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accounts.OAuthLoginResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accounts.OAuthLoginRequest,
 *   !proto.accounts.OAuthLoginResponse>}
 */
const methodInfo_Accounts_OAuthLogin = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accounts.OAuthLoginResponse,
  /**
   * @param {!proto.accounts.OAuthLoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accounts.OAuthLoginResponse.deserializeBinary
);


/**
 * @param {!proto.accounts.OAuthLoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accounts.OAuthLoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accounts.OAuthLoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accounts.AccountsClient.prototype.oAuthLogin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accounts.Accounts/OAuthLogin',
      request,
      metadata || {},
      methodDescriptor_Accounts_OAuthLogin,
      callback);
};


/**
 * @param {!proto.accounts.OAuthLoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accounts.OAuthLoginResponse>}
 *     A native promise that resolves to the response
 */
proto.accounts.AccountsPromiseClient.prototype.oAuthLogin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accounts.Accounts/OAuthLogin',
      request,
      metadata || {},
      methodDescriptor_Accounts_OAuthLogin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accounts.OAuthExchangeRequest,
 *   !proto.accounts.OAuthExchangeResponse>}
 */
const methodDescriptor_Accounts_OAuthExchange = new grpc.web.MethodDescriptor(
  '/accounts.Accounts/OAuthExchange',
  grpc.web.MethodType.UNARY,
  proto.accounts.OAuthExchangeRequest,
  proto.accounts.OAuthExchangeResponse,
  /**
   * @param {!proto.accounts.OAuthExchangeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accounts.OAuthExchangeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accounts.OAuthExchangeRequest,
 *   !proto.accounts.OAuthExchangeResponse>}
 */
const methodInfo_Accounts_OAuthExchange = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accounts.OAuthExchangeResponse,
  /**
   * @param {!proto.accounts.OAuthExchangeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accounts.OAuthExchangeResponse.deserializeBinary
);


/**
 * @param {!proto.accounts.OAuthExchangeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accounts.OAuthExchangeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accounts.OAuthExchangeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accounts.AccountsClient.prototype.oAuthExchange =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accounts.Accounts/OAuthExchange',
      request,
      metadata || {},
      methodDescriptor_Accounts_OAuthExchange,
      callback);
};


/**
 * @param {!proto.accounts.OAuthExchangeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accounts.OAuthExchangeResponse>}
 *     A native promise that resolves to the response
 */
proto.accounts.AccountsPromiseClient.prototype.oAuthExchange =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accounts.Accounts/OAuthExchange',
      request,
      metadata || {},
      methodDescriptor_Accounts_OAuthExchange);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accounts.TokenExchangeRequest,
 *   !proto.accounts.TokenExchangeResponse>}
 */
const methodDescriptor_Accounts_TokenExchange = new grpc.web.MethodDescriptor(
  '/accounts.Accounts/TokenExchange',
  grpc.web.MethodType.UNARY,
  proto.accounts.TokenExchangeRequest,
  proto.accounts.TokenExchangeResponse,
  /**
   * @param {!proto.accounts.TokenExchangeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accounts.TokenExchangeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accounts.TokenExchangeRequest,
 *   !proto.accounts.TokenExchangeResponse>}
 */
const methodInfo_Accounts_TokenExchange = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accounts.TokenExchangeResponse,
  /**
   * @param {!proto.accounts.TokenExchangeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accounts.TokenExchangeResponse.deserializeBinary
);


/**
 * @param {!proto.accounts.TokenExchangeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accounts.TokenExchangeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accounts.TokenExchangeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accounts.AccountsClient.prototype.tokenExchange =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accounts.Accounts/TokenExchange',
      request,
      metadata || {},
      methodDescriptor_Accounts_TokenExchange,
      callback);
};


/**
 * @param {!proto.accounts.TokenExchangeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accounts.TokenExchangeResponse>}
 *     A native promise that resolves to the response
 */
proto.accounts.AccountsPromiseClient.prototype.tokenExchange =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accounts.Accounts/TokenExchange',
      request,
      metadata || {},
      methodDescriptor_Accounts_TokenExchange);
};


module.exports = proto.accounts;

