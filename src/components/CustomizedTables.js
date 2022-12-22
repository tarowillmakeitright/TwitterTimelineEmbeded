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