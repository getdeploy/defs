import { Metadata, Error, ClientReadableStream } from 'grpc-web';
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';
import { Message, BinaryWriter, BinaryReader } from 'google-protobuf';

declare class Account extends Message {
  getId(): string;
  setId(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getRealName(): string;
  setRealName(value: string): void;

  getCreatedAt(): Timestamp | undefined;
  setCreatedAt(value?: Timestamp): void;
  hasCreatedAt(): boolean;
  clearCreatedAt(): void;

  getUpdatedAt(): Timestamp | undefined;
  setUpdatedAt(value?: Timestamp): void;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Account.AsObject;
  static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
  static serializeBinaryToWriter(message: Account, writer: BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Account;
  static deserializeBinaryFromReader(message: Account, reader: BinaryReader): Account;
}

declare namespace Account {
  export type AsObject = {
    id: string,
    email: string,
    realName: string,
    createdAt?: Timestamp.AsObject,
    updatedAt?: Timestamp.AsObject,
  }
}

declare class OAuthLoginRequest extends Message {
  getProvider(): OAuthProvider;
  setProvider(value: OAuthProvider): void;

  getRedirectUrl(): string;
  setRedirectUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OAuthLoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OAuthLoginRequest): OAuthLoginRequest.AsObject;
  static serializeBinaryToWriter(message: OAuthLoginRequest, writer: BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OAuthLoginRequest;
  static deserializeBinaryFromReader(message: OAuthLoginRequest, reader: BinaryReader): OAuthLoginRequest;
}

declare namespace OAuthLoginRequest {
  export type AsObject = {
    provider: OAuthProvider,
    redirectUrl: string,
  }
}

declare class OAuthLoginResponse extends Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OAuthLoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OAuthLoginResponse): OAuthLoginResponse.AsObject;
  static serializeBinaryToWriter(message: OAuthLoginResponse, writer: BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OAuthLoginResponse;
  static deserializeBinaryFromReader(message: OAuthLoginResponse, reader: BinaryReader): OAuthLoginResponse;
}

declare namespace OAuthLoginResponse {
  export type AsObject = {
    url: string,
  }
}

declare class OAuthExchangeRequest extends Message {
  getAuthCode(): string;
  setAuthCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OAuthExchangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OAuthExchangeRequest): OAuthExchangeRequest.AsObject;
  static serializeBinaryToWriter(message: OAuthExchangeRequest, writer: BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OAuthExchangeRequest;
  static deserializeBinaryFromReader(message: OAuthExchangeRequest, reader: BinaryReader): OAuthExchangeRequest;
}

declare namespace OAuthExchangeRequest {
  export type AsObject = {
    authCode: string,
  }
}

declare class OAuthExchangeResponse extends Message {
  getAccessToken(): string;
  setAccessToken(value: string): void;

  getRefreshToken(): string;
  setRefreshToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OAuthExchangeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OAuthExchangeResponse): OAuthExchangeResponse.AsObject;
  static serializeBinaryToWriter(message: OAuthExchangeResponse, writer: BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OAuthExchangeResponse;
  static deserializeBinaryFromReader(message: OAuthExchangeResponse, reader: BinaryReader): OAuthExchangeResponse;
}

declare namespace OAuthExchangeResponse {
  export type AsObject = {
    accessToken: string,
    refreshToken: string,
  }
}

declare class TokenExchangeRequest extends Message {
  getRefreshToken(): string;
  setRefreshToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenExchangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TokenExchangeRequest): TokenExchangeRequest.AsObject;
  static serializeBinaryToWriter(message: TokenExchangeRequest, writer: BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenExchangeRequest;
  static deserializeBinaryFromReader(message: TokenExchangeRequest, reader: BinaryReader): TokenExchangeRequest;
}

declare namespace TokenExchangeRequest {
  export type AsObject = {
    refreshToken: string,
  }
}

declare class TokenExchangeResponse extends Message {
  getAccessToken(): string;
  setAccessToken(value: string): void;

  getRefreshToken(): string;
  setRefreshToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenExchangeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TokenExchangeResponse): TokenExchangeResponse.AsObject;
  static serializeBinaryToWriter(message: TokenExchangeResponse, writer: BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenExchangeResponse;
  static deserializeBinaryFromReader(message: TokenExchangeResponse, reader: BinaryReader): TokenExchangeResponse;
}

declare namespace TokenExchangeResponse {
  export type AsObject = {
    accessToken: string,
    refreshToken: string,
  }
}

enum OAuthProvider { 
  O_AUTH_PROVIDER_UNSPECIFIED = 0,
  O_AUTH_PROVIDER_GITHUB = 1,
  O_AUTH_PROVIDER_BETA = 2,
}

declare class AccountsClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  oAuthLogin(
    request: OAuthLoginRequest,
    metadata: Metadata | undefined,
    callback: (err: Error,
               response: OAuthLoginResponse) => void
  ): ClientReadableStream<OAuthLoginResponse>;

  oAuthExchange(
    request: OAuthExchangeRequest,
    metadata: Metadata | undefined,
    callback: (err: Error,
               response: OAuthExchangeResponse) => void
  ): ClientReadableStream<OAuthExchangeResponse>;

  tokenExchange(
    request: TokenExchangeRequest,
    metadata: Metadata | undefined,
    callback: (err: Error,
               response: TokenExchangeResponse) => void
  ): ClientReadableStream<TokenExchangeResponse>;

}

declare class AccountsPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  oAuthLogin(
    request: OAuthLoginRequest,
    metadata?: Metadata
  ): Promise<OAuthLoginResponse>;

  oAuthExchange(
    request: OAuthExchangeRequest,
    metadata?: Metadata
  ): Promise<OAuthExchangeResponse>;

  tokenExchange(
    request: TokenExchangeRequest,
    metadata?: Metadata
  ): Promise<TokenExchangeResponse>;

}

export { Account, AccountsClient, AccountsPromiseClient, OAuthExchangeRequest, OAuthExchangeResponse, OAuthLoginRequest, OAuthLoginResponse, OAuthProvider, TokenExchangeRequest, TokenExchangeResponse };
