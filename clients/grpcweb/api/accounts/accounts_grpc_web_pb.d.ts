import * as grpcWeb from 'grpc-web';

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  ExchangeAuthCodeRequest,
  ExchangeAuthCodeResponse,
  GetAuthURLRequest,
  GetAuthURLResponse,
  GetRequest,
  GetResponse,
  RefreshTokenRequest,
  RefreshTokenResponse} from './accounts_pb';

export class AccountsClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  get(
    request: GetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: GetResponse) => void
  ): grpcWeb.ClientReadableStream<GetResponse>;

  getAuthURL(
    request: GetAuthURLRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: GetAuthURLResponse) => void
  ): grpcWeb.ClientReadableStream<GetAuthURLResponse>;

  exchangeAuthCode(
    request: ExchangeAuthCodeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ExchangeAuthCodeResponse) => void
  ): grpcWeb.ClientReadableStream<ExchangeAuthCodeResponse>;

  refreshToken(
    request: RefreshTokenRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: RefreshTokenResponse) => void
  ): grpcWeb.ClientReadableStream<RefreshTokenResponse>;

}

export class AccountsPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  get(
    request: GetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<GetResponse>;

  getAuthURL(
    request: GetAuthURLRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<GetAuthURLResponse>;

  exchangeAuthCode(
    request: ExchangeAuthCodeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ExchangeAuthCodeResponse>;

  refreshToken(
    request: RefreshTokenRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<RefreshTokenResponse>;

}

