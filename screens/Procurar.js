import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Procurar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.procurar}>
      <Pressable
        style={styles.background}
        onPress={() => navigation.navigate("TelaInicial")}
      />
      <View style={[styles.caixaDeProcura, styles.caixaLayout]}>
        <Image
          style={[styles.caixaDeProcuraChild, styles.childPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-41.png")}
        />
        <Text style={[styles.procurar1, styles.resultadoTypo]}>Procurar</Text>
      </View>
      <Image
        style={styles.procurarIcon}
        contentFit="cover"
        source={require("../assets/procurar.png")}
      />
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
          style={[styles.userAltIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/useralt.png")}
        />
        <Text style={[styles.incio, styles.incioTypo]}>Início</Text>
        <Text style={[styles.solicitaes, styles.incioTypo]}>Solicitações</Text>
        <Text style={[styles.perfil, styles.incioTypo]}>Perfil</Text>
      </View>

      <View style={[styles.resultados, styles.resultadosLayout]}>
        <Image
          style={[styles.resultadosChild, styles.resultadosLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-5.png")}
        />
        <Image
          style={[styles.angleRightIcon, styles.angleIconPosition]}
          contentFit="cover"
          source={require("../assets/angleright.png")}
        />
        <Text style={[styles.resultado1, styles.resultadoTypo]}>
          Resultado 1
        </Text>
        <Text style={[styles.resultado2, styles.resultadoTypo]}>
          Resultado 2
        </Text>
        <Image
          style={[styles.angleRightIcon1, styles.angleIconPosition]}
          contentFit="cover"
          source={require("../assets/angleright.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  caixaLayout: {
    height: 63,
    width: 332,
    position: "absolute",
  },
  childPosition: {
    borderRadius: Border.br_xl,
    top: 0,
    left: 0,
  },
  resultadoTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  menuLayout: {
    height: 73,
    width: 360,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 25,
    width: 25,
    top: 22,
    position: "absolute",
    overflow: "hidden",
  },
  incioTypo: {
    top: 50,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
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
  resultadosLayout: {
    height: 115,
    width: 332,
    position: "absolute",
  },
  angleIconPosition: {
    left: 14,
    height: 25,
    width: 25,
    position: "absolute",
    overflow: "hidden",
  },
  background: {
    top: 46,
    height: 683,
    width: 360,
    left: 0,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  caixaDeProcuraChild: {
    height: 63,
    width: 332,
    position: "absolute",
  },
  procurar1: {
    top: 23,
    left: 21,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
  },
  caixaDeProcura: {
    top: 51,
    left: 17,
  },
  procurarIcon: {
    top: 55,
    left: 290,
    width: 54,
    height: 54,
    position: "absolute",
  },
  menuInferiorChild: {
    top: 0,
    height: 73,
    backgroundColor: Color.colorGainsboro,
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
    height: 46,
  },
  batteryThreeQuartersIcon: {
    left: 306,
  },
  text: {
    top: 19,
    left: 22,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
  },
  wifiIcon: {
    left: 274,
  },
  signalIcon: {
    left: 239,
  },
  resultadosChild: {
    borderRadius: Border.br_xl,
    top: 0,
    left: 0,
  },
  angleRightIcon: {
    top: 66,
  },
  resultado1: {
    top: 24,
    left: 41,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
  },
  resultado2: {
    top: 71,
    left: 42,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
  },
  angleRightIcon1: {
    top: 21,
  },
  resultados: {
    top: 135,
    left: 17,
  },
  procurar: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Procurar;
