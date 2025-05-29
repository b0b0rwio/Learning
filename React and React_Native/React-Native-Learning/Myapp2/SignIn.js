// SignIn.js
import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Alert,
} from "react-native";
import { ActivityIndicator } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const { width } = Dimensions.get("window");

const SignInScreen = ({ navigation }) => {
    const [redirectMessage, setRedirectMessage] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [inputErrors, setInputErrors] = useState("");

    useEffect(() => {
        setErrorMessage("");
        setInputErrors("");
        setRedirectMessage("");
    }, []);

    const handleSignIn = async () => {
        setRedirectMessage("");
        setErrorMessage("");
        setInputErrors("");
        setIsLoading(true);

        if (!username.trim()) {
            setInputErrors("Username cannot be empty.");
            setIsLoading(false);
            return;
        }
        if (password === undefined || password.length < 6) {
            setInputErrors("Password should have at least 6 characters.");
            setIsLoading(false);
            return;
        }

        try {
            console.log("Attempting sign in with:", username, password);
            await new Promise((resolve) => setTimeout(resolve, 2000));

            if (username === "admin" && password === "pretty") {
                console.log("Login successful!");
                navigation.navigate('Home'); // Navigate to Home screen on success
            } else {
                setErrorMessage("Invalid username or password.");
            }
        } catch (error) {
            console.error("Login error:", error);
            setErrorMessage("An unexpected error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleSignUp = () => {
        Alert.alert("Sign Up", "Sign Up functionality not implemented yet.");
    };

    const handleForgotPassword = () => {
        Alert.alert("Forgot Password", "Forgot Password functionality not implemented yet.");
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.cardTitlePrettyKids}>Pretty Kids</Text>
                <Text style={styles.cardTitleSignIn}>Sign In</Text>

                {errorMessage ? (
                    <View style={[styles.messageContainer, styles.errorBackground]}>
                        <Text style={styles.errorText}>{errorMessage}</Text>
                    </View>
                ) : null}

                {inputErrors ? (
                    <View style={[styles.messageContainer, styles.errorBackground]}>
                        <Text style={styles.errorText}>{inputErrors}</Text>
                    </View>
                ) : null}

                {redirectMessage ? (
                    <View style={[styles.messageContainer, styles.successBackground]}>
                        <Text style={styles.successText}>{redirectMessage}</Text>
                    </View>
                ) : null}

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>
                        Phone Number or Username <Text style={styles.required}>*</Text>
                    </Text>
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.input}
                        placeholder="phonenumber"
                        placeholderTextColor="#888"
                        value={username}
                        onChangeText={setUsername}
                        maxLength={40}
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>
                        Password <Text style={styles.required}>*</Text>
                    </Text>
                    <View style={styles.passwordInputWrapper}>
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.passwordInput}
                            placeholder="Password"
                            placeholderTextColor="#888"
                            onChangeText={setPassword}
                            secureTextEntry={!showPassword}
                            maxLength={30}
                            onSubmitEditing={handleSignIn}
                        />
                        <TouchableOpacity
                            onPress={() => setShowPassword((prev) => !prev)}
                            style={styles.eyeIconContainer}
                        >
                            <Icon
                                name={showPassword ? "eye" : "eye-slash"}
                                size={20}
                                color="gray"
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.signInButton}
                    onPress={handleSignIn}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <ActivityIndicator size="small" color="#ffffff" />
                    ) : (
                        <Text style={styles.buttonText}>Sign In</Text>
                    )}
                </TouchableOpacity>

                <View style={styles.bottomLinks}>
                    <Text style={styles.linkText}>
                        Forgot Password?{" "}
                        <Text style={styles.linkClickable} onPress={handleForgotPassword}>
                            Click here
                        </Text>
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#fff",
    },
    card: {
        width: "100%",
        maxWidth: 500,
        backgroundColor: "#f1f4f6",
        borderRadius: 10,
        padding: 25,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    cardTitlePrettyKids: {
        fontSize: 28,
        textAlign: "center",
        marginBottom: 10,
        color: "#0067a8",
        fontFamily: "System",
    },
    cardTitleSignIn: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 20,
        color: "black",
    },
    messageContainer: {
        padding: 10,
        borderRadius: 5,
        marginBottom: 15,
    },
    errorBackground: {
        backgroundColor: "#ffe0b2",
        borderColor: "#ff9800",
        borderWidth: 1,
    },
    successBackground: {
        backgroundColor: "#d4edda",
        borderColor: "#28a745",
        borderWidth: 1,
    },
    errorText: {
        color: "#d32f2f",
        textAlign: "center",
        fontSize: 14,
    },
    successText: {
        color: "#155724",
        textAlign: "center",
        fontSize: 14,
    },
    inputGroup: {
        marginBottom: 15,
    },
    label: {
        fontSize: 14,
        marginBottom: 5,
        color: "#1a4b66",
        fontWeight: "600",
    },
    required: {
        color: "red",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 12,
        fontSize: 16,
        backgroundColor: "#fff",
    },
    passwordInputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        backgroundColor: "#fff",
    },
    passwordInput: {
        flex: 1,
        padding: 12,
        fontSize: 16,
    },
    eyeIconContainer: {
        paddingHorizontal: 10,
    },
    signInButton: {
        backgroundColor: "#0067a0",
        padding: 15,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    bottomLinks: {
        alignItems: "center",
        marginTop: 20,
    },
    linkText: {
        fontSize: 14,
        color: "#555",
    },
    linkClickable: {
        color: "#007bff",
        fontWeight: "bold",
    },
});

export default SignInScreen;