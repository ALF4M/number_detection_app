export interface ScanRecord {
    id: string;

    // Imágenes
    imageUri: string;
    originalImageUri?: string;

    // Resultado del reconocimiento
    recognizedNumber: string;
    confidence?: number;

    // Metadatos
    timestamp: number;
    note?: string;
}

export type RootStackParamList = {
    Home: undefined;
    Detail: { record: ScanRecord };
    //History: undefined;
};