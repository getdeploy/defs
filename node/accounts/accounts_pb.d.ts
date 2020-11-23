// package: accounts
// file: accounts/accounts.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Account extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getRealName(): string;
  setRealName(value: string): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Account.AsObject;
  static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Account;
  static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
}

export namespace Account {
  export type AsObject = {
    id: string,
    email: string,
    realName: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class OAuthLoginRequest extends jspb.Message {
  getProvider(): OAuthProvider;
  setProvider(value: OAuthProvider): void;

  getRedirectUrl(): string;
  setRedirectUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OAuthLoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OAuthLoginRequest): OAuthLoginRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OAuthLoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OAuthLoginRequest;
  static deserializeBinaryFromReader(message: OAuthLoginRequest, reader: jspb.BinaryReader): OAuthLoginRequest;
}

export namespace OAuthLoginRequest {
  export type AsObject = {
    provider: OAuthProvider,
    redirectUrl: string,
  }
}

export class OAuthLoginResponse extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OAuthLoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OAuthLoginResponse): OAuthLoginResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OAuthLoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OAuthLoginResponse;
  static deserializeBinaryFromReader(message: OAuthLoginResponse, reader: jspb.BinaryReader): OAuthLoginResponse;
}

export namespace OAuthLoginResponse {
  export type AsObject = {
    url: string,
  }
}

export class OAuthExchangeRequest extends jspb.Message {
  getAuthCode(): string;
  setAuthCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OAuthExchangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OAuthExchangeRequest): OAuthExchangeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OAuthExchangeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OAuthExchangeRequest;
  static deserializeBinaryFromReader(message: OAuthExchangeRequest, reader: jspb.BinaryReader): OAuthExchangeRequest;
}

export namespace OAuthExchangeRequest {
  export type AsObject = {
    authCode: string,
  }
}

export class OAuthExchangeResponse extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): void;

  getRefreshToken(): string;
  setRefreshToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OAuthExchangeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OAuthExchangeResponse): OAuthExchangeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OAuthExchangeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OAuthExchangeResponse;
  static deserializeBinaryFromReader(message: OAuthExchangeResponse, reader: jspb.BinaryReader): OAuthExchangeResponse;
}

export namespace OAuthExchangeResponse {
  export type AsObject = {
    accessToken: string,
    refreshToken: string,
  }
}

export class TokenExchangeRequest extends jspb.Message {
  getRefreshToken(): string;
  setRefreshToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenExchangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TokenExchangeRequest): TokenExchangeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenExchangeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenExchangeRequest;
  static deserializeBinaryFromReader(message: TokenExchangeRequest, reader: jspb.BinaryReader): TokenExchangeRequest;
}

export namespace TokenExchangeRequest {
  export type AsObject = {
    refreshToken: string,
  }
}

export class TokenExchangeResponse extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): void;

  getRefreshToken(): string;
  setRefreshToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenExchangeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TokenExchangeResponse): TokenExchangeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenExchangeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenExchangeResponse;
  static deserializeBinaryFromReader(message: TokenExchangeResponse, reader: jspb.BinaryReader): TokenExchangeResponse;
}

export namespace TokenExchangeResponse {
  export type AsObject = {
    accessToken: string,
    refreshToken: string,
  }
}

export enum OAuthProvider {
  O_AUTH_PROVIDER_UNSPECIFIED = 0,
  O_AUTH_PROVIDER_GITHUB = 1,
  O_AUTH_PROVIDER_BETA = 2,
}

