(function () {
    "use strict";
    'use strict';


    var app = angular.module('viewCustom', ['angularLoad']);

    /****************************************************************************************************/

    /*In case of CENTRAL_PACKAGE - comment out the below line to replace the other module definition*/

    /*var app = angular.module('centralCustom', ['angularLoad']);*/

    /****************************************************************************************************/

    app.controller('removeSpecificRequestForLocationController', ['removeSpecificRequestForLocationStudioConfig', '$scope', function(addonParameters, $scope){
        var vm = this.parentCtrl;
        var recordLinks2;

        var unbind = $scope.$watch(() => vm.item.delivery.bestlocation ? vm.recordLinks : undefined, function () {
            if (recordLinks2 && recordLinks2.length !== vm.recordLinks.length) {
                recordLinks2 = vm.recordLinks;
                unbind();
                calculateRemove();
            } else if (!recordLinks2) {
                recordLinks2 = vm.recordLinks;
                calculateRemove();
            } else {
                recordLinks2 = vm.recordLinks;
            }
        });

        function calculateRemove(){
            let libraryCodes = addonParameters[0].libraryCode;
            let subLocationCodes = addonParameters[0].subLocationCode;
            let libraryCode = libraryCodes.split(/\s*?,\s*?/);
            let subLocationCode = subLocationCodes.split(/\s*?,\s*?/);
            if ((libraryCode.indexOf(vm.item.delivery.bestlocation.libraryCode) === -1
                || subLocationCode.indexOf(vm.item.delivery.bestlocation.subLocation) === -1)
                && recordLinks2.length > 0) {
                vm.recordLinks = recordLinks2.filter(function (e) {
                    return e.displayLabel !== addonParameters[0].displayLabel;
                })
            }
        }
    }]);

    app.component('removeSpecificRequestForLocation', {
        controller: 'removeSpecificRequestForLocationController',
        bindings: {parentCtrl: '<'},
        template: '<remove-request></remove-request>'
    });

})();

   
