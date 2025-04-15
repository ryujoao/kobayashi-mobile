import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Link } from "@react-navigation/native";

export default function ProductScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.headerImage}
          source={require("@/assets/images/temaki-salmao.png")}
        />
        <Text style={styles.produtoName}>Temaki Salmão</Text>
        <Text style={styles.produtoPrice}>R$ 27.90</Text>
      </View>
      <View>
        <Text style={styles.sobre}>Sobre</Text>
        <Text style={styles.sobreText}>
          Folhas de nori, arroz japonês, salmão batido ou em cubos com maionese
          especial ou cream cheese e cebolinha salpicada.
        </Text>
      </View>
      <View>
        <Text style={styles.ingredientes}>Ingredientes</Text>
        <Text style={styles.ingredientesText}>
          3 e meia xícaras (chá) de água (700 ml), 3 xícaras (chá) de arroz tipo
          japonês (510 g), meia xícara (chá) de vinagre de arroz, 2 e meia
          colheres (sopa) de saquê culinário (mirin), 4 colheres (sopa) de açúcar
          meia colher (chá) de sal 1 sachê de AJI-NO-MOTO® (3 g), 400 g de salmão
          cortado em cubos pequenos meia embalagem de cream cheese (75 g), 3
          colheres (sopa) de cebolinha cortada em rodelas, 5 folhas de nori
          cortadas ao meio (alga-marinha).
        </Text>
      </View>
      </View>
  );
}
