import * as FileSystem from 'expo-file-system';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type HistoryItem = {
  id: string;
  uri: string;
  createdAt: number;
  width?: number;
  height?: number;
  label?: string; // opcional: número detectado
};

const STORE_KEY = 'ND_HISTORY';
const DIR = FileSystem.documentDirectory + 'history/';

async function ensureDir() {
  const info = await FileSystem.getInfoAsync(DIR);
  if (!info.exists) await FileSystem.makeDirectoryAsync(DIR, { intermediates: true });
}

export async function listHistory(): Promise<HistoryItem[]> {
  const raw = await AsyncStorage.getItem(STORE_KEY);
  if (!raw) return [];
  try {
    const arr = JSON.parse(raw) as HistoryItem[];
    return arr.sort((a, b) => b.createdAt - a.createdAt);
  } catch {
    return [];
  }
}

export async function addToHistory(inputUri: string, meta?: { width?: number; height?: number; label?: string }): Promise<HistoryItem> {
  await ensureDir();
  const id = Math.random().toString(36).slice(2) + Date.now().toString(36);
  const ext = inputUri.split('.').pop()?.toLowerCase();
  const filename = `${id}.${ext && ext.length <= 4 ? ext : 'png'}`;
  const dest = DIR + filename;

  if (inputUri.startsWith('file://')) {
    await FileSystem.copyAsync({ from: inputUri, to: dest });
  } else {
    await FileSystem.downloadAsync(inputUri, dest);
  }

  const item: HistoryItem = {
    id,
    uri: dest,
    createdAt: Date.now(),
    width: meta?.width,
    height: meta?.height,
    label: meta?.label,
  };

  const prev = await listHistory();
  const next = [item, ...prev];
  await AsyncStorage.setItem(STORE_KEY, JSON.stringify(next));
  return item;
}

export async function removeFromHistory(id: string): Promise<void> {
  const prev = await listHistory();
  const target = prev.find((x) => x.id === id);
  if (target) {
    try { await FileSystem.deleteAsync(target.uri, { idempotent: true }); } catch {}
  }
  const next = prev.filter((x) => x.id !== id);
  await AsyncStorage.setItem(STORE_KEY, JSON.stringify(next));
}

export async function clearHistory(): Promise<void> {
  const prev = await listHistory();
  await Promise.all(prev.map(x => FileSystem.deleteAsync(x.uri, { idempotent: true }))).catch(() => {});
  await AsyncStorage.removeItem(STORE_KEY);
}
