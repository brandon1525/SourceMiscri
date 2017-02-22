(function () {
  'use strict';

  // Songs controller
  angular
    .module('songs')
    .controller('SongsController', SongsController);

  SongsController.$inject = ['$scope', '$state', '$window', 'songResolve'];

  function SongsController ($scope, $state, $window, song) {
    console.log("SongsController start");
    var vm = this;

    vm.song = song;
    vm.error = null;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;

    // Remove existing Song
    function remove() {
      if ($window.confirm('Are you sure you want to delete?')) {
        vm.song.$remove($state.go('songs.list'));
      }
    }

    // Save Song
    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.songForm');
        return false;
      }

      // TODO: move create/update logic to service
      if (vm.song._id) {
        vm.song.$update(successCallback, errorCallback);
      } else {
        vm.song.$save(successCallback, errorCallback);
      }

      function successCallback(res) {
        $state.go('songs.view', {
          songId: res._id
        });
      }

      function errorCallback(res) {
        vm.error = res.data.message;
      }
    }
  }
}());
