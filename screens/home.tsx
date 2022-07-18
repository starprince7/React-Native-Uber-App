import { SafeAreaView, View, Text, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { NavigationOptions } from "../components/NavOptions"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import { GOOGLE_MAPS_APIKEY } from "@env"
import tw from "twrnc"

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`h-full`}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={tw`px-5 py-2`}>
                    <Image
                        style={{
                            width: 100,
                            height: 100,
                            resizeMode: 'contain',
                        }}
                        source={{
                            uri: "https://links.papareact.com/gzs"
                        }}
                    />
                    <GooglePlacesAutocomplete
                        debounce={400}
                        placeholder='Where from?'
                        nearbyPlacesAPI="GooglePlacesSearch"
                        query={{
                            key: GOOGLE_MAPS_APIKEY,
                            language: "en"
                        }}
                    />
                    <NavigationOptions />
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

export default HomeScreen