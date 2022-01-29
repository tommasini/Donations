import React from 'react';
import {Linking} from 'react-native';
import QRCodeReader from '../../../components/templates/donator/QRCodeReader';
import {BarCodeReadEvent} from 'react-native-camera';

export default () => {
  const onSuccess = (e: BarCodeReadEvent) => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
  };
  return <QRCodeReader onSuccess={onSuccess} />;
};
