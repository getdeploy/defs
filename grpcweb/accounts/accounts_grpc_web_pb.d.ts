import * as grpcWeb from 'grpc-web';

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  CreateRequest,
  CreateResponse} from './accounts_pb';

export class AccountsClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  create(
    request: CreateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: CreateResponse) => void
  ): grpcWeb.ClientReadableStream<CreateResponse>;

}

export class AccountsPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  create(
    request: CreateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<CreateResponse>;

}

