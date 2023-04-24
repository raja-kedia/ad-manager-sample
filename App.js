import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { GAMNudge } from "react-native-ad-manager";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.adContainer}>
        <GAMNudge
          adProperties={{
            adIdentity: "MATCH_INFO",
          }}
          containerSize={`${Dimensions.get("window").width - 32}x70`}
          gamContainerStyle={styles.adBox}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  adContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 90,
  },
  adBox: {
    marginTop: 10,
  },
});
