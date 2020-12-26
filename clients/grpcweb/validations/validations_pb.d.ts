import * as jspb from "google-protobuf"

export class Error extends jspb.Message {
  getField(): string;
  setField(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Error.AsObject;
  static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
  static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Error;
  static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
}

export namespace Error {
  export type AsObject = {
    field: string,
    message: string,
  }
}

export class Errors extends jspb.Message {
  getErrorsList(): Array<Error>;
  setErrorsList(value: Array<Error>): void;
  clearErrorsList(): void;
  addErrors(value?: Error, index?: number): Error;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Errors.AsObject;
  static toObject(includeInstance: boolean, msg: Errors): Errors.AsObject;
  static serializeBinaryToWriter(message: Errors, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Errors;
  static deserializeBinaryFromReader(message: Errors, reader: jspb.BinaryReader): Errors;
}

export namespace Errors {
  export type AsObject = {
    errorsList: Array<Error.AsObject>,
  }
}

