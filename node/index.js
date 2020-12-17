// GENERATED CODE -- DO NOT EDIT!
var grpc = require('@grpc/grpc-js');
var accounts_accounts_pb = require('../accounts/accounts_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_accounts_OAuthExchangeRequest(arg) {
  if (!(arg instanceof accounts_accounts_pb.OAuthExchangeRequest)) {
    throw new Error('Expected argument of type accounts.OAuthExchangeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_accounts_OAuthExchangeRequest(buffer_arg) {
  return accounts_accounts_pb.OAuthExchangeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_OAuthExchangeResponse(arg) {
  if (!(arg instanceof accounts_accounts_pb.OAuthExchangeResponse)) {
    throw new Error('Expected argument of type accounts.OAuthExchangeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_accounts_OAuthExchangeResponse(buffer_arg) {
  return accounts_accounts_pb.OAuthExchangeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_OAuthLoginRequest(arg) {
  if (!(arg instanceof accounts_accounts_pb.OAuthLoginRequest)) {
    throw new Error('Expected argument of type accounts.OAuthLoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_accounts_OAuthLoginRequest(buffer_arg) {
  return accounts_accounts_pb.OAuthLoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_OAuthLoginResponse(arg) {
  if (!(arg instanceof accounts_accounts_pb.OAuthLoginResponse)) {
    throw new Error('Expected argument of type accounts.OAuthLoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_accounts_OAuthLoginResponse(buffer_arg) {
  return accounts_accounts_pb.OAuthLoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_TokenExchangeRequest(arg) {
  if (!(arg instanceof accounts_accounts_pb.TokenExchangeRequest)) {
    throw new Error('Expected argument of type accounts.TokenExchangeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_accounts_TokenExchangeRequest(buffer_arg) {
  return accounts_accounts_pb.TokenExchangeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_TokenExchangeResponse(arg) {
  if (!(arg instanceof accounts_accounts_pb.TokenExchangeResponse)) {
    throw new Error('Expected argument of type accounts.TokenExchangeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_accounts_TokenExchangeResponse(buffer_arg) {
  return accounts_accounts_pb.TokenExchangeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AccountsService = exports.AccountsService = {
  oAuthLogin: {
    path: '/accounts.Accounts/OAuthLogin',
    requestStream: false,
    responseStream: false,
    requestType: accounts_accounts_pb.OAuthLoginRequest,
    responseType: accounts_accounts_pb.OAuthLoginResponse,
    requestSerialize: serialize_accounts_OAuthLoginRequest,
    requestDeserialize: deserialize_accounts_OAuthLoginRequest,
    responseSerialize: serialize_accounts_OAuthLoginResponse,
    responseDeserialize: deserialize_accounts_OAuthLoginResponse,
  },
  oAuthExchange: {
    path: '/accounts.Accounts/OAuthExchange',
    requestStream: false,
    responseStream: false,
    requestType: accounts_accounts_pb.OAuthExchangeRequest,
    responseType: accounts_accounts_pb.OAuthExchangeResponse,
    requestSerialize: serialize_accounts_OAuthExchangeRequest,
    requestDeserialize: deserialize_accounts_OAuthExchangeRequest,
    responseSerialize: serialize_accounts_OAuthExchangeResponse,
    responseDeserialize: deserialize_accounts_OAuthExchangeResponse,
  },
  tokenExchange: {
    path: '/accounts.Accounts/TokenExchange',
    requestStream: false,
    responseStream: false,
    requestType: accounts_accounts_pb.TokenExchangeRequest,
    responseType: accounts_accounts_pb.TokenExchangeResponse,
    requestSerialize: serialize_accounts_TokenExchangeRequest,
    requestDeserialize: deserialize_accounts_TokenExchangeRequest,
    responseSerialize: serialize_accounts_TokenExchangeResponse,
    responseDeserialize: deserialize_accounts_TokenExchangeResponse,
  },
};

exports.AccountsClient = grpc.makeGenericClientConstructor(AccountsService);

// source: accounts/accounts.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_timestamp_pb$1 = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb$1);
goog.exportSymbol('proto.accounts.Account', null, global);
goog.exportSymbol('proto.accounts.OAuthExchangeRequest', null, global);
goog.exportSymbol('proto.accounts.OAuthExchangeResponse', null, global);
goog.exportSymbol('proto.accounts.OAuthLoginRequest', null, global);
goog.exportSymbol('proto.accounts.OAuthLoginResponse', null, global);
goog.exportSymbol('proto.accounts.OAuthProvider', null, global);
goog.exportSymbol('proto.accounts.TokenExchangeRequest', null, global);
goog.exportSymbol('proto.accounts.TokenExchangeResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.accounts.Account = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.accounts.Account, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.Account.displayName = 'proto.accounts.Account';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.accounts.OAuthLoginRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.OAuthLoginRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.OAuthLoginRequest.displayName = 'proto.accounts.OAuthLoginRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.accounts.OAuthLoginResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.OAuthLoginResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.OAuthLoginResponse.displayName = 'proto.accounts.OAuthLoginResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.accounts.OAuthExchangeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.OAuthExchangeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.OAuthExchangeRequest.displayName = 'proto.accounts.OAuthExchangeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.accounts.OAuthExchangeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.OAuthExchangeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.OAuthExchangeResponse.displayName = 'proto.accounts.OAuthExchangeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.accounts.TokenExchangeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.TokenExchangeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.TokenExchangeRequest.displayName = 'proto.accounts.TokenExchangeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.accounts.TokenExchangeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accounts.TokenExchangeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accounts.TokenExchangeResponse.displayName = 'proto.accounts.TokenExchangeResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.accounts.Account.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.Account.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.Account} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.Account.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    email: jspb.Message.getFieldWithDefault(msg, 2, ""),
    realName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb$1.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb$1.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.accounts.Account}
 */
proto.accounts.Account.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.Account;
  return proto.accounts.Account.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.Account} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.Account}
 */
proto.accounts.Account.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRealName(value);
      break;
    case 1000:
      var value = new google_protobuf_timestamp_pb$1.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb$1.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 1001:
      var value = new google_protobuf_timestamp_pb$1.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb$1.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.accounts.Account.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.Account.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.Account} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.Account.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRealName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      google_protobuf_timestamp_pb$1.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      1001,
      f,
      google_protobuf_timestamp_pb$1.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.accounts.Account.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.Account} returns this
 */
proto.accounts.Account.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.accounts.Account.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.Account} returns this
 */
proto.accounts.Account.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string real_name = 3;
 * @return {string}
 */
proto.accounts.Account.prototype.getRealName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.Account} returns this
 */
proto.accounts.Account.prototype.setRealName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 1000;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.accounts.Account.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb$1.Timestamp, 1000));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.accounts.Account} returns this
*/
proto.accounts.Account.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.accounts.Account} returns this
 */
proto.accounts.Account.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.accounts.Account.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 1000) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 1001;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.accounts.Account.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb$1.Timestamp, 1001));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.accounts.Account} returns this
*/
proto.accounts.Account.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 1001, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.accounts.Account} returns this
 */
proto.accounts.Account.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.accounts.Account.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 1001) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.accounts.OAuthLoginRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.OAuthLoginRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.OAuthLoginRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.OAuthLoginRequest.toObject = function(includeInstance, msg) {
  var obj = {
    provider: jspb.Message.getFieldWithDefault(msg, 1, 0),
    redirectUrl: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.accounts.OAuthLoginRequest}
 */
proto.accounts.OAuthLoginRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.OAuthLoginRequest;
  return proto.accounts.OAuthLoginRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.OAuthLoginRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.OAuthLoginRequest}
 */
proto.accounts.OAuthLoginRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.accounts.OAuthProvider} */ (reader.readEnum());
      msg.setProvider(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRedirectUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.accounts.OAuthLoginRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.OAuthLoginRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.OAuthLoginRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.OAuthLoginRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProvider();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getRedirectUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional OAuthProvider provider = 1;
 * @return {!proto.accounts.OAuthProvider}
 */
proto.accounts.OAuthLoginRequest.prototype.getProvider = function() {
  return /** @type {!proto.accounts.OAuthProvider} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.accounts.OAuthProvider} value
 * @return {!proto.accounts.OAuthLoginRequest} returns this
 */
proto.accounts.OAuthLoginRequest.prototype.setProvider = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string redirect_url = 2;
 * @return {string}
 */
proto.accounts.OAuthLoginRequest.prototype.getRedirectUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.OAuthLoginRequest} returns this
 */
proto.accounts.OAuthLoginRequest.prototype.setRedirectUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.accounts.OAuthLoginResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.OAuthLoginResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.OAuthLoginResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.OAuthLoginResponse.toObject = function(includeInstance, msg) {
  var obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.accounts.OAuthLoginResponse}
 */
proto.accounts.OAuthLoginResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.OAuthLoginResponse;
  return proto.accounts.OAuthLoginResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.OAuthLoginResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.OAuthLoginResponse}
 */
proto.accounts.OAuthLoginResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.accounts.OAuthLoginResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.OAuthLoginResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.OAuthLoginResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.OAuthLoginResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.accounts.OAuthLoginResponse.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.OAuthLoginResponse} returns this
 */
proto.accounts.OAuthLoginResponse.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.accounts.OAuthExchangeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.OAuthExchangeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.OAuthExchangeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.OAuthExchangeRequest.toObject = function(includeInstance, msg) {
  var obj = {
    authCode: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.accounts.OAuthExchangeRequest}
 */
proto.accounts.OAuthExchangeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.OAuthExchangeRequest;
  return proto.accounts.OAuthExchangeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.OAuthExchangeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.OAuthExchangeRequest}
 */
proto.accounts.OAuthExchangeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.accounts.OAuthExchangeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.OAuthExchangeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.OAuthExchangeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.OAuthExchangeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string auth_code = 1;
 * @return {string}
 */
proto.accounts.OAuthExchangeRequest.prototype.getAuthCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.OAuthExchangeRequest} returns this
 */
proto.accounts.OAuthExchangeRequest.prototype.setAuthCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.accounts.OAuthExchangeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.OAuthExchangeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.OAuthExchangeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.OAuthExchangeResponse.toObject = function(includeInstance, msg) {
  var obj = {
    accessToken: jspb.Message.getFieldWithDefault(msg, 1, ""),
    refreshToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.accounts.OAuthExchangeResponse}
 */
proto.accounts.OAuthExchangeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.OAuthExchangeResponse;
  return proto.accounts.OAuthExchangeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.OAuthExchangeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.OAuthExchangeResponse}
 */
proto.accounts.OAuthExchangeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccessToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefreshToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.accounts.OAuthExchangeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.OAuthExchangeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.OAuthExchangeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.OAuthExchangeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccessToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRefreshToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string access_token = 1;
 * @return {string}
 */
proto.accounts.OAuthExchangeResponse.prototype.getAccessToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.OAuthExchangeResponse} returns this
 */
proto.accounts.OAuthExchangeResponse.prototype.setAccessToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string refresh_token = 2;
 * @return {string}
 */
proto.accounts.OAuthExchangeResponse.prototype.getRefreshToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.OAuthExchangeResponse} returns this
 */
proto.accounts.OAuthExchangeResponse.prototype.setRefreshToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.accounts.TokenExchangeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.TokenExchangeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.TokenExchangeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.TokenExchangeRequest.toObject = function(includeInstance, msg) {
  var obj = {
    refreshToken: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.accounts.TokenExchangeRequest}
 */
proto.accounts.TokenExchangeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.TokenExchangeRequest;
  return proto.accounts.TokenExchangeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.TokenExchangeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.TokenExchangeRequest}
 */
proto.accounts.TokenExchangeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefreshToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.accounts.TokenExchangeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.TokenExchangeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.TokenExchangeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.TokenExchangeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRefreshToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string refresh_token = 1;
 * @return {string}
 */
proto.accounts.TokenExchangeRequest.prototype.getRefreshToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.TokenExchangeRequest} returns this
 */
proto.accounts.TokenExchangeRequest.prototype.setRefreshToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.accounts.TokenExchangeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.accounts.TokenExchangeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accounts.TokenExchangeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.TokenExchangeResponse.toObject = function(includeInstance, msg) {
  var obj = {
    accessToken: jspb.Message.getFieldWithDefault(msg, 1, ""),
    refreshToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.accounts.TokenExchangeResponse}
 */
proto.accounts.TokenExchangeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accounts.TokenExchangeResponse;
  return proto.accounts.TokenExchangeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accounts.TokenExchangeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accounts.TokenExchangeResponse}
 */
proto.accounts.TokenExchangeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccessToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefreshToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.accounts.TokenExchangeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accounts.TokenExchangeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accounts.TokenExchangeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accounts.TokenExchangeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccessToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRefreshToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string access_token = 1;
 * @return {string}
 */
proto.accounts.TokenExchangeResponse.prototype.getAccessToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.TokenExchangeResponse} returns this
 */
proto.accounts.TokenExchangeResponse.prototype.setAccessToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string refresh_token = 2;
 * @return {string}
 */
proto.accounts.TokenExchangeResponse.prototype.getRefreshToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.accounts.TokenExchangeResponse} returns this
 */
proto.accounts.TokenExchangeResponse.prototype.setRefreshToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.accounts.OAuthProvider = {
  O_AUTH_PROVIDER_UNSPECIFIED: 0,
  O_AUTH_PROVIDER_GITHUB: 1,
  O_AUTH_PROVIDER_BETA: 2
};

goog.object.extend(exports, proto.accounts);

// source: auth/auth.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb$1 = require('google-protobuf');
var global$1 = Function('return this')();
