// package: auth
// file: auth/auth.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as auth_auth_pb from "../auth/auth_pb";

interface IAuthService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    oAuthURL: IAuthService_IOAuthURL;
    oAuthExchange: IAuthService_IOAuthExchange;
    tokenExchange: IAuthService_ITokenExchange;
}

interface IAuthService_IOAuthURL extends grpc.MethodDefinition<auth_auth_pb.OAuthURLRequest, auth_auth_pb.OAuthURLResponse> {
    path: "/auth.Auth/OAuthURL";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_auth_pb.OAuthURLRequest>;
    requestDeserialize: grpc.deserialize<auth_auth_pb.OAuthURLRequest>;
    responseSerialize: grpc.serialize<auth_auth_pb.OAuthURLResponse>;
    responseDeserialize: grpc.deserialize<auth_auth_pb.OAuthURLResponse>;
}
interface IAuthService_IOAuthExchange extends grpc.MethodDefinition<auth_auth_pb.OAuthExchangeRequest, auth_auth_pb.OAuthExchangeResponse> {
    path: "/auth.Auth/OAuthExchange";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_auth_pb.OAuthExchangeRequest>;
    requestDeserialize: grpc.deserialize<auth_auth_pb.OAuthExchangeRequest>;
    responseSerialize: grpc.serialize<auth_auth_pb.OAuthExchangeResponse>;
    responseDeserialize: grpc.deserialize<auth_auth_pb.OAuthExchangeResponse>;
}
interface IAuthService_ITokenExchange extends grpc.MethodDefinition<auth_auth_pb.TokenExchangeRequest, auth_auth_pb.TokenExchangeResponse> {
    path: "/auth.Auth/TokenExchange";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_auth_pb.TokenExchangeRequest>;
    requestDeserialize: grpc.deserialize<auth_auth_pb.TokenExchangeRequest>;
    responseSerialize: grpc.serialize<auth_auth_pb.TokenExchangeResponse>;
    responseDeserialize: grpc.deserialize<auth_auth_pb.TokenExchangeResponse>;
}

export const AuthService: IAuthService;

export interface IAuthServer {
    oAuthURL: grpc.handleUnaryCall<auth_auth_pb.OAuthURLRequest, auth_auth_pb.OAuthURLResponse>;
    oAuthExchange: grpc.handleUnaryCall<auth_auth_pb.OAuthExchangeRequest, auth_auth_pb.OAuthExchangeResponse>;
    tokenExchange: grpc.handleUnaryCall<auth_auth_pb.TokenExchangeRequest, auth_auth_pb.TokenExchangeResponse>;
}

export interface IAuthClient {
    oAuthURL(request: auth_auth_pb.OAuthURLRequest, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.OAuthURLResponse) => void): grpc.ClientUnaryCall;
    oAuthURL(request: auth_auth_pb.OAuthURLRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.OAuthURLResponse) => void): grpc.ClientUnaryCall;
    oAuthURL(request: auth_auth_pb.OAuthURLRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.OAuthURLResponse) => void): grpc.ClientUnaryCall;
    oAuthExchange(request: auth_auth_pb.OAuthExchangeRequest, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.OAuthExchangeResponse) => void): grpc.ClientUnaryCall;
    oAuthExchange(request: auth_auth_pb.OAuthExchangeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.OAuthExchangeResponse) => void): grpc.ClientUnaryCall;
    oAuthExchange(request: auth_auth_pb.OAuthExchangeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.OAuthExchangeResponse) => void): grpc.ClientUnaryCall;
    tokenExchange(request: auth_auth_pb.TokenExchangeRequest, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.TokenExchangeResponse) => void): grpc.ClientUnaryCall;
    tokenExchange(request: auth_auth_pb.TokenExchangeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.TokenExchangeResponse) => void): grpc.ClientUnaryCall;
    tokenExchange(request: auth_auth_pb.TokenExchangeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.TokenExchangeResponse) => void): grpc.ClientUnaryCall;
}

export class AuthClient extends grpc.Client implements IAuthClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public oAuthURL(request: auth_auth_pb.OAuthURLRequest, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.OAuthURLResponse) => void): grpc.ClientUnaryCall;
    public oAuthURL(request: auth_auth_pb.OAuthURLRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.OAuthURLResponse) => void): grpc.ClientUnaryCall;
    public oAuthURL(request: auth_auth_pb.OAuthURLRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.OAuthURLResponse) => void): grpc.ClientUnaryCall;
    public oAuthExchange(request: auth_auth_pb.OAuthExchangeRequest, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.OAuthExchangeResponse) => void): grpc.ClientUnaryCall;
    public oAuthExchange(request: auth_auth_pb.OAuthExchangeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.OAuthExchangeResponse) => void): grpc.ClientUnaryCall;
    public oAuthExchange(request: auth_auth_pb.OAuthExchangeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.OAuthExchangeResponse) => void): grpc.ClientUnaryCall;
    public tokenExchange(request: auth_auth_pb.TokenExchangeRequest, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.TokenExchangeResponse) => void): grpc.ClientUnaryCall;
    public tokenExchange(request: auth_auth_pb.TokenExchangeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.TokenExchangeResponse) => void): grpc.ClientUnaryCall;
    public tokenExchange(request: auth_auth_pb.TokenExchangeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.TokenExchangeResponse) => void): grpc.ClientUnaryCall;
}
