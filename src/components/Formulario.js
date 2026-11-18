import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function Formulario({ onAgregarGasto }) {
  const [descripcion, setDescripcion] = useState('');
  const [monto, setMonto] = useState('');
  const [categoria, setCategoria] = useState('Alimentación');

  const categoriasDisponibles = ['Alimentación', 'Transporte', 'Entretenimiento', 'Salud', 'Otros'];

  const manejarEnvio = () => {
    if (!descripcion.trim() || !monto.trim()) {
      alert('Por favor, completa la descripción y el monto.');
      return;
    }

    onAgregarGasto({
      descripcion,
      monto: parseFloat(monto),
      categoria,
    });

    setDescripcion('');
    setMonto('');
  };

  return (
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

      <TouchableOpacity style={styles.btnAgregar} onPress={manejarEnvio}>
        <Text style={styles.txtBtnAgregar}>Registrar Gasto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
});