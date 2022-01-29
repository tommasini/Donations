import React, {useMemo} from 'react';
import {mockData} from '../../../util/mockData';

import Donations from '../../../components/templates/donator/Donations';
import DonationList from '../../../components/molecules/DonationList';

export type DonationType = {
  donatorId: string;
  receiverId: string;
  transactionId: string;
  name: string;
  donated: number;
};

export default () => {
  const sumAllDonations = useMemo(() => {
    return mockData.donations
      .map(item => item.donated)
      .reduce((prev, curr) => prev + curr, 0);
  }, []);

  return <Donations list={<DonationList totalDonated={sumAllDonations} />} />;
};
