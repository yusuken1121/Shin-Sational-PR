import { API_URL } from "@/config/ENV";

/**
 * 指定されたAPIエンドポイントに対してフェッチリクエストを送信します。
 *
 * @param endpoint - 呼び出すAPIのエンドポイントパス。
 * @param options - フェッチリクエストのオプション。デフォルトは空オブジェクト。
 * @returns レスポンスのJSONデータを返します。
 * @throws HTTPエラーが発生した場合にエラーをスローします。
 */

export const apiClientFetch = async (
  endpoint: string,
  options: RequestInit = {}
) => {
  const baseURL = API_URL || "http://localhost:3001";
  console.log(baseURL, "⭐️baseURL");

  const { headers, ...restOptions } = options;
  const response = await fetch(`${baseURL}/api/${endpoint}`, {
    ...restOptions,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};
