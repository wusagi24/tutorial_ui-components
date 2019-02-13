import React from 'react';

import MediaObjectLayout from './index';

export default stories => stories
  .add(
    'デフォルト',
    () => (
      <MediaObjectLayout>
        <div>
          <img
            src="/mock/images/img01.jpg"
            width="192"
            height="108"
            alt="MediaObjectLayout を説明するためのサンプル画像"
          />
        </div>
        <p>
          No lorem invidunt accusam sed consetetur justo. Dolor at justo ut sea sea et. Erat elitr sit ut amet magna takimata. Gubergren sit erat elitr amet, sadipscing dolore accusam at.
        </p>
        <p>
          Et sanctus magna justo sanctus voluptua lorem ea et ipsum justo, lorem eos magna et duo labore no voluptua sed. Vero nonumy sea dolore et invidunt est magna. Accusam labore sed et sea dolore. Nonumy magna dolore voluptua lorem sit.
        </p>
      </MediaObjectLayout>
    ),
  )
  .add(
    'section 指定',
    () => (
      <MediaObjectLayout tag="section">
        <div>
          <img
            src="/mock/images/img01.jpg"
            width="192"
            height="108"
            alt="MediaObjectLayout を説明するためのサンプル画像"
          />
        </div>
        <p>
          No lorem invidunt accusam sed consetetur justo. Dolor at justo ut sea sea et. Erat elitr sit ut amet magna takimata. Gubergren sit erat elitr amet, sadipscing dolore accusam at.
        </p>
        <p>
          Et sanctus magna justo sanctus voluptua lorem ea et ipsum justo, lorem eos magna et duo labore no voluptua sed. Vero nonumy sea dolore et invidunt est magna. Accusam labore sed et sea dolore. Nonumy magna dolore voluptua lorem sit.
        </p>
      </MediaObjectLayout>
    ),
  );
