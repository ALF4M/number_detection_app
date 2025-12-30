import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StorageService } from '../services/StorageService';
import { ScanRecord } from '../types';

export function useScanHistory() {
    const [items, setItems] = useState<ScanRecord[]>([]);

    useFocusEffect(
        useCallback(() => {
            let isActive = true;
            const load = async () => {
                try {
                    const records = await StorageService.getScanRecords();
                    records.sort((a, b) => b.timestamp - a.timestamp);
                    if (isActive) setItems(records);
                } catch (e) {
                    console.error(e);
                }
            };

            load();
            return () => { isActive = false; };
        }, [])
    );

    return items;
}
