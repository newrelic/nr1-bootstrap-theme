/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';

import ErrorMessagesExample from '../examples/ErrorMessages';
const ErrorMessagesExampleSource = require('!!raw-loader!../examples/ErrorMessages');

export default function ErrorMessagesPage() {
  return (
    <div>
      <PageTitle title="Error messages" />
      <hr />
      <div className="docs-example">
        <ErrorMessagesExample />
      </div>
      <pre>
        <PrismCode className="language-jsx">
          {ErrorMessagesExampleSource}
        </PrismCode>
      </pre>
    </div>
  );
}
