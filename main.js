function Service() {}
Service.prototype.greeting = function() {
  return 'Hello';
};

var Cmp = ng.core.
  Component({
    selector: 'cmp',
    providers: [Service],
    template: '{{greeting}} world!'
  }).
  Class({
    constructor: [Service, function Cmp(service) {
      this.greeting = service.greeting();
    }]
  });

document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(Cmp);
});