import { Tabs } from "expo-router"
import Foundation from '@expo/vector-icons/Foundation'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Entypo from '@expo/vector-icons/Entypo'

export default function RootLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#ff7b00',
            tabBarInactiveTintColor: '#2b2b2bff',
            tabBarLabelStyle: { fontSize: 8 },
        }}
        >
            <Tabs.Screen 
                name="home"
                options={{ 
                    title: "Home",
                    //tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({color}) => <Foundation name="home" size={24} color={color} /> 
                }}
            />
            <Tabs.Screen 
                name="about"
                options={{ 
                    title: "Sobre",
                    headerShown: false,
                    //tabBarShowLabel: false, 
                    tabBarIcon: ({color}) => <FontAwesome5 name="house-user" size={20} color={color} />
                }}
            />
            <Tabs.Screen 
                name="contact"
                options={{ 
                    title: "Contato",
                    headerShown: false,
                    //tabBarShowLabel: false, 
                    tabBarIcon: ({color}) => <MaterialCommunityIcons name="contacts" size={24} color={color} />
                }}
            />
            <Tabs.Screen 
                name="profile"
                options={{ 
                    title: "perfil",
                    headerShown: false,
                    //tabBarShowLabel: false, 
                    tabBarIcon: ({color}) => <Entypo name="user" size={24} color={color} />
                }}
            />
        </Tabs>
    )
}
