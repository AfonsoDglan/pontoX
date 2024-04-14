import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const MenuAberto = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.menuAberto}>
      <View style={styles.background} />
      <View style={[styles.menuInferior, styles.menuLayout]}>
        <View style={[styles.menuInferiorChild, styles.childPosition]} />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={[styles.clipboardListIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/clipboardlist.png")}
        />
        <Image
          style={[styles.userAltIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/useralt.png")}
        />
        <Text style={[styles.incio, styles.incioTypo]}>Início</Text>
        <Text style={[styles.solicitaes, styles.incioTypo]}>Solicitações</Text>
        <Text style={[styles.perfil, styles.incioTypo]}>Perfil</Text>
      </View>

      <Pressable
        style={styles.sair}
        onPress={() => navigation.navigate("TelaInicial")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/sair.png")}
        />
      </Pressable>
      <View style={[styles.configuraes, styles.configuraesLayout]}>
        <Image
          style={[styles.configuraesChild, styles.configuraesLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-4.png")}
        />
        <Text style={[styles.configuraes1, styles.textPosition]}>
          Configurações
        </Text>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </View>
      <View style={[styles.logout, styles.configuraesLayout]}>
        <Image
          style={[styles.configuraesChild, styles.configuraesLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-4.png")}
        />
        <Text style={[styles.sairDaConta, styles.incioTypo]}>
          Sair da Conta
        </Text>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </View>
      <Image
        style={[styles.contatosIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/contatos.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  menuLayout: {
    height: 73,
    width: 360,
    position: "absolute",
  },
  childPosition: {
    top: 0,
    left: 0,
  },
  iconLayout: {
    height: 25,
    position: "absolute",
  },
  incioTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  notificaesPosition: {
    height: 46,
    top: 0,
    width: 360,
    left: 0,
    position: "absolute",
  },
  iconPosition: {
    top: 13,
    height: 25,
    width: 25,
    position: "absolute",
    overflow: "hidden",
  },
  textPosition: {
    top: 19,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  configuraesLayout: {
    height: 55,
    width: 281,
    position: "absolute",
  },
  vectorIconPosition: {
    left: "80.43%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  background: {
    top: 46,
    height: 683,
    width: 360,
    backgroundColor: Color.colorGainsboro,
    left: 0,
    position: "absolute",
  },
  menuInferiorChild: {
    height: 73,
    width: 360,
    position: "absolute",
    backgroundColor: Color.colorGainsboro,
  },
  vectorIcon: {
    height: "26.58%",
    width: "6.94%",
    top: "30.14%",
    right: "84.44%",
    bottom: "43.29%",
    left: "8.61%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  clipboardListIcon: {
    left: 167,
    width: 25,
    top: 22,
    height: 25,
    overflow: "hidden",
  },
  userAltIcon: {
    left: 306,
    width: 25,
    top: 22,
    height: 25,
    overflow: "hidden",
  },
  incio: {
    left: 28,
    top: 50,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
  },
  solicitaes: {
    left: 143,
    top: 50,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
  },
  perfil: {
    left: 304,
    top: 50,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
  },
  menuInferior: {
    top: 727,
    left: 0,
    height: 73,
  },
  notificaesChild: {
    backgroundColor: Color.colorGainsboro,
  },
  batteryThreeQuartersIcon: {
    left: 306,
  },
  text: {
    left: 22,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
  },
  wifiIcon: {
    left: 274,
  },
  signalIcon: {
    left: 239,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  sair: {
    left: 15,
    top: 55,
    width: 54,
    height: 54,
    position: "absolute",
  },
  configuraesChild: {
    borderRadius: Border.br_xl,
    top: 0,
    left: 0,
  },
  configuraes1: {
    left: 23,
    fontFamily: FontFamily.poppinsRegular,
    top: 19,
  },
  vectorIcon1: {
    height: "44%",
    width: "8.26%",
    top: "29.09%",
    right: "11.32%",
    bottom: "26.91%",
  },
  configuraes: {
    top: 118,
    left: 38,
    width: 281,
  },
  sairDaConta: {
    top: 21,
    left: 24,
  },
  vectorIcon2: {
    height: "34.18%",
    width: "8.75%",
    top: "36.36%",
    right: "10.82%",
    bottom: "29.45%",
  },
  logout: {
    top: 199,
    left: 38,
    width: 281,
  },
  contatosIcon: {
    top: 347,
    left: 68,
    width: 201,
  },
  menuAberto: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default MenuAberto;
