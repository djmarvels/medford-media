<?php
$page = $_GET['page'];
$limit = $_GET['limit'];
$location = 'https://tg.i-c-a.su/rss/video_medford_media/'.$page.'/';
$query = array(
  'limit' => $limit,
);
$cacheFileName = 'rss-cache-page-'.$page.'.txt';
$cacheUpdateMin = 1440;

$results = array();
// Check if the file exists and file timestamp against current time.
if (!file_exists($cacheFileName) || filemtime($cacheFileName) + ($cacheUpdateMin * 60) < time()) {
  // Curl request to get the json.
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $location . '?' . http_build_query($query));
  curl_setopt($ch, CURLOPT_HEADER, 0);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  $contents = curl_exec($ch);
  curl_close($ch);
  // Write to the cache file.
  file_put_contents($cacheFileName, $contents);
  echo $contents;
}
else {
  // Load the results directly from cache.
  echo file_get_contents($cacheFileName);
}