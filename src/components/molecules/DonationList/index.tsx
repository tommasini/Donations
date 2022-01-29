import React from 'react';
import {FlatList, Text} from 'react-native';

import {palette} from '../../../util/palette';
import {mockData} from '../../../util/mockData';
import DonationItem from '../../atoms/DonationItem';

type DonationListProps = {
  totalDonated: number;
};

const DonationList: React.FC<DonationListProps> = ({totalDonated}) => {
  return (
    <>
      <Text style={{fontSize: 24, marginVertical: palette.spacing * 2}}>
        Total: {totalDonated}€
      </Text>
      <FlatList
        style={{width: '100%'}}
        data={mockData.donations}
        renderItem={({item}) => {
          return <DonationItem item={item} />;
        }}
      />
    </>
  );
};
export default DonationList;
