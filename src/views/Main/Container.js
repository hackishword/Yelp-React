import React from 'react';
import Map, {GoogleApiWrapper} from 'google-maps-react';

export class Container extends React.Component {

  onReady(mapProps, map) {
    //  when the map is ready and mounted
  }

  render() {
    return (
      <div>
        Hello from the container
        <Map google={this.props.google} />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: __GAPI_KEY__
})(Container);
