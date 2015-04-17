'use strict';

angular.module('hw13')
  .controller('mainCtrl', function () {
    this.cards = [
      {
        id: Math.random(),
        image: 'asserts/images/ermac.gif',
        phone: 'XABZCBXACZ',
        name: 'Ermac'
      },
      {
        id: Math.random(),
        image: 'asserts/images/jade.gif',
        phone: 'CXAZZCBBXZ',
        name: 'Jade'
      },
      {
        id: Math.random(),
        image: 'asserts/images/kitana.gif',
        phone: 'XBZBCBABXB',
        name: 'Kitana'
      },
      {
        id: Math.random(),
        image: 'asserts/images/mileena.gif',
        phone: 'AAXBZCZBXA',
        name: 'Mileena'
      },
      {
        id: Math.random(),
        image: 'asserts/images/reptile.gif',
        phone: 'BZZBXACCBA',
        name: 'Reptile'
      },
      {
        id: Math.random(),
        image: 'asserts/images/scorpion.gif',
        phone: 'XBZZCZXXAX',
        name: 'Scorpion'
      },
      {
        id: Math.random(),
        image: 'asserts/images/subzero.gif',
        phone: 'AXBCCZZAXA',
        name: 'Sub-Zero'
      }
    ];

    this.selectCard = function (item) {
      alert('Selected card is ' + item.id);
    };
  });
