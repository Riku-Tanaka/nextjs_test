import Head from "next/head";
import Link from "next/link";

export default function Layout({
  children,
  title = "HP by Nextjs default_value",
}) {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
      {/* HeadはNextjsの機能 ブラウザ名 */}
      <Head>
        <title>{title}</title>
      </Head>
      {/* ヘッダー部分 */}
      <header>
        <nav className="bg-gray-800 w-screen">
          <div className="flex items-center pl-8 h-14">
            {/* クライアントサイドナビゲーションによってリフレッシュなしに高速で遷移している */}
            <div className="flex space-x-4">
              {/* LinkはNextjsの機能 */}
              <Link href="/">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  HOME
                </a>
              </Link>
              {/* pages内に作成したファイル名がそのままパス名に対応している */}
              <Link href="/blog-page">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  BLOG
                </a>
              </Link>
              <Link href="/contact-page">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  CONTACT
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      {/* index.jsからpタグの内容を受け取る */}
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>
      {/* フッター */}
      <footer className="w-full h-12 flex justify-center items-center border-t">
        <a
          className="flex items-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className="h-4 ml-2">
            <img src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
