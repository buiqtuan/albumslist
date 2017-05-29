import React from 'react';
import { ScrollView } from 'react-native';
import Axios from 'axios';
import AlbumDetail from './albumdetail';

export default class AlbumList extends React.Component {
    state = {
        albums: []
    }

    componentWillMount() {
        Axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(res => {
            this.setState({ albums: res.data });
        });
    }

    renderAlbums() {
        return this.state.albums.map((album) => 
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        console.log(this.state);

        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}
