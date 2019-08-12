/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import BadgeExample from '../examples/Badge';

import BadgeButtonExample from '../examples/BadgeButton';

import BadgePillsExample from '../examples/BadgePills';

import BadgeVariationsExample from '../examples/BadgeVariations';

import BadgeLinksExample from '../examples/BadgeLinks';
const BadgeExampleSource = require('!!raw-loader!../examples/Badge');
const BadgeButtonExampleSource = require('!!raw-loader!../examples/BadgeButton');
const BadgePillsExampleSource = require('!!raw-loader!../examples/BadgePills');
const BadgeVariationsExampleSource = require('!!raw-loader!../examples/BadgeVariations');
const BadgeLinksExampleSource = require('!!raw-loader!../examples/BadgeLinks');

export default class BadgesPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Badges" />
        <hr />
        <p>Scale to parent</p>
        <div className="docs-example">
          <BadgeExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {BadgeExampleSource}
          </PrismCode>
        </pre>
        <p>Badges can be used as part of links or buttons to provide a counter.</p>
        <div className="docs-example">
          <BadgeButtonExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {BadgeButtonExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Contextual variations</SectionTitle>
        <div className="docs-example">
          <BadgeVariationsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {BadgeVariationsExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Pills</SectionTitle>
        <div className="docs-example">
          <BadgePillsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {BadgePillsExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Links</SectionTitle>
        <p>Adding the <code>href</code> prop (without specifying a <code>tag</code> prop) will default the badge to a link.</p>
        <div className="docs-example">
          <BadgeLinksExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {BadgeLinksExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
