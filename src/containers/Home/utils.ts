import { UseFetchYouTubeAPIResponse } from 'hooks/useFetchYouTubeAPI/types';

export const mapAPIDataToUI = (response: UseFetchYouTubeAPIResponse): any => response.items.map((data) => ({
  id: data.id.videoId,
  title: data.snippet.title,
  author: data.snippet.channelTitle,
  views: data.snippet.publishedAt, // @TODO: Check correct API field
  months: data.snippet.publishedAt,
  thumbUrl: data.snippet.thumbnails.high,
}));
