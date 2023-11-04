import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignupScreen(){
    const navigation = useNavigation();
    return(
    <View className="bg-white h-full w-full">
        <StatusBar style='light'/>
        <Image className="h-full w-full absolute" source={require('../assets/images/background.png')}/>

        {/* logo */}
        <View className="flex-row justify-around w-full absolute pt-20">
            <Image source={require('../assets/images/justgo.png')} style={{width:300, height:300}}/>
        </View>

        <View className="h-full w-full flex justify-around pt-60">
            {/* form */}
            <View className="flex items-center mx-4 space-y-4">
                <View className="bg-white/100 p-5 rounded-2xl w-full">
                    <TextInput placeholder='Email' placeholderTextColor={'maroon'}/>
                </View>
                <View className="bg-white/100 p-5 rounded-2xl w-full">
                    <TextInput placeholder='Username' placeholderTextColor={'maroon'}/>
                </View>
                <View className="bg-white/100 p-5 rounded-2xl w-full" mb-3>
                    <TextInput placeholder='Password' placeholderTextColor={'maroon'} secureTextEntry/>
                </View>
                <View className="w-full">
                    <TouchableOpacity
                        className="w-full bg-red-800 p-3 rounded-2xl mb-3">
                            <Text className="font-semibold text-lg text-white text-center">Signup</Text>
                        </TouchableOpacity>
                </View>
                <View className="flex-row justify-center">
                    <Text>Already have an account?</Text>
                    <TouchableOpacity onPress={()=> navigation.push('Login')}>
                        <Text className="text-white"> Login </Text>
                    </TouchableOpacity>
                    <Text>now!</Text>
                </View>
            </View>
        </View>
    </View>
    )
}