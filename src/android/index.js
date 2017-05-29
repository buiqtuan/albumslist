//Index.android.js - here is the code for android

//Import lib to help create a component
import React from 'react';
import { View } from 'react-native';
//Import components
import Header from './components/header';
import AlbumList from './components/albumlist';

//Create a component 
export default class App extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header headerText='Albums' />
                <AlbumList />
            </View>
        );
    }
}
