// package: auth
// file: auth/auth.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as auth_auth_pb from "../auth/auth_pb";

interface IAuthService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    oAuthLogin: IAuthService_IOAuthLogin;
    oAuthExchange: IAuthService_IOAuthExchange;
    tokenExchange: IAuthService_ITokenExchange;
    create: IAuthService_ICreate;
}

interface IAuthService_IOAuthLogin extends grpc.MethodDefinition<auth_auth_pb.OAuthLoginRequest, auth_auth_pb.OAuthLoginResponse> {
    path: "/auth.Auth/OAuthLogin";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_auth_pb.OAuthLoginRequest>;
    requestDeserialize: grpc.deserialize<auth_auth_pb.OAuthLoginRequest>;
    responseSerialize: grpc.serialize<auth_auth_pb.OAuthLoginResponse>;
    responseDeserialize: grpc.deserialize<auth_auth_pb.OAuthLoginResponse>;
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
interface IAuthService_ICreate extends grpc.MethodDefinition<auth_auth_pb.CreateRequest, auth_auth_pb.CreateResponse> {
    path: "/auth.Auth/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_auth_pb.CreateRequest>;
    requestDeserialize: grpc.deserialize<auth_auth_pb.CreateRequest>;
    responseSerialize: grpc.serialize<auth_auth_pb.CreateResponse>;
    responseDeserialize: grpc.deserialize<auth_auth_pb.CreateResponse>;
}

export const AuthService: IAuthService;

export interface IAuthServer {
    oAuthLogin: grpc.handleUnaryCall<auth_auth_pb.OAuthLoginRequest, auth_auth_pb.OAuthLoginResponse>;
    oAuthExchange: grpc.handleUnaryCall<auth_auth_pb.OAuthExchangeRequest, auth_auth_pb.OAuthExchangeResponse>;
    tokenExchange: grpc.handleUnaryCall<auth_auth_pb.TokenExchangeRequest, auth_auth_pb.TokenExchangeResponse>;
    create: grpc.handleUnaryCall<auth_auth_pb.CreateRequest, auth_auth_pb.CreateResponse>;
}

export interface IAuthClient {
    oAuthLogin(request: auth_auth_pb.OAuthLoginRequest, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.OAuthLoginResponse) => void): grpc.ClientUnaryCall;
    oAuthLogin(request: auth_auth_pb.OAuthLoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.OAuthLoginResponse) => void): grpc.ClientUnaryCall;
    oAuthLogin(request: auth_auth_pb.OAuthLoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.OAuthLoginResponse) => void): grpc.ClientUnaryCall;
    oAuthExchange(request: auth_auth_pb.OAuthExchangeRequest, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.OAuthExchangeResponse) => void): grpc.ClientUnaryCall;
    oAuthExchange(request: auth_auth_pb.OAuthExchangeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.OAuthExchangeResponse) => void): grpc.ClientUnaryCall;
    oAuthExchange(request: auth_auth_pb.OAuthExchangeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.OAuthExchangeResponse) => void): grpc.ClientUnaryCall;
    tokenExchange(request: auth_auth_pb.TokenExchangeRequest, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.TokenExchangeResponse) => void): grpc.ClientUnaryCall;
    tokenExchange(request: auth_auth_pb.TokenExchangeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.TokenExchangeResponse) => void): grpc.ClientUnaryCall;
    tokenExchange(request: auth_auth_pb.TokenExchangeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.TokenExchangeResponse) => void): grpc.ClientUnaryCall;
    create(request: auth_auth_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    create(request: auth_auth_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    create(request: auth_auth_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.CreateResponse) => void): grpc.ClientUnaryCall;
}

export class AuthClient extends grpc.Client implements IAuthClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public oAuthLogin(request: auth_auth_pb.OAuthLoginRequest, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.OAuthLoginResponse) => void): grpc.ClientUnaryCall;
    public oAuthLogin(request: auth_auth_pb.OAuthLoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.OAuthLoginResponse) => void): grpc.ClientUnaryCall;
    public oAuthLogin(request: auth_auth_pb.OAuthLoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.OAuthLoginResponse) => void): grpc.ClientUnaryCall;
    public oAuthExchange(request: auth_auth_pb.OAuthExchangeRequest, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.OAuthExchangeResponse) => void): grpc.ClientUnaryCall;
    public oAuthExchange(request: auth_auth_pb.OAuthExchangeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.OAuthExchangeResponse) => void): grpc.ClientUnaryCall;
    public oAuthExchange(request: auth_auth_pb.OAuthExchangeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.OAuthExchangeResponse) => void): grpc.ClientUnaryCall;
    public tokenExchange(request: auth_auth_pb.TokenExchangeRequest, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.TokenExchangeResponse) => void): grpc.ClientUnaryCall;
    public tokenExchange(request: auth_auth_pb.TokenExchangeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.TokenExchangeResponse) => void): grpc.ClientUnaryCall;
    public tokenExchange(request: auth_auth_pb.TokenExchangeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.TokenExchangeResponse) => void): grpc.ClientUnaryCall;
    public create(request: auth_auth_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public create(request: auth_auth_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public create(request: auth_auth_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_auth_pb.CreateResponse) => void): grpc.ClientUnaryCall;
}
