"use strict";define(["jquery","av"],function(n,e){function t(n,e){o&&window.clearTimeout(o),o=setTimeout(function(){o=null,n()},e)}function r(n){""!==n&&u(n).then(a)}function i(n){var e=n.attributes;return'\n    <li data-id="'+n.id+'">\n      <a href="./song.html?id='+n.id+'">\n        '+e.name+" - "+e.singer+"\n      </a>\n    </li>\n  "}function u(n){var t=new e.Query("Song");t.contains("name",n);var r=new e.Query("Song");return r.contains("singer",n),e.Query.or(t,r).find()}function a(e){if(n("#searchResult").empty(),0===e.length)n("#searchResult").html("没有结果");else for(var t=0;t<e.length;t++){var r=i(e[t]);n("#searchResult").append(r)}}var o=null;return function(){n("input#search").on("input",function(e){t(function(){r(n(e.currentTarget).val().trim())},400)})}});