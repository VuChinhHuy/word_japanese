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

const lessonOne : Array<Iword> = [
	{
		name: "Tôi",
		character: {
			hiragana: "わたし",
			katakana: "",
			kanji: "私",
		},
	},
	{
		name: "Chúng tôi",
		character: {
			hiragana: "わたしたち",
			katakana: "",
			kanji: "私たち",
		},
	},
	{
		name: "Bạn",
		character: {
			hiragana: "あなた",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Người kia",
		character: {
			hiragana: "あのひと",
			katakana: "",
			kanji: "あの人",
		},
	},
	{
		name: "Người kia (kính ngữ)",
		character: {
			hiragana: "あのかた",
			katakana: "",
			kanji: "あの方",
		},
	},
	{
		name: "Các anh, các chị, các ông, các bà (kính ngữ)",
		character: {
			hiragana: "みなさん",
			katakana: "",
			kanji: "皆さん",
		},
	},
	{
		name: "Anh, chị, ông, bà (thêm vào sau tên người để thể hiện tính thân mật)",
		character: {
			hiragana: "～さん",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Bé (thêm vào sau tên trẻ em nam)",
		character: {
			hiragana: "～くん",
			katakana: "",
			kanji: "～君",
		},
	},
	{
		name: "Người (nước nào)",
		character: {
			hiragana: "～じん",
			katakana: "",
			kanji: "～人",
		},
	},
	{
		name: "Thầy, cô (giáo viên)",
		character: {
			hiragana: "せんせい",
			katakana: "",
			kanji: "先生",
		},
	},
	{
		name: "Giáo viên",
		character: {
			hiragana: "きょうし",
			katakana: "",
			kanji: "教師",
		},
	},
	{
		name: "Học sinh, sinh viên",
		character: {
			hiragana: "がくせい",
			katakana: "",
			kanji: "学生",
		},
	},
	{
		name: "Nhân viên công ty",
		character: {
			hiragana: "かいしゃいん",
			katakana: "",
			kanji: "会社員",
		},
	},
	{
		name: "Nhân viên ngân hàng",
		character: {
			hiragana: "ぎんこういん",
			katakana: "",
			kanji: "銀行員",
		},
	},
	{
		name: "Bác sĩ",
		character: {
			hiragana: "いしゃ",
			katakana: "",
			kanji: "医者",
		},
	},
	{
		name: "Nhà nghiên cứu",
		character: {
			hiragana: "けんきゅうしゃ",
			katakana: "",
			kanji: "研究者",
		},
	},
	{
		name: "Kỹ sư",
		character: {
			hiragana: "エンジニア",
			katakana: "エンジニア",
			kanji: "",
		},
	},
	{
		name: "Đại học",
		character: {
			hiragana: "だいがく",
			katakana: "",
			kanji: "大学",
		},
	},
	{
		name: "Bệnh viện",
		character: {
			hiragana: "びょういん",
			katakana: "",
			kanji: "病院",
		},
	},
	{
		name: "Ai",
		character: {
			hiragana: "だれ",
			katakana: "",
			kanji: "誰",
		},
	},
	{
		name: "Ai (kính ngữ)",
		character: {
			hiragana: "どなた",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Mấy tuổi, bao nhiêu tuổi",
		character: {
			hiragana: "なんさい",
			katakana: "",
			kanji: "何歳",
		},
	},
	{
		name: "Mấy tuổi, bao nhiêu tuổi (kính ngữ)",
		character: {
			hiragana: "おいくつ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Vâng, đúng vậy",
		character: {
			hiragana: "はい",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Không",
		character: {
			hiragana: "いいえ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Xin chào (lần đầu gặp)",
		character: {
			hiragana: "はじめまして",
			katakana: "",
			kanji: "初めまして",
		},
	},
	{
		name: "Rất hân hạnh được gặp bạn",
		character: {
			hiragana: "どうぞよろしくおねがいします",
			katakana: "",
			kanji: "どうぞよろしくお願いします",
		},
	},
	{
		name: "Người đến từ ",
		character: {
			hiragana: "～からきました",
			katakana: "",
			kanji: "～から来ました",
		},
	},
];

const lessonTwo :Array<Iword> = [
	{
		name: "Sách",
		character: {
			hiragana: "ほん",
			katakana: "",
			kanji: "本",
		},
	},
	{
		name: "Từ điển",
		character: {
			hiragana: "じしょ",
			katakana: "",
			kanji: "辞書",
		},
	},
	{
		name: "Tạp chí",
		character: {
			hiragana: "ざっし",
			katakana: "",
			kanji: "雑誌",
		},
	},
	{
		name: "Báo",
		character: {
			hiragana: "しんぶん",
			katakana: "",
			kanji: "新聞",
		},
	},
	{
		name: "Vở",
		character: {
			hiragana: "",
			katakana: "ノート",
			kanji: "",
		},
	},
	{
		name: "Sổ tay",
		character: {
			hiragana: "てちょう",
			katakana: "",
			kanji: "手帳",
		},
	},
	{
		name: "Danh thiếp",
		character: {
			hiragana: "めいし",
			katakana: "",
			kanji: "名刺",
		},
	},
	{
		name: "Thẻ",
		character: {
			hiragana: "",
			katakana: "カード",
			kanji: "",
		},
	},
	{
		name: "Bút chì",
		character: {
			hiragana: "えんぴつ",
			katakana: "",
			kanji: "鉛筆",
		},
	},
	{
		name: "Bút bi",
		character: {
			hiragana: "",
			katakana: "ボールペン",
			kanji: "",
		},
	},
	{
		name: "Bút máy",
		character: {
			hiragana: "",
			katakana: "シャープペンシル",
			kanji: "",
		},
	},
	{
		name: "Chìa khóa",
		character: {
			hiragana: "かぎ",
			katakana: "",
			kanji: "鍵",
		},
	},
	{
		name: "Đồng hồ",
		character: {
			hiragana: "とけい",
			katakana: "",
			kanji: "時計",
		},
	},
	{
		name: "Ô (dù)",
		character: {
			hiragana: "かさ",
			katakana: "",
			kanji: "傘",
		},
	},
	{
		name: "Cặp sách",
		character: {
			hiragana: "かばん",
			katakana: "",
			kanji: "鞄",
		},
	},
	{
		name: "Băng [cát-xét]",
		character: {
			hiragana: "",
			katakana: "テープ",
			kanji: "",
		},
	},
	{
		name: "Máy ghi âm",
		character: {
			hiragana: "",
			katakana: "テープレコーダー",
			kanji: "",
		},
	},
	{
		name: "Tivi",
		character: {
			hiragana: "",
			katakana: "テレビ",
			kanji: "",
		},
	},
	{
		name: "Radio",
		character: {
			hiragana: "",
			katakana: "ラジオ",
			kanji: "",
		},
	},
	{
		name: "Máy tính",
		character: {
			hiragana: "",
			katakana: "コンピューター",
			kanji: "",
		},
	},
	{
		name: "Ô tô, xe hơi",
		character: {
			hiragana: "じどうしゃ",
			katakana: "",
			kanji: "自動車",
		},
	},
	{
		name: "Bàn",
		character: {
			hiragana: "つくえ",
			katakana: "",
			kanji: "机",
		},
	},
	{
		name: "Ghế",
		character: {
			hiragana: "いす",
			katakana: "",
			kanji: "椅子",
		},
	},
	{
		name: "Sô cô la",
		character: {
			hiragana: "",
			katakana: "チョコレート",
			kanji: "",
		},
	},
	{
		name: "Cà phê",
		character: {
			hiragana: "",
			katakana: "コーヒー",
			kanji: "",
		},
	},
	{
		name: "Kỷ niệm",
		character: {
			hiragana: "おみやげ",
			katakana: "",
			kanji: "お土産",
		},
	},
	{
		name: "Tiếng Nhật",
		character: {
			hiragana: "にほんご",
			katakana: "",
			kanji: "日本語",
		},
	},
	{
		name: "Tiếng ",
		character: {
			hiragana: "～ご",
			katakana: "",
			kanji: "～語",
		},
	},
	{
		name: "Cái gì, gì",
		character: {
			hiragana: "なん",
			katakana: "",
			kanji: "何",
		},
	},
	{
		name: "Thế à, vậy à",
		character: {
			hiragana: "そう",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "À, ờ (ngập ngừng)",
		character: {
			hiragana: "あのう",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Chỉ là chút lòng thành",
		character: {
			hiragana: "ほんのきもちです",
			katakana: "",
			kanji: "ほんの気持ちです",
		},
	},
	{
		name: "Xin cảm ơn",
		character: {
			hiragana: "どうもありがとうございます",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Xin tặng bạn",
		character: {
			hiragana: "どうぞ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Thế à? / vậy à? (bày tỏ sự ngạc nhiên)",
		character: {
			hiragana: "そうですか",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Ồ!",
		character: {
			hiragana: "あっ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Cảm ơn rất nhiều",
		character: {
			hiragana: "どうもありがとうございます",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Đây là chút quà mọn",
		character: {
			hiragana: "ほんのきもちです",
			katakana: "",
			kanji: "ほんの気持ちです",
		},
	},
	{
		name: "Mời vào",
		character: {
			hiragana: "どうぞおあがりください",
			katakana: "",
			kanji: "どうぞお上がりください",
		},
	},
	{
		name: "Mời bạn dùng []",
		character: {
			hiragana: "～はいかがですか",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Xin mời",
		character: {
			hiragana: "いただきます",
			katakana: "",
			kanji: "頂きます",
		},
	},
	{
		name: "Xin mời vào",
		character: {
			hiragana: "どうぞおはいりください",
			katakana: "",
			kanji: "どうぞお入りください",
		},
	},
	{
		name: "Cảm ơn bạn",
		character: {
			hiragana: "どうも",
			katakana: "",
			kanji: "",
		},
	},
];

const lessonThree :Array<Iword>= [
	{
		name: "Ở đây, chỗ này",
		character: {
			hiragana: "ここ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Ở đó, chỗ đó",
		character: {
			hiragana: "そこ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Ở kia, chỗ kia",
		character: {
			hiragana: "あそこ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Ở đâu",
		character: {
			hiragana: "どこ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Phía này, chỗ này",
		character: {
			hiragana: "こちら",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Phía đó, chỗ đó",
		character: {
			hiragana: "そちら",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Phía kia, chỗ kia",
		character: {
			hiragana: "あちら",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Phía nào, chỗ nào",
		character: {
			hiragana: "どちら",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Lớp học, phòng học",
		character: {
			hiragana: "きょうしつ",
			katakana: "",
			kanji: "教室",
		},
	},
	{
		name: "Nhà ăn",
		character: {
			hiragana: "しょくどう",
			katakana: "",
			kanji: "食堂",
		},
	},
	{
		name: "Văn phòng",
		character: {
			hiragana: "じむしょ",
			katakana: "",
			kanji: "事務所",
		},
	},
	{
		name: "Phòng họp, phòng hội nghị",
		character: {
			hiragana: "かいぎしつ",
			katakana: "",
			kanji: "会議室",
		},
	},
	{
		name: "Bộ phận tiếp tân, phòng thường trực",
		character: {
			hiragana: "うけつけ",
			katakana: "",
			kanji: "受付",
		},
	},
	{
		name: "Hành lang, đại sảnh",
		character: {
			hiragana: "",
			katakana: "ロビー",
			kanji: "",
		},
	},
	{
		name: "Phòng",
		character: {
			hiragana: "へや",
			katakana: "",
			kanji: "部屋",
		},
	},
	{
		name: "Nhà vệ sinh, phòng vệ sinh, toa-lét",
		character: {
			hiragana: "",
			katakana: "トイレ",
			kanji: "",
		},
	},
	{
		name: "Cầu thang",
		character: {
			hiragana: "かいだん",
			katakana: "",
			kanji: "階段",
		},
	},
	{
		name: "Thang máy",
		character: {
			hiragana: "",
			katakana: "エレベーター",
			kanji: "",
		},
	},
	{
		name: "Thang cuốn",
		character: {
			hiragana: "",
			katakana: "エスカレーター",
			kanji: "",
		},
	},
	{
		name: "Nước ",
		character: {
			hiragana: "～くに",
			katakana: "",
			kanji: "～国",
		},
	},
	{
		name: "Công ty",
		character: {
			hiragana: "かいしゃ",
			katakana: "",
			kanji: "会社",
		},
	},
	{
		name: "Nhà",
		character: {
			hiragana: "うち",
			katakana: "",
			kanji: "家",
		},
	},
	{
		name: "Điện thoại",
		character: {
			hiragana: "でんわ",
			katakana: "",
			kanji: "電話",
		},
	},
	{
		name: "Giầy",
		character: {
			hiragana: "くつ",
			katakana: "",
			kanji: "靴",
		},
	},
	{
		name: "Cà vạt",
		character: {
			hiragana: "",
			katakana: "ネクタイ",
			kanji: "",
		},
	},
	{
		name: "Rượu vang",
		character: {
			hiragana: "",
			katakana: "ワイン",
			kanji: "",
		},
	},
	{
		name: "Thuốc lá",
		character: {
			hiragana: "たばこ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Quầy (trong cửa hàng, siêu thị)",
		character: {
			hiragana: "うりば",
			katakana: "",
			kanji: "売り場",
		},
	},
	{
		name: "Tầng hầm, dưới mặt đất",
		character: {
			hiragana: "ちか",
			katakana: "",
			kanji: "地下",
		},
	},
	{
		name: "Tầng ",
		character: {
			hiragana: "～かい",
			katakana: "",
			kanji: "～階",
		},
	},
	{
		name: "Mấy tầng",
		character: {
			hiragana: "なんがい",
			katakana: "",
			kanji: "何階",
		},
	},
	{
		name: "Yên",
		character: {
			hiragana: "えん",
			katakana: "",
			kanji: "円",
		},
	},
	{
		name: "Bao nhiêu tiền",
		character: {
			hiragana: "いくら",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Trăm",
		character: {
			hiragana: "ひゃく",
			katakana: "",
			kanji: "百",
		},
	},
	{
		name: "Nghìn",
		character: {
			hiragana: "せん",
			katakana: "",
			kanji: "千",
		},
	},
	{
		name: "Mười nghìn, vạn",
		character: {
			hiragana: "まん",
			katakana: "",
			kanji: "万",
		},
	},
	{
		name: "Xin chào quý khách / Chào mừng quý khách",
		character: {
			hiragana: "いらっしゃいませ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Cho tôi xem []",
		character: {
			hiragana: "「～を」みせてください",
			katakana: "",
			kanji: "「～を」見せてください",
		},
	},
	{
		name: "Cho tôi []",
		character: {
			hiragana: "「～を」ください",
			katakana: "",
			kanji: "",
		},
	},
];

const lessonFour :Array<Iword>= [
	{
		name: "dậy, thức dậy",
		character: {
			hiragana: "おきます",
			katakana: "",
			kanji: "起きます",
		},
	},
	{
		name: "ngủ, đi ngủ",
		character: {
			hiragana: "ねます",
			katakana: "",
			kanji: "寝ます",
		},
	},
	{
		name: "làm việc",
		character: {
			hiragana: "はたらきます",
			katakana: "",
			kanji: "働きます",
		},
	},
	{
		name: "nghỉ, nghỉ ngơi",
		character: {
			hiragana: "やすみます",
			katakana: "",
			kanji: "休みます",
		},
	},
	{
		name: "học",
		character: {
			hiragana: "べんきょうします",
			katakana: "",
			kanji: "勉強します",
		},
	},
	{
		name: "hết, kết thúc, xong",
		character: {
			hiragana: "おわります",
			katakana: "",
			kanji: "終わります",
		},
	},
	{
		name: "bách hóa",
		character: {
			hiragana: "デパート",
			katakana: "デパート",
			kanji: "",
		},
	},
	{
		name: "ngân hàng",
		character: {
			hiragana: "ぎんこう",
			katakana: "",
			kanji: "銀行",
		},
	},
	{
		name: "bưu điện",
		character: {
			hiragana: "ゆうびんきょく",
			katakana: "",
			kanji: "郵便局",
		},
	},
	{
		name: "thư viện",
		character: {
			hiragana: "としょかん",
			katakana: "",
			kanji: "図書館",
		},
	},
	{
		name: "bảo tàng mỹ thuật",
		character: {
			hiragana: "びじゅつかん",
			katakana: "",
			kanji: "美術館",
		},
	},
	{
		name: "bây giờ",
		character: {
			hiragana: "いま",
			katakana: "",
			kanji: "今",
		},
	},
	{
		name: "-giờ",
		character: {
			hiragana: "―じ",
			katakana: "",
			kanji: "－時",
		},
	},
	{
		name: "- phút",
		character: {
			hiragana: "―ふん（－ぷん）",
			katakana: "",
			kanji: "―分",
		},
	},
	{
		name: "rưỡi, nửa",
		character: {
			hiragana: "はん",
			katakana: "",
			kanji: "半",
		},
	},
	{
		name: "mấy giờ",
		character: {
			hiragana: "なんじ",
			katakana: "",
			kanji: "何時",
		},
	},
	{
		name: "mấy phút",
		character: {
			hiragana: "なんぷん",
			katakana: "",
			kanji: "何分",
		},
	},
	{
		name: "sáng, trước 12 giờ trưa",
		character: {
			hiragana: "ごぜん",
			katakana: "",
			kanji: "午前",
		},
	},
	{
		name: "chiều, sau 12 giờ trưa",
		character: {
			hiragana: "ごご",
			katakana: "",
			kanji: "午後",
		},
	},
	{
		name: "buổi sáng, sáng",
		character: {
			hiragana: "あさ",
			katakana: "",
			kanji: "朝",
		},
	},
	{
		name: "buổi trưa, trưa",
		character: {
			hiragana: "ひる",
			katakana: "",
			kanji: "昼",
		},
	},
	{
		name: "buổi tối, tối",
		character: {
			hiragana: "ばん（よる）",
			katakana: "",
			kanji: "晩(夜)",
		},
	},
	{
		name: "hôm kia",
		character: {
			hiragana: "おととい",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "hôm qua",
		character: {
			hiragana: "きのう",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "hôm nay",
		character: {
			hiragana: "きょう",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "ngày mai",
		character: {
			hiragana: "あした",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "ngày kia",
		character: {
			hiragana: "あさって",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "sáng nay",
		character: {
			hiragana: "けさ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "tối nay",
		character: {
			hiragana: "こんばん",
			katakana: "",
			kanji: "今晩",
		},
	},
	{
		name: "nghỉ, nghỉ phép, ngày nghỉ",
		character: {
			hiragana: "やすみ",
			katakana: "",
			kanji: "休み",
		},
	},
	{
		name: "nghỉ trưa",
		character: {
			hiragana: "ひるやすみ",
			katakana: "",
			kanji: "昼休み",
		},
	},
	{
		name: "thi, kỳ thi, kiểm tra",
		character: {
			hiragana: "しけん",
			katakana: "",
			kanji: "試験",
		},
	},
	{
		name: "cuộc họp, hội nghị (～を　します： tổ chức cuộc họp, hội nghị)",
		character: {
			hiragana: "かいぎ",
			katakana: "",
			kanji: "会議",
		},
	},
	{
		name: "phim, điện ảnh",
		character: {
			hiragana: "えいが",
			katakana: "",
			kanji: "映画",
		},
	},
	{
		name: "hàng sáng, mỗi sáng",
		character: {
			hiragana: "まいあさ",
			katakana: "",
			kanji: "毎朝",
		},
	},
	{
		name: "hàng tối, mỗi tối",
		character: {
			hiragana: "まいばん",
			katakana: "",
			kanji: "毎晩",
		},
	},
	{
		name: "hàng ngày, mỗi ngày",
		character: {
			hiragana: "まいにち",
			katakana: "",
			kanji: "毎日",
		},
	},
	{
		name: "thứ hai",
		character: {
			hiragana: "げつようび",
			katakana: "",
			kanji: "月曜日",
		},
	},
	{
		name: "thứ ba",
		character: {
			hiragana: "かようび",
			katakana: "",
			kanji: "火曜日",
		},
	},
	{
		name: "thứ tư",
		character: {
			hiragana: "すいようび",
			katakana: "",
			kanji: "水曜日",
		},
	},
	{
		name: "thứ năm",
		character: {
			hiragana: "もくようび",
			katakana: "",
			kanji: "木曜日",
		},
	},
	{
		name: "thứ sáu",
		character: {
			hiragana: "きんようび",
			katakana: "",
			kanji: "金曜日",
		},
	},
	{
		name: "thứ bảy",
		character: {
			hiragana: "どようび",
			katakana: "",
			kanji: "土曜日",
		},
	},
	{
		name: "chủ nhật",
		character: {
			hiragana: "にちようび",
			katakana: "",
			kanji: "日曜日",
		},
	},
	{
		name: "thứ mấy",
		character: {
			hiragana: "なんようび",
			katakana: "",
			kanji: "何曜日",
		},
	},
	{
		name: " từ",
		character: {
			hiragana: "～から",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: " đến",
		character: {
			hiragana: "～まで",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: " và (dùng để nối hai danh từ)",
		character: {
			hiragana: "～と",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Anh/chị vất vả quá.",
		character: {
			hiragana: "たいへんですね",
			katakana: "",
			kanji: "大変",
		},
	},
	{
		name: "số (số điện thoại, số phòng)",
		character: {
			hiragana: "ばんごう",
			katakana: "",
			kanji: "番号",
		},
	},
	{
		name: "số bao nhiêu, số mấy",
		character: {
			hiragana: "なんばん",
			katakana: "",
			kanji: "何番",
		},
	},
	{
		name: "ông/bà, phía ông/ phía bà",
		character: {
			hiragana: "そちら",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "New York",
		character: {
			hiragana: "",
			katakana: "ニューヨーク",
			kanji: "",
		},
	},
	{
		name: "Bắc Kinh",
		character: {
			hiragana: "",
			katakana: "ペキン",
			kanji: "",
		},
	},
	{
		name: "Los Angeles",
		character: {
			hiragana: "",
			katakana: "ロサンゼルス",
			kanji: "",
		},
	},
	{
		name: "Luân Đôn",
		character: {
			hiragana: "",
			katakana: "ロンドン",
			kanji: "",
		},
	},
	{
		name: "tên giả định của một nhà hàng Nhật",
		character: {
			hiragana: "あすか",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "ngân hàng Apple (giả định)",
		character: {
			hiragana: "ぎんこう",
			katakana: "",
			kanji: "アップル銀行",
		},
	},
	{
		name: "thư viện Midori (giả định)",
		character: {
			hiragana: "みどりとしょかん",
			katakana: "",
			kanji: "みどり図書館",
		},
	},
	{
		name: "bảo tàng mỹ thuật Yamato (giả định)",
		character: {
			hiragana: "やまとびじゅつかん",
			katakana: "",
			kanji: "やまと美術館",
		},
	},
];

const lessonFive :Array<Iword>= [
	{
		name: "đi",
		character: {
			hiragana: "いきます",
			katakana: "",
			kanji: "行きます",
		},
	},
	{
		name: "đến",
		character: {
			hiragana: "きます",
			katakana: "",
			kanji: "来ます",
		},
	},
	{
		name: "về",
		character: {
			hiragana: "かえります",
			katakana: "",
			kanji: "帰ります",
		},
	},
	{
		name: "trường học",
		character: {
			hiragana: "がっこう",
			katakana: "",
			kanji: "学校",
		},
	},
	{
		name: "siêu thị",
		character: {
			hiragana: "スーパー",
			katakana: "スーパー",
			kanji: "",
		},
	},
	{
		name: "ga, nhà ga",
		character: {
			hiragana: "えき",
			katakana: "",
			kanji: "駅",
		},
	},
	{
		name: "máy bay",
		character: {
			hiragana: "ひこうき",
			katakana: "",
			kanji: "飛行機",
		},
	},
	{
		name: "thuyền, tàu thủy",
		character: {
			hiragana: "ふね",
			katakana: "",
			kanji: "船",
		},
	},
	{
		name: "tàu điện",
		character: {
			hiragana: "でんしゃ",
			katakana: "",
			kanji: "電車",
		},
	},
	{
		name: "tàu điện ngầm",
		character: {
			hiragana: "ちかてつ",
			katakana: "",
			kanji: "地下鉄",
		},
	},
	{
		name: "tàu Shinkansen (tàu điện siêu tốc của Nhật)",
		character: {
			hiragana: "しんかんせん",
			katakana: "",
			kanji: "新幹線",
		},
	},
	{
		name: "xe buýt",
		character: {
			hiragana: "バス",
			katakana: "バス",
			kanji: "",
		},
	},
	{
		name: "tắc-xi",
		character: {
			hiragana: "タクシー",
			katakana: "タクシー",
			kanji: "",
		},
	},
	{
		name: "xe đạp",
		character: {
			hiragana: "じてんしゃ",
			katakana: "",
			kanji: "自転車",
		},
	},
	{
		name: "đi bộ",
		character: {
			hiragana: "あるいて",
			katakana: "",
			kanji: "歩いて",
		},
	},
	{
		name: "người",
		character: {
			hiragana: "ひと",
			katakana: "",
			kanji: "人",
		},
	},
	{
		name: "bạn, bạn bè",
		character: {
			hiragana: "ともだち",
			katakana: "",
			kanji: "友達",
		},
	},
	{
		name: "anh ấy, bạn trai",
		character: {
			hiragana: "かれ",
			katakana: "",
			kanji: "彼",
		},
	},
	{
		name: "chị ấy, bạn gái",
		character: {
			hiragana: "かのじょ",
			katakana: "",
			kanji: "彼女",
		},
	},
	{
		name: "gia đình",
		character: {
			hiragana: "かぞく",
			katakana: "",
			kanji: "家族",
		},
	},
	{
		name: "một mình",
		character: {
			hiragana: "ひとりで",
			katakana: "",
			kanji: "一人で",
		},
	},
	{
		name: "tuần trước",
		character: {
			hiragana: "せんしゅう",
			katakana: "",
			kanji: "先週",
		},
	},
	{
		name: "tuần này",
		character: {
			hiragana: "こんしゅう",
			katakana: "",
			kanji: "今週",
		},
	},
	{
		name: "tuần sau",
		character: {
			hiragana: "らいしゅう",
			katakana: "",
			kanji: "来週",
		},
	},
	{
		name: "tháng trước",
		character: {
			hiragana: "せんげつ",
			katakana: "",
			kanji: "先月",
		},
	},
	{
		name: "tháng này",
		character: {
			hiragana: "こんげつ",
			katakana: "",
			kanji: "今月",
		},
	},
	{
		name: "tháng sau",
		character: {
			hiragana: "らいげつ",
			katakana: "",
			kanji: "来月",
		},
	},
	{
		name: "năm ngoái",
		character: {
			hiragana: "きょねん",
			katakana: "",
			kanji: "去年",
		},
	},
	{
		name: "năm nay",
		character: {
			hiragana: "ことし",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "năm sau",
		character: {
			hiragana: "らいねん",
			katakana: "",
			kanji: "来年",
		},
	},
	{
		name: "năm -",
		character: {
			hiragana: "ーねん",
			katakana: "",
			kanji: "ー年",
		},
	},
	{
		name: "mấy năm",
		character: {
			hiragana: "なんねん",
			katakana: "",
			kanji: "何年",
		},
	},
	{
		name: "tháng -",
		character: {
			hiragana: "ーがつ",
			katakana: "",
			kanji: "ー月",
		},
	},
	{
		name: "tháng mấy",
		character: {
			hiragana: "なんがつ",
			katakana: "",
			kanji: "何月",
		},
	},
	{
		name: "ngày mồng 1",
		character: {
			hiragana: "ついたち",
			katakana: "",
			kanji: "１日",
		},
	},
	{
		name: "ngày mồng 2, 2 ngày",
		character: {
			hiragana: "ふつか",
			katakana: "",
			kanji: "２日",
		},
	},
	{
		name: "ngày mồng 3, 3 ngày",
		character: {
			hiragana: "みっか",
			katakana: "",
			kanji: "３日",
		},
	},
	{
		name: "ngày mồng 4, 4 ngày",
		character: {
			hiragana: "よっか",
			katakana: "",
			kanji: "４日",
		},
	},
	{
		name: "ngày mồng 5, 5 ngày",
		character: {
			hiragana: "いつか",
			katakana: "",
			kanji: "５日",
		},
	},
	{
		name: "ngày mồng 6, 6 ngày",
		character: {
			hiragana: "むいか",
			katakana: "",
			kanji: "６日",
		},
	},
	{
		name: "ngày mồng 7, 7 ngày",
		character: {
			hiragana: "なのか",
			katakana: "",
			kanji: "７日",
		},
	},
	{
		name: "ngày mồng 8, 8 ngày",
		character: {
			hiragana: "ようか",
			katakana: "",
			kanji: "８日",
		},
	},
	{
		name: "ngày mồng 9, 9 ngày",
		character: {
			hiragana: "ここのか",
			katakana: "",
			kanji: "９日",
		},
	},
	{
		name: "ngày mồng 10, 10 ngày",
		character: {
			hiragana: "とおか",
			katakana: "",
			kanji: "１０日",
		},
	},
	{
		name: "ngày 14, 14 ngày",
		character: {
			hiragana: "じゅうよっか",
			katakana: "",
			kanji: "１４日",
		},
	},
	{
		name: "ngày 20, 20 ngày",
		character: {
			hiragana: "はつか",
			katakana: "",
			kanji: "２０日",
		},
	},
	{
		name: "ngày 24, 24 ngày",
		character: {
			hiragana: "にじゅうよっか",
			katakana: "",
			kanji: "２４日",
		},
	},
	{
		name: "ngày -, - ngày",
		character: {
			hiragana: "―にち",
			katakana: "",
			kanji: "―日",
		},
	},
	{
		name: "ngày mấy, ngày bao nhiêu, mấy ngày, bao nhiêu ngày",
		character: {
			hiragana: "なんにち",
			katakana: "",
			kanji: "何日",
		},
	},
	{
		name: "bao giờ, khi nào",
		character: {
			hiragana: "いつ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "sinh nhật",
		character: {
			hiragana: "たんじょうび",
			katakana: "",
			kanji: "誕生日",
		},
	},
	{
		name: "Ừ, nhỉ.",
		character: {
			hiragana: "そうですね。",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Xin cám ơn anh/chị rất nhiều.",
		character: {
			hiragana: "どうもありがとうございました。",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Không có gì.",
		character: {
			hiragana: "どういたしまして",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "sân ga số -",
		character: {
			hiragana: "―ばんせん",
			katakana: "",
			kanji: "番線",
		},
	},
	{
		name: "tiếp theo",
		character: {
			hiragana: "つぎの",
			katakana: "",
			kanji: "次の",
		},
	},
	{
		name: "tàu thường (dừng cả ở các ga lẻ)",
		character: {
			hiragana: "ふつう",
			katakana: "",
			kanji: "普通",
		},
	},
	{
		name: "tàu tốc hành",
		character: {
			hiragana: "きゅうこう",
			katakana: "",
			kanji: "急行",
		},
	},
	{
		name: "tàu tốc hành đặc biệt",
		character: {
			hiragana: "とっきゅう",
			katakana: "",
			kanji: "特急",
		},
	},
	{
		name: "tên một khu phố ở Osaka",
		character: {
			hiragana: "こうしえん",
			katakana: "",
			kanji: "甲子園",
		},
	},
	{
		name: "Lâu đài Osaka, một lâu đài nổi tiếng ở Osaka",
		character: {
			hiragana: "おおさかじょう",
			katakana: "",
			kanji: "大阪城",
		},
	},
];

const lessonSix :Array<Iword>= [
	{
		name: "ăn",
		character: {
			hiragana: "たべます",
			katakana: "",
			kanji: "食べます",
		},
	},
	{
		name: "uống",
		character: {
			hiragana: "のみます",
			katakana: "",
			kanji: "飲みます",
		},
	},
	{
		name: "hút [thuốc lá]",
		character: {
			hiragana: "すいます",
			katakana: "",
			kanji: "吸います",
		},
	},
	{
		name: "xem, nhìn, trông",
		character: {
			hiragana: "みます",
			katakana: "",
			kanji: "見ます",
		},
	},
	{
		name: "nghe",
		character: {
			hiragana: "ききます",
			katakana: "",
			kanji: "聞きます",
		},
	},
	{
		name: "đọc",
		character: {
			hiragana: "よみます",
			katakana: "",
			kanji: "読みます",
		},
	},
	{
		name: "viết, vẽ",
		character: {
			hiragana: "かきます",
			katakana: "",
			kanji: "書きます",
		},
	},
	{
		name: "mua",
		character: {
			hiragana: "かいます",
			katakana: "",
			kanji: "買います",
		},
	},
	{
		name: "chụp [ảnh]",
		character: {
			hiragana: "とります",
			katakana: "",
			kanji: "撮ります",
		},
	},
	{
		name: "làm",
		character: {
			hiragana: "します",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "gặp [bạn]",
		character: {
			hiragana: "あいます",
			katakana: "",
			kanji: "会います",
		},
	},
	{
		name: "cơm, bữa ăn",
		character: {
			hiragana: "ごはん",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "cơm sáng",
		character: {
			hiragana: "あさごはん",
			katakana: "",
			kanji: "朝ごはん",
		},
	},
	{
		name: "cơm trưa",
		character: {
			hiragana: "ひるごはん",
			katakana: "",
			kanji: "昼ごはん",
		},
	},
	{
		name: "cơm tối",
		character: {
			hiragana: "ばんごはん",
			katakana: "",
			kanji: "晩ごはん",
		},
	},
	{
		name: "bánh mì",
		character: {
			hiragana: "パン",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "trứng",
		character: {
			hiragana: "たまご",
			katakana: "",
			kanji: "卵",
		},
	},
	{
		name: "thịt",
		character: {
			hiragana: "にく",
			katakana: "",
			kanji: "肉",
		},
	},
	{
		name: "cá",
		character: {
			hiragana: "さかな",
			katakana: "",
			kanji: "魚",
		},
	},
	{
		name: "rau",
		character: {
			hiragana: "やさい",
			katakana: "",
			kanji: "野菜",
		},
	},
	{
		name: "hoa quả, trái cây",
		character: {
			hiragana: "くだもの",
			katakana: "",
			kanji: "果物",
		},
	},
	{
		name: "nước",
		character: {
			hiragana: "みず",
			katakana: "",
			kanji: "水",
		},
	},
	{
		name: "trà (nói chung)",
		character: {
			hiragana: "おちゃ",
			katakana: "",
			kanji: "お茶",
		},
	},
	{
		name: "trà đen",
		character: {
			hiragana: "こうちゃ",
			katakana: "",
			kanji: "紅茶",
		},
	},
	{
		name: "sữa bò (sữa)",
		character: {
			hiragana: "ぎゅうにゅう(ミルク)",
			katakana: "",
			kanji: "牛乳",
		},
	},
	{
		name: "nước hoa quả",
		character: {
			hiragana: "",
			katakana: "ジュース",
			kanji: "",
		},
	},
	{
		name: "bia",
		character: {
			hiragana: "",
			katakana: "ビール",
			kanji: "",
		},
	},
	{
		name: "rượu, rượu sake",
		character: {
			hiragana: "[お]さけ",
			katakana: "",
			kanji: "[お]酒",
		},
	},
	{
		name: "thuốc lá",
		character: {
			hiragana: "たばこ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "thư",
		character: {
			hiragana: "てがみ",
			katakana: "",
			kanji: "手紙",
		},
	},
	{
		name: "báo cáo",
		character: {
			hiragana: "",
			katakana: "レポート",
			kanji: "",
		},
	},
	{
		name: "ảnh",
		character: {
			hiragana: "しゃしん",
			katakana: "",
			kanji: "写真",
		},
	},
	{
		name: "video, băng video, đầu video",
		character: {
			hiragana: "",
			katakana: "ビデオ",
			kanji: "",
		},
	},
	{
		name: "cửa hàng, tiệm",
		character: {
			hiragana: "みせ",
			katakana: "",
			kanji: "店",
		},
	},
	{
		name: "vườn",
		character: {
			hiragana: "にわ",
			katakana: "",
			kanji: "庭",
		},
	},
	{
		name: "bài tập về nhà (～をします: làm bài tập)",
		character: {
			hiragana: "しゅくだい",
			katakana: "",
			kanji: "宿題",
		},
	},
	{
		name: "quần vợt (～をします: đánh quần vợt)",
		character: {
			hiragana: "",
			katakana: "テニス",
			kanji: "",
		},
	},
	{
		name: "bóng đá (～をします: chơi bóng đá)",
		character: {
			hiragana: "",
			katakana: "サッカー",
			kanji: "",
		},
	},
	{
		name: "việc ngắm hoa anh đào (～をします: ngắm hoa anh đào)",
		character: {
			hiragana: "[お]はなみ",
			katakana: "",
			kanji: "[お]花見",
		},
	},
	{
		name: "cái gì, gì",
		character: {
			hiragana: "なに",
			katakana: "",
			kanji: "何",
		},
	},
	{
		name: "cùng, cùng nhau",
		character: {
			hiragana: "いっしょに",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "một chút",
		character: {
			hiragana: "ちょっと",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "luôn luôn, lúc nào cũng",
		character: {
			hiragana: "いつも",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "thỉnh thoảng",
		character: {
			hiragana: "ときどき",
			katakana: "",
			kanji: "時々",
		},
	},
	{
		name: "sau đó, tiếp theo",
		character: {
			hiragana: "それから",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "vâng, được (cách nói thân mật của 「はい」)",
		character: {
			hiragana: "ええ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Được đấy nhỉ./ hay quá.",
		character: {
			hiragana: "いいですね。",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Tôi hiểu rồi/ vâng ạ.",
		character: {
			hiragana: "わかりました。",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Có gì đấy ạ?/ cái gì vậy?",
		character: {
			hiragana: "なんですか。",
			katakana: "",
			kanji: "何",
		},
	},
	{
		name: "Hẹn gặp lại [ngày mai].",
		character: {
			hiragana: "じゃ、また[あした]",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Mexico",
		character: {
			hiragana: "",
			katakana: "メキシコ",
			kanji: "",
		},
	},
	{
		name: "bách hóa Osaka (giả định)",
		character: {
			hiragana: "おおさかデパート",
			katakana: "",
			kanji: "大阪デパート",
		},
	},
	{
		name: "tên nhà hàng (giả định)",
		character: {
			hiragana: "つるや",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "tên siêu thị (giả định)",
		character: {
			hiragana: "フランスや",
			katakana: "",
			kanji: "フランス屋",
		},
	},
	{
		name: "tên siêu thị (giả định)",
		character: {
			hiragana: "まいにちや",
			katakana: "",
			kanji: "毎日屋",
		},
	},
];

const lessonSeven :Array<Iword>= [
	{
		name: "cắt",
		character: {
			hiragana: "きります",
			katakana: "",
			kanji: "切ります",
		},
	},
	{
		name: "gửi",
		character: {
			hiragana: "おくります",
			katakana: "",
			kanji: "送ります",
		},
	},
	{
		name: "cho, tặng",
		character: {
			hiragana: "あげます",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "nhận",
		character: {
			hiragana: "もらいます",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "cho mượn, cho vay",
		character: {
			hiragana: "かします",
			katakana: "",
			kanji: "貸します",
		},
	},
	{
		name: "mượn, vay",
		character: {
			hiragana: "かります",
			katakana: "",
			kanji: "借ります",
		},
	},
	{
		name: "dạy",
		character: {
			hiragana: "おしえます",
			katakana: "",
			kanji: "教えます",
		},
	},
	{
		name: "học, tập",
		character: {
			hiragana: "ならいます",
			katakana: "",
			kanji: "習います",
		},
	},
	{
		name: "gọi [điện thoại]",
		character: {
			hiragana: "かけます[でんわを～]",
			katakana: "",
			kanji: "かけます[電話を～]",
		},
	},
	{
		name: "tay",
		character: {
			hiragana: "て",
			katakana: "",
			kanji: "手",
		},
	},
	{
		name: "đũa",
		character: {
			hiragana: "はし",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "thìa",
		character: {
			hiragana: "",
			katakana: "スプーン",
			kanji: "",
		},
	},
	{
		name: "dao",
		character: {
			hiragana: "",
			katakana: "ナイフ",
			kanji: "",
		},
	},
	{
		name: "nĩa",
		character: {
			hiragana: "",
			katakana: "フォーク",
			kanji: "",
		},
	},
	{
		name: "kéo",
		character: {
			hiragana: "はさみ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "máy vi tính cá nhân",
		character: {
			hiragana: "",
			katakana: "パソコン",
			kanji: "",
		},
	},
	{
		name: "điện thoại di động",
		character: {
			hiragana: "",
			katakana: "ケータイ",
			kanji: "",
		},
	},
	{
		name: "thư điện tử, email",
		character: {
			hiragana: "",
			katakana: "メール",
			kanji: "",
		},
	},
	{
		name: "thiệp mừng năm mới",
		character: {
			hiragana: "ねんがじょう",
			katakana: "",
			kanji: "年賀状",
		},
	},
	{
		name: "cái đục lỗ",
		character: {
			hiragana: "",
			katakana: "パンチ",
			kanji: "",
		},
	},
	{
		name: "cái dập ghim",
		character: {
			hiragana: "",
			katakana: "ホッチキス",
			kanji: "",
		},
	},
	{
		name: "băng dính",
		character: {
			hiragana: "",
			katakana: "セロテープ",
			kanji: "",
		},
	},
	{
		name: "cái tẩy",
		character: {
			hiragana: "けしゴム",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "giấy",
		character: {
			hiragana: "かみ",
			katakana: "",
			kanji: "紙",
		},
	},
	{
		name: "hoa",
		character: {
			hiragana: "はな",
			katakana: "",
			kanji: "花",
		},
	},
	{
		name: "áo sơ mi",
		character: {
			hiragana: "",
			katakana: "シャツ",
			kanji: "",
		},
	},
	{
		name: "quà tặng, tặng phẩm",
		character: {
			hiragana: "",
			katakana: "プレゼント",
			kanji: "",
		},
	},
	{
		name: "đồ đạc, hành lý",
		character: {
			hiragana: "にもつ",
			katakana: "",
			kanji: "荷物",
		},
	},
	{
		name: "tiền",
		character: {
			hiragana: "おかね",
			katakana: "",
			kanji: "お金",
		},
	},
	{
		name: "vé",
		character: {
			hiragana: "きっぷ",
			katakana: "",
			kanji: "切符",
		},
	},
	{
		name: "Giáng sinh",
		character: {
			hiragana: "",
			katakana: "クリスマス",
			kanji: "",
		},
	},
	{
		name: "bố (dùng khi nói về bố mình)",
		character: {
			hiragana: "ちち",
			katakana: "",
			kanji: "父",
		},
	},
	{
		name: "mẹ (dùng khi nói về mẹ mình)",
		character: {
			hiragana: "はは",
			katakana: "",
			kanji: "母",
		},
	},
	{
		name: "bố (dùng khi nói về bố người khác và dùng khi xưng hô với bố mình)",
		character: {
			hiragana: "おとうさん",
			katakana: "",
			kanji: "お父さん",
		},
	},
	{
		name: "mẹ (dùng khi nói về mẹ người khác và dùng khi xưng hô với mẹ mình)",
		character: {
			hiragana: "おかあさん",
			katakana: "",
			kanji: "お母さん",
		},
	},
	{
		name: "đã, rồi",
		character: {
			hiragana: "もう",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "chưa",
		character: {
			hiragana: "まだ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "từ bây giờ, sau đây",
		character: {
			hiragana: "これから",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "[] hay nhỉ./ đẹp nhỉ.",
		character: {
			hiragana: "[～、]すてきですね。",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Chào mừng anh/chị đã đến chơi.",
		character: {
			hiragana: "いらっしゃい。",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Mời anh/chị vào.",
		character: {
			hiragana: "どうぞ　おあがりください。",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Xin thất lễ",
		character: {
			hiragana: "しつれいします。",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Anh/chị dùng [] có được không?",
		character: {
			hiragana: "[～は]いかがですか。",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Xin nhận . (cách nói dùng trước khi ăn hoặc uống)",
		character: {
			hiragana: "いただきます。",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Xin cám ơn anh/chị đã đãi tôi bữa ăn ngon (cách nói dùng sau khi ăn xong)",
		character: {
			hiragana: "ごちそうさま［でした］",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Tây Ban Nha",
		character: {
			hiragana: "",
			katakana: "スペイン",
			kanji: "",
		},
	},
];

const lessonEight :Array<Iword>= [
	{
		name: "đẹp trai",
		character: {
			hiragana: "",
			katakana: "ハンサム",
			kanji: "",
		},
	},
	{
		name: "đẹp, sạch",
		character: {
			hiragana: "きれい",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "yên tĩnh",
		character: {
			hiragana: "しずか",
			katakana: "",
			kanji: "静か",
		},
	},
	{
		name: "náo nhiệt",
		character: {
			hiragana: "にぎやか",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "nổi tiếng",
		character: {
			hiragana: "ゆうめい",
			katakana: "",
			kanji: "有名",
		},
	},
	{
		name: "tốt bụng, thân thiện",
		character: {
			hiragana: "しんせつ",
			katakana: "",
			kanji: "親切",
		},
	},
	{
		name: "khỏe",
		character: {
			hiragana: "げんき",
			katakana: "",
			kanji: "元気",
		},
	},
	{
		name: "rảnh rỗi",
		character: {
			hiragana: "ひま",
			katakana: "",
			kanji: "暇",
		},
	},
	{
		name: "tiện lợi",
		character: {
			hiragana: "べんり",
			katakana: "",
			kanji: "便利",
		},
	},
	{
		name: "đẹp, hay",
		character: {
			hiragana: "すてき",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "lớn, to",
		character: {
			hiragana: "おおきい",
			katakana: "",
			kanji: "大きい",
		},
	},
	{
		name: "bé, nhỏ",
		character: {
			hiragana: "ちいさい",
			katakana: "",
			kanji: "小さい",
		},
	},
	{
		name: "mới",
		character: {
			hiragana: "あたらしい",
			katakana: "",
			kanji: "新しい",
		},
	},
	{
		name: "cũ",
		character: {
			hiragana: "ふるい",
			katakana: "",
			kanji: "古い",
		},
	},
	{
		name: "tốt",
		character: {
			hiragana: "いい, よい",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "xấu",
		character: {
			hiragana: "わるい",
			katakana: "",
			kanji: "悪い",
		},
	},
	{
		name: "nóng",
		character: {
			hiragana: "あつい",
			katakana: "",
			kanji: "暑い, 熱い",
		},
	},
	{
		name: "lạnh, rét (dùng cho thời tiết)",
		character: {
			hiragana: "さむい",
			katakana: "",
			kanji: "寒い",
		},
	},
	{
		name: "lạnh, buốt (dùng cho cảm giác)",
		character: {
			hiragana: "つめたい",
			katakana: "",
			kanji: "冷たい",
		},
	},
	{
		name: "khó",
		character: {
			hiragana: "むずかしい",
			katakana: "",
			kanji: "難しい",
		},
	},
	{
		name: "dễ",
		character: {
			hiragana: "やさしい",
			katakana: "",
			kanji: "易しい",
		},
	},
	{
		name: "đắt, cao",
		character: {
			hiragana: "たかい",
			katakana: "",
			kanji: "高い",
		},
	},
	{
		name: "rẻ",
		character: {
			hiragana: "やすい",
			katakana: "",
			kanji: "安い",
		},
	},
	{
		name: "thấp",
		character: {
			hiragana: "ひくい",
			katakana: "",
			kanji: "低い",
		},
	},
	{
		name: "thú vị, hay",
		character: {
			hiragana: "おもしろい",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "ngon",
		character: {
			hiragana: "おいしい",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "bận",
		character: {
			hiragana: "いそがしい",
			katakana: "",
			kanji: "忙しい",
		},
	},
	{
		name: "vui",
		character: {
			hiragana: "たのしい",
			katakana: "",
			kanji: "楽しい",
		},
	},
	{
		name: "trắng",
		character: {
			hiragana: "しろい",
			katakana: "",
			kanji: "白い",
		},
	},
	{
		name: "đen",
		character: {
			hiragana: "くろい",
			katakana: "",
			kanji: "黒い",
		},
	},
	{
		name: "đỏ",
		character: {
			hiragana: "あかい",
			katakana: "",
			kanji: "赤い",
		},
	},
	{
		name: "xanh da trời",
		character: {
			hiragana: "あおい",
			katakana: "",
			kanji: "青い",
		},
	},
	{
		name: "anh đào (hoa, cây)",
		character: {
			hiragana: "さくら",
			katakana: "",
			kanji: "桜",
		},
	},
	{
		name: "núi",
		character: {
			hiragana: "やま",
			katakana: "",
			kanji: "山",
		},
	},
	{
		name: "thị trấn, thị xã, thành phố",
		character: {
			hiragana: "まち",
			katakana: "",
			kanji: "町",
		},
	},
	{
		name: "đồ ăn",
		character: {
			hiragana: "たべもの",
			katakana: "",
			kanji: "食べ物",
		},
	},
	{
		name: "nơi, chỗ",
		character: {
			hiragana: "ところ",
			katakana: "",
			kanji: "所",
		},
	},
	{
		name: "kí túc xá",
		character: {
			hiragana: "りょう",
			katakana: "",
			kanji: "寮",
		},
	},
	{
		name: "nhà hàng",
		character: {
			hiragana: "",
			katakana: "レストラン",
			kanji: "",
		},
	},
	{
		name: "cuộc sống, sinh hoạt",
		character: {
			hiragana: "せいかつ",
			katakana: "",
			kanji: "生活",
		},
	},
	{
		name: "công việc (～をします：làm việc)",
		character: {
			hiragana: "しごと",
			katakana: "",
			kanji: "仕事",
		},
	},
	{
		name: "thế nào",
		character: {
			hiragana: "どう",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: " như thế nào",
		character: {
			hiragana: "どんな～",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "rất, lắm",
		character: {
			hiragana: "とても",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "không  lắm",
		character: {
			hiragana: "あまり",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "và, thêm nữa (dùng để nối 2 câu)",
		character: {
			hiragana: "そして",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: " , nhưng ",
		character: {
			hiragana: "～が、～",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Anh/chị có khỏe không?",
		character: {
			hiragana: "おげんきですか",
			katakana: "",
			kanji: "お元気ですか",
		},
	},
	{
		name: "Thế à. Như vậy nhỉ",
		character: {
			hiragana: "そうですね",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "một chén/ly nữa được không ạ?",
		character: {
			hiragana: "もういっぱいいかがですか",
			katakana: "",
			kanji: "もう一杯いかがですか",
		},
	},
	{
		name: "Không, đủ rồi ạ.",
		character: {
			hiragana: "いいえけっこうです",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Đã  rồi nhỉ./ Đã  rồi, đúng không ạ?",
		character: {
			hiragana: "もう～です[ね]",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Sắp đến lúc tôi phải xin phép rồi./ Đã đến lúc tôi phải về.",
		character: {
			hiragana: "そろそろしつれいします",
			katakana: "",
			kanji: "そろそろ失礼します",
		},
	},
	{
		name: "Không có gì./ Không sao cả.",
		character: {
			hiragana: "いいえ",
			katakana: "",
			kanji: "いいえ",
		},
	},
	{
		name: "Lần sau anh/ chị lại đến chơi nhé.",
		character: {
			hiragana: "またいらっしゃってください",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Thượng Hải",
		character: {
			hiragana: "しゃんはい",
			katakana: "",
			kanji: "上海",
		},
	},
	{
		name: "Chùa Kinkaku-ji (chùa vàng)",
		character: {
			hiragana: "きんかくじ",
			katakana: "",
			kanji: "金閣寺",
		},
	},
	{
		name: "Công viên Nara",
		character: {
			hiragana: "ならこうえん",
			katakana: "",
			kanji: "奈良公園",
		},
	},
	{
		name: "Núi Phú Sĩ (ngọn núi cao nhất Nhật Bản)",
		character: {
			hiragana: "ふじさん",
			katakana: "",
			kanji: "富士山",
		},
	},
	{
		name: "bảy chàng võ sĩ Samurai (tên phim)",
		character: {
			hiragana: "しちにんのさむらい",
			katakana: "",
			kanji: "七人の侍",
		},
	},
];

const lessonNine :Array<Iword>= [
	{
		name: "hiểu, nắm được",
		character: {
			hiragana: "わかります",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "có (sở hữu)",
		character: {
			hiragana: "あります",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "thích",
		character: {
			hiragana: "すき",
			katakana: "",
			kanji: "好き",
		},
	},
	{
		name: "ghét, không thích",
		character: {
			hiragana: "きらい",
			katakana: "",
			kanji: "嫌い",
		},
	},
	{
		name: "giỏi, khéo",
		character: {
			hiragana: "じょうず",
			katakana: "",
			kanji: "上手",
		},
	},
	{
		name: "kém",
		character: {
			hiragana: "へた",
			katakana: "",
			kanji: "下手",
		},
	},
	{
		name: "đồ uống",
		character: {
			hiragana: "のみもの",
			katakana: "",
			kanji: "飲み物",
		},
	},
	{
		name: "món ăn, việc nấu ăn",
		character: {
			hiragana: "りょうり",
			katakana: "",
			kanji: "料理",
		},
	},
	{
		name: "thể thao (～をします：chơi thể thao)",
		character: {
			hiragana: "",
			katakana: "スポーツ",
			kanji: "",
		},
	},
	{
		name: "bóng chày (～をします：chơi bóng chày)",
		character: {
			hiragana: "やきゅう",
			katakana: "",
			kanji: "野球",
		},
	},
	{
		name: "nhảy, khiêu vũ(～をします：nhảy, khiêu vũ)",
		character: {
			hiragana: "",
			katakana: "ダンス",
			kanji: "",
		},
	},
	{
		name: "du lịch, chuyến du lịch",
		character: {
			hiragana: "りょこう",
			katakana: "",
			kanji: "旅行",
		},
	},
	{
		name: "âm nhạc",
		character: {
			hiragana: "おんがく",
			katakana: "",
			kanji: "音楽",
		},
	},
	{
		name: "bài hát",
		character: {
			hiragana: "うた",
			katakana: "",
			kanji: "歌",
		},
	},
	{
		name: "nhạc cổ điển",
		character: {
			hiragana: "",
			katakana: "クラシック",
			kanji: "",
		},
	},
	{
		name: "nhạc jazz",
		character: {
			hiragana: "",
			katakana: "ジャズ",
			kanji: "",
		},
	},
	{
		name: "buổi hòa nhạc",
		character: {
			hiragana: "",
			katakana: "コンサート",
			kanji: "",
		},
	},
	{
		name: "karaoke",
		character: {
			hiragana: "",
			katakana: "カラオケ",
			kanji: "",
		},
	},
	{
		name: "Kabuki (một loại ca kịch truyền thống của Nhật)",
		character: {
			hiragana: "かぶき",
			katakana: "",
			kanji: "歌舞伎",
		},
	},
	{
		name: "tranh, hội họa",
		character: {
			hiragana: "え",
			katakana: "",
			kanji: "絵",
		},
	},
	{
		name: "chữ",
		character: {
			hiragana: "じ",
			katakana: "",
			kanji: "字",
		},
	},
	{
		name: "chữ hán",
		character: {
			hiragana: "かんじ",
			katakana: "",
			kanji: "漢字",
		},
	},
	{
		name: "chữ Hiragana",
		character: {
			hiragana: "ひらがな",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Chữ Katakana",
		character: {
			hiragana: "かたかな",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "chữ La Mã",
		character: {
			hiragana: "ローマじ",
			katakana: "",
			kanji: "ローマ字",
		},
	},
	{
		name: "tiền lẻ",
		character: {
			hiragana: "こまかいおかね",
			katakana: "",
			kanji: "細かいお金",
		},
	},
	{
		name: "vé (xem hòa nhạc, xem phim)",
		character: {
			hiragana: "",
			katakana: "チケット",
			kanji: "",
		},
	},
	{
		name: "thời gian",
		character: {
			hiragana: "じかん",
			katakana: "",
			kanji: "時間",
		},
	},
	{
		name: "việc bận, công chuyện",
		character: {
			hiragana: "ようじ",
			katakana: "",
			kanji: "用事",
		},
	},
	{
		name: "cuộc hẹn, lời hứa",
		character: {
			hiragana: "やくそく",
			katakana: "",
			kanji: "約束",
		},
	},
	{
		name: "việc làm thêm",
		character: {
			hiragana: "",
			katakana: "アルバイト",
			kanji: "",
		},
	},
	{
		name: "chồng (dùng khi nói về chồng người khác)",
		character: {
			hiragana: "ごしゅじん",
			katakana: "",
			kanji: "ご主人",
		},
	},
	{
		name: "chồng (dùng khi nói về chồng mình)",
		character: {
			hiragana: "おっと/しゅじん",
			katakana: "",
			kanji: "夫 /主人",
		},
	},
	{
		name: "vợ (dùng khi nói về vợ người khác)",
		character: {
			hiragana: "おくさん",
			katakana: "",
			kanji: "奥さん",
		},
	},
	{
		name: "vợ (dùng khi nói về vợ mình)",
		character: {
			hiragana: "つま/かない",
			katakana: "",
			kanji: "妻/家内",
		},
	},
	{
		name: "con cái",
		character: {
			hiragana: "こども",
			katakana: "",
			kanji: "子ども",
		},
	},
	{
		name: "tốt, rõ (chỉ mức độ)",
		character: {
			hiragana: "よく",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "đại khái, đại thể",
		character: {
			hiragana: "だいたい",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "nhiều",
		character: {
			hiragana: "たくさん",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "ít, một ít",
		character: {
			hiragana: "すこし",
			katakana: "",
			kanji: "少し",
		},
	},
	{
		name: "hoàn toàn  không",
		character: {
			hiragana: "ぜんぜん",
			katakana: "",
			kanji: "全然",
		},
	},
	{
		name: "sớm, nhanh",
		character: {
			hiragana: "はやく",
			katakana: "",
			kanji: "早く, 速く",
		},
	},
	{
		name: "vì ",
		character: {
			hiragana: "～から",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "tại sao",
		character: {
			hiragana: "どうして",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Hãy cho tôi mượn.",
		character: {
			hiragana: "貸してください",
			katakana: "",
			kanji: "貸してください",
		},
	},
	{
		name: "Được chứ./ Được ạ.",
		character: {
			hiragana: "いいですよ",
			katakana: "",
			kanji: "いいですよ",
		},
	},
	{
		name: "Thật đáng tiếc nhỉ./ buồn nhỉ.",
		character: {
			hiragana: "残念ですね",
			katakana: "",
			kanji: "残念ですね",
		},
	},
	{
		name: "Ah",
		character: {
			hiragana: "ああ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Anh/chị cùng  (làm cái gì đó) với chúng tôi được không?",
		character: {
			hiragana: "いっしょにいかがですか。",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "[ thì] có lẽ không được rồi.",
		character: {
			hiragana: "[～は]ちょっと…。",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Không được à?",
		character: {
			hiragana: "だめですか。",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Hẹn Anh/Chị lần sau vậy.",
		character: {
			hiragana: "",
			katakana: "",
			kanji: "また　今度　お願いします",
		},
	},
];

const lessonTen :Array<Iword>= [ 
	{
		name: "có (tồn tại, dùng cho đồ vật)",
		character: {
			hiragana: "あります",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "có, ở (tồn tại, dùng cho người và động vật)",
		character: {
			hiragana: "います",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "nhiều, đa dạng",
		character: {
			hiragana: "いろいろ[な]",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "người đàn ông",
		character: {
			hiragana: "おとこのひと",
			katakana: "",
			kanji: "男の人",
		},
	},
	{
		name: "người đàn bà",
		character: {
			hiragana: "おんなのひと",
			katakana: "",
			kanji: "女の人",
		},
	},
	{
		name: "cậu con trai",
		character: {
			hiragana: "おとこのこ",
			katakana: "",
			kanji: "男の子",
		},
	},
	{
		name: "cô con gái",
		character: {
			hiragana: "おんなのこ",
			katakana: "",
			kanji: "女の子",
		},
	},
	{
		name: "chó",
		character: {
			hiragana: "いぬ",
			katakana: "",
			kanji: "犬",
		},
	},
	{
		name: "mèo",
		character: {
			hiragana: "ねこ",
			katakana: "",
			kanji: "猫",
		},
	},
	{
		name: "gấu trúc",
		character: {
			hiragana: "",
			katakana: "パンダ",
			kanji: "",
		},
	},
	{
		name: "voi",
		character: {
			hiragana: "ぞう",
			katakana: "",
			kanji: "象",
		},
	},
	{
		name: "cây, gỗ",
		character: {
			hiragana: "き",
			katakana: "",
			kanji: "木",
		},
	},
	{
		name: "vật, đồ vật",
		character: {
			hiragana: "もの",
			katakana: "",
			kanji: "物",
		},
	},
	{
		name: "Pin",
		character: {
			hiragana: "でんち",
			katakana: "",
			kanji: "電池",
		},
	},
	{
		name: "hộp",
		character: {
			hiragana: "はこ",
			katakana: "",
			kanji: "箱",
		},
	},
	{
		name: "công tắc",
		character: {
			hiragana: "",
			katakana: "スイッチ",
			kanji: "",
		},
	},
	{
		name: "tủ lạnh",
		character: {
			hiragana: "れいぞうこ",
			katakana: "",
			kanji: "冷蔵庫",
		},
	},
	{
		name: "bàn",
		character: {
			hiragana: "",
			katakana: "テーブル",
			kanji: "",
		},
	},
	{
		name: "giường",
		character: {
			hiragana: "",
			katakana: "ベッド",
			kanji: "",
		},
	},
	{
		name: "giá sách",
		character: {
			hiragana: "たな",
			katakana: "",
			kanji: "棚",
		},
	},
	{
		name: "cửa",
		character: {
			hiragana: "",
			katakana: "ドア",
			kanji: "",
		},
	},
	{
		name: "cửa sổ",
		character: {
			hiragana: "まど",
			katakana: "",
			kanji: "窓",
		},
	},
	{
		name: "hộp thư, hòm thư",
		character: {
			hiragana: "",
			katakana: "ポスト",
			kanji: "",
		},
	},
	{
		name: "toà nhà",
		character: {
			hiragana: "",
			katakana: "ビル",
			kanji: "",
		},
	},
	{
		name: "máy rút tiền tự động ATM",
		character: {
			hiragana: "ATM",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "cửa hàng tiện lợi (mở 24/24)",
		character: {
			hiragana: "",
			katakana: "コンビニ",
			kanji: "",
		},
	},
	{
		name: "công viên",
		character: {
			hiragana: "こうえん",
			katakana: "",
			kanji: "公園",
		},
	},
	{
		name: "quán giải khát, quán cà-phê",
		character: {
			hiragana: "きっさてん",
			katakana: "",
			kanji: "喫茶店",
		},
	},
	{
		name: "hiệu , cửa hàng ",
		character: {
			hiragana: "～や",
			katakana: "",
			kanji: "～屋",
		},
	},
	{
		name: "bến xe, điểm lên xuống xe",
		character: {
			hiragana: "のりば",
			katakana: "",
			kanji: "乗り場",
		},
	},
	{
		name: "tỉnh",
		character: {
			hiragana: "けん",
			katakana: "",
			kanji: "県",
		},
	},
	{
		name: "trên",
		character: {
			hiragana: "うえ",
			katakana: "",
			kanji: "上",
		},
	},
	{
		name: "dưới",
		character: {
			hiragana: "した",
			katakana: "",
			kanji: "下",
		},
	},
	{
		name: "trước",
		character: {
			hiragana: "まえ",
			katakana: "",
			kanji: "前",
		},
	},
	{
		name: "sau",
		character: {
			hiragana: "うしろ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "phải",
		character: {
			hiragana: "みぎ",
			katakana: "",
			kanji: "右",
		},
	},
	{
		name: "trái",
		character: {
			hiragana: "ひだり",
			katakana: "",
			kanji: "左",
		},
	},
	{
		name: "trong, giữa",
		character: {
			hiragana: "なか",
			katakana: "",
			kanji: "中",
		},
	},
	{
		name: "ngoài",
		character: {
			hiragana: "そと",
			katakana: "",
			kanji: "外",
		},
	},
	{
		name: "bên cạnh",
		character: {
			hiragana: "となり",
			katakana: "",
			kanji: "隣",
		},
	},
	{
		name: "gần",
		character: {
			hiragana: "ちかく",
			katakana: "",
			kanji: "近く",
		},
	},
	{
		name: "giữa",
		character: {
			hiragana: "あいだ",
			katakana: "",
			kanji: "間",
		},
	},
	{
		name: "và , [v.v.]",
		character: {
			hiragana: "～や～[など] ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Cám ơn",
		character: {
			hiragana: "[どうも]すみません。",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "nampla, nước mắn",
		character: {
			hiragana: "",
			katakana: "ナンプラー",
			kanji: "",
		},
	},
	{
		name: "góc, khu vực",
		character: {
			hiragana: "",
			katakana: "コーナー",
			kanji: "",
		},
	},
	{
		name: "ở dưới cùng",
		character: {
			hiragana: "いちばん下",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Công viên Tokyo Disneyland",
		character: {
			hiragana: "",
			katakana: "",
			kanji: "東京ディズニーランド",
		},
	},
	{
		name: "tên một siêu thị (giả định)",
		character: {
			hiragana: "",
			katakana: "アジアストア",
			kanji: "",
		},
	},
];

const lessonEleven :Array<Iword>= [
	{
		name: "có [con]",
		character: {
			hiragana: "こどもが～います",
			katakana: "",
			kanji: "子供が～います",
		},
	},
	{
		name: "ở [Nhật]",
		character: {
			hiragana: "にほんに～います",
			katakana: "",
			kanji: "日本に～います",
		},
	},
	{
		name: "mất, tốn (thời gian, tiền bạc)",
		character: {
			hiragana: "かかります",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "nghỉ [làm việc]",
		character: {
			hiragana: "やすみます",
			katakana: "",
			kanji: "休みます",
		},
	},
	{
		name: "một cái (dùng để đếm đồ vật)",
		character: {
			hiragana: "ひとつ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "hai cái",
		character: {
			hiragana: "ふたつ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "ba cái",
		character: {
			hiragana: "みっつ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "bốn cái",
		character: {
			hiragana: "よっつ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "năm cái",
		character: {
			hiragana: "いつつ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "sáu cái",
		character: {
			hiragana: "むっつ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "bảy cái",
		character: {
			hiragana: "ななつ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "tám cái",
		character: {
			hiragana: "やっつ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "chín cái",
		character: {
			hiragana: "ここのつ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "mười cái",
		character: {
			hiragana: "とお",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "mấy cái, bao nhiêu cái",
		character: {
			hiragana: "いくつ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "một người",
		character: {
			hiragana: "ひとり",
			katakana: "",
			kanji: "１人",
		},
	},
	{
		name: "hai người",
		character: {
			hiragana: "ふたり",
			katakana: "",
			kanji: "２人",
		},
	},
	{
		name: "- người",
		character: {
			hiragana: "―にん",
			katakana: "",
			kanji: "－人",
		},
	},
	{
		name: "- cái (dùng để đếm máy móc, xe cộ v.v.)",
		character: {
			hiragana: "―だい",
			katakana: "",
			kanji: "－台",
		},
	},
	{
		name: "tờ, tấm (dùng để đếm những vật mỏng như giấy, con tem v.v.)",
		character: {
			hiragana: "―まい",
			katakana: "",
			kanji: "－枚",
		},
	},
	{
		name: "- lần",
		character: {
			hiragana: "―かい",
			katakana: "",
			kanji: "―回",
		},
	},
	{
		name: "táo",
		character: {
			hiragana: "りんご",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "quýt",
		character: {
			hiragana: "みかん",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "bánh San Uých",
		character: {
			hiragana: "",
			katakana: "サンドイッチ",
			kanji: "",
		},
	},
	{
		name: "món [cơm] ca-ri",
		character: {
			hiragana: "",
			katakana: "カレー[ライス]",
			kanji: "",
		},
	},
	{
		name: "kem",
		character: {
			hiragana: "",
			katakana: "アイスクリーム",
			kanji: "",
		},
	},
	{
		name: "tem",
		character: {
			hiragana: "きって",
			katakana: "",
			kanji: "切手",
		},
	},
	{
		name: "bưu thiếp",
		character: {
			hiragana: "はがき",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "phong bì",
		character: {
			hiragana: "ふうとう",
			katakana: "",
			kanji: "封筒",
		},
	},
	{
		name: "bố mẹ",
		character: {
			hiragana: "りょうしん",
			katakana: "",
			kanji: "両親",
		},
	},
	{
		name: "anh chị em",
		character: {
			hiragana: "きょうだい",
			katakana: "",
			kanji: "兄弟",
		},
	},
	{
		name: "anh trai",
		character: {
			hiragana: "あに",
			katakana: "",
			kanji: "兄",
		},
	},
	{
		name: "anh trai (dùng cho người khác)",
		character: {
			hiragana: "おにいさん",
			katakana: "",
			kanji: "お兄さん",
		},
	},
	{
		name: "chị gái",
		character: {
			hiragana: "あね",
			katakana: "",
			kanji: "姉",
		},
	},
	{
		name: "chị gái (dùng cho người khác)",
		character: {
			hiragana: "おねえさん",
			katakana: "",
			kanji: "お姉さん",
		},
	},
	{
		name: "em trai",
		character: {
			hiragana: "おとうと",
			katakana: "",
			kanji: "弟",
		},
	},
	{
		name: "em trai (dùng cho người khác)",
		character: {
			hiragana: "おとうとさん",
			katakana: "",
			kanji: "弟さん",
		},
	},
	{
		name: "em gái",
		character: {
			hiragana: "いもうと",
			katakana: "",
			kanji: "妹",
		},
	},
	{
		name: "em gái (dùng cho người khác)",
		character: {
			hiragana: "いもうとさん",
			katakana: "",
			kanji: "妹さん",
		},
	},
	{
		name: "nước ngoài",
		character: {
			hiragana: "がいこく",
			katakana: "",
			kanji: "外国",
		},
	},
	{
		name: "lưu học sinh, sinh viên nước ngoài",
		character: {
			hiragana: "りゅうがくせい",
			katakana: "",
			kanji: "留学生",
		},
	},
	{
		name: "lớp học",
		character: {
			hiragana: "",
			katakana: "クラス",
			kanji: "",
		},
	},
	{
		name: "- tiếng",
		character: {
			hiragana: "―じかん",
			katakana: "",
			kanji: "―時間",
		},
	},
	{
		name: "- tuần",
		character: {
			hiragana: "―しゅうかん",
			katakana: "",
			kanji: "―週間",
		},
	},
	{
		name: "- tháng",
		character: {
			hiragana: "―かげつ",
			katakana: "",
			kanji: "－か月",
		},
	},
	{
		name: "- năm",
		character: {
			hiragana: "―ねん",
			katakana: "",
			kanji: "―年",
		},
	},
	{
		name: "khoảng ",
		character: {
			hiragana: "～ぐらい",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "bao lâu",
		character: {
			hiragana: "どのくらい",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "tổng cộng",
		character: {
			hiragana: "ぜんぶで",
			katakana: "",
			kanji: "全部で",
		},
	},
	{
		name: "tất cả",
		character: {
			hiragana: "みんな",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "chỉ ",
		character: {
			hiragana: "～だけ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Tôi đã rõ rồi ạ (thưa ông/bà)",
		character: {
			hiragana: "かしこまりました。",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Trời đẹp nhỉ.",
		character: {
			hiragana: "",
			katakana: "",
			kanji: "いい[お]天気",
		},
	},
	{
		name: "Anh/ chị đi ra ngoài đấy à?",
		character: {
			hiragana: "お出かけですか。",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Tôi đi  một chút.",
		character: {
			hiragana: "ちょっと～まで。",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Anh/chị đi nhé.",
		character: {
			hiragana: "行っていらっしゃい。",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Tôi đi đây.",
		character: {
			hiragana: "行ってきます。",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "gửi bằng đường biển",
		character: {
			hiragana: "",
			katakana: "",
			kanji: "船便",
		},
	},
	{
		name: "gửi bằng đường hàng không",
		character: {
			hiragana: "",
			katakana: "",
			kanji: "航空便",
		},
	},
	{
		name: "Nhờ anh/chị.",
		character: {
			hiragana: "",
			katakana: "",
			kanji: "お願いします。",
		},
	},
	{
		name: "Úc",
		character: {
			hiragana: "",
			katakana: "オーストラリア",
			kanji: "",
		},
	},
];

const lessonTwelve :Array<Iword> = [
	{
		name: "giản đơn",
		character: {
			hiragana: "かんたん",
			katakana: "",
			kanji: "簡単",
		},
	},
	{
		name: "gần",
		character: {
			hiragana: "ちかい",
			katakana: "",
			kanji: "近い",
		},
	},
	{
		name: "xa",
		character: {
			hiragana: "とおい",
			katakana: "",
			kanji: "遠い",
		},
	},
	{
		name: "nhanh, sớm",
		character: {
			hiragana: "はやい",
			katakana: "",
			kanji: "速い, 早い",
		},
	},
	{
		name: "chậm, muộn",
		character: {
			hiragana: "おそい",
			katakana: "",
			kanji: "遅い",
		},
	},
	{
		name: "nhiều [người]",
		character: {
			hiragana: "[ひとが～]おおい",
			katakana: "",
			kanji: "[人が～]多い",
		},
	},
	{
		name: "ít [người]",
		character: {
			hiragana: "[ひとが～]すくない",
			katakana: "",
			kanji: "[人が～]少ない",
		},
	},
	{
		name: "ấm",
		character: {
			hiragana: "あたたかい",
			katakana: "",
			kanji: "温かい, 暖かい",
		},
	},
	{
		name: "mát",
		character: {
			hiragana: "すずしい",
			katakana: "",
			kanji: "涼しい",
		},
	},
	{
		name: "ngọt",
		character: {
			hiragana: "あまい",
			katakana: "",
			kanji: "甘い",
		},
	},
	{
		name: "cay",
		character: {
			hiragana: "からい",
			katakana: "",
			kanji: "辛い",
		},
	},
	{
		name: "nặng",
		character: {
			hiragana: "おもい",
			katakana: "",
			kanji: "重い",
		},
	},
	{
		name: "nhẹ",
		character: {
			hiragana: "かるい",
			katakana: "",
			kanji: "軽い",
		},
	},
	{
		name: "thích, chọn, dùng [cafe]",
		character: {
			hiragana: "[コーヒーが～]いい",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "mùa",
		character: {
			hiragana: "きせつ",
			katakana: "",
			kanji: "季節",
		},
	},
	{
		name: "mùa xuân",
		character: {
			hiragana: "はる",
			katakana: "",
			kanji: "春",
		},
	},
	{
		name: "mùa hè",
		character: {
			hiragana: "なつ",
			katakana: "",
			kanji: "夏",
		},
	},
	{
		name: "mùa thu",
		character: {
			hiragana: "あき",
			katakana: "",
			kanji: "秋",
		},
	},
	{
		name: "mùa đông",
		character: {
			hiragana: "ふゆ",
			katakana: "",
			kanji: "冬",
		},
	},
	{
		name: "thời tiết",
		character: {
			hiragana: "てんき",
			katakana: "",
			kanji: "天気",
		},
	},
	{
		name: "mưa",
		character: {
			hiragana: "あめ",
			katakana: "",
			kanji: "雨",
		},
	},
	{
		name: "tuyết",
		character: {
			hiragana: "ゆき",
			katakana: "",
			kanji: "雪",
		},
	},
	{
		name: "có mây",
		character: {
			hiragana: "くもり",
			katakana: "",
			kanji: "曇り",
		},
	},
	{
		name: "khách sạn",
		character: {
			hiragana: "",
			katakana: "ホテル",
			kanji: "",
		},
	},
	{
		name: "sân bay",
		character: {
			hiragana: "くうこう",
			katakana: "",
			kanji: "空港",
		},
	},
	{
		name: "biển, đại dương",
		character: {
			hiragana: "うみ",
			katakana: "",
			kanji: "海",
		},
	},
	{
		name: "thế giới",
		character: {
			hiragana: "せかい",
			katakana: "",
			kanji: "世界",
		},
	},
	{
		name: "tiệc (をします：tổ chức tiệc)",
		character: {
			hiragana: "",
			katakana: "パーティー",
			kanji: "",
		},
	},
	{
		name: "lễ hội",
		character: {
			hiragana: "[お]まつり",
			katakana: "",
			kanji: "[お]祭り",
		},
	},
	{
		name: "Sukiyaki (món thịt bò nấu rau)",
		character: {
			hiragana: "すきやき",
			katakana: "",
			kanji: "すき焼き",
		},
	},
	{
		name: "Sashimi (món gỏi cá sống)",
		character: {
			hiragana: "さしみ",
			katakana: "",
			kanji: "刺身",
		},
	},
	{
		name: "Sushi",
		character: {
			hiragana: "[お]すし",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Tempura (món hải sản và rau chiên tẩm bột)",
		character: {
			hiragana: "てんぷら",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "thịt heo, thịt lợn",
		character: {
			hiragana: "ぶたにく",
			katakana: "",
			kanji: "豚肉",
		},
	},
	{
		name: "thịt gà",
		character: {
			hiragana: "とりにく",
			katakana: "",
			kanji: "とり肉",
		},
	},
	{
		name: "thịt bò",
		character: {
			hiragana: "ぎゅうにく",
			katakana: "",
			kanji: "牛肉",
		},
	},
	{
		name: "chanh tây",
		character: {
			hiragana: "",
			katakana: "レモン",
			kanji: "",
		},
	},
	{
		name: "Nghệ thuật cắm hoa (～をします：cắm hoa)",
		character: {
			hiragana: "いけばな",
			katakana: "",
			kanji: "生け花",
		},
	},
	{
		name: "lá đỏ",
		character: {
			hiragana: "もみじ",
			katakana: "",
			kanji: "紅葉",
		},
	},
	{
		name: "cái nào",
		character: {
			hiragana: "どちら",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "cả hai",
		character: {
			hiragana: "どちらも",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "nhất",
		character: {
			hiragana: "いちばん",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "suốt",
		character: {
			hiragana: "ずっと",
			katakana: "",
			kanji: "",
		},
	},
	[
		{
			name: "lần đầu tiên",
			character: {
				hiragana: "はじめて",
				katakana: "",
				kanji: "初めて",
			},
		},
		{
			name: "Tôi đã về đây. (dùng nói khi về đến nhà)",
			character: {
				hiragana: "ただいま",
				katakana: "",
				kanji: "",
			},
		},
		{
			name: "Anh/Chị đã về đấy à. (dùng để nói với ai đó mới về đến nhà)",
			character: {
				hiragana: "おかえりなさい",
				katakana: "",
				kanji: "お帰りなさい",
			},
		},
		{
			name: "Ôi, (người) đông quá nhỉ!",
			character: {
				hiragana: "わあ、すごい人ですね。",
				katakana: "",
				kanji: "人",
			},
		},
		{
			name: "Tôi mệt rồi",
			character: {
				hiragana: "つかれました",
				katakana: "",
				kanji: "疲れました。",
			},
		},
		{
			name: "Lễ hội Gi-ôn (lễ hội nổi tiếng nhất ở Kyoto)",
			character: {
				hiragana: "ぎおんまつり",
				katakana: "",
				kanji: "祇園祭",
			},
		},
		{
			name: "Hồng Kông",
			character: {
				hiragana: "",
				katakana: "ホンコン",
				kanji: "",
			},
		},
		{
			name: "Singapore",
			character: {
				hiragana: "",
				katakana: "シンガポール",
				kanji: "",
			},
		},
		{
			name: "tên một siêu thị (giả định)",
			character: {
				hiragana: "",
				katakana: "ＡＣＢストア",
				kanji: "",
			},
		},
		{
			name: "tên một siêu thị (giả định)",
			character: {
				hiragana: "",
				katakana: "ジャパン",
				kanji: "",
			},
		},
	],
];

const lessonThirteen :Array<Iword> = [
	{
		name: "chơi",
		character: {
			hiragana: "あそびます",
			katakana: "",
			kanji: "遊びます",
		},
	},
	{
		name: "bơi",
		character: {
			hiragana: "およぎます",
			katakana: "",
			kanji: "泳ぎます",
		},
	},
	{
		name: "đón",
		character: {
			hiragana: "むかえます",
			katakana: "",
			kanji: "迎えます",
		},
	},
	{
		name: "mệt",
		character: {
			hiragana: "つかれます",
			katakana: "",
			kanji: "疲れます",
		},
	},
	{
		name: "kết hôn, lập gia đình, cưới",
		character: {
			hiragana: "けっこんします",
			katakana: "",
			kanji: "結婚します",
		},
	},
	{
		name: "mua hàng",
		character: {
			hiragana: "かいものします",
			katakana: "",
			kanji: "買い物します",
		},
	},
	{
		name: "ăn cơm",
		character: {
			hiragana: "しょくじします",
			katakana: "",
			kanji: "食事します",
		},
	},
	{
		name: "đi dạo [ở công viên]",
		character: {
			hiragana: "さんぽします [こうえんを～]",
			katakana: "",
			kanji: "散歩します [公園を～]",
		},
	},
	{
		name: "vất vả, khó khăn, khổ",
		character: {
			hiragana: "たいへん「な」",
			katakana: "",
			kanji: "大変「な」",
		},
	},
	{
		name: "muốn có",
		character: {
			hiragana: "ほしい",
			katakana: "",
			kanji: "欲しい",
		},
	},
	{
		name: "rộng",
		character: {
			hiragana: "ひろい",
			katakana: "",
			kanji: "広い",
		},
	},
	{
		name: "chật, hẹp",
		character: {
			hiragana: "せまい",
			katakana: "",
			kanji: "狭い",
		},
	},
	{
		name: "bể bơi",
		character: {
			hiragana: "",
			katakana: "プール",
			kanji: "",
		},
	},
	{
		name: "sông",
		character: {
			hiragana: "かわ",
			katakana: "",
			kanji: "川",
		},
	},
	{
		name: "mỹ thuật",
		character: {
			hiragana: "びじゅつ",
			katakana: "",
			kanji: "美術",
		},
	},
	{
		name: "việc câu cá (をします：câu cá)",
		character: {
			hiragana: "つり",
			katakana: "",
			kanji: "釣り",
		},
	},
	{
		name: "việc trượt tuyết (をします：trượt tuyết)",
		character: {
			hiragana: "",
			katakana: "スキー",
			kanji: "",
		},
	},
	{
		name: "cuối tuần",
		character: {
			hiragana: "しゅうまつ",
			katakana: "",
			kanji: "週末",
		},
	},
	{
		name: "Tết",
		character: {
			hiragana: "[お]しょうがつ",
			katakana: "",
			kanji: "[お]正月",
		},
	},
	{
		name: "khoảng  (dùng cho thời gian)",
		character: {
			hiragana: "～ごろ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "cái gì đó",
		character: {
			hiragana: "なにか",
			katakana: "",
			kanji: "何か",
		},
	},
	{
		name: "đâu đó, chỗ nào đó",
		character: {
			hiragana: "どこか",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "(tôi) khát.",
		character: {
			hiragana: "のどがかわきます",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "(tôi) đói rồi.",
		character: {
			hiragana: "おなかがすきます",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Nhất trí./ Chúng ta thống nhất như thế.",
		character: {
			hiragana: "そうしましょう。",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Anh/Chị dùng món gì ạ",
		character: {
			hiragana: "ごちゅうもんは？",
			katakana: "",
			kanji: "ご注文は？",
		},
	},
	{
		name: "cơm suất, cơm phần",
		character: {
			hiragana: "ていしょく",
			katakana: "",
			kanji: "定食",
		},
	},
	{
		name: "món cơm thịt bò",
		character: {
			hiragana: "ぎゅうどん",
			katakana: "",
			kanji: "牛どん",
		},
	},
	{
		name: "Xin anh/chị vui lòng đợi [một chút].",
		character: {
			hiragana: "[しょうしょう]おまちください",
			katakana: "",
			kanji: "[しょうしょう]お待ちください",
		},
	},
	{
		name: "(cách nói lịch sự của です)",
		character: {
			hiragana: "～でございます。",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "riêng ra/ để riêng",
		character: {
			hiragana: "べつべつに",
			katakana: "",
			kanji: "別々に",
		},
	},
	{
		name: "tên một công ty (giả định)",
		character: {
			hiragana: "",
			katakana: "アキックス",
			kanji: "",
		},
	},
	{
		name: "tên một chương trình truyền hình (giả định)",
		character: {
			hiragana: "おはようテレビ",
			katakana: "",
			kanji: "",
		},
	},
];

const lessonFourteen :Array<Iword> = [
	{
		name: "bật (điện, máy điều hòa)",
		character: {
			hiragana: "つけます",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "tắt (điện, máy điều hòa)",
		character: {
			hiragana: "けします",
			katakana: "",
			kanji: "消します",
		},
	},
	{
		name: "mở (cửa, cửa sổ)",
		character: {
			hiragana: "あけます",
			katakana: "",
			kanji: "開けます",
		},
	},
	{
		name: "đóng (cửa, cửa sổ)",
		character: {
			hiragana: "しめます",
			katakana: "",
			kanji: "閉めます",
		},
	},
	{
		name: "vội, gấp",
		character: {
			hiragana: "いそぎます",
			katakana: "",
			kanji: "急ぎます",
		},
	},
	{
		name: "đợi, chờ",
		character: {
			hiragana: "まちます",
			katakana: "",
			kanji: "待ちます",
		},
	},
	{
		name: "mang, cầm",
		character: {
			hiragana: "もちます",
			katakana: "",
			kanji: "持ちます",
		},
	},
	{
		name: "lấy (muối)",
		character: {
			hiragana: "とります",
			katakana: "",
			kanji: "取ります",
		},
	},
	{
		name: "giúp (làm việc)",
		character: {
			hiragana: "てつだいます",
			katakana: "",
			kanji: "手伝います",
		},
	},
	{
		name: "gọi (taxi, tên)",
		character: {
			hiragana: "よびます",
			katakana: "",
			kanji: "呼びます",
		},
	},
	{
		name: "nói, nói chuyện",
		character: {
			hiragana: "はなします",
			katakana: "",
			kanji: "話します",
		},
	},
	{
		name: "dùng, sử dụng",
		character: {
			hiragana: "つかいます",
			katakana: "",
			kanji: "使います",
		},
	},
	{
		name: "dừng, đỗ",
		character: {
			hiragana: "とめます",
			katakana: "",
			kanji: "止めます",
		},
	},
	{
		name: "cho xem, trình",
		character: {
			hiragana: "みせます",
			katakana: "",
			kanji: "見せます",
		},
	},
	{
		name: "nói, cho biết [địa chỉ]",
		character: {
			hiragana: "おしえます",
			katakana: "",
			kanji: "教えます",
		},
	},
	{
		name: "ngồi",
		character: {
			hiragana: "すわります",
			katakana: "",
			kanji: "座ります",
		},
	},
	{
		name: "đứng",
		character: {
			hiragana: "たちます",
			katakana: "",
			kanji: "立ちます",
		},
	},
	{
		name: "vào [quán giải khát]",
		character: {
			hiragana: "はいります",
			katakana: "",
			kanji: "入ります",
		},
	},
	{
		name: "ra, ra khỏi [quán giải khát]",
		character: {
			hiragana: "でます",
			katakana: "",
			kanji: "出ます",
		},
	},
	{
		name: "rơi [mưa]",
		character: {
			hiragana: "ふります",
			katakana: "",
			kanji: "降ります",
		},
	},
	{
		name: "copy",
		character: {
			hiragana: "コピーします",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "điện, đèn điện",
		character: {
			hiragana: "でんき",
			katakana: "",
			kanji: "電気",
		},
	},
	{
		name: "máy điều hòa",
		character: {
			hiragana: "エアコン",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "hộ chiếu",
		character: {
			hiragana: "パスポート",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "tên",
		character: {
			hiragana: "なまえ",
			katakana: "",
			kanji: "名前",
		},
	},
	{
		name: "địa chỉ",
		character: {
			hiragana: "じゅうしょ",
			katakana: "",
			kanji: "住所",
		},
	},
	{
		name: "bản đồ",
		character: {
			hiragana: "ちず",
			katakana: "",
			kanji: "地図",
		},
	},
	{
		name: "muối",
		character: {
			hiragana: "しお",
			katakana: "",
			kanji: "塩",
		},
	},
	{
		name: "đường",
		character: {
			hiragana: "さとう",
			katakana: "",
			kanji: "砂糖",
		},
	},
	{
		name: "câu hỏi, vấn đề",
		character: {
			hiragana: "もんだい",
			katakana: "",
			kanji: "問題",
		},
	},
	{
		name: "câu trả lời",
		character: {
			hiragana: "こたえ",
			katakana: "",
			kanji: "答え",
		},
	},
	{
		name: "cách đọc",
		character: {
			hiragana: "よみかた",
			katakana: "",
			kanji: "読み方",
		},
	},
	{
		name: "cách ",
		character: {
			hiragana: "～かた",
			katakana: "",
			kanji: "～方",
		},
	},
	{
		name: "thẳng",
		character: {
			hiragana: "まっすぐ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "chậm, thong thả, thoải mái",
		character: {
			hiragana: "ゆっくり",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "ngay, lập tức",
		character: {
			hiragana: "すぐ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "lại (đến)",
		character: {
			hiragana: "また",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "sau",
		character: {
			hiragana: "あとで",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "thêm một chút nữa thôi",
		character: {
			hiragana: "もう　すこし",
			katakana: "",
			kanji: "もう少し",
		},
	},
	{
		name: "thêm",
		character: {
			hiragana: "もう～",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "thôi/nào (dùng để thúc giục hoặc khuyến khích ai làm gì)",
		character: {
			hiragana: "さあ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Ô! (câu cảm thán khi phát hiện hoặc thấy cái gì đó lạ, hoặc bất ngờ)",
		character: {
			hiragana: "あれ？",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Anh/ Chị rẽ phải ở chổ đèn tín hiệu.",
		character: {
			hiragana: "",
			katakana: "",
			kanji: "信号を右へ曲がってください",
		},
	},
	{
		name: "Gởi anh tiền này.",
		character: {
			hiragana: "",
			katakana: "",
			kanji: "これでお願いします",
		},
	},
	{
		name: "tiền lẻ",
		character: {
			hiragana: "おつり",
			katakana: "",
			kanji: "お釣り",
		},
	},
	{
		name: "tên một thành phố (giả định)",
		character: {
			hiragana: "みどりちょう",
			katakana: "",
			kanji: "みどり町",
		},
	},
];

const lessonFifteen :Array<Iword> = [
	{
		name: "đặt, để",
		character: {
			hiragana: "おきます",
			katakana: "",
			kanji: "置きます",
		},
	},
	{
		name: "làm, chế tạo, sản xuất",
		character: {
			hiragana: "つくります",
			katakana: "",
			kanji: "作ります, 造ります",
		},
	},
	{
		name: "bán",
		character: {
			hiragana: "うります",
			katakana: "",
			kanji: "売ります",
		},
	},
	{
		name: "biết",
		character: {
			hiragana: "しります",
			katakana: "",
			kanji: "知ります",
		},
	},
	{
		name: "sống, ở",
		character: {
			hiragana: "すみます",
			katakana: "",
			kanji: "住みます",
		},
	},
	{
		name: "nghiên cứu",
		character: {
			hiragana: "けんきゅうします",
			katakana: "",
			kanji: "研究します",
		},
	},
	{
		name: "tài liệu, tư liệu",
		character: {
			hiragana: "しりょう",
			katakana: "",
			kanji: "資料",
		},
	},
	{
		name: "ca-ta-lô",
		character: {
			hiragana: "",
			katakana: "カタログ",
			kanji: "",
		},
	},
	{
		name: "bảng giờ tàu chạy",
		character: {
			hiragana: "じこくひょう",
			katakana: "",
			kanji: "時刻表",
		},
	},
	{
		name: "quần áo",
		character: {
			hiragana: "ふく",
			katakana: "",
			kanji: "服",
		},
	},
	{
		name: "sản phẩm",
		character: {
			hiragana: "せいひん",
			katakana: "",
			kanji: "製品",
		},
	},
	{
		name: "phần mềm",
		character: {
			hiragana: "",
			katakana: "ソフト",
			kanji: "",
		},
	},
	{
		name: "kim từ điển",
		character: {
			hiragana: "でんしじしょ",
			katakana: "",
			kanji: "電子辞書",
		},
	},
	{
		name: "kinh tế",
		character: {
			hiragana: "けいざい",
			katakana: "",
			kanji: "経済",
		},
	},
	{
		name: "tòa thị chính",
		character: {
			hiragana: "しやくしょ",
			katakana: "",
			kanji: "市役所",
		},
	},
	{
		name: "trường trung học phổ thông, trường cấp 3",
		character: {
			hiragana: "こうこう",
			katakana: "",
			kanji: "高校",
		},
	},
	{
		name: "nha sĩ",
		character: {
			hiragana: "はいしゃ",
			katakana: "",
			kanji: "歯医者",
		},
	},
	{
		name: "độc thân",
		character: {
			hiragana: "どくしん",
			katakana: "",
			kanji: "独身",
		},
	},
	{
		name: "xin lỗi",
		character: {
			hiragana: "すみません",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "các anh chị, các ông bà, các bạn, quý vị",
		character: {
			hiragana: "みなさん",
			katakana: "",
			kanji: "皆さん",
		},
	},
	{
		name: "nhớ lại, hồi tưởng",
		character: {
			hiragana: "おもいでします",
			katakana: "",
			kanji: "思い出します",
		},
	},
	{
		name: "kính ngữ của います",
		character: {
			hiragana: "いらっしゃいます",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "tên một khu phố buôn bán ở Osaka",
		character: {
			hiragana: "にっぽんばし",
			katakana: "",
			kanji: "日本橋",
		},
	},
	{
		name: "tên chương trình truyền hình (giả định)",
		character: {
			hiragana: "",
			katakana: "みんなのインタビュー",
			kanji: "",
		},
	},
];

const lessonSixteen :Array<Iword> = [
	{
		name: "đi, lên [tàu]",
		character: {
			hiragana: "のります",
			katakana: "",
			kanji: "乗ります",
		},
	},
	{
		name: "xuống [tàu]",
		character: {
			hiragana: "おります",
			katakana: "",
			kanji: "降ります",
		},
	},
	{
		name: "chuyển, đổi (tàu)",
		character: {
			hiragana: "のりかえます",
			katakana: "",
			kanji: "乗り換えます",
		},
	},
	{
		name: "tắm [vòi hoa sen]",
		character: {
			hiragana: "あびます",
			katakana: "",
			kanji: "浴びます",
		},
	},
	{
		name: "cho vào, bỏ vào",
		character: {
			hiragana: "いれます",
			katakana: "",
			kanji: "入れます",
		},
	},
	{
		name: "lấy ra, đưa ra, gửi",
		character: {
			hiragana: "だします",
			katakana: "",
			kanji: "出します",
		},
	},
	{
		name: "rút [tiền]",
		character: {
			hiragana: "おろします",
			katakana: "",
			kanji: "下ろします",
		},
	},
	{
		name: "vào, nhập học [đại học]",
		character: {
			hiragana: "はいります",
			katakana: "",
			kanji: "入ります",
		},
	},
	{
		name: "ra, tốt nghiệp [đại học]",
		character: {
			hiragana: "でます",
			katakana: "",
			kanji: "出ます",
		},
	},
	{
		name: "bấm, ấn (nút)",
		character: {
			hiragana: "おします",
			katakana: "",
			kanji: "押します",
		},
	},
	{
		name: "uống (bia, rượu)",
		character: {
			hiragana: "のみます",
			katakana: "",
			kanji: "飲みます",
		},
	},
	{
		name: "bắt đầu",
		character: {
			hiragana: "はじめます",
			katakana: "",
			kanji: "始めます",
		},
	},
	{
		name: "tham quan kiến tập",
		character: {
			hiragana: "けんがくします",
			katakana: "",
			kanji: "見学します",
		},
	},
	{
		name: "gọi điện thoại",
		character: {
			hiragana: "でんわします",
			katakana: "",
			kanji: "電話します",
		},
	},
	{
		name: "trẻ",
		character: {
			hiragana: "わかい",
			katakana: "",
			kanji: "若い",
		},
	},
	{
		name: "dài",
		character: {
			hiragana: "ながい",
			katakana: "",
			kanji: "長い",
		},
	},
	{
		name: "ngắn",
		character: {
			hiragana: "みじかい",
			katakana: "",
			kanji: "短い",
		},
	},
	{
		name: "sáng",
		character: {
			hiragana: "あかるい",
			katakana: "",
			kanji: "明るい",
		},
	},
	{
		name: "tối",
		character: {
			hiragana: "くらい",
			katakana: "",
			kanji: "暗い",
		},
	},
	{
		name: "người, cơ thể",
		character: {
			hiragana: "からだ",
			katakana: "",
			kanji: "体",
		},
	},
	{
		name: "đầu",
		character: {
			hiragana: "あたま",
			katakana: "",
			kanji: "頭",
		},
	},
	{
		name: "tóc",
		character: {
			hiragana: "かみ",
			katakana: "",
			kanji: "髪",
		},
	},
	{
		name: "mặt",
		character: {
			hiragana: "かお",
			katakana: "",
			kanji: "顔",
		},
	},
	{
		name: "mắt",
		character: {
			hiragana: "め",
			katakana: "",
			kanji: "目",
		},
	},
	{
		name: "tai",
		character: {
			hiragana: "みみ",
			katakana: "",
			kanji: "耳",
		},
	},
	{
		name: "mũi",
		character: {
			hiragana: "はな",
			katakana: "",
			kanji: "鼻",
		},
	},
	{
		name: "miệng",
		character: {
			hiragana: "くち",
			katakana: "",
			kanji: "口",
		},
	},
	{
		name: "răng",
		character: {
			hiragana: "は",
			katakana: "",
			kanji: "歯",
		},
	},
	{
		name: "bụng",
		character: {
			hiragana: "おなか",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "chân",
		character: {
			hiragana: "あし",
			katakana: "",
			kanji: "足",
		},
	},
	{
		name: "chiều cao (cơ thể)",
		character: {
			hiragana: "せ",
			katakana: "",
			kanji: "背",
		},
	},
	{
		name: "dịch vụ",
		character: {
			hiragana: "",
			katakana: "サービス",
			kanji: "",
		},
	},
	{
		name: "việc chạy bộ (をします: chạy bộ)",
		character: {
			hiragana: "",
			katakana: "ジョギング",
			kanji: "",
		},
	},
	{
		name: "vòi hoa sen",
		character: {
			hiragana: "",
			katakana: "シャワー",
			kanji: "",
		},
	},
	{
		name: "màu xanh lá cây",
		character: {
			hiragana: "みどり",
			katakana: "",
			kanji: "緑",
		},
	},
	{
		name: "chùa",
		character: {
			hiragana: "[お]てら",
			katakana: "",
			kanji: "寺",
		},
	},
	{
		name: "đền thờ đạo thần",
		character: {
			hiragana: "じんじゃ",
			katakana: "",
			kanji: "神社",
		},
	},
	{
		name: "số ―",
		character: {
			hiragana: "いちばん",
			katakana: "",
			kanji: "一番",
		},
	},
	{
		name: "làm thế nào",
		character: {
			hiragana: "どうやって",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "cái nào (dùng với trường hợp từ ba thứ trở lên)",
		character: {
			hiragana: "どの～",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "cái nào (dùng với trường hợp ba cái hoặc nhiều hơn)",
		character: {
			hiragana: "どれ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Thật là tuyệt vời. / Kinh quá nhỉ.",
		character: {
			hiragana: "すごいですね。",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "[không,] tôi còn kém lắm. (cách nói khiêm nhường khi ai đó khen)",
		character: {
			hiragana: "[いいえ、]まだまだです。",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Anh/ chị rút tiền ạ?",
		character: {
			hiragana: "おひきだしですか。",
			katakana: "",
			kanji: "お引き出しですか。",
		},
	},
	{
		name: "trước hết, đầu tiên",
		character: {
			hiragana: "まず",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "tiếp theo, sau đó",
		character: {
			hiragana: "つぎに",
			katakana: "",
			kanji: "次に",
		},
	},
	{
		name: "thẻ ngân hàng, thẻ ATM",
		character: {
			hiragana: "",
			katakana: "キャッシュカード",
			kanji: "",
		},
	},
	{
		name: "mã số bí mật (mật khẩu)",
		character: {
			hiragana: "あんしょうばんごう",
			katakana: "",
			kanji: "暗証番号",
		},
	},
	{
		name: "số tiền, khoản tiền",
		character: {
			hiragana: "きんがく",
			katakana: "",
			kanji: "金額",
		},
	},
	{
		name: "sự xác nhận, sự kiểm tra (します：xác nhận)",
		character: {
			hiragana: "かくにん",
			katakana: "",
			kanji: "確認",
		},
	},
	{
		name: "nút",
		character: {
			hiragana: "",
			katakana: "ボタン",
			kanji: "",
		},
	},
	{
		name: "công ty đường sắt Nhật Bản",
		character: {
			hiragana: "",
			katakana: "ＪＲ",
			kanji: "",
		},
	},
	{
		name: "Lễ hội tuyết",
		character: {
			hiragana: "ゆきまつり",
			katakana: "",
			kanji: "雪祭り",
		},
	},
	{
		name: "Bandung (ở Indonesia)",
		character: {
			hiragana: "",
			katakana: "バンドン",
			kanji: "",
		},
	},
	{
		name: "Franken (ở Đức)",
		character: {
			hiragana: "",
			katakana: "フランケン",
			kanji: "",
		},
	},
	{
		name: "Veracruz (ở Mexico)",
		character: {
			hiragana: "",
			katakana: "ベラクルス",
			kanji: "",
		},
	},
	{
		name: "tên một quận ở Osaka",
		character: {
			hiragana: "うめだ",
			katakana: "",
			kanji: "梅田",
		},
	},
	{
		name: "tên một điểm dừng xe buýt (giả tưởng)",
		character: {
			hiragana: "だいがくまえ",
			katakana: "",
			kanji: "大学前",
		},
	},
];

const lessonSeventeen:Array<Iword> = [
	{
		name: "nhớ",
		character: {
			hiragana: "おぼえます",
			katakana: "",
			kanji: "覚えます",
		},
	},
	{
		name: "quên",
		character: {
			hiragana: "わすれます",
			katakana: "",
			kanji: "忘れます",
		},
	},
	{
		name: "mất, đánh mất",
		character: {
			hiragana: "なくします",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "trả tiền",
		character: {
			hiragana: "はらいます",
			katakana: "",
			kanji: "払います",
		},
	},
	{
		name: "trả lại",
		character: {
			hiragana: "かえします",
			katakana: "",
			kanji: "返します",
		},
	},
	{
		name: "ra ngoài",
		character: {
			hiragana: "でかけます",
			katakana: "",
			kanji: "出かけます",
		},
	},
	{
		name: "cởi (quần áo, giầy)",
		character: {
			hiragana: "ぬぎます",
			katakana: "",
			kanji: "脱ぎます",
		},
	},
	{
		name: "mang đi, mang theo",
		character: {
			hiragana: "もっていきます",
			katakana: "",
			kanji: "持って行きます",
		},
	},
	{
		name: "mang đến",
		character: {
			hiragana: "もってきます",
			katakana: "",
			kanji: "持って来ます",
		},
	},
	{
		name: "lo lắng",
		character: {
			hiragana: "しんぱいします",
			katakana: "",
			kanji: "心配します",
		},
	},
	{
		name: "làm thêm, làm quá giờ",
		character: {
			hiragana: "ざんぎょうします",
			katakana: "",
			kanji: "残業します",
		},
	},
	{
		name: "đi công tác",
		character: {
			hiragana: "しゅっちょうします",
			katakana: "",
			kanji: "出張します",
		},
	},
	{
		name: "uống [thuốc]",
		character: {
			hiragana: "のみます",
			katakana: "",
			kanji: "飲みます",
		},
	},
	{
		name: "tắm bồn [vào bồn tắm]",
		character: {
			hiragana: "はいります",
			katakana: "",
			kanji: "入ります",
		},
	},
	{
		name: "quan trọng, quý giá",
		character: {
			hiragana: "たいせつ",
			katakana: "",
			kanji: "大切",
		},
	},
	{
		name: "không sao, không có vấn đề gì",
		character: {
			hiragana: "だいじょうぶ",
			katakana: "",
			kanji: "大丈夫",
		},
	},
	{
		name: "nguy hiểm",
		character: {
			hiragana: "あぶない",
			katakana: "",
			kanji: "危ない",
		},
	},
	{
		name: "cấm hút thuốc",
		character: {
			hiragana: "きんえん",
			katakana: "",
			kanji: "禁煙",
		},
	},
	{
		name: "thẻ bảo hiểm [y tế]",
		character: {
			hiragana: "[けんこう]ほけんしょう",
			katakana: "",
			kanji: "[健康]保険証",
		},
	},
	{
		name: "sốt",
		character: {
			hiragana: "ねつ",
			katakana: "",
			kanji: "熱",
		},
	},
	{
		name: "ốm, bệnh",
		character: {
			hiragana: "びょうき",
			katakana: "",
			kanji: "病気",
		},
	},
	{
		name: "thuốc",
		character: {
			hiragana: "くすり",
			katakana: "",
			kanji: "薬",
		},
	},
	{
		name: "bồn tắm",
		character: {
			hiragana: "[お]ふろ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "áo khoác",
		character: {
			hiragana: "うわぎ",
			katakana: "",
			kanji: "上着",
		},
	},
	{
		name: "quần áo lót",
		character: {
			hiragana: "したぎ",
			katakana: "",
			kanji: "下着",
		},
	},
	{
		name: "2,3 ngày, vài ngày",
		character: {
			hiragana: "２，３にち",
			katakana: "",
			kanji: "２，３日",
		},
	},
	{
		name: "vài (“” là hậu tố đếm)",
		character: {
			hiragana: "２，３～",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "trước  (chỉ thời hạn)",
		character: {
			hiragana: "～までに",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "vì thế, vì vậy, do đó",
		character: {
			hiragana: "ですから",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Có vấn đề gì?<br>Anh/chị bị làm sao?",
		character: {
			hiragana: "どうしましたか。",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "họng",
		character: {
			hiragana: "のど",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Tôi bị đau [].",
		character: {
			hiragana: "[～が]いたいです。",
			katakana: "",
			kanji: "痛い",
		},
	},
	{
		name: "cảm, cúm",
		character: {
			hiragana: "かぜ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "và, sau đó",
		character: {
			hiragana: "それから",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Anh/chị nhớ giữ gìn sức khỏe.<br> (câu nói với người ốm,bị bệnh)",
		character: {
			hiragana: "おだいじに",
			katakana: "",
			kanji: "お大事に",
		},
	},
];

const lessonEighteen :Array<Iword>= [
	{
		name: "có thể",
		character: {
			hiragana: "できます",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "rửa",
		character: {
			hiragana: "あらいます",
			katakana: "",
			kanji: "洗います",
		},
	},
	{
		name: "chơi (nhạc cụ)",
		character: {
			hiragana: "ひきます",
			katakana: "",
			kanji: "弾きます",
		},
	},
	{
		name: "hát",
		character: {
			hiragana: "うたいます",
			katakana: "",
			kanji: "歌います",
		},
	},
	{
		name: "sưu tầm, thu thập",
		character: {
			hiragana: "あつめます",
			katakana: "",
			kanji: "集めます",
		},
	},
	{
		name: "vứt, bỏ đi",
		character: {
			hiragana: "すてます",
			katakana: "",
			kanji: "捨てます",
		},
	},
	{
		name: "đổi",
		character: {
			hiragana: "かえます",
			katakana: "",
			kanji: "換えます",
		},
	},
	{
		name: "lái",
		character: {
			hiragana: "うんてんします",
			katakana: "",
			kanji: "運転します",
		},
	},
	{
		name: "đặt chỗ, đặt trước",
		character: {
			hiragana: "よやくします",
			katakana: "",
			kanji: "予約します",
		},
	},
	{
		name: "đàn Piano",
		character: {
			hiragana: "",
			katakana: "ピアノ",
			kanji: "",
		},
	},
	{
		name: "― mét",
		character: {
			hiragana: "",
			katakana: "―メートル",
			kanji: "",
		},
	},
	{
		name: "tiền mặt",
		character: {
			hiragana: "げんきん",
			katakana: "",
			kanji: "現金",
		},
	},
	{
		name: "sở thích, thú vui",
		character: {
			hiragana: "しゅみ",
			katakana: "",
			kanji: "趣味",
		},
	},
	{
		name: "nhật ký",
		character: {
			hiragana: "にっき",
			katakana: "",
			kanji: "日記",
		},
	},
	{
		name: "việc cầu nguyện (～をします：cầu nguyện)",
		character: {
			hiragana: "[お]いのり",
			katakana: "",
			kanji: "[お]祈り",
		},
	},
	{
		name: "tổ trưởng",
		character: {
			hiragana: "かちょう",
			katakana: "",
			kanji: "課長",
		},
	},
	{
		name: "trưởng phòng",
		character: {
			hiragana: "ぶちょう",
			katakana: "",
			kanji: "部長",
		},
	},
	{
		name: "giám đốc",
		character: {
			hiragana: "しゃちょう",
			katakana: "",
			kanji: "社長",
		},
	},
	{
		name: "động vật",
		character: {
			hiragana: "どうぶつ",
			katakana: "",
			kanji: "動物",
		},
	},
	{
		name: "ngựa",
		character: {
			hiragana: "うま",
			katakana: "",
			kanji: "馬",
		},
	},
	{
		name: "internet",
		character: {
			hiragana: "",
			katakana: "インターネット",
			kanji: "",
		},
	},
	{
		name: "đặt biệt là",
		character: {
			hiragana: "特に",
			katakana: "",
			kanji: "特に",
		},
	},
	{
		name: "thế à! (dùng để biểu thị sự ngạc nhiên hoặc quan tâm)",
		character: {
			hiragana: "へえ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Hay thật nhỉ.",
		character: {
			hiragana: "それはおもしろいですね。",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "khó mà, mãi mà (dùng với thể phủ định)",
		character: {
			hiragana: "なかなか",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Thật không ạ?",
		character: {
			hiragana: "ほんとうですか。",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "nhất định, rất",
		character: {
			hiragana: "ぜひ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: 'Furusato(tên bài hát có nghĩa "quê nhà")',
		character: {
			hiragana: "",
			katakana: "",
			kanji: "故郷",
		},
	},
	{
		name: "Beatles, một băng nhạc nổi tiếng nước Anh",
		character: {
			hiragana: "",
			katakana: "ビートルズ",
			kanji: "",
		},
	},
	{
		name: "một quận ở Tokyo",
		character: {
			hiragana: "秋葉原",
			katakana: "",
			kanji: "秋葉原",
		},
	},
];

const lessonNineTeen :Array<Iword> = [
	{
		name: "leo [núi]",
		character: {
			hiragana: "のぼります",
			katakana: "",
			kanji: "登ります",
		},
	},
	{
		name: "trọ [ở khách sạn]",
		character: {
			hiragana: "とまります",
			katakana: "",
			kanji: "泊まります",
		},
	},
	{
		name: "dọn vệ sinh",
		character: {
			hiragana: "そうじします",
			katakana: "",
			kanji: "掃除します",
		},
	},
	{
		name: "giặt",
		character: {
			hiragana: "せんたくします",
			katakana: "",
			kanji: "洗濯します",
		},
	},
	{
		name: "trở thành, trở nên",
		character: {
			hiragana: "なります",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "buồn ngủ",
		character: {
			hiragana: "ねむい",
			katakana: "",
			kanji: "眠い",
		},
	},
	{
		name: "mạnh",
		character: {
			hiragana: "つよい",
			katakana: "",
			kanji: "強い",
		},
	},
	{
		name: "yếu",
		character: {
			hiragana: "よわい",
			katakana: "",
			kanji: "弱い",
		},
	},
	{
		name: "gôn (～をします:chơi gôn)",
		character: {
			hiragana: "",
			katakana: "ゴルフ",
			kanji: "",
		},
	},
	{
		name: "vật Sumo",
		character: {
			hiragana: "すもう",
			katakana: "",
			kanji: "相撲",
		},
	},
	{
		name: "trà",
		character: {
			hiragana: "おちゃ",
			katakana: "",
			kanji: "お茶",
		},
	},
	{
		name: "ngày",
		character: {
			hiragana: "ひ",
			katakana: "",
			kanji: "日",
		},
	},
	{
		name: "tình trạng, trạng thái",
		character: {
			hiragana: "ちょうし",
			katakana: "",
			kanji: "調子",
		},
	},
	{
		name: "một lần",
		character: {
			hiragana: "いちど",
			katakana: "",
			kanji: "一度",
		},
	},
	{
		name: "chưa lần nào",
		character: {
			hiragana: "いちども",
			katakana: "",
			kanji: "一度も",
		},
	},
	{
		name: "dần dần",
		character: {
			hiragana: "だんだん",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "sắp",
		character: {
			hiragana: "もうすぐ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "nhờ ơn anh/ chị mà  ; Nhờ trời ",
		character: {
			hiragana: "おかげさまで",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "nhưng",
		character: {
			hiragana: "でも",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "nâng cốc!/cạn chén",
		character: {
			hiragana: "かんぱい",
			katakana: "",
			kanji: "乾杯",
		},
	},
	{
		name: "việc ăn kiêng, chế độ giảm cân (～をします:ăn kiêng)",
		character: {
			hiragana: "",
			katakana: "ダイエット",
			kanji: "",
		},
	},
	{
		name: "không thể, quá sức",
		character: {
			hiragana: "むり",
			katakana: "",
			kanji: "無理",
		},
	},
	{
		name: "tốt cho sức khỏe",
		character: {
			hiragana: "からだにいい",
			katakana: "",
			kanji: "体にいい",
		},
	},
	{
		name: "Tokyo Sky Tree (tháp truyền hình có đài ngắm)",
		character: {
			hiragana: "とうきょうスカイツリー",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Katsushika Hokusai (1760-1849), một họa sĩ nổi tiếng thời Edo",
		character: {
			hiragana: "かつしかほくさい",
			katakana: "",
			kanji: "葛飾北斎",
		},
	},
];

const lessonTwenty :Array<Iword>= [
	{
		name: "cần [thị thực (visa)]",
		character: {
			hiragana: "いります",
			katakana: "",
			kanji: "要ります",
		},
	},
	{
		name: "tìm hiểu, điều tra, xem",
		character: {
			hiragana: "しらべます",
			katakana: "",
			kanji: "調べます",
		},
	},
	{
		name: "sửa chữa, tu sửa",
		character: {
			hiragana: "しゅうりします",
			katakana: "",
			kanji: "修理します",
		},
	},
	{
		name: "tớ (cách xưng thân mật của わたし  được dùng bởi nam giới)",
		character: {
			hiragana: "ぼく",
			katakana: "",
			kanji: "僕",
		},
	},
	{
		name: "cậu, bạn (cách gọi thân mật của あなた dùng cho người ngang hàng hoặc ít tuổi hơn.)",
		character: {
			hiragana: "きみ",
			katakana: "",
			kanji: "君",
		},
	},
	{
		name: "anh, cậu (cách gọi thân mật dùng cho nam giới, cùng nghĩa với 「～さん」)",
		character: {
			hiragana: "～くん",
			katakana: "",
			kanji: "～君",
		},
	},
	{
		name: "ừ (cách nói thân mật của 「はい」)",
		character: {
			hiragana: "うん",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "không (cách nói thân mật của 「いいえ」)",
		character: {
			hiragana: "ううん",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "từ, tiếng",
		character: {
			hiragana: "ことば",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Kimono (trang phục truyền thống của Nhật Bản)",
		character: {
			hiragana: "きもの",
			katakana: "",
			kanji: "着物",
		},
	},
	{
		name: "thị thực, Visa",
		character: {
			hiragana: "",
			katakana: "ビザ",
			kanji: "",
		},
	},
	{
		name: "ban đầu, đầu tiên",
		character: {
			hiragana: "はじめ",
			katakana: "",
			kanji: "始め",
		},
	},
	{
		name: "kết thúc",
		character: {
			hiragana: "おわり",
			katakana: "",
			kanji: "終わり",
		},
	},
	{
		name: "phía này, chỗ này (cách nói thân mật của 「こちら」)",
		character: {
			hiragana: "こっち",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "phía đó, chỗ đó (cách nói thân mật của 「そちら」)",
		character: {
			hiragana: "そっち",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "phía kia, chỗ kia (cách nói thân mật của 「あちら」)",
		character: {
			hiragana: "あっち",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "cái nào, phía nào, đâu (cách nói thân mật của 「どちら」)",
		character: {
			hiragana: "どっち",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "mọi người cùng",
		character: {
			hiragana: "みんなで",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "nhưng (cách nói thân mật của 「が」)",
		character: {
			hiragana: "～けど",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "(Tôi) no rồi",
		character: {
			hiragana: "おなかがいっぱいです",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Nếu anh/chị thích thì",
		character: {
			hiragana: "よかったら",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "nhiều thứ",
		character: {
			hiragana: "いろいろ",
			katakana: "",
			kanji: "",
		},
	},
];

const lessonTwentyOne:Array<Iword> = [
	{
		name: "nghĩ",
		character: {
			hiragana: "おもいます",
			katakana: "",
			kanji: "思います",
		},
	},
	{
		name: "nói",
		character: {
			hiragana: "いいます",
			katakana: "",
			kanji: "言います",
		},
	},
	{
		name: "thắng",
		character: {
			hiragana: "かちます",
			katakana: "",
			kanji: "勝ちます",
		},
	},
	{
		name: "thua",
		character: {
			hiragana: "まけます",
			katakana: "",
			kanji: "負けます",
		},
	},
	{
		name: "được tổ chức, diễn ra, có [lễ hội]",
		character: {
			hiragana: "あります",
			katakana: "",
			kanji: "あります",
		},
	},
	{
		name: "giúp ích",
		character: {
			hiragana: "やくにたちます",
			katakana: "",
			kanji: "役に立ちます",
		},
	},
	{
		name: "chuyển động, chạy",
		character: {
			hiragana: "うごきます",
			katakana: "",
			kanji: "動きます",
		},
	},
	{
		name: "bỏ, thôi [việc công ty]",
		character: {
			hiragana: "やめます",
			katakana: "",
			kanji: "会社を～",
		},
	},
	{
		name: "chú ý, bảo trọng",
		character: {
			hiragana: "きをつけます",
			katakana: "",
			kanji: "気をつけます",
		},
	},
	{
		name: "du học",
		character: {
			hiragana: "りゅうがくします",
			katakana: "",
			kanji: "留学します",
		},
	},
	{
		name: "lãng phí, vô ích",
		character: {
			hiragana: "むだ[な]",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "bất tiện",
		character: {
			hiragana: "ふべん[な]",
			katakana: "",
			kanji: "不便",
		},
	},
	{
		name: "ghê quá, giỏi quá",
		character: {
			hiragana: "すごい",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "sự thật",
		character: {
			hiragana: "ほんとう",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "giả dối, nói dối",
		character: {
			hiragana: "うそ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "ô tô, xe hơi",
		character: {
			hiragana: "じどうしゃ",
			katakana: "",
			kanji: "自動車",
		},
	},
	{
		name: "giao thông",
		character: {
			hiragana: "こうつう",
			katakana: "",
			kanji: "交通",
		},
	},
	{
		name: "giá cả, mức giá, vật giá",
		character: {
			hiragana: "ぶっか",
			katakana: "",
			kanji: "物価",
		},
	},
	{
		name: "phát, phát thanh",
		character: {
			hiragana: "ほうそう",
			katakana: "",
			kanji: "放送",
		},
	},
	{
		name: "tin tức, bản tin",
		character: {
			hiragana: "",
			katakana: "ニュース",
			kanji: "",
		},
	},
	{
		name: "phim hoạt hình (Nhật Bản)",
		character: {
			hiragana: "",
			katakana: "アニメ",
			kanji: "",
		},
	},
	{
		name: "truyện tranh",
		character: {
			hiragana: "",
			katakana: "マンガ",
			kanji: "",
		},
	},
	{
		name: "thiết kế",
		character: {
			hiragana: "",
			katakana: "デザイン",
			kanji: "",
		},
	},
	{
		name: "giấc mơ",
		character: {
			hiragana: "ゆめ",
			katakana: "",
			kanji: "夢",
		},
	},
	{
		name: "thiên tài",
		character: {
			hiragana: "てんさい",
			katakana: "",
			kanji: "天才",
		},
	},
	{
		name: "trận đấu",
		character: {
			hiragana: "しあい",
			katakana: "",
			kanji: "試合",
		},
	},
	{
		name: "ý kiến",
		character: {
			hiragana: "いけん",
			katakana: "",
			kanji: "意見",
		},
	},
	{
		name: "câu chuyện, bài nói chuyện",
		character: {
			hiragana: "[お]はなし",
			katakana: "",
			kanji: "話",
		},
	},
	{
		name: "trái đất",
		character: {
			hiragana: "ちきゅう",
			katakana: "",
			kanji: "地球",
		},
	},
	{
		name: "mặt trăng",
		character: {
			hiragana: "つき",
			katakana: "",
			kanji: "月",
		},
	},
	{
		name: "gần đây",
		character: {
			hiragana: "さいきん",
			katakana: "",
			kanji: "最近",
		},
	},
	{
		name: "chắc, có thể",
		character: {
			hiragana: "たぶん",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "chắc chắn, nhất định",
		character: {
			hiragana: "きっと",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "thật sự",
		character: {
			hiragana: "ほんとうに",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "(không) lắm",
		character: {
			hiragana: "そんなに",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "về",
		character: {
			hiragana: "～について",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Đã lâu không gặp nhỉ.",
		character: {
			hiragana: "ひさしぶりですね",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Anh/chị uống (cà-phê, rượu hay cái gì đó) nhé.",
		character: {
			hiragana: "～でものみませんか",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "tất nhiên",
		character: {
			hiragana: "もちろん",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Tôi phải về bây giờ không thì …",
		character: {
			hiragana: "かえらないと",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Albert Einstein (1879-1955)",
		character: {
			hiragana: "",
			katakana: "アインシュタイン",
			kanji: "",
		},
	},
	{
		name: "Yuri Alekseyevich Gagarin (1934-1968)",
		character: {
			hiragana: "",
			katakana: "ガガーリン",
			kanji: "",
		},
	},
	{
		name: "Galileo Galilei (1564-1642)",
		character: {
			hiragana: "",
			katakana: "ガリレオ",
			kanji: "",
		},
	},
	{
		name: "Mục sư Martin Luther King, JR. (1929-1968)",
		character: {
			hiragana: "",
			katakana: "",
			kanji: "キング牧師",
		},
	},
	{
		name: "Benjamin Franklin (1706-1790)",
		character: {
			hiragana: "",
			katakana: "フランクリン",
			kanji: "",
		},
	},
	{
		name: "công chúa Kaguya",
		character: {
			hiragana: "かぐやひめ",
			katakana: "",
			kanji: "かぐや姫",
		},
	},
	{
		name: "Lễ hội Tenjin (ở Osaka)",
		character: {
			hiragana: "てんじんまつり",
			katakana: "",
			kanji: "天神祭",
		},
	},
	{
		name: "núi Yoshino (ở tỉnh Nara)",
		character: {
			hiragana: "よしのやま",
			katakana: "",
			kanji: "吉野山",
		},
	},
	{
		name: "con kăng-gu-ru, chuột túi",
		character: {
			hiragana: "",
			katakana: "カンガルー",
			kanji: "",
		},
	},
	{
		name: "thuyền trưởng Cook (James Cook 1728 – 79)",
		character: {
			hiragana: "",
			katakana: "キャプテン・クック",
			kanji: "",
		},
	},
	{
		name: "tên công ty (giả định)",
		character: {
			hiragana: "",
			katakana: "ヨーネン",
			kanji: "",
		},
	},
];

const lessonTwentyTwo :Array<Iword>= [
	{
		name: "mặc [áo sơ mi, v.v.]",
		character: {
			hiragana: "きます",
			katakana: "",
			kanji: "着ます",
		},
	},
	{
		name: "đi, mặc [giầy, quần âu, v.v.]",
		character: {
			hiragana: "はきます",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "đội [mũ, v.v.]",
		character: {
			hiragana: "かぶります",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "đeo [kính]",
		character: {
			hiragana: "かけます",
			katakana: "",
			kanji: "眼鏡を～",
		},
	},
	{
		name: "đeo [cà vạt]",
		character: {
			hiragana: "します",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "sinh ra",
		character: {
			hiragana: "うまれます",
			katakana: "",
			kanji: "生まれます",
		},
	},
	{
		name: "chúng tôi, chúng ta",
		character: {
			hiragana: "わたしたち",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "áo khoác",
		character: {
			hiragana: "",
			katakana: "コート",
			kanji: "",
		},
	},
	{
		name: "áo len",
		character: {
			hiragana: "",
			katakana: "セーター",
			kanji: "",
		},
	},
	{
		name: "com-lê",
		character: {
			hiragana: "",
			katakana: "スーツ",
			kanji: "",
		},
	},
	{
		name: "mũ",
		character: {
			hiragana: "ぼうし",
			katakana: "",
			kanji: "帽子",
		},
	},
	{
		name: "kính",
		character: {
			hiragana: "めがね",
			katakana: "",
			kanji: "眼鏡",
		},
	},
	{
		name: "bánh ngọt",
		character: {
			hiragana: "",
			katakana: "ケーキ",
			kanji: "",
		},
	},
	{
		name: "cơm hộp",
		character: {
			hiragana: "[お]べんとう",
			katakana: "",
			kanji: "お弁当",
		},
	},
	{
		name: "ro bốt",
		character: {
			hiragana: "",
			katakana: "ロボット",
			kanji: "",
		},
	},
	{
		name: "sự hài hước",
		character: {
			hiragana: "",
			katakana: "ユーモア",
			kanji: "",
		},
	},
	{
		name: "(sự) thích hợp",
		character: {
			hiragana: "つごう",
			katakana: "",
			kanji: "都合",
		},
	},
	{
		name: "thường, hay",
		character: {
			hiragana: "よく",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "ừ, à",
		character: {
			hiragana: "えーと",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Chúc mừng.",
		character: {
			hiragana: "おめでとう　[ございます]",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Anh/chị tìm  à?",
		character: {
			hiragana: "お探しですか",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Thế/Vậy (nhé)",
		character: {
			hiragana: "では",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "cái này (cách nói lịch sự của [これ])",
		character: {
			hiragana: "こちら",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "tiền thuê nhà",
		character: {
			hiragana: "家賃",
			katakana: "",
			kanji: "やちん",
		},
	},
	{
		name: "bếp kèm phòng ăn",
		character: {
			hiragana: "",
			katakana: "ダイニングキチン",
			kanji: "",
		},
	},
	{
		name: "phòng kiểu Nhật",
		character: {
			hiragana: "和室",
			katakana: "",
			kanji: "わしつ",
		},
	},
	{
		name: "Chổ để chăn gối trong một căn phòng kiểu Nhật",
		character: {
			hiragana: "押し入れ",
			katakana: "",
			kanji: "おいれ",
		},
	},
	{
		name: "chăn, đệm",
		character: {
			hiragana: "布団",
			katakana: "",
			kanji: "ふとん",
		},
	},
	{
		name: "Pari",
		character: {
			hiragana: "",
			katakana: "パリ",
			kanji: "",
		},
	},
	{
		name: "Vạn Lý Trường Thành",
		character: {
			hiragana: "万里の長城",
			katakana: "",
			kanji: "ばんりのちょうじょう",
		},
	},
	{
		name: "tiêu đề bài điều tra (giả định)",
		character: {
			hiragana: "",
			katakana: "みんなのアンケート",
			kanji: "",
		},
	},
];

const lessonTwentyThree:Array<Iword> = [
	{
		name: "hỏi [giáo viên]",
		character: {
			hiragana: "ききます",
			katakana: "",
			kanji: "聞きます",
		},
	},
	{
		name: "vặn (núm)",
		character: {
			hiragana: "まわします",
			katakana: "",
			kanji: "回します",
		},
	},
	{
		name: "kéo",
		character: {
			hiragana: "ひきます",
			katakana: "",
			kanji: "引きます",
		},
	},
	{
		name: "đổi",
		character: {
			hiragana: "かえます",
			katakana: "",
			kanji: "変えます",
		},
	},
	{
		name: "sờ, chạm vào [cửa]",
		character: {
			hiragana: "さわります",
			katakana: "",
			kanji: "触ります",
		},
	},
	{
		name: "[tiền thừa] ra, chạy ra",
		character: {
			hiragana: "でます",
			katakana: "",
			kanji: "出ます",
		},
	},
	{
		name: "đi bộ",
		character: {
			hiragana: "あるきます",
			katakana: "",
			kanji: "歩きます",
		},
	},
	{
		name: "qua, đi qua [cầu]",
		character: {
			hiragana: "わたります",
			katakana: "",
			kanji: "渡ります",
		},
	},
	{
		name: "rẽ, quẹo [phải]",
		character: {
			hiragana: "まがります",
			katakana: "",
			kanji: "曲がります",
		},
	},
	{
		name: "buồn, cô đơn",
		character: {
			hiragana: "さびしい",
			katakana: "",
			kanji: "寂しい",
		},
	},
	{
		name: "nước nóng",
		character: {
			hiragana: "おゆ",
			katakana: "",
			kanji: "お湯",
		},
	},
	{
		name: "âm thanh",
		character: {
			hiragana: "おと",
			katakana: "",
			kanji: "音",
		},
	},
	{
		name: "cỡ, kích thước",
		character: {
			hiragana: "",
			katakana: "サイズ",
			kanji: "",
		},
	},
	{
		name: "hỏng (します：bị hỏng)",
		character: {
			hiragana: "こしょう",
			katakana: "",
			kanji: "故障",
		},
	},
	{
		name: "đường",
		character: {
			hiragana: "みち",
			katakana: "",
			kanji: "道",
		},
	},
	{
		name: "ngã tư",
		character: {
			hiragana: "こうさてん",
			katakana: "",
			kanji: "交差点",
		},
	},
	{
		name: "đèn tín hiệu",
		character: {
			hiragana: "しんごう",
			katakana: "",
			kanji: "信号",
		},
	},
	{
		name: "góc",
		character: {
			hiragana: "かど",
			katakana: "",
			kanji: "角",
		},
	},
	{
		name: "cầu",
		character: {
			hiragana: "はし",
			katakana: "",
			kanji: "橋",
		},
	},
	{
		name: "bãi đỗ xe",
		character: {
			hiragana: "ちゅうしゃじょう",
			katakana: "",
			kanji: "駐車場",
		},
	},
	{
		name: "tòa nhà",
		character: {
			hiragana: "たてもの",
			katakana: "",
			kanji: "建物",
		},
	},
	{
		name: "nhiều lần",
		character: {
			hiragana: "なんかいも",
			katakana: "",
			kanji: "何回も",
		},
	},
	{
		name: "thứ - , số - (biểu thị thứ tự)",
		character: {
			hiragana: "―め",
			katakana: "―目",
			kanji: "",
		},
	},
	{
		name: "Thái tử Shotoku (574 – 622)",
		character: {
			hiragana: "しょうとくたいし",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Chùa Horyu-ji (một ngôi chùa ở Nara do hoàng tử Shotoku xây vào thế kỷ thứ 7)",
		character: {
			hiragana: "ほうりゅうじ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "tên một loại trà (giả tưởng)",
		character: {
			hiragana: "げんきちゃ",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "tên một nhà ga (giả tưởng)",
		character: {
			hiragana: "ほんだえき",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "tên một bến xe buýt (giả tưởng)",
		character: {
			hiragana: "としょかんまえ",
			katakana: "",
			kanji: "",
		},
	},
];

const lessonTwentyFour :Array<Iword>= [
	{
		name: "cho, tặng (tôi)",
		character: {
			hiragana: "くれます",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "chữa, sửa",
		character: {
			hiragana: "なおします",
			katakana: "",
			kanji: "直します",
		},
	},
	{
		name: "dẫn đi",
		character: {
			hiragana: "つれていきます",
			katakana: "",
			kanji: "連れて行きます",
		},
	},
	{
		name: "dẫn đến",
		character: {
			hiragana: "つれてきます",
			katakana: "",
			kanji: "連れて来ます",
		},
	},
	{
		name: "đưa đi, đưa đến, tiễn [một ai đó]",
		character: {
			hiragana: "おくります",
			katakana: "",
			kanji: "送ります",
		},
	},
	{
		name: "giới thiệu",
		character: {
			hiragana: "しょうかいします",
			katakana: "",
			kanji: "紹介します",
		},
	},
	{
		name: "hướng dẫn, giới thiệu, dẫn đường",
		character: {
			hiragana: "あんないします",
			katakana: "",
			kanji: "案内します",
		},
	},
	{
		name: "giải thích, trình bày",
		character: {
			hiragana: "せつめいします",
			katakana: "",
			kanji: "説明します",
		},
	},
	{
		name: "ông nội, ông ngoại, ông",
		character: {
			hiragana: "おじいさん／おじいちゃん",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "bà nội, bà ngoại, bà",
		character: {
			hiragana: "おばあさん／おばあちゃん",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "chuẩn bị",
		character: {
			hiragana: "じゅんび",
			katakana: "",
			kanji: "準備",
		},
	},
	{
		name: "sự chuyển nhà",
		character: {
			hiragana: "ひっこし",
			katakana: "",
			kanji: "引っ越し",
		},
	},
	{
		name: "bánh kẹo",
		character: {
			hiragana: "[お]かし",
			katakana: "",
			kanji: "菓子",
		},
	},
	{
		name: "homestay",
		character: {
			hiragana: "",
			katakana: "ホームステイ",
			kanji: "",
		},
	},
	{
		name: "toàn bộ, tất cả",
		character: {
			hiragana: "ぜんぶ",
			katakana: "",
			kanji: "全部",
		},
	},
	{
		name: "tự (mình)",
		character: {
			hiragana: "じぶんで",
			katakana: "",
			kanji: "自分で",
		},
	},
	{
		name: "ngoài ra, bên cạnh đó",
		character: {
			hiragana: "ほかに",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "Ngày của Mẹ",
		character: {
			hiragana: "ははのひ",
			katakana: "",
			kanji: "母の日",
		},
	},
];

const lessonTwentyFive:Array<Iword> = [
	{
		name: "nghĩ, suy nghĩ",
		character: {
			hiragana: "かんがえます",
			katakana: "",
			kanji: "考えます",
		},
	},
	{
		name: "đến",
		character: {
			hiragana: "つきます",
			katakana: "",
			kanji: "着きます",
		},
	},
	{
		name: "thêm [tuổi]",
		character: {
			hiragana: "とります",
			katakana: "",
			kanji: "取ります",
		},
	},
	{
		name: "đủ",
		character: {
			hiragana: "たります",
			katakana: "",
			kanji: "足ります",
		},
	},
	{
		name: "quê, nông thôn",
		character: {
			hiragana: "いなか",
			katakana: "",
			kanji: "田舎",
		},
	},
	{
		name: "cơ hội",
		character: {
			hiragana: "",
			katakana: "チャンス",
			kanji: "",
		},
	},
	{
		name: "một trăm triệu",
		character: {
			hiragana: "おく",
			katakana: "",
			kanji: "億",
		},
	},
	{
		name: "nếu [ thì]",
		character: {
			hiragana: "もし[～たら]",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "nghĩa, ý nghĩa",
		character: {
			hiragana: "いみ",
			katakana: "",
			kanji: "意味",
		},
	},
	{
		name: "A-lô",
		character: {
			hiragana: "もしもし",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "việc chuyển địa điểm làm việc (～します: chuyển địa điểm làm việc)",
		character: {
			hiragana: "てんきん",
			katakana: "",
			kanji: "転勤",
		},
	},
	{
		name: "việc , chuyện (の　こと: việc )",
		character: {
			hiragana: "こと",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "thời gian rảnh",
		character: {
			hiragana: "ひま",
			katakana: "",
			kanji: "暇",
		},
	},
	{
		name: "Anh/chị đã giúp tôi (nhiều).",
		character: {
			hiragana: "[いろいろ]おせわになりました。",
			katakana: "",
			kanji: "",
		},
	},
	{
		name: "cố, cố gắng",
		character: {
			hiragana: "がんばります",
			katakana: "",
			kanji: "頑張ります",
		},
	},
	{
		name: "Chúc anh/chị mạnh khỏe.",
		character: {
			hiragana: "どうぞおげんきで。",
			katakana: "",
			kanji: "どうぞお元気で。",
		},
	},
	{
		name: "Việt Nam",
		character: {
			hiragana: "",
			katakana: "ベトナム",
			kanji: "",
		},
	},
];

export const LessonCollection = new Map<string,Array<Iword>>([
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