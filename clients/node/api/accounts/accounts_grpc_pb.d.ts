// package: api.accounts
// file: api/accounts/accounts.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as api_accounts_accounts_pb from "../../api/accounts/accounts_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IAccountsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IAccountsService_IGet;
    getAuthURL: IAccountsService_IGetAuthURL;
    exchangeAuthCode: IAccountsService_IExchangeAuthCode;
    refreshToken: IAccountsService_IRefreshToken;
}

interface IAccountsService_IGet extends grpc.MethodDefinition<api_accounts_accounts_pb.GetRequest, api_accounts_accounts_pb.GetResponse> {
    path: "/api.accounts.Accounts/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_accounts_accounts_pb.GetRequest>;
    requestDeserialize: grpc.deserialize<api_accounts_accounts_pb.GetRequest>;
    responseSerialize: grpc.serialize<api_accounts_accounts_pb.GetResponse>;
    responseDeserialize: grpc.deserialize<api_accounts_accounts_pb.GetResponse>;
}
interface IAccountsService_IGetAuthURL extends grpc.MethodDefinition<api_accounts_accounts_pb.GetAuthURLRequest, api_accounts_accounts_pb.GetAuthURLResponse> {
    path: "/api.accounts.Accounts/GetAuthURL";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_accounts_accounts_pb.GetAuthURLRequest>;
    requestDeserialize: grpc.deserialize<api_accounts_accounts_pb.GetAuthURLRequest>;
    responseSerialize: grpc.serialize<api_accounts_accounts_pb.GetAuthURLResponse>;
    responseDeserialize: grpc.deserialize<api_accounts_accounts_pb.GetAuthURLResponse>;
}
interface IAccountsService_IExchangeAuthCode extends grpc.MethodDefinition<api_accounts_accounts_pb.ExchangeAuthCodeRequest, api_accounts_accounts_pb.ExchangeAuthCodeResponse> {
    path: "/api.accounts.Accounts/ExchangeAuthCode";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_accounts_accounts_pb.ExchangeAuthCodeRequest>;
    requestDeserialize: grpc.deserialize<api_accounts_accounts_pb.ExchangeAuthCodeRequest>;
    responseSerialize: grpc.serialize<api_accounts_accounts_pb.ExchangeAuthCodeResponse>;
    responseDeserialize: grpc.deserialize<api_accounts_accounts_pb.ExchangeAuthCodeResponse>;
}
interface IAccountsService_IRefreshToken extends grpc.MethodDefinition<api_accounts_accounts_pb.RefreshTokenRequest, api_accounts_accounts_pb.RefreshTokenResponse> {
    path: "/api.accounts.Accounts/RefreshToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_accounts_accounts_pb.RefreshTokenRequest>;
    requestDeserialize: grpc.deserialize<api_accounts_accounts_pb.RefreshTokenRequest>;
    responseSerialize: grpc.serialize<api_accounts_accounts_pb.RefreshTokenResponse>;
    responseDeserialize: grpc.deserialize<api_accounts_accounts_pb.RefreshTokenResponse>;
}

export const AccountsService: IAccountsService;

export interface IAccountsServer {
    get: grpc.handleUnaryCall<api_accounts_accounts_pb.GetRequest, api_accounts_accounts_pb.GetResponse>;
    getAuthURL: grpc.handleUnaryCall<api_accounts_accounts_pb.GetAuthURLRequest, api_accounts_accounts_pb.GetAuthURLResponse>;
    exchangeAuthCode: grpc.handleUnaryCall<api_accounts_accounts_pb.ExchangeAuthCodeRequest, api_accounts_accounts_pb.ExchangeAuthCodeResponse>;
    refreshToken: grpc.handleUnaryCall<api_accounts_accounts_pb.RefreshTokenRequest, api_accounts_accounts_pb.RefreshTokenResponse>;
}

export interface IAccountsClient {
    get(request: api_accounts_accounts_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: api_accounts_accounts_pb.GetResponse) => void): grpc.ClientUnaryCall;
    get(request: api_accounts_accounts_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_accounts_accounts_pb.GetResponse) => void): grpc.ClientUnaryCall;
    get(request: api_accounts_accounts_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_accounts_accounts_pb.GetResponse) => void): grpc.ClientUnaryCall;
    getAuthURL(request: api_accounts_accounts_pb.GetAuthURLRequest, callback: (error: grpc.ServiceError | null, response: api_accounts_accounts_pb.GetAuthURLResponse) => void): grpc.ClientUnaryCall;
    getAuthURL(request: api_accounts_accounts_pb.GetAuthURLRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_accounts_accounts_pb.GetAuthURLResponse) => void): grpc.ClientUnaryCall;
    getAuthURL(request: api_accounts_accounts_pb.GetAuthURLRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_accounts_accounts_pb.GetAuthURLResponse) => void): grpc.ClientUnaryCall;
    exchangeAuthCode(request: api_accounts_accounts_pb.ExchangeAuthCodeRequest, callback: (error: grpc.ServiceError | null, response: api_accounts_accounts_pb.ExchangeAuthCodeResponse) => void): grpc.ClientUnaryCall;
    exchangeAuthCode(request: api_accounts_accounts_pb.ExchangeAuthCodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_accounts_accounts_pb.ExchangeAuthCodeResponse) => void): grpc.ClientUnaryCall;
    exchangeAuthCode(request: api_accounts_accounts_pb.ExchangeAuthCodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_accounts_accounts_pb.ExchangeAuthCodeResponse) => void): grpc.ClientUnaryCall;
    refreshToken(request: api_accounts_accounts_pb.RefreshTokenRequest, callback: (error: grpc.ServiceError | null, response: api_accounts_accounts_pb.RefreshTokenResponse) => void): grpc.ClientUnaryCall;
    refreshToken(request: api_accounts_accounts_pb.RefreshTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_accounts_accounts_pb.RefreshTokenResponse) => void): grpc.ClientUnaryCall;
    refreshToken(request: api_accounts_accounts_pb.RefreshTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_accounts_accounts_pb.RefreshTokenResponse) => void): grpc.ClientUnaryCall;
}

export class AccountsClient extends grpc.Client implements IAccountsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: api_accounts_accounts_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: api_accounts_accounts_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public get(request: api_accounts_accounts_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_accounts_accounts_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public get(request: api_accounts_accounts_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_accounts_accounts_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public getAuthURL(request: api_accounts_accounts_pb.GetAuthURLRequest, callback: (error: grpc.ServiceError | null, response: api_accounts_accounts_pb.GetAuthURLResponse) => void): grpc.ClientUnaryCall;
    public getAuthURL(request: api_accounts_accounts_pb.GetAuthURLRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_accounts_accounts_pb.GetAuthURLResponse) => void): grpc.ClientUnaryCall;
    public getAuthURL(request: api_accounts_accounts_pb.GetAuthURLRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_accounts_accounts_pb.GetAuthURLResponse) => void): grpc.ClientUnaryCall;
    public exchangeAuthCode(request: api_accounts_accounts_pb.ExchangeAuthCodeRequest, callback: (error: grpc.ServiceError | null, response: api_accounts_accounts_pb.ExchangeAuthCodeResponse) => void): grpc.ClientUnaryCall;
    public exchangeAuthCode(request: api_accounts_accounts_pb.ExchangeAuthCodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_accounts_accounts_pb.ExchangeAuthCodeResponse) => void): grpc.ClientUnaryCall;
    public exchangeAuthCode(request: api_accounts_accounts_pb.ExchangeAuthCodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_accounts_accounts_pb.ExchangeAuthCodeResponse) => void): grpc.ClientUnaryCall;
    public refreshToken(request: api_accounts_accounts_pb.RefreshTokenRequest, callback: (error: grpc.ServiceError | null, response: api_accounts_accounts_pb.RefreshTokenResponse) => void): grpc.ClientUnaryCall;
    public refreshToken(request: api_accounts_accounts_pb.RefreshTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_accounts_accounts_pb.RefreshTokenResponse) => void): grpc.ClientUnaryCall;
    public refreshToken(request: api_accounts_accounts_pb.RefreshTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_accounts_accounts_pb.RefreshTokenResponse) => void): grpc.ClientUnaryCall;
}
