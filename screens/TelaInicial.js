import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const TelaInicial = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.telaInicial, styles.iconLayout1]}>
      <View style={[styles.bancoDeHoras, styles.bancoDeHorasLayout]}>
        <Image
          style={[styles.squircleIcon, styles.squircleIconPosition]}
          contentFit="cover"
          source={require("../assets/squircle.png")}
        />
        <Text style={[styles.bancoDeHoras1, styles.bancoDeHoras1Typo]}>
          Banco de Horas
        </Text>
      </View>
      <Image
        style={[styles.menuIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/menu.png")}
      />
      <Text style={[styles.bemVindoUsurioContainer, styles.text2FlexBox]}>
        <Text style={styles.bemVindo}>Bem vindo,</Text>
        <Text style={styles.text2Typo}> Usuário!</Text>
      </Text>
      <Image
        style={[styles.procurarIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/procurar.png")}
      />
      <View style={[styles.contracheque, styles.contrachequeLayout]}>
        <Image
          style={[styles.squircleIcon1, styles.contrachequeLayout]}
          contentFit="cover"
          source={require("../assets/squircle1.png")}
        />
        <Text style={[styles.lquido, styles.lquidoTypo]}>Líquido</Text>
        <Text style={[styles.descontos, styles.lquidoTypo]}>Descontos</Text>
        <Text style={[styles.text, styles.textTypo]}>0,00</Text>
        <Text style={[styles.text1, styles.textTypo]}>1520,75</Text>
        <Text style={[styles.bruto, styles.brutoPosition]}>Bruto</Text>
        <Pressable
          style={styles.eye}
          onPress={() => navigation.navigate("OlhoFechado")}
        >
          <Image
            style={[styles.icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/eye.png")}
          />
        </Pressable>
        <Text style={[styles.contrachequeAbril, styles.brutoPosition]}>
          Contracheque | Abril 2024
        </Text>
        <Text style={[styles.r152075, styles.brutoPosition]}>R$ 1520,75</Text>
      </View>
      <View style={[styles.registroDeFrequncia, styles.bancoDeHorasLayout]}>
        <Image
          style={[styles.squircleIcon, styles.squircleIconPosition]}
          contentFit="cover"
          source={require("../assets/squircle.png")}
        />
        <Text style={[styles.registroDeFrequncia1, styles.brutoPosition]}>
          Registro de Frequência
        </Text>
      </View>
      <View style={[styles.menuInferior, styles.menuLayout]}>
        <View style={[styles.menuInferiorChild, styles.menuLayout]} />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={[styles.clipboardListIcon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/clipboardlist.png")}
        />
        <Image
          style={[styles.userAltIcon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/useralt.png")}
        />
        <Text style={[styles.incio, styles.incioTypo]}>Início</Text>
        <Text style={[styles.solicitaes, styles.incioTypo]}>Solicitações</Text>
        <Text style={[styles.perfil, styles.incioTypo]}>Perfil</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    overflow: "hidden",
    width: "100%",
  },
  bancoDeHorasLayout: {
    height: 134,
    width: 152,
    position: "absolute",
  },
  squircleIconPosition: {
    left: 0,
    top: 0,
  },
  bancoDeHoras1Typo: {
    height: 60,
    fontSize: FontSize.size_xl,
    top: 33,
    fontFamily: FontFamily.poppinsRegular,
  },
  iconLayout: {
    height: 54,
    width: 54,
    top: 55,
    position: "absolute",
  },
  text2FlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  contrachequeLayout: {
    height: 186,
    width: 322,
    position: "absolute",
  },
  lquidoTypo: {
    top: 135,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  textTypo: {
    top: 155,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  brutoPosition: {
    left: 18,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  menuLayout: {
    height: 73,
    width: 360,
    left: 0,
    position: "absolute",
  },
  iconPosition1: {
    top: 22,
    height: 25,
    width: 25,
    position: "absolute",
    overflow: "hidden",
  },
  incioTypo: {
    top: 50,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  notificaesPosition: {
    height: 46,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconPosition: {
    top: 13,
    height: 25,
    width: 25,
    position: "absolute",
    overflow: "hidden",
  },
  text2Typo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  squircleIcon: {
    height: 134,
    width: 152,
    position: "absolute",
  },
  bancoDeHoras1: {
    left: 25,
    width: 99,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  bancoDeHoras: {
    left: 190,
    top: 367,
    height: 134,
    width: 152,
  },
  menuIcon: {
    left: 15,
  },
  bemVindo: {
    fontFamily: FontFamily.poppinsRegular,
  },
  bemVindoUsurioContainer: {
    top: 73,
    left: 119,
    fontSize: FontSize.size_xs,
  },
  procurarIcon: {
    left: 290,
  },
  squircleIcon1: {
    left: 0,
    top: 0,
  },
  lquido: {
    left: 222,
  },
  descontos: {
    left: 51,
  },
  text: {
    left: 67,
  },
  text1: {
    left: 223,
  },
  bruto: {
    top: 75,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
  },
  icon: {
    height: "100%",
  },
  eye: {
    left: 283,
    top: 12,
    height: 25,
    width: 25,
    position: "absolute",
  },
  contrachequeAbril: {
    top: 17,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
  },
  r152075: {
    top: 44,
    fontSize: 25,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  contracheque: {
    top: 142,
    left: 19,
  },
  registroDeFrequncia1: {
    width: 120,
    height: 60,
    fontSize: FontSize.size_xl,
    top: 33,
    fontFamily: FontFamily.poppinsRegular,
  },
  registroDeFrequncia: {
    left: 19,
    top: 367,
    height: 134,
    width: 152,
  },
  menuInferiorChild: {
    backgroundColor: Color.colorGainsboro,
    top: 0,
    height: 73,
    width: 360,
  },
  vectorIcon: {
    height: "26.58%",
    width: "6.94%",
    top: "30.14%",
    right: "84.44%",
    bottom: "43.29%",
    left: "8.61%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  clipboardListIcon: {
    left: 167,
  },
  userAltIcon: {
    left: 306,
  },
  incio: {
    left: 28,
  },
  solicitaes: {
    left: 143,
  },
  perfil: {
    left: 304,
  },
  menuInferior: {
    top: 727,
  },
  notificaesChild: {
    backgroundColor: Color.colorGainsboro,
  },
  batteryThreeQuartersIcon: {
    left: 306,
  },
  text2: {
    top: 19,
    left: 22,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  wifiIcon: {
    left: 274,
  },
  signalIcon: {
    left: 239,
  },
  telaInicial: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
  },
});

export default TelaInicial;
