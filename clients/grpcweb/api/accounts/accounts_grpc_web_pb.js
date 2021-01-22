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


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.accounts.GetAuthURLRequest,
 *   !proto.api.accounts.GetAuthURLResponse>}
 */
const methodDescriptor_Accounts_GetAuthURL = new grpc.web.MethodDescriptor(
  '/api.accounts.Accounts/GetAuthURL',
  grpc.web.MethodType.UNARY,
  proto.api.accounts.GetAuthURLRequest,
  proto.api.accounts.GetAuthURLResponse,
  /**
   * @param {!proto.api.accounts.GetAuthURLRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.accounts.GetAuthURLResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.accounts.GetAuthURLRequest,
 *   !proto.api.accounts.GetAuthURLResponse>}
 */
const methodInfo_Accounts_GetAuthURL = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.accounts.GetAuthURLResponse,
  /**
   * @param {!proto.api.accounts.GetAuthURLRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.accounts.GetAuthURLResponse.deserializeBinary
);


/**
 * @param {!proto.api.accounts.GetAuthURLRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.accounts.GetAuthURLResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.accounts.GetAuthURLResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.accounts.AccountsClient.prototype.getAuthURL =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.accounts.Accounts/GetAuthURL',
      request,
      metadata || {},
      methodDescriptor_Accounts_GetAuthURL,
      callback);
};


/**
 * @param {!proto.api.accounts.GetAuthURLRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.accounts.GetAuthURLResponse>}
 *     A native promise that resolves to the response
 */
proto.api.accounts.AccountsPromiseClient.prototype.getAuthURL =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.accounts.Accounts/GetAuthURL',
      request,
      metadata || {},
      methodDescriptor_Accounts_GetAuthURL);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.accounts.ExchangeAuthCodeRequest,
 *   !proto.api.accounts.ExchangeAuthCodeResponse>}
 */
const methodDescriptor_Accounts_ExchangeAuthCode = new grpc.web.MethodDescriptor(
  '/api.accounts.Accounts/ExchangeAuthCode',
  grpc.web.MethodType.UNARY,
  proto.api.accounts.ExchangeAuthCodeRequest,
  proto.api.accounts.ExchangeAuthCodeResponse,
  /**
   * @param {!proto.api.accounts.ExchangeAuthCodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.accounts.ExchangeAuthCodeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.accounts.ExchangeAuthCodeRequest,
 *   !proto.api.accounts.ExchangeAuthCodeResponse>}
 */
const methodInfo_Accounts_ExchangeAuthCode = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.accounts.ExchangeAuthCodeResponse,
  /**
   * @param {!proto.api.accounts.ExchangeAuthCodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.accounts.ExchangeAuthCodeResponse.deserializeBinary
);


/**
 * @param {!proto.api.accounts.ExchangeAuthCodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.accounts.ExchangeAuthCodeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.accounts.ExchangeAuthCodeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.accounts.AccountsClient.prototype.exchangeAuthCode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.accounts.Accounts/ExchangeAuthCode',
      request,
      metadata || {},
      methodDescriptor_Accounts_ExchangeAuthCode,
      callback);
};


/**
 * @param {!proto.api.accounts.ExchangeAuthCodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.accounts.ExchangeAuthCodeResponse>}
 *     A native promise that resolves to the response
 */
proto.api.accounts.AccountsPromiseClient.prototype.exchangeAuthCode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.accounts.Accounts/ExchangeAuthCode',
      request,
      metadata || {},
      methodDescriptor_Accounts_ExchangeAuthCode);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.accounts.RefreshTokenRequest,
 *   !proto.api.accounts.RefreshTokenResponse>}
 */
const methodDescriptor_Accounts_RefreshToken = new grpc.web.MethodDescriptor(
  '/api.accounts.Accounts/RefreshToken',
  grpc.web.MethodType.UNARY,
  proto.api.accounts.RefreshTokenRequest,
  proto.api.accounts.RefreshTokenResponse,
  /**
   * @param {!proto.api.accounts.RefreshTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.accounts.RefreshTokenResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.accounts.RefreshTokenRequest,
 *   !proto.api.accounts.RefreshTokenResponse>}
 */
const methodInfo_Accounts_RefreshToken = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.accounts.RefreshTokenResponse,
  /**
   * @param {!proto.api.accounts.RefreshTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.accounts.RefreshTokenResponse.deserializeBinary
);


/**
 * @param {!proto.api.accounts.RefreshTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.accounts.RefreshTokenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.accounts.RefreshTokenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.accounts.AccountsClient.prototype.refreshToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.accounts.Accounts/RefreshToken',
      request,
      metadata || {},
      methodDescriptor_Accounts_RefreshToken,
      callback);
};


/**
 * @param {!proto.api.accounts.RefreshTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.accounts.RefreshTokenResponse>}
 *     A native promise that resolves to the response
 */
proto.api.accounts.AccountsPromiseClient.prototype.refreshToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.accounts.Accounts/RefreshToken',
      request,
      metadata || {},
      methodDescriptor_Accounts_RefreshToken);
};


module.exports = proto.api.accounts;

