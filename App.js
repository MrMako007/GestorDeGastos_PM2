import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Formulario from './src/components/Formulario';
import { styles } from './src/styles/globalStyles';

export default function App() {
  const [gastos, setGastos] = useState([]);

  const agregarGasto = (nuevoGastoData) => {
    const nuevoGasto = {
      id: Date.now().toString(),
      ...nuevoGastoData,
    };
    setGastos([...gastos, nuevoGasto]);
  };

  const eliminarGasto = (id) => {
    const gastosFiltrados = gastos.filter((gasto) => gasto.id !== id);
    setGastos(gastosFiltrados);
  };

  const totalGastado = gastos.reduce((acc, gasto) => acc + gasto.monto, 0);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Gestor de Gastos</Text>

      <View style={styles.cardResumen}>
        <Text style={styles.labelResumen}>Total Acumulado</Text>
        <Text style={styles.montoResumen}>${totalGastado.toLocaleString()}</Text>
      </View>

      <Formulario onAgregarGasto={agregarGasto} />

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