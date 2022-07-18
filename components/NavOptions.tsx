import { Text, View, FlatList, Image, TouchableOpacity } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import tw from "twrnc"
import { useNavigation } from "@react-navigation/native"

const data = [
    {
        id: 1,
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "Map_Screen"
    },
    {
        id: 2,
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "Eats_Screen"
    },
]

export const NavigationOptions = () => {
    const navigation = useNavigation()

    return (
        <View style={tw`my-14`}>
            <FlatList
                data={data}
                horizontal
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item: { screen }, item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate(screen)}>
                        <View style={tw`bg-gray-200 p-3 m-2`}>
                            <Image
                                style={{
                                    resizeMode: "contain",
                                    width: 120,
                                    height: 120
                                }}
                                source={{
                                    uri: item.image
                                }}
                            />
                            <Text style={tw`text-lg my-3 font-semibold`}>{item.title}</Text>
                            <AntDesign name="rightcircle" size={30} />
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}