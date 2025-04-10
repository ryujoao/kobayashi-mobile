import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { Link } from "expo-router";

export default function Index() {
  const MENU = [
    {
      id: 1,
      name: "Temaki Salmão",
      description: "Salmão com cebolinha",
      price: 27.90,
      image: require("@/assets/images/temaki-salmao.png")
    },
    {
      id: 2,
      name: "Temaki Shimeji",
      description: "Shimeji, cream cheese e cebolinha",
      price: 28.80,
      image: require("@/assets/images/temaki-shimeji.png")
    },
    {
      id: 3,
      name: "Temaki Ebiten",
      description: "Camarão empanado com cream cheese",
      price: 36.00,
      image: require("@/assets/images/temaki-ebiten.png")
    }
  ]
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.headerImage}
          source={require("@/assets/images/kobayashi.png")}
        />
        <Text style={styles.restauranteName}>Kobayashi</Text>
        <Text style={styles.subtitle}>A essência da culinária japonesa</Text>
      </View>
 
      <View style={styles.tabs}>
        {["Rodízios", "Entradas", "Sushi", "Temakis", "Bebidas"].map((item) => (
          <TouchableOpacity>
            <Text style={styles.tabsName}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.menuList}>
      {
        MENU.map((item) => (
          <Link href={"/produto/page"} asChild>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuContent}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <Text style={styles.itemPrice} >{item.price.toFixed(2)}</Text>
            </View>
            <Image style={styles.itemImage} source={item.image}/>
          </TouchableOpacity>
          </Link>
        )) 
      }
      </ScrollView>
    </View>
  )
}