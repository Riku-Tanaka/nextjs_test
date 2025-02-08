import Link from "next/link";
import Layout from "../../components/Layout";

import { getAllPostIds, getPostData } from "../../lib/posts";

// component
export default function Post({ post }) {
  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Layout title={post.title}>
      <p className="m-4">
        {"ID : "}
        {post.id}
      </p>
      <p className="mb-8 text-xl font-bold">{post.title}</p>
      <p className="px-8">{post.body}</p>

      {/* 戻るボタン */}
      {/* https://heroicons.dev/ */}
      <Link href="/blog-page">
        <div className="flex cursor-pointer mt-12">
          <svg
            className="w-6 h-6 mr-3"
            dataSlot="icon"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
            ></path>
          </svg>
          <span>Back to blog-page</span>
        </div>
      </Link>
    </Layout>
  );
}

// getStaticPaths：ビルド時に必要なIDの一覧をAPIから取得する
export async function getStaticPaths() {
  const paths = await getAllPostIds();

  return {
    paths,
    // fallback: idが1~100ある状態で、id:101にアクセスしたときの挙動
    // fallback: force 404を返す
    // fallback: true 動的なコンテンツの取得が必要な場合に有効
    fallback: false,
  };
}

// 同ファイルのコンポーネント「Post」にデータを送る
// 最終的に静的なHTMLファイルがid:1~100まで100ファイル生成される
// npm startすると、事前に100ファイル生成されているのでページ読み込みが速い
export async function getStaticProps({ params }) {
  // const response = await getPostData(params.id);
  // const post = response.post;
  // 上2行と下記は同じ意味（const { post } = await getPostData(params.id);で単純化できる）
  const { post: post } = await getPostData(params.id);
  return {
    props: {
      post,
    },
  };
}
