import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Modal,
  ScrollView,
  TextInput,
  Image
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import * as Animatable from 'react-native-animatable'
import { FaSpider } from 'react-icons/fa'

const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity)

export default function App() {
  const [page, setPage] = useState(false)
  const [input, setInput] = useState('')
  const [image, setImage] = useState(false)
  const [link, setLink] = useState('')
  const [descript, setDescript] = useState('')
  function verify() {
    if (input === '') {
      alert('Não deixe o campo vazio por gentileza')
      return
    }

    setPage(true)
  }
  function primeira() {
    setImage(true)
    setLink(require('./src/images/prod1.jpg'))
    setDescript('R$ 249.99 | Roupa Homem aranha Andrew')
  }
  function segunda() {
    setImage(true)
    setLink(require('./src/images/prod2.jpg'))
    setDescript('R$ 249.99 | Roupa Homem aranha Tobey')
  }
  function terceira() {
    setImage(true)
    setLink(require('./src/images/prod3.jpg'))
    setDescript('R$ 249.99 | Roupa aranha de ferro')
  }
  function quarta() {
    setImage(true)
    setLink(require('./src/images/prod4.jpg'))
    setDescript('R$ 249.99 | Roupa aranha Classico')
  }
  function quinta() {
    setImage(true)
    setLink(require('./src/images/prod5.jpg'))
    setDescript('R$ 249.99 | Roupa aranha 2001')
  }
  function sexta() {
    setImage(true)
    setLink(require('./src/images/prod6.jpg'))
    setDescript('R$ 249.99 | Roupa aranha Jogo ')
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#171d31" barStyle="light-content" />

      <Text style={styles.title}>Loja do Francisco Guilherme</Text>

      <TextInput
        placeholder="Cliente"
        placeholderTextColor="#DCDCDC"
        value={input}
        style={styles.input}
        onChangeText={texto => setInput(texto)}
      />

      <TouchableOpacity onPress={verify} style={styles.head}>
        <FaSpider />
        <Text style={{ color: '#DDD' }}>Logar</Text>
      </TouchableOpacity>

      <Modal animationtype="bounceInUp" transparent={false} visible={page}>
        <SafeAreaView style={styles.container}>
          <View style={styles.line}>
            <Text style={styles.title}>Loja do Francisco Guilherme</Text>

            <Text style={styles.title}>Bem vindo: {input}</Text>
          </View>
          <ScrollView>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                alignContent: 'center'
              }}
            >
              <View style={styles.images}>
                <TouchableOpacity
                  onPress={primeira}
                  style={{
                    position: 'absolute',
                    right: 0,
                    alignSelf: 'center'
                  }}
                >
                  <Image
                    source={require('./src/images/prod1.jpg')}
                    style={{
                      height: 100,
                      width: 100,
                      flexDirection: 'row',
                      justifyContent: 'space-around'
                    }}
                  />
                  <Text style={[styles.text, { color: '#000000' }]}>
                    Homem aranha 1
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.images}>
                <TouchableOpacity
                  onPress={segunda}
                  style={{
                    position: 'absolute',
                    right: 0,
                    alignSelf: 'center'
                  }}
                >
                  <Image
                    source={require('./src/images/prod2.jpg')}
                    style={{
                      height: 100,
                      width: 100,
                      flexDirection: 'row',
                      justifyContent: 'space-around'
                    }}
                  />
                  <Text style={[styles.text, { color: '#000000' }]}>
                    Homem aranha 2
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.images}>
                <TouchableOpacity
                  onPress={terceira}
                  style={{
                    position: 'absolute',
                    right: 0,
                    alignSelf: 'center'
                  }}
                >
                  <Image
                    source={require('./src/images/prod3.jpg')}
                    style={{
                      height: 100,
                      width: 100,
                      flexDirection: 'row',
                      justifyContent: 'space-around'
                    }}
                  />
                  <Text style={[styles.text, { color: '#000000' }]}>
                    Homem aranha 3
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.images}>
                <TouchableOpacity
                  onPress={quarta}
                  style={{
                    position: 'absolute',
                    right: 0,
                    alignSelf: 'center'
                  }}
                >
                  <Image
                    source={require('./src/images/prod4.jpg')}
                    style={{
                      height: 100,
                      width: 100,
                      flexDirection: 'row',
                      justifyContent: 'space-around'
                    }}
                  />
                  <Text style={[styles.text, { color: '#000000' }]}>
                    Homem aranha 4
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.images}>
                <TouchableOpacity
                  onPress={quinta}
                  style={{
                    position: 'absolute',
                    right: 0,
                    alignSelf: 'center'
                  }}
                >
                  <Image
                    source={require('./src/images/prod5.jpg')}
                    style={{
                      height: 100,
                      width: 100,
                      flexDirection: 'row',
                      justifyContent: 'space-around'
                    }}
                  />
                  <Text style={[styles.text, { color: '#000000' }]}>
                    Homem aranha 5
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.images}>
                <TouchableOpacity
                  onPress={sexta}
                  style={{
                    position: 'absolute',
                    right: 0,
                    alignSelf: 'center'
                  }}
                >
                  <Image
                    source={require('./src/images/prod6.jpg')}
                    style={{
                      height: 100,
                      width: 100,
                      flexDirection: 'row',
                      justifyContent: 'space-around'
                    }}
                  />
                  <Text style={[styles.text, { color: '#000000' }]}>
                    Homem aranha 6
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>

      <Modal
        animationtype="bounceInUp"
        transparent={false}
        visible={image}
        style={{ backgroundColor: '#000' }}
      >
        <TouchableOpacity onPress={() => setImage(false)}>
          <Ionicons
            style={{ marginLeft: 5, marginRight: 5 }}
            name="md-arrow-back"
            size={40}
            color="#DDD"
          />
        </TouchableOpacity>
        <Image source={link} style={styles.into} />
        <Text style={{ textAlign: 'center' }}>{descript}</Text>
      </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  images: {
    height: 150,
    width: 150,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    borderColor: '#000',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignSelf: 'center',
    borderRadius: 7,
    padding: 2
  },
  header: {
    marginBottom: 8
  },
  into: {
    height: 460,
    width: 320,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    borderColor: '#000',
    alignSelf: 'center',
    borderRadius: 7,
    padding: 2,
    textAlign: 'center'
  },
  input: {
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    backgroundColor: '#FFF',
    padding: 9,
    height: 45,
    textAlignVertical: 'center',
    color: '#000',
    borderRadius: 5
  },
  image: {
    width: '100%'
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#A52A2A'
  },
  textContainer: {
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  text: {
    fontSize: 15,
    flex: 1,
    marginHorizontal: '1%',
    textAlign: 'left'
  },
  title: {
    marginTop: 10,
    paddingBottom: 10,
    fontSize: 25,
    textAlign: 'center',
    color: '#DDD'
  },
  line: {
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 2
  },
  subtitle: {
    marginTop: 10,
    paddingBottom: 10,
    fontSize: 15,
    textAlign: 'center',
    color: '#000'
  },
  textContent: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%'
  },
  enter: {
    color: '#FFF',
    fontSize: 20,
    marginLeft: 15,
    alignItems: 'center',
    alignSelf: 'center'
  },
  head: {
    marginLeft: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    color: '#FFF',
    alignSelf: 'center'
  }
})
