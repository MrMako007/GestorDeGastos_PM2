import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  const [gastos, setGastos] = useState([]);
  const [descripcion, setDescripcion] = useState('');
  const [monto, setMonto] = useState('');
  const [categoria, setCategoria] = useState('Alimentación');

  const categoriasDisponibles = ['Alimentación', 'Transporte', 'Entretenimiento', 'Salud', 'Otros'];

  const agregarGasto = () => {
    if (!descripcion.trim() || !monto.trim()) {
      alert('Por favor, completa la descripción y el monto.');
      return;
    }

    const nuevoGasto = {
      id: Date.now().toString(),
      descripcion: descripcion,
      monto: parseFloat(monto),
      categoria: categoria,
    };

    setGastos([...gastos, nuevoGasto]);
    setDescripcion('');
    setMonto('');
  };

  const eliminarGasto = (id) => {
    const gastosFiltrados = gastos.filter((gasto) => gasto.id !== id);
    setGastos(gastosFiltrados);
  };

  const totalGastado = gastos.reduce((acc, gasto) => acc + gasto.monto, 0);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Gestor de Gastos</Text>

      {/* Panel de Resumen del Total */}
      <View style={styles.cardResumen}>
        <Text style={styles.labelResumen}>Total Acumulado</Text>
        <Text style={styles.montoResumen}>${totalGastado.toLocaleString()}</Text>
      </View>

      {/* Formulario de Carga */}
      <View style={styles.formulario}>
        <Text style={styles.subtitulo}>Nuevo Registro</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Descripción (ej. Supermercado)"
          placeholderTextColor="#94a3b8"
          value={descripcion}
          onChangeText={setDescripcion}
        />

        <TextInput
          style={styles.input}
          placeholder="Monto ($)"
          placeholderTextColor="#94a3b8"
          keyboardType="numeric"
          value={monto}
          onChangeText={setMonto}
        />

        <Text style={styles.labelCategoria}>Categoría:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.contenedorCategorias}>
          {categoriasDisponibles.map((cat) => (
            <TouchableOpacity
              key={cat}
              style={[styles.btnCategoria, categoria === cat && styles.btnCategoriaActiva]}
              onPress={() => setCategoria(cat)}
            >
              <Text style={[styles.txtCategoria, categoria === cat && styles.txtCategoriaActiva]}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <TouchableOpacity style={styles.btnAgregar} onPress={agregarGasto}>
          <Text style={styles.txtBtnAgregar}>Registrar Gasto</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de Gastos Registrados */}
      <View style={styles.seccionLista}>
        <Text style={styles.subtitulo}>Historial ({gastos.length})</Text>
        
        {gastos.length === 0 ? (
          <Text style={styles.vacio}>No hay gastos registrados todavía.</Text>
        ) : (
          gastos.map((gasto) => (
            <View key={gasto.id} style={styles.itemGasto}>
              <View style={styles.infoGasto}>
                <Text style={styles.itemDesc}>{gasto.descripcion}</Text>
                <Text style={styles.itemCat}>{gasto.categoria}</Text>
              </View>
              <View style={styles.contenedorMontoEliminar}>
                <Text style={styles.itemMonto}>${gasto.monto.toLocaleString()}</Text>
                <TouchableOpacity onPress={() => eliminarGasto(gasto.id)}>
                  <Text style={styles.btnEliminar}>✕</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
}

// Estilos
const styles = StyleSheet.create({
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: { ios: 0.05, android: 0.1 },
    shadowRadius: 4,
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
  formulario: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 14,
    color: '#334155',
  },
  input: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 6,
    padding: 12,
    fontSize: 15,
    marginBottom: 12,
    backgroundColor: '#f8fafc',
    color: '#0f172a',
  },
  labelCategoria: {
    fontSize: 13,
    color: '#64748b',
    marginBottom: 8,
    fontWeight: '500',
  },
  contenedorCategorias: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  btnCategoria: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    marginRight: 8,
    backgroundColor: '#f8fafc',
  },
  btnCategoriaActiva: {
    backgroundColor: '#334155',
    borderColor: '#334155',
  },
  txtCategoria: {
    color: '#64748b',
    fontSize: 13,
    fontWeight: '500',
  },
  txtCategoriaActiva: {
    color: '#ffffff',
  },
  btnAgregar: {
    backgroundColor: '#2563eb',
    borderRadius: 6,
    padding: 12,
    alignItems: 'center',
  },
  txtBtnAgregar: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
  seccionLista: {
    marginTop: 4,
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