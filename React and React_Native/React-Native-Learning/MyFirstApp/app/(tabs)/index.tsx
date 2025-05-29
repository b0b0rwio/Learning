import { Text, View, StyleSheet, Pressable } from "react-native";
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.view}>
      <Text>Welcome to MyApp!</Text>

      <Pressable style={styles.link} onPress={() => router.push('/login')}>
        <Text style={styles.linkText}>Login Page</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    width: 120,
    height: 40,
    backgroundColor: "#007bff",
    borderRadius: 25,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  linkText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  }
});