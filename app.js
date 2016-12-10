angular.module('myApp', ['ngRoute'])
.config(function($routeProvider){
      $routeProvider.when("/",
              {
                        templateUrl: "pages/home.html",
                      }).when("/About", {
                          templateUrl: "pages/About.html"
                      }).when("/PersonalProjects", {
                          templateUrl: "pages/PersonalProjects.html",
                      }).when("/Blog", {
                          templateUrl: "pages/Blog.html",
                      }).when("/Contact", {
                          templateUrl: "pages/Contact.html"
                      })
                });

