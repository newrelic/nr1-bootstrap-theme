/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/newline-after-import: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';

import HeadersExample from '../examples/TypographyHeaders';
import DisplaysExample from '../examples/TypographyDisplays';
import BodyExample from '../examples/TypographyBody';
import SmallExample from '../examples/TypographySmall';
import LinkExample from '../examples/TypographyLink';

const HeadersExampleSource = require('!!raw-loader!../examples/TypographyHeaders');
const DisplaysExampleSource = require('!!raw-loader!../examples/TypographyDisplays');
const BodyExampleSource = require('!!raw-loader!../examples/TypographyBody');
const SmallExampleSource = require('!!raw-loader!../examples/TypographySmall');
const LinkExampleSource = require('!!raw-loader!../examples/TypographyLink');

export default function TypographyPage() {
  return (
    <div>
      <PageTitle title="Headers"/>
      <div className="docs-example">
        <HeadersExample/>
      </div>
      <pre>
        <PrismCode className="language-jsx">
          {HeadersExampleSource}
        </PrismCode>
      </pre>

      <PageTitle title="Display"/>
      <div className="docs-example">
        <DisplaysExample/>
      </div>
      <pre>
        <PrismCode className="language-jsx">
          {DisplaysExampleSource}
        </PrismCode>
      </pre>

      <PageTitle title="Body"/>
      <div className="docs-example">
        <BodyExample/>
      </div>
      <pre>
        <PrismCode className="language-jsx">
          {BodyExampleSource}
        </PrismCode>
      </pre>

      <PageTitle title="Small text"/>
      <div className="docs-example">
        <SmallExample/>
      </div>
      <pre>
        <PrismCode className="language-jsx">
          {SmallExampleSource}
        </PrismCode>
      </pre>

      <PageTitle title="Link"/>
      <div className="docs-example">
        <LinkExample/>
      </div>
      <pre>
        <PrismCode className="language-jsx">
          {LinkExampleSource}
        </PrismCode>
      </pre>
    </div>
  );
}
