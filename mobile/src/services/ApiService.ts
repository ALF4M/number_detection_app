import Constants from 'expo-constants';
const hostUri = Constants.expoConfig?.hostUri;
const ip = hostUri ? hostUri.split(':')[0] : 'localhost';
const API_URL = `http://${ip}:5001/predict`;

export const ApiService = {
    async recognizeImage(imageUri: string): Promise<string | null> {
        try {
            console.log(`[ApiService] Starting upload to ${API_URL}...`);
            console.log(`[ApiService] Image URI: ${imageUri}`);

            const formData = new FormData();
            formData.append('file', {
                uri: imageUri,
                name: 'image.jpg',
                type: 'image/jpeg',
            } as any);

            const response = await fetch(API_URL, {
                method: 'POST',
                body: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log(`[ApiService] Response status: ${response.status}`);
            const responseText = await response.text();
            console.log(`[ApiService] Response body: ${responseText}`);

            if (response.ok) {
                const responseBody = JSON.parse(responseText);
                if (responseBody.digit !== undefined) {
                    return responseBody.digit.toString();
                }
            } else {
                console.warn('[ApiService] Server returned error');
            }
            return null;
        } catch (error) {
            console.error('[ApiService] Error calling recognition API:', error);
            return null;
        }
    }
};
