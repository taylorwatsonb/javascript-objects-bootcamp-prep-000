var recipes = { mj: "thriller" , janet: "lonely" , beyonce: "blow"};

function updateObjectWithKeyAndValue(object, key, value) {
   recipes[key] = value;
  return recipes;
}
function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
}