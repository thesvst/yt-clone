export type UseFetchYouTubeAPIResult = {
  loading: boolean,
  request: () => Promise<UseFetchYouTubeAPIResponse>
};

type TPageInfo = {
  totalResults: number,
  resultsPerPage: number,
};

enum EThumbnailSizes {
  default = 'default',
  medium = 'medium',
  high = 'high',
}

type TThumbnail = {
  url: string,
  width: number,
  height: number,
};

type TItem = {
  kind: string,
  etag: string,
  id: {
    kind: string,
    videoId: string,
  },
  snippet: {
    publishedAt: string,
    channelId: string,
    title: string,
    description: string,
    thumbnails: {
      [key in EThumbnailSizes]: TThumbnail
    },
    channelTitle: string,
    liveBroadcastContent: string,
    publishTime: string,
  }
};

export interface UseFetchYouTubeAPIResponse {
  kind: string,
  etag: string,
  nextPageToken: string,
  pageInfo: TPageInfo
  items: TItem[],
}
