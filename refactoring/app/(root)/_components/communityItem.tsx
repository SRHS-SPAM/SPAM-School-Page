
const CommunityItem = () => {
  const rows = [
    // You would populate this array with your data
    { gaysipan: "공지", id: 'msg2324', date: '2023.06.08', view: '271268', good: '24', title: '내가 왜 디자인을 하야하는지에 관하여' },
    { gaysipan: "자유", id: 'jmin0714', date: '2023.07.14', view: '271268', good: '0', title: '디자인이 하기 싫은 한 인물' },
    { gaysipan: "공지", id: 'mayu0714', date: '2023.06.08', view: '271268', good: '24', title: 'tlqkf 윤재국' },
    { gaysipan: "공지", id: 'msg2324', date: '2023.06.08', view: '271268', good: '24', title: '내가 왜 디자인을 하야하는지에 관하여' },
    { gaysipan: "공지", id: 'msg2324', date: '2023.06.08', view: '271268', good: '24', title: '내가 왜 디자인을 하야하는지에 관하여' },
    { gaysipan: "공지", id: 'msg2324', date: '2023.06.08', view: '271268', good: '24', title: '내가 왜 디자인을 하야하는지에 관하여' },
    { gaysipan: "공지", id: 'msg2324', date: '2023.06.08', view: '271268', good: '24', title: '내가 왜 디자인을 하야하는지에 관하여' },
    { gaysipan: "공지", id: 'msg2324', date: '2023.06.08', view: '271268', good: '24', title: '내가 왜 디자인을 하야하는지에 관하여' },
    { gaysipan: "공지", id: 'msg2324', date: '2023.06.08', view: '271268', good: '24', title: '내가 왜 디자인을 하야하는지에 관하여' },
    { gaysipan: "공지", id: 'msg2324', date: '2023.06.08', view: '271268', good: '24', title: '내가 왜 디자인을 하야하는지에 관하여' },
    // Add more row objects here
  ];

  return (
    <div className="p-10 w-full overflow-x-auto flex flex-col drop-shadow-2xl rounded-2xl bg-white">
      <p className="text-2xl font-bold">커뮤니티</p>
      <table className="bg-white mt-8 ">
        <thead>
          <tr className="border-b-2 font-normal border-yellow-300">
            <th className="py-2 px-4">게시판</th>
            <th className="py-2 px-4">제목</th>
            <th className="py-2 px-4">작성자</th>
            <th className="py-2 px-4">작성일</th>
            <th className="py-2 px-4">조회수</th>
            <th className="py-2 px-4">추천</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="text-center">
              <td className="py-2 px-4">{row.gaysipan}</td>
              <td className="py-2 px-4 text-start">{row.title}</td>
              <td className="py-2 px-4">{row.id}</td>
              <td className="py-2 px-4">{row.date}</td>
              <td className="py-2 px-4">{row.view}</td>
              <td className="py-2 px-4">{row.good}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommunityItem;