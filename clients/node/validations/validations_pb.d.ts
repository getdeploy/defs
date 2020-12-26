// package: validations
// file: validations/validations.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Error extends jspb.Message { 
    getField(): string;
    setField(value: string): Error;

    getMessage(): string;
    setMessage(value: string): Error;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Error.AsObject;
    static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
    clearErrorsList(): void;
    getErrorsList(): Array<Error>;
    setErrorsList(value: Array<Error>): Errors;
    addErrors(value?: Error, index?: number): Error;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Errors.AsObject;
    static toObject(includeInstance: boolean, msg: Errors): Errors.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Errors, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Errors;
    static deserializeBinaryFromReader(message: Errors, reader: jspb.BinaryReader): Errors;
}

export namespace Errors {
    export type AsObject = {
        errorsList: Array<Error.AsObject>,
    }
}
