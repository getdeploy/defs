import * as grpcWeb from 'grpc-web';

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  CreateRequest,
  CreateResponse,
  GetRequest,
  GetResponse,
  InviteRequest,
  InviteResponse,
  ListRequest,
  ListResponse} from './projects_pb';

export class ProjectsClient {
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

  invite(
    request: InviteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: InviteResponse) => void
  ): grpcWeb.ClientReadableStream<InviteResponse>;

}

export class ProjectsPromiseClient {
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

  invite(
    request: InviteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<InviteResponse>;

}

