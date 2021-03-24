// package: api.projects
// file: api/projects/projects.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Project extends jspb.Message { 
    getId(): string;
    setId(value: string): Project;

    getName(): string;
    setName(value: string): Project;

    clearAccountsList(): void;
    getAccountsList(): Array<ProjectAccount>;
    setAccountsList(value: Array<ProjectAccount>): Project;
    addAccounts(value?: ProjectAccount, index?: number): ProjectAccount;

    clearInvitesList(): void;
    getInvitesList(): Array<ProjectInvite>;
    setInvitesList(value: Array<ProjectInvite>): Project;
    addInvites(value?: ProjectInvite, index?: number): ProjectInvite;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Project;


    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Project;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Project.AsObject;
    static toObject(includeInstance: boolean, msg: Project): Project.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Project, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Project;
    static deserializeBinaryFromReader(message: Project, reader: jspb.BinaryReader): Project;
}

export namespace Project {
    export type AsObject = {
        id: string,
        name: string,
        accountsList: Array<ProjectAccount.AsObject>,
        invitesList: Array<ProjectInvite.AsObject>,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ProjectAccount extends jspb.Message { 
    getAccountId(): string;
    setAccountId(value: string): ProjectAccount;

    getRelation(): ProjectAccountRelation;
    setRelation(value: ProjectAccountRelation): ProjectAccount;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ProjectAccount;


    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ProjectAccount;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProjectAccount.AsObject;
    static toObject(includeInstance: boolean, msg: ProjectAccount): ProjectAccount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProjectAccount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProjectAccount;
    static deserializeBinaryFromReader(message: ProjectAccount, reader: jspb.BinaryReader): ProjectAccount;
}

export namespace ProjectAccount {
    export type AsObject = {
        accountId: string,
        relation: ProjectAccountRelation,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ProjectInvite extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): ProjectInvite;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ProjectInvite;


    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ProjectInvite;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProjectInvite.AsObject;
    static toObject(includeInstance: boolean, msg: ProjectInvite): ProjectInvite.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProjectInvite, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProjectInvite;
    static deserializeBinaryFromReader(message: ProjectInvite, reader: jspb.BinaryReader): ProjectInvite;
}

export namespace ProjectInvite {
    export type AsObject = {
        email: string,
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

    getProjectsMap(): jspb.Map<string, Project>;
    clearProjectsMap(): void;


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

        projectsMap: Array<[string, Project.AsObject]>,
    }
}

export class CreateRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): CreateRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateRequest;
    static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
    export type AsObject = {
        name: string,
    }
}

export class CreateResponse extends jspb.Message { 

    hasProject(): boolean;
    clearProject(): void;
    getProject(): Project | undefined;
    setProject(value?: Project): CreateResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateResponse): CreateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateResponse;
    static deserializeBinaryFromReader(message: CreateResponse, reader: jspb.BinaryReader): CreateResponse;
}

export namespace CreateResponse {
    export type AsObject = {
        project?: Project.AsObject,
    }
}

export class ListRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListRequest): ListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListRequest;
    static deserializeBinaryFromReader(message: ListRequest, reader: jspb.BinaryReader): ListRequest;
}

export namespace ListRequest {
    export type AsObject = {
    }
}

export class ListResponse extends jspb.Message { 
    clearProjectsList(): void;
    getProjectsList(): Array<Project>;
    setProjectsList(value: Array<Project>): ListResponse;
    addProjects(value?: Project, index?: number): Project;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListResponse): ListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListResponse;
    static deserializeBinaryFromReader(message: ListResponse, reader: jspb.BinaryReader): ListResponse;
}

export namespace ListResponse {
    export type AsObject = {
        projectsList: Array<Project.AsObject>,
    }
}

export class InviteRequest extends jspb.Message { 
    getProjectId(): string;
    setProjectId(value: string): InviteRequest;

    getEmail(): string;
    setEmail(value: string): InviteRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InviteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: InviteRequest): InviteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InviteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InviteRequest;
    static deserializeBinaryFromReader(message: InviteRequest, reader: jspb.BinaryReader): InviteRequest;
}

export namespace InviteRequest {
    export type AsObject = {
        projectId: string,
        email: string,
    }
}

export class InviteResponse extends jspb.Message { 

    hasProject(): boolean;
    clearProject(): void;
    getProject(): Project | undefined;
    setProject(value?: Project): InviteResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InviteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: InviteResponse): InviteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InviteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InviteResponse;
    static deserializeBinaryFromReader(message: InviteResponse, reader: jspb.BinaryReader): InviteResponse;
}

export namespace InviteResponse {
    export type AsObject = {
        project?: Project.AsObject,
    }
}

export enum ProjectAccountRelation {
    PROJECT_ACCOUNT_RELATION_UNSPECIFIED = 0,
    PROJECT_ACCOUNT_RELATION_OWNER = 1,
    PROJECT_ACCOUNT_RELATION_USER = 2,
}
