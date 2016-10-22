angular.module('myApp', ['ngRoute'])
.config(function($routeProvider){
      $routeProvider.when("/",
              {
                        templateUrl: "home.html",
                      }).when("/About", {
                          templateUrl: "About.html"
                      }).when("/PersonalProjects", {
                          templateUrl: "PersonalProjects.html",
                      }).when("/Blog", {
                          templateUrl: "Blog.html",
                      }).when("/Contact", {
                          templateUrl: "Contact.html"
                      })
                });
