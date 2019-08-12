/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';

import SidePanelsExample from '../examples/SidePanels';
const SidePanelsExampleSource = require('!!raw-loader!../examples/SidePanels');

export default function SidePanelsPage() {
  return (
    <div>
      <PageTitle title="Side panels" />
      <hr />
      <div className="docs-example">
        <SidePanelsExample />
      </div>
      <pre>
        <PrismCode className="language-jsx">
          {SidePanelsExampleSource}
        </PrismCode>
      </pre>
    </div>
  );
}
