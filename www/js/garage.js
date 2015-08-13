angular.module('starter')

.directive('garage',
        function ($window) {
            return {
                restrict: 'E',
                scope: {
                    doorStatus: '=doorStatus',
                    openDoor: '&'
                },
                template: '',
                link: function ($scope, element) {
                    var elem = element[0],
                    width = $window.innerWidth,
                    params = { width: width, height: width },
                    two = new Two(params).appendTo(elem),
                    svg = $('#asset svg')[0],
                    scale = width / 280,
                    centerX = width / 2,
                    centerY = width / 2,
                    shape = two.interpret(svg).center();

                    shape.translation.set(two.width / 2 - 10, two.height / 2);

                    $scope.$watch('doorStatus', function(newValue, oldValue) {
                        if (newValue == 'CLOSED') {
                            animateToClosed();
                        } else {
                            animateToOpen();
                        }
                    });

                    var y = centerY + 55;
                    var doorGroup = two.makeGroup();
                    for(var i = 1; i <= 6; i++) {
                        var rectangle = two.makeRectangle(centerX - 10, y, 83, 7);
                        rectangle.stroke = '#FFFFFF';
                        doorGroup.add(rectangle);
                        y -= 12;
                    }

                    var animateToClosed = function () {
                        doorGroup.visible = true;
                        two.update();
                    };

                    var animateToOpen = function () {
                        doorGroup.visible = false;
                        two.update();
                    };


                    two.update();
                }
            };
        });

