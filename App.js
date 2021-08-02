import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import Title from './src/components/Title';
import Form from './src/components/Form';
import { useFonts } from 'expo-font';

export default function App() {
	let [fontsLoaded] = useFonts({
		'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
		'Poppins-ExtraLight': require('./assets/fonts/Poppins-ExtraLight.ttf'),
		'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
		'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
		'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
		'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf')
	  });
	
	  if (!fontsLoaded) {
		return <AppLoading />;
	  }
	  
	  else {
		return (
			<View style={styles.container}>
				<StatusBar backgroundColor="#08244b" barStyle="default" />
				<Title />
				<Form />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f3f3f3'
	},
});
