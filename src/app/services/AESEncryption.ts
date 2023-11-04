import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({ providedIn: 'root' })

export class AESEncryptionService {
    constructor() { }

    encrypt(plainText: string, key: string): string {

        const keySecret = CryptoJS.enc.Utf8.parse(key);

        const encryptedText = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(plainText), keySecret, {
            iv: keySecret,
            keySize: 8,
            padding: CryptoJS.pad.Pkcs7,
            mode: CryptoJS.mode.CBC
        });

        return encryptedText.toString();
    }

    generateRandomKey(): string {
        const size = 8;
        const key = CryptoJS.lib.WordArray.random(size);

        return key.toString(CryptoJS.enc.Hex);
    }

}