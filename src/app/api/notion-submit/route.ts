import { notion } from "@/config/backend/notion";
import { NOTION_DATABASE_ID } from "@/config/ENV";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
  }

  console.log(NOTION_DATABASE_ID, "⭐️NOTION_DATABASE_ID");

  try {
    // フォームから送られた内容を取得
    const { name, email, message } = await req.json();
    if (!NOTION_DATABASE_ID) {
      return NextResponse.json(
        { error: "Databaseが設定されていません。" },
        { status: 500 }
      );
    }

    // Notion のデータベースにページを作成
    const response = await notion.pages.create({
      parent: { database_id: NOTION_DATABASE_ID },
      properties: {
        // データベース側で「Title」など適切なプロパティ名を設定しておく
        件名: {
          title: [
            {
              text: {
                content: "title", // この "title" を動的にする場合、適切な変数を使用してください
              },
            },
          ],
        },
        名前: {
          rich_text: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Email: {
          email: email,
        },
        メッセージ: {
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
      },
    });

    return NextResponse.json({ message: "success to send" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
