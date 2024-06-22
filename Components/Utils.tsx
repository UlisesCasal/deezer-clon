import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, StyleSheet, Text } from 'react-native'; // Se agrega Text

interface TopAlbumsResponse {
    topalbums: {
      album: Album[];
    };
  }
  
  interface Album {
    name: string;
    image: string; // Se cambia a string en lugar de string[]
}
  

const ArtistAlbums: React.FC = () => {
    const [albumsData, setAlbumsData] = useState<Album[]>([]);
  
    useEffect(() => {
      fetch('https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=Gustavo Cerati&api_key=85b9bf8464d0a45af120b6917b3651a1&format=json')
        .then((response) => response.json())
        .then((data: TopAlbumsResponse) => {
          setAlbumsData(data.topalbums.album);
        })
        .catch((error) => console.error(error));
    }, []);
  
    const renderItem = ({ item }: { item: Album }) => (
      <View style={styles.albumItem}>
        <Image source={{ uri: item.image }} style={styles.albumImage} /> // Se elimina el índice [0]
        <Text>{item.name}</Text> // Se agrega para mostrar el nombre del álbum
      </View>
    );
  
    return (
      <FlatList
        data={albumsData}
        renderItem={renderItem}
        horizontal={true}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.listContainer}
      />
    );
  };
  
  const styles = StyleSheet.create({
    albumItem: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    },
    albumImage: {
      width: 50,
      height: 50,
      borderRadius: 10,
    },
    listContainer: {
      padding: 10,
    },
  });
  
  export default ArtistAlbums;


