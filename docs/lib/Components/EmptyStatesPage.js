/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';

import EmptyStatesExample from '../examples/EmptyStates';
const EmptyStatesExampleSource = require('!!raw-loader!../examples/EmptyStates');

export default function EmptyStatesPage() {
  return (
    <div>
      <PageTitle title="Empty states" />
      <hr />
      <div className="docs-example">
        <EmptyStatesExample />
      </div>
      <pre>
        <PrismCode className="language-jsx">
          {EmptyStatesExampleSource}
        </PrismCode>
      </pre>
    </div>
  );
}
