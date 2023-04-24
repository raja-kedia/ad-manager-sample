import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { GAMNudge } from "react-native-ad-manager";

// /22693816480/fancode-sample

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Ad</Text>
      <View style={styles.adContainer}>
        <GAMNudge
          adProperties={{
            adIdentity: "SAMPLE_BANNER",
          }}
          containerSize={`${Dimensions.get("window").width - 32}x300`}
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
    height: 300,
  },
  adBox: {
    marginTop: 10,
  },
});
