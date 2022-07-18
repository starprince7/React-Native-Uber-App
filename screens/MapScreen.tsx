import { Text, View, TouchableWithoutFeedback, TouchableOpacity, Keyboard } from "react-native"
import Map from "../components/Map"
import tw from "twrnc"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import NavigateCard from "../components/NavigateCard"
import RideOptionsCard from "../components/RideOptionsCard"
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from "@expo/vector-icons"

export const MapScreen = () => {
    const Stack = createNativeStackNavigator()
    const navigation = useNavigation()

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View>
                <View style={tw`h-1/2 bg-red-700`}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={tw`rounded-full p-2 absolute left-4 top-14 z-5 shadow-lg bg-gray-100`}>
                        <AntDesign
                        name="arrowleft"
                        size={30}
                        />
                    </TouchableOpacity>
                    <Map />
                </View>
                <View style={tw`h-1/2 bg-green-700 rounded-t-lg`}>
                    <Stack.Navigator>
                        <Stack.Screen
                            name="NavigateCard"
                            component={NavigateCard}
                            options={{
                                headerShown: false
                            }}
                        />
                        <Stack.Screen
                            name="RideOptionsCard"
                            component={RideOptionsCard}
                            options={{
                                headerShown: false
                            }}
                        />
                    </Stack.Navigator>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}