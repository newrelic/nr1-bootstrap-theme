/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';

import LinksExternalExample from '../examples/LinksExternal';
const LinksExternalExampleSource = require('!!raw-loader!../examples/LinksExternal');

export default function LinksExternalPage() {
  return (
    <div>
      <PageTitle title="Links (external)" />
      <hr />
      <div className="docs-example">
        <LinksExternalExample />
      </div>
      <pre>
        <PrismCode className="language-jsx">
          {LinksExternalExampleSource}
        </PrismCode>
      </pre>
    </div>
  );
}
