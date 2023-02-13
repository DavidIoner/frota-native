import React from "react";
import { View, Text, FlatList, Image, TextInput } from "react-native"
import styles from "./styles"


// essa página está sendo criada com a intenção de move-la para uma nova tela no DashBoard

// View para a tabela com os veículos
// barra de pesquisa
// cada item é um botão que OnPress vai para os detalhes

// HARDCODE!!!
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      j: 'a'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      j: 'b'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      j: 'c'
    },
  ];

// cada View da lista 
const Item = ({title, j}) => (
    <View style={styles.boxListItem}>
       {/* <Image source={require('../assets/icon.png')}/> */}
        <Text style={styles.textItem}>{title}</Text>
        <Text style={styles.textSubItem}>{j}</Text>
    </View>
);

// View de toda a lista 
export default function Vehicles() {
    return (
        <View style={styles.boxList}>
          <View style={styles.boxSearch}>
            <TextInput 
            style={styles.search}
            placeholder="Pesquise o veículo"
            placeholderTextColor="#888"
            />
          </View>
            <FlatList
                data={DATA}
                renderItem={({item}) => <Item title={item.title} j={item.j} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
}