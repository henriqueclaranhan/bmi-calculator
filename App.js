import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title';
import Form from './src/components/Form';

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Title />
			<Form />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f3f3f3',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
