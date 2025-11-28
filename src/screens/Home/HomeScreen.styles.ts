import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F8FF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  logoContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#3B82F6',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    shadowColor: '#3B82F6',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },

  logoText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 40,
    maxWidth: '80%',
  },

  button: {
    width: '100%',
    height: 56,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4
  },

  buttonCamera: {
    backgroundColor: '#2563EB'
  },

  buttonGallery: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 12,
  },

  buttonTextCamera: {
    color: '#fff',
  },

  buttonTextGallery: {
    color: '#374151',
  },

  history: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },

  historyText: {
    color: '#6B7280',
    fontSize: 14,
    marginLeft: 8,
  },
});
