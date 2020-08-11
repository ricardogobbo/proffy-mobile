import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import { ScrollView } from "react-native-gesture-handler";

function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader title="Proffys Disponíveis" />
      <ScrollView style={styles.teachers}>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
}

export default TeacherList;
