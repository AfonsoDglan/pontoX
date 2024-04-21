import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const OlhoFechado = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.olhoFechado, styles.iconLayout2]}>
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
        style={[styles.menuIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/menu.png")}
      />
      <Text style={[styles.bemVindoUsurioContainer, styles.textTypo1]}>
        <Text style={styles.bemVindo}>Bem vindo,</Text>
        <Text style={styles.textTypo}> Usuário!</Text>
      </Text>
      <Image
        style={[styles.procurarIcon, styles.iconLayout1]}
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
        <Text style={[styles.bruto, styles.textTypo1]}>Bruto</Text>
        <Text style={[styles.contrachequeAbril, styles.textTypo1]}>
          Contracheque | Abril 2024
        </Text>
        <Pressable
          style={[styles.eyeSlash, styles.iconLayout]}
          onPress={() => navigation.navigate("TelaInicial")}
        >
          <Image
            style={[styles.icon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/eyeslash.png")}
          />
        </Pressable>
        <Image
          style={[styles.circleIcon, styles.circleIconPosition1]}
          contentFit="cover"
          source={require("../assets/circle.png")}
        />
        <Image
          style={[styles.circleIcon1, styles.circleIconPosition1]}
          contentFit="cover"
          source={require("../assets/circle.png")}
        />
        <Image
          style={[styles.circleIcon2, styles.circleIconPosition1]}
          contentFit="cover"
          source={require("../assets/circle.png")}
        />
        <Image
          style={[styles.circleIcon3, styles.circleIconPosition1]}
          contentFit="cover"
          source={require("../assets/circle.png")}
        />
        <Image
          style={[styles.circleIcon4, styles.circleIconPosition1]}
          contentFit="cover"
          source={require("../assets/circle.png")}
        />
        <Image
          style={[styles.circleIcon5, styles.circleIconPosition]}
          contentFit="cover"
          source={require("../assets/circle.png")}
        />
        <Image
          style={[styles.circleIcon6, styles.circleIconPosition]}
          contentFit="cover"
          source={require("../assets/circle.png")}
        />
      </View>
      <View style={[styles.registroDeFrequncia, styles.bancoDeHorasLayout]}>
        <Image
          style={[styles.squircleIcon, styles.squircleIconPosition]}
          contentFit="cover"
          source={require("../assets/squircle.png")}
        />
        <Text style={[styles.registroDeFrequncia1, styles.bancoDeHoras1Typo]}>
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
          style={[styles.clipboardListIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/clipboardlist.png")}
        />
        <Image
          style={[styles.userAltIcon, styles.iconPosition]}
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
  iconLayout2: {
    width: "100%",
    overflow: "hidden",
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
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    top: 33,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  iconLayout1: {
    height: 54,
    width: 54,
    top: 55,
    position: "absolute",
  },
  textTypo1: {
    fontSize: FontSize.size_xs,
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
  iconLayout: {
    height: 25,
    width: 25,
    position: "absolute",
  },
  circleIconPosition1: {
    top: 43,
    height: 25,
    width: 25,
    position: "absolute",
    overflow: "hidden",
  },
  circleIconPosition: {
    top: 153,
    height: 25,
    width: 25,
    position: "absolute",
    overflow: "hidden",
  },
  menuLayout: {
    height: 73,
    width: 360,
    left: 0,
    position: "absolute",
  },
  iconPosition: {
    left: 306,
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
  textTypo: {
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
  bruto: {
    top: 75,
    left: 18,
    fontFamily: FontFamily.poppinsRegular,
  },
  contrachequeAbril: {
    top: 17,
    left: 18,
    fontFamily: FontFamily.poppinsRegular,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  eyeSlash: {
    left: 283,
    top: 13,
  },
  circleIcon: {
    left: 18,
  },
  circleIcon1: {
    left: 48,
  },
  circleIcon2: {
    left: 78,
  },
  circleIcon3: {
    left: 108,
  },
  circleIcon4: {
    left: 138,
  },
  circleIcon5: {
    left: 71,
  },
  circleIcon6: {
    left: 231,
  },
  contracheque: {
    top: 142,
    left: 19,
  },
  registroDeFrequncia1: {
    width: 120,
    left: 18,
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
    top: 22,
    overflow: "hidden",
  },
  userAltIcon: {
    top: 22,
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
    top: 13,
  },
  text: {
    top: 19,
    left: 22,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  wifiIcon: {
    left: 274,
    top: 13,
    overflow: "hidden",
  },
  signalIcon: {
    left: 239,
    top: 13,
    overflow: "hidden",
  },
  olhoFechado: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
    overflow: "hidden",
  },
});

export default OlhoFechado;
