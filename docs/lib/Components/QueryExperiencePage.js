/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';

import QueryExperienceExample from '../examples/QueryExperience';
const QueryExperienceExampleSource = require('!!raw-loader!../examples/QueryExperience');

export default function QueryExperiencePage() {
  return (
    <div>
      <PageTitle title="Query experience" />
      <hr />
      <div className="docs-example">
        <QueryExperienceExample />
      </div>
      <pre>
        <PrismCode className="language-jsx">
          {QueryExperienceExampleSource}
        </PrismCode>
      </pre>
    </div>
  );
}
