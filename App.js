import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View, Image, FlatList, ScrollView, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const data = [
  {
    title: "First",
    doors : [
      { name: 'Door 1', image: require('./assets/PM-1007.jpg') },
      { name: 'Door 2', image: require('./assets/PM-1007.jpg') },
      { name: 'Door 3', image: require('./assets/PM-1007.jpg') },
      { name: 'Door 10', image: require('./assets/PM-1007.jpg') },
      { name: 'Door 11', image: require('./assets/PM-1007.jpg') },
      { name: 'Door 12', image: require('./assets/PM-1007.jpg') },
    ]
  },
  {
    title: "Second",
    doors : [
      { name: 'Door 4', image: require('./assets/PM-1007.jpg') },
      { name: 'Door 5', image: require('./assets/PM-1007.jpg') },
      { name: 'Door 6', image: require('./assets/PM-1007.jpg') },
    ]
  },
  {
    title: "Third",
    doors : [
      { name: 'Door 7', image: require('./assets/PM-1007.jpg') },
      { name: 'Door 8', image: require('./assets/PM-1007.jpg') },
      { name: 'Door 9', image: require('./assets/PM-1007.jpg') },
    ]
  }
];

function HomeScreen({ navigation }){
  return (
    <View style={styles.container}>
      <Text>In@Door</Text>
      <Button
        title="Go to Laminates"
        onPress={() => navigation.navigate('Laminates')}
      />
      <Button
        title="Go to Wooden"
        onPress={() => navigation.navigate('Wooden')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

function LaminateScreen() {
  return (
    <View style={styles.container}>
        <SafeAreaView style={styles.container}>
        <ScrollView>
        {data.map(section => {
          return (
            <View key={section.title}>
              <View style={styles.header}>
                <View style={styles.line} />
                <Text style={styles.title}>{section.title}</Text>
                <View style={styles.line} />
              </View>
                <FlatList
                  data={section.doors}
                  renderItem={({ item }) => (
                    <View style={styles.item} key={item.name}>
                      <Image source={item.image} style={styles.image} />
                      <Text style={styles.text}>{item.name}</Text>
                    </View>
                  )}
                  keyExtractor={(item) => item.name}
                  horizontal={true}
                />
            </View>
          )
        })}
        </ScrollView>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

function WoodenScreen() {
  return (
    <View style={styles.container}>
        <SafeAreaView style={styles.container}>
        <ScrollView>
        {data.map(section => {
          return (
            <View key={section.title}>
              <View style={styles.header}>
                <View style={styles.line} />
                <Text style={styles.title}>{section.title}</Text>
                <View style={styles.line} />
              </View>
                <FlatList
                  data={section.doors}
                  renderItem={({ item }) => (
                    <View style={styles.item} key={item.name}>
                      <Image source={item.image} style={styles.image} />
                      <Text style={styles.text}>{item.name}</Text>
                    </View>
                  )}
                  keyExtractor={(item) => item.name}
                  horizontal={true}
                />
            </View>
          )
        })}
        </ScrollView>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FF7F50',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
          <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Laminates" component={LaminateScreen} />
        <Stack.Screen name="Wooden" component={WoodenScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    flex:1,
    justifyContent:"space-evenly",
    backgroundColor: '#fff',
  },
  item: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:"flex-start",
    margin: 10,
  },
  image: {
    width:  100,
    height: 250,
    resizeMode: "contain"
  },
  text: {
    fontSize: 18,
  },
  header: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  title: {
   
    fontSize: 24,
    textAlign: "center"
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#000",
  },
});
