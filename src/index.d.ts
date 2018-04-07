declare const create: (chars: string[]) => {
    encode: (str: string) => string;
    decode: (str: string) => string;
};
declare const encode: (str: string) => string, decode: (str: string) => string;
declare const encodeComponents: (str: string) => string, decodeComponents: (str: string) => string;
export { create, encode, decode, encodeComponents, decodeComponents };
declare const _default: {
    create: (chars: string[]) => {
        encode: (str: string) => string;
        decode: (str: string) => string;
    };
    encode: (str: string) => string;
    decode: (str: string) => string;
    encodeComponents: (str: string) => string;
    decodeComponents: (str: string) => string;
};
export default _default;
