'use strict';

angular.module('hw13')

  .directive('jbCarusel', function ($compile) {
    return {
      restrict: 'E',
      scope: {
        jbItems: '=',
        jbAction: '&'
      },
      compile: function ($element) {
        var children = $element.children();
        var template =
          angular.element('<div class="jbcontainer" ng-mouseenter="stopAnimation()" ng-mouseleave="startAnimation()">' +
                            '<div ng-repeat="item in jbItems track by item.id">' +
                              '<div ng-class="jbAnimation" class="{{jbclasses[$index]}}" ng-click="jbAction({item: item})">' +
                              '</div>' +
                            '</div>' +
                          '</div>');
        template.children().children().append(children);

        return function ($scope, $element) {
          var newElement = $compile(template)($scope);
          $element.html('');
          $element.append(newElement);
        };
      },
      controller: function($document, $scope, $interval, $timeout) {
        $scope.jbAnimation = 'animate';
        var caruselInterval = undefined;

        $scope.stopAnimation = function () {
          $scope.jbAnimation = '';
          if (caruselInterval !== undefined) {
            $interval.cancel(caruselInterval);
            caruselInterval = undefined;
          }
        };

        $scope.startAnimation = function () {
          $scope.jbAnimation = 'animate';
          $timeout(carusel, 50);    // чтоб анимация началась сразу, а не через 5 сек
          caruselInterval = $interval(carusel, 5000);
        };

        var toggleAnimation = function () {
          if ($document[0].hidden) {
            $scope.stopAnimation();
          } else {
            $scope.startAnimation();
          }
        };

        $document[0].addEventListener('visibilitychange', toggleAnimation);

        $scope.$on('$destroy', function () {
          $document[0].removeEventListener('visibilitychange', toggleAnimation);
        });

        $scope.jbclasses = [
          'jbitem1',
          'jbitem2',
          'jbitem3',
          'jbitem4',
          'jbitem5',
          'jbitem6',
          'jbitem7'
        ];

        var carusel = function () {
            //$scope.jbclasses.unshift($scope.jbclasses.pop());   // сдвиг влево
            $scope.jbclasses.push($scope.jbclasses.shift());    // сдвиг вправо
        };

        toggleAnimation();
      }
    }
  });
