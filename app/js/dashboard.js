/* globals Chart:false, feather:false */

(function () {
  'use strict'

  //---------- for hamburger menu ---------
  $('.icon_menu').click(function(){
    $('.sidebar').toggleClass('show-hide-sidebar');
    $('.logo').toggleClass('sm-logo');

    $('body').toggleClass('visiable-sm-menu ');
    $('.header__right').toggleClass('extend-header');
  })

  // $('.collapse-menu ').click(function(){
  //   $('.header__icons').toggleClass('header__icons--show');
  //   $('.content').toggleClass('visiable-header-icon');
  //   $('.sidebar').toggleClass('visiable-header-icon');
  // })


  //---------- for icon ---------
  feather.replace();

  //----------- for Graphs ---------------------
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      datasets: [{
        data: [
          15339,
          21345,
          18483,
          24003,
          23489,
          24092,
          12034
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
}())
