(function () {
  'use strict';

  angular
    .module('songs')
    .controller('SongsListController', SongsListController);

  SongsListController.$inject = ['SongsService'];

  function SongsListController(SongsService) {
    var vm = this;
    console.log("SongsListController start");
    vm.songs = SongsService.query();
  }
}());
