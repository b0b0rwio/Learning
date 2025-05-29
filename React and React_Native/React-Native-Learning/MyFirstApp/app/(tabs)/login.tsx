import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.title}>Login Page</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>

                <View style={styles.signupRedirect}>
                    <Link href="/signup" style={styles.linkText}>Doesn't have an account?</Link>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 16,
    },
    form: {
        borderColor: "#ccc",
        borderWidth: 1,
        width: '100%',
        maxWidth: 300,
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    loginButton: {
        backgroundColor: "#007bff",
        paddingVertical: 12,
        borderRadius: 5,
        alignItems: "center",
        justifyContent:"center",
        marginTop: 10,
    },
    loginButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    signupRedirect: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
    },
    linkText: {
        color: "#007bff",
        fontWeight: "bold",
    },
});
