'use strict';

describe('Service: apiServiceMock', function () {

  // load the service's module
  beforeEach(module('ngOnepagerApp'));

  // instantiate service
  var apiServiceMock;
  beforeEach(inject(function (_apiServiceMock_) {
    apiServiceMock = _apiServiceMock_;
  }));

  it('should do something', function () {
    expect(!!apiServiceMock).toBe(true);
  });

});
