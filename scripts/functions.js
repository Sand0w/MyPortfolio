function animate()
{
    document.getElementsByClassName('overlay').setAttribute("class", "animation");
}

$(document).on('click', '.open-options', function(event) {
  event.preventDefault();
  $('#modal-options').iziModal('open');
});

$('#modal-options').iziModal({
  headerColor: '#0097CA',
  overlayColor: 'rgba(0, 0, 0, 0.5)',
  fullscreen: true,
  transitionIn: 'fadeInUp',
  transitionOut: 'fadeOutDown',
  iframe: true,
  iframeHeight: 600,
  width: 600,
  iframeURL: 'https://www.netfirst.fr'
});


$(document).on('click', '.open-options-2', function(event) {
  event.preventDefault();
  $('#modal-options-2').iziModal('open');
});

$('#modal-options-2').iziModal({
  headerColor: '#0097CA',
  overlayColor: 'rgba(0, 0, 0, 0.5)',
  fullscreen: true,
  transitionIn: 'fadeInUp',
  transitionOut: 'fadeOutDown',
  iframe: true,
  iframeHeight: 600,
  width: 600,
  iframeURL: 'http://www.taker.epitech.eu'
});

$(document).on('click', '.open-options-3', function(event) {
  event.preventDefault();
  $('#modal-options-3').iziModal('open');
});

$('#modal-options-3').iziModal({
  headerColor: '#0097CA',
  overlayColor: 'rgba(0, 0, 0, 0.5)',
  fullscreen: true,
  transitionIn: 'fadeInUp',
  transitionOut: 'fadeOutDown',
  iframe: true,
  iframeHeight: 600,
  width: 600,
  iframeURL: 'https://www.easyvoyage.com'
});

$(document).on('click', '.open-options-Atos', function(event) {
  event.preventDefault();
  $('#modal-options-4').iziModal('open');
});

$('#modal-options-4').iziModal({
  headerColor: '#0097CA',
  overlayColor: 'rgba(0, 0, 0, 0.5)',
  fullscreen: true,
  transitionIn: 'fadeInUp',
  transitionOut: 'fadeOutDown',
  iframe: true,
  iframeHeight: 600,
  width: 600,
  iframeURL: 'https://atos.net'
});

/*$(document).on('click', '.open-options-4', function(event) {
  event.preventDefault();
  $('#modal-options-2').iziModal('open');
});

$('#modal-options-4').iziModal({
  headerColor: '#0097CA',
  overlayColor: 'rgba(0, 0, 0, 0.5)',
  fullscreen: true,
  transitionIn: 'fadeInUp',
  transitionOut: 'fadeOutDown',
  iframe: true,
  iframeHeight: 600,
  width: 600,
  iframeURL: 'http://taker.epitech.eu/'
});*/



