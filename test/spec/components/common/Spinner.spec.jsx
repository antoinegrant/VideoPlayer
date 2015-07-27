"use strict";

import React from 'react/addons';
import createComponent from 'helpers/createComponent';
import Spinner from 'components/common/Spinner';

describe('Spinner', () => {
  let component;

  beforeEach(() => {
    component = createComponent(Spinner);
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

});
