import { useNavigation } from '@react-navigation/native';
import { Pressable, Text, View } from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        onPress={() => {
          navigation.navigate('Details');
        }}
      >
        <Text>HomeScreen1 </Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
