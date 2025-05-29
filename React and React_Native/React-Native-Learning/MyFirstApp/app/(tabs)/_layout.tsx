import { Tabs } from "expo-router";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function TabsLayout() {
  return (
    <>
      <Tabs screenOptions={{
        tabBarActiveBackgroundColor: "#007bff", tabBarActiveTintColor: "#fff",
        headerTitleStyle: { color: "Black" },
      }}>
        <Tabs.Screen name="index" options={{
          title: "Home", headerTitleAlign: 'center',
          tabBarIcon: ({ focused }) => (
            <FontAwesome5 name="home" size={24}
              color={focused ? "white" : "black"} />
          )
        }} />

        <Tabs.Screen name="login" options={{
          title: "Login", headerTitleAlign: 'center',
          tabBarIcon: ({ focused }) => (
            <MaterialIcons name="login" size={24} color={focused ? "white" : "black"} />
          )
        }} />

        <Tabs.Screen name="signup" options={{
          title: "Signup", headerTitleAlign: 'center',
          tabBarIcon: ({ focused }) => (
            <Ionicons name="person-add-outline" size={24} color={focused ? "white" : "black"} />
          )
        }} />
      </Tabs>
    </>
  );
}
