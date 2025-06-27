# API設計書
家計簿アプリを管理するためのREST風APIです

## 1. API概要
- **ベースURL:** `http://localhost:4000/`
- **データ形式:** JSON
- **バージョン:** v1

## 2リソース名　
transactions	取引データ（収入・支出）


## 3. エンドポイント一覧
🏴**3-1. GET /api/transactions　　　（全取引データを取得 ）**

レスポンス例：
[
  {
    "id": 1,
    "date": "2025-06-01",
    "description": "給料",
    "amount": 300000,
    "type": "income",
    "category": "収入"
  },
  {
    "id": 2,
    "date": "2025-06-05",
    "description": "家賃",
    "amount": -80000,
    "type": "expense",
    "category": "光熱費"
  },

  // …
]


🏴**3-2. GET /api/transactions/:id　（指定IDの取引を取得 ）**

レスポンス例：
{
  "id": 3,
  "date": "2025-06-10",
  "description": "食費",
  "amount": -15000,
  "type": "expense",
  "category": "食費"
}


🏴**3-3.POST /api/transactions　　　（新しい取引を登録 ）**

リクエスト例：
{
  "date": "2025-07-15",
  "description": "電気代",
  "amount": -10000,
  "type": "expense",
  "category": "光熱費"
}

レスポンス例：
{
  "id": 6,
  "date": "2025-07-15",
  "description": "電気代",
  "amount": -10000,
  "type": "expense",
  "category": "光熱費"
}


🏴**3-4.PUT /api/transactions　　　（指定IDの取引を更新 ）**

リクエスト例：
{
  "date": "2025-06-10",
  "description": "外食",
  "amount": -12000,
  "type": "expense",
  "category": "交際費"
}

レスポンス例：
{
  "id": 3,
  "date": "2025-06-10",
  "description": "外食",
  "amount": -12000,
  "type": "expense",
  "category": "交際費"
}


🏴**3-5.DELETE /api/transactions　　（指定IDの取引を削除 ）**

レスポンス例：
{ "message": "Transaction deleted successfully." }

