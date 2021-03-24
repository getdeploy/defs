// package: api.projects
// file: api/projects/projects.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as api_projects_projects_pb from "../../api/projects/projects_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IProjectsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IProjectsService_IGet;
    create: IProjectsService_ICreate;
    list: IProjectsService_IList;
    invite: IProjectsService_IInvite;
}

interface IProjectsService_IGet extends grpc.MethodDefinition<api_projects_projects_pb.GetRequest, api_projects_projects_pb.GetResponse> {
    path: "/api.projects.Projects/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_projects_projects_pb.GetRequest>;
    requestDeserialize: grpc.deserialize<api_projects_projects_pb.GetRequest>;
    responseSerialize: grpc.serialize<api_projects_projects_pb.GetResponse>;
    responseDeserialize: grpc.deserialize<api_projects_projects_pb.GetResponse>;
}
interface IProjectsService_ICreate extends grpc.MethodDefinition<api_projects_projects_pb.CreateRequest, api_projects_projects_pb.CreateResponse> {
    path: "/api.projects.Projects/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_projects_projects_pb.CreateRequest>;
    requestDeserialize: grpc.deserialize<api_projects_projects_pb.CreateRequest>;
    responseSerialize: grpc.serialize<api_projects_projects_pb.CreateResponse>;
    responseDeserialize: grpc.deserialize<api_projects_projects_pb.CreateResponse>;
}
interface IProjectsService_IList extends grpc.MethodDefinition<api_projects_projects_pb.ListRequest, api_projects_projects_pb.ListResponse> {
    path: "/api.projects.Projects/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_projects_projects_pb.ListRequest>;
    requestDeserialize: grpc.deserialize<api_projects_projects_pb.ListRequest>;
    responseSerialize: grpc.serialize<api_projects_projects_pb.ListResponse>;
    responseDeserialize: grpc.deserialize<api_projects_projects_pb.ListResponse>;
}
interface IProjectsService_IInvite extends grpc.MethodDefinition<api_projects_projects_pb.InviteRequest, api_projects_projects_pb.InviteResponse> {
    path: "/api.projects.Projects/Invite";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_projects_projects_pb.InviteRequest>;
    requestDeserialize: grpc.deserialize<api_projects_projects_pb.InviteRequest>;
    responseSerialize: grpc.serialize<api_projects_projects_pb.InviteResponse>;
    responseDeserialize: grpc.deserialize<api_projects_projects_pb.InviteResponse>;
}

export const ProjectsService: IProjectsService;

export interface IProjectsServer {
    get: grpc.handleUnaryCall<api_projects_projects_pb.GetRequest, api_projects_projects_pb.GetResponse>;
    create: grpc.handleUnaryCall<api_projects_projects_pb.CreateRequest, api_projects_projects_pb.CreateResponse>;
    list: grpc.handleUnaryCall<api_projects_projects_pb.ListRequest, api_projects_projects_pb.ListResponse>;
    invite: grpc.handleUnaryCall<api_projects_projects_pb.InviteRequest, api_projects_projects_pb.InviteResponse>;
}

export interface IProjectsClient {
    get(request: api_projects_projects_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: api_projects_projects_pb.GetResponse) => void): grpc.ClientUnaryCall;
    get(request: api_projects_projects_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_projects_projects_pb.GetResponse) => void): grpc.ClientUnaryCall;
    get(request: api_projects_projects_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_projects_projects_pb.GetResponse) => void): grpc.ClientUnaryCall;
    create(request: api_projects_projects_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: api_projects_projects_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    create(request: api_projects_projects_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_projects_projects_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    create(request: api_projects_projects_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_projects_projects_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    list(request: api_projects_projects_pb.ListRequest, callback: (error: grpc.ServiceError | null, response: api_projects_projects_pb.ListResponse) => void): grpc.ClientUnaryCall;
    list(request: api_projects_projects_pb.ListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_projects_projects_pb.ListResponse) => void): grpc.ClientUnaryCall;
    list(request: api_projects_projects_pb.ListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_projects_projects_pb.ListResponse) => void): grpc.ClientUnaryCall;
    invite(request: api_projects_projects_pb.InviteRequest, callback: (error: grpc.ServiceError | null, response: api_projects_projects_pb.InviteResponse) => void): grpc.ClientUnaryCall;
    invite(request: api_projects_projects_pb.InviteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_projects_projects_pb.InviteResponse) => void): grpc.ClientUnaryCall;
    invite(request: api_projects_projects_pb.InviteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_projects_projects_pb.InviteResponse) => void): grpc.ClientUnaryCall;
}

export class ProjectsClient extends grpc.Client implements IProjectsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: api_projects_projects_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: api_projects_projects_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public get(request: api_projects_projects_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_projects_projects_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public get(request: api_projects_projects_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_projects_projects_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public create(request: api_projects_projects_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: api_projects_projects_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public create(request: api_projects_projects_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_projects_projects_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public create(request: api_projects_projects_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_projects_projects_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public list(request: api_projects_projects_pb.ListRequest, callback: (error: grpc.ServiceError | null, response: api_projects_projects_pb.ListResponse) => void): grpc.ClientUnaryCall;
    public list(request: api_projects_projects_pb.ListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_projects_projects_pb.ListResponse) => void): grpc.ClientUnaryCall;
    public list(request: api_projects_projects_pb.ListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_projects_projects_pb.ListResponse) => void): grpc.ClientUnaryCall;
    public invite(request: api_projects_projects_pb.InviteRequest, callback: (error: grpc.ServiceError | null, response: api_projects_projects_pb.InviteResponse) => void): grpc.ClientUnaryCall;
    public invite(request: api_projects_projects_pb.InviteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_projects_projects_pb.InviteResponse) => void): grpc.ClientUnaryCall;
    public invite(request: api_projects_projects_pb.InviteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_projects_projects_pb.InviteResponse) => void): grpc.ClientUnaryCall;
}
