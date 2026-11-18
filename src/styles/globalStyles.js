import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8fafc',
    padding: 24,
    maxWidth: 600,
    alignSelf: 'center',
    width: '100%',
  },
  titulo: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    color: '#0f172a',
    letterSpacing: 0.5,
  },
  cardResumen: {
    backgroundColor: '#1e293b',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginBottom: 24,
    elevation: 2,
  },
  labelResumen: {
    color: '#94a3b8',
    fontSize: 13,
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontWeight: '500',
  },
  montoResumen: {
    color: '#f8fafc',
    fontSize: 30,
    fontWeight: '700',
    marginTop: 6,
  },
  seccionLista: {
    marginTop: 4,
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 14,
    color: '#334155',
  },
  vacio: {
    textAlign: 'center',
    color: '#94a3b8',
    fontStyle: 'italic',
    marginTop: 12,
    fontSize: 14,
  },
  itemGasto: {
    backgroundColor: '#ffffff',
    borderRadius: 6,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  infoGasto: {
    flex: 1,
  },
  itemDesc: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1e293b',
  },
  itemCat: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 2,
  },
  contenedorMontoEliminar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemMonto: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0f172a',
    marginRight: 16,
  },
  btnEliminar: {
    fontSize: 14,
    color: '#94a3b8',
    fontWeight: 'bold',
  },
});