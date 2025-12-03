import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F8', 
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 50,
    position: 'relative',
  },

  backButtonContainer: {
    position: 'absolute',
    left: 20,
    zIndex: 1,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },

  content: {
    padding: 20,
    flex: 1,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },

  label: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },

  detectedNumber: {
    fontSize: 48,
    fontWeight: '500',
    color: '#2F80ED',
    marginBottom: 5,
  },

  date: {
    fontSize: 14,
    color: '#aaa',
  },

  imageCard: {
    height: 300, 
    justifyContent: 'center',
    padding: 10, 
    backgroundColor: '#F5F5F5',
  },

  detectedImage: { 
    width: '100%',
    height: '100%',
    borderRadius: 15,
    resizeMode: 'contain',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  buttonPrimary: {
    backgroundColor: '#2979FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    flex: 0.48,
  },

  buttonDestructive: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E53935',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    flex: 0.48,
  },

  buttonTextPrimary: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  }, 

  buttonTextDestructive: {
    color: '#E53935',
    fontSize: 16,
    fontWeight: '600',
  },
});
