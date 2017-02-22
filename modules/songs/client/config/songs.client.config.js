(function () {
  'use strict';

  angular
    .module('songs')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'Songs',
      state: 'songs',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'songs', {
      title: 'Fav-songs',
      state: 'songs.list'
    });

    // Add the dropdown create item
    /*menuService.addSubMenuItem('topbar', 'songs', {
      title: 'Create Song',
      state: 'songs.create'
    });*/
  }
}());
