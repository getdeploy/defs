// package: api.services
// file: api/services/services.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Environment extends jspb.Message { 
    getId(): string;
    setId(value: string): Environment;

    getName(): string;
    setName(value: string): Environment;

    getDnsSafeName(): string;
    setDnsSafeName(value: string): Environment;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Environment;


    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Environment;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Environment.AsObject;
    static toObject(includeInstance: boolean, msg: Environment): Environment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Environment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Environment;
    static deserializeBinaryFromReader(message: Environment, reader: jspb.BinaryReader): Environment;
}

export namespace Environment {
    export type AsObject = {
        id: string,
        name: string,
        dnsSafeName: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class Service extends jspb.Message { 
    getId(): string;
    setId(value: string): Service;

    getAccountId(): string;
    setAccountId(value: string): Service;

    getProjectId(): string;
    setProjectId(value: string): Service;

    getName(): string;
    setName(value: string): Service;

    getDnsSafeName(): string;
    setDnsSafeName(value: string): Service;

    clearRegionsList(): void;
    getRegionsList(): Array<Region>;
    setRegionsList(value: Array<Region>): Service;
    addRegions(value: Region, index?: number): Region;


    hasGithubInfo(): boolean;
    clearGithubInfo(): void;
    getGithubInfo(): GithubInfo | undefined;
    setGithubInfo(value?: GithubInfo): Service;


    getPortsMap(): jspb.Map<string, PortType>;
    clearPortsMap(): void;


    getEnvironmentVariablesMap(): jspb.Map<string, string>;
    clearEnvironmentVariablesMap(): void;

    getReplicasPerRegion(): number;
    setReplicasPerRegion(value: number): Service;

    getCpu(): number;
    setCpu(value: number): Service;

    getMemory(): number;
    setMemory(value: number): Service;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Service;


    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Service;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Service.AsObject;
    static toObject(includeInstance: boolean, msg: Service): Service.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Service, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Service;
    static deserializeBinaryFromReader(message: Service, reader: jspb.BinaryReader): Service;
}

export namespace Service {
    export type AsObject = {
        id: string,
        accountId: string,
        projectId: string,
        name: string,
        dnsSafeName: string,
        regionsList: Array<Region>,
        githubInfo?: GithubInfo.AsObject,

        portsMap: Array<[string, PortType]>,

        environmentVariablesMap: Array<[string, string]>,
        replicasPerRegion: number,
        cpu: number,
        memory: number,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class GithubInfo extends jspb.Message { 
    getGithubRepoId(): number;
    setGithubRepoId(value: number): GithubInfo;

    getFullName(): string;
    setFullName(value: string): GithubInfo;

    getMainBranch(): string;
    setMainBranch(value: string): GithubInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GithubInfo.AsObject;
    static toObject(includeInstance: boolean, msg: GithubInfo): GithubInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GithubInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GithubInfo;
    static deserializeBinaryFromReader(message: GithubInfo, reader: jspb.BinaryReader): GithubInfo;
}

export namespace GithubInfo {
    export type AsObject = {
        githubRepoId: number,
        fullName: string,
        mainBranch: string,
    }
}

export class Version extends jspb.Message { 
    getId(): string;
    setId(value: string): Version;

    getServiceId(): string;
    setServiceId(value: string): Version;

    getVersion(): string;
    setVersion(value: string): Version;

    getSha(): string;
    setSha(value: string): Version;

    getCommitMessage(): string;
    setCommitMessage(value: string): Version;

    getAuthorUsername(): string;
    setAuthorUsername(value: string): Version;

    getAuthorEmail(): string;
    setAuthorEmail(value: string): Version;

    getAuthorAccountId(): string;
    setAuthorAccountId(value: string): Version;

    getContainerUrl(): string;
    setContainerUrl(value: string): Version;

    getBuildStatus(): BuildStatus;
    setBuildStatus(value: BuildStatus): Version;

    getAvailable(): boolean;
    setAvailable(value: boolean): Version;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Version;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Version.AsObject;
    static toObject(includeInstance: boolean, msg: Version): Version.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Version;
    static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;
}

export namespace Version {
    export type AsObject = {
        id: string,
        serviceId: string,
        version: string,
        sha: string,
        commitMessage: string,
        authorUsername: string,
        authorEmail: string,
        authorAccountId: string,
        containerUrl: string,
        buildStatus: BuildStatus,
        available: boolean,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ServiceStatus extends jspb.Message { 
    clearEnvironmentsList(): void;
    getEnvironmentsList(): Array<EnvironmentStatus>;
    setEnvironmentsList(value: Array<EnvironmentStatus>): ServiceStatus;
    addEnvironments(value?: EnvironmentStatus, index?: number): EnvironmentStatus;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceStatus.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceStatus): ServiceStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceStatus;
    static deserializeBinaryFromReader(message: ServiceStatus, reader: jspb.BinaryReader): ServiceStatus;
}

export namespace ServiceStatus {
    export type AsObject = {
        environmentsList: Array<EnvironmentStatus.AsObject>,
    }
}

export class EnvironmentStatus extends jspb.Message { 

    hasEnvironment(): boolean;
    clearEnvironment(): void;
    getEnvironment(): Environment | undefined;
    setEnvironment(value?: Environment): EnvironmentStatus;

    clearVersionsList(): void;
    getVersionsList(): Array<EnvironmentVersionStatus>;
    setVersionsList(value: Array<EnvironmentVersionStatus>): EnvironmentStatus;
    addVersions(value?: EnvironmentVersionStatus, index?: number): EnvironmentVersionStatus;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EnvironmentStatus.AsObject;
    static toObject(includeInstance: boolean, msg: EnvironmentStatus): EnvironmentStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EnvironmentStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EnvironmentStatus;
    static deserializeBinaryFromReader(message: EnvironmentStatus, reader: jspb.BinaryReader): EnvironmentStatus;
}

export namespace EnvironmentStatus {
    export type AsObject = {
        environment?: Environment.AsObject,
        versionsList: Array<EnvironmentVersionStatus.AsObject>,
    }
}

export class EnvironmentVersionStatus extends jspb.Message { 
    getTrafficPercentage(): number;
    setTrafficPercentage(value: number): EnvironmentVersionStatus;

    clearInstancesList(): void;
    getInstancesList(): Array<Instance>;
    setInstancesList(value: Array<Instance>): EnvironmentVersionStatus;
    addInstances(value?: Instance, index?: number): Instance;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EnvironmentVersionStatus.AsObject;
    static toObject(includeInstance: boolean, msg: EnvironmentVersionStatus): EnvironmentVersionStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EnvironmentVersionStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EnvironmentVersionStatus;
    static deserializeBinaryFromReader(message: EnvironmentVersionStatus, reader: jspb.BinaryReader): EnvironmentVersionStatus;
}

export namespace EnvironmentVersionStatus {
    export type AsObject = {
        trafficPercentage: number,
        instancesList: Array<Instance.AsObject>,
    }
}

export class Instance extends jspb.Message { 
    getId(): string;
    setId(value: string): Instance;

    getStatus(): InstanceStatus;
    setStatus(value: InstanceStatus): Instance;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Instance.AsObject;
    static toObject(includeInstance: boolean, msg: Instance): Instance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Instance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Instance;
    static deserializeBinaryFromReader(message: Instance, reader: jspb.BinaryReader): Instance;
}

export namespace Instance {
    export type AsObject = {
        id: string,
        status: InstanceStatus,
    }
}

export class GetRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetRequest;


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
        id: string,
    }
}

export class GetResponse extends jspb.Message { 

    hasService(): boolean;
    clearService(): void;
    getService(): Service | undefined;
    setService(value?: Service): GetResponse;


    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): ServiceStatus | undefined;
    setStatus(value?: ServiceStatus): GetResponse;


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
        service?: Service.AsObject,
        status?: ServiceStatus.AsObject,
    }
}

export class CreateRequest extends jspb.Message { 
    getProjectId(): string;
    setProjectId(value: string): CreateRequest;

    getAccountId(): string;
    setAccountId(value: string): CreateRequest;

    getName(): string;
    setName(value: string): CreateRequest;

    getDnsSafeName(): string;
    setDnsSafeName(value: string): CreateRequest;

    clearRegionsList(): void;
    getRegionsList(): Array<Region>;
    setRegionsList(value: Array<Region>): CreateRequest;
    addRegions(value: Region, index?: number): Region;

    getGithubRepoId(): number;
    setGithubRepoId(value: number): CreateRequest;


    getPortsMap(): jspb.Map<string, PortType>;
    clearPortsMap(): void;


    getEnvironmentVariablesMap(): jspb.Map<string, string>;
    clearEnvironmentVariablesMap(): void;

    getReplicasPerRegion(): number;
    setReplicasPerRegion(value: number): CreateRequest;

    getCpu(): number;
    setCpu(value: number): CreateRequest;

    getMemory(): number;
    setMemory(value: number): CreateRequest;


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
        projectId: string,
        accountId: string,
        name: string,
        dnsSafeName: string,
        regionsList: Array<Region>,
        githubRepoId: number,

        portsMap: Array<[string, PortType]>,

        environmentVariablesMap: Array<[string, string]>,
        replicasPerRegion: number,
        cpu: number,
        memory: number,
    }
}

export class CreateResponse extends jspb.Message { 

    hasService(): boolean;
    clearService(): void;
    getService(): Service | undefined;
    setService(value?: Service): CreateResponse;


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
        service?: Service.AsObject,
    }
}

export class ListRequest extends jspb.Message { 
    getProjectId(): string;
    setProjectId(value: string): ListRequest;


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
        projectId: string,
    }
}

export class ListResponse extends jspb.Message { 
    clearServicesList(): void;
    getServicesList(): Array<Service>;
    setServicesList(value: Array<Service>): ListResponse;
    addServices(value?: Service, index?: number): Service;


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
        servicesList: Array<Service.AsObject>,
    }
}

export class ListVersionsRequest extends jspb.Message { 
    getServiceId(): string;
    setServiceId(value: string): ListVersionsRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListVersionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListVersionsRequest): ListVersionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListVersionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListVersionsRequest;
    static deserializeBinaryFromReader(message: ListVersionsRequest, reader: jspb.BinaryReader): ListVersionsRequest;
}

export namespace ListVersionsRequest {
    export type AsObject = {
        serviceId: string,
    }
}

export class ListVersionsResponse extends jspb.Message { 
    clearVersionsList(): void;
    getVersionsList(): Array<Version>;
    setVersionsList(value: Array<Version>): ListVersionsResponse;
    addVersions(value?: Version, index?: number): Version;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListVersionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListVersionsResponse): ListVersionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListVersionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListVersionsResponse;
    static deserializeBinaryFromReader(message: ListVersionsResponse, reader: jspb.BinaryReader): ListVersionsResponse;
}

export namespace ListVersionsResponse {
    export type AsObject = {
        versionsList: Array<Version.AsObject>,
    }
}

export class GetBuildLogRequest extends jspb.Message { 
    getVersionId(): string;
    setVersionId(value: string): GetBuildLogRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBuildLogRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetBuildLogRequest): GetBuildLogRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBuildLogRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBuildLogRequest;
    static deserializeBinaryFromReader(message: GetBuildLogRequest, reader: jspb.BinaryReader): GetBuildLogRequest;
}

export namespace GetBuildLogRequest {
    export type AsObject = {
        versionId: string,
    }
}

export class GetBuildLogResponse extends jspb.Message { 
    getLog(): string;
    setLog(value: string): GetBuildLogResponse;

    getStatus(): BuildStatus;
    setStatus(value: BuildStatus): GetBuildLogResponse;

    getAvailable(): boolean;
    setAvailable(value: boolean): GetBuildLogResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBuildLogResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetBuildLogResponse): GetBuildLogResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBuildLogResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBuildLogResponse;
    static deserializeBinaryFromReader(message: GetBuildLogResponse, reader: jspb.BinaryReader): GetBuildLogResponse;
}

export namespace GetBuildLogResponse {
    export type AsObject = {
        log: string,
        status: BuildStatus,
        available: boolean,
    }
}

export class ListGithubReposRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListGithubReposRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListGithubReposRequest): ListGithubReposRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListGithubReposRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListGithubReposRequest;
    static deserializeBinaryFromReader(message: ListGithubReposRequest, reader: jspb.BinaryReader): ListGithubReposRequest;
}

export namespace ListGithubReposRequest {
    export type AsObject = {
    }
}

export class GithubRepo extends jspb.Message { 
    getId(): number;
    setId(value: number): GithubRepo;

    getFullName(): string;
    setFullName(value: string): GithubRepo;

    getPrivate(): boolean;
    setPrivate(value: boolean): GithubRepo;


    hasLastPush(): boolean;
    clearLastPush(): void;
    getLastPush(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastPush(value?: google_protobuf_timestamp_pb.Timestamp): GithubRepo;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): GithubRepo;


    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): GithubRepo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GithubRepo.AsObject;
    static toObject(includeInstance: boolean, msg: GithubRepo): GithubRepo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GithubRepo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GithubRepo;
    static deserializeBinaryFromReader(message: GithubRepo, reader: jspb.BinaryReader): GithubRepo;
}

export namespace GithubRepo {
    export type AsObject = {
        id: number,
        fullName: string,
        pb_private: boolean,
        lastPush?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ListGithubReposResponse extends jspb.Message { 
    clearReposList(): void;
    getReposList(): Array<GithubRepo>;
    setReposList(value: Array<GithubRepo>): ListGithubReposResponse;
    addRepos(value?: GithubRepo, index?: number): GithubRepo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListGithubReposResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListGithubReposResponse): ListGithubReposResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListGithubReposResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListGithubReposResponse;
    static deserializeBinaryFromReader(message: ListGithubReposResponse, reader: jspb.BinaryReader): ListGithubReposResponse;
}

export namespace ListGithubReposResponse {
    export type AsObject = {
        reposList: Array<GithubRepo.AsObject>,
    }
}

export class CommitPushed extends jspb.Message { 
    getServiceId(): string;
    setServiceId(value: string): CommitPushed;

    getRepoId(): number;
    setRepoId(value: number): CommitPushed;

    getRepoName(): string;
    setRepoName(value: string): CommitPushed;

    getRef(): string;
    setRef(value: string): CommitPushed;

    getHead(): string;
    setHead(value: string): CommitPushed;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CommitPushed.AsObject;
    static toObject(includeInstance: boolean, msg: CommitPushed): CommitPushed.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CommitPushed, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CommitPushed;
    static deserializeBinaryFromReader(message: CommitPushed, reader: jspb.BinaryReader): CommitPushed;
}

export namespace CommitPushed {
    export type AsObject = {
        serviceId: string,
        repoId: number,
        repoName: string,
        ref: string,
        head: string,
    }
}

export enum Region {
    REGION_UNSPECIFIED = 0,
    REGION_WEST_EUROPE = 1,
    REGION_CENTRAL_USA = 2,
    REGION_EAST_ASIA = 3,
}

export enum DeploymentType {
    DEPLOYMENT_TYPE_UNSPECIFIED = 0,
    DEPLOYMENT_TYPE_MANUAL = 1,
    DEPLOYMENT_TYPE_GITHUB = 2,
}

export enum PortType {
    PORT_TYPE_UNSPECIFIED = 0,
    PORT_TYPE_TCP = 1,
    PORT_TYPE_HTTP = 2,
    PORT_TYPE_HTTPS = 3,
    PORT_TYPE_GRPC = 4,
    PORT_TYPE_GRAPHQL = 5,
}

export enum InstanceStatus {
    INSTANCE_STATUS_UNSPECIFIED = 0,
    INSTANCE_STATUS_PENDING = 1,
    INSTANCE_STATUS_RUNNING = 2,
    INSTANCE_STATUS_SUCCEEDED = 3,
    INSTANCE_STATUS_FAILED = 4,
}

export enum BuildStatus {
    BUILD_STATUS_UNSPECIFIED = 0,
    BUILD_STATUS_PENDING = 1,
    BUILD_STATUS_RUNNING = 2,
    BUILD_STATUS_SUCCEEDED = 3,
    BUILD_STATUS_FAILED = 4,
}
