// サーバーサイドのフェッチであるため、node-fetch
// import fetch from "node-fetch";

// apiエンドポイント
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// 一覧を取得
export async function getAllPostData() {
  const res = await fetch(new URL(apiUrl));
  // JSON形式に変換
  const posts = await res.json();
  return posts;
}

// ID情報を取得。フィールドに必ずparamsを追加する
export async function getAllPostIds() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();

  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

// ID毎にデータを取得
export async function getPostData(id) {
  // 詳細データのためidを含める
  const res = await fetch(new URL(`${apiUrl}/${id}/`));
  const post = await res.json();

  return {
    post,
  };
}
