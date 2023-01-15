import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));


function createData(name, author, recommender, genre, url) {
  return { name, author, recommender, genre, url };
}


const rows = [
  createData(
    // 書籍名
    "ゼロ・トゥ・ワン　君はゼロから何を生み出せるか",
    // 著者
    "ピーター・ティール",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "イノベーション",
    <a href="www.amazon.co.jp/dp/B00NQ3QONK" target="_blank" rel="noreferrer">
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "[新訳]ローマ帝国衰亡史",
    // 著者
    "エドワード・ギボン",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "歴史",
    <a
      href="https://www.amazon.co.jp/dp/4569900631"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "誰が文明を創ったか",
    // 著者
    "ウィル・デューラント",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "歴史",
    <a
      href="https://www.amazon.co.jp/dp/4569637574"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "歴史の大局を見渡す ──人類の遺産の創造とその記録",
    // 著者
    "ウィル・デュラント",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "歴史",
    <a
      href="https://www.amazon.co.jp/dp/B075JCTJ4X"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "アインシュタイン その生涯と宇宙 上下",
    // 著者
    "ウォルター アイザックソン",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "歴史の人",
    <a
      href="https://www.amazon.co.jp/dp/4270006498"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "スティーブ・ジョブズ　I&II",
    // 著者
    "ウォルター・アイザックソン",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "歴史の人",
    <a
      href="https://www.amazon.co.jp/dp/B009GXM2AS"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "[スターリン―赤い皇帝と廷臣たち〈上〉〈下〉",
    // 著者
    "サイモン・セバーグ モンテフィオーリ",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "歴史の人",
    <a
      href="https://www.amazon.co.jp/dp/4560080453"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "エカチェリーナ大帝(上)(下): ある女の肖像",
    // 著者
    "ロバート・K・マッシー",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "歴史の人",
    <a
      href="https://www.amazon.co.jp/dp/4560083770"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "ファウンデーション 銀河帝国興亡史　1-3",
    // 著者
    " アイザック アシモフ",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "SF",
    <a
      href="https://www.amazon.co.jp/dp/B00N4FBCO6"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "デューン　砂の惑星〔新訳版〕 上中下 デューン・シリーズ (ハヤカワ文庫SF)",
    // 著者
    "フランク ハーバート",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "SF",
    <a
      href="https://www.amazon.co.jp/dp/B09HGR4C6Y"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "異星の客 (創元SF文庫) (創元推理文庫 618-3)",
    // 著者
    " ロバート A.ハインライン",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "SF",
    <a
      href="https://www.amazon.co.jp/dp/4488618030"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "月は無慈悲な夜の女王",
    // 著者
    "ロバート・A. ハインライン",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "SF",
    <a
      href="https://www.amazon.co.jp/dp/4150117489"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "銀河ヒッチハイク・ガイド 銀河ヒッチハイクガイドシリーズ 1-5",
    // 著者
    "ダグラス・アダムス",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "SF",
    <a
      href="https://www.amazon.co.jp/dp/B00N0XOP4G"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "肩をすくめるアトラス 第一部-第三部",
    // 著者
    "アイン・ランド",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "SF",
    <a
      href="https://www.amazon.co.jp/dp/4908222010"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "ゲーム・プレイヤー",
    // 著者
    "イアン・M. バンクス",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "SF",
    <a
      href="https://www.amazon.co.jp/dp/4042886019"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "点火! ―液体燃料ロケット推進剤の開発秘話",
    // 著者
    "ジョン・D・クラーク",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "科学",
    <a
      href="https://www.amazon.co.jp/dp/4910612017"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "ステンレス・スチール・ラット",
    // 著者
    "ハリイ・ハリスン",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "SF",
    <a
      href="https://www.amazon.co.jp/dp/B000J8LZYI"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "世界を騙しつづける科学者たち 上下",
    // 著者
    "ナオミ・オレスケス+エリック・M・コンウェイ",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "科学",
    <a
      href="https://www.amazon.co.jp/dp/4903063526"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "デーモン(上)(下)",
    // 著者
    "ダニエル・スアレース",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "SF",
    <a
      href="https://www.amazon.co.jp/dp/4062770296"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "広い宇宙に地球人しか見当たらない75の理由",
    // 著者
    "スティーヴン・ウェッブ",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "科学",
    <a
      href="https://www.amazon.co.jp/dp/4791770773?"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "機械が止まる",
    // 著者
    "E.M.フォースター",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "SF",
    <a
      href="https://www.amazon.co.jp/dp/B081MXB53G"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "七王国の玉座　1−2",
    // 著者
    "ジョージ・Ｒ・Ｒ・マーティン",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "SF",
    <a
      href="https://www.amazon.co.jp/dp/B009DELINC"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "指輪物語1 旅の仲間 全10巻",
    // 著者
    "J・R・R・トールキン",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "SF",
    <a
      href="https://www.amazon.co.jp/dp/4566023893"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "王狼たちの戦旗　1−2",
    // 著者
    "ジョージ・Ｒ・Ｒ・マーティン",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "SF",
    <a
      href="https://www.amazon.co.jp/dp/B00AO5R6H6"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "竜との舞踏 氷と炎の歌 上中下",
    // 著者
    "ジョージ Ｒ Ｒ マーティン",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "SF",
    <a
      href="https://www.amazon.co.jp/dp/B01LW2R4BS"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "構造の世界―なぜ物体は崩れ落ちないでいられるか",
    // 著者
    " ジェイムス・エドワード ゴードン",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "科学",
    <a
      href="https://www.amazon.co.jp/dp/4621036432?"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "この宇宙の片隅に ―宇宙の始まりから生命の意味を考える50章",
    // 著者
    "ショーン・キャロル",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "科学",
    <a
      href="https://www.amazon.co.jp/dp/479177020X"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "LIFE3.0──人工知能時代に人間であるということ",
    // 著者
    "マックス・テグマーク",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "AI",
    <a
      href="https://www.amazon.co.jp/dp/4314011718"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "深層学習",
    // 著者
    "Ian Goodfellow",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "AI",
    <a
      href="https://www.amazon.co.jp/dp/4048930621"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "スーパーインテリジェンス 超絶AIと人類の命運",
    // 著者
    "ニック・ボストロム",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "AI",
    <a
      href="https://www.amazon.co.jp/dp/B078MHF6CH/"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "人工知能 人類最悪にして最後の発明",
    // 著者
    "ジェイムズ・バラット",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "AI",
    <a
      href="https://www.amazon.co.jp/dp/4478065756"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "国富論（上）（下）",
    // 著者
    "アダム・スミス ",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "歴史の人",
    <a
      href="https://www.amazon.co.jp/dp/B086JVQQK9"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "国富論 国の豊かさの本質と原因についての研究 (上)(下)",
    // 著者
    "アダムスミス",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "経済学",
    <a
      href="https://www.amazon.co.jp/dp/B07JWRN59M"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "資本論",
    // 著者
    "マルクス",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "経済学",
    <a
      href="https://www.amazon.co.jp/dp/B07BWHDRC6"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "戦争論〈上〉",
    // 著者
    "カール・フォン クラウゼヴィッツ",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "戦争",
    <a
      href="https://www.amazon.co.jp/dp/4122039398?"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "マンガ　最高の戦略教科書　孫子",
    // 著者
    "守屋淳",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "戦争",
    <a
      href="https://www.amazon.co.jp/dp/B07RHZ534R"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "ひと目で分かる 孫子の兵法",
    // 著者
    "ジェシカ・ヘギー",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "戦争",
    <a
      href="https://www.amazon.co.jp/dp/4799317598?"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "72歳、今日が人生最高の日",
    // 著者
    "メイ・マスク",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "生き方",
    <a
      href="https://www.amazon.co.jp/dp/4087861295"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "さよならを待つふたりのために",
    // 著者
    "ジョン・グリーン ",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "生き方",
    <a
      href="https://www.amazon.co.jp/dp/4001164051"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "ゴドーを待ちながら",
    // 著者
    "サミュエル ベケット ",
    // おすすめしている人
    "イーロンマスク",
    // ジャンル
    "生き方",
    <a
      href="https://www.amazon.co.jp/dp/4560071837"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "ザ・ゴール",
    // 著者
    "エリヤフ ゴールドラット",
    // おすすめしている人
    "ジェフベゾス",
    // ジャンル
    "経営",
    <a
      href="https://www.amazon.co.jp/dp/B0081M7YEE"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "イノベーションへの解 ",
    // 著者
    "クレイトン・M・クリステンセン",
    // おすすめしている人
    "ジェフベゾス",
    // ジャンル
    "経営",
    <a
      href="https://www.amazon.co.jp/dp/4798104930"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "ハーバード・ビジネススクール“クリステンセン”教授の 「イノベーションのジレンマ」入門",
    // 著者
    "グローバルタスクフォース",
    // おすすめしている人
    "ジェフベゾス",
    // ジャンル
    "経営",
    <a
      href="https://www.amazon.co.jp/dp/B00T7FIFC4"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "ビジョナリー・カンパニーZERO ゼロから事業を生み出し、偉大で永続的な企業になる",
    // 著者
    "ジム・コリンズ",
    // おすすめしている人
    "ジェフベゾス",
    // ジャンル
    "経営",
    <a
      href="https://www.amazon.co.jp/dp/B09B966P33"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "日の名残り",
    // 著者
    "カズオ・イシグロ",
    // おすすめしている人
    "ジェフベゾス",
    // ジャンル
    "小説",
    <a
      href="https://www.amazon.co.jp/dp/B009DEMAKM"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "盲目の時計職人",
    // 著者
    "リチャード・ドーキンス",
    // おすすめしている人
    "ジェフベゾス",
    // ジャンル
    "進化論",
    <a
      href="https://www.amazon.co.jp/dp/4152085576"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "データ・ドリブン・マーケティング―――最低限知っておくべき15の指標",
    // 著者
    "マーク・ジェフリー",
    // おすすめしている人
    "ジェフベゾス",
    // ジャンル
    "データ解析",
    <a
      href="https://www.amazon.co.jp/dp/4478039631"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "人月の神話",
    // 著者
    "フレデリック・P・ブルックス，Jr. ",
    // おすすめしている人
    "ジェフベゾス",
    // ジャンル
    "リスクマネジメント",
    <a
      href="https://www.amazon.co.jp/dp/B0998ZTVTD"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "ダイヤモンド・エイジ　上下",
    // 著者
    "ニール スティーヴンスン",
    // おすすめしている人
    "ジェフベゾス",
    // ジャンル
    "小説",
    <a
      href="https://www.amazon.co.jp/dp/B09Q8CFNZG"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "ブラック・スワン[上][下]―不確実性とリスクの本質",
    // 著者
    "ナシーム・ニコラス・タレブ",
    // おすすめしている人
    "ジェフベゾス",
    // ジャンル
    "リスクマネジメント",
    <a
      href="https://www.amazon.co.jp/dp/4478001251"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "小さなチーム、大きな仕事　働き方の新しいスタンダード",
    // 著者
    "ジェイソン フリード ",
    // おすすめしている人
    "ジェフベゾス",
    // ジャンル
    "経営",
    <a
      href="https://www.amazon.co.jp/dp/B01NCJVL06"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "リーン・シンキング",
    // 著者
    "ジェームズ・P・ウォーマック",
    // おすすめしている人
    "ジェフベゾス",
    // ジャンル
    "経営",
    <a
      href="https://www.amazon.co.jp/dp/4822246728"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "私のウォルマート商法 すべて小さく考えよ",
    // 著者
    "サム・ウォルトン",
    // おすすめしている人
    "ジェフベゾス",
    // ジャンル
    "リーダー論",
    <a
      href="https://www.amazon.co.jp/dp/406256677X"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "ドラッカー名著集1 経営者の条件",
    // 著者
    "Ｐ Ｆ ドラッカー",
    // おすすめしている人
    "ジェフベゾス",
    // ジャンル
    "リーダー論",
    <a
      href="https://www.amazon.co.jp/dp/B0081M7Z20"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "楽観主義者の未来予測(上)(下): テクノロジーの爆発的進化が世界を豊かにする",
    // 著者
    "ピーター・H. ディアマンディス",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "未来予測",
    <a
      href="https://www.amazon.co.jp/dp/4152094362"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "ヤバい経済学　悪ガキ教授が世の裏側を探検する",
    // 著者
    "スティーヴン・Ｊ・ダブナー",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "経済学",
    <a
      href="https://www.amazon.co.jp/dp/B00LF3TU98"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "超ヤバい経済学",
    // 著者
    "スティーヴン・Ｄ・レヴィット",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "経済学",
    <a
      href="https://www.amazon.co.jp/dp/B00LF3TUBG"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "大脱出――健康、お金、格差の起原",
    // 著者
    "アンガス・ディートン",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "経済学",
    <a
      href="https://www.amazon.co.jp/dp/4622078708"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "21世紀の資本",
    // 著者
    "トマ・ピケティ",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "経済学",
    <a
      href="https://www.amazon.co.jp/dp/B00VQ75FAQ"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "貧乏人の経済学――もういちど貧困問題を根っこから考える",
    // 著者
    "アビジット・V・バナジー ",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "経済学",
    <a
      href="https://www.amazon.co.jp/dp/4622076519"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "絶望を希望に変える経済学 社会の重大問題をどう解決するか",
    // 著者
    "アビジット・Ｖ・バナジー",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "経済学",
    <a
      href="https://www.amazon.co.jp/dp/B0876Z87XK"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "Measure What Matters　伝説のベンチャー投資家がGoogleに教えた成功手法 OKR",
    // 著者
    "ジョン・ドーア",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "経営",
    <a
      href="https://www.amazon.co.jp/dp/B07JCZVFZ9"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "コンテナ物語　世界を変えたのは「箱」の発明だった",
    // 著者
    "マルク・レビンソン",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "経営",
    <a
      href="https://www.amazon.co.jp/dp/B07Z4DNFG7"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "ディズニーＣＥＯが実践する１０の原則",
    // 著者
    "ロバート アイガー",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "経営",
    <a
      href="https://www.amazon.co.jp/dp/B086LBLXJX"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "ＳＨＯＥ　ＤＯＧ　靴にすべてを。",
    // 著者
    "フィル・ナイト",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "経営",
    <a
      href="https://www.amazon.co.jp/dp/B0757FCXC7"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "人と企業はどこで間違えるのか？",
    // 著者
    "John Brooks",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "経営",
    <a
      href="https://www.amazon.co.jp/dp/B00RKTGXO6"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "FACTFULNESS　10の思い込みを乗り越え、データを基に世界を正しく見る習慣",
    // 著者
    "ハンス・ロスリング",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "経営",
    <a
      href="https://www.amazon.co.jp/dp/B07LG7TG5N"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "RANGE　知識の「幅」が最強の武器になる",
    // 著者
    "デイビッド・エプスタイン",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "経営",
    <a
      href="https://www.amazon.co.jp/dp/B0868DR365"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "ドーキンス博士が教える「世界の秘密」",
    // 著者
    "リチャード・ドーキンス",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "科学",
    <a
      href="https://www.amazon.co.jp/dp/4152093463"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "データを正しく見るための数学的思考　数学の言葉で世界を見る",
    // 著者
    "ジョーダン エレンバーグ",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "データ解析",
    <a
      href="https://www.amazon.co.jp/dp/B012RSE58U"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "シグナル&ノイズ 天才データアナリストの「予測学」",
    // 著者
    "ネイト・シルバー",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "予想学",
    <a
      href="https://www.amazon.co.jp/dp/4822249808"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "ビッグヒストリー われわれはどこから来て、どこへ行くのか――宇宙開闢から138億年の「人間」史",
    // 著者
    "デヴィッド・クリスチャン",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "歴史",
    <a
      href="https://www.amazon.co.jp/dp/4750344214"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "あなたの人生の意味　先人に学ぶ「惜しまれる生き方」",
    // 著者
    "デイヴィッド ブルックス",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "生き方",
    <a
      href="https://www.amazon.co.jp/dp/B01MZDWOYK"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "睡眠こそ最強の解決策である",
    // 著者
    "マシュー・ウォーカー",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "睡眠学",
    <a
      href="https://www.amazon.co.jp/dp/B07D3N4NQM"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "マインドセット：「やればできる！」の研究",
    // 著者
    "キャロル・S・ドゥエック",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "心理学",
    <a
      href="https://www.amazon.co.jp/dp/B01FTIQY6G"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "ごく平凡な記憶力の私が1年で全米記憶力チャンピオンになれた理由 ",
    // 著者
    "ジョシュア・フォア",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "記憶術",
    <a
      href="https://www.amazon.co.jp/dp/4767811805"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "頭を「からっぽ」にするレッスン 10分間瞑想でマインドフルに生きる",
    // 著者
    "アンディ・プディコム",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "心理学",
    <a
      href="https://www.amazon.co.jp/dp/B08HC9JPH3"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "無人の兵団　AI、ロボット、自律型兵器と未来の戦争",
    // 著者
    "ポール シャーレ",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "科学",
    <a
      href="https://www.amazon.co.jp/dp/B07V3RKR26"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "探求 上下: エネルギーの世紀",
    // 著者
    "ダニエル ヤーギン",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "科学",
    <a
      href="https://www.amazon.co.jp/dp/4532168317"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "ホワット・イフ？――野球のボールを光速で投げたらどうなるか",
    // 著者
    "ランドール マンロー",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "物理学",
    <a
      href="https://www.amazon.co.jp/dp/B010COOF3G"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "これが物理学だ！　マサチューセッツ工科大学「感動」講義",
    // 著者
    "ウォルター・ルーウィン",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "物理学",
    <a
      href="https://www.amazon.co.jp/dp/B00B7UNYD2"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "生命、エネルギー、進化",
    // 著者
    "ニック・レーン",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "科学",
    <a
      href="https://www.amazon.co.jp/dp/B01N0B10U4"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "人類を変えた素晴らしき10の材料: その内なる宇宙を探険する ",
    // 著者
    "マーク・ミーオドヴニク",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "科学",
    <a
      href="https://www.amazon.co.jp/dp/4772695478"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "いま、希望を語ろう　末期がんの若き医師が家族と見つけた「生きる意味」",
    // 著者
    "ポール カラニシ",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "ノンフィクション",
    <a
      href="https://www.amazon.co.jp/dp/B01MXDUXZ3"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "モスクワの伯爵",
    // 著者
    "エイモア トールズ",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "小説",
    <a
      href="https://www.amazon.co.jp/dp/4152098600"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "レオナルド・ダ・ヴィンチ　上下",
    // 著者
    "ウォルター・アイザックソン",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "歴史の人",
    <a
      href="https://www.amazon.co.jp/dp/B09TSZS526"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "ガイトナー回顧録 ―金融危機の真相",
    // 著者
    "ティモシー・Ｆ・ガイトナー",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "経済学",
    <a
      href="https://www.amazon.co.jp/dp/B079GQPFFN"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "バーナンキは正しかったか? FRBの真相",
    // 著者
    "デイビッド・ウェッセル",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "歴史の人",
    <a
      href="https://www.amazon.co.jp/dp/4023308048"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "現代中国の父 トウ小平　上下",
    // 著者
    "エズラ・F・ヴォーゲル",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "歴史の人",
    <a
      href="https://www.amazon.co.jp/dp/4532168856"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "21世紀の啓蒙 上：理性、科学、ヒューマニズム、進歩",
    // 著者
    "スティーブン・ピンカー",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "社会学",
    <a
      href="https://www.amazon.co.jp/dp/B082S7Q2GN"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "かつての超大国アメリカ: どこで間違えたのかどうすれば復活できるのか ",
    // 著者
    "トーマス フリードマン",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "国家論",
    <a
      href="https://www.amazon.co.jp/dp/4532168457"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "国家はなぜ衰退するのか　権力・繁栄・貧困の起源（上）（下）",
    // 著者
    "ダロン・アセモグル",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "国家論",
    <a
      href="https://www.amazon.co.jp/dp/B00EJA1CJA"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "遺伝子‐親密なる人類史‐　上下 ",
    // 著者
    "シッダールタ ムカジー",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "細胞学",
    <a
      href="https://www.amazon.co.jp/dp/B08XKLMBSV"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "繁栄　明日を切り拓くための人類１０万年史",
    // 著者
    "マット・リドレー ",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "細胞学",
    <a
      href="https://www.amazon.co.jp/dp/B00EU9SKKE"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "昨日までの世界(上)(下)―文明の源流と人類の未来",
    // 著者
    "ジャレド・ダイアモンド ",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "人類史",
    <a
      href="https://www.amazon.co.jp/dp/B074T7YFKJ"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "銃・病原菌・鉄　上下巻",
    // 著者
    "ジャレド ダイアモンド",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "人類史",
    <a
      href="https://www.amazon.co.jp/dp/B00DNMG8Q2"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "危機と人類（上）（下）",
    // 著者
    "ジャレド ダイアモンド",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "人類史",
    <a
      href="https://www.amazon.co.jp/dp/B07ZJ8DJNB"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "２１　Ｌｅｓｓｏｎｓ　２１世紀の人類のための２１の思考",
    // 著者
    "ユヴァル・ノア・ハラリ ",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "人類史",
    <a
      href="https://www.amazon.co.jp/dp/B09KN7H8HD"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "ホモ・デウス　上下　テクノロジーとサピエンスの未来 ホモ・デウス　テクノロジーとサピエンスの未来",
    // 著者
    "ユヴァル・ノア・ハラリ ",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "人類史",
    <a
      href="https://www.amazon.co.jp/dp/B0BDZG7VXX"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "サピエンス全史（上）（下）　文明の構造と人類の幸福 サピエンス全史　文明の構造と人類の幸福",
    // 著者
    "ユヴァル・ノア・ハラリ ",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "人類史",
    <a
      href="https://www.amazon.co.jp/dp/B01LW7JZLC"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
  createData(
    // 書籍名
    "オリジン・ストーリー",
    // 著者
    "デイヴィッド・クリスチャン",
    // おすすめしている人
    "ビルゲイツ",
    // ジャンル
    "人類史",
    <a
      href="https://www.amazon.co.jp/dp/4480858180"
      target="_blank"
      rel="noreferrer"
    >
      Amazon
    </a>
  ),
];





 function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>書籍名&nbsp;</StyledTableCell>
            <StyledTableCell align="right">著者&nbsp;</StyledTableCell>
            <StyledTableCell align="right">推薦者&nbsp;</StyledTableCell>
            <StyledTableCell align="right">ジャンル&nbsp;</StyledTableCell>
            <StyledTableCell align="right"> URL&nbsp;</StyledTableCell>
          </TableRow>

          
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.author}</StyledTableCell>
              <StyledTableCell align="right">{row.recommender}</StyledTableCell>
              <StyledTableCell align="right">{row.genre}</StyledTableCell>
              <StyledTableCell align="right">{row.url}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    
  );
}
export default CustomizedTables;