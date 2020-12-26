import * as jspb from "google-protobuf"

export class OAuthURLRequest extends jspb.Message {
  getProvider(): OAuthProvider;
  setProvider(value: OAuthProvider): void;

  getRedirectUrl(): string;
  setRedirectUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OAuthURLRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OAuthURLRequest): OAuthURLRequest.AsObject;
  static serializeBinaryToWriter(message: OAuthURLRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OAuthURLRequest;
  static deserializeBinaryFromReader(message: OAuthURLRequest, reader: jspb.BinaryReader): OAuthURLRequest;
}

export namespace OAuthURLRequest {
  export type AsObject = {
    provider: OAuthProvider,
    redirectUrl: string,
  }
}

export class OAuthURLResponse extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OAuthURLResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OAuthURLResponse): OAuthURLResponse.AsObject;
  static serializeBinaryToWriter(message: OAuthURLResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OAuthURLResponse;
  static deserializeBinaryFromReader(message: OAuthURLResponse, reader: jspb.BinaryReader): OAuthURLResponse;
}

export namespace OAuthURLResponse {
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
  getTokens(): Tokens | undefined;
  setTokens(value?: Tokens): void;
  hasTokens(): boolean;
  clearTokens(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OAuthExchangeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OAuthExchangeResponse): OAuthExchangeResponse.AsObject;
  static serializeBinaryToWriter(message: OAuthExchangeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OAuthExchangeResponse;
  static deserializeBinaryFromReader(message: OAuthExchangeResponse, reader: jspb.BinaryReader): OAuthExchangeResponse;
}

export namespace OAuthExchangeResponse {
  export type AsObject = {
    tokens?: Tokens.AsObject,
  }
}

export class TokenExchangeRequest extends jspb.Message {
  getRefreshToken(): string;
  setRefreshToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenExchangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TokenExchangeRequest): TokenExchangeRequest.AsObject;
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
  getTokens(): Tokens | undefined;
  setTokens(value?: Tokens): void;
  hasTokens(): boolean;
  clearTokens(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenExchangeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TokenExchangeResponse): TokenExchangeResponse.AsObject;
  static serializeBinaryToWriter(message: TokenExchangeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenExchangeResponse;
  static deserializeBinaryFromReader(message: TokenExchangeResponse, reader: jspb.BinaryReader): TokenExchangeResponse;
}

export namespace TokenExchangeResponse {
  export type AsObject = {
    tokens?: Tokens.AsObject,
  }
}

export class Tokens extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): void;

  getRefreshToken(): string;
  setRefreshToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tokens.AsObject;
  static toObject(includeInstance: boolean, msg: Tokens): Tokens.AsObject;
  static serializeBinaryToWriter(message: Tokens, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tokens;
  static deserializeBinaryFromReader(message: Tokens, reader: jspb.BinaryReader): Tokens;
}

export namespace Tokens {
  export type AsObject = {
    accessToken: string,
    refreshToken: string,
  }
}

export enum OAuthProvider { 
  O_AUTH_PROVIDER_UNSPECIFIED = 0,
  O_AUTH_PROVIDER_GITHUB = 1,
}
