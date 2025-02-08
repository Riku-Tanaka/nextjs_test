import Layout from "../components/Layout";
import Post from "../components/Post";
import { getAllPostData } from "../lib/posts";

const Blog = ({ posts }) => {
  return (
    <Layout title="BLOG">
      <ul className="m-10">
        {/* postsが存在する場合、各postのId,titleをPostに送っている */}
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  );
};

export default Blog;

// getStaticProps：サーバーサイドでビルド時に1回だけ実行される処理（必ずサーバーサイドで実行される、Pages内でのみ使用可能）
// npm run devではリクエスト毎に実行される
// npm run buildでは静的なHTMLに埋め込まれる。「.next/server/pages/blog-page.html」
// ビルド時にAPIにアクセスしデータを取得、HTMLに埋め込んで事前にHTMLファイルを生成する。事前に生成しているため、高速でページにアクセスすることが可能。
// npm start プロダクションのサーバーで起動してもビルドした内容が表示される。
export async function getStaticProps() {
  const posts = await getAllPostData();
  return {
    props: { posts },
  };
}
