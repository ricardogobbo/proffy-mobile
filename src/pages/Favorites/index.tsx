import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import PageHeader from "../../components/PageHeader";
import { ScrollView } from "react-native-gesture-handler";
import TeacherItem from "../../components/TeacherItem";

function Favorites() {
  return (
    <View>
      <PageHeader title="Meus Proffys Favoritos" />
      <ScrollView style={styles.teachers}>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
}

export default Favorites;
