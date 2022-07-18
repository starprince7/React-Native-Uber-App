import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import tw from "twrnc"
import { useNavigation } from '@react-navigation/native'

type RideOptionsProps = {
  id: string
  title: string
  multiplier: number
  image: string
}

const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn"
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8"
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf"
  },
]

const RideOptionsCard = () => {
  const [selected, setSelected] = useState<RideOptionsProps | null>(null)
  const navigation = useNavigation()
  
  return (
    <SafeAreaView style={tw`bg-white p-5 flex-1`}>
      <TouchableOpacity onPress={() => navigation.navigate("NavigateCard")} style={tw`absolute left-5 z-50 top-5`}>
        <FontAwesome name="chevron-left" size={20} />
      </TouchableOpacity>
      <View style={tw`p-4`}>
        <Text style={tw`text-center`}>Select a Ride</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item: { id, title, image, multiplier }, item }) => (
          <TouchableOpacity onPress={() => setSelected(item)}
            style={tw`flex-row items-center justify-between px-9 ${id === selected?.id && "bg-gray-200"}`}>
            <View>
              <Image
                source={{
                  uri: image
                }}
                style={{
                  width: 90,
                  height: 90,
                  resizeMode: "contain"
                }}
              />
            </View>
            <View style={tw`-ml-2`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>Calculating time...</Text>
            </View>
            <View><Text style={tw`text-lg`}>$0.00</Text></View>
          </TouchableOpacity>
        )}
      />
      <View>
        <TouchableOpacity disabled={!selected} style={tw`${!selected ? "bg-gray-300" : "bg-black"} p-5 mx-3 mt-4`}>
          <Text style={tw`text-white text-center text-lg font-semibold`}>Choose { selected?.title }</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard