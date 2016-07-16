import React from 'react';
import Map, {GoogleApiWrapper} from 'google-maps-react';
import {searchNearby} from 'utils/googleApiHelpers';
import Header from 'components/Header/Header';
import styles from './styles.module.css';
import Sidebar from 'components/Sidebar/Sidebar';

export class Container extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      places: [],
      pagination: null
    }
  }

  onReady(mapProps, map) {
    //  when the map is ready and mounted
    const {google} = this.props;
    const opts = {
      location: map.center,
      radius: '500',
      types: ['school']
    };
    searchNearby(google, map, opts)
      .then((results, pagination) => {
        // we got some results and a pagination object
        this.setState({
          places: results,
          pagination: pagination
        })
      }).catch((status, result) => {
        // an error occured
      })
  }

  render() {
    return (
      <div>
        <Map
          onReady={this.onReady.bind(this)}
          google={this.props.google}
          visible={false}
          className={styles.content}>
          <Header />
          <Sidebar title={'Restaurants'} places={this.state.places} />
          <div className={styles.content}>

          </div>
        </Map>

          {this.state.places.map(place => {
            return (<div key={place.id}>{place.name}</div>)
          })}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: __GAPI_KEY__
})(Container);
