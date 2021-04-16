import * as grpcWeb from 'grpc-web';

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  CreateRequest,
  CreateResponse,
  GetBuildLogRequest,
  GetBuildLogResponse,
  GetRequest,
  GetResponse,
  ListGithubReposRequest,
  ListGithubReposResponse,
  ListRequest,
  ListResponse,
  ListVersionsRequest,
  ListVersionsResponse} from './services_pb';

export class ServicesClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  get(
    request: GetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: GetResponse) => void
  ): grpcWeb.ClientReadableStream<GetResponse>;

  create(
    request: CreateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: CreateResponse) => void
  ): grpcWeb.ClientReadableStream<CreateResponse>;

  list(
    request: ListRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ListResponse) => void
  ): grpcWeb.ClientReadableStream<ListResponse>;

  listVersions(
    request: ListVersionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ListVersionsResponse) => void
  ): grpcWeb.ClientReadableStream<ListVersionsResponse>;

  getBuildLog(
    request: GetBuildLogRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<GetBuildLogResponse>;

  listGithubRepos(
    request: ListGithubReposRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ListGithubReposResponse) => void
  ): grpcWeb.ClientReadableStream<ListGithubReposResponse>;

}

export class ServicesPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  get(
    request: GetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<GetResponse>;

  create(
    request: CreateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<CreateResponse>;

  list(
    request: ListRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ListResponse>;

  listVersions(
    request: ListVersionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ListVersionsResponse>;

  getBuildLog(
    request: GetBuildLogRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<GetBuildLogResponse>;

  listGithubRepos(
    request: ListGithubReposRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ListGithubReposResponse>;

}

