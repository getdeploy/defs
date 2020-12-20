import * as grpcWeb from 'grpc-web';

import {
  CreateRequest,
  CreateResponse,
  OAuthExchangeRequest,
  OAuthExchangeResponse,
  OAuthLoginRequest,
  OAuthLoginResponse,
  TokenExchangeRequest,
  TokenExchangeResponse} from './auth_pb';

export class AuthClient {
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

  create(
    request: CreateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: CreateResponse) => void
  ): grpcWeb.ClientReadableStream<CreateResponse>;

}

export class AuthPromiseClient {
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

  create(
    request: CreateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<CreateResponse>;

}

