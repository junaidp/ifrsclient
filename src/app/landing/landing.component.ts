import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (function($) {

      $("input:checkbox").on('click', function() {
        // in the handler, 'this' refers to the box clicked on
        var $box = $(this);
        if ($box.is(":checked")) {
            // the name of the box is retrieved using the .attr() method
            // as it is assumed and expected to be immutable
            var group = "input:checkbox[name='" + $box.attr("name") + "']";
            // the checked state of the group/box on the other hand will change
            // and the current value is retrieved using .prop() method
            $(group).prop("checked", false);
            $box.prop("checked", true);
        } else {
            $box.prop("checked", false);
        }
    });

       
      // Add smooth scrolling to all links in navbar
      $(".navbar a,a.btn-appoint, .quick-info li a, .overlay-detail a").on('click', function(event) {
    
        var hash = this.hash;
        if (hash) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 900, function() {
            window.location.hash = hash;
          });
        }
    
      });
    
      $(".navbar-collapse a").on('click', function() {
        $(".navbar-collapse.collapse").removeClass('in');
      });
    
      //jQuery to collapse the navbar on scroll
      $(window).scroll(function() {
        if ($(".navbar-default").offset().top > 50) {
          $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
          $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
      });
    
    });
    
    // function readURL(input) {
    //   if (input.files && input.files[0]) {
    //     var reader = new FileReader();
    
    //     reader.onload = function (e) {
    //         $('#blah')
    //             .attr('src', e.target.result);
    //     };
    
    //     reader.readAsDataURL(input.files[0]);
    //   }
    // }
    
    $(document).ready(function () {
      var modal = document.getElementById("apmodal");
      var btn = document.getElementById("myBtn");
      var span = document.getElementsByClassName("close")[0];
      btn.addEventListener('click', function() {
        modal.style.display = "block";
      });
      span.addEventListener('click', function() {
        modal.style.display = "none";
      });
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    });
    $(document).ready(function () {
      var modal = document.getElementById("apmodal");
      var btn = document.getElementById("gold");
      var span = document.getElementsByClassName("close")[0];
      btn.addEventListener('click', function() {
        modal.style.display = "block";
      });
      span.addEventListener('click', function() {
        modal.style.display = "none";
      });
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    });
    $(document).ready(function () {
      var modal = document.getElementById("apmodal");
      var btn = document.getElementById("silver");
      var span = document.getElementsByClassName("close")[0];
      btn.addEventListener('click', function() {
        modal.style.display = "block";
      });
      span.addEventListener('click', function() {
        modal.style.display = "none";
      });
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    });
    $(document).ready(function () {
      var modal = document.getElementById("apmodallogin");
      var btn = document.getElementById("login");
      var span = document.getElementsByClassName("close1")[0];
      btn.addEventListener('click', function() {
        modal.style.display = "block";
      });
      span.addEventListener('click', function() {
        modal.style.display = "none";
      });
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    });
    $(document).ready(function () {
      var modal = document.getElementById("apmodal");
      var btn = document.getElementById("loginnn");
      var span = document.getElementsByClassName("close1")[0];
      btn.addEventListener('click', function() {
        modal.style.display = "block";
      });
      span.addEventListener('click', function() {
        modal.style.display = "none";
      });
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    });
    $(document).ready(function () {
      var modal = document.getElementById("apmodallogin");
      var btn = document.getElementById("login1");
      var span = document.getElementsByClassName("close1")[0];
      btn.addEventListener('click', function() {
        modal.style.display = "block";
      });
      span.addEventListener('click', function() {
        modal.style.display = "none";
      });
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    });
    $(document).ready(function () {
      var modal = document.getElementById("apmodal");
      var btn = document.getElementById("aboutt");
      btn.addEventListener('click', function() {
        modal.style.display = "block";
      });
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    });
    $(document).ready(function () {
      var modal = document.getElementById("companylogin");
      var btn = document.getElementById("companyloginclick");
      var span = document.getElementsByClassName("close2")[0];
      btn.addEventListener('click', function() {
        modal.style.display = "block";
      });
      span.addEventListener = function() {
        modal.style.display = "none";
      }
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    });
    $(document).ready(function () {
      var modal = document.getElementById("companylogin");
      var btn = document.getElementById("companyloginclick1");
      btn.addEventListener('click', function() {
        modal.style.display = "block";
      });
    });
    $(document).ready(function () {
      var modal = document.getElementById("companylogin");
      var btn = document.getElementById("companyloginclick2");
      btn.onclick = function() {
        modal.style.display = "block";
      }
    });

    $( document ).ready(function() {
      $('#mainNavBar').hide();
  });
  }
}
