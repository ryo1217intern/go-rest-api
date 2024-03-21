module.exports = {
  disableEmoji: false,
  maxMessageLength: 128,
  minMessageLength: 2,
  format: "{type}: {emoji}{subject}",
  list: [
    "build",
    "chore",
    "ci",
    "docs",
    "feat",
    "fix",
    "perf",
    "refactor",
    "revert",
    "style",
    "test",
  ],
  questions: ["type", "subject"],
  scopes: [],
  types: {
    feat: {
      description: "機能の追加",
      value: "feat",
      emoji: "💪",
    },
    fix: {
      description: "バグの修正",
      value: "fix",
      emoji: "📌",
    },
    docs: {
      description: "ドキュメントのみの変更",
      value: "docs",
      emoji: "📝",
    },
    style: {
      description:
        "フォーマットの変更（スペース, フォーマット, セミコロンなど）",
      value: "style",
      emoji: "✨",
    },
    refactor: {
      description: "リファクタリング（バグ修正や機能の追加は含まない）",
      value: "refactor",
      emoji: "🛠️",
    },
    perf: {
      description: "パフォーマンス改善のための変更",
      value: "perf",
      emoji: "🛠️",
    },
    test: {
      description: "テストコードの追加・変更・削除",
      value: "test",
      emoji: "✏️",
    },
    build: {
      description: "ビルドシステムや外部依存に関する変更",
      value: "build",
      emoji: "📦",
    },
    ci: {
      description: "CI用の設定やスクリプトに関する変更",
      value: "ci",
      emoji: "♻️",
    },
    chore: {
      description: "その他の変更（ソースコードやテストの変更を含まない）",
      value: "chore",
      emoji: "🔧",
    },
    revert: {
      description: "以前のコミットに復帰した場合",
      value: "revert",
      emoji: "🔹",
    },
  },
};
