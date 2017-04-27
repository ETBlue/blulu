// async script loading
var tag = document.createElement('script');
tag.id = 'youtube_iframe_api';
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

map = [
  {
    id: 'video_alpha1',
    toc: 'alpha1'
  },
  {
    id: 'video_alpha2',
    toc: 'alpha2'
  },
  {
    id: 'video_beta',
    toc: 'beta'
  },
  {
    id: 'video_gamma',
    toc: 'gamma'
  },
];

videos={};

function onYouTubeIframeAPIReady() {

  map.forEach(function(item){
    videos[item.toc] = new YT.Player(item.id, {
      events: {
        'onReady': onPlayerReady(item.toc),
      }
    });
  });
}

function onPlayerReady(id) {
  $(function(){
    $('[data-toc_id="' + id + '"] .item').on('click tap', function () {
      var timestamp = $(this).data('timestamp');
      videos[id].playVideo().seekTo(timestamp, true);
    });
  });
}
