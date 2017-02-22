'use strict';

angular.module('core').controller('HomeController', ['$scope',
  function ($scope) {
  }
]);

angular.module('songs').controller('SongController', ['$scope', '$stateParams', '$location', 'SongsService',
  function ($scope, $stateParams, $location, SongsService) {
    $scope.create = function (isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'songForm');

        return false;
      }

      var song = new SongsService({
        artistName: this.artistName,
        genre: this.genre,
        songTitle: this.songTitle
      });

      song.$save(function (response) {
        $location.path('fav-songs');
        $scope.artistName = '';
        $scope.genre = '';
        $scope.songTitle = '';
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };
  }
]);
