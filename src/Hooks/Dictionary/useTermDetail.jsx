import axios from "axios";

const fetchTermDetail = async (query) => {
  const res = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/terms/keyword?keyword=${encodeURIComponent(query)}`
  );
  const data = res.data;

  if (data.data && data.data.length > 0) {
    return {
      title: data.data[0].termNm,
      detail: data.data[0].termExplain,
      difficulty: data.data[0].termDifficulty,
      like: data.data[0].termLike,
    };
  } else {
    return null;
  }
};

// export default function useFetchTermDetail(query) {
//   return useQuery({
//     queryKey: ["termDetail", query],
//     queryFn: () => fetchTermDetail(query),
//     enabled: !!query, // query가 있을 때만 실행
//     retry: false, // 원하면 재시도 설정
//   });
// }

export default fetchTermDetail;