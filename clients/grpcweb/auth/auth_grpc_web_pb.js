/**
 * @fileoverview gRPC-Web generated client stub for auth
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.auth = require('./auth_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.auth.AuthClient =
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
proto.auth.AuthPromiseClient =
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
 *   !proto.auth.OAuthURLRequest,
 *   !proto.auth.OAuthURLResponse>}
 */
const methodDescriptor_Auth_OAuthURL = new grpc.web.MethodDescriptor(
  '/auth.Auth/OAuthURL',
  grpc.web.MethodType.UNARY,
  proto.auth.OAuthURLRequest,
  proto.auth.OAuthURLResponse,
  /**
   * @param {!proto.auth.OAuthURLRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth.OAuthURLResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.auth.OAuthURLRequest,
 *   !proto.auth.OAuthURLResponse>}
 */
const methodInfo_Auth_OAuthURL = new grpc.web.AbstractClientBase.MethodInfo(
  proto.auth.OAuthURLResponse,
  /**
   * @param {!proto.auth.OAuthURLRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth.OAuthURLResponse.deserializeBinary
);


/**
 * @param {!proto.auth.OAuthURLRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.auth.OAuthURLResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.auth.OAuthURLResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.AuthClient.prototype.oAuthURL =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.Auth/OAuthURL',
      request,
      metadata || {},
      methodDescriptor_Auth_OAuthURL,
      callback);
};


/**
 * @param {!proto.auth.OAuthURLRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.auth.OAuthURLResponse>}
 *     A native promise that resolves to the response
 */
proto.auth.AuthPromiseClient.prototype.oAuthURL =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.Auth/OAuthURL',
      request,
      metadata || {},
      methodDescriptor_Auth_OAuthURL);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.auth.OAuthExchangeRequest,
 *   !proto.auth.OAuthExchangeResponse>}
 */
const methodDescriptor_Auth_OAuthExchange = new grpc.web.MethodDescriptor(
  '/auth.Auth/OAuthExchange',
  grpc.web.MethodType.UNARY,
  proto.auth.OAuthExchangeRequest,
  proto.auth.OAuthExchangeResponse,
  /**
   * @param {!proto.auth.OAuthExchangeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth.OAuthExchangeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.auth.OAuthExchangeRequest,
 *   !proto.auth.OAuthExchangeResponse>}
 */
const methodInfo_Auth_OAuthExchange = new grpc.web.AbstractClientBase.MethodInfo(
  proto.auth.OAuthExchangeResponse,
  /**
   * @param {!proto.auth.OAuthExchangeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth.OAuthExchangeResponse.deserializeBinary
);


/**
 * @param {!proto.auth.OAuthExchangeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.auth.OAuthExchangeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.auth.OAuthExchangeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.AuthClient.prototype.oAuthExchange =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.Auth/OAuthExchange',
      request,
      metadata || {},
      methodDescriptor_Auth_OAuthExchange,
      callback);
};


/**
 * @param {!proto.auth.OAuthExchangeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.auth.OAuthExchangeResponse>}
 *     A native promise that resolves to the response
 */
proto.auth.AuthPromiseClient.prototype.oAuthExchange =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.Auth/OAuthExchange',
      request,
      metadata || {},
      methodDescriptor_Auth_OAuthExchange);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.auth.TokenExchangeRequest,
 *   !proto.auth.TokenExchangeResponse>}
 */
const methodDescriptor_Auth_TokenExchange = new grpc.web.MethodDescriptor(
  '/auth.Auth/TokenExchange',
  grpc.web.MethodType.UNARY,
  proto.auth.TokenExchangeRequest,
  proto.auth.TokenExchangeResponse,
  /**
   * @param {!proto.auth.TokenExchangeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth.TokenExchangeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.auth.TokenExchangeRequest,
 *   !proto.auth.TokenExchangeResponse>}
 */
const methodInfo_Auth_TokenExchange = new grpc.web.AbstractClientBase.MethodInfo(
  proto.auth.TokenExchangeResponse,
  /**
   * @param {!proto.auth.TokenExchangeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth.TokenExchangeResponse.deserializeBinary
);


/**
 * @param {!proto.auth.TokenExchangeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.auth.TokenExchangeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.auth.TokenExchangeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.AuthClient.prototype.tokenExchange =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.Auth/TokenExchange',
      request,
      metadata || {},
      methodDescriptor_Auth_TokenExchange,
      callback);
};


/**
 * @param {!proto.auth.TokenExchangeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.auth.TokenExchangeResponse>}
 *     A native promise that resolves to the response
 */
proto.auth.AuthPromiseClient.prototype.tokenExchange =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.Auth/TokenExchange',
      request,
      metadata || {},
      methodDescriptor_Auth_TokenExchange);
};


module.exports = proto.auth;

