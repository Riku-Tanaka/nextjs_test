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
      {/* TODO: indexからpタグの内容を受け取る */}
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>
    </div>
  );
}
