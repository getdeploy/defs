import * as grpcWeb from 'grpc-web';

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  OAuthExchangeRequest,
  OAuthExchangeResponse,
  OAuthLoginRequest,
  OAuthLoginResponse,
  TokenExchangeRequest,
  TokenExchangeResponse} from './accounts_pb';

export class AccountsClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  oAuthLogin(
    request: OAuthLoginRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: OAuthLoginResponse) => void
  ): grpcWeb.ClientReadableStream<OAuthLoginResponse>;

  oAuthExchange(
    request: OAuthExchangeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: OAuthExchangeResponse) => void
  ): grpcWeb.ClientReadableStream<OAuthExchangeResponse>;

  tokenExchange(
    request: TokenExchangeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: TokenExchangeResponse) => void
  ): grpcWeb.ClientReadableStream<TokenExchangeResponse>;

}

export class AccountsPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  oAuthLogin(
    request: OAuthLoginRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<OAuthLoginResponse>;

  oAuthExchange(
    request: OAuthExchangeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<OAuthExchangeResponse>;

  tokenExchange(
    request: TokenExchangeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<TokenExchangeResponse>;

}

