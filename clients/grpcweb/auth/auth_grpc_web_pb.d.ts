import * as grpcWeb from 'grpc-web';

import {
  OAuthExchangeRequest,
  OAuthExchangeResponse,
  OAuthURLRequest,
  OAuthURLResponse,
  TokenExchangeRequest,
  TokenExchangeResponse} from './auth_pb';

export class AuthClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  oAuthURL(
    request: OAuthURLRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: OAuthURLResponse) => void
  ): grpcWeb.ClientReadableStream<OAuthURLResponse>;

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

export class AuthPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  oAuthURL(
    request: OAuthURLRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<OAuthURLResponse>;

  oAuthExchange(
    request: OAuthExchangeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<OAuthExchangeResponse>;

  tokenExchange(
    request: TokenExchangeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<TokenExchangeResponse>;

}

