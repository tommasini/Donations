import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import styles from './styles';
import {BarCodeReadEvent} from 'react-native-camera';

type QRCodeReaderProps = {
  onSuccess: (e: BarCodeReadEvent) => void;
};

const QRCodeReader: React.FC<QRCodeReaderProps> = ({onSuccess}) => {
  return (
    <QRCodeScanner
      onRead={onSuccess}
      cameraStyle={styles.cameraStyle}
      showMarker={true}
      markerStyle={styles.markerStyle}
    />
  );
};

export default QRCodeReader;
