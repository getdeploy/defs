// package: api.services
// file: api/services/services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as api_services_services_pb from "../../api/services/services_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IServicesService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IServicesService_IGet;
    create: IServicesService_ICreate;
    list: IServicesService_IList;
    listVersions: IServicesService_IListVersions;
    getBuildLog: IServicesService_IGetBuildLog;
    listGithubRepos: IServicesService_IListGithubRepos;
}

interface IServicesService_IGet extends grpc.MethodDefinition<api_services_services_pb.GetRequest, api_services_services_pb.GetResponse> {
    path: "/api.services.Services/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_services_services_pb.GetRequest>;
    requestDeserialize: grpc.deserialize<api_services_services_pb.GetRequest>;
    responseSerialize: grpc.serialize<api_services_services_pb.GetResponse>;
    responseDeserialize: grpc.deserialize<api_services_services_pb.GetResponse>;
}
interface IServicesService_ICreate extends grpc.MethodDefinition<api_services_services_pb.CreateRequest, api_services_services_pb.CreateResponse> {
    path: "/api.services.Services/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_services_services_pb.CreateRequest>;
    requestDeserialize: grpc.deserialize<api_services_services_pb.CreateRequest>;
    responseSerialize: grpc.serialize<api_services_services_pb.CreateResponse>;
    responseDeserialize: grpc.deserialize<api_services_services_pb.CreateResponse>;
}
interface IServicesService_IList extends grpc.MethodDefinition<api_services_services_pb.ListRequest, api_services_services_pb.ListResponse> {
    path: "/api.services.Services/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_services_services_pb.ListRequest>;
    requestDeserialize: grpc.deserialize<api_services_services_pb.ListRequest>;
    responseSerialize: grpc.serialize<api_services_services_pb.ListResponse>;
    responseDeserialize: grpc.deserialize<api_services_services_pb.ListResponse>;
}
interface IServicesService_IListVersions extends grpc.MethodDefinition<api_services_services_pb.ListVersionsRequest, api_services_services_pb.ListVersionsResponse> {
    path: "/api.services.Services/ListVersions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_services_services_pb.ListVersionsRequest>;
    requestDeserialize: grpc.deserialize<api_services_services_pb.ListVersionsRequest>;
    responseSerialize: grpc.serialize<api_services_services_pb.ListVersionsResponse>;
    responseDeserialize: grpc.deserialize<api_services_services_pb.ListVersionsResponse>;
}
interface IServicesService_IGetBuildLog extends grpc.MethodDefinition<api_services_services_pb.GetBuildLogRequest, api_services_services_pb.GetBuildLogResponse> {
    path: "/api.services.Services/GetBuildLog";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<api_services_services_pb.GetBuildLogRequest>;
    requestDeserialize: grpc.deserialize<api_services_services_pb.GetBuildLogRequest>;
    responseSerialize: grpc.serialize<api_services_services_pb.GetBuildLogResponse>;
    responseDeserialize: grpc.deserialize<api_services_services_pb.GetBuildLogResponse>;
}
interface IServicesService_IListGithubRepos extends grpc.MethodDefinition<api_services_services_pb.ListGithubReposRequest, api_services_services_pb.ListGithubReposResponse> {
    path: "/api.services.Services/ListGithubRepos";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_services_services_pb.ListGithubReposRequest>;
    requestDeserialize: grpc.deserialize<api_services_services_pb.ListGithubReposRequest>;
    responseSerialize: grpc.serialize<api_services_services_pb.ListGithubReposResponse>;
    responseDeserialize: grpc.deserialize<api_services_services_pb.ListGithubReposResponse>;
}

export const ServicesService: IServicesService;

export interface IServicesServer {
    get: grpc.handleUnaryCall<api_services_services_pb.GetRequest, api_services_services_pb.GetResponse>;
    create: grpc.handleUnaryCall<api_services_services_pb.CreateRequest, api_services_services_pb.CreateResponse>;
    list: grpc.handleUnaryCall<api_services_services_pb.ListRequest, api_services_services_pb.ListResponse>;
    listVersions: grpc.handleUnaryCall<api_services_services_pb.ListVersionsRequest, api_services_services_pb.ListVersionsResponse>;
    getBuildLog: grpc.handleServerStreamingCall<api_services_services_pb.GetBuildLogRequest, api_services_services_pb.GetBuildLogResponse>;
    listGithubRepos: grpc.handleUnaryCall<api_services_services_pb.ListGithubReposRequest, api_services_services_pb.ListGithubReposResponse>;
}

export interface IServicesClient {
    get(request: api_services_services_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: api_services_services_pb.GetResponse) => void): grpc.ClientUnaryCall;
    get(request: api_services_services_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_services_services_pb.GetResponse) => void): grpc.ClientUnaryCall;
    get(request: api_services_services_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_services_services_pb.GetResponse) => void): grpc.ClientUnaryCall;
    create(request: api_services_services_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: api_services_services_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    create(request: api_services_services_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_services_services_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    create(request: api_services_services_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_services_services_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    list(request: api_services_services_pb.ListRequest, callback: (error: grpc.ServiceError | null, response: api_services_services_pb.ListResponse) => void): grpc.ClientUnaryCall;
    list(request: api_services_services_pb.ListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_services_services_pb.ListResponse) => void): grpc.ClientUnaryCall;
    list(request: api_services_services_pb.ListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_services_services_pb.ListResponse) => void): grpc.ClientUnaryCall;
    listVersions(request: api_services_services_pb.ListVersionsRequest, callback: (error: grpc.ServiceError | null, response: api_services_services_pb.ListVersionsResponse) => void): grpc.ClientUnaryCall;
    listVersions(request: api_services_services_pb.ListVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_services_services_pb.ListVersionsResponse) => void): grpc.ClientUnaryCall;
    listVersions(request: api_services_services_pb.ListVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_services_services_pb.ListVersionsResponse) => void): grpc.ClientUnaryCall;
    getBuildLog(request: api_services_services_pb.GetBuildLogRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_services_services_pb.GetBuildLogResponse>;
    getBuildLog(request: api_services_services_pb.GetBuildLogRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_services_services_pb.GetBuildLogResponse>;
    listGithubRepos(request: api_services_services_pb.ListGithubReposRequest, callback: (error: grpc.ServiceError | null, response: api_services_services_pb.ListGithubReposResponse) => void): grpc.ClientUnaryCall;
    listGithubRepos(request: api_services_services_pb.ListGithubReposRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_services_services_pb.ListGithubReposResponse) => void): grpc.ClientUnaryCall;
    listGithubRepos(request: api_services_services_pb.ListGithubReposRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_services_services_pb.ListGithubReposResponse) => void): grpc.ClientUnaryCall;
}

export class ServicesClient extends grpc.Client implements IServicesClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: api_services_services_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: api_services_services_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public get(request: api_services_services_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_services_services_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public get(request: api_services_services_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_services_services_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public create(request: api_services_services_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: api_services_services_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public create(request: api_services_services_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_services_services_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public create(request: api_services_services_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_services_services_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public list(request: api_services_services_pb.ListRequest, callback: (error: grpc.ServiceError | null, response: api_services_services_pb.ListResponse) => void): grpc.ClientUnaryCall;
    public list(request: api_services_services_pb.ListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_services_services_pb.ListResponse) => void): grpc.ClientUnaryCall;
    public list(request: api_services_services_pb.ListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_services_services_pb.ListResponse) => void): grpc.ClientUnaryCall;
    public listVersions(request: api_services_services_pb.ListVersionsRequest, callback: (error: grpc.ServiceError | null, response: api_services_services_pb.ListVersionsResponse) => void): grpc.ClientUnaryCall;
    public listVersions(request: api_services_services_pb.ListVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_services_services_pb.ListVersionsResponse) => void): grpc.ClientUnaryCall;
    public listVersions(request: api_services_services_pb.ListVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_services_services_pb.ListVersionsResponse) => void): grpc.ClientUnaryCall;
    public getBuildLog(request: api_services_services_pb.GetBuildLogRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_services_services_pb.GetBuildLogResponse>;
    public getBuildLog(request: api_services_services_pb.GetBuildLogRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_services_services_pb.GetBuildLogResponse>;
    public listGithubRepos(request: api_services_services_pb.ListGithubReposRequest, callback: (error: grpc.ServiceError | null, response: api_services_services_pb.ListGithubReposResponse) => void): grpc.ClientUnaryCall;
    public listGithubRepos(request: api_services_services_pb.ListGithubReposRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_services_services_pb.ListGithubReposResponse) => void): grpc.ClientUnaryCall;
    public listGithubRepos(request: api_services_services_pb.ListGithubReposRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_services_services_pb.ListGithubReposResponse) => void): grpc.ClientUnaryCall;
}
