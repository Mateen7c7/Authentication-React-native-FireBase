import axios from "axios";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAuthContext } from "../store/auth-context";

function WelcomeScreen() {
  const [data, setData] = useState("");
  const authCtx = useAuthContext();
  useEffect(() => {
    axios
      .get(
        `https://auth-c6224-default-rtdb.firebaseio.com/expenses/message.json?auth=${authCtx.token}`
      )
      .then((response) => {
        setData(response.data);
      });
  }, []);
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{data}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
