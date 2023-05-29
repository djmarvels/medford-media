<?php
$ch = curl_init("https://tg.i-c-a.su/rss/video_medford_media/?limit=20");
$xml = curl_exec($ch);
curl_close($ch);
