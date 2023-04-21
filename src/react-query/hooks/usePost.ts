import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }

interface PostQuery {
  pageSize: number;
}

const usePost = (query: PostQuery) => useInfiniteQuery<Post[], Error>({
    queryKey: ["posts", query],
    queryFn: ({pageParam = 1}) => axios
    .get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _start: (pageParam - 1) * query.pageSize,
        _limit: query.pageSize
      }
    })
    .then((res) => res.data),
    staleTime: 1 * 60 * 1000, //1min
    keepPreviousData: true,
    getNextPageParam: (lastpage, allpages) => {
      return lastpage.length > 0 ? allpages.length + 1 : undefined;
    }
})

export default usePost;