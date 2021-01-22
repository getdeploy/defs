// package: api.accounts
// file: api/accounts/accounts.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Account extends jspb.Message { 
    getId(): string;
    setId(value: string): Account;

    getEmail(): string;
    setEmail(value: string): Account;

    getRealName(): string;
    setRealName(value: string): Account;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Account;


    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Account;


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

export class GetRequest extends jspb.Message { 
    clearIdsList(): void;
    getIdsList(): Array<string>;
    setIdsList(value: Array<string>): GetRequest;
    addIds(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRequest): GetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRequest;
    static deserializeBinaryFromReader(message: GetRequest, reader: jspb.BinaryReader): GetRequest;
}

export namespace GetRequest {
    export type AsObject = {
        idsList: Array<string>,
    }
}

export class GetResponse extends jspb.Message { 

    getAccountsMap(): jspb.Map<string, Account>;
    clearAccountsMap(): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetResponse): GetResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetResponse;
    static deserializeBinaryFromReader(message: GetResponse, reader: jspb.BinaryReader): GetResponse;
}

export namespace GetResponse {
    export type AsObject = {

        accountsMap: Array<[string, Account.AsObject]>,
    }
}

export class Tokens extends jspb.Message { 
    getAccessToken(): string;
    setAccessToken(value: string): Tokens;

    getRefreshToken(): string;
    setRefreshToken(value: string): Tokens;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Tokens.AsObject;
    static toObject(includeInstance: boolean, msg: Tokens): Tokens.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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

export class GetAuthURLRequest extends jspb.Message { 
    getProvider(): OAuthProvider;
    setProvider(value: OAuthProvider): GetAuthURLRequest;

    getRedirectTo(): string;
    setRedirectTo(value: string): GetAuthURLRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAuthURLRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAuthURLRequest): GetAuthURLRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAuthURLRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAuthURLRequest;
    static deserializeBinaryFromReader(message: GetAuthURLRequest, reader: jspb.BinaryReader): GetAuthURLRequest;
}

export namespace GetAuthURLRequest {
    export type AsObject = {
        provider: OAuthProvider,
        redirectTo: string,
    }
}

export class GetAuthURLResponse extends jspb.Message { 
    getUrl(): string;
    setUrl(value: string): GetAuthURLResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAuthURLResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAuthURLResponse): GetAuthURLResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAuthURLResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAuthURLResponse;
    static deserializeBinaryFromReader(message: GetAuthURLResponse, reader: jspb.BinaryReader): GetAuthURLResponse;
}

export namespace GetAuthURLResponse {
    export type AsObject = {
        url: string,
    }
}

export class ExchangeAuthCodeRequest extends jspb.Message { 
    getProvider(): OAuthProvider;
    setProvider(value: OAuthProvider): ExchangeAuthCodeRequest;

    getCode(): string;
    setCode(value: string): ExchangeAuthCodeRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExchangeAuthCodeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ExchangeAuthCodeRequest): ExchangeAuthCodeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExchangeAuthCodeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExchangeAuthCodeRequest;
    static deserializeBinaryFromReader(message: ExchangeAuthCodeRequest, reader: jspb.BinaryReader): ExchangeAuthCodeRequest;
}

export namespace ExchangeAuthCodeRequest {
    export type AsObject = {
        provider: OAuthProvider,
        code: string,
    }
}

export class ExchangeAuthCodeResponse extends jspb.Message { 

    hasTokens(): boolean;
    clearTokens(): void;
    getTokens(): Tokens | undefined;
    setTokens(value?: Tokens): ExchangeAuthCodeResponse;

    getRedirectTo(): string;
    setRedirectTo(value: string): ExchangeAuthCodeResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExchangeAuthCodeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ExchangeAuthCodeResponse): ExchangeAuthCodeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExchangeAuthCodeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExchangeAuthCodeResponse;
    static deserializeBinaryFromReader(message: ExchangeAuthCodeResponse, reader: jspb.BinaryReader): ExchangeAuthCodeResponse;
}

export namespace ExchangeAuthCodeResponse {
    export type AsObject = {
        tokens?: Tokens.AsObject,
        redirectTo: string,
    }
}

export class RefreshTokenRequest extends jspb.Message { 
    getRefreshToken(): string;
    setRefreshToken(value: string): RefreshTokenRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RefreshTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RefreshTokenRequest): RefreshTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RefreshTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RefreshTokenRequest;
    static deserializeBinaryFromReader(message: RefreshTokenRequest, reader: jspb.BinaryReader): RefreshTokenRequest;
}

export namespace RefreshTokenRequest {
    export type AsObject = {
        refreshToken: string,
    }
}

export class RefreshTokenResponse extends jspb.Message { 

    hasTokens(): boolean;
    clearTokens(): void;
    getTokens(): Tokens | undefined;
    setTokens(value?: Tokens): RefreshTokenResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RefreshTokenResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RefreshTokenResponse): RefreshTokenResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RefreshTokenResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RefreshTokenResponse;
    static deserializeBinaryFromReader(message: RefreshTokenResponse, reader: jspb.BinaryReader): RefreshTokenResponse;
}

export namespace RefreshTokenResponse {
    export type AsObject = {
        tokens?: Tokens.AsObject,
    }
}

export enum OAuthProvider {
    O_AUTH_PROVIDER_UNSPECIFIED = 0,
    O_AUTH_PROVIDER_GITHUB = 1,
    O_AUTH_PROVIDER_GOOGLE = 2,
}
