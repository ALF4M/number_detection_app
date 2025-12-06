import { StyleSheet } from 'react-native';

export const palette = {
  bg: '#F5F7FB',       // Fondo general claro
  card: '#FFFFFF',     // Fondo de las tarjetas
  text: '#0F172A',     // Color del título
  sub: '#64748B',      // Color de la fecha (gris más suave)
  border: '#E6ECF4',   // Borde sutil de las tarjetas
  link: '#3B82F6',     // Azul vibrante para los números (similar al diseño)
  chevron: '#CBD5E1',  // Color de la flecha derecha
  thumbBg: '#EEF2F8',  // Fondo del cuadrado del icono
  thumbIcon: '#94A3B8' // Color del icono de imagen placeholder
};

export const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: palette.bg },

  header: {
    height: 56,
    paddingHorizontal: 8, // Reducido ligeramente
    flexDirection: 'row',
    alignItems: 'center',
    // gap: 4, // Eliminamos el gap fijo para alinear mejor
  },
  backBtn: {
    width: 40, height: 40,
    alignItems: 'center', justifyContent: 'center',
    // backgroundColor: '#EEF2F8', // ELIMINADO: Fondo transparente como en la imagen
    marginLeft: 4,
  },
  // backIcon: { fontSize: 24, color: palette.text }, // Ya no se usa, usamos Ionicons
  title: { fontSize: 17, color: palette.text, fontWeight: '600', marginLeft: 4 },

  list: { paddingHorizontal: 16, paddingTop: 8, paddingBottom: 24 },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.card,
    borderRadius: 16, // Radio de borde más suave
    // Eliminamos el borde explícito para un look más limpio, o usamos uno muy sutil
    // borderWidth: 1, borderColor: palette.border,
    shadowColor: "#000", // Sombra muy sutil para dar profundidad
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    padding: 12,
    marginBottom: 12, // Separación entre tarjetas
  },

  thumbBox: {
    width: 48, height: 48, borderRadius: 12,
    backgroundColor: palette.thumbBg, // Color de fondo del icono
    alignItems: 'center', justifyContent: 'center',
    overflow: 'hidden', marginRight: 14,
  },
  thumb: { width: '100%', height: '100%' },

  meta: { flex: 1, justifyContent: 'center' },
  idText: { color: palette.link, fontSize: 16, fontWeight: '700', marginBottom: 2 },
  date: { color: palette.sub, fontSize: 13 },

  // chevron: { ... } // Ya no se usa, usamos Ionicons directo en el componente

  emptyWrap: { marginTop: 64, alignItems: 'center', gap: 8 },
  emptyText: { color: palette.sub, fontSize: 14 },
});