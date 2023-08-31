import { StatusBar } from "expo-status-bar";
import { Button, View } from "react-native";
import { styles } from "../../AppStyles";

const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
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

  export default HomeScreen