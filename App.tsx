import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ArtistAlbums from './Components/Utils';


export default function App() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0f0d13',
      flexDirection: 'column'
    },
    titulo: { 
      fontFamily: '',
      fontWeight: '700',
      fontSize: 40,
      color: "#FFFFFF",
      paddingTop: 20,
      marginLeft: 15
    },
    subtitulo: {
      color: "#FFFFFF",
      paddingTop: 30,
      marginLeft: 15,
      fontSize: 20,
      fontWeight: '700'
    },
    carrusel: {
    }
  });

  return (
    
    <View style={styles.container}>
      <AppBar/>  
      <Text style={styles.titulo}>Inicio</Text>
      <Text style={styles.subtitulo}>Continúa escuchando</Text>
      <ArtistAlbums/>
      <StatusBar style="auto" />
    </View>
  );
}


/* COMPONENTE DE BARRA SUPERIOR*/
export function AppBar() {
  const styles = StyleSheet.create({
    appbar: {
      marginTop: 40,
      top: 0,
      width: '100%',
      height: 50,
      backgroundColor: '#0f0d13',
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    },
    botones: {
      justifyContent: 'flex-end', // Se cambió de 'space-between' a 'flex-end'
      paddingLeft: 25,
      paddingEnd: 10

    }
  });
  return (
    <View style={styles.appbar}>
      <TouchableOpacity style={styles.botones} onPress={() => console.log('Botón de icono presionado')}>
        <Icon name="bell-o" size={27} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.botones} onPress={() => console.log('Botón de icono presionado')}>
        <Icon name="user" size={27} color="white" />
      </TouchableOpacity>
    </View>
  );
}
