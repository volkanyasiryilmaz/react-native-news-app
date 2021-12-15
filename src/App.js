import React from 'react';
import { StyleSheet,   SafeAreaView, FlatList, ScrollView, Dimensions, Image, Text} from 'react-native';
import NewsCard from './components/NewsCard';
import news_data from './news_data.json'
import Banner from './components/Banner/Banner';

export default function App() {
  const renderNews= ({item})=> <NewsCard  news={item}/>

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>NEWS</Text>
        <FlatList 
          ListHeaderComponent={() => (
          <Banner/>
          )} 
          keyExtractor={(item)=> item.u_id.toString()}
          data={news_data}
          renderItem={renderNews}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
});
