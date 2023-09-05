import { StatusBar } from "expo-status-bar";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../AppStyles";
import { useProduct } from "../../context/ProductContext";

const data = [
    {
      title: "First",
      doors : [
        { name: 'Door 1', image: require('../../assets/PM-1007.jpg') },
        { name: 'Door 2', image: require('../../assets/PM-1007.jpg') },
        { name: 'Door 3', image: require('../../assets/PM-1007.jpg') },
        { name: 'Door 10', image: require('../../assets/PM-1007.jpg') },
        { name: 'Door 11', image: require('../../assets/PM-1007.jpg') },
        { name: 'Door 12', image: require('../../assets/PM-1007.jpg') },
      ]
    },
    {
      title: "Second",
      doors : [
        { name: 'Door 4', image: require('../../assets/PM-1007.jpg') },
        { name: 'Door 5', image: require('../../assets/PM-1007.jpg') },
        { name: 'Door 6', image: require('../../assets/PM-1007.jpg') },
      ]
    },
    {
      title: "Third",
      doors : [
        { name: 'Door 7', image: require('../../assets/PM-1007.jpg') },
        { name: 'Door 8', image: require('../../assets/PM-1007.jpg') },
        { name: 'Door 9', image: require('../../assets/PM-1007.jpg') },
      ]
    }
  ];
  

const WoodenScreen = () => {
  const  {productState: {wooden} } = useProduct();
    return (
      <View style={styles.container}>
          <SafeAreaView style={styles.container}>
          <ScrollView>
          {wooden.map(section => {
            return (
              <View key={section.categoryName}>
                <View style={styles.header}>
                  <View style={styles.line} />
                  <Text style={styles.title}>{section.categoryName}</Text>
                  <View style={styles.line} />
                </View>
                  <FlatList
                    data={section.doors}
                    renderItem={({ item }) => (
                      <View style={styles.item} key={item.name}>
                        <Image source={{uri : item.imageSource}} style={styles.image} />
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

  export default WoodenScreen