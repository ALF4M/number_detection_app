import { StyleSheet } from 'react-native';

const palette = {
  bg: '#F5F7FB',
  card: '#FFFFFF',
  text: '#0F172A',
  sub: '#64748B',
  border: '#E6ECF4',
  link: '#3B82F6',
  chevron: '#CBD5E1',
  thumbBg: '#EEF2F8',
  thumbIcon: '#94A3B8'
};

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: palette.bg,
  },

  list: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 24,
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.card,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    padding: 12,
    marginBottom: 12,
  },

  thumbBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: palette.thumbBg,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginRight: 14,
  },

  thumb: {
    width: '100%',
    height: '100%',
  },

  meta: {
    flex: 1,
    justifyContent: 'center',
  },

  idText: {
    color: palette.link,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 2,
  },

  date: {
    color: palette.sub,
    fontSize: 13,
  },
});