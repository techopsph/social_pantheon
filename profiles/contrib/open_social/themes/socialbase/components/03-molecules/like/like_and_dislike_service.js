/**
 * @file
 * Like and dislike icons behavior.
 */
(function ($, Drupal) {

  window.likeAndDislikeService = (function() {
    function likeAndDislikeService() {}
    likeAndDislikeService.vote = function(entity_id, entity_type, tag) {
      $.ajax({
        type: "GET",
        url: drupalSettings.path.baseUrl + 'like_and_dislike/' + entity_type + '/' + tag + '/' + entity_id,
        success: function(response) {
          // Expected response is a json object where likes is the new number
          // of likes, dislikes is the new number of dislikes, message_type is
          // the type of message to display ("status" or "warning") and message
          // is the message to display.
          // @todo: Add/remove classes via jQuery.
          $('#like-container-' + entity_type + '-' + entity_id + ' a').get(0).className = response.operation.like;
          $('#dislike-container-' + entity_type + '-' + entity_id + ' a').get(0).className = response.operation.dislike;

          // Updates the likes and dislikes count.
          if (response.likes == '1') {
            var countText = Drupal.t(' like');
          } else {
            var countText = Drupal.t(' likes');
          }
          $('#like-container-' + entity_type + '-' + entity_id).nextAll('.vote__count').find('a').html(response.likes + countText).attr('data-dialog-options', '{"title":"' + response.likes + countText + '", "width":"auto"}');
        }
      });
    };
    return likeAndDislikeService;
  })();

})(jQuery, Drupal);
