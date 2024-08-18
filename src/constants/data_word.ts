import { Iword } from "../interface/Iword";

export const alphabet = [
	{
		name: "a",
		character: {
			hiragana: "あ",
			katakana: "ア",
		},
	},
	{
		name: "ka",
		character: {
			hiragana: "か",
			katakana: "カ",
		},
	},
	{
		name: "sa",
		character: {
			hiragana: "さ",
			katakana: "サ",
		},
	},
	{
		name: "ta",
		character: {
			hiragana: "た",
			katakana: "タ",
		},
	},
	{
		name: "na",
		character: {
			hiragana: "な",
			katakana: "ナ",
		},
	},
	{
		name: "ha",
		character: {
			hiragana: "は",
			katakana: "ハ",
		},
	},
	{
		name: "ma",
		character: {
			hiragana: "ま",
			katakana: "マ",
		},
	},
	{
		name: "ya",
		character: {
			hiragana: "や",
			katakana: "ヤ",
		},
	},
	{
		name: "ra",
		character: {
			hiragana: "ら",
			katakana: "ラ",
		},
	},
	{
		name: "wa",
		character: {
			hiragana: "わ",
			katakana: "ワ",
		},
	},
	{
		name: "i",
		character: {
			hiragana: "い",
			katakana: "イ",
		},
	},
	{
		name: "ki",
		character: {
			hiragana: "き",
			katakana: "キ",
		},
	},
	{
		name: "shi",
		character: {
			hiragana: "し",
			katakana: "シ",
		},
	},
	{
		name: "chi",
		character: {
			hiragana: "ち",
			katakana: "チ",
		},
	},
	{
		name: "ni",
		character: {
			hiragana: "に",
			katakana: "ニ",
		},
	},
	{
		name: "hi",
		character: {
			hiragana: "ひ",
			katakana: "ヒ",
		},
	},
	{
		name: "mi",
		character: {
			hiragana: "み",
			katakana: "ミ",
		},
	},
	{
		name: "i",
		character: {
			hiragana: "い",
			katakana: "イ",
		},

	},
	{
		name: "u",
		character: {
			hiragana: "う",
			katakana: "ウ",
		},
	},
	{
		name: "ku",
		character: {
			hiragana: "く",
			katakana: "ク",
		},
	},
	{
		name: "su",
		character: {
			hiragana: "す",
			katakana: "ス",
		},
	},
	{
		name: "tsu",
		character: {
			hiragana: "つ",
			katakana: "ツ",
		},
	},
	{
		name: "nu",
		character: {
			hiragana: "ぬ",
			katakana: "ヌ",
		},
	},
	{
		name: "fu",
		character: {
			hiragana: "ふ",
			katakana: "フ",
		},
	},
	{
		name: "mu",
		character: {
			hiragana: "む",
			katakana: "ム",
		},
	},
	{
		name: "yu",
		character: {
			hiragana: "ゆ",
			katakana: "ユ",
		},
	},
	{
		name: "ru",
		character: {
			hiragana: "る",
			katakana: "ル",
		},
	},
	{
		name: "e",
		character: {
			hiragana: "え",
			katakana: "エ",
		},
	},
	{
		name: "ke",
		character: {
			hiragana: "け",
			katakana: "ケ",
		},
	},
	{
		name: "se",
		character: {
			hiragana: "せ",
			katakana: "セ",
		},
	},
	{
		name: "te",
		character: {
			hiragana: "て",
			katakana: "テ",
		},
	},
	{
		name: "ne",
		character: {
			hiragana: "ね",
			katakana: "ネ",
		},
	},
	{
		name: "he",
		character: {
			hiragana: "へ",
			katakana: "ヘ",
		},
	},
	{
		name: "o",
		character: {
			hiragana: "お",
			katakana: "オ",
		},
	},
	{
		name: "ko",
		character: {
			hiragana: "こ",
			katakana: "コ",
		},
	},
	{
		name: "so",
		character: {
			hiragana: "そ",
			katakana: "ソ",
		},
	},
	{
		name: "to",
		character: {
			hiragana: "と",
			katakana: "ト",
		},
	},
	{
		name: "no",
		character: {
			hiragana: "の",
			katakana: "ノ",
		},
	},
	{
		name: "ho",
		character: {
			hiragana: "ほ",
			katakana: "ホ",
		},
	},
	{
		name: "mo",
		character: {
			hiragana: "も",
			katakana: "モ",
		},
	},
	{
		name: "yo",
		character: {
			hiragana: "よ",
			katakana: "ヨ",
		},
	},
	{
		name: "ro",
		character: {
			hiragana: "ろ",
			katakana: "ロ",
		},
	},
	{
		name: "wo",
		character: {
			hiragana: "を",
			katakana: "ヲ",
		},
	},
	{
		name: "n",
		character: {
			hiragana: "ん",
			katakana: "ン",
		},
	},
];

const lessonOne: Array<Iword> = [
	{
		name: "Tôi",
		character: {
			hiragana: "わたし",
			katakana: null,
			kanji: "私",
		},
	},
	{
		name: "Chúng tôi",
		character: {
			hiragana: "わたしたち",
			katakana: null,
			kanji: "私たち",
		},
	},
	{
		name: "Bạn",
		character: {
			hiragana: "あなた",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Người kia",
		character: {
			hiragana: "あのひと",
			katakana: null,
			kanji: "あの人",
		},
	},
	{
		name: "Người kia (kính ngữ)",
		character: {
			hiragana: "あのかた",
			katakana: null,
			kanji: "あの方",
		},
	},
	{
		name: "Các anh, các chị, các ông, các bà (kính ngữ)",
		character: {
			hiragana: "みなさん",
			katakana: null,
			kanji: "皆さん",
		},
	},
	{
		name: "Anh, chị, ông, bà (thêm vào sau tên người để thể hiện tính thân mật)",
		character: {
			hiragana: "～さん",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Bé (thêm vào sau tên trẻ em nam)",
		character: {
			hiragana: "～くん",
			katakana: null,
			kanji: "～君",
		},
	},
	{
		name: "Người (nước nào)",
		character: {
			hiragana: "～じん",
			katakana: null,
			kanji: "～人",
		},
	},
	{
		name: "Thầy, cô (giáo viên)",
		character: {
			hiragana: "せんせい",
			katakana: null,
			kanji: "先生",
		},
	},
	{
		name: "Giáo viên",
		character: {
			hiragana: "きょうし",
			katakana: null,
			kanji: "教師",
		},
	},
	{
		name: "Học sinh, sinh viên",
		character: {
			hiragana: "がくせい",
			katakana: null,
			kanji: "学生",
		},
	},
	{
		name: "Nhân viên công ty",
		character: {
			hiragana: "かいしゃいん",
			katakana: null,
			kanji: "会社員",
		},
	},
	{
		name: "Nhân viên ngân hàng",
		character: {
			hiragana: "ぎんこういん",
			katakana: null,
			kanji: "銀行員",
		},
	},
	{
		name: "Bác sĩ",
		character: {
			hiragana: "いしゃ",
			katakana: null,
			kanji: "医者",
		},
	},
	{
		name: "Nhà nghiên cứu",
		character: {
			hiragana: "けんきゅうしゃ",
			katakana: null,
			kanji: "研究者",
		},
	},
	{
		name: "Kỹ sư",
		character: {
			hiragana: "エンジニア",
			katakana: "エンジニア",
			kanji: null,
		},
	},
	{
		name: "Đại học",
		character: {
			hiragana: "だいがく",
			katakana: null,
			kanji: "大学",
		},
	},
	{
		name: "Bệnh viện",
		character: {
			hiragana: "びょういん",
			katakana: null,
			kanji: "病院",
		},
	},
	{
		name: "Ai",
		character: {
			hiragana: "だれ",
			katakana: null,
			kanji: "誰",
		},
	},
	{
		name: "Ai (kính ngữ)",
		character: {
			hiragana: "どなた",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Mấy tuổi, bao nhiêu tuổi",
		character: {
			hiragana: "なんさい",
			katakana: null,
			kanji: "何歳",
		},
	},
	{
		name: "Mấy tuổi, bao nhiêu tuổi (kính ngữ)",
		character: {
			hiragana: "おいくつ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Vâng, đúng vậy",
		character: {
			hiragana: "はい",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Không",
		character: {
			hiragana: "いいえ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Xin chào (lần đầu gặp)",
		character: {
			hiragana: "はじめまして",
			katakana: null,
			kanji: "初めまして",
		},
	},
	{
		name: "Rất hân hạnh được gặp bạn",
		character: {
			hiragana: "どうぞよろしくおねがいします",
			katakana: null,
			kanji: "どうぞよろしくお願いします",
		},
	},
	{
		name: "Người đến từ ",
		character: {
			hiragana: "～からきました",
			katakana: null,
			kanji: "～から来ました",
		},
	},
];

const lessonTwo: Array<Iword> = [
	{
		name: "Sách",
		character: {
			hiragana: "ほん",
			katakana: null,
			kanji: "本",
		},
	},
	{
		name: "Từ điển",
		character: {
			hiragana: "じしょ",
			katakana: null,
			kanji: "辞書",
		},
	},
	{
		name: "Tạp chí",
		character: {
			hiragana: "ざっし",
			katakana: null,
			kanji: "雑誌",
		},
	},
	{
		name: "Báo",
		character: {
			hiragana: "しんぶん",
			katakana: null,
			kanji: "新聞",
		},
	},
	{
		name: "Vở",
		character: {
			hiragana: null,
			katakana: "ノート",
			kanji: null,
		},
	},
	{
		name: "Sổ tay",
		character: {
			hiragana: "てちょう",
			katakana: null,
			kanji: "手帳",
		},
	},
	{
		name: "Danh thiếp",
		character: {
			hiragana: "めいし",
			katakana: null,
			kanji: "名刺",
		},
	},
	{
		name: "Thẻ",
		character: {
			hiragana: null,
			katakana: "カード",
			kanji: null,
		},
	},
	{
		name: "Bút chì",
		character: {
			hiragana: "えんぴつ",
			katakana: null,
			kanji: "鉛筆",
		},
	},
	{
		name: "Bút bi",
		character: {
			hiragana: null,
			katakana: "ボールペン",
			kanji: null,
		},
	},
	{
		name: "Bút máy",
		character: {
			hiragana: null,
			katakana: "シャープペンシル",
			kanji: null,
		},
	},
	{
		name: "Chìa khóa",
		character: {
			hiragana: "かぎ",
			katakana: null,
			kanji: "鍵",
		},
	},
	{
		name: "Đồng hồ",
		character: {
			hiragana: "とけい",
			katakana: null,
			kanji: "時計",
		},
	},
	{
		name: "Ô (dù)",
		character: {
			hiragana: "かさ",
			katakana: null,
			kanji: "傘",
		},
	},
	{
		name: "Cặp sách",
		character: {
			hiragana: "かばん",
			katakana: null,
			kanji: "鞄",
		},
	},
	{
		name: "Băng [cát-xét]",
		character: {
			hiragana: null,
			katakana: "テープ",
			kanji: null,
		},
	},
	{
		name: "Máy ghi âm",
		character: {
			hiragana: null,
			katakana: "テープレコーダー",
			kanji: null,
		},
	},
	{
		name: "Tivi",
		character: {
			hiragana: null,
			katakana: "テレビ",
			kanji: null,
		},
	},
	{
		name: "Radio",
		character: {
			hiragana: null,
			katakana: "ラジオ",
			kanji: null,
		},
	},
	{
		name: "Máy tính",
		character: {
			hiragana: null,
			katakana: "コンピューター",
			kanji: null,
		},
	},
	{
		name: "Ô tô, xe hơi",
		character: {
			hiragana: "じどうしゃ",
			katakana: null,
			kanji: "自動車",
		},
	},
	{
		name: "Bàn",
		character: {
			hiragana: "つくえ",
			katakana: null,
			kanji: "机",
		},
	},
	{
		name: "Ghế",
		character: {
			hiragana: "いす",
			katakana: null,
			kanji: "椅子",
		},
	},
	{
		name: "Sô cô la",
		character: {
			hiragana: null,
			katakana: "チョコレート",
			kanji: null,
		},
	},
	{
		name: "Cà phê",
		character: {
			hiragana: null,
			katakana: "コーヒー",
			kanji: null,
		},
	},
	{
		name: "Kỷ niệm",
		character: {
			hiragana: "おみやげ",
			katakana: null,
			kanji: "お土産",
		},
	},
	{
		name: "Tiếng Nhật",
		character: {
			hiragana: "にほんご",
			katakana: null,
			kanji: "日本語",
		},
	},
	{
		name: "Tiếng ",
		character: {
			hiragana: "～ご",
			katakana: null,
			kanji: "～語",
		},
	},
	{
		name: "Cái gì, gì",
		character: {
			hiragana: "なん",
			katakana: null,
			kanji: "何",
		},
	},
	{
		name: "Thế à, vậy à",
		character: {
			hiragana: "そう",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "À, ờ (ngập ngừng)",
		character: {
			hiragana: "あのう",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Chỉ là chút lòng thành",
		character: {
			hiragana: "ほんのきもちです",
			katakana: null,
			kanji: "ほんの気持ちです",
		},
	},
	{
		name: "Xin cảm ơn",
		character: {
			hiragana: "どうもありがとうございます",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Xin tặng bạn",
		character: {
			hiragana: "どうぞ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Thế à? / vậy à? (bày tỏ sự ngạc nhiên)",
		character: {
			hiragana: "そうですか",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Ồ!",
		character: {
			hiragana: "あっ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Cảm ơn rất nhiều",
		character: {
			hiragana: "どうもありがとうございます",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Đây là chút quà mọn",
		character: {
			hiragana: "ほんのきもちです",
			katakana: null,
			kanji: "ほんの気持ちです",
		},
	},
	{
		name: "Mời vào",
		character: {
			hiragana: "どうぞおあがりください",
			katakana: null,
			kanji: "どうぞお上がりください",
		},
	},
	{
		name: "Mời bạn dùng []",
		character: {
			hiragana: "～はいかがですか",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Xin mời",
		character: {
			hiragana: "いただきます",
			katakana: null,
			kanji: "頂きます",
		},
	},
	{
		name: "Xin mời vào",
		character: {
			hiragana: "どうぞおはいりください",
			katakana: null,
			kanji: "どうぞお入りください",
		},
	},
	{
		name: "Cảm ơn bạn",
		character: {
			hiragana: "どうも",
			katakana: null,
			kanji: null,
		},
	},
];

const lessonThree: Array<Iword> = [
	{
		name: "Ở đây, chỗ này",
		character: {
			hiragana: "ここ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Ở đó, chỗ đó",
		character: {
			hiragana: "そこ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Ở kia, chỗ kia",
		character: {
			hiragana: "あそこ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Ở đâu",
		character: {
			hiragana: "どこ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Phía này, chỗ này",
		character: {
			hiragana: "こちら",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Phía đó, chỗ đó",
		character: {
			hiragana: "そちら",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Phía kia, chỗ kia",
		character: {
			hiragana: "あちら",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Phía nào, chỗ nào",
		character: {
			hiragana: "どちら",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Lớp học, phòng học",
		character: {
			hiragana: "きょうしつ",
			katakana: null,
			kanji: "教室",
		},
	},
	{
		name: "Nhà ăn",
		character: {
			hiragana: "しょくどう",
			katakana: null,
			kanji: "食堂",
		},
	},
	{
		name: "Văn phòng",
		character: {
			hiragana: "じむしょ",
			katakana: null,
			kanji: "事務所",
		},
	},
	{
		name: "Phòng họp, phòng hội nghị",
		character: {
			hiragana: "かいぎしつ",
			katakana: null,
			kanji: "会議室",
		},
	},
	{
		name: "Bộ phận tiếp tân, phòng thường trực",
		character: {
			hiragana: "うけつけ",
			katakana: null,
			kanji: "受付",
		},
	},
	{
		name: "Hành lang, đại sảnh",
		character: {
			hiragana: null,
			katakana: "ロビー",
			kanji: null,
		},
	},
	{
		name: "Phòng",
		character: {
			hiragana: "へや",
			katakana: null,
			kanji: "部屋",
		},
	},
	{
		name: "Nhà vệ sinh, phòng vệ sinh, toa-lét",
		character: {
			hiragana: null,
			katakana: "トイレ",
			kanji: null,
		},
	},
	{
		name: "Cầu thang",
		character: {
			hiragana: "かいだん",
			katakana: null,
			kanji: "階段",
		},
	},
	{
		name: "Thang máy",
		character: {
			hiragana: null,
			katakana: "エレベーター",
			kanji: null,
		},
	},
	{
		name: "Thang cuốn",
		character: {
			hiragana: null,
			katakana: "エスカレーター",
			kanji: null,
		},
	},
	{
		name: "Nước ",
		character: {
			hiragana: "～くに",
			katakana: null,
			kanji: "～国",
		},
	},
	{
		name: "Công ty",
		character: {
			hiragana: "かいしゃ",
			katakana: null,
			kanji: "会社",
		},
	},
	{
		name: "Nhà",
		character: {
			hiragana: "うち",
			katakana: null,
			kanji: "家",
		},
	},
	{
		name: "Điện thoại",
		character: {
			hiragana: "でんわ",
			katakana: null,
			kanji: "電話",
		},
	},
	{
		name: "Giầy",
		character: {
			hiragana: "くつ",
			katakana: null,
			kanji: "靴",
		},
	},
	{
		name: "Cà vạt",
		character: {
			hiragana: null,
			katakana: "ネクタイ",
			kanji: null,
		},
	},
	{
		name: "Rượu vang",
		character: {
			hiragana: null,
			katakana: "ワイン",
			kanji: null,
		},
	},
	{
		name: "Thuốc lá",
		character: {
			hiragana: "たばこ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Quầy (trong cửa hàng, siêu thị)",
		character: {
			hiragana: "うりば",
			katakana: null,
			kanji: "売り場",
		},
	},
	{
		name: "Tầng hầm, dưới mặt đất",
		character: {
			hiragana: "ちか",
			katakana: null,
			kanji: "地下",
		},
	},
	{
		name: "Tầng ",
		character: {
			hiragana: "～かい",
			katakana: null,
			kanji: "～階",
		},
	},
	{
		name: "Mấy tầng",
		character: {
			hiragana: "なんがい",
			katakana: null,
			kanji: "何階",
		},
	},
	{
		name: "Yên",
		character: {
			hiragana: "えん",
			katakana: null,
			kanji: "円",
		},
	},
	{
		name: "Bao nhiêu tiền",
		character: {
			hiragana: "いくら",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Trăm",
		character: {
			hiragana: "ひゃく",
			katakana: null,
			kanji: "百",
		},
	},
	{
		name: "Nghìn",
		character: {
			hiragana: "せん",
			katakana: null,
			kanji: "千",
		},
	},
	{
		name: "Mười nghìn, vạn",
		character: {
			hiragana: "まん",
			katakana: null,
			kanji: "万",
		},
	},
	{
		name: "Xin chào quý khách / Chào mừng quý khách",
		character: {
			hiragana: "いらっしゃいませ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Cho tôi xem []",
		character: {
			hiragana: "「～を」みせてください",
			katakana: null,
			kanji: "「～を」見せてください",
		},
	},
	{
		name: "Cho tôi []",
		character: {
			hiragana: "「～を」ください",
			katakana: null,
			kanji: null,
		},
	},
];

const lessonFour: Array<Iword> = [
	{
		name: "dậy, thức dậy",
		character: {
			hiragana: "おきます",
			katakana: null,
			kanji: "起きます",
		},
	},
	{
		name: "ngủ, đi ngủ",
		character: {
			hiragana: "ねます",
			katakana: null,
			kanji: "寝ます",
		},
	},
	{
		name: "làm việc",
		character: {
			hiragana: "はたらきます",
			katakana: null,
			kanji: "働きます",
		},
	},
	{
		name: "nghỉ, nghỉ ngơi",
		character: {
			hiragana: "やすみます",
			katakana: null,
			kanji: "休みます",
		},
	},
	{
		name: "học",
		character: {
			hiragana: "べんきょうします",
			katakana: null,
			kanji: "勉強します",
		},
	},
	{
		name: "hết, kết thúc, xong",
		character: {
			hiragana: "おわります",
			katakana: null,
			kanji: "終わります",
		},
	},
	{
		name: "bách hóa",
		character: {
			hiragana: "デパート",
			katakana: "デパート",
			kanji: null,
		},
	},
	{
		name: "ngân hàng",
		character: {
			hiragana: "ぎんこう",
			katakana: null,
			kanji: "銀行",
		},
	},
	{
		name: "bưu điện",
		character: {
			hiragana: "ゆうびんきょく",
			katakana: null,
			kanji: "郵便局",
		},
	},
	{
		name: "thư viện",
		character: {
			hiragana: "としょかん",
			katakana: null,
			kanji: "図書館",
		},
	},
	{
		name: "bảo tàng mỹ thuật",
		character: {
			hiragana: "びじゅつかん",
			katakana: null,
			kanji: "美術館",
		},
	},
	{
		name: "bây giờ",
		character: {
			hiragana: "いま",
			katakana: null,
			kanji: "今",
		},
	},
	{
		name: "-giờ",
		character: {
			hiragana: "―じ",
			katakana: null,
			kanji: "－時",
		},
	},
	{
		name: "- phút",
		character: {
			hiragana: "―ふん（－ぷん）",
			katakana: null,
			kanji: "―分",
		},
	},
	{
		name: "rưỡi, nửa",
		character: {
			hiragana: "はん",
			katakana: null,
			kanji: "半",
		},
	},
	{
		name: "mấy giờ",
		character: {
			hiragana: "なんじ",
			katakana: null,
			kanji: "何時",
		},
	},
	{
		name: "mấy phút",
		character: {
			hiragana: "なんぷん",
			katakana: null,
			kanji: "何分",
		},
	},
	{
		name: "sáng, trước 12 giờ trưa",
		character: {
			hiragana: "ごぜん",
			katakana: null,
			kanji: "午前",
		},
	},
	{
		name: "chiều, sau 12 giờ trưa",
		character: {
			hiragana: "ごご",
			katakana: null,
			kanji: "午後",
		},
	},
	{
		name: "buổi sáng, sáng",
		character: {
			hiragana: "あさ",
			katakana: null,
			kanji: "朝",
		},
	},
	{
		name: "buổi trưa, trưa",
		character: {
			hiragana: "ひる",
			katakana: null,
			kanji: "昼",
		},
	},
	{
		name: "buổi tối, tối",
		character: {
			hiragana: "ばん（よる）",
			katakana: null,
			kanji: "晩(夜)",
		},
	},
	{
		name: "hôm kia",
		character: {
			hiragana: "おととい",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "hôm qua",
		character: {
			hiragana: "きのう",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "hôm nay",
		character: {
			hiragana: "きょう",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "ngày mai",
		character: {
			hiragana: "あした",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "ngày kia",
		character: {
			hiragana: "あさって",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "sáng nay",
		character: {
			hiragana: "けさ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "tối nay",
		character: {
			hiragana: "こんばん",
			katakana: null,
			kanji: "今晩",
		},
	},
	{
		name: "nghỉ, nghỉ phép, ngày nghỉ",
		character: {
			hiragana: "やすみ",
			katakana: null,
			kanji: "休み",
		},
	},
	{
		name: "nghỉ trưa",
		character: {
			hiragana: "ひるやすみ",
			katakana: null,
			kanji: "昼休み",
		},
	},
	{
		name: "thi, kỳ thi, kiểm tra",
		character: {
			hiragana: "しけん",
			katakana: null,
			kanji: "試験",
		},
	},
	{
		name: "cuộc họp, hội nghị (～を　します： tổ chức cuộc họp, hội nghị)",
		character: {
			hiragana: "かいぎ",
			katakana: null,
			kanji: "会議",
		},
	},
	{
		name: "phim, điện ảnh",
		character: {
			hiragana: "えいが",
			katakana: null,
			kanji: "映画",
		},
	},
	{
		name: "hàng sáng, mỗi sáng",
		character: {
			hiragana: "まいあさ",
			katakana: null,
			kanji: "毎朝",
		},
	},
	{
		name: "hàng tối, mỗi tối",
		character: {
			hiragana: "まいばん",
			katakana: null,
			kanji: "毎晩",
		},
	},
	{
		name: "hàng ngày, mỗi ngày",
		character: {
			hiragana: "まいにち",
			katakana: null,
			kanji: "毎日",
		},
	},
	{
		name: "thứ hai",
		character: {
			hiragana: "げつようび",
			katakana: null,
			kanji: "月曜日",
		},
	},
	{
		name: "thứ ba",
		character: {
			hiragana: "かようび",
			katakana: null,
			kanji: "火曜日",
		},
	},
	{
		name: "thứ tư",
		character: {
			hiragana: "すいようび",
			katakana: null,
			kanji: "水曜日",
		},
	},
	{
		name: "thứ năm",
		character: {
			hiragana: "もくようび",
			katakana: null,
			kanji: "木曜日",
		},
	},
	{
		name: "thứ sáu",
		character: {
			hiragana: "きんようび",
			katakana: null,
			kanji: "金曜日",
		},
	},
	{
		name: "thứ bảy",
		character: {
			hiragana: "どようび",
			katakana: null,
			kanji: "土曜日",
		},
	},
	{
		name: "chủ nhật",
		character: {
			hiragana: "にちようび",
			katakana: null,
			kanji: "日曜日",
		},
	},
	{
		name: "thứ mấy",
		character: {
			hiragana: "なんようび",
			katakana: null,
			kanji: "何曜日",
		},
	},
	{
		name: " từ",
		character: {
			hiragana: "～から",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: " đến",
		character: {
			hiragana: "～まで",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: " và (dùng để nối hai danh từ)",
		character: {
			hiragana: "～と",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Anh/chị vất vả quá.",
		character: {
			hiragana: "たいへんですね",
			katakana: null,
			kanji: "大変",
		},
	},
	{
		name: "số (số điện thoại, số phòng)",
		character: {
			hiragana: "ばんごう",
			katakana: null,
			kanji: "番号",
		},
	},
	{
		name: "số bao nhiêu, số mấy",
		character: {
			hiragana: "なんばん",
			katakana: null,
			kanji: "何番",
		},
	},
	{
		name: "ông/bà, phía ông/ phía bà",
		character: {
			hiragana: "そちら",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "New York",
		character: {
			hiragana: null,
			katakana: "ニューヨーク",
			kanji: null,
		},
	},
	{
		name: "Bắc Kinh",
		character: {
			hiragana: null,
			katakana: "ペキン",
			kanji: null,
		},
	},
	{
		name: "Los Angeles",
		character: {
			hiragana: null,
			katakana: "ロサンゼルス",
			kanji: null,
		},
	},
	{
		name: "Luân Đôn",
		character: {
			hiragana: null,
			katakana: "ロンドン",
			kanji: null,
		},
	},
	{
		name: "tên giả định của một nhà hàng Nhật",
		character: {
			hiragana: "あすか",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "ngân hàng Apple (giả định)",
		character: {
			hiragana: "ぎんこう",
			katakana: null,
			kanji: "アップル銀行",
		},
	},
	{
		name: "thư viện Midori (giả định)",
		character: {
			hiragana: "みどりとしょかん",
			katakana: null,
			kanji: "みどり図書館",
		},
	},
	{
		name: "bảo tàng mỹ thuật Yamato (giả định)",
		character: {
			hiragana: "やまとびじゅつかん",
			katakana: null,
			kanji: "やまと美術館",
		},
	},
];

const lessonFive: Array<Iword> = [
	{
		name: "đi",
		character: {
			hiragana: "いきます",
			katakana: null,
			kanji: "行きます",
		},
	},
	{
		name: "đến",
		character: {
			hiragana: "きます",
			katakana: null,
			kanji: "来ます",
		},
	},
	{
		name: "về",
		character: {
			hiragana: "かえります",
			katakana: null,
			kanji: "帰ります",
		},
	},
	{
		name: "trường học",
		character: {
			hiragana: "がっこう",
			katakana: null,
			kanji: "学校",
		},
	},
	{
		name: "siêu thị",
		character: {
			hiragana: "スーパー",
			katakana: "スーパー",
			kanji: null,
		},
	},
	{
		name: "ga, nhà ga",
		character: {
			hiragana: "えき",
			katakana: null,
			kanji: "駅",
		},
	},
	{
		name: "máy bay",
		character: {
			hiragana: "ひこうき",
			katakana: null,
			kanji: "飛行機",
		},
	},
	{
		name: "thuyền, tàu thủy",
		character: {
			hiragana: "ふね",
			katakana: null,
			kanji: "船",
		},
	},
	{
		name: "tàu điện",
		character: {
			hiragana: "でんしゃ",
			katakana: null,
			kanji: "電車",
		},
	},
	{
		name: "tàu điện ngầm",
		character: {
			hiragana: "ちかてつ",
			katakana: null,
			kanji: "地下鉄",
		},
	},
	{
		name: "tàu Shinkansen (tàu điện siêu tốc của Nhật)",
		character: {
			hiragana: "しんかんせん",
			katakana: null,
			kanji: "新幹線",
		},
	},
	{
		name: "xe buýt",
		character: {
			hiragana: "バス",
			katakana: "バス",
			kanji: null,
		},
	},
	{
		name: "tắc-xi",
		character: {
			hiragana: "タクシー",
			katakana: "タクシー",
			kanji: null,
		},
	},
	{
		name: "xe đạp",
		character: {
			hiragana: "じてんしゃ",
			katakana: null,
			kanji: "自転車",
		},
	},
	{
		name: "đi bộ",
		character: {
			hiragana: "あるいて",
			katakana: null,
			kanji: "歩いて",
		},
	},
	{
		name: "người",
		character: {
			hiragana: "ひと",
			katakana: null,
			kanji: "人",
		},
	},
	{
		name: "bạn, bạn bè",
		character: {
			hiragana: "ともだち",
			katakana: null,
			kanji: "友達",
		},
	},
	{
		name: "anh ấy, bạn trai",
		character: {
			hiragana: "かれ",
			katakana: null,
			kanji: "彼",
		},
	},
	{
		name: "chị ấy, bạn gái",
		character: {
			hiragana: "かのじょ",
			katakana: null,
			kanji: "彼女",
		},
	},
	{
		name: "gia đình",
		character: {
			hiragana: "かぞく",
			katakana: null,
			kanji: "家族",
		},
	},
	{
		name: "một mình",
		character: {
			hiragana: "ひとりで",
			katakana: null,
			kanji: "一人で",
		},
	},
	{
		name: "tuần trước",
		character: {
			hiragana: "せんしゅう",
			katakana: null,
			kanji: "先週",
		},
	},
	{
		name: "tuần này",
		character: {
			hiragana: "こんしゅう",
			katakana: null,
			kanji: "今週",
		},
	},
	{
		name: "tuần sau",
		character: {
			hiragana: "らいしゅう",
			katakana: null,
			kanji: "来週",
		},
	},
	{
		name: "tháng trước",
		character: {
			hiragana: "せんげつ",
			katakana: null,
			kanji: "先月",
		},
	},
	{
		name: "tháng này",
		character: {
			hiragana: "こんげつ",
			katakana: null,
			kanji: "今月",
		},
	},
	{
		name: "tháng sau",
		character: {
			hiragana: "らいげつ",
			katakana: null,
			kanji: "来月",
		},
	},
	{
		name: "năm ngoái",
		character: {
			hiragana: "きょねん",
			katakana: null,
			kanji: "去年",
		},
	},
	{
		name: "năm nay",
		character: {
			hiragana: "ことし",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "năm sau",
		character: {
			hiragana: "らいねん",
			katakana: null,
			kanji: "来年",
		},
	},
	{
		name: "năm -",
		character: {
			hiragana: "ーねん",
			katakana: null,
			kanji: "ー年",
		},
	},
	{
		name: "mấy năm",
		character: {
			hiragana: "なんねん",
			katakana: null,
			kanji: "何年",
		},
	},
	{
		name: "tháng -",
		character: {
			hiragana: "ーがつ",
			katakana: null,
			kanji: "ー月",
		},
	},
	{
		name: "tháng mấy",
		character: {
			hiragana: "なんがつ",
			katakana: null,
			kanji: "何月",
		},
	},
	{
		name: "ngày mồng 1",
		character: {
			hiragana: "ついたち",
			katakana: null,
			kanji: "１日",
		},
	},
	{
		name: "ngày mồng 2, 2 ngày",
		character: {
			hiragana: "ふつか",
			katakana: null,
			kanji: "２日",
		},
	},
	{
		name: "ngày mồng 3, 3 ngày",
		character: {
			hiragana: "みっか",
			katakana: null,
			kanji: "３日",
		},
	},
	{
		name: "ngày mồng 4, 4 ngày",
		character: {
			hiragana: "よっか",
			katakana: null,
			kanji: "４日",
		},
	},
	{
		name: "ngày mồng 5, 5 ngày",
		character: {
			hiragana: "いつか",
			katakana: null,
			kanji: "５日",
		},
	},
	{
		name: "ngày mồng 6, 6 ngày",
		character: {
			hiragana: "むいか",
			katakana: null,
			kanji: "６日",
		},
	},
	{
		name: "ngày mồng 7, 7 ngày",
		character: {
			hiragana: "なのか",
			katakana: null,
			kanji: "７日",
		},
	},
	{
		name: "ngày mồng 8, 8 ngày",
		character: {
			hiragana: "ようか",
			katakana: null,
			kanji: "８日",
		},
	},
	{
		name: "ngày mồng 9, 9 ngày",
		character: {
			hiragana: "ここのか",
			katakana: null,
			kanji: "９日",
		},
	},
	{
		name: "ngày mồng 10, 10 ngày",
		character: {
			hiragana: "とおか",
			katakana: null,
			kanji: "１０日",
		},
	},
	{
		name: "ngày 14, 14 ngày",
		character: {
			hiragana: "じゅうよっか",
			katakana: null,
			kanji: "１４日",
		},
	},
	{
		name: "ngày 20, 20 ngày",
		character: {
			hiragana: "はつか",
			katakana: null,
			kanji: "２０日",
		},
	},
	{
		name: "ngày 24, 24 ngày",
		character: {
			hiragana: "にじゅうよっか",
			katakana: null,
			kanji: "２４日",
		},
	},
	{
		name: "ngày -, - ngày",
		character: {
			hiragana: "―にち",
			katakana: null,
			kanji: "―日",
		},
	},
	{
		name: "ngày mấy, ngày bao nhiêu, mấy ngày, bao nhiêu ngày",
		character: {
			hiragana: "なんにち",
			katakana: null,
			kanji: "何日",
		},
	},
	{
		name: "bao giờ, khi nào",
		character: {
			hiragana: "いつ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "sinh nhật",
		character: {
			hiragana: "たんじょうび",
			katakana: null,
			kanji: "誕生日",
		},
	},
	{
		name: "Ừ, nhỉ.",
		character: {
			hiragana: "そうですね。",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Xin cám ơn anh/chị rất nhiều.",
		character: {
			hiragana: "どうもありがとうございました。",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Không có gì.",
		character: {
			hiragana: "どういたしまして",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "sân ga số -",
		character: {
			hiragana: "―ばんせん",
			katakana: null,
			kanji: "番線",
		},
	},
	{
		name: "tiếp theo",
		character: {
			hiragana: "つぎの",
			katakana: null,
			kanji: "次の",
		},
	},
	{
		name: "tàu thường (dừng cả ở các ga lẻ)",
		character: {
			hiragana: "ふつう",
			katakana: null,
			kanji: "普通",
		},
	},
	{
		name: "tàu tốc hành",
		character: {
			hiragana: "きゅうこう",
			katakana: null,
			kanji: "急行",
		},
	},
	{
		name: "tàu tốc hành đặc biệt",
		character: {
			hiragana: "とっきゅう",
			katakana: null,
			kanji: "特急",
		},
	},
	{
		name: "tên một khu phố ở Osaka",
		character: {
			hiragana: "こうしえん",
			katakana: null,
			kanji: "甲子園",
		},
	},
	{
		name: "Lâu đài Osaka, một lâu đài nổi tiếng ở Osaka",
		character: {
			hiragana: "おおさかじょう",
			katakana: null,
			kanji: "大阪城",
		},
	},
];

const lessonSix: Array<Iword> = [
	{
		name: "ăn",
		character: {
			hiragana: "たべます",
			katakana: null,
			kanji: "食べます",
		},
	},
	{
		name: "uống",
		character: {
			hiragana: "のみます",
			katakana: null,
			kanji: "飲みます",
		},
	},
	{
		name: "hút [thuốc lá]",
		character: {
			hiragana: "すいます",
			katakana: null,
			kanji: "吸います",
		},
	},
	{
		name: "xem, nhìn, trông",
		character: {
			hiragana: "みます",
			katakana: null,
			kanji: "見ます",
		},
	},
	{
		name: "nghe",
		character: {
			hiragana: "ききます",
			katakana: null,
			kanji: "聞きます",
		},
	},
	{
		name: "đọc",
		character: {
			hiragana: "よみます",
			katakana: null,
			kanji: "読みます",
		},
	},
	{
		name: "viết, vẽ",
		character: {
			hiragana: "かきます",
			katakana: null,
			kanji: "書きます",
		},
	},
	{
		name: "mua",
		character: {
			hiragana: "かいます",
			katakana: null,
			kanji: "買います",
		},
	},
	{
		name: "chụp [ảnh]",
		character: {
			hiragana: "とります",
			katakana: null,
			kanji: "撮ります",
		},
	},
	{
		name: "làm",
		character: {
			hiragana: "します",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "gặp [bạn]",
		character: {
			hiragana: "あいます",
			katakana: null,
			kanji: "会います",
		},
	},
	{
		name: "cơm, bữa ăn",
		character: {
			hiragana: "ごはん",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "cơm sáng",
		character: {
			hiragana: "あさごはん",
			katakana: null,
			kanji: "朝ごはん",
		},
	},
	{
		name: "cơm trưa",
		character: {
			hiragana: "ひるごはん",
			katakana: null,
			kanji: "昼ごはん",
		},
	},
	{
		name: "cơm tối",
		character: {
			hiragana: "ばんごはん",
			katakana: null,
			kanji: "晩ごはん",
		},
	},
	{
		name: "bánh mì",
		character: {
			hiragana: "パン",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "trứng",
		character: {
			hiragana: "たまご",
			katakana: null,
			kanji: "卵",
		},
	},
	{
		name: "thịt",
		character: {
			hiragana: "にく",
			katakana: null,
			kanji: "肉",
		},
	},
	{
		name: "cá",
		character: {
			hiragana: "さかな",
			katakana: null,
			kanji: "魚",
		},
	},
	{
		name: "rau",
		character: {
			hiragana: "やさい",
			katakana: null,
			kanji: "野菜",
		},
	},
	{
		name: "hoa quả, trái cây",
		character: {
			hiragana: "くだもの",
			katakana: null,
			kanji: "果物",
		},
	},
	{
		name: "nước",
		character: {
			hiragana: "みず",
			katakana: null,
			kanji: "水",
		},
	},
	{
		name: "trà (nói chung)",
		character: {
			hiragana: "おちゃ",
			katakana: null,
			kanji: "お茶",
		},
	},
	{
		name: "trà đen",
		character: {
			hiragana: "こうちゃ",
			katakana: null,
			kanji: "紅茶",
		},
	},
	{
		name: "sữa bò (sữa)",
		character: {
			hiragana: "ぎゅうにゅう(ミルク)",
			katakana: null,
			kanji: "牛乳",
		},
	},
	{
		name: "nước hoa quả",
		character: {
			hiragana: null,
			katakana: "ジュース",
			kanji: null,
		},
	},
	{
		name: "bia",
		character: {
			hiragana: null,
			katakana: "ビール",
			kanji: null,
		},
	},
	{
		name: "rượu, rượu sake",
		character: {
			hiragana: "[お]さけ",
			katakana: null,
			kanji: "[お]酒",
		},
	},
	{
		name: "thuốc lá",
		character: {
			hiragana: "たばこ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "thư",
		character: {
			hiragana: "てがみ",
			katakana: null,
			kanji: "手紙",
		},
	},
	{
		name: "báo cáo",
		character: {
			hiragana: null,
			katakana: "レポート",
			kanji: null,
		},
	},
	{
		name: "ảnh",
		character: {
			hiragana: "しゃしん",
			katakana: null,
			kanji: "写真",
		},
	},
	{
		name: "video, băng video, đầu video",
		character: {
			hiragana: null,
			katakana: "ビデオ",
			kanji: null,
		},
	},
	{
		name: "cửa hàng, tiệm",
		character: {
			hiragana: "みせ",
			katakana: null,
			kanji: "店",
		},
	},
	{
		name: "vườn",
		character: {
			hiragana: "にわ",
			katakana: null,
			kanji: "庭",
		},
	},
	{
		name: "bài tập về nhà (～をします: làm bài tập)",
		character: {
			hiragana: "しゅくだい",
			katakana: null,
			kanji: "宿題",
		},
	},
	{
		name: "quần vợt (～をします: đánh quần vợt)",
		character: {
			hiragana: null,
			katakana: "テニス",
			kanji: null,
		},
	},
	{
		name: "bóng đá (～をします: chơi bóng đá)",
		character: {
			hiragana: null,
			katakana: "サッカー",
			kanji: null,
		},
	},
	{
		name: "việc ngắm hoa anh đào (～をします: ngắm hoa anh đào)",
		character: {
			hiragana: "[お]はなみ",
			katakana: null,
			kanji: "[お]花見",
		},
	},
	{
		name: "cái gì, gì",
		character: {
			hiragana: "なに",
			katakana: null,
			kanji: "何",
		},
	},
	{
		name: "cùng, cùng nhau",
		character: {
			hiragana: "いっしょに",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "một chút",
		character: {
			hiragana: "ちょっと",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "luôn luôn, lúc nào cũng",
		character: {
			hiragana: "いつも",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "thỉnh thoảng",
		character: {
			hiragana: "ときどき",
			katakana: null,
			kanji: "時々",
		},
	},
	{
		name: "sau đó, tiếp theo",
		character: {
			hiragana: "それから",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "vâng, được (cách nói thân mật của 「はい」)",
		character: {
			hiragana: "ええ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Được đấy nhỉ./ hay quá.",
		character: {
			hiragana: "いいですね。",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Tôi hiểu rồi/ vâng ạ.",
		character: {
			hiragana: "わかりました。",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Có gì đấy ạ?/ cái gì vậy?",
		character: {
			hiragana: "なんですか。",
			katakana: null,
			kanji: "何",
		},
	},
	{
		name: "Hẹn gặp lại [ngày mai].",
		character: {
			hiragana: "じゃ、また[あした]",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Mexico",
		character: {
			hiragana: null,
			katakana: "メキシコ",
			kanji: null,
		},
	},
	{
		name: "bách hóa Osaka (giả định)",
		character: {
			hiragana: "おおさかデパート",
			katakana: null,
			kanji: "大阪デパート",
		},
	},
	{
		name: "tên nhà hàng (giả định)",
		character: {
			hiragana: "つるや",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "tên siêu thị (giả định)",
		character: {
			hiragana: "フランスや",
			katakana: null,
			kanji: "フランス屋",
		},
	},
	{
		name: "tên siêu thị (giả định)",
		character: {
			hiragana: "まいにちや",
			katakana: null,
			kanji: "毎日屋",
		},
	},
];

const lessonSeven: Array<Iword> = [
	{
		name: "cắt",
		character: {
			hiragana: "きります",
			katakana: null,
			kanji: "切ります",
		},
	},
	{
		name: "gửi",
		character: {
			hiragana: "おくります",
			katakana: null,
			kanji: "送ります",
		},
	},
	{
		name: "cho, tặng",
		character: {
			hiragana: "あげます",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "nhận",
		character: {
			hiragana: "もらいます",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "cho mượn, cho vay",
		character: {
			hiragana: "かします",
			katakana: null,
			kanji: "貸します",
		},
	},
	{
		name: "mượn, vay",
		character: {
			hiragana: "かります",
			katakana: null,
			kanji: "借ります",
		},
	},
	{
		name: "dạy",
		character: {
			hiragana: "おしえます",
			katakana: null,
			kanji: "教えます",
		},
	},
	{
		name: "học, tập",
		character: {
			hiragana: "ならいます",
			katakana: null,
			kanji: "習います",
		},
	},
	{
		name: "gọi [điện thoại]",
		character: {
			hiragana: "かけます[でんわを～]",
			katakana: null,
			kanji: "かけます[電話を～]",
		},
	},
	{
		name: "tay",
		character: {
			hiragana: "て",
			katakana: null,
			kanji: "手",
		},
	},
	{
		name: "đũa",
		character: {
			hiragana: "はし",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "thìa",
		character: {
			hiragana: null,
			katakana: "スプーン",
			kanji: null,
		},
	},
	{
		name: "dao",
		character: {
			hiragana: null,
			katakana: "ナイフ",
			kanji: null,
		},
	},
	{
		name: "nĩa",
		character: {
			hiragana: null,
			katakana: "フォーク",
			kanji: null,
		},
	},
	{
		name: "kéo",
		character: {
			hiragana: "はさみ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "máy vi tính cá nhân",
		character: {
			hiragana: null,
			katakana: "パソコン",
			kanji: null,
		},
	},
	{
		name: "điện thoại di động",
		character: {
			hiragana: null,
			katakana: "ケータイ",
			kanji: null,
		},
	},
	{
		name: "thư điện tử, email",
		character: {
			hiragana: null,
			katakana: "メール",
			kanji: null,
		},
	},
	{
		name: "thiệp mừng năm mới",
		character: {
			hiragana: "ねんがじょう",
			katakana: null,
			kanji: "年賀状",
		},
	},
	{
		name: "cái đục lỗ",
		character: {
			hiragana: null,
			katakana: "パンチ",
			kanji: null,
		},
	},
	{
		name: "cái dập ghim",
		character: {
			hiragana: null,
			katakana: "ホッチキス",
			kanji: null,
		},
	},
	{
		name: "băng dính",
		character: {
			hiragana: null,
			katakana: "セロテープ",
			kanji: null,
		},
	},
	{
		name: "cái tẩy",
		character: {
			hiragana: "けしゴム",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "giấy",
		character: {
			hiragana: "かみ",
			katakana: null,
			kanji: "紙",
		},
	},
	{
		name: "hoa",
		character: {
			hiragana: "はな",
			katakana: null,
			kanji: "花",
		},
	},
	{
		name: "áo sơ mi",
		character: {
			hiragana: null,
			katakana: "シャツ",
			kanji: null,
		},
	},
	{
		name: "quà tặng, tặng phẩm",
		character: {
			hiragana: null,
			katakana: "プレゼント",
			kanji: null,
		},
	},
	{
		name: "đồ đạc, hành lý",
		character: {
			hiragana: "にもつ",
			katakana: null,
			kanji: "荷物",
		},
	},
	{
		name: "tiền",
		character: {
			hiragana: "おかね",
			katakana: null,
			kanji: "お金",
		},
	},
	{
		name: "vé",
		character: {
			hiragana: "きっぷ",
			katakana: null,
			kanji: "切符",
		},
	},
	{
		name: "Giáng sinh",
		character: {
			hiragana: null,
			katakana: "クリスマス",
			kanji: null,
		},
	},
	{
		name: "bố (dùng khi nói về bố mình)",
		character: {
			hiragana: "ちち",
			katakana: null,
			kanji: "父",
		},
	},
	{
		name: "mẹ (dùng khi nói về mẹ mình)",
		character: {
			hiragana: "はは",
			katakana: null,
			kanji: "母",
		},
	},
	{
		name: "bố (dùng khi nói về bố người khác và dùng khi xưng hô với bố mình)",
		character: {
			hiragana: "おとうさん",
			katakana: null,
			kanji: "お父さん",
		},
	},
	{
		name: "mẹ (dùng khi nói về mẹ người khác và dùng khi xưng hô với mẹ mình)",
		character: {
			hiragana: "おかあさん",
			katakana: null,
			kanji: "お母さん",
		},
	},
	{
		name: "đã, rồi",
		character: {
			hiragana: "もう",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "chưa",
		character: {
			hiragana: "まだ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "từ bây giờ, sau đây",
		character: {
			hiragana: "これから",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "[] hay nhỉ./ đẹp nhỉ.",
		character: {
			hiragana: "[～、]すてきですね。",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Chào mừng anh/chị đã đến chơi.",
		character: {
			hiragana: "いらっしゃい。",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Mời anh/chị vào.",
		character: {
			hiragana: "どうぞ　おあがりください。",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Xin thất lễ",
		character: {
			hiragana: "しつれいします。",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Anh/chị dùng [] có được không?",
		character: {
			hiragana: "[～は]いかがですか。",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Xin nhận . (cách nói dùng trước khi ăn hoặc uống)",
		character: {
			hiragana: "いただきます。",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Xin cám ơn anh/chị đã đãi tôi bữa ăn ngon (cách nói dùng sau khi ăn xong)",
		character: {
			hiragana: "ごちそうさま［でした］",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Tây Ban Nha",
		character: {
			hiragana: null,
			katakana: "スペイン",
			kanji: null,
		},
	},
];

const lessonEight: Array<Iword> = [
	{
		name: "đẹp trai",
		character: {
			hiragana: null,
			katakana: "ハンサム",
			kanji: null,
		},
	},
	{
		name: "đẹp, sạch",
		character: {
			hiragana: "きれい",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "yên tĩnh",
		character: {
			hiragana: "しずか",
			katakana: null,
			kanji: "静か",
		},
	},
	{
		name: "náo nhiệt",
		character: {
			hiragana: "にぎやか",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "nổi tiếng",
		character: {
			hiragana: "ゆうめい",
			katakana: null,
			kanji: "有名",
		},
	},
	{
		name: "tốt bụng, thân thiện",
		character: {
			hiragana: "しんせつ",
			katakana: null,
			kanji: "親切",
		},
	},
	{
		name: "khỏe",
		character: {
			hiragana: "げんき",
			katakana: null,
			kanji: "元気",
		},
	},
	{
		name: "rảnh rỗi",
		character: {
			hiragana: "ひま",
			katakana: null,
			kanji: "暇",
		},
	},
	{
		name: "tiện lợi",
		character: {
			hiragana: "べんり",
			katakana: null,
			kanji: "便利",
		},
	},
	{
		name: "đẹp, hay",
		character: {
			hiragana: "すてき",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "lớn, to",
		character: {
			hiragana: "おおきい",
			katakana: null,
			kanji: "大きい",
		},
	},
	{
		name: "bé, nhỏ",
		character: {
			hiragana: "ちいさい",
			katakana: null,
			kanji: "小さい",
		},
	},
	{
		name: "mới",
		character: {
			hiragana: "あたらしい",
			katakana: null,
			kanji: "新しい",
		},
	},
	{
		name: "cũ",
		character: {
			hiragana: "ふるい",
			katakana: null,
			kanji: "古い",
		},
	},
	{
		name: "tốt",
		character: {
			hiragana: "いい, よい",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "xấu",
		character: {
			hiragana: "わるい",
			katakana: null,
			kanji: "悪い",
		},
	},
	{
		name: "nóng",
		character: {
			hiragana: "あつい",
			katakana: null,
			kanji: "暑い, 熱い",
		},
	},
	{
		name: "lạnh, rét (dùng cho thời tiết)",
		character: {
			hiragana: "さむい",
			katakana: null,
			kanji: "寒い",
		},
	},
	{
		name: "lạnh, buốt (dùng cho cảm giác)",
		character: {
			hiragana: "つめたい",
			katakana: null,
			kanji: "冷たい",
		},
	},
	{
		name: "khó",
		character: {
			hiragana: "むずかしい",
			katakana: null,
			kanji: "難しい",
		},
	},
	{
		name: "dễ",
		character: {
			hiragana: "やさしい",
			katakana: null,
			kanji: "易しい",
		},
	},
	{
		name: "đắt, cao",
		character: {
			hiragana: "たかい",
			katakana: null,
			kanji: "高い",
		},
	},
	{
		name: "rẻ",
		character: {
			hiragana: "やすい",
			katakana: null,
			kanji: "安い",
		},
	},
	{
		name: "thấp",
		character: {
			hiragana: "ひくい",
			katakana: null,
			kanji: "低い",
		},
	},
	{
		name: "thú vị, hay",
		character: {
			hiragana: "おもしろい",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "ngon",
		character: {
			hiragana: "おいしい",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "bận",
		character: {
			hiragana: "いそがしい",
			katakana: null,
			kanji: "忙しい",
		},
	},
	{
		name: "vui",
		character: {
			hiragana: "たのしい",
			katakana: null,
			kanji: "楽しい",
		},
	},
	{
		name: "trắng",
		character: {
			hiragana: "しろい",
			katakana: null,
			kanji: "白い",
		},
	},
	{
		name: "đen",
		character: {
			hiragana: "くろい",
			katakana: null,
			kanji: "黒い",
		},
	},
	{
		name: "đỏ",
		character: {
			hiragana: "あかい",
			katakana: null,
			kanji: "赤い",
		},
	},
	{
		name: "xanh da trời",
		character: {
			hiragana: "あおい",
			katakana: null,
			kanji: "青い",
		},
	},
	{
		name: "anh đào (hoa, cây)",
		character: {
			hiragana: "さくら",
			katakana: null,
			kanji: "桜",
		},
	},
	{
		name: "núi",
		character: {
			hiragana: "やま",
			katakana: null,
			kanji: "山",
		},
	},
	{
		name: "thị trấn, thị xã, thành phố",
		character: {
			hiragana: "まち",
			katakana: null,
			kanji: "町",
		},
	},
	{
		name: "đồ ăn",
		character: {
			hiragana: "たべもの",
			katakana: null,
			kanji: "食べ物",
		},
	},
	{
		name: "nơi, chỗ",
		character: {
			hiragana: "ところ",
			katakana: null,
			kanji: "所",
		},
	},
	{
		name: "kí túc xá",
		character: {
			hiragana: "りょう",
			katakana: null,
			kanji: "寮",
		},
	},
	{
		name: "nhà hàng",
		character: {
			hiragana: null,
			katakana: "レストラン",
			kanji: null,
		},
	},
	{
		name: "cuộc sống, sinh hoạt",
		character: {
			hiragana: "せいかつ",
			katakana: null,
			kanji: "生活",
		},
	},
	{
		name: "công việc (～をします：làm việc)",
		character: {
			hiragana: "しごと",
			katakana: null,
			kanji: "仕事",
		},
	},
	{
		name: "thế nào",
		character: {
			hiragana: "どう",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: " như thế nào",
		character: {
			hiragana: "どんな～",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "rất, lắm",
		character: {
			hiragana: "とても",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "không  lắm",
		character: {
			hiragana: "あまり",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "và, thêm nữa (dùng để nối 2 câu)",
		character: {
			hiragana: "そして",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: " , nhưng ",
		character: {
			hiragana: "～が、～",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Anh/chị có khỏe không?",
		character: {
			hiragana: "おげんきですか",
			katakana: null,
			kanji: "お元気ですか",
		},
	},
	{
		name: "Thế à. Như vậy nhỉ",
		character: {
			hiragana: "そうですね",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "một chén/ly nữa được không ạ?",
		character: {
			hiragana: "もういっぱいいかがですか",
			katakana: null,
			kanji: "もう一杯いかがですか",
		},
	},
	{
		name: "Không, đủ rồi ạ.",
		character: {
			hiragana: "いいえけっこうです",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Đã  rồi nhỉ./ Đã  rồi, đúng không ạ?",
		character: {
			hiragana: "もう～です[ね]",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Sắp đến lúc tôi phải xin phép rồi./ Đã đến lúc tôi phải về.",
		character: {
			hiragana: "そろそろしつれいします",
			katakana: null,
			kanji: "そろそろ失礼します",
		},
	},
	{
		name: "Không có gì./ Không sao cả.",
		character: {
			hiragana: "いいえ",
			katakana: null,
			kanji: "いいえ",
		},
	},
	{
		name: "Lần sau anh/ chị lại đến chơi nhé.",
		character: {
			hiragana: "またいらっしゃってください",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Thượng Hải",
		character: {
			hiragana: "しゃんはい",
			katakana: null,
			kanji: "上海",
		},
	},
	{
		name: "Chùa Kinkaku-ji (chùa vàng)",
		character: {
			hiragana: "きんかくじ",
			katakana: null,
			kanji: "金閣寺",
		},
	},
	{
		name: "Công viên Nara",
		character: {
			hiragana: "ならこうえん",
			katakana: null,
			kanji: "奈良公園",
		},
	},
	{
		name: "Núi Phú Sĩ (ngọn núi cao nhất Nhật Bản)",
		character: {
			hiragana: "ふじさん",
			katakana: null,
			kanji: "富士山",
		},
	},
	{
		name: "bảy chàng võ sĩ Samurai (tên phim)",
		character: {
			hiragana: "しちにんのさむらい",
			katakana: null,
			kanji: "七人の侍",
		},
	},
];

const lessonNine: Array<Iword> = [
	{
		name: "hiểu, nắm được",
		character: {
			hiragana: "わかります",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "có (sở hữu)",
		character: {
			hiragana: "あります",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "thích",
		character: {
			hiragana: "すき",
			katakana: null,
			kanji: "好き",
		},
	},
	{
		name: "ghét, không thích",
		character: {
			hiragana: "きらい",
			katakana: null,
			kanji: "嫌い",
		},
	},
	{
		name: "giỏi, khéo",
		character: {
			hiragana: "じょうず",
			katakana: null,
			kanji: "上手",
		},
	},
	{
		name: "kém",
		character: {
			hiragana: "へた",
			katakana: null,
			kanji: "下手",
		},
	},
	{
		name: "đồ uống",
		character: {
			hiragana: "のみもの",
			katakana: null,
			kanji: "飲み物",
		},
	},
	{
		name: "món ăn, việc nấu ăn",
		character: {
			hiragana: "りょうり",
			katakana: null,
			kanji: "料理",
		},
	},
	{
		name: "thể thao (～をします：chơi thể thao)",
		character: {
			hiragana: null,
			katakana: "スポーツ",
			kanji: null,
		},
	},
	{
		name: "bóng chày (～をします：chơi bóng chày)",
		character: {
			hiragana: "やきゅう",
			katakana: null,
			kanji: "野球",
		},
	},
	{
		name: "nhảy, khiêu vũ(～をします：nhảy, khiêu vũ)",
		character: {
			hiragana: null,
			katakana: "ダンス",
			kanji: null,
		},
	},
	{
		name: "du lịch, chuyến du lịch",
		character: {
			hiragana: "りょこう",
			katakana: null,
			kanji: "旅行",
		},
	},
	{
		name: "âm nhạc",
		character: {
			hiragana: "おんがく",
			katakana: null,
			kanji: "音楽",
		},
	},
	{
		name: "bài hát",
		character: {
			hiragana: "うた",
			katakana: null,
			kanji: "歌",
		},
	},
	{
		name: "nhạc cổ điển",
		character: {
			hiragana: null,
			katakana: "クラシック",
			kanji: null,
		},
	},
	{
		name: "nhạc jazz",
		character: {
			hiragana: null,
			katakana: "ジャズ",
			kanji: null,
		},
	},
	{
		name: "buổi hòa nhạc",
		character: {
			hiragana: null,
			katakana: "コンサート",
			kanji: null,
		},
	},
	{
		name: "karaoke",
		character: {
			hiragana: null,
			katakana: "カラオケ",
			kanji: null,
		},
	},
	{
		name: "Kabuki (một loại ca kịch truyền thống của Nhật)",
		character: {
			hiragana: "かぶき",
			katakana: null,
			kanji: "歌舞伎",
		},
	},
	{
		name: "tranh, hội họa",
		character: {
			hiragana: "え",
			katakana: null,
			kanji: "絵",
		},
	},
	{
		name: "chữ",
		character: {
			hiragana: "じ",
			katakana: null,
			kanji: "字",
		},
	},
	{
		name: "chữ hán",
		character: {
			hiragana: "かんじ",
			katakana: null,
			kanji: "漢字",
		},
	},
	{
		name: "chữ Hiragana",
		character: {
			hiragana: "ひらがな",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Chữ Katakana",
		character: {
			hiragana: "かたかな",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "chữ La Mã",
		character: {
			hiragana: "ローマじ",
			katakana: null,
			kanji: "ローマ字",
		},
	},
	{
		name: "tiền lẻ",
		character: {
			hiragana: "こまかいおかね",
			katakana: null,
			kanji: "細かいお金",
		},
	},
	{
		name: "vé (xem hòa nhạc, xem phim)",
		character: {
			hiragana: null,
			katakana: "チケット",
			kanji: null,
		},
	},
	{
		name: "thời gian",
		character: {
			hiragana: "じかん",
			katakana: null,
			kanji: "時間",
		},
	},
	{
		name: "việc bận, công chuyện",
		character: {
			hiragana: "ようじ",
			katakana: null,
			kanji: "用事",
		},
	},
	{
		name: "cuộc hẹn, lời hứa",
		character: {
			hiragana: "やくそく",
			katakana: null,
			kanji: "約束",
		},
	},
	{
		name: "việc làm thêm",
		character: {
			hiragana: null,
			katakana: "アルバイト",
			kanji: null,
		},
	},
	{
		name: "chồng (dùng khi nói về chồng người khác)",
		character: {
			hiragana: "ごしゅじん",
			katakana: null,
			kanji: "ご主人",
		},
	},
	{
		name: "chồng (dùng khi nói về chồng mình)",
		character: {
			hiragana: "おっと/しゅじん",
			katakana: null,
			kanji: "夫 /主人",
		},
	},
	{
		name: "vợ (dùng khi nói về vợ người khác)",
		character: {
			hiragana: "おくさん",
			katakana: null,
			kanji: "奥さん",
		},
	},
	{
		name: "vợ (dùng khi nói về vợ mình)",
		character: {
			hiragana: "つま/かない",
			katakana: null,
			kanji: "妻/家内",
		},
	},
	{
		name: "con cái",
		character: {
			hiragana: "こども",
			katakana: null,
			kanji: "子ども",
		},
	},
	{
		name: "tốt, rõ (chỉ mức độ)",
		character: {
			hiragana: "よく",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "đại khái, đại thể",
		character: {
			hiragana: "だいたい",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "nhiều",
		character: {
			hiragana: "たくさん",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "ít, một ít",
		character: {
			hiragana: "すこし",
			katakana: null,
			kanji: "少し",
		},
	},
	{
		name: "hoàn toàn  không",
		character: {
			hiragana: "ぜんぜん",
			katakana: null,
			kanji: "全然",
		},
	},
	{
		name: "sớm, nhanh",
		character: {
			hiragana: "はやく",
			katakana: null,
			kanji: "早く, 速く",
		},
	},
	{
		name: "vì ",
		character: {
			hiragana: "～から",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "tại sao",
		character: {
			hiragana: "どうして",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Hãy cho tôi mượn.",
		character: {
			hiragana: "貸してください",
			katakana: null,
			kanji: "貸してください",
		},
	},
	{
		name: "Được chứ./ Được ạ.",
		character: {
			hiragana: "いいですよ",
			katakana: null,
			kanji: "いいですよ",
		},
	},
	{
		name: "Thật đáng tiếc nhỉ./ buồn nhỉ.",
		character: {
			hiragana: "残念ですね",
			katakana: null,
			kanji: "残念ですね",
		},
	},
	{
		name: "Ah",
		character: {
			hiragana: "ああ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Anh/chị cùng  (làm cái gì đó) với chúng tôi được không?",
		character: {
			hiragana: "いっしょにいかがですか。",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "[ thì] có lẽ không được rồi.",
		character: {
			hiragana: "[～は]ちょっと…。",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Không được à?",
		character: {
			hiragana: "だめですか。",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Hẹn Anh/Chị lần sau vậy.",
		character: {
			hiragana: null,
			katakana: null,
			kanji: "また　今度　お願いします",
		},
	},
];

const lessonTen: Array<Iword> = [
	{
		name: "có (tồn tại, dùng cho đồ vật)",
		character: {
			hiragana: "あります",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "có, ở (tồn tại, dùng cho người và động vật)",
		character: {
			hiragana: "います",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "nhiều, đa dạng",
		character: {
			hiragana: "いろいろ[な]",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "người đàn ông",
		character: {
			hiragana: "おとこのひと",
			katakana: null,
			kanji: "男の人",
		},
	},
	{
		name: "người đàn bà",
		character: {
			hiragana: "おんなのひと",
			katakana: null,
			kanji: "女の人",
		},
	},
	{
		name: "cậu con trai",
		character: {
			hiragana: "おとこのこ",
			katakana: null,
			kanji: "男の子",
		},
	},
	{
		name: "cô con gái",
		character: {
			hiragana: "おんなのこ",
			katakana: null,
			kanji: "女の子",
		},
	},
	{
		name: "chó",
		character: {
			hiragana: "いぬ",
			katakana: null,
			kanji: "犬",
		},
	},
	{
		name: "mèo",
		character: {
			hiragana: "ねこ",
			katakana: null,
			kanji: "猫",
		},
	},
	{
		name: "gấu trúc",
		character: {
			hiragana: null,
			katakana: "パンダ",
			kanji: null,
		},
	},
	{
		name: "voi",
		character: {
			hiragana: "ぞう",
			katakana: null,
			kanji: "象",
		},
	},
	{
		name: "cây, gỗ",
		character: {
			hiragana: "き",
			katakana: null,
			kanji: "木",
		},
	},
	{
		name: "vật, đồ vật",
		character: {
			hiragana: "もの",
			katakana: null,
			kanji: "物",
		},
	},
	{
		name: "Pin",
		character: {
			hiragana: "でんち",
			katakana: null,
			kanji: "電池",
		},
	},
	{
		name: "hộp",
		character: {
			hiragana: "はこ",
			katakana: null,
			kanji: "箱",
		},
	},
	{
		name: "công tắc",
		character: {
			hiragana: null,
			katakana: "スイッチ",
			kanji: null,
		},
	},
	{
		name: "tủ lạnh",
		character: {
			hiragana: "れいぞうこ",
			katakana: null,
			kanji: "冷蔵庫",
		},
	},
	{
		name: "bàn",
		character: {
			hiragana: null,
			katakana: "テーブル",
			kanji: null,
		},
	},
	{
		name: "giường",
		character: {
			hiragana: null,
			katakana: "ベッド",
			kanji: null,
		},
	},
	{
		name: "giá sách",
		character: {
			hiragana: "たな",
			katakana: null,
			kanji: "棚",
		},
	},
	{
		name: "cửa",
		character: {
			hiragana: null,
			katakana: "ドア",
			kanji: null,
		},
	},
	{
		name: "cửa sổ",
		character: {
			hiragana: "まど",
			katakana: null,
			kanji: "窓",
		},
	},
	{
		name: "hộp thư, hòm thư",
		character: {
			hiragana: null,
			katakana: "ポスト",
			kanji: null,
		},
	},
	{
		name: "toà nhà",
		character: {
			hiragana: null,
			katakana: "ビル",
			kanji: null,
		},
	},
	{
		name: "máy rút tiền tự động ATM",
		character: {
			hiragana: "ATM",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "cửa hàng tiện lợi (mở 24/24)",
		character: {
			hiragana: null,
			katakana: "コンビニ",
			kanji: null,
		},
	},
	{
		name: "công viên",
		character: {
			hiragana: "こうえん",
			katakana: null,
			kanji: "公園",
		},
	},
	{
		name: "quán giải khát, quán cà-phê",
		character: {
			hiragana: "きっさてん",
			katakana: null,
			kanji: "喫茶店",
		},
	},
	{
		name: "hiệu , cửa hàng ",
		character: {
			hiragana: "～や",
			katakana: null,
			kanji: "～屋",
		},
	},
	{
		name: "bến xe, điểm lên xuống xe",
		character: {
			hiragana: "のりば",
			katakana: null,
			kanji: "乗り場",
		},
	},
	{
		name: "tỉnh",
		character: {
			hiragana: "けん",
			katakana: null,
			kanji: "県",
		},
	},
	{
		name: "trên",
		character: {
			hiragana: "うえ",
			katakana: null,
			kanji: "上",
		},
	},
	{
		name: "dưới",
		character: {
			hiragana: "した",
			katakana: null,
			kanji: "下",
		},
	},
	{
		name: "trước",
		character: {
			hiragana: "まえ",
			katakana: null,
			kanji: "前",
		},
	},
	{
		name: "sau",
		character: {
			hiragana: "うしろ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "phải",
		character: {
			hiragana: "みぎ",
			katakana: null,
			kanji: "右",
		},
	},
	{
		name: "trái",
		character: {
			hiragana: "ひだり",
			katakana: null,
			kanji: "左",
		},
	},
	{
		name: "trong, giữa",
		character: {
			hiragana: "なか",
			katakana: null,
			kanji: "中",
		},
	},
	{
		name: "ngoài",
		character: {
			hiragana: "そと",
			katakana: null,
			kanji: "外",
		},
	},
	{
		name: "bên cạnh",
		character: {
			hiragana: "となり",
			katakana: null,
			kanji: "隣",
		},
	},
	{
		name: "gần",
		character: {
			hiragana: "ちかく",
			katakana: null,
			kanji: "近く",
		},
	},
	{
		name: "giữa",
		character: {
			hiragana: "あいだ",
			katakana: null,
			kanji: "間",
		},
	},
	{
		name: "và , [v.v.]",
		character: {
			hiragana: "～や～[など] ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Cám ơn",
		character: {
			hiragana: "[どうも]すみません。",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "nampla, nước mắn",
		character: {
			hiragana: null,
			katakana: "ナンプラー",
			kanji: null,
		},
	},
	{
		name: "góc, khu vực",
		character: {
			hiragana: null,
			katakana: "コーナー",
			kanji: null,
		},
	},
	{
		name: "ở dưới cùng",
		character: {
			hiragana: "いちばん下",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Công viên Tokyo Disneyland",
		character: {
			hiragana: null,
			katakana: null,
			kanji: "東京ディズニーランド",
		},
	},
	{
		name: "tên một siêu thị (giả định)",
		character: {
			hiragana: null,
			katakana: "アジアストア",
			kanji: null,
		},
	},
];

const lessonEleven: Array<Iword> = [
	{
		name: "có [con]",
		character: {
			hiragana: "こどもが～います",
			katakana: null,
			kanji: "子供が～います",
		},
	},
	{
		name: "ở [Nhật]",
		character: {
			hiragana: "にほんに～います",
			katakana: null,
			kanji: "日本に～います",
		},
	},
	{
		name: "mất, tốn (thời gian, tiền bạc)",
		character: {
			hiragana: "かかります",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "nghỉ [làm việc]",
		character: {
			hiragana: "やすみます",
			katakana: null,
			kanji: "休みます",
		},
	},
	{
		name: "một cái (dùng để đếm đồ vật)",
		character: {
			hiragana: "ひとつ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "hai cái",
		character: {
			hiragana: "ふたつ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "ba cái",
		character: {
			hiragana: "みっつ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "bốn cái",
		character: {
			hiragana: "よっつ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "năm cái",
		character: {
			hiragana: "いつつ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "sáu cái",
		character: {
			hiragana: "むっつ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "bảy cái",
		character: {
			hiragana: "ななつ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "tám cái",
		character: {
			hiragana: "やっつ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "chín cái",
		character: {
			hiragana: "ここのつ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "mười cái",
		character: {
			hiragana: "とお",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "mấy cái, bao nhiêu cái",
		character: {
			hiragana: "いくつ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "một người",
		character: {
			hiragana: "ひとり",
			katakana: null,
			kanji: "１人",
		},
	},
	{
		name: "hai người",
		character: {
			hiragana: "ふたり",
			katakana: null,
			kanji: "２人",
		},
	},
	{
		name: "- người",
		character: {
			hiragana: "―にん",
			katakana: null,
			kanji: "－人",
		},
	},
	{
		name: "- cái (dùng để đếm máy móc, xe cộ v.v.)",
		character: {
			hiragana: "―だい",
			katakana: null,
			kanji: "－台",
		},
	},
	{
		name: "tờ, tấm (dùng để đếm những vật mỏng như giấy, con tem v.v.)",
		character: {
			hiragana: "―まい",
			katakana: null,
			kanji: "－枚",
		},
	},
	{
		name: "- lần",
		character: {
			hiragana: "―かい",
			katakana: null,
			kanji: "―回",
		},
	},
	{
		name: "táo",
		character: {
			hiragana: "りんご",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "quýt",
		character: {
			hiragana: "みかん",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "bánh San Uých",
		character: {
			hiragana: null,
			katakana: "サンドイッチ",
			kanji: null,
		},
	},
	{
		name: "món [cơm] ca-ri",
		character: {
			hiragana: null,
			katakana: "カレー[ライス]",
			kanji: null,
		},
	},
	{
		name: "kem",
		character: {
			hiragana: null,
			katakana: "アイスクリーム",
			kanji: null,
		},
	},
	{
		name: "tem",
		character: {
			hiragana: "きって",
			katakana: null,
			kanji: "切手",
		},
	},
	{
		name: "bưu thiếp",
		character: {
			hiragana: "はがき",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "phong bì",
		character: {
			hiragana: "ふうとう",
			katakana: null,
			kanji: "封筒",
		},
	},
	{
		name: "bố mẹ",
		character: {
			hiragana: "りょうしん",
			katakana: null,
			kanji: "両親",
		},
	},
	{
		name: "anh chị em",
		character: {
			hiragana: "きょうだい",
			katakana: null,
			kanji: "兄弟",
		},
	},
	{
		name: "anh trai",
		character: {
			hiragana: "あに",
			katakana: null,
			kanji: "兄",
		},
	},
	{
		name: "anh trai (dùng cho người khác)",
		character: {
			hiragana: "おにいさん",
			katakana: null,
			kanji: "お兄さん",
		},
	},
	{
		name: "chị gái",
		character: {
			hiragana: "あね",
			katakana: null,
			kanji: "姉",
		},
	},
	{
		name: "chị gái (dùng cho người khác)",
		character: {
			hiragana: "おねえさん",
			katakana: null,
			kanji: "お姉さん",
		},
	},
	{
		name: "em trai",
		character: {
			hiragana: "おとうと",
			katakana: null,
			kanji: "弟",
		},
	},
	{
		name: "em trai (dùng cho người khác)",
		character: {
			hiragana: "おとうとさん",
			katakana: null,
			kanji: "弟さん",
		},
	},
	{
		name: "em gái",
		character: {
			hiragana: "いもうと",
			katakana: null,
			kanji: "妹",
		},
	},
	{
		name: "em gái (dùng cho người khác)",
		character: {
			hiragana: "いもうとさん",
			katakana: null,
			kanji: "妹さん",
		},
	},
	{
		name: "nước ngoài",
		character: {
			hiragana: "がいこく",
			katakana: null,
			kanji: "外国",
		},
	},
	{
		name: "lưu học sinh, sinh viên nước ngoài",
		character: {
			hiragana: "りゅうがくせい",
			katakana: null,
			kanji: "留学生",
		},
	},
	{
		name: "lớp học",
		character: {
			hiragana: null,
			katakana: "クラス",
			kanji: null,
		},
	},
	{
		name: "- tiếng",
		character: {
			hiragana: "―じかん",
			katakana: null,
			kanji: "―時間",
		},
	},
	{
		name: "- tuần",
		character: {
			hiragana: "―しゅうかん",
			katakana: null,
			kanji: "―週間",
		},
	},
	{
		name: "- tháng",
		character: {
			hiragana: "―かげつ",
			katakana: null,
			kanji: "－か月",
		},
	},
	{
		name: "- năm",
		character: {
			hiragana: "―ねん",
			katakana: null,
			kanji: "―年",
		},
	},
	{
		name: "khoảng ",
		character: {
			hiragana: "～ぐらい",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "bao lâu",
		character: {
			hiragana: "どのくらい",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "tổng cộng",
		character: {
			hiragana: "ぜんぶで",
			katakana: null,
			kanji: "全部で",
		},
	},
	{
		name: "tất cả",
		character: {
			hiragana: "みんな",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "chỉ ",
		character: {
			hiragana: "～だけ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Tôi đã rõ rồi ạ (thưa ông/bà)",
		character: {
			hiragana: "かしこまりました。",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Trời đẹp nhỉ.",
		character: {
			hiragana: null,
			katakana: null,
			kanji: "いい[お]天気",
		},
	},
	{
		name: "Anh/ chị đi ra ngoài đấy à?",
		character: {
			hiragana: "お出かけですか。",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Tôi đi  một chút.",
		character: {
			hiragana: "ちょっと～まで。",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Anh/chị đi nhé.",
		character: {
			hiragana: "行っていらっしゃい。",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Tôi đi đây.",
		character: {
			hiragana: "行ってきます。",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "gửi bằng đường biển",
		character: {
			hiragana: null,
			katakana: null,
			kanji: "船便",
		},
	},
	{
		name: "gửi bằng đường hàng không",
		character: {
			hiragana: null,
			katakana: null,
			kanji: "航空便",
		},
	},
	{
		name: "Nhờ anh/chị.",
		character: {
			hiragana: null,
			katakana: null,
			kanji: "お願いします。",
		},
	},
	{
		name: "Úc",
		character: {
			hiragana: null,
			katakana: "オーストラリア",
			kanji: null,
		},
	},
];

const lessonTwelve: Array<Iword> = [
	{
		name: "giản đơn",
		character: {
			hiragana: "かんたん",
			katakana: null,
			kanji: "簡単",
		},
	},
	{
		name: "gần",
		character: {
			hiragana: "ちかい",
			katakana: null,
			kanji: "近い",
		},
	},
	{
		name: "xa",
		character: {
			hiragana: "とおい",
			katakana: null,
			kanji: "遠い",
		},
	},
	{
		name: "nhanh, sớm",
		character: {
			hiragana: "はやい",
			katakana: null,
			kanji: "速い, 早い",
		},
	},
	{
		name: "chậm, muộn",
		character: {
			hiragana: "おそい",
			katakana: null,
			kanji: "遅い",
		},
	},
	{
		name: "nhiều [người]",
		character: {
			hiragana: "[ひとが～]おおい",
			katakana: null,
			kanji: "[人が～]多い",
		},
	},
	{
		name: "ít [người]",
		character: {
			hiragana: "[ひとが～]すくない",
			katakana: null,
			kanji: "[人が～]少ない",
		},
	},
	{
		name: "ấm",
		character: {
			hiragana: "あたたかい",
			katakana: null,
			kanji: "温かい, 暖かい",
		},
	},
	{
		name: "mát",
		character: {
			hiragana: "すずしい",
			katakana: null,
			kanji: "涼しい",
		},
	},
	{
		name: "ngọt",
		character: {
			hiragana: "あまい",
			katakana: null,
			kanji: "甘い",
		},
	},
	{
		name: "cay",
		character: {
			hiragana: "からい",
			katakana: null,
			kanji: "辛い",
		},
	},
	{
		name: "nặng",
		character: {
			hiragana: "おもい",
			katakana: null,
			kanji: "重い",
		},
	},
	{
		name: "nhẹ",
		character: {
			hiragana: "かるい",
			katakana: null,
			kanji: "軽い",
		},
	},
	{
		name: "thích, chọn, dùng [cafe]",
		character: {
			hiragana: "[コーヒーが～]いい",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "mùa",
		character: {
			hiragana: "きせつ",
			katakana: null,
			kanji: "季節",
		},
	},
	{
		name: "mùa xuân",
		character: {
			hiragana: "はる",
			katakana: null,
			kanji: "春",
		},
	},
	{
		name: "mùa hè",
		character: {
			hiragana: "なつ",
			katakana: null,
			kanji: "夏",
		},
	},
	{
		name: "mùa thu",
		character: {
			hiragana: "あき",
			katakana: null,
			kanji: "秋",
		},
	},
	{
		name: "mùa đông",
		character: {
			hiragana: "ふゆ",
			katakana: null,
			kanji: "冬",
		},
	},
	{
		name: "thời tiết",
		character: {
			hiragana: "てんき",
			katakana: null,
			kanji: "天気",
		},
	},
	{
		name: "mưa",
		character: {
			hiragana: "あめ",
			katakana: null,
			kanji: "雨",
		},
	},
	{
		name: "tuyết",
		character: {
			hiragana: "ゆき",
			katakana: null,
			kanji: "雪",
		},
	},
	{
		name: "có mây",
		character: {
			hiragana: "くもり",
			katakana: null,
			kanji: "曇り",
		},
	},
	{
		name: "khách sạn",
		character: {
			hiragana: null,
			katakana: "ホテル",
			kanji: null,
		},
	},
	{
		name: "sân bay",
		character: {
			hiragana: "くうこう",
			katakana: null,
			kanji: "空港",
		},
	},
	{
		name: "biển, đại dương",
		character: {
			hiragana: "うみ",
			katakana: null,
			kanji: "海",
		},
	},
	{
		name: "thế giới",
		character: {
			hiragana: "せかい",
			katakana: null,
			kanji: "世界",
		},
	},
	{
		name: "tiệc (をします：tổ chức tiệc)",
		character: {
			hiragana: null,
			katakana: "パーティー",
			kanji: null,
		},
	},
	{
		name: "lễ hội",
		character: {
			hiragana: "[お]まつり",
			katakana: null,
			kanji: "[お]祭り",
		},
	},
	{
		name: "Sukiyaki (món thịt bò nấu rau)",
		character: {
			hiragana: "すきやき",
			katakana: null,
			kanji: "すき焼き",
		},
	},
	{
		name: "Sashimi (món gỏi cá sống)",
		character: {
			hiragana: "さしみ",
			katakana: null,
			kanji: "刺身",
		},
	},
	{
		name: "Sushi",
		character: {
			hiragana: "[お]すし",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Tempura (món hải sản và rau chiên tẩm bột)",
		character: {
			hiragana: "てんぷら",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "thịt heo, thịt lợn",
		character: {
			hiragana: "ぶたにく",
			katakana: null,
			kanji: "豚肉",
		},
	},
	{
		name: "thịt gà",
		character: {
			hiragana: "とりにく",
			katakana: null,
			kanji: "とり肉",
		},
	},
	{
		name: "thịt bò",
		character: {
			hiragana: "ぎゅうにく",
			katakana: null,
			kanji: "牛肉",
		},
	},
	{
		name: "chanh tây",
		character: {
			hiragana: null,
			katakana: "レモン",
			kanji: null,
		},
	},
	{
		name: "Nghệ thuật cắm hoa (～をします：cắm hoa)",
		character: {
			hiragana: "いけばな",
			katakana: null,
			kanji: "生け花",
		},
	},
	{
		name: "lá đỏ",
		character: {
			hiragana: "もみじ",
			katakana: null,
			kanji: "紅葉",
		},
	},
	{
		name: "cái nào",
		character: {
			hiragana: "どちら",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "cả hai",
		character: {
			hiragana: "どちらも",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "nhất",
		character: {
			hiragana: "いちばん",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "suốt",
		character: {
			hiragana: "ずっと",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "lần đầu tiên",
		character: {
			hiragana: "はじめて",
			katakana: null,
			kanji: "初めて",
		},
	},
	{
		name: "Tôi đã về đây. (dùng nói khi về đến nhà)",
		character: {
			hiragana: "ただいま",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Anh/Chị đã về đấy à. (dùng để nói với ai đó mới về đến nhà)",
		character: {
			hiragana: "おかえりなさい",
			katakana: null,
			kanji: "お帰りなさい",
		},
	},
	{
		name: "Ôi, (người) đông quá nhỉ!",
		character: {
			hiragana: "わあ、すごい人ですね。",
			katakana: null,
			kanji: "人",
		},
	},
	{
		name: "Tôi mệt rồi",
		character: {
			hiragana: "つかれました",
			katakana: null,
			kanji: "疲れました。",
		},
	},
	{
		name: "Lễ hội Gi-ôn (lễ hội nổi tiếng nhất ở Kyoto)",
		character: {
			hiragana: "ぎおんまつり",
			katakana: null,
			kanji: "祇園祭",
		},
	},
	{
		name: "Hồng Kông",
		character: {
			hiragana: null,
			katakana: "ホンコン",
			kanji: null,
		},
	},
	{
		name: "Singapore",
		character: {
			hiragana: null,
			katakana: "シンガポール",
			kanji: null,
		},
	},
	{
		name: "tên một siêu thị (giả định)",
		character: {
			hiragana: null,
			katakana: "ＡＣＢストア",
			kanji: null,
		},
	},
	{
		name: "tên một siêu thị (giả định)",
		character: {
			hiragana: null,
			katakana: "ジャパン",
			kanji: null,
		},
	},

];

const lessonThirteen: Array<Iword> = [
	{
		name: "chơi",
		character: {
			hiragana: "あそびます",
			katakana: null,
			kanji: "遊びます",
		},
	},
	{
		name: "bơi",
		character: {
			hiragana: "およぎます",
			katakana: null,
			kanji: "泳ぎます",
		},
	},
	{
		name: "đón",
		character: {
			hiragana: "むかえます",
			katakana: null,
			kanji: "迎えます",
		},
	},
	{
		name: "mệt",
		character: {
			hiragana: "つかれます",
			katakana: null,
			kanji: "疲れます",
		},
	},
	{
		name: "kết hôn, lập gia đình, cưới",
		character: {
			hiragana: "けっこんします",
			katakana: null,
			kanji: "結婚します",
		},
	},
	{
		name: "mua hàng",
		character: {
			hiragana: "かいものします",
			katakana: null,
			kanji: "買い物します",
		},
	},
	{
		name: "ăn cơm",
		character: {
			hiragana: "しょくじします",
			katakana: null,
			kanji: "食事します",
		},
	},
	{
		name: "đi dạo [ở công viên]",
		character: {
			hiragana: "さんぽします [こうえんを～]",
			katakana: null,
			kanji: "散歩します [公園を～]",
		},
	},
	{
		name: "vất vả, khó khăn, khổ",
		character: {
			hiragana: "たいへん「な」",
			katakana: null,
			kanji: "大変「な」",
		},
	},
	{
		name: "muốn có",
		character: {
			hiragana: "ほしい",
			katakana: null,
			kanji: "欲しい",
		},
	},
	{
		name: "rộng",
		character: {
			hiragana: "ひろい",
			katakana: null,
			kanji: "広い",
		},
	},
	{
		name: "chật, hẹp",
		character: {
			hiragana: "せまい",
			katakana: null,
			kanji: "狭い",
		},
	},
	{
		name: "bể bơi",
		character: {
			hiragana: null,
			katakana: "プール",
			kanji: null,
		},
	},
	{
		name: "sông",
		character: {
			hiragana: "かわ",
			katakana: null,
			kanji: "川",
		},
	},
	{
		name: "mỹ thuật",
		character: {
			hiragana: "びじゅつ",
			katakana: null,
			kanji: "美術",
		},
	},
	{
		name: "việc câu cá (をします：câu cá)",
		character: {
			hiragana: "つり",
			katakana: null,
			kanji: "釣り",
		},
	},
	{
		name: "việc trượt tuyết (をします：trượt tuyết)",
		character: {
			hiragana: null,
			katakana: "スキー",
			kanji: null,
		},
	},
	{
		name: "cuối tuần",
		character: {
			hiragana: "しゅうまつ",
			katakana: null,
			kanji: "週末",
		},
	},
	{
		name: "Tết",
		character: {
			hiragana: "[お]しょうがつ",
			katakana: null,
			kanji: "[お]正月",
		},
	},
	{
		name: "khoảng  (dùng cho thời gian)",
		character: {
			hiragana: "～ごろ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "cái gì đó",
		character: {
			hiragana: "なにか",
			katakana: null,
			kanji: "何か",
		},
	},
	{
		name: "đâu đó, chỗ nào đó",
		character: {
			hiragana: "どこか",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "(tôi) khát.",
		character: {
			hiragana: "のどがかわきます",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "(tôi) đói rồi.",
		character: {
			hiragana: "おなかがすきます",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Nhất trí./ Chúng ta thống nhất như thế.",
		character: {
			hiragana: "そうしましょう。",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Anh/Chị dùng món gì ạ",
		character: {
			hiragana: "ごちゅうもんは？",
			katakana: null,
			kanji: "ご注文は？",
		},
	},
	{
		name: "cơm suất, cơm phần",
		character: {
			hiragana: "ていしょく",
			katakana: null,
			kanji: "定食",
		},
	},
	{
		name: "món cơm thịt bò",
		character: {
			hiragana: "ぎゅうどん",
			katakana: null,
			kanji: "牛どん",
		},
	},
	{
		name: "Xin anh/chị vui lòng đợi [một chút].",
		character: {
			hiragana: "[しょうしょう]おまちください",
			katakana: null,
			kanji: "[しょうしょう]お待ちください",
		},
	},
	{
		name: "(cách nói lịch sự của です)",
		character: {
			hiragana: "～でございます。",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "riêng ra/ để riêng",
		character: {
			hiragana: "べつべつに",
			katakana: null,
			kanji: "別々に",
		},
	},
	{
		name: "tên một công ty (giả định)",
		character: {
			hiragana: null,
			katakana: "アキックス",
			kanji: null,
		},
	},
	{
		name: "tên một chương trình truyền hình (giả định)",
		character: {
			hiragana: "おはようテレビ",
			katakana: null,
			kanji: null,
		},
	},
];

const lessonFourteen: Array<Iword> = [
	{
		name: "bật (điện, máy điều hòa)",
		character: {
			hiragana: "つけます",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "tắt (điện, máy điều hòa)",
		character: {
			hiragana: "けします",
			katakana: null,
			kanji: "消します",
		},
	},
	{
		name: "mở (cửa, cửa sổ)",
		character: {
			hiragana: "あけます",
			katakana: null,
			kanji: "開けます",
		},
	},
	{
		name: "đóng (cửa, cửa sổ)",
		character: {
			hiragana: "しめます",
			katakana: null,
			kanji: "閉めます",
		},
	},
	{
		name: "vội, gấp",
		character: {
			hiragana: "いそぎます",
			katakana: null,
			kanji: "急ぎます",
		},
	},
	{
		name: "đợi, chờ",
		character: {
			hiragana: "まちます",
			katakana: null,
			kanji: "待ちます",
		},
	},
	{
		name: "mang, cầm",
		character: {
			hiragana: "もちます",
			katakana: null,
			kanji: "持ちます",
		},
	},
	{
		name: "lấy (muối)",
		character: {
			hiragana: "とります",
			katakana: null,
			kanji: "取ります",
		},
	},
	{
		name: "giúp (làm việc)",
		character: {
			hiragana: "てつだいます",
			katakana: null,
			kanji: "手伝います",
		},
	},
	{
		name: "gọi (taxi, tên)",
		character: {
			hiragana: "よびます",
			katakana: null,
			kanji: "呼びます",
		},
	},
	{
		name: "nói, nói chuyện",
		character: {
			hiragana: "はなします",
			katakana: null,
			kanji: "話します",
		},
	},
	{
		name: "dùng, sử dụng",
		character: {
			hiragana: "つかいます",
			katakana: null,
			kanji: "使います",
		},
	},
	{
		name: "dừng, đỗ",
		character: {
			hiragana: "とめます",
			katakana: null,
			kanji: "止めます",
		},
	},
	{
		name: "cho xem, trình",
		character: {
			hiragana: "みせます",
			katakana: null,
			kanji: "見せます",
		},
	},
	{
		name: "nói, cho biết [địa chỉ]",
		character: {
			hiragana: "おしえます",
			katakana: null,
			kanji: "教えます",
		},
	},
	{
		name: "ngồi",
		character: {
			hiragana: "すわります",
			katakana: null,
			kanji: "座ります",
		},
	},
	{
		name: "đứng",
		character: {
			hiragana: "たちます",
			katakana: null,
			kanji: "立ちます",
		},
	},
	{
		name: "vào [quán giải khát]",
		character: {
			hiragana: "はいります",
			katakana: null,
			kanji: "入ります",
		},
	},
	{
		name: "ra, ra khỏi [quán giải khát]",
		character: {
			hiragana: "でます",
			katakana: null,
			kanji: "出ます",
		},
	},
	{
		name: "rơi [mưa]",
		character: {
			hiragana: "ふります",
			katakana: null,
			kanji: "降ります",
		},
	},
	{
		name: "copy",
		character: {
			hiragana: "コピーします",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "điện, đèn điện",
		character: {
			hiragana: "でんき",
			katakana: null,
			kanji: "電気",
		},
	},
	{
		name: "máy điều hòa",
		character: {
			hiragana: "エアコン",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "hộ chiếu",
		character: {
			hiragana: "パスポート",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "tên",
		character: {
			hiragana: "なまえ",
			katakana: null,
			kanji: "名前",
		},
	},
	{
		name: "địa chỉ",
		character: {
			hiragana: "じゅうしょ",
			katakana: null,
			kanji: "住所",
		},
	},
	{
		name: "bản đồ",
		character: {
			hiragana: "ちず",
			katakana: null,
			kanji: "地図",
		},
	},
	{
		name: "muối",
		character: {
			hiragana: "しお",
			katakana: null,
			kanji: "塩",
		},
	},
	{
		name: "đường",
		character: {
			hiragana: "さとう",
			katakana: null,
			kanji: "砂糖",
		},
	},
	{
		name: "câu hỏi, vấn đề",
		character: {
			hiragana: "もんだい",
			katakana: null,
			kanji: "問題",
		},
	},
	{
		name: "câu trả lời",
		character: {
			hiragana: "こたえ",
			katakana: null,
			kanji: "答え",
		},
	},
	{
		name: "cách đọc",
		character: {
			hiragana: "よみかた",
			katakana: null,
			kanji: "読み方",
		},
	},
	{
		name: "cách ",
		character: {
			hiragana: "～かた",
			katakana: null,
			kanji: "～方",
		},
	},
	{
		name: "thẳng",
		character: {
			hiragana: "まっすぐ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "chậm, thong thả, thoải mái",
		character: {
			hiragana: "ゆっくり",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "ngay, lập tức",
		character: {
			hiragana: "すぐ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "lại (đến)",
		character: {
			hiragana: "また",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "sau",
		character: {
			hiragana: "あとで",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "thêm một chút nữa thôi",
		character: {
			hiragana: "もう　すこし",
			katakana: null,
			kanji: "もう少し",
		},
	},
	{
		name: "thêm",
		character: {
			hiragana: "もう～",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "thôi/nào (dùng để thúc giục hoặc khuyến khích ai làm gì)",
		character: {
			hiragana: "さあ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Ô! (câu cảm thán khi phát hiện hoặc thấy cái gì đó lạ, hoặc bất ngờ)",
		character: {
			hiragana: "あれ？",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Anh/ Chị rẽ phải ở chổ đèn tín hiệu.",
		character: {
			hiragana: null,
			katakana: null,
			kanji: "信号を右へ曲がってください",
		},
	},
	{
		name: "Gởi anh tiền này.",
		character: {
			hiragana: null,
			katakana: null,
			kanji: "これでお願いします",
		},
	},
	{
		name: "tiền lẻ",
		character: {
			hiragana: "おつり",
			katakana: null,
			kanji: "お釣り",
		},
	},
	{
		name: "tên một thành phố (giả định)",
		character: {
			hiragana: "みどりちょう",
			katakana: null,
			kanji: "みどり町",
		},
	},
];

const lessonFifteen: Array<Iword> = [
	{
		name: "đặt, để",
		character: {
			hiragana: "おきます",
			katakana: null,
			kanji: "置きます",
		},
	},
	{
		name: "làm, chế tạo, sản xuất",
		character: {
			hiragana: "つくります",
			katakana: null,
			kanji: "作ります, 造ります",
		},
	},
	{
		name: "bán",
		character: {
			hiragana: "うります",
			katakana: null,
			kanji: "売ります",
		},
	},
	{
		name: "biết",
		character: {
			hiragana: "しります",
			katakana: null,
			kanji: "知ります",
		},
	},
	{
		name: "sống, ở",
		character: {
			hiragana: "すみます",
			katakana: null,
			kanji: "住みます",
		},
	},
	{
		name: "nghiên cứu",
		character: {
			hiragana: "けんきゅうします",
			katakana: null,
			kanji: "研究します",
		},
	},
	{
		name: "tài liệu, tư liệu",
		character: {
			hiragana: "しりょう",
			katakana: null,
			kanji: "資料",
		},
	},
	{
		name: "ca-ta-lô",
		character: {
			hiragana: null,
			katakana: "カタログ",
			kanji: null,
		},
	},
	{
		name: "bảng giờ tàu chạy",
		character: {
			hiragana: "じこくひょう",
			katakana: null,
			kanji: "時刻表",
		},
	},
	{
		name: "quần áo",
		character: {
			hiragana: "ふく",
			katakana: null,
			kanji: "服",
		},
	},
	{
		name: "sản phẩm",
		character: {
			hiragana: "せいひん",
			katakana: null,
			kanji: "製品",
		},
	},
	{
		name: "phần mềm",
		character: {
			hiragana: null,
			katakana: "ソフト",
			kanji: null,
		},
	},
	{
		name: "kim từ điển",
		character: {
			hiragana: "でんしじしょ",
			katakana: null,
			kanji: "電子辞書",
		},
	},
	{
		name: "kinh tế",
		character: {
			hiragana: "けいざい",
			katakana: null,
			kanji: "経済",
		},
	},
	{
		name: "tòa thị chính",
		character: {
			hiragana: "しやくしょ",
			katakana: null,
			kanji: "市役所",
		},
	},
	{
		name: "trường trung học phổ thông, trường cấp 3",
		character: {
			hiragana: "こうこう",
			katakana: null,
			kanji: "高校",
		},
	},
	{
		name: "nha sĩ",
		character: {
			hiragana: "はいしゃ",
			katakana: null,
			kanji: "歯医者",
		},
	},
	{
		name: "độc thân",
		character: {
			hiragana: "どくしん",
			katakana: null,
			kanji: "独身",
		},
	},
	{
		name: "xin lỗi",
		character: {
			hiragana: "すみません",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "các anh chị, các ông bà, các bạn, quý vị",
		character: {
			hiragana: "みなさん",
			katakana: null,
			kanji: "皆さん",
		},
	},
	{
		name: "nhớ lại, hồi tưởng",
		character: {
			hiragana: "おもいでします",
			katakana: null,
			kanji: "思い出します",
		},
	},
	{
		name: "kính ngữ của います",
		character: {
			hiragana: "いらっしゃいます",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "tên một khu phố buôn bán ở Osaka",
		character: {
			hiragana: "にっぽんばし",
			katakana: null,
			kanji: "日本橋",
		},
	},
	{
		name: "tên chương trình truyền hình (giả định)",
		character: {
			hiragana: null,
			katakana: "みんなのインタビュー",
			kanji: null,
		},
	},
];

const lessonSixteen: Array<Iword> = [
	{
		name: "đi, lên [tàu]",
		character: {
			hiragana: "のります",
			katakana: null,
			kanji: "乗ります",
		},
	},
	{
		name: "xuống [tàu]",
		character: {
			hiragana: "おります",
			katakana: null,
			kanji: "降ります",
		},
	},
	{
		name: "chuyển, đổi (tàu)",
		character: {
			hiragana: "のりかえます",
			katakana: null,
			kanji: "乗り換えます",
		},
	},
	{
		name: "tắm [vòi hoa sen]",
		character: {
			hiragana: "あびます",
			katakana: null,
			kanji: "浴びます",
		},
	},
	{
		name: "cho vào, bỏ vào",
		character: {
			hiragana: "いれます",
			katakana: null,
			kanji: "入れます",
		},
	},
	{
		name: "lấy ra, đưa ra, gửi",
		character: {
			hiragana: "だします",
			katakana: null,
			kanji: "出します",
		},
	},
	{
		name: "rút [tiền]",
		character: {
			hiragana: "おろします",
			katakana: null,
			kanji: "下ろします",
		},
	},
	{
		name: "vào, nhập học [đại học]",
		character: {
			hiragana: "はいります",
			katakana: null,
			kanji: "入ります",
		},
	},
	{
		name: "ra, tốt nghiệp [đại học]",
		character: {
			hiragana: "でます",
			katakana: null,
			kanji: "出ます",
		},
	},
	{
		name: "bấm, ấn (nút)",
		character: {
			hiragana: "おします",
			katakana: null,
			kanji: "押します",
		},
	},
	{
		name: "uống (bia, rượu)",
		character: {
			hiragana: "のみます",
			katakana: null,
			kanji: "飲みます",
		},
	},
	{
		name: "bắt đầu",
		character: {
			hiragana: "はじめます",
			katakana: null,
			kanji: "始めます",
		},
	},
	{
		name: "tham quan kiến tập",
		character: {
			hiragana: "けんがくします",
			katakana: null,
			kanji: "見学します",
		},
	},
	{
		name: "gọi điện thoại",
		character: {
			hiragana: "でんわします",
			katakana: null,
			kanji: "電話します",
		},
	},
	{
		name: "trẻ",
		character: {
			hiragana: "わかい",
			katakana: null,
			kanji: "若い",
		},
	},
	{
		name: "dài",
		character: {
			hiragana: "ながい",
			katakana: null,
			kanji: "長い",
		},
	},
	{
		name: "ngắn",
		character: {
			hiragana: "みじかい",
			katakana: null,
			kanji: "短い",
		},
	},
	{
		name: "sáng",
		character: {
			hiragana: "あかるい",
			katakana: null,
			kanji: "明るい",
		},
	},
	{
		name: "tối",
		character: {
			hiragana: "くらい",
			katakana: null,
			kanji: "暗い",
		},
	},
	{
		name: "người, cơ thể",
		character: {
			hiragana: "からだ",
			katakana: null,
			kanji: "体",
		},
	},
	{
		name: "đầu",
		character: {
			hiragana: "あたま",
			katakana: null,
			kanji: "頭",
		},
	},
	{
		name: "tóc",
		character: {
			hiragana: "かみ",
			katakana: null,
			kanji: "髪",
		},
	},
	{
		name: "mặt",
		character: {
			hiragana: "かお",
			katakana: null,
			kanji: "顔",
		},
	},
	{
		name: "mắt",
		character: {
			hiragana: "め",
			katakana: null,
			kanji: "目",
		},
	},
	{
		name: "tai",
		character: {
			hiragana: "みみ",
			katakana: null,
			kanji: "耳",
		},
	},
	{
		name: "mũi",
		character: {
			hiragana: "はな",
			katakana: null,
			kanji: "鼻",
		},
	},
	{
		name: "miệng",
		character: {
			hiragana: "くち",
			katakana: null,
			kanji: "口",
		},
	},
	{
		name: "răng",
		character: {
			hiragana: "は",
			katakana: null,
			kanji: "歯",
		},
	},
	{
		name: "bụng",
		character: {
			hiragana: "おなか",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "chân",
		character: {
			hiragana: "あし",
			katakana: null,
			kanji: "足",
		},
	},
	{
		name: "chiều cao (cơ thể)",
		character: {
			hiragana: "せ",
			katakana: null,
			kanji: "背",
		},
	},
	{
		name: "dịch vụ",
		character: {
			hiragana: null,
			katakana: "サービス",
			kanji: null,
		},
	},
	{
		name: "việc chạy bộ (をします: chạy bộ)",
		character: {
			hiragana: null,
			katakana: "ジョギング",
			kanji: null,
		},
	},
	{
		name: "vòi hoa sen",
		character: {
			hiragana: null,
			katakana: "シャワー",
			kanji: null,
		},
	},
	{
		name: "màu xanh lá cây",
		character: {
			hiragana: "みどり",
			katakana: null,
			kanji: "緑",
		},
	},
	{
		name: "chùa",
		character: {
			hiragana: "[お]てら",
			katakana: null,
			kanji: "寺",
		},
	},
	{
		name: "đền thờ đạo thần",
		character: {
			hiragana: "じんじゃ",
			katakana: null,
			kanji: "神社",
		},
	},
	{
		name: "số ―",
		character: {
			hiragana: "いちばん",
			katakana: null,
			kanji: "一番",
		},
	},
	{
		name: "làm thế nào",
		character: {
			hiragana: "どうやって",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "cái nào (dùng với trường hợp từ ba thứ trở lên)",
		character: {
			hiragana: "どの～",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "cái nào (dùng với trường hợp ba cái hoặc nhiều hơn)",
		character: {
			hiragana: "どれ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Thật là tuyệt vời. / Kinh quá nhỉ.",
		character: {
			hiragana: "すごいですね。",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "[không,] tôi còn kém lắm. (cách nói khiêm nhường khi ai đó khen)",
		character: {
			hiragana: "[いいえ、]まだまだです。",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Anh/ chị rút tiền ạ?",
		character: {
			hiragana: "おひきだしですか。",
			katakana: null,
			kanji: "お引き出しですか。",
		},
	},
	{
		name: "trước hết, đầu tiên",
		character: {
			hiragana: "まず",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "tiếp theo, sau đó",
		character: {
			hiragana: "つぎに",
			katakana: null,
			kanji: "次に",
		},
	},
	{
		name: "thẻ ngân hàng, thẻ ATM",
		character: {
			hiragana: null,
			katakana: "キャッシュカード",
			kanji: null,
		},
	},
	{
		name: "mã số bí mật (mật khẩu)",
		character: {
			hiragana: "あんしょうばんごう",
			katakana: null,
			kanji: "暗証番号",
		},
	},
	{
		name: "số tiền, khoản tiền",
		character: {
			hiragana: "きんがく",
			katakana: null,
			kanji: "金額",
		},
	},
	{
		name: "sự xác nhận, sự kiểm tra (します：xác nhận)",
		character: {
			hiragana: "かくにん",
			katakana: null,
			kanji: "確認",
		},
	},
	{
		name: "nút",
		character: {
			hiragana: null,
			katakana: "ボタン",
			kanji: null,
		},
	},
	{
		name: "công ty đường sắt Nhật Bản",
		character: {
			hiragana: null,
			katakana: "ＪＲ",
			kanji: null,
		},
	},
	{
		name: "Lễ hội tuyết",
		character: {
			hiragana: "ゆきまつり",
			katakana: null,
			kanji: "雪祭り",
		},
	},
	{
		name: "Bandung (ở Indonesia)",
		character: {
			hiragana: null,
			katakana: "バンドン",
			kanji: null,
		},
	},
	{
		name: "Franken (ở Đức)",
		character: {
			hiragana: null,
			katakana: "フランケン",
			kanji: null,
		},
	},
	{
		name: "Veracruz (ở Mexico)",
		character: {
			hiragana: null,
			katakana: "ベラクルス",
			kanji: null,
		},
	},
	{
		name: "tên một quận ở Osaka",
		character: {
			hiragana: "うめだ",
			katakana: null,
			kanji: "梅田",
		},
	},
	{
		name: "tên một điểm dừng xe buýt (giả tưởng)",
		character: {
			hiragana: "だいがくまえ",
			katakana: null,
			kanji: "大学前",
		},
	},
];

const lessonSeventeen: Array<Iword> = [
	{
		name: "nhớ",
		character: {
			hiragana: "おぼえます",
			katakana: null,
			kanji: "覚えます",
		},
	},
	{
		name: "quên",
		character: {
			hiragana: "わすれます",
			katakana: null,
			kanji: "忘れます",
		},
	},
	{
		name: "mất, đánh mất",
		character: {
			hiragana: "なくします",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "trả tiền",
		character: {
			hiragana: "はらいます",
			katakana: null,
			kanji: "払います",
		},
	},
	{
		name: "trả lại",
		character: {
			hiragana: "かえします",
			katakana: null,
			kanji: "返します",
		},
	},
	{
		name: "ra ngoài",
		character: {
			hiragana: "でかけます",
			katakana: null,
			kanji: "出かけます",
		},
	},
	{
		name: "cởi (quần áo, giầy)",
		character: {
			hiragana: "ぬぎます",
			katakana: null,
			kanji: "脱ぎます",
		},
	},
	{
		name: "mang đi, mang theo",
		character: {
			hiragana: "もっていきます",
			katakana: null,
			kanji: "持って行きます",
		},
	},
	{
		name: "mang đến",
		character: {
			hiragana: "もってきます",
			katakana: null,
			kanji: "持って来ます",
		},
	},
	{
		name: "lo lắng",
		character: {
			hiragana: "しんぱいします",
			katakana: null,
			kanji: "心配します",
		},
	},
	{
		name: "làm thêm, làm quá giờ",
		character: {
			hiragana: "ざんぎょうします",
			katakana: null,
			kanji: "残業します",
		},
	},
	{
		name: "đi công tác",
		character: {
			hiragana: "しゅっちょうします",
			katakana: null,
			kanji: "出張します",
		},
	},
	{
		name: "uống [thuốc]",
		character: {
			hiragana: "のみます",
			katakana: null,
			kanji: "飲みます",
		},
	},
	{
		name: "tắm bồn [vào bồn tắm]",
		character: {
			hiragana: "はいります",
			katakana: null,
			kanji: "入ります",
		},
	},
	{
		name: "quan trọng, quý giá",
		character: {
			hiragana: "たいせつ",
			katakana: null,
			kanji: "大切",
		},
	},
	{
		name: "không sao, không có vấn đề gì",
		character: {
			hiragana: "だいじょうぶ",
			katakana: null,
			kanji: "大丈夫",
		},
	},
	{
		name: "nguy hiểm",
		character: {
			hiragana: "あぶない",
			katakana: null,
			kanji: "危ない",
		},
	},
	{
		name: "cấm hút thuốc",
		character: {
			hiragana: "きんえん",
			katakana: null,
			kanji: "禁煙",
		},
	},
	{
		name: "thẻ bảo hiểm [y tế]",
		character: {
			hiragana: "[けんこう]ほけんしょう",
			katakana: null,
			kanji: "[健康]保険証",
		},
	},
	{
		name: "sốt",
		character: {
			hiragana: "ねつ",
			katakana: null,
			kanji: "熱",
		},
	},
	{
		name: "ốm, bệnh",
		character: {
			hiragana: "びょうき",
			katakana: null,
			kanji: "病気",
		},
	},
	{
		name: "thuốc",
		character: {
			hiragana: "くすり",
			katakana: null,
			kanji: "薬",
		},
	},
	{
		name: "bồn tắm",
		character: {
			hiragana: "[お]ふろ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "áo khoác",
		character: {
			hiragana: "うわぎ",
			katakana: null,
			kanji: "上着",
		},
	},
	{
		name: "quần áo lót",
		character: {
			hiragana: "したぎ",
			katakana: null,
			kanji: "下着",
		},
	},
	{
		name: "2,3 ngày, vài ngày",
		character: {
			hiragana: "２，３にち",
			katakana: null,
			kanji: "２，３日",
		},
	},
	{
		name: "vài (“” là hậu tố đếm)",
		character: {
			hiragana: "２，３～",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "trước  (chỉ thời hạn)",
		character: {
			hiragana: "～までに",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "vì thế, vì vậy, do đó",
		character: {
			hiragana: "ですから",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Có vấn đề gì?<br>Anh/chị bị làm sao?",
		character: {
			hiragana: "どうしましたか。",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "họng",
		character: {
			hiragana: "のど",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Tôi bị đau [].",
		character: {
			hiragana: "[～が]いたいです。",
			katakana: null,
			kanji: "痛い",
		},
	},
	{
		name: "cảm, cúm",
		character: {
			hiragana: "かぜ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "và, sau đó",
		character: {
			hiragana: "それから",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Anh/chị nhớ giữ gìn sức khỏe.<br> (câu nói với người ốm,bị bệnh)",
		character: {
			hiragana: "おだいじに",
			katakana: null,
			kanji: "お大事に",
		},
	},
];

const lessonEighteen: Array<Iword> = [
	{
		name: "có thể",
		character: {
			hiragana: "できます",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "rửa",
		character: {
			hiragana: "あらいます",
			katakana: null,
			kanji: "洗います",
		},
	},
	{
		name: "chơi (nhạc cụ)",
		character: {
			hiragana: "ひきます",
			katakana: null,
			kanji: "弾きます",
		},
	},
	{
		name: "hát",
		character: {
			hiragana: "うたいます",
			katakana: null,
			kanji: "歌います",
		},
	},
	{
		name: "sưu tầm, thu thập",
		character: {
			hiragana: "あつめます",
			katakana: null,
			kanji: "集めます",
		},
	},
	{
		name: "vứt, bỏ đi",
		character: {
			hiragana: "すてます",
			katakana: null,
			kanji: "捨てます",
		},
	},
	{
		name: "đổi",
		character: {
			hiragana: "かえます",
			katakana: null,
			kanji: "換えます",
		},
	},
	{
		name: "lái",
		character: {
			hiragana: "うんてんします",
			katakana: null,
			kanji: "運転します",
		},
	},
	{
		name: "đặt chỗ, đặt trước",
		character: {
			hiragana: "よやくします",
			katakana: null,
			kanji: "予約します",
		},
	},
	{
		name: "đàn Piano",
		character: {
			hiragana: null,
			katakana: "ピアノ",
			kanji: null,
		},
	},
	{
		name: "― mét",
		character: {
			hiragana: null,
			katakana: "―メートル",
			kanji: null,
		},
	},
	{
		name: "tiền mặt",
		character: {
			hiragana: "げんきん",
			katakana: null,
			kanji: "現金",
		},
	},
	{
		name: "sở thích, thú vui",
		character: {
			hiragana: "しゅみ",
			katakana: null,
			kanji: "趣味",
		},
	},
	{
		name: "nhật ký",
		character: {
			hiragana: "にっき",
			katakana: null,
			kanji: "日記",
		},
	},
	{
		name: "việc cầu nguyện (～をします：cầu nguyện)",
		character: {
			hiragana: "[お]いのり",
			katakana: null,
			kanji: "[お]祈り",
		},
	},
	{
		name: "tổ trưởng",
		character: {
			hiragana: "かちょう",
			katakana: null,
			kanji: "課長",
		},
	},
	{
		name: "trưởng phòng",
		character: {
			hiragana: "ぶちょう",
			katakana: null,
			kanji: "部長",
		},
	},
	{
		name: "giám đốc",
		character: {
			hiragana: "しゃちょう",
			katakana: null,
			kanji: "社長",
		},
	},
	{
		name: "động vật",
		character: {
			hiragana: "どうぶつ",
			katakana: null,
			kanji: "動物",
		},
	},
	{
		name: "ngựa",
		character: {
			hiragana: "うま",
			katakana: null,
			kanji: "馬",
		},
	},
	{
		name: "internet",
		character: {
			hiragana: null,
			katakana: "インターネット",
			kanji: null,
		},
	},
	{
		name: "đặt biệt là",
		character: {
			hiragana: "特に",
			katakana: null,
			kanji: "特に",
		},
	},
	{
		name: "thế à! (dùng để biểu thị sự ngạc nhiên hoặc quan tâm)",
		character: {
			hiragana: "へえ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Hay thật nhỉ.",
		character: {
			hiragana: "それはおもしろいですね。",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "khó mà, mãi mà (dùng với thể phủ định)",
		character: {
			hiragana: "なかなか",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Thật không ạ?",
		character: {
			hiragana: "ほんとうですか。",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "nhất định, rất",
		character: {
			hiragana: "ぜひ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: 'Furusato(tên bài hát có nghĩa "quê nhà")',
		character: {
			hiragana: null,
			katakana: null,
			kanji: "故郷",
		},
	},
	{
		name: "Beatles, một băng nhạc nổi tiếng nước Anh",
		character: {
			hiragana: null,
			katakana: "ビートルズ",
			kanji: null,
		},
	},
	{
		name: "một quận ở Tokyo",
		character: {
			hiragana: "秋葉原",
			katakana: null,
			kanji: "秋葉原",
		},
	},
];

const lessonNineTeen: Array<Iword> = [
	{
		name: "leo [núi]",
		character: {
			hiragana: "のぼります",
			katakana: null,
			kanji: "登ります",
		},
	},
	{
		name: "trọ [ở khách sạn]",
		character: {
			hiragana: "とまります",
			katakana: null,
			kanji: "泊まります",
		},
	},
	{
		name: "dọn vệ sinh",
		character: {
			hiragana: "そうじします",
			katakana: null,
			kanji: "掃除します",
		},
	},
	{
		name: "giặt",
		character: {
			hiragana: "せんたくします",
			katakana: null,
			kanji: "洗濯します",
		},
	},
	{
		name: "trở thành, trở nên",
		character: {
			hiragana: "なります",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "buồn ngủ",
		character: {
			hiragana: "ねむい",
			katakana: null,
			kanji: "眠い",
		},
	},
	{
		name: "mạnh",
		character: {
			hiragana: "つよい",
			katakana: null,
			kanji: "強い",
		},
	},
	{
		name: "yếu",
		character: {
			hiragana: "よわい",
			katakana: null,
			kanji: "弱い",
		},
	},
	{
		name: "gôn (～をします:chơi gôn)",
		character: {
			hiragana: null,
			katakana: "ゴルフ",
			kanji: null,
		},
	},
	{
		name: "vật Sumo",
		character: {
			hiragana: "すもう",
			katakana: null,
			kanji: "相撲",
		},
	},
	{
		name: "trà",
		character: {
			hiragana: "おちゃ",
			katakana: null,
			kanji: "お茶",
		},
	},
	{
		name: "ngày",
		character: {
			hiragana: "ひ",
			katakana: null,
			kanji: "日",
		},
	},
	{
		name: "tình trạng, trạng thái",
		character: {
			hiragana: "ちょうし",
			katakana: null,
			kanji: "調子",
		},
	},
	{
		name: "một lần",
		character: {
			hiragana: "いちど",
			katakana: null,
			kanji: "一度",
		},
	},
	{
		name: "chưa lần nào",
		character: {
			hiragana: "いちども",
			katakana: null,
			kanji: "一度も",
		},
	},
	{
		name: "dần dần",
		character: {
			hiragana: "だんだん",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "sắp",
		character: {
			hiragana: "もうすぐ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "nhờ ơn anh/ chị mà  ; Nhờ trời ",
		character: {
			hiragana: "おかげさまで",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "nhưng",
		character: {
			hiragana: "でも",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "nâng cốc!/cạn chén",
		character: {
			hiragana: "かんぱい",
			katakana: null,
			kanji: "乾杯",
		},
	},
	{
		name: "việc ăn kiêng, chế độ giảm cân (～をします:ăn kiêng)",
		character: {
			hiragana: null,
			katakana: "ダイエット",
			kanji: null,
		},
	},
	{
		name: "không thể, quá sức",
		character: {
			hiragana: "むり",
			katakana: null,
			kanji: "無理",
		},
	},
	{
		name: "tốt cho sức khỏe",
		character: {
			hiragana: "からだにいい",
			katakana: null,
			kanji: "体にいい",
		},
	},
	{
		name: "Tokyo Sky Tree (tháp truyền hình có đài ngắm)",
		character: {
			hiragana: "とうきょうスカイツリー",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Katsushika Hokusai (1760-1849), một họa sĩ nổi tiếng thời Edo",
		character: {
			hiragana: "かつしかほくさい",
			katakana: null,
			kanji: "葛飾北斎",
		},
	},
];

const lessonTwenty: Array<Iword> = [
	{
		name: "cần [thị thực (visa)]",
		character: {
			hiragana: "いります",
			katakana: null,
			kanji: "要ります",
		},
	},
	{
		name: "tìm hiểu, điều tra, xem",
		character: {
			hiragana: "しらべます",
			katakana: null,
			kanji: "調べます",
		},
	},
	{
		name: "sửa chữa, tu sửa",
		character: {
			hiragana: "しゅうりします",
			katakana: null,
			kanji: "修理します",
		},
	},
	{
		name: "tớ (cách xưng thân mật của わたし  được dùng bởi nam giới)",
		character: {
			hiragana: "ぼく",
			katakana: null,
			kanji: "僕",
		},
	},
	{
		name: "cậu, bạn (cách gọi thân mật của あなた dùng cho người ngang hàng hoặc ít tuổi hơn.)",
		character: {
			hiragana: "きみ",
			katakana: null,
			kanji: "君",
		},
	},
	{
		name: "anh, cậu (cách gọi thân mật dùng cho nam giới, cùng nghĩa với 「～さん」)",
		character: {
			hiragana: "～くん",
			katakana: null,
			kanji: "～君",
		},
	},
	{
		name: "ừ (cách nói thân mật của 「はい」)",
		character: {
			hiragana: "うん",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "không (cách nói thân mật của 「いいえ」)",
		character: {
			hiragana: "ううん",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "từ, tiếng",
		character: {
			hiragana: "ことば",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Kimono (trang phục truyền thống của Nhật Bản)",
		character: {
			hiragana: "きもの",
			katakana: null,
			kanji: "着物",
		},
	},
	{
		name: "thị thực, Visa",
		character: {
			hiragana: null,
			katakana: "ビザ",
			kanji: null,
		},
	},
	{
		name: "ban đầu, đầu tiên",
		character: {
			hiragana: "はじめ",
			katakana: null,
			kanji: "始め",
		},
	},
	{
		name: "kết thúc",
		character: {
			hiragana: "おわり",
			katakana: null,
			kanji: "終わり",
		},
	},
	{
		name: "phía này, chỗ này (cách nói thân mật của 「こちら」)",
		character: {
			hiragana: "こっち",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "phía đó, chỗ đó (cách nói thân mật của 「そちら」)",
		character: {
			hiragana: "そっち",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "phía kia, chỗ kia (cách nói thân mật của 「あちら」)",
		character: {
			hiragana: "あっち",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "cái nào, phía nào, đâu (cách nói thân mật của 「どちら」)",
		character: {
			hiragana: "どっち",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "mọi người cùng",
		character: {
			hiragana: "みんなで",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "nhưng (cách nói thân mật của 「が」)",
		character: {
			hiragana: "～けど",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "(Tôi) no rồi",
		character: {
			hiragana: "おなかがいっぱいです",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Nếu anh/chị thích thì",
		character: {
			hiragana: "よかったら",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "nhiều thứ",
		character: {
			hiragana: "いろいろ",
			katakana: null,
			kanji: null,
		},
	},
];

const lessonTwentyOne: Array<Iword> = [
	{
		name: "nghĩ",
		character: {
			hiragana: "おもいます",
			katakana: null,
			kanji: "思います",
		},
	},
	{
		name: "nói",
		character: {
			hiragana: "いいます",
			katakana: null,
			kanji: "言います",
		},
	},
	{
		name: "thắng",
		character: {
			hiragana: "かちます",
			katakana: null,
			kanji: "勝ちます",
		},
	},
	{
		name: "thua",
		character: {
			hiragana: "まけます",
			katakana: null,
			kanji: "負けます",
		},
	},
	{
		name: "được tổ chức, diễn ra, có [lễ hội]",
		character: {
			hiragana: "あります",
			katakana: null,
			kanji: "あります",
		},
	},
	{
		name: "giúp ích",
		character: {
			hiragana: "やくにたちます",
			katakana: null,
			kanji: "役に立ちます",
		},
	},
	{
		name: "chuyển động, chạy",
		character: {
			hiragana: "うごきます",
			katakana: null,
			kanji: "動きます",
		},
	},
	{
		name: "bỏ, thôi [việc công ty]",
		character: {
			hiragana: "やめます",
			katakana: null,
			kanji: "会社を～",
		},
	},
	{
		name: "chú ý, bảo trọng",
		character: {
			hiragana: "きをつけます",
			katakana: null,
			kanji: "気をつけます",
		},
	},
	{
		name: "du học",
		character: {
			hiragana: "りゅうがくします",
			katakana: null,
			kanji: "留学します",
		},
	},
	{
		name: "lãng phí, vô ích",
		character: {
			hiragana: "むだ[な]",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "bất tiện",
		character: {
			hiragana: "ふべん[な]",
			katakana: null,
			kanji: "不便",
		},
	},
	{
		name: "ghê quá, giỏi quá",
		character: {
			hiragana: "すごい",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "sự thật",
		character: {
			hiragana: "ほんとう",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "giả dối, nói dối",
		character: {
			hiragana: "うそ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "ô tô, xe hơi",
		character: {
			hiragana: "じどうしゃ",
			katakana: null,
			kanji: "自動車",
		},
	},
	{
		name: "giao thông",
		character: {
			hiragana: "こうつう",
			katakana: null,
			kanji: "交通",
		},
	},
	{
		name: "giá cả, mức giá, vật giá",
		character: {
			hiragana: "ぶっか",
			katakana: null,
			kanji: "物価",
		},
	},
	{
		name: "phát, phát thanh",
		character: {
			hiragana: "ほうそう",
			katakana: null,
			kanji: "放送",
		},
	},
	{
		name: "tin tức, bản tin",
		character: {
			hiragana: null,
			katakana: "ニュース",
			kanji: null,
		},
	},
	{
		name: "phim hoạt hình (Nhật Bản)",
		character: {
			hiragana: null,
			katakana: "アニメ",
			kanji: null,
		},
	},
	{
		name: "truyện tranh",
		character: {
			hiragana: null,
			katakana: "マンガ",
			kanji: null,
		},
	},
	{
		name: "thiết kế",
		character: {
			hiragana: null,
			katakana: "デザイン",
			kanji: null,
		},
	},
	{
		name: "giấc mơ",
		character: {
			hiragana: "ゆめ",
			katakana: null,
			kanji: "夢",
		},
	},
	{
		name: "thiên tài",
		character: {
			hiragana: "てんさい",
			katakana: null,
			kanji: "天才",
		},
	},
	{
		name: "trận đấu",
		character: {
			hiragana: "しあい",
			katakana: null,
			kanji: "試合",
		},
	},
	{
		name: "ý kiến",
		character: {
			hiragana: "いけん",
			katakana: null,
			kanji: "意見",
		},
	},
	{
		name: "câu chuyện, bài nói chuyện",
		character: {
			hiragana: "[お]はなし",
			katakana: null,
			kanji: "話",
		},
	},
	{
		name: "trái đất",
		character: {
			hiragana: "ちきゅう",
			katakana: null,
			kanji: "地球",
		},
	},
	{
		name: "mặt trăng",
		character: {
			hiragana: "つき",
			katakana: null,
			kanji: "月",
		},
	},
	{
		name: "gần đây",
		character: {
			hiragana: "さいきん",
			katakana: null,
			kanji: "最近",
		},
	},
	{
		name: "chắc, có thể",
		character: {
			hiragana: "たぶん",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "chắc chắn, nhất định",
		character: {
			hiragana: "きっと",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "thật sự",
		character: {
			hiragana: "ほんとうに",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "(không) lắm",
		character: {
			hiragana: "そんなに",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "về",
		character: {
			hiragana: "～について",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Đã lâu không gặp nhỉ.",
		character: {
			hiragana: "ひさしぶりですね",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Anh/chị uống (cà-phê, rượu hay cái gì đó) nhé.",
		character: {
			hiragana: "～でものみませんか",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "tất nhiên",
		character: {
			hiragana: "もちろん",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Tôi phải về bây giờ không thì …",
		character: {
			hiragana: "かえらないと",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Albert Einstein (1879-1955)",
		character: {
			hiragana: null,
			katakana: "アインシュタイン",
			kanji: null,
		},
	},
	{
		name: "Yuri Alekseyevich Gagarin (1934-1968)",
		character: {
			hiragana: null,
			katakana: "ガガーリン",
			kanji: null,
		},
	},
	{
		name: "Galileo Galilei (1564-1642)",
		character: {
			hiragana: null,
			katakana: "ガリレオ",
			kanji: null,
		},
	},
	{
		name: "Mục sư Martin Luther King, JR. (1929-1968)",
		character: {
			hiragana: null,
			katakana: null,
			kanji: "キング牧師",
		},
	},
	{
		name: "Benjamin Franklin (1706-1790)",
		character: {
			hiragana: null,
			katakana: "フランクリン",
			kanji: null,
		},
	},
	{
		name: "công chúa Kaguya",
		character: {
			hiragana: "かぐやひめ",
			katakana: null,
			kanji: "かぐや姫",
		},
	},
	{
		name: "Lễ hội Tenjin (ở Osaka)",
		character: {
			hiragana: "てんじんまつり",
			katakana: null,
			kanji: "天神祭",
		},
	},
	{
		name: "núi Yoshino (ở tỉnh Nara)",
		character: {
			hiragana: "よしのやま",
			katakana: null,
			kanji: "吉野山",
		},
	},
	{
		name: "con kăng-gu-ru, chuột túi",
		character: {
			hiragana: null,
			katakana: "カンガルー",
			kanji: null,
		},
	},
	{
		name: "thuyền trưởng Cook (James Cook 1728 – 79)",
		character: {
			hiragana: null,
			katakana: "キャプテン・クック",
			kanji: null,
		},
	},
	{
		name: "tên công ty (giả định)",
		character: {
			hiragana: null,
			katakana: "ヨーネン",
			kanji: null,
		},
	},
];

const lessonTwentyTwo: Array<Iword> = [
	{
		name: "mặc [áo sơ mi, v.v.]",
		character: {
			hiragana: "きます",
			katakana: null,
			kanji: "着ます",
		},
	},
	{
		name: "đi, mặc [giầy, quần âu, v.v.]",
		character: {
			hiragana: "はきます",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "đội [mũ, v.v.]",
		character: {
			hiragana: "かぶります",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "đeo [kính]",
		character: {
			hiragana: "かけます",
			katakana: null,
			kanji: "眼鏡を～",
		},
	},
	{
		name: "đeo [cà vạt]",
		character: {
			hiragana: "します",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "sinh ra",
		character: {
			hiragana: "うまれます",
			katakana: null,
			kanji: "生まれます",
		},
	},
	{
		name: "chúng tôi, chúng ta",
		character: {
			hiragana: "わたしたち",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "áo khoác",
		character: {
			hiragana: null,
			katakana: "コート",
			kanji: null,
		},
	},
	{
		name: "áo len",
		character: {
			hiragana: null,
			katakana: "セーター",
			kanji: null,
		},
	},
	{
		name: "com-lê",
		character: {
			hiragana: null,
			katakana: "スーツ",
			kanji: null,
		},
	},
	{
		name: "mũ",
		character: {
			hiragana: "ぼうし",
			katakana: null,
			kanji: "帽子",
		},
	},
	{
		name: "kính",
		character: {
			hiragana: "めがね",
			katakana: null,
			kanji: "眼鏡",
		},
	},
	{
		name: "bánh ngọt",
		character: {
			hiragana: null,
			katakana: "ケーキ",
			kanji: null,
		},
	},
	{
		name: "cơm hộp",
		character: {
			hiragana: "[お]べんとう",
			katakana: null,
			kanji: "お弁当",
		},
	},
	{
		name: "ro bốt",
		character: {
			hiragana: null,
			katakana: "ロボット",
			kanji: null,
		},
	},
	{
		name: "sự hài hước",
		character: {
			hiragana: null,
			katakana: "ユーモア",
			kanji: null,
		},
	},
	{
		name: "(sự) thích hợp",
		character: {
			hiragana: "つごう",
			katakana: null,
			kanji: "都合",
		},
	},
	{
		name: "thường, hay",
		character: {
			hiragana: "よく",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "ừ, à",
		character: {
			hiragana: "えーと",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Chúc mừng.",
		character: {
			hiragana: "おめでとう　[ございます]",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Anh/chị tìm  à?",
		character: {
			hiragana: "お探しですか",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Thế/Vậy (nhé)",
		character: {
			hiragana: "では",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "cái này (cách nói lịch sự của [これ])",
		character: {
			hiragana: "こちら",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "tiền thuê nhà",
		character: {
			hiragana: "家賃",
			katakana: null,
			kanji: "やちん",
		},
	},
	{
		name: "bếp kèm phòng ăn",
		character: {
			hiragana: null,
			katakana: "ダイニングキチン",
			kanji: null,
		},
	},
	{
		name: "phòng kiểu Nhật",
		character: {
			hiragana: "和室",
			katakana: null,
			kanji: "わしつ",
		},
	},
	{
		name: "Chổ để chăn gối trong một căn phòng kiểu Nhật",
		character: {
			hiragana: "押し入れ",
			katakana: null,
			kanji: "おいれ",
		},
	},
	{
		name: "chăn, đệm",
		character: {
			hiragana: "布団",
			katakana: null,
			kanji: "ふとん",
		},
	},
	{
		name: "Pari",
		character: {
			hiragana: null,
			katakana: "パリ",
			kanji: null,
		},
	},
	{
		name: "Vạn Lý Trường Thành",
		character: {
			hiragana: "万里の長城",
			katakana: null,
			kanji: "ばんりのちょうじょう",
		},
	},
	{
		name: "tiêu đề bài điều tra (giả định)",
		character: {
			hiragana: null,
			katakana: "みんなのアンケート",
			kanji: null,
		},
	},
];

const lessonTwentyThree: Array<Iword> = [
	{
		name: "hỏi [giáo viên]",
		character: {
			hiragana: "ききます",
			katakana: null,
			kanji: "聞きます",
		},
	},
	{
		name: "vặn (núm)",
		character: {
			hiragana: "まわします",
			katakana: null,
			kanji: "回します",
		},
	},
	{
		name: "kéo",
		character: {
			hiragana: "ひきます",
			katakana: null,
			kanji: "引きます",
		},
	},
	{
		name: "đổi",
		character: {
			hiragana: "かえます",
			katakana: null,
			kanji: "変えます",
		},
	},
	{
		name: "sờ, chạm vào [cửa]",
		character: {
			hiragana: "さわります",
			katakana: null,
			kanji: "触ります",
		},
	},
	{
		name: "[tiền thừa] ra, chạy ra",
		character: {
			hiragana: "でます",
			katakana: null,
			kanji: "出ます",
		},
	},
	{
		name: "đi bộ",
		character: {
			hiragana: "あるきます",
			katakana: null,
			kanji: "歩きます",
		},
	},
	{
		name: "qua, đi qua [cầu]",
		character: {
			hiragana: "わたります",
			katakana: null,
			kanji: "渡ります",
		},
	},
	{
		name: "rẽ, quẹo [phải]",
		character: {
			hiragana: "まがります",
			katakana: null,
			kanji: "曲がります",
		},
	},
	{
		name: "buồn, cô đơn",
		character: {
			hiragana: "さびしい",
			katakana: null,
			kanji: "寂しい",
		},
	},
	{
		name: "nước nóng",
		character: {
			hiragana: "おゆ",
			katakana: null,
			kanji: "お湯",
		},
	},
	{
		name: "âm thanh",
		character: {
			hiragana: "おと",
			katakana: null,
			kanji: "音",
		},
	},
	{
		name: "cỡ, kích thước",
		character: {
			hiragana: null,
			katakana: "サイズ",
			kanji: null,
		},
	},
	{
		name: "hỏng (します：bị hỏng)",
		character: {
			hiragana: "こしょう",
			katakana: null,
			kanji: "故障",
		},
	},
	{
		name: "đường",
		character: {
			hiragana: "みち",
			katakana: null,
			kanji: "道",
		},
	},
	{
		name: "ngã tư",
		character: {
			hiragana: "こうさてん",
			katakana: null,
			kanji: "交差点",
		},
	},
	{
		name: "đèn tín hiệu",
		character: {
			hiragana: "しんごう",
			katakana: null,
			kanji: "信号",
		},
	},
	{
		name: "góc",
		character: {
			hiragana: "かど",
			katakana: null,
			kanji: "角",
		},
	},
	{
		name: "cầu",
		character: {
			hiragana: "はし",
			katakana: null,
			kanji: "橋",
		},
	},
	{
		name: "bãi đỗ xe",
		character: {
			hiragana: "ちゅうしゃじょう",
			katakana: null,
			kanji: "駐車場",
		},
	},
	{
		name: "tòa nhà",
		character: {
			hiragana: "たてもの",
			katakana: null,
			kanji: "建物",
		},
	},
	{
		name: "nhiều lần",
		character: {
			hiragana: "なんかいも",
			katakana: null,
			kanji: "何回も",
		},
	},
	{
		name: "thứ - , số - (biểu thị thứ tự)",
		character: {
			hiragana: "―め",
			katakana: "―目",
			kanji: null,
		},
	},
	{
		name: "Thái tử Shotoku (574 – 622)",
		character: {
			hiragana: "しょうとくたいし",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Chùa Horyu-ji (một ngôi chùa ở Nara do hoàng tử Shotoku xây vào thế kỷ thứ 7)",
		character: {
			hiragana: "ほうりゅうじ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "tên một loại trà (giả tưởng)",
		character: {
			hiragana: "げんきちゃ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "tên một nhà ga (giả tưởng)",
		character: {
			hiragana: "ほんだえき",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "tên một bến xe buýt (giả tưởng)",
		character: {
			hiragana: "としょかんまえ",
			katakana: null,
			kanji: null,
		},
	},
];

const lessonTwentyFour: Array<Iword> = [
	{
		name: "cho, tặng (tôi)",
		character: {
			hiragana: "くれます",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "chữa, sửa",
		character: {
			hiragana: "なおします",
			katakana: null,
			kanji: "直します",
		},
	},
	{
		name: "dẫn đi",
		character: {
			hiragana: "つれていきます",
			katakana: null,
			kanji: "連れて行きます",
		},
	},
	{
		name: "dẫn đến",
		character: {
			hiragana: "つれてきます",
			katakana: null,
			kanji: "連れて来ます",
		},
	},
	{
		name: "đưa đi, đưa đến, tiễn [một ai đó]",
		character: {
			hiragana: "おくります",
			katakana: null,
			kanji: "送ります",
		},
	},
	{
		name: "giới thiệu",
		character: {
			hiragana: "しょうかいします",
			katakana: null,
			kanji: "紹介します",
		},
	},
	{
		name: "hướng dẫn, giới thiệu, dẫn đường",
		character: {
			hiragana: "あんないします",
			katakana: null,
			kanji: "案内します",
		},
	},
	{
		name: "giải thích, trình bày",
		character: {
			hiragana: "せつめいします",
			katakana: null,
			kanji: "説明します",
		},
	},
	{
		name: "ông nội, ông ngoại, ông",
		character: {
			hiragana: "おじいさん／おじいちゃん",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "bà nội, bà ngoại, bà",
		character: {
			hiragana: "おばあさん／おばあちゃん",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "chuẩn bị",
		character: {
			hiragana: "じゅんび",
			katakana: null,
			kanji: "準備",
		},
	},
	{
		name: "sự chuyển nhà",
		character: {
			hiragana: "ひっこし",
			katakana: null,
			kanji: "引っ越し",
		},
	},
	{
		name: "bánh kẹo",
		character: {
			hiragana: "[お]かし",
			katakana: null,
			kanji: "菓子",
		},
	},
	{
		name: "homestay",
		character: {
			hiragana: null,
			katakana: "ホームステイ",
			kanji: null,
		},
	},
	{
		name: "toàn bộ, tất cả",
		character: {
			hiragana: "ぜんぶ",
			katakana: null,
			kanji: "全部",
		},
	},
	{
		name: "tự (mình)",
		character: {
			hiragana: "じぶんで",
			katakana: null,
			kanji: "自分で",
		},
	},
	{
		name: "ngoài ra, bên cạnh đó",
		character: {
			hiragana: "ほかに",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Ngày của Mẹ",
		character: {
			hiragana: "ははのひ",
			katakana: null,
			kanji: "母の日",
		},
	},
];

const lessonTwentyFive: Array<Iword> = [
	{
		name: "nghĩ, suy nghĩ",
		character: {
			hiragana: "かんがえます",
			katakana: null,
			kanji: "考えます",
		},
	},
	{
		name: "đến",
		character: {
			hiragana: "つきます",
			katakana: null,
			kanji: "着きます",
		},
	},
	{
		name: "thêm [tuổi]",
		character: {
			hiragana: "とります",
			katakana: null,
			kanji: "取ります",
		},
	},
	{
		name: "đủ",
		character: {
			hiragana: "たります",
			katakana: null,
			kanji: "足ります",
		},
	},
	{
		name: "quê, nông thôn",
		character: {
			hiragana: "いなか",
			katakana: null,
			kanji: "田舎",
		},
	},
	{
		name: "cơ hội",
		character: {
			hiragana: null,
			katakana: "チャンス",
			kanji: null,
		},
	},
	{
		name: "một trăm triệu",
		character: {
			hiragana: "おく",
			katakana: null,
			kanji: "億",
		},
	},
	{
		name: "nếu [ thì]",
		character: {
			hiragana: "もし[～たら]",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "nghĩa, ý nghĩa",
		character: {
			hiragana: "いみ",
			katakana: null,
			kanji: "意味",
		},
	},
	{
		name: "A-lô",
		character: {
			hiragana: "もしもし",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "việc chuyển địa điểm làm việc (～します: chuyển địa điểm làm việc)",
		character: {
			hiragana: "てんきん",
			katakana: null,
			kanji: "転勤",
		},
	},
	{
		name: "việc , chuyện (の　こと: việc )",
		character: {
			hiragana: "こと",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "thời gian rảnh",
		character: {
			hiragana: "ひま",
			katakana: null,
			kanji: "暇",
		},
	},
	{
		name: "Anh/chị đã giúp tôi (nhiều).",
		character: {
			hiragana: "[いろいろ]おせわになりました。",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "cố, cố gắng",
		character: {
			hiragana: "がんばります",
			katakana: null,
			kanji: "頑張ります",
		},
	},
	{
		name: "Chúc anh/chị mạnh khỏe.",
		character: {
			hiragana: "どうぞおげんきで。",
			katakana: null,
			kanji: "どうぞお元気で。",
		},
	},
	{
		name: "Việt Nam",
		character: {
			hiragana: null,
			katakana: "ベトナム",
			kanji: null,
		},
	},
];

export const LessonCollection = new Map<string, Array<Iword>>([
	["lesson_1", lessonOne],
	["lesson_2", lessonTwo],
	["lesson_3", lessonThree],
	["lesson_4", lessonFour],
	["lesson_5", lessonFive],
	["lesson_6", lessonSix],
	["lesson_7", lessonSeven],
	["lesson_8", lessonEight],
	["lesson_9", lessonNine],
	["lesson_10", lessonTen],
	["lesson_11", lessonEleven],
	["lesson_12", lessonTwelve],
	["lesson_13", lessonThirteen],
	["lesson_14", lessonFourteen],
	["lesson_15", lessonFifteen],
	["lesson_16", lessonSixteen],
	["lesson_17", lessonSeventeen],
	["lesson_18", lessonEighteen],
	["lesson_19", lessonNineTeen],
	["lesson_20", lessonTwenty],
	["lesson_21", lessonTwentyOne],
	["lesson_22", lessonTwentyTwo],
	["lesson_23", lessonTwentyThree],
	["lesson_24", lessonTwentyFour],
	["lesson_25", lessonTwentyFive],
]);

export const LessonList = new Map([
	["lesson_1", 'Bài 1'],
	["lesson_2", 'Bài 2'],
	["lesson_3", 'Bài 3'],
	["lesson_4", 'Bài 4'],
	["lesson_5", 'Bài 5'],
	["lesson_6", 'Bài 6'],
	["lesson_7", 'Bài 7'],
	["lesson_8", 'Bài 8'],
	["lesson_9", 'Bài 9'],
	["lesson_10", 'Bài 10'],
	["lesson_11", 'Bài 11'],
	["lesson_12", 'Bài 12'],
	["lesson_13", 'Bài 13'],
	["lesson_14", 'Bài 14'],
	["lesson_15", 'Bài 15'],
	["lesson_16", 'Bài 16'],
	["lesson_17", 'Bài 17'],
	["lesson_18", 'Bài 18'],
	["lesson_19", 'Bài 19'],
	["lesson_20", 'Bài 20'],
	["lesson_21", 'Bài 21'],
	["lesson_22", 'Bài 22'],
	["lesson_23", 'Bài 23'],
	["lesson_24", 'Bài 24'],
	["lesson_25", 'Bài 25'],
])