import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Photo from '../src/client/app/Photo.jsx';

describe("Photo component tests: ", function() {
  it("Contains a photo card", function() {
    expect(shallow(<Photo />).contains(<div className="photo" />)).toBe(true);
  });
});
