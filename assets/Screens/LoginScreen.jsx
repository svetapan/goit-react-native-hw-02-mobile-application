import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";

const LoginScreen = () => {
  const [focusedInput, setFocusedInput] = useState(null);

  const signIn = (e) => {
    e.preventDefault();
  };
  const showPassword = (e) => {
    e.preventDefault();
  };

  return (
    <ImageBackground
      source={require("../images/bg-app.jpg")}
      style={styles.page}
      imageStyle={{
        minHeight: 812,
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={styles.container}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.registrationTitle}>Увійти</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={[
              [styles.input],
              focusedInput === "email" && [styles.inputFocused],
            ]}
            placeholderTextColor={"#BDBDBD"}
            placeholder="Адреса електронної пошти"
            name="email"
            onFocus={() => setFocusedInput("email")}
            onBlur={() => setFocusedInput(null)}
          />
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={[
              [styles.input],
              focusedInput === "password" && [styles.inputFocused],
            ]}
            placeholderTextColor={"#BDBDBD"}
            secureTextEntry={true}
            placeholder="Пароль"
            name="password"
            onFocus={() => setFocusedInput("password")}
            onBlur={() => setFocusedInput(null)}
          />
          <TouchableOpacity style={styles.buttonShow} onPress={showPassword}>
            <Text style={styles.buttonShowText}>Показати</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.button} onPress={signIn}>
            <Text style={styles.buttonText}>Увійти</Text>
          </TouchableOpacity>
          <View style={styles.redirection}>
            <Text style={styles.redirectionText}>Немає акаунту?</Text>
            <TouchableOpacity>
              <Text style={styles.redirectionLink}>Зареєструватися</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    position: "relative",
    objectFit: "none",
  },
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingTop: 32,
    padding: 16,
    minHeight: 489,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  titleContainer: {
    marginBottom: 33,
  },
  registrationTitle: {
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    fontFamily: "Roboto-Medium",
  },
  formContainer: {
    position: "relative",
    marginBottom: 16,
  },
  input: {
    color: "#BDBDBD",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 6,
    padding: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  inputFocused: {
    borderColor: "#FF6C00",
    backgroundColor: "#fff",
    color: "#000",
  },
  button: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    width: "100%",
    padding: 16,
    marginTop: 27,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
  },
  buttonShowText: {
    fontSize: 16,
    color: "#1B4371",
  },
  buttonShow: {
    position: "absolute",
    top: "50%",
    right: 16,
    lineHeight: 24,
    marginTop: -12,
  },
  actions: {
    overflow: "hidden",
  },
  redirectionText: {
    fontSize: 16,
    color: "#1B4371",
  },
  redirectionLink: {
    fontSize: 16,
    color: "#1B4371",
    textDecorationLine: "underline",
  },
  redirection: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    marginRight: "auto",
    marginLeft: "auto",
    gap: 5,
  },
});
