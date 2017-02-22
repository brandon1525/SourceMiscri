'use strict';

angular.module('core').controller('HomeController', ['$scope',
  function ($scope) {
    // This provides Authentication context.
    console.log("HomeController start");
  }
]);

angular.module('songs').controller('SongController', ['$scope', '$stateParams', '$location', 'SongsService',
  function ($scope, $stateParams, $location, SongsService) {
    console.log('SongController start');
    // Create new Song
    $scope.create = function (isValid) {
      console.log('SongController create');
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'songForm');

        return false;
      }

      // Create new Song object
      var song = new SongsService({
        artistName: this.artistName,
        genre: this.genre,
        songTitle: this.songTitle
      });

      // Redirect after save
      song.$save(function (response) {
        $location.path('fav-songs');
        // Clear form fields
        $scope.artistName = '';
        $scope.genre = '';
        $scope.songTitle = '';
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };
  }
]);
