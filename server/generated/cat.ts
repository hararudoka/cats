// @generated by protobuf-ts 2.9.1 with parameter client_none,generate_dependencies
// @generated from protobuf file "cat.proto" (package "spec", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * GetCatRequest is data for getting a cat
 *
 * @generated from protobuf message spec.GetCatRequest
 */
export interface GetCatRequest {
    /**
     * id is an id of a cat
     *
     * @generated from protobuf field: int32 id = 1;
     */
    id: number;
}
/**
 * GetCatResponse is answer of service during getting a cat
 *
 * @generated from protobuf message spec.GetCatResponse
 */
export interface GetCatResponse {
    /**
     * id is an id of a cat, it is unique
     *
     * @generated from protobuf field: int32 id = 1;
     */
    id: number;
    /**
     * name is a name of a cat
     *
     * @generated from protobuf field: string name = 2;
     */
    name: string;
    /**
     * usename is unchangable username of a cat
     *
     * @generated from protobuf field: string username = 3;
     */
    username: string;
    /**
     * bio is optional description of a cat
     *
     * @generated from protobuf field: optional string bio = 4;
     */
    bio?: string;
}
/**
 * UpdateCatFieldRequest is used when need to update a field. It is not nesessary to specifiy a field if it is a string.
 *
 * @generated from protobuf message spec.UpdateCatFieldRequest
 */
export interface UpdateCatFieldRequest {
    /**
     * @generated from protobuf field: int32 id = 1;
     */
    id: number;
    /**
     * @generated from protobuf field: string field = 2;
     */
    field: string;
}
/**
 * @generated from protobuf message spec.Response
 */
export interface Response {
    /**
     * for now - HTTP codes
     *
     * @generated from protobuf field: int32 code = 1;
     */
    code: number;
    /**
     * @generated from protobuf field: string message = 2;
     */
    message: string;
}
/**
 * CreateCatRequest is data for creating a cat
 *
 * @generated from protobuf message spec.CreateCatRequest
 */
export interface CreateCatRequest {
    /**
     * name is a name of a cat
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * usename is unchangable username of a cat
     *
     * @generated from protobuf field: string username = 2;
     */
    username: string;
    /**
     * bio is optional description of a cat
     *
     * @generated from protobuf field: optional string bio = 3;
     */
    bio?: string;
}
/**
 * CreateCatResponse is answer of service during creating a cat
 *
 * @generated from protobuf message spec.CreateCatResponse
 */
export interface CreateCatResponse {
    /**
     * id is an id of a cat, it is unique
     *
     * @generated from protobuf field: int32 id = 1;
     */
    id: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class GetCatRequest$Type extends MessageType<GetCatRequest> {
    constructor() {
        super("spec.GetCatRequest", [
            { no: 1, name: "id", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<GetCatRequest>): GetCatRequest {
        const message = { id: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetCatRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetCatRequest): GetCatRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 id */ 1:
                    message.id = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetCatRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 id = 1; */
        if (message.id !== 0)
            writer.tag(1, WireType.Varint).int32(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message spec.GetCatRequest
 */
export const GetCatRequest = new GetCatRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetCatResponse$Type extends MessageType<GetCatResponse> {
    constructor() {
        super("spec.GetCatResponse", [
            { no: 1, name: "id", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "username", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "bio", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<GetCatResponse>): GetCatResponse {
        const message = { id: 0, name: "", username: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetCatResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetCatResponse): GetCatResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 id */ 1:
                    message.id = reader.int32();
                    break;
                case /* string name */ 2:
                    message.name = reader.string();
                    break;
                case /* string username */ 3:
                    message.username = reader.string();
                    break;
                case /* optional string bio */ 4:
                    message.bio = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetCatResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 id = 1; */
        if (message.id !== 0)
            writer.tag(1, WireType.Varint).int32(message.id);
        /* string name = 2; */
        if (message.name !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.name);
        /* string username = 3; */
        if (message.username !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.username);
        /* optional string bio = 4; */
        if (message.bio !== undefined)
            writer.tag(4, WireType.LengthDelimited).string(message.bio);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message spec.GetCatResponse
 */
export const GetCatResponse = new GetCatResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateCatFieldRequest$Type extends MessageType<UpdateCatFieldRequest> {
    constructor() {
        super("spec.UpdateCatFieldRequest", [
            { no: 1, name: "id", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "field", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<UpdateCatFieldRequest>): UpdateCatFieldRequest {
        const message = { id: 0, field: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UpdateCatFieldRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateCatFieldRequest): UpdateCatFieldRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 id */ 1:
                    message.id = reader.int32();
                    break;
                case /* string field */ 2:
                    message.field = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: UpdateCatFieldRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 id = 1; */
        if (message.id !== 0)
            writer.tag(1, WireType.Varint).int32(message.id);
        /* string field = 2; */
        if (message.field !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.field);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message spec.UpdateCatFieldRequest
 */
export const UpdateCatFieldRequest = new UpdateCatFieldRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Response$Type extends MessageType<Response> {
    constructor() {
        super("spec.Response", [
            { no: 1, name: "code", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "message", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Response>): Response {
        const message = { code: 0, message: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Response>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Response): Response {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 code */ 1:
                    message.code = reader.int32();
                    break;
                case /* string message */ 2:
                    message.message = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Response, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 code = 1; */
        if (message.code !== 0)
            writer.tag(1, WireType.Varint).int32(message.code);
        /* string message = 2; */
        if (message.message !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.message);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message spec.Response
 */
export const Response = new Response$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateCatRequest$Type extends MessageType<CreateCatRequest> {
    constructor() {
        super("spec.CreateCatRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "username", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "bio", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<CreateCatRequest>): CreateCatRequest {
        const message = { name: "", username: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CreateCatRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateCatRequest): CreateCatRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* string username */ 2:
                    message.username = reader.string();
                    break;
                case /* optional string bio */ 3:
                    message.bio = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CreateCatRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* string username = 2; */
        if (message.username !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.username);
        /* optional string bio = 3; */
        if (message.bio !== undefined)
            writer.tag(3, WireType.LengthDelimited).string(message.bio);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message spec.CreateCatRequest
 */
export const CreateCatRequest = new CreateCatRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateCatResponse$Type extends MessageType<CreateCatResponse> {
    constructor() {
        super("spec.CreateCatResponse", [
            { no: 1, name: "id", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<CreateCatResponse>): CreateCatResponse {
        const message = { id: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CreateCatResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateCatResponse): CreateCatResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 id */ 1:
                    message.id = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CreateCatResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 id = 1; */
        if (message.id !== 0)
            writer.tag(1, WireType.Varint).int32(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message spec.CreateCatResponse
 */
export const CreateCatResponse = new CreateCatResponse$Type();
/**
 * @generated ServiceType for protobuf service spec.Catter
 */
export const Catter = new ServiceType("spec.Catter", [
    { name: "RegisterCat", options: {}, I: CreateCatRequest, O: CreateCatResponse },
    { name: "GetCat", options: {}, I: GetCatRequest, O: GetCatResponse }
]);
