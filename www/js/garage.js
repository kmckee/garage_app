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
                    width = $window.innerWidth;


                    $scope.$watch('doorStatus', function(newValue, oldValue) {
                        if (newValue == 'CLOSED') {
                            animateToClosed();
                        } else {
                            animateToOpen();
                        }
                    });

                    var animateToClosed = function () {
                    };

                    var animateToOpen = function () {
                    };

                    drawIconAndReturnDoor(elem);


                    function drawIconAndReturnDoor(el) {
                        var rsr = Raphael(el, '810.527', '862.878');

                        var group_a = rsr.set();
                        var ellipse_h = rsr.ellipse(405.264, 828.441, 405.264, 27.105).attr({fill: '','fill-opacity': '',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).data('id', 'ellipse_h');
                        group_a.attr({'name': 'group_a'});
                        var group_b = rsr.set();
                        group_b.attr({'parent': 'group_a','name': 'group_b'});
                        var group_c = rsr.set();
                        var circle_i = rsr.circle(405, 400, 400).attr({fill: '#009DFF',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).data('id', 'circle_i');
                        group_c.attr({'parent': 'group_a','name': 'group_c'});
                        var group_d = rsr.set();
                        var circle_j = rsr.circle(405, 400, 382).attr({fill: '#0099FF',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).data('id', 'circle_j');
                        var path_k = rsr.path("M405.264,783.953c-51.743,0-101.938-10.134-149.192-30.121      c-45.642-19.305-86.632-46.94-121.832-82.141c-35.2-35.2-62.836-76.19-82.141-121.832      c-19.986-47.253-30.121-97.449-30.121-149.191c0-51.744,10.134-101.939,30.121-149.193      c19.305-45.641,46.941-86.631,82.141-121.831c35.2-35.2,76.19-62.837,121.832-82.142c47.253-19.986,97.449-30.12,149.192-30.12      c51.744,0,101.939,10.134,149.193,30.12c45.641,19.305,86.631,46.941,121.832,82.142c35.199,35.2,62.836,76.19,82.141,121.831      c19.986,47.254,30.121,97.449,30.121,149.193c0,51.742-10.135,101.938-30.121,149.191      c-19.305,45.642-46.941,86.632-82.141,121.832c-35.201,35.2-76.191,62.836-121.832,82.141      C507.203,773.819,457.008,783.953,405.264,783.953z M405.264,18.382c-210.793,0-382.286,171.493-382.286,382.286      s171.493,382.285,382.286,382.285s382.287-171.492,382.287-382.285S616.057,18.382,405.264,18.382z").attr({fill: '','fill-opacity': '',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_k');
                        group_d.attr({'parent': 'group_a','name': 'group_d'});
                        var group_e = rsr.set();
                        var circle_l = rsr.circle(405, 400, 382).attr({fill: '#0099FF',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).data('id', 'circle_l');
                        var path_m = rsr.path("M405.264,783.953c-51.743,0-101.938-10.134-149.192-30.121     c-45.642-19.305-86.632-46.94-121.832-82.141c-35.2-35.2-62.836-76.19-82.141-121.832     c-19.986-47.253-30.121-97.449-30.121-149.191c0-51.744,10.134-101.939,30.121-149.193     c19.305-45.641,46.941-86.631,82.141-121.831c35.2-35.2,76.19-62.837,121.832-82.142c47.253-19.986,97.449-30.12,149.192-30.12     c51.744,0,101.939,10.134,149.193,30.12c45.641,19.305,86.631,46.941,121.832,82.142c35.199,35.2,62.836,76.19,82.141,121.831     c19.986,47.254,30.121,97.449,30.121,149.193c0,51.742-10.135,101.938-30.121,149.191     c-19.305,45.642-46.941,86.632-82.141,121.832c-35.201,35.2-76.191,62.836-121.832,82.141     C507.203,773.819,457.008,783.953,405.264,783.953z M405.264,18.382c-210.793,0-382.286,171.493-382.286,382.286     s171.493,382.285,382.286,382.285s382.287-171.492,382.287-382.285S616.057,18.382,405.264,18.382z").attr({fill: '','fill-opacity': '',parent: 'group_a','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_m');
                        group_e.attr({'parent': 'group_a','name': 'group_e'});
                        var group_f = rsr.set();
                        var path_n = rsr.path("M404.975,126.167L168.428,329.788v344.074h41.138c0-10.864,0-4.62,0-22.665c0-87.828,0-267.689,0-267.689   c0-10.676,15.85-14.757,26.529-14.757h345.647c10.68,0,15.213,4.081,15.213,14.757c0,0,0,193.393,0,264.328   c0,15.293,0,22.403,0,26.026h44.566V329.788L404.975,126.167z").attr({fill: '#FFFFFF',parent: 'group_f','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_n');

                        var rect_o = rsr.rect(231.897, 636.881, 346.731, 32.906).attr({x: '231.897',y: '636.881',fill: '#FFFFFF',parent: 'group_f','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_o');
                        var rect_p = rsr.rect(231.897, 596.75, 346.731, 32.906).attr({x: '231.897',y: '596.75',fill: '#FFFFFF',parent: 'group_f','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_p');
                        var rect_q = rsr.rect(231.897, 556.616, 346.731, 32.906).attr({x: '231.897',y: '556.616',fill: '#FFFFFF',parent: 'group_f','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_q');
                        var rect_r = rsr.rect(231.897, 516.485, 346.731, 32.909).attr({x: '231.897',y: '516.485',fill: '#FFFFFF',parent: 'group_f','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_r');
                        var rect_s = rsr.rect(231.897, 476.357, 346.731, 32.906).attr({x: '231.897',y: '476.357',fill: '#FFFFFF',parent: 'group_f','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_s');
                        var rect_t = rsr.rect(231.897, 436.224, 346.731, 32.109).attr({x: '231.897',y: '436.224',fill: '#FFFFFF',parent: 'group_f','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_t');
                        var rect_u = rsr.rect(231.897, 396.096, 346.731, 32.106).attr({x: '231.897',y: '396.096',fill: '#FFFFFF',parent: 'group_f','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_u');
                        group_f.attr({'name': 'group_f'});
                        var group_g = rsr.set();
                        var path_v = rsr.path("M417.765,79.422c-6.003-6.989-15.131-8.993-20.384-4.475L125.475,308.601    c-5.256,4.517-4.646,13.84,1.358,20.829l0.188,0.221c6.008,6.989,15.136,8.993,20.389,4.477l271.904-233.653    c5.256-4.518,4.65-13.842-1.353-20.83L417.765,79.422z").attr({fill: '#FFFFFF',parent: 'group_f','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_v');
                        var path_w = rsr.path("M681.62,330.253c6.046-6.948,6.709-16.266,1.493-20.803L413.074,74.623    c-5.223-4.541-14.355-2.583-20.402,4.367l-0.192,0.223c-6.045,6.952-6.714,16.272-1.495,20.807l270.043,234.83    c5.22,4.538,14.353,2.582,20.398-4.369L681.62,330.253z").attr({fill: '#FFFFFF',parent: 'group_f','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_w');
                        group_g.attr({'parent': 'group_f','name': 'group_g'});


                        var rsrGroups = [group_a,group_b,group_c,group_d,group_e,group_f,group_g];
                        group_a.push(
                                ellipse_h 
                                );
                        group_b.push(
                                );
                        group_c.push(
                                circle_i 
                                );
                        group_d.push(
                                circle_j ,
                                path_k 
                                );
                        group_e.push(
                                circle_l ,
                                path_m ,
                                path_n 
                                );
                        group_f.push(
                                rect_o ,
                                rect_p ,
                                rect_q ,
                                rect_r ,
                                rect_s ,
                                rect_t ,
                                rect_u 
                                );
                        group_g.push(
                                path_v ,
                                path_w 
                                );


                        return group_f;
                    }
                }
            };
        });

