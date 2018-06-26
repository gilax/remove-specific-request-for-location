app.controller('removeSpecificRequestForLocationController',
    ['removeSpecificRequestForLocationStudioConfig', '$scope',
        function(addonParameters, $scope){
            var vm = this.parentCtrl;
            var recordLinks2;

            var unbind = $scope.$watch(() => vm.recordLinks ? vm.recordLinks : undefined, function () {
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
                let libraryCode = libraryCodes ? libraryCodes.split(/\s*?,\s*?/) : [];
                let subLocationCode = subLocationCodes ? subLocationCodes.split(/\s*?,\s*?/) : [];
                if ((!vm.item.delivery.bestlocation
                    || libraryCode.indexOf(vm.item.delivery.bestlocation.libraryCode) === -1
                    || subLocationCode.indexOf(vm.item.delivery.bestlocation.subLocationCode) === -1)
                    && recordLinks2.length > 0) {
                    vm.recordLinks = recordLinks2.filter(function (e) {
                        return e.displayLabel !== addonParameters[0].displayLabel;
                    })
                }
            }
        }]);

app.component('removeSpecificRequestForLocation', {
    controller: 'removeSpecificRequestForLocationController',
    bindings: {parentCtrl: '<'}
});
