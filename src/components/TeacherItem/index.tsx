import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteButton from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

interface TeacherItemProps {
  title?: string;
}

const TeacherItem: React.FC<TeacherItemProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://www.w3schools.com/howto/img_avatar2.png",
          }}
        />
        <View style={styles.infos}>
          <Text style={styles.name}>Rafael Moreira</Text>
          <Text style={styles.subject}>Química</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt.
        
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/Hora {"   "}
          <Text style={styles.priceValue}>R$ 120</Text>
        </Text>
        <View style={styles.buttonsContainer}>
            <RectButton style={[styles.favoriteButton, styles.favorite]}>
              <Image source={unfavoriteButton}/>
            </RectButton>
            <RectButton style={styles.whatsappButton}>
              <Image source={whatsappIcon}/>
              <Text style={styles.buttonText}>Entrar em Contato</Text>
            </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
