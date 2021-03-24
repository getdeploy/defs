import * as jspb from "google-protobuf"

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Project extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getAccountsList(): Array<ProjectAccount>;
  setAccountsList(value: Array<ProjectAccount>): void;
  clearAccountsList(): void;
  addAccounts(value?: ProjectAccount, index?: number): ProjectAccount;

  getInvitesList(): Array<ProjectInvite>;
  setInvitesList(value: Array<ProjectInvite>): void;
  clearInvitesList(): void;
  addInvites(value?: ProjectInvite, index?: number): ProjectInvite;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreatedAt(): boolean;
  clearCreatedAt(): void;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Project.AsObject;
  static toObject(includeInstance: boolean, msg: Project): Project.AsObject;
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
  setAccountId(value: string): void;

  getRelation(): ProjectAccountRelation;
  setRelation(value: ProjectAccountRelation): void;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreatedAt(): boolean;
  clearCreatedAt(): void;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectAccount.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectAccount): ProjectAccount.AsObject;
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
  setEmail(value: string): void;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreatedAt(): boolean;
  clearCreatedAt(): void;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectInvite.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectInvite): ProjectInvite.AsObject;
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
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): void;
  clearIdsList(): void;
  addIds(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRequest): GetRequest.AsObject;
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
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
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
  getProject(): Project | undefined;
  setProject(value?: Project): void;
  hasProject(): boolean;
  clearProject(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateResponse): CreateResponse.AsObject;
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
  static serializeBinaryToWriter(message: ListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRequest;
  static deserializeBinaryFromReader(message: ListRequest, reader: jspb.BinaryReader): ListRequest;
}

export namespace ListRequest {
  export type AsObject = {
  }
}

export class ListResponse extends jspb.Message {
  getProjectsList(): Array<Project>;
  setProjectsList(value: Array<Project>): void;
  clearProjectsList(): void;
  addProjects(value?: Project, index?: number): Project;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListResponse): ListResponse.AsObject;
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
  setProjectId(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InviteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InviteRequest): InviteRequest.AsObject;
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
  getProject(): Project | undefined;
  setProject(value?: Project): void;
  hasProject(): boolean;
  clearProject(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InviteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InviteResponse): InviteResponse.AsObject;
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
