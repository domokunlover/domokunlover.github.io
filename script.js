const tabTitle = document.title;
if (tabTitle !== "TITLE") {
  document.title = tabTitle + " — cobweb.crawler";
}

(function($){
$(document).ready(function(){
$("[title]").style_my_tooltips({
tip_follows_cursor: true,
tip_delay_time:0,
tip_fade_speed:0,
attribute:"title"
});
});
})(jQuery);
