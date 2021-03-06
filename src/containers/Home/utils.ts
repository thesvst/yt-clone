import { UseFetchYouTubeAPIResponse } from 'hooks/useFetchYouTubeAPI/types';

import { TMovie } from '@ui/components/Movie/view';

export const mapAPIDataToUI = (response: UseFetchYouTubeAPIResponse): TMovie[] =>
  response.items.map((data) => ({
    id: data.id.videoId,
    title: data.snippet.title,
    author: data.snippet.channelTitle,
    publishedAt: data.snippet.publishedAt,
    thumbUrl: data.snippet.thumbnails.high.url,
    description: data.snippet.description,
  }));
