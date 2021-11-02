// @src/components/BottomSheet.jsx
import React from "react";
import { Dimensions, View, StyleSheet, Text, Button } from "react-native";
import { Portal } from "@gorhom/portal";
import { Modalize } from "react-native-modalize";

const { height } = Dimensions.get("screen");
const modalHeight = height * 0.5;

const BottomSheet = ({ modalRef, onClose }) => {
  return (
    <Portal>
      <Modalize ref={modalRef} modalHeight={modalHeight}>
        <View style={styles.content}>
          <Text style={styles.text}>Hello World</Text>
          <Button title="Close Modal" color="#F0F5F9" onPress={onClose} />
        </View>
      </Modalize>
    </Portal>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "space-between",
    height: modalHeight,
    paddingHorizontal: 20,
    paddingVertical: 32,
    backgroundColor: "#52616B",
  },
  text: {
    fontSize: 48,
    fontWeight: "600",
    letterSpacing: 48 * 0.02,
    alignSelf: "center",
    color: "#C9D6DF",
  },
});

import React, { useRef } from "react";
import { StyleSheet, Button, View } from "react-native";
import { PortalProvider } from "@gorhom/portal";

import BottomSheet from "./component/BottomSheet";

const App = () => {
  const modalRef = useRef(null);

  const onOpen = () => {
    modalRef.current?.open();
  };

  const onClose = () => {
    modalRef.current?.close();
  };

  return (
    <PortalProvider>
      <View style={styles.container}>
        <BottomSheet modalRef={modalRef} onClose={onClose} />
        <Button title="Open Modal" color="#1E2022" onPress={onOpen} />
      </View>
    </PortalProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C9D6DF",
    alignItems: "center",
    justifyContent: "center",
  },
});