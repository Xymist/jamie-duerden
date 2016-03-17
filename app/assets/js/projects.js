'use strict';
angular.module('jamieApp.projects', []).controller('ProjectCtrl', function ($scope) {
    $scope.pastProjects = [
        {"title":"Citizens Advice VoIP", "description":"An initiative to provide an up-to-date communications system to Citizens Advice Waverley, with a view to improving sustainability and standardising across the district.", "imageLink":"/assets/img/waverley-logo.png", "link":""},
        {"title":"Citizens Advice Kiosks", "description":"In partnership with other charities and several Waverley GP surgeries, I headed the team responsible for commissioning and installing a number of self-service advice terminals.", "imageLink":"/assets/img/waverley-logo.png", "link":"http://gp-farnham.3rdsectorit.co.uk/#/home"},
        {"title":"Waverley Advice Website", "description":"Under the banner of 'Get Advice In Waverley' this project aimed to enable the delivery of 'joined-up advice' across Waverley, with information available to the general public and an inter-organisation referral system behind the scenes.", "imageLink":"/assets/img/gaiw-logo.png", "link":"http://getadviceinwaverley.org.uk"},
        {"title":"Maid in Sheffield", "description":"A Sheffield-based startup of which I was the technical director. I created the website and integrated the billing system.", "imageLink":"/assets/img/mis-transparent-small.png", "link":""},
        {"title":"The Haslemere Cellar", "description":"Creation of a website and configuration of an integrated stock control system for a successful local business", "imageLink":"/assets/img/shop-image.jpg", "link":"http://haslemerecellar.co.uk"}
    ];
    $scope.projects = [
        {"title":"This website!", "description":"As is probably obvious, this place is still in development, which is why it changes size, shape and framework occasionally. As a testbed, it will likely never be considered 'done', or even 'good'.", "imageLink":"/assets/img/logo.png", "link":"https://jamieduerden.co.uk"},
        {"title":"My Blog", "description":"I attempt to write as often as I have something interesting to say; principally this is a tool for adjusting my writing styles.", "imageLink":"/assets/img/logo.png", "link":"https://blog.jamieduerden.co.uk"},
        {"title":"Kiosk Data Logger", "description":"As a follow-on to the kiosk project headed by Citizens Advice Waverley, data from multiple sources are being funnelled in to the Better Outcomes initiative. This is the service which collects the kiosk data and funnels it to a central repository.","imageLink":"/assets/img/logo.png", "link":"https://github.com/Xymist/caw-kiosk-logger"},
        {"title":"Kiosk Data Webservice", "description":"As a follow-on to the kiosk project headed by Citizens Advice Waverley, data from multiple sources are being funnelled in to the Better Outcomes initiative. This is the web service which displays end-user accessible interpretations of the log data.","imageLink":"/assets/img/logo.png", "link":"https://github.com/Xymist/caw-kiosk-logsite"}

    ];
    $scope.futureProjects = [

    ];
});
