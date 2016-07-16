import React from 'react';
import Map, {GoogleApiWrapper} from 'google-maps-react';

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
      types: ['cafe']
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
        Hello from the container
        <Map
          onReady={this.onReady.bind(this)}
          google={this.props.google} />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: __GAPI_KEY__
})(Container);
