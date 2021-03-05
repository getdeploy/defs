// package: api.accounts
// file: api/accounts/accounts.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as api_accounts_accounts_pb from "../../api/accounts/accounts_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IAccountsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IAccountsService_ICreate;
    get: IAccountsService_IGet;
}

interface IAccountsService_ICreate extends grpc.MethodDefinition<api_accounts_accounts_pb.CreateRequest, api_accounts_accounts_pb.CreateResponse> {
    path: "/api.accounts.Accounts/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_accounts_accounts_pb.CreateRequest>;
    requestDeserialize: grpc.deserialize<api_accounts_accounts_pb.CreateRequest>;
    responseSerialize: grpc.serialize<api_accounts_accounts_pb.CreateResponse>;
    responseDeserialize: grpc.deserialize<api_accounts_accounts_pb.CreateResponse>;
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

export const AccountsService: IAccountsService;

export interface IAccountsServer {
    create: grpc.handleUnaryCall<api_accounts_accounts_pb.CreateRequest, api_accounts_accounts_pb.CreateResponse>;
    get: grpc.handleUnaryCall<api_accounts_accounts_pb.GetRequest, api_accounts_accounts_pb.GetResponse>;
}

export interface IAccountsClient {
    create(request: api_accounts_accounts_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: api_accounts_accounts_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    create(request: api_accounts_accounts_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_accounts_accounts_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    create(request: api_accounts_accounts_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_accounts_accounts_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    get(request: api_accounts_accounts_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: api_accounts_accounts_pb.GetResponse) => void): grpc.ClientUnaryCall;
    get(request: api_accounts_accounts_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_accounts_accounts_pb.GetResponse) => void): grpc.ClientUnaryCall;
    get(request: api_accounts_accounts_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_accounts_accounts_pb.GetResponse) => void): grpc.ClientUnaryCall;
}

export class AccountsClient extends grpc.Client implements IAccountsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: api_accounts_accounts_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: api_accounts_accounts_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public create(request: api_accounts_accounts_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_accounts_accounts_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public create(request: api_accounts_accounts_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_accounts_accounts_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public get(request: api_accounts_accounts_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: api_accounts_accounts_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public get(request: api_accounts_accounts_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_accounts_accounts_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public get(request: api_accounts_accounts_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_accounts_accounts_pb.GetResponse) => void): grpc.ClientUnaryCall;
}
