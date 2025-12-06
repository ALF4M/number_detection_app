import { StyleSheet } from 'react-native';

export const colors = {
  brandBg: '#1E29FF',     // fondo exterior
  card: '#0F172A',        // tarjeta oscura
  cardAlt: '#111827',
  text: '#E5E7EB',
  textDim: '#9CA3AF',
  line: '#1F2937',
  primary: '#2563EB',
  border: '#334155',
  white: '#FFFFFF',
  overlay: 'rgba(0,0,0,0.45)',
};

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.brandBg,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
  },

  // Header
  header: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
    marginBottom: 12,
  },
  headerBack: {
    width: 32, height: 32, borderRadius: 16,
    alignItems: 'center', justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  headerBackIcon: { color: colors.white, fontSize: 18, fontWeight: '700' },
  headerTitle: { color: colors.white, fontSize: 16, fontWeight: '600' },

  // Card
  card: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 26,
    padding: 16,
    gap: 12,
  },
  cardImageZone: {
    flex: 1,
    backgroundColor: colors.cardAlt,
    borderRadius: 20,
    overflow: 'hidden',
  },

  // Imagen colocada por contain
  imageFrame: { position: 'absolute' },

  // Overlay recorte
  overlay: { position: 'absolute' },
  overlayDim: { ...StyleSheet.absoluteFillObject, backgroundColor: colors.overlay },
  cropWindow: { position: 'absolute' },
  cropBorder: { ...StyleSheet.absoluteFillObject, borderWidth: 2, borderColor: colors.white, borderRadius: 8 },

  handle: {
    position: 'absolute', width: 16, height: 16, borderRadius: 8,
    backgroundColor: colors.white, borderWidth: 2, borderColor: colors.card,
  },
  tl: { left: -8, top: -8 },
  tr: { right: -8, top: -8 },
  bl: { left: -8, bottom: -8 },
  br: { right: -8, bottom: -8 },

  // Panel inferior de la card
  cardBottom: {
    paddingTop: 10,
    borderTopWidth: 1, borderTopColor: colors.line,
    gap: 12,
  },

  zoomRow: {
    flexDirection: 'row', alignItems: 'center', gap: 10,
  },
  magnifier: { color: colors.textDim, fontSize: 16 },
  zoomPct: { color: colors.text, fontSize: 13, marginLeft: 6, width: 50, textAlign: 'right' },

  // Slider
  sliderTrack: { flex: 1 },
  slider: {
    height: 24, borderRadius: 12,
    backgroundColor: '#1f2937',
    justifyContent: 'center',
  },
  sliderBar: {
    height: 4, borderRadius: 2, marginHorizontal: 10, backgroundColor: '#374151',
  },
  sliderThumb: {
    position: 'absolute', top: 4, width: 20, height: 16, borderRadius: 8, backgroundColor: '#3B82F6',
  },

  // Botonera
  actionsRow: { flexDirection: 'row', gap: 12, marginTop: 2 },
  actionBtn: {
    flex: 1,
    height: 48, borderRadius: 14,
    backgroundColor: colors.cardAlt,
    borderWidth: 1, borderColor: colors.border,
    alignItems: 'center', justifyContent: 'center',
  },
  actionBtnActive: {
    backgroundColor: '#0B1220', borderColor: '#3B82F6',
  },
  actionText: { color: colors.text, fontSize: 15, fontWeight: '600' },
  actionTextActive: { color: colors.white },

  primaryBtn: {
    flex: 1, height: 48, borderRadius: 14,
    backgroundColor: colors.primary,
    alignItems: 'center', justifyContent: 'center',
  },
  primaryText: { color: colors.white, fontSize: 15, fontWeight: '700' },
});
