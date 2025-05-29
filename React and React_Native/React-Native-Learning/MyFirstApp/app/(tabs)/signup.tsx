// SignupScreen.js
import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";


export default function SignupScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = () => {
        if (!email || !password || !confirmPassword) {
            setError("All fields are required.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Invalid email format.");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setError("");

        if (!error) {
            console.log("Signup successful");
            console.log("Email:", email);
            console.log("Password:", password);
        }
    };


    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.title}>Signup Page</Text>
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
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
                <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
                    <Text style={styles.signupButtonText}>Signup</Text>
                </TouchableOpacity>

                <View style={styles.loginRedirect}>
                    <Link href="/login" style={styles.linkText}>Already have an account?</Link>
                </View>
                {error ? <Text style={styles.errorText}>{error}</Text> : null}
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
    signupButton: {
        backgroundColor: "#007bff",
        paddingVertical: 12,
        borderRadius: 5,
        alignItems: "center",
        marginTop: 10,
    },
    signupButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    loginRedirect: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
    },
    linkText: {
        color: "#007bff",
        fontWeight: "bold",
    },
    errorText: {
        color: "red",
        marginBottom: 10,
        textAlign: "center",
    },
});
