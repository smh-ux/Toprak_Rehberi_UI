import React from 'react';
import {
  SafeAreaView,
  View,
  Dimensions,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const ProductInfoFullScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Domates</Text>
        <View style={styles.card}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Image
              source={require('../assets/images/domates.jpg')}
              style={styles.image}
            />
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              sodales cursus sem ut congue. Pellentesque vestibulum ex non
              luctus maximus. Nullam eu tempor risus. Fusce eget est libero.
              Vestibulum cursus vestibulum gravida. Cras vitae imperdiet augue.
              Ut imperdiet ac diam quis semper. Curabitur est libero, dignissim
              et magna in, tristique vestibulum nibh. Praesent ac nisi at elit
              maximus porta. Vivamus scelerisque tortor et ante vulputate
              pellentesque. In lacinia dignissim arcu in imperdiet. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Morbi porta et lectus non pharetra. Morbi ultrices,
              magna a rhoncus viverra, tellus tortor porttitor ante, non
              accumsan elit felis quis lectus. Sed volutpat turpis magna,
              convallis scelerisque diam dignissim in. Sed eu nulla suscipit,
              efficitur diam ut, finibus tortor. Nam tristique dolor ac ultrices
              faucibus. Cras id odio diam. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Duis enim eros, iaculis a hendrerit
              in, faucibus nec mi. Nulla a nisl turpis. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Vivamus rhoncus felis metus, non malesuada ligula egestas et.
              Phasellus ac iaculis odio. Praesent vel fermentum lorem, imperdiet
              tempor justo. Praesent ac efficitur ipsum. Praesent semper
              molestie tristique. Donec eu diam lacinia, efficitur nunc vel,
              imperdiet massa. Quisque in nunc cursus, hendrerit erat et,
              efficitur leo. Nam consectetur ligula sit amet dolor accumsan, a
              tincidunt libero hendrerit. Suspendisse vulputate diam suscipit,
              bibendum purus et, hendrerit erat. In hac habitasse platea
              dictumst. Cras vitae quam et orci rhoncus rutrum. Nunc ac bibendum
              eros. Nam porttitor, nisi in ultricies gravida, orci ex vulputate
              arcu, nec cursus nulla augue vel libero. In hac habitasse platea
              dictumst. Aenean ultrices fermentum magna eu tristique. Fusce in
              nisi ut neque scelerisque pulvinar. Donec tincidunt cursus
              sodales. Integer at metus quis erat bibendum malesuada in at nisl.
              Aliquam sodales vel massa eu lacinia. Donec tristique consequat
              quam vel tristique. Duis hendrerit ipsum nec dui condimentum
              ullamcorper. Aenean vel lacus non ante elementum malesuada. Donec
              vel quam imperdiet, commodo tortor quis, sodales purus. Aliquam
              erat volutpat. Curabitur fringilla mi at porta hendrerit. Vivamus
              iaculis risus id nulla interdum porta ac at dui. Ut sit amet erat
              hendrerit, imperdiet mauris vitae, vehicula nisi. Donec semper
              pellentesque ligula, vitae scelerisque sem blandit vel. Nullam ut
              purus tortor. Fusce facilisis arcu non mattis sollicitudin.
            </Text>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: '#000',
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#FFF'
  },

  card: {
    width: WIDTH - 40,
    height: HEIGHT-HEIGHT/4,
    backgroundColor: '#eee',
    marginLeft: 20,
    borderRadius: 20,
  },

  image: {
    width: WIDTH - 40,
    height: HEIGHT / 4,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  text: {
    color: '#000',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default ProductInfoFullScreen;
