import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, ImageBackground, Image, renderTabBar } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Dimensions} from 'react-native';


import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Tela1Route} />
        <Tab.Screen name="Log In" component={Tela2Route} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

function Tela1Route({ navigation }) {
  return (
  <View style={[styles.scene, { backgroundColor: '#ffff00' }]}>
       <Image source={require('./assets/snap.png')} style={styles.image, {width: 300, height: 300, alignSelf: 'center'}} />
      <TouchableOpacity 
      style={[styles.button, { backgroundColor: '#f23c54', bottom: -300, alignSelf: 'center', marginTop: 20, width: 300, height: 70, borderRadius: 5 }]}
      onPress={() => navigation.navigate('Log In')}
      onPress={() => {}}>
        <Text style={[styles.buttonText, { textTransform: 'uppercase', textAlign: 'center', fontSize: 45, color: 'white' }]}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#0dabfa', position: 'absolute', bottom: 20, alignSelf: 'center', marginTop: 20, width: 300, height: 70, borderRadius: 5 }]} 
      onPress={() => navigation.navigate('Home')}
      onPress={() => {}}>
        <Text style={[styles.buttonText, { textTransform: 'uppercase', textAlign: 'center', fontSize: 45, color: 'white' }]}>Criar conta</Text>
      </TouchableOpacity>
    </View>
  );
}

function Tela2Route ({ navigation }){
  return (
      <View style={[styles.scene, { backgroundColor: '#ffff00' }]}>
      <View style={styles.card}>
        <Image source={require('./assets/snap.png')} style={styles.image, {width: 200, height: 200, alignSelf: 'center'}} />
        <Text style={styles.title}>Log In</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuário ou E-mail"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}



function Tela3Route ({ navigation }){
  return (
 <View style={[styles.scene, { backgroundColor: '#ffff00' }]}>
       <Image source={require('./assets/snap.png')} style={styles.image, {width: 300, height: 300, alignSelf: 'center'}} />
      <Text style={styles.title}>Creat Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome completo"
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar senha"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

function Tela4Route ({ navigation }){
  return (
 <View style={[styles.scene, { backgroundColor: '#ffff00' }]}>
      <View style={styles.card}>
        <Image source={require('./assets/snap.png')} style={styles.image, {width: 200, height: 200, alignSelf: 'center'}} />
        <Text style={styles.title}>Confirme seu e-mail</Text>
        <Text style={styles.description}>
          Enviamos um link de confirmação para o seu e-mail. Por favor, verifique sua caixa de entrada e clique no link para confirmar seu e-mail.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Reenviar E-mail</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Home' },
      { key: 'second', title: 'Login' },
      { key: 'third', title: 'Cadastro' },
      { key: 'four', title: 'Esqueceu' },
    ],
  };


  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: Tela1Route,
          second: Tela2Route,
          third: Tela3Route,
          four: Tela4Route,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
        style={styles.container}
        renderTabBar={renderTabBar}
      />
    );
  }


}


const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
});

