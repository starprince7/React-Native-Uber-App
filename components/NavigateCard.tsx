import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from "@env"
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from "@expo/vector-icons"

const NavigateCard = () => {
    const navigation = useNavigation()

    return (
      <SafeAreaView style={tw`bg-white flex-1`}>            
        <Text style={tw`text-xl text-center p-5 text-gray-700 font-semibold`}>Good Morning Prince</Text>
        <View style={tw`border-t border-gray-200 flex-shrink`}>
            <View>
                <GooglePlacesAutocomplete
                    debounce={400}
                    placeholder='Where to?'
                    nearbyPlacesAPI="GooglePlacesSearch"
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: "en"
                    }}
                    enablePoweredByContainer={false}
                    styles={googlePlacesInput}
                />
                <TouchableOpacity onPress={() => navigation.navigate("RideOptionsCard")} style={tw`mt-40`}>
                    <View style={tw`p-5 bg-black mx-5  flex-row justify-center items-center rounded-full`}>
                        <AntDesign name="car" size={19} color="white" />
                        <Text style={[tw`text-white text-center text-lg font-semibold ml-2`,
                        { borderRadius: 10 }]}>
                            Get a Ride
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
      </SafeAreaView>
  )
}

export default NavigateCard


const googlePlacesInput = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0
    }
})