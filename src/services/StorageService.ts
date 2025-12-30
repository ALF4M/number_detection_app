import * as FileSystem from 'expo-file-system/legacy';
import { ScanRecord } from '../types';

const IMAGES_DIR = FileSystem.documentDirectory + 'images/';
const RECORDS_FILE = FileSystem.documentDirectory + 'records.json';

export const StorageService = {

    async init() {
        const dirInfo = await FileSystem.getInfoAsync(IMAGES_DIR);
        if (!dirInfo.exists) {
            await FileSystem.makeDirectoryAsync(IMAGES_DIR, { intermediates: true });
        }
    },

    async saveImage(tempUri: string): Promise<string> {
        await this.init();
        const filename = tempUri.split('/').pop();
        const newPath = IMAGES_DIR + filename;

        await FileSystem.copyAsync({
            from: tempUri,
            to: newPath
        });
        return newPath;
    },

    async saveScanRecord(tempUri: string): Promise<void> {
        const newPath = await this.saveImage(tempUri);

        const rn = '34';//TODO: Recognize number with ML --> method call

        const newRecord: ScanRecord = {
            id: Date.now().toString(),
            imageUri: newPath,
            recognizedNumber: rn,
            timestamp: Date.now(),
        };

        let records: ScanRecord[] = [];

        const fileInfo = await FileSystem.getInfoAsync(RECORDS_FILE);
        if (fileInfo.exists) {
            const content = await FileSystem.readAsStringAsync(RECORDS_FILE);
            try {
                records = JSON.parse(content);
            } catch (e) {
                console.error("Error parsing records file", e);
                records = [];
            }
        }
        records.push(newRecord);

        await FileSystem.writeAsStringAsync(RECORDS_FILE, JSON.stringify(records));
    },

    async getScanRecords(): Promise<ScanRecord[]> {
        const fileInfo = await FileSystem.getInfoAsync(RECORDS_FILE);
        if (!fileInfo.exists) {
            return [];
        }
        const content = await FileSystem.readAsStringAsync(RECORDS_FILE);
        try {
            return JSON.parse(content);
        } catch (e) {
            return [];
        }
    },

    async deleteScanRecord(id: string): Promise<void> {
        let records = await this.getScanRecords();
        const recordToDelete = records.find(r => r.id === id);

        if (recordToDelete) {
            try {
                const fileInfo = await FileSystem.getInfoAsync(recordToDelete.imageUri);
                if (fileInfo.exists) {
                    await FileSystem.deleteAsync(recordToDelete.imageUri, { idempotent: true });
                }
            } catch (error) {
                console.error("Error deleting image file:", error);
            }

            records = records.filter(r => r.id !== id);
            await FileSystem.writeAsStringAsync(RECORDS_FILE, JSON.stringify(records));
        }
    }
};

