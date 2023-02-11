import React from "react";
import { View, Text} from "react-native"
import styles from "./style"

export default function DashBoard() {
    return (
        <View style={styles.boxTitle}>
            <Text>Frota Bruta</Text>
            <Text>DashBoard</Text>
        </View>
    );
}