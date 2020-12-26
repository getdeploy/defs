// package: accounts
// file: accounts/accounts.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as accounts_accounts_pb from "../accounts/accounts_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IAccountsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IAccountsService_ICreate;
    get: IAccountsService_IGet;
}

interface IAccountsService_ICreate extends grpc.MethodDefinition<accounts_accounts_pb.CreateRequest, accounts_accounts_pb.CreateResponse> {
    path: "/accounts.Accounts/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<accounts_accounts_pb.CreateRequest>;
    requestDeserialize: grpc.deserialize<accounts_accounts_pb.CreateRequest>;
    responseSerialize: grpc.serialize<accounts_accounts_pb.CreateResponse>;
    responseDeserialize: grpc.deserialize<accounts_accounts_pb.CreateResponse>;
}
interface IAccountsService_IGet extends grpc.MethodDefinition<accounts_accounts_pb.GetRequest, accounts_accounts_pb.GetResponse> {
    path: "/accounts.Accounts/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<accounts_accounts_pb.GetRequest>;
    requestDeserialize: grpc.deserialize<accounts_accounts_pb.GetRequest>;
    responseSerialize: grpc.serialize<accounts_accounts_pb.GetResponse>;
    responseDeserialize: grpc.deserialize<accounts_accounts_pb.GetResponse>;
}

export const AccountsService: IAccountsService;

export interface IAccountsServer {
    create: grpc.handleUnaryCall<accounts_accounts_pb.CreateRequest, accounts_accounts_pb.CreateResponse>;
    get: grpc.handleUnaryCall<accounts_accounts_pb.GetRequest, accounts_accounts_pb.GetResponse>;
}

export interface IAccountsClient {
    create(request: accounts_accounts_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: accounts_accounts_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    create(request: accounts_accounts_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: accounts_accounts_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    create(request: accounts_accounts_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: accounts_accounts_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    get(request: accounts_accounts_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: accounts_accounts_pb.GetResponse) => void): grpc.ClientUnaryCall;
    get(request: accounts_accounts_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: accounts_accounts_pb.GetResponse) => void): grpc.ClientUnaryCall;
    get(request: accounts_accounts_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: accounts_accounts_pb.GetResponse) => void): grpc.ClientUnaryCall;
}

export class AccountsClient extends grpc.Client implements IAccountsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: accounts_accounts_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: accounts_accounts_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public create(request: accounts_accounts_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: accounts_accounts_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public create(request: accounts_accounts_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: accounts_accounts_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public get(request: accounts_accounts_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: accounts_accounts_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public get(request: accounts_accounts_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: accounts_accounts_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public get(request: accounts_accounts_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: accounts_accounts_pb.GetResponse) => void): grpc.ClientUnaryCall;
}
