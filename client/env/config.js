if (!/(&|\?)username=/.test(window.location.search)) {
  var newSearch = window.location.search;
  if (newSearch !== '' & newSearch !== '?') {
    newSearch += '&';
  }

  newSearch += 'username=' + (prompt('What is your name?') || 'anonymous');
  window.location.search = newSearch;
}

$.ajaxPrefilter(function (settings, _, jqXHR) {
  // jqXHR.setRequestHeader("X-Parse-Application-Id", "");
  // jqXHR.setRequestHeader("X-Parse-REST-API-Key", "");
});
