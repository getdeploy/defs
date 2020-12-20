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
 *   !proto.auth.OAuthLoginRequest,
 *   !proto.auth.OAuthLoginResponse>}
 */
const methodDescriptor_Auth_OAuthLogin = new grpc.web.MethodDescriptor(
  '/auth.Auth/OAuthLogin',
  grpc.web.MethodType.UNARY,
  proto.auth.OAuthLoginRequest,
  proto.auth.OAuthLoginResponse,
  /**
   * @param {!proto.auth.OAuthLoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth.OAuthLoginResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.auth.OAuthLoginRequest,
 *   !proto.auth.OAuthLoginResponse>}
 */
const methodInfo_Auth_OAuthLogin = new grpc.web.AbstractClientBase.MethodInfo(
  proto.auth.OAuthLoginResponse,
  /**
   * @param {!proto.auth.OAuthLoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth.OAuthLoginResponse.deserializeBinary
);


/**
 * @param {!proto.auth.OAuthLoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.auth.OAuthLoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.auth.OAuthLoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.AuthClient.prototype.oAuthLogin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.Auth/OAuthLogin',
      request,
      metadata || {},
      methodDescriptor_Auth_OAuthLogin,
      callback);
};


/**
 * @param {!proto.auth.OAuthLoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.auth.OAuthLoginResponse>}
 *     A native promise that resolves to the response
 */
proto.auth.AuthPromiseClient.prototype.oAuthLogin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.Auth/OAuthLogin',
      request,
      metadata || {},
      methodDescriptor_Auth_OAuthLogin);
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


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.auth.CreateRequest,
 *   !proto.auth.CreateResponse>}
 */
const methodDescriptor_Auth_Create = new grpc.web.MethodDescriptor(
  '/auth.Auth/Create',
  grpc.web.MethodType.UNARY,
  proto.auth.CreateRequest,
  proto.auth.CreateResponse,
  /**
   * @param {!proto.auth.CreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth.CreateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.auth.CreateRequest,
 *   !proto.auth.CreateResponse>}
 */
const methodInfo_Auth_Create = new grpc.web.AbstractClientBase.MethodInfo(
  proto.auth.CreateResponse,
  /**
   * @param {!proto.auth.CreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth.CreateResponse.deserializeBinary
);


/**
 * @param {!proto.auth.CreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.auth.CreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.auth.CreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.AuthClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.Auth/Create',
      request,
      metadata || {},
      methodDescriptor_Auth_Create,
      callback);
};


/**
 * @param {!proto.auth.CreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.auth.CreateResponse>}
 *     A native promise that resolves to the response
 */
proto.auth.AuthPromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.Auth/Create',
      request,
      metadata || {},
      methodDescriptor_Auth_Create);
};


module.exports = proto.auth;

