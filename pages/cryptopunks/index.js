import React from 'react';

import PageLayout from '../../composed-components/page-layout';
import Pagination from '../../components/pagination';
import PunksGrid from '../../composed-components/grid-punks';

export default function Legal() {
  return (
    <PageLayout>
      <div className="p-8">
        <PunksGrid />
      </div>
      <div className="pb-8">
        <Pagination />
      </div>
    </PageLayout>
  );
}
