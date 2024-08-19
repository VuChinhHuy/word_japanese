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

export const lessonOne: Iword[] = [
	{
		sound: "i",
		name: "Tôi",
		character: {
			hiragana: "わたし",
			katakana: null,
			kanji: "私",
		},
	},
	{
		sound: "we",
		name: "Chúng tôi",
		character: {
			hiragana: "わたしたち",
			katakana: null,
			kanji: "私たち",
		},
	},
	{
		sound: "you",
		name: "Bạn",
		character: {
			hiragana: "あなた",
			katakana: null,
			kanji: null,
		},
	},
	{
		sound: "that_person",
		name: "Người kia",
		character: {
			hiragana: "あのひと",
			katakana: null,
			kanji: "あの人",
		},
	},
	{
		sound: "that_person_polite",
		name: "Người kia (kính ngữ)",
		character: {
			hiragana: "あのかた",
			katakana: null,
			kanji: "あの方",
		},
	},
	{
		sound: "everyone_polite",
		name: "Các anh, các chị, các ông, các bà (kính ngữ)",
		character: {
			hiragana: "みなさん",
			katakana: null,
			kanji: "皆さん",
		},
	},
	{
		sound: "suffix_for_intimacy",
		name: "Anh, chị, ông, bà (thêm vào sau tên người để thể hiện tính thân mật)",
		character: {
			hiragana: "～さん",
			katakana: null,
			kanji: null,
		},
	},
	{
		sound: "suffix_for_boys",
		name: "Bé (thêm vào sau tên trẻ em nam)",
		character: {
			hiragana: "～くん",
			katakana: null,
			kanji: "～君",
		},
	},
	{
		sound: "nationality_suffix",
		name: "Người (nước nào)",
		character: {
			hiragana: "～じん",
			katakana: null,
			kanji: "～人",
		},
	},
	{
		sound: "teacher_title",
		name: "Thầy, cô (giáo viên)",
		character: {
			hiragana: "せんせい",
			katakana: null,
			kanji: "先生",
		},
	},
	{
		sound: "teacher_profession",
		name: "Giáo viên",
		character: {
			hiragana: "きょうし",
			katakana: null,
			kanji: "教師",
		},
	},
	{
		sound: "student",
		name: "Học sinh, sinh viên",
		character: {
			hiragana: "がくせい",
			katakana: null,
			kanji: "学生",
		},
	},
	{
		sound: "company_employee",
		name: "Nhân viên công ty",
		character: {
			hiragana: "かいしゃいん",
			katakana: null,
			kanji: "会社員",
		},
	},
	{
		sound: "bank_employee",
		name: "Nhân viên ngân hàng",
		character: {
			hiragana: "ぎんこういん",
			katakana: null,
			kanji: "銀行員",
		},
	},
	{
		sound: "doctor",
		name: "Bác sĩ",
		character: {
			hiragana: "いしゃ",
			katakana: null,
			kanji: "医者",
		},
	},
	{
		sound: "researcher",
		name: "Nhà nghiên cứu",
		character: {
			hiragana: "けんきゅうしゃ",
			katakana: null,
			kanji: "研究者",
		},
	},
	{
		sound: "engineer",
		name: "Kỹ sư",
		character: {
			hiragana: null,
			katakana: "エンジニア",
			kanji: null,
		},
	},
	{
		sound: "university",
		name: "Đại học",
		character: {
			hiragana: "だいがく",
			katakana: null,
			kanji: "大学",
		},
	},
	{
		sound: "hospital",
		name: "Bệnh viện",
		character: {
			hiragana: "びょういん",
			katakana: null,
			kanji: "病院",
		},
	},
	{
		sound: "who",
		name: "Ai",
		character: {
			hiragana: "だれ",
			katakana: null,
			kanji: "誰",
		},
	},
	{
		sound: "who_polite",
		name: "Ai (kính ngữ)",
		character: {
			hiragana: "どなた",
			katakana: null,
			kanji: null,
		},
	},
	{
		sound: "how_old",
		name: "Mấy tuổi, bao nhiêu tuổi",
		character: {
			hiragana: "なんさい",
			katakana: null,
			kanji: "何歳",
		},
	},
	{
		sound: "how_old_polite",
		name: "Mấy tuổi, bao nhiêu tuổi (kính ngữ)",
		character: {
			hiragana: "おいくつ",
			katakana: null,
			kanji: null,
		},
	},
	{
		sound: "yes",
		name: "Vâng, đúng vậy",
		character: {
			hiragana: "はい",
			katakana: null,
			kanji: null,
		},
	},
	{
		sound: "no",
		name: "Không",
		character: {
			hiragana: "いいえ",
			katakana: null,
			kanji: null,
		},
	},
	{
		sound: "nice_to_meet_you",
		name: "Xin chào (lần đầu gặp)",
		character: {
			hiragana: "はじめまして",
			katakana: null,
			kanji: "初めまして",
		},
	},
	{
		sound: "pleased_to_meet_you",
		name: "Rất hân hạnh được gặp bạn",
		character: {
			hiragana: "どうぞよろしくおねがいします",
			katakana: null,
			kanji: "どうぞよろしくお願いします",
		},
	},
	{
		sound: "i_came_from",
		name: "Người đến từ ~",
		character: {
			hiragana: "～からきました",
			katakana: null,
			kanji: "～から来ました",
		},
	},
];

export const lessonTwo: Iword[] = [
	{
		sound: "book",
		name: "Sách",
		character: {
			hiragana: "ほん",
			katakana: null,
			kanji: "本",
		},
	},
	{
		sound: "dictionary",
		name: "Từ điển",
		character: {
			hiragana: "じしょ",
			katakana: null,
			kanji: "辞書",
		},
	},
	{
		sound: "magazine",
		name: "Tạp chí",
		character: {
			hiragana: "ざっし",
			katakana: null,
			kanji: "雑誌",
		},
	},
	{
		sound: "newspaper",
		name: "Báo",
		character: {
			hiragana: "しんぶん",
			katakana: null,
			kanji: "新聞",
		},
	},
	{
		sound: "notebook",
		name: "Vở",
		character: {
			hiragana: null,
			katakana: "ノート",
			kanji: null,
		},
	},
	{
		sound: "handbook",
		name: "Sổ tay",
		character: {
			hiragana: "てちょう",
			katakana: null,
			kanji: "手帳",
		},
	},
	{
		sound: "business_card",
		name: "Danh thiếp",
		character: {
			hiragana: "めいし",
			katakana: null,
			kanji: "名刺",
		},
	},
	{
		sound: "card",
		name: "Thẻ",
		character: {
			hiragana: null,
			katakana: "カード",
			kanji: null,
		},
	},
	{
		sound: "pencil",
		name: "Bút chì",
		character: {
			hiragana: "えんぴつ",
			katakana: null,
			kanji: "鉛筆",
		},
	},
	{
		sound: "ballpoint_pen",
		name: "Bút bi",
		character: {
			hiragana: null,
			katakana: "ボールペン",
			kanji: null,
		},
	},
	{
		sound: "mechanical_pencil",
		name: "Bút máy",
		character: {
			hiragana: null,
			katakana: "シャープペンシル",
			kanji: null,
		},
	},
	{
		sound: "key",
		name: "Chìa khóa",
		character: {
			hiragana: "かぎ",
			katakana: null,
			kanji: "鍵",
		},
	},
	{
		sound: "clock",
		name: "Đồng hồ",
		character: {
			hiragana: "とけい",
			katakana: null,
			kanji: "時計",
		},
	},
	{
		sound: "umbrella",
		name: "Ô (dù)",
		character: {
			hiragana: "かさ",
			katakana: null,
			kanji: "傘",
		},
	},
	{
		sound: "bag",
		name: "Cặp sách",
		character: {
			hiragana: "かばん",
			katakana: null,
			kanji: "鞄",
		},
	},
	{
		sound: "cassette_tape",
		name: "Băng [cát-xét]",
		character: {
			hiragana: null,
			katakana: "テープ",
			kanji: null,
		},
	},
	{
		sound: "tape_recorder",
		name: "Máy ghi âm",
		character: {
			hiragana: null,
			katakana: "テープレコーダー",
			kanji: null,
		},
	},
	{
		sound: "television",
		name: "Tivi",
		character: {
			hiragana: null,
			katakana: "テレビ",
			kanji: null,
		},
	},
	{
		sound: "radio",
		name: "Radio",
		character: {
			hiragana: null,
			katakana: "ラジオ",
			kanji: null,
		},
	},
	{
		sound: "computer",
		name: "Máy tính",
		character: {
			hiragana: null,
			katakana: "コンピューター",
			kanji: null,
		},
	},
	{
		sound: "automobile",
		name: "Ô tô, xe hơi",
		character: {
			hiragana: "じどうしゃ",
			katakana: null,
			kanji: "自動車",
		},
	},
	{
		sound: "desk",
		name: "Bàn",
		character: {
			hiragana: "つくえ",
			katakana: null,
			kanji: "机",
		},
	},
	{
		sound: "chair",
		name: "Ghế",
		character: {
			hiragana: "いす",
			katakana: null,
			kanji: "椅子",
		},
	},
	{
		sound: "chocolate",
		name: "Sô cô la",
		character: {
			hiragana: null,
			katakana: "チョコレート",
			kanji: null,
		},
	},
	{
		sound: "coffee",
		name: "Cà phê",
		character: {
			hiragana: null,
			katakana: "コーヒー",
			kanji: null,
		},
	},
	{
		sound: "souvenir",
		name: "Kỷ niệm",
		character: {
			hiragana: "おみやげ",
			katakana: null,
			kanji: "お土産",
		},
	},
	{
		sound: "japanese_language",
		name: "Tiếng Nhật",
		character: {
			hiragana: "にほんご",
			katakana: null,
			kanji: "日本語",
		},
	},
	{
		sound: "language",
		name: "Tiếng ~",
		character: {
			hiragana: "～ご",
			katakana: null,
			kanji: "～語",
		},
	},
	{
		sound: "what",
		name: "Cái gì, gì",
		character: {
			hiragana: "なん",
			katakana: null,
			kanji: "何",
		},
	},
	{
		sound: "really",
		name: "Thế à, vậy à",
		character: {
			hiragana: "そう",
			katakana: null,
			kanji: null,
		},
	},
	{
		sound: "um",
		name: "À, ờ (ngập ngừng)",
		character: {
			hiragana: "あのう",
			katakana: null,
			kanji: null,
		},
	},
	{
		sound: "just_a_token",
		name: "Chỉ là chút lòng thành",
		character: {
			hiragana: "ほんのきもちです",
			katakana: null,
			kanji: "ほんの気持ちです",
		},
	},
	{
		sound: "thank_you",
		name: "Xin cảm ơn",
		character: {
			hiragana: "どうもありがとうございます",
			katakana: null,
			kanji: null,
		},
	},
	{
		sound: "here_you_go",
		name: "Xin tặng bạn",
		character: {
			hiragana: "どうぞ",
			katakana: null,
			kanji: null,
		},
	},
	{
		sound: "is_that_so",
		name: "Thế à? / vậy à? (bày tỏ sự ngạc nhiên)",
		character: {
			hiragana: "そうですか",
			katakana: null,
			kanji: null,
		},
	},
	{
		sound: "oh",
		name: "Ồ!",
		character: {
			hiragana: "あっ",
			katakana: null,
			kanji: null,
		},
	},
	{
		sound: "thank_you_very_much",
		name: "Cảm ơn rất nhiều",
		character: {
			hiragana: "どうもありがとうございます",
			katakana: null,
			kanji: null,
		},
	},
	{
		sound: "just_a_token_of_appreciation",
		name: "Đây là chút quà mọn",
		character: {
			hiragana: "ほんのきもちです",
			katakana: null,
			kanji: "ほんの気持ちです",
		},
	},
	{
		sound: "please_come_in",
		name: "Mời vào",
		character: {
			hiragana: "どうぞおあがりください",
			katakana: null,
			kanji: "どうぞお上がりください",
		},
	},
	{
		sound: "how_about",
		name: "Mời bạn dùng [~]",
		character: {
			hiragana: "～はいかがですか",
			katakana: null,
			kanji: null,
		},
	},
	{
		sound: "lets_eat",
		name: "Xin mời",
		character: {
			hiragana: "いただきます",
			katakana: null,
			kanji: "頂きます",
		},
	},
	{
		sound: "please_enter",
		name: "Xin mời vào",
		character: {
			hiragana: "どうぞおはいりください",
			katakana: null,
			kanji: "どうぞお入りください",
		},
	},
	{
		sound: "thank_you_",
		name: "Cảm ơn bạn",
		character: {
			hiragana: "どうも",
			katakana: null,
			kanji: null,
		},
	},
];

export const lessonThree: Iword[] = [
	{
		sound: "this",
		name: "Ở đây, chỗ này",
		character: {
			hiragana: "ここ",
			katakana: null,
			kanji: null,
		},
	},
	{
		sound: "there",
		name: "Ở đó, chỗ đó",
		character: {
			hiragana: "そこ",
			katakana: null,
			kanji: null,
		},
	},
	{
		sound: "over_there",
		name: "Ở kia, chỗ kia",
		character: {
			hiragana: "あそこ",
			katakana: null,
			kanji: null,
		},
	},
	{
		sound: "where",
		name: "Ở đâu",
		character: {
			hiragana: "どこ",
			katakana: null,
			kanji: null,
		},
	},
	{
		sound: "this_side",
		name: "Phía này, chỗ này",
		character: {
			hiragana: "こちら",
			katakana: null,
			kanji: null,
		},
	},
	{
		sound: "that_side",
		name: "Phía đó, chỗ đó",
		character: {
			hiragana: "そちら",
			katakana: null,
			kanji: null,
		},
	},
	{
		sound: "that_side_over_there",
		name: "Phía kia, chỗ kia",
		character: {
			hiragana: "あちら",
			katakana: null,
			kanji: null,
		},
	},
	{
		sound: "which_side",
		name: "Phía nào, chỗ nào",
		character: {
			hiragana: "どちら",
			katakana: null,
			kanji: null,
		},
	},
	{
		sound: "classroom",
		name: "Lớp học, phòng học",
		character: {
			hiragana: "きょうしつ",
			katakana: null,
			kanji: "教室",
		},
	},
	{
		sound: "cafeteria",
		name: "Nhà ăn",
		character: {
			hiragana: "しょくどう",
			katakana: null,
			kanji: "食堂",
		},
	},
	{
		sound: "office",
		name: "Văn phòng",
		character: {
			hiragana: "じむしょ",
			katakana: null,
			kanji: "事務所",
		},
	},
	{
		sound: "meeting_room",
		name: "Phòng họp, phòng hội nghị",
		character: {
			hiragana: "かいぎしつ",
			katakana: null,
			kanji: "会議室",
		},
	},
	{
		sound: "reception",
		name: "Bộ phận tiếp tân, phòng thường trực",
		character: {
			hiragana: "うけつけ",
			katakana: null,
			kanji: "受付",
		},
	},
	{
		sound: "lobby",
		name: "Hành lang, đại sảnh",
		character: {
			hiragana: null,
			katakana: "ロビー",
			kanji: null,
		},
	},
	{
		sound: "room",
		name: "Phòng",
		character: {
			hiragana: "へや",
			katakana: null,
			kanji: "部屋",
		},
	},
	{
		sound: "toilet",
		name: "Nhà vệ sinh, phòng vệ sinh, toa-lét",
		character: {
			hiragana: null,
			katakana: "トイレ",
			kanji: null,
		},
	},
	{
		sound: "stairs",
		name: "Cầu thang",
		character: {
			hiragana: "かいだん",
			katakana: null,
			kanji: "階段",
		},
	},
	{
		sound: "elevator",
		name: "Thang máy",
		character: {
			hiragana: null,
			katakana: "エレベーター",
			kanji: null,
		},
	},
	{
		sound: "escalator",
		name: "Thang cuốn",
		character: {
			hiragana: null,
			katakana: "エスカレーター",
			kanji: null,
		},
	},
	{
		sound: "country",
		name: "Nước ~",
		character: {
			hiragana: "～くに",
			katakana: null,
			kanji: "～国",
		},
	},
	{
		sound: "company",
		name: "Công ty",
		character: {
			hiragana: "かいしゃ",
			katakana: null,
			kanji: "会社",
		},
	},
	{
		sound: "home",
		name: "Nhà",
		character: {
			hiragana: "うち",
			katakana: null,
			kanji: "家",
		},
	},
	{
		sound: "telephone",
		name: "Điện thoại",
		character: {
			hiragana: "でんわ",
			katakana: null,
			kanji: "電話",
		},
	},
	{
		sound: "shoes",
		name: "Giầy",
		character: {
			hiragana: "くつ",
			katakana: null,
			kanji: "靴",
		},
	},
	{
		sound: "necktie",
		name: "Cà vạt",
		character: {
			hiragana: null,
			katakana: "ネクタイ",
			kanji: null,
		},
	},
	{
		sound: "wine",
		name: "Rượu vang",
		character: {
			hiragana: null,
			katakana: "ワイン",
			kanji: null,
		},
	},
	{
		sound: "cigarette",
		name: "Thuốc lá",
		character: {
			hiragana: "たばこ",
			katakana: null,
			kanji: null,
		},
	},
	{
		sound: "counter",
		name: "Quầy (trong cửa hàng, siêu thị)",
		character: {
			hiragana: "うりば",
			katakana: null,
			kanji: "売り場",
		},
	},
	{
		sound: "basement",
		name: "Tầng hầm, dưới mặt đất",
		character: {
			hiragana: "ちか",
			katakana: null,
			kanji: "地下",
		},
	},
	{
		sound: "floor",
		name: "Tầng ~",
		character: {
			hiragana: "～かい",
			katakana: null,
			kanji: "～階",
		},
	},
	{
		sound: "which_floor",
		name: "Mấy tầng",
		character: {
			hiragana: "なんがい",
			katakana: null,
			kanji: "何階",
		},
	},
	{
		sound: "yen",
		name: "Yên",
		character: {
			hiragana: "えん",
			katakana: null,
			kanji: "円",
		},
	},
	{
		sound: "how_much",
		name: "Bao nhiêu tiền",
		character: {
			hiragana: "いくら",
			katakana: null,
			kanji: null,
		},
	},
	{
		sound: "hundred",
		name: "Trăm",
		character: {
			hiragana: "ひゃく",
			katakana: null,
			kanji: "百",
		},
	},
	{
		sound: "thousand",
		name: "Nghìn",
		character: {
			hiragana: "せん",
			katakana: null,
			kanji: "千",
		},
	},
	{
		sound: "ten_thousand",
		name: "Mười nghìn, vạn",
		character: {
			hiragana: "まん",
			katakana: null,
			kanji: "万",
		},
	},
	{
		sound: "welcome",
		name: "Xin chào quý khách / Chào mừng quý khách",
		character: {
			hiragana: "いらっしゃいませ",
			katakana: null,
			kanji: null,
		},
	},
	{
		sound: "show_me",
		name: "Cho tôi xem [~]",
		character: {
			hiragana: "「～を」みせてください",
			katakana: null,
			kanji: "「～を」見せてください",
		},
	},
	{
		sound: "give_me",
		name: "Cho tôi [~]",
		character: {
			hiragana: "「～を」ください",
			katakana: null,
			kanji: null,
		},
	},
];

export const lessonFour: Iword[] = [
	{
		name: "dậy, thức dậy",
		character: {
			hiragana: "おきます",
			katakana: null,
			kanji: "起きます",
		},
		sound: "wake_up",
	},
	{
		name: "ngủ, đi ngủ",
		character: {
			hiragana: "ねます",
			katakana: null,
			kanji: "寝ます",
		},
		sound: "sleep",
	},
	{
		name: "làm việc",
		character: {
			hiragana: "はたらきます",
			katakana: null,
			kanji: "働きます",
		},
		sound: "work",
	},
	{
		name: "nghỉ, nghỉ ngơi",
		character: {
			hiragana: "やすみます",
			katakana: null,
			kanji: "休みます",
		},
		sound: "rest",
	},
	{
		name: "học",
		character: {
			hiragana: "べんきょうします",
			katakana: null,
			kanji: "勉強します",
		},
		sound: "study",
	},
	{
		name: "hết, kết thúc, xong",
		character: {
			hiragana: "おわります",
			katakana: null,
			kanji: "終わります",
		},
		sound: "finish",
	},
	{
		name: "bách hóa",
		character: {
			hiragana: "デパート",
			katakana: "デパート",
			kanji: null,
		},
		sound: "department_store",
	},
	{
		name: "ngân hàng",
		character: {
			hiragana: "ぎんこう",
			katakana: null,
			kanji: "銀行",
		},
		sound: "bank",
	},
	{
		name: "bưu điện",
		character: {
			hiragana: "ゆうびんきょく",
			katakana: null,
			kanji: "郵便局",
		},
		sound: "post_office",
	},
	{
		name: "thư viện",
		character: {
			hiragana: "としょかん",
			katakana: null,
			kanji: "図書館",
		},
		sound: "library",
	},
	{
		name: "bảo tàng mỹ thuật",
		character: {
			hiragana: "びじゅつかん",
			katakana: null,
			kanji: "美術館",
		},
		sound: "art_museum",
	},
	{
		name: "bây giờ",
		character: {
			hiragana: "いま",
			katakana: null,
			kanji: "今",
		},
		sound: "now",
	},
	{
		name: "-giờ",
		character: {
			hiragana: "―じ",
			katakana: null,
			kanji: "－時",
		},
		sound: "hour",
	},
	{
		name: "- phút",
		character: {
			hiragana: "―ふん（－ぷん）",
			katakana: null,
			kanji: "―分",
		},
		sound: "minute",
	},
	{
		name: "rưỡi, nửa",
		character: {
			hiragana: "はん",
			katakana: null,
			kanji: "半",
		},
		sound: "half",
	},
	{
		name: "mấy giờ",
		character: {
			hiragana: "なんじ",
			katakana: null,
			kanji: "何時",
		},
		sound: "what_time",
	},
	{
		name: "mấy phút",
		character: {
			hiragana: "なんぷん",
			katakana: null,
			kanji: "何分",
		},
		sound: "what_minute",
	},
	{
		name: "sáng, trước 12 giờ trưa",
		character: {
			hiragana: "ごぜん",
			katakana: null,
			kanji: "午前",
		},
		sound: "am",
	},
	{
		name: "chiều, sau 12 giờ trưa",
		character: {
			hiragana: "ごご",
			katakana: null,
			kanji: "午後",
		},
		sound: "pm",
	},
	{
		name: "buổi sáng, sáng",
		character: {
			hiragana: "あさ",
			katakana: null,
			kanji: "朝",
		},
		sound: "morning",
	},
	{
		name: "buổi trưa, trưa",
		character: {
			hiragana: "ひる",
			katakana: null,
			kanji: "昼",
		},
		sound: "noon",
	},
	{
		name: "buổi tối, tối",
		character: {
			hiragana: "ばん（よる）",
			katakana: null,
			kanji: "晩(夜)",
		},
		sound: "evening",
	},
	{
		name: "hôm kia",
		character: {
			hiragana: "おととい",
			katakana: null,
			kanji: null,
		},
		sound: "the_day_before_yesterday",
	},
	{
		name: "hôm qua",
		character: {
			hiragana: "きのう",
			katakana: null,
			kanji: null,
		},
		sound: "yesterday",
	},
	{
		name: "hôm nay",
		character: {
			hiragana: "きょう",
			katakana: null,
			kanji: null,
		},
		sound: "today",
	},
	{
		name: "ngày mai",
		character: {
			hiragana: "あした",
			katakana: null,
			kanji: null,
		},
		sound: "tomorrow",
	},
	{
		name: "ngày kia",
		character: {
			hiragana: "あさって",
			katakana: null,
			kanji: null,
		},
		sound: "the_day_after_tomorrow",
	},
	{
		name: "sáng nay",
		character: {
			hiragana: "けさ",
			katakana: null,
			kanji: null,
		},
		sound: "this_morning",
	},
	{
		name: "tối nay",
		character: {
			hiragana: "こんばん",
			katakana: null,
			kanji: "今晩",
		},
		sound: "tonight",
	},
	{
		name: "nghỉ, nghỉ phép, ngày nghỉ",
		character: {
			hiragana: "やすみ",
			katakana: null,
			kanji: "休み",
		},
		sound: "holiday",
	},
	{
		name: "nghỉ trưa",
		character: {
			hiragana: "ひるやすみ",
			katakana: null,
			kanji: "昼休み",
		},
		sound: "lunch_break",
	},
	{
		name: "thi, kỳ thi, kiểm tra",
		character: {
			hiragana: "しけん",
			katakana: null,
			kanji: "試験",
		},
		sound: "exam",
	},
	{
		name: "cuộc họp, hội nghị (～を　します： tổ chức cuộc họp, hội nghị)",
		character: {
			hiragana: "かいぎ",
			katakana: null,
			kanji: "会議",
		},
		sound: "meeting",
	},
	{
		name: "phim, điện ảnh",
		character: {
			hiragana: "えいが",
			katakana: null,
			kanji: "映画",
		},
		sound: "movie",
	},
	{
		name: "hàng sáng, mỗi sáng",
		character: {
			hiragana: "まいあさ",
			katakana: null,
			kanji: "毎朝",
		},
		sound: "every_morning",
	},
	{
		name: "hàng tối, mỗi tối",
		character: {
			hiragana: "まいばん",
			katakana: null,
			kanji: "毎晩",
		},
		sound: "every_evening",
	},
	{
		name: "hàng ngày, mỗi ngày",
		character: {
			hiragana: "まいにち",
			katakana: null,
			kanji: "毎日",
		},
		sound: "every_day",
	},
	{
		name: "thứ hai",
		character: {
			hiragana: "げつようび",
			katakana: null,
			kanji: "月曜日",
		},
		sound: "monday",
	},
	{
		name: "thứ ba",
		character: {
			hiragana: "かようび",
			katakana: null,
			kanji: "火曜日",
		},
		sound: "tuesday",
	},
	{
		name: "thứ tư",
		character: {
			hiragana: "すいようび",
			katakana: null,
			kanji: "水曜日",
		},
		sound: "wednesday",
	},
	{
		name: "thứ năm",
		character: {
			hiragana: "もくようび",
			katakana: null,
			kanji: "木曜日",
		},
		sound: "thursday",
	},
	{
		name: "thứ sáu",
		character: {
			hiragana: "きんようび",
			katakana: null,
			kanji: "金曜日",
		},
		sound: "friday",
	},
	{
		name: "thứ bảy",
		character: {
			hiragana: "どようび",
			katakana: null,
			kanji: "土曜日",
		},
		sound: "saturday",
	},
	{
		name: "chủ nhật",
		character: {
			hiragana: "にちようび",
			katakana: null,
			kanji: "日曜日",
		},
		sound: "sunday",
	},
	{
		name: "thứ mấy",
		character: {
			hiragana: "なんようび",
			katakana: null,
			kanji: "何曜日",
		},
		sound: "what_day",
	},
	{
		name: " từ",
		character: {
			hiragana: "～から",
			katakana: null,
			kanji: null,
		},
		sound: "from",
	},
	{
		name: " đến",
		character: {
			hiragana: "～まで",
			katakana: null,
			kanji: null,
		},
		sound: "to",
	},
	{
		name: " và (dùng để nối hai danh từ)",
		character: {
			hiragana: "～と",
			katakana: null,
			kanji: null,
		},
		sound: "and",
	},
	{
		name: "Anh/chị vất vả quá.",
		character: {
			hiragana: "たいへんですね",
			katakana: null,
			kanji: "大変",
		},
		sound: "you_must_be_tired",
	},
	{
		name: "số (số điện thoại, số phòng)",
		character: {
			hiragana: "ばんごう",
			katakana: null,
			kanji: "番号",
		},
		sound: "number",
	},
	{
		name: "số bao nhiêu, số mấy",
		character: {
			hiragana: "なんばん",
			katakana: null,
			kanji: "何番",
		},
		sound: "which_number",
	},
	{
		name: "ông/bà, phía ông/ phía bà",
		character: {
			hiragana: "そちら",
			katakana: null,
			kanji: null,
		},
		sound: "there",
	},
	{
		name: "New York",
		character: {
			hiragana: null,
			katakana: "ニューヨーク",
			kanji: null,
		},
		sound: "new_york",
	},
	{
		name: "Bắc Kinh",
		character: {
			hiragana: null,
			katakana: "ペキン",
			kanji: null,
		},
		sound: "beijing",
	},
	{
		name: "Los Angeles",
		character: {
			hiragana: null,
			katakana: "ロサンゼルス",
			kanji: null,
		},
		sound: "los_angeles",
	},
	{
		name: "Luân Đôn",
		character: {
			hiragana: null,
			katakana: "ロンドン",
			kanji: null,
		},
		sound: "london",
	},
	{
		name: "tên giả định của một nhà hàng Nhật",
		character: {
			hiragana: "あすか",
			katakana: null,
			kanji: null,
		},
		sound: "asuka",
	},
	{
		name: "ngân hàng Apple (giả định)",
		character: {
			hiragana: "ぎんこう",
			katakana: null,
			kanji: "アップル銀行",
		},
		sound: "apple_bank",
	},
	{
		name: "thư viện Midori (giả định)",
		character: {
			hiragana: "みどりとしょかん",
			katakana: null,
			kanji: "みどり図書館",
		},
		sound: "midori_library",
	},
	{
		name: "bảo tàng mỹ thuật Yamato (giả định)",
		character: {
			hiragana: "やまとびじゅつかん",
			katakana: null,
			kanji: "やまと美術館",
		},
		sound: "yamato_art_museum",
	},
];

export const lessonFive: Iword[] = [
	{
		name: "đi",
		character: {
			hiragana: "いきます",
			katakana: null,
			kanji: "行きます",
		},
		sound: "go",
	},
	{
		name: "đến",
		character: {
			hiragana: "きます",
			katakana: null,
			kanji: "来ます",
		},
		sound: "come",
	},
	{
		name: "về",
		character: {
			hiragana: "かえります",
			katakana: null,
			kanji: "帰ります",
		},
		sound: "return",
	},
	{
		name: "trường học",
		character: {
			hiragana: "がっこう",
			katakana: null,
			kanji: "学校",
		},
		sound: "school",
	},
	{
		name: "siêu thị",
		character: {
			hiragana: "スーパー",
			katakana: "スーパー",
			kanji: null,
		},
		sound: "supermarket",
	},
	{
		name: "ga, nhà ga",
		character: {
			hiragana: "えき",
			katakana: null,
			kanji: "駅",
		},
		sound: "station",
	},
	{
		name: "máy bay",
		character: {
			hiragana: "ひこうき",
			katakana: null,
			kanji: "飛行機",
		},
		sound: "airplane",
	},
	{
		name: "thuyền, tàu thủy",
		character: {
			hiragana: "ふね",
			katakana: null,
			kanji: "船",
		},
		sound: "ship",
	},
	{
		name: "tàu điện",
		character: {
			hiragana: "でんしゃ",
			katakana: null,
			kanji: "電車",
		},
		sound: "train",
	},
	{
		name: "tàu điện ngầm",
		character: {
			hiragana: "ちかてつ",
			katakana: null,
			kanji: "地下鉄",
		},
		sound: "subway",
	},
	{
		name: "tàu Shinkansen (tàu điện siêu tốc của Nhật)",
		character: {
			hiragana: "しんかんせん",
			katakana: null,
			kanji: "新幹線",
		},
		sound: "shinkansen",
	},
	{
		name: "xe buýt",
		character: {
			hiragana: "バス",
			katakana: "バス",
			kanji: null,
		},
		sound: "bus",
	},
	{
		name: "tắc-xi",
		character: {
			hiragana: "タクシー",
			katakana: "タクシー",
			kanji: null,
		},
		sound: "taxi",
	},
	{
		name: "xe đạp",
		character: {
			hiragana: "じてんしゃ",
			katakana: null,
			kanji: "自転車",
		},
		sound: "bicycle",
	},
	{
		name: "đi bộ",
		character: {
			hiragana: "あるいて",
			katakana: null,
			kanji: "歩いて",
		},
		sound: "walk",
	},
	{
		name: "người",
		character: {
			hiragana: "ひと",
			katakana: null,
			kanji: "人",
		},
		sound: "person",
	},
	{
		name: "bạn, bạn bè",
		character: {
			hiragana: "ともだち",
			katakana: null,
			kanji: "友達",
		},
		sound: "friend",
	},
	{
		name: "anh ấy, bạn trai",
		character: {
			hiragana: "かれ",
			katakana: null,
			kanji: "彼",
		},
		sound: "he",
	},
	{
		name: "chị ấy, bạn gái",
		character: {
			hiragana: "かのじょ",
			katakana: null,
			kanji: "彼女",
		},
		sound: "she",
	},
	{
		name: "gia đình",
		character: {
			hiragana: "かぞく",
			katakana: null,
			kanji: "家族",
		},
		sound: "family",
	},
	{
		name: "một mình",
		character: {
			hiragana: "ひとりで",
			katakana: null,
			kanji: "一人で",
		},
		sound: "alone",
	},
	{
		name: "tuần trước",
		character: {
			hiragana: "せんしゅう",
			katakana: null,
			kanji: "先週",
		},
		sound: "last_week",
	},
	{
		name: "tuần này",
		character: {
			hiragana: "こんしゅう",
			katakana: null,
			kanji: "今週",
		},
		sound: "this_week",
	},
	{
		name: "tuần sau",
		character: {
			hiragana: "らいしゅう",
			katakana: null,
			kanji: "来週",
		},
		sound: "next_week",
	},
	{
		name: "tháng trước",
		character: {
			hiragana: "せんげつ",
			katakana: null,
			kanji: "先月",
		},
		sound: "last_month",
	},
	{
		name: "tháng này",
		character: {
			hiragana: "こんげつ",
			katakana: null,
			kanji: "今月",
		},
		sound: "this_month",
	},
	{
		name: "tháng sau",
		character: {
			hiragana: "らいげつ",
			katakana: null,
			kanji: "来月",
		},
		sound: "next_month",
	},
	{
		name: "năm ngoái",
		character: {
			hiragana: "きょねん",
			katakana: null,
			kanji: "去年",
		},
		sound: "last_year",
	},
	{
		name: "năm nay",
		character: {
			hiragana: "ことし",
			katakana: null,
			kanji: null,
		},
		sound: "this_year",
	},
	{
		name: "năm sau",
		character: {
			hiragana: "らいねん",
			katakana: null,
			kanji: "来年",
		},
		sound: "next_year",
	},
	{
		name: "năm -",
		character: {
			hiragana: "ーねん",
			katakana: null,
			kanji: "ー年",
		},
		sound: "year",
	},
	{
		name: "mấy năm",
		character: {
			hiragana: "なんねん",
			katakana: null,
			kanji: "何年",
		},
		sound: "how_many_years",
	},
	{
		name: "tháng -",
		character: {
			hiragana: "ーがつ",
			katakana: null,
			kanji: "ー月",
		},
		sound: "month",
	},
	{
		name: "tháng mấy",
		character: {
			hiragana: "なんがつ",
			katakana: null,
			kanji: "何月",
		},
		sound: "which_month",
	},
	{
		name: "ngày mồng 1",
		character: {
			hiragana: "ついたち",
			katakana: null,
			kanji: "１日",
		},
		sound: "first_day",
	},
	{
		name: "ngày mồng 2, 2 ngày",
		character: {
			hiragana: "ふつか",
			katakana: null,
			kanji: "２日",
		},
		sound: "second_day",
	},
	{
		name: "ngày mồng 3, 3 ngày",
		character: {
			hiragana: "みっか",
			katakana: null,
			kanji: "３日",
		},
		sound: "third_day",
	},
	{
		name: "ngày mồng 4, 4 ngày",
		character: {
			hiragana: "よっか",
			katakana: null,
			kanji: "４日",
		},
		sound: "fourth_day",
	},
	{
		name: "ngày mồng 5, 5 ngày",
		character: {
			hiragana: "いつか",
			katakana: null,
			kanji: "５日",
		},
		sound: "fifth_day",
	},
	{
		name: "ngày mồng 6, 6 ngày",
		character: {
			hiragana: "むいか",
			katakana: null,
			kanji: "６日",
		},
		sound: "sixth_day",
	},
	{
		name: "ngày mồng 7, 7 ngày",
		character: {
			hiragana: "なのか",
			katakana: null,
			kanji: "７日",
		},
		sound: "seventh_day",
	},
	{
		name: "ngày mồng 8, 8 ngày",
		character: {
			hiragana: "ようか",
			katakana: null,
			kanji: "８日",
		},
		sound: "eighth_day",
	},
	{
		name: "ngày mồng 9, 9 ngày",
		character: {
			hiragana: "ここのか",
			katakana: null,
			kanji: "９日",
		},
		sound: "ninth_day",
	},
	{
		name: "ngày mồng 10, 10 ngày",
		character: {
			hiragana: "とおか",
			katakana: null,
			kanji: "１０日",
		},
		sound: "tenth_day",
	},
	{
		name: "ngày 14, 14 ngày",
		character: {
			hiragana: "じゅうよっか",
			katakana: null,
			kanji: "１４日",
		},
		sound: "fourteenth_day",
	},
	{
		name: "ngày 20, 20 ngày",
		character: {
			hiragana: "はつか",
			katakana: null,
			kanji: "２０日",
		},
		sound: "twentieth_day",
	},
	{
		name: "ngày 24, 24 ngày",
		character: {
			hiragana: "にじゅうよっか",
			katakana: null,
			kanji: "２４日",
		},
		sound: "twenty_fourth_day",
	},
	{
		name: "ngày -, - ngày",
		character: {
			hiragana: "―にち",
			katakana: null,
			kanji: "―日",
		},
		sound: "day",
	},
	{
		name: "ngày mấy, ngày bao nhiêu, mấy ngày, bao nhiêu ngày",
		character: {
			hiragana: "なんにち",
			katakana: null,
			kanji: "何日",
		},
		sound: "what_day",
	},
	{
		name: "bao giờ, khi nào",
		character: {
			hiragana: "いつ",
			katakana: null,
			kanji: null,
		},
		sound: "when",
	},
	{
		name: "sinh nhật",
		character: {
			hiragana: "たんじょうび",
			katakana: null,
			kanji: "誕生日",
		},
		sound: "birthday",
	},
	{
		name: "Ừ, nhỉ.",
		character: {
			hiragana: "そうですね。",
			katakana: null,
			kanji: null,
		},
		sound: "yes_indeed",
	},
	{
		name: "Xin cám ơn anh/chị rất nhiều.",
		character: {
			hiragana: "どうもありがとうございました。",
			katakana: null,
			kanji: null,
		},
		sound: "thank_you_very_much",
	},
	{
		name: "Không có gì.",
		character: {
			hiragana: "どういたしまして",
			katakana: null,
			kanji: null,
		},
		sound: "you_re_welcome",
	},
	{
		name: "sân ga số -",
		character: {
			hiragana: "―ばんせん",
			katakana: null,
			kanji: "番線",
		},
		sound: "platform_number",
	},
	{
		name: "tiếp theo",
		character: {
			hiragana: "つぎの",
			katakana: null,
			kanji: "次の",
		},
		sound: "next",
	},
	{
		name: "tàu thường (dừng cả ở các ga lẻ)",
		character: {
			hiragana: "ふつう",
			katakana: null,
			kanji: "普通",
		},
		sound: "local_train",
	},
	{
		name: "tàu tốc hành",
		character: {
			hiragana: "きゅうこう",
			katakana: null,
			kanji: "急行",
		},
		sound: "express_train",
	},
	{
		name: "tàu tốc hành đặc biệt",
		character: {
			hiragana: "とっきゅう",
			katakana: null,
			kanji: "特急",
		},
		sound: "limited_express_train",
	},
	{
		name: "tên một khu phố ở Osaka",
		character: {
			hiragana: "こうしえん",
			katakana: null,
			kanji: "甲子園",
		},
		sound: "koshien",
	},
	{
		name: "Lâu đài Osaka, một lâu đài nổi tiếng ở Osaka",
		character: {
			hiragana: "おおさかじょう",
			katakana: null,
			kanji: "大阪城",
		},
		sound: "osaka_castle",
	},
];

export const lessonSix: Iword[] = [
	{
		name: "ăn",
		sound: "eat",
		character: {
			hiragana: "たべます",
			katakana: null,
			kanji: "食べます",
		},
	},
	{
		name: "uống",
		sound: "drink",
		character: {
			hiragana: "のみます",
			katakana: null,
			kanji: "飲みます",
		},
	},
	{
		name: "hút [thuốc lá]",
		sound: "smoke",
		character: {
			hiragana: "すいます",
			katakana: null,
			kanji: "吸います",
		},
	},
	{
		name: "xem, nhìn, trông",
		sound: "see",
		character: {
			hiragana: "みます",
			katakana: null,
			kanji: "見ます",
		},
	},
	{
		name: "nghe",
		sound: "hear",
		character: {
			hiragana: "ききます",
			katakana: null,
			kanji: "聞きます",
		},
	},
	{
		name: "đọc",
		sound: "read",
		character: {
			hiragana: "よみます",
			katakana: null,
			kanji: "読みます",
		},
	},
	{
		name: "viết, vẽ",
		sound: "write",
		character: {
			hiragana: "かきます",
			katakana: null,
			kanji: "書きます",
		},
	},
	{
		name: "mua",
		sound: "buy",
		character: {
			hiragana: "かいます",
			katakana: null,
			kanji: "買います",
		},
	},
	{
		name: "chụp [ảnh]",
		sound: "take_photo",
		character: {
			hiragana: "とります",
			katakana: null,
			kanji: "撮ります",
		},
	},
	{
		name: "làm",
		sound: "do",
		character: {
			hiragana: "します",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "gặp [bạn]",
		sound: "meet",
		character: {
			hiragana: "あいます",
			katakana: null,
			kanji: "会います",
		},
	},
	{
		name: "cơm, bữa ăn",
		sound: "meal",
		character: {
			hiragana: "ごはん",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "cơm sáng",
		sound: "breakfast",
		character: {
			hiragana: "あさごはん",
			katakana: null,
			kanji: "朝ごはん",
		},
	},
	{
		name: "cơm trưa",
		sound: "lunch",
		character: {
			hiragana: "ひるごはん",
			katakana: null,
			kanji: "昼ごはん",
		},
	},
	{
		name: "cơm tối",
		sound: "dinner",
		character: {
			hiragana: "ばんごはん",
			katakana: null,
			kanji: "晩ごはん",
		},
	},
	{
		name: "bánh mì",
		sound: "bread",
		character: {
			hiragana: "パン",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "trứng",
		sound: "egg",
		character: {
			hiragana: "たまご",
			katakana: null,
			kanji: "卵",
		},
	},
	{
		name: "thịt",
		sound: "meat",
		character: {
			hiragana: "にく",
			katakana: null,
			kanji: "肉",
		},
	},
	{
		name: "cá",
		sound: "fish",
		character: {
			hiragana: "さかな",
			katakana: null,
			kanji: "魚",
		},
	},
	{
		name: "rau",
		sound: "vegetable",
		character: {
			hiragana: "やさい",
			katakana: null,
			kanji: "野菜",
		},
	},
	{
		name: "hoa quả, trái cây",
		sound: "fruit",
		character: {
			hiragana: "くだもの",
			katakana: null,
			kanji: "果物",
		},
	},
	{
		name: "nước",
		sound: "water",
		character: {
			hiragana: "みず",
			katakana: null,
			kanji: "水",
		},
	},
	{
		name: "trà (nói chung)",
		sound: "tea",
		character: {
			hiragana: "おちゃ",
			katakana: null,
			kanji: "お茶",
		},
	},
	{
		name: "trà đen",
		sound: "black_tea",
		character: {
			hiragana: "こうちゃ",
			katakana: null,
			kanji: "紅茶",
		},
	},
	{
		name: "sữa bò (sữa)",
		sound: "milk",
		character: {
			hiragana: "ぎゅうにゅう(ミルク)",
			katakana: null,
			kanji: "牛乳",
		},
	},
	{
		name: "nước hoa quả",
		sound: "juice",
		character: {
			hiragana: null,
			katakana: "ジュース",
			kanji: null,
		},
	},
	{
		name: "bia",
		sound: "beer",
		character: {
			hiragana: null,
			katakana: "ビール",
			kanji: null,
		},
	},
	{
		name: "rượu, rượu sake",
		sound: "sake",
		character: {
			hiragana: "[お]さけ",
			katakana: null,
			kanji: "[お]酒",
		},
	},
	{
		name: "thuốc lá",
		sound: "cigarette",
		character: {
			hiragana: "たばこ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "thư",
		sound: "letter",
		character: {
			hiragana: "てがみ",
			katakana: null,
			kanji: "手紙",
		},
	},
	{
		name: "báo cáo",
		sound: "report",
		character: {
			hiragana: null,
			katakana: "レポート",
			kanji: null,
		},
	},
	{
		name: "ảnh",
		sound: "photo",
		character: {
			hiragana: "しゃしん",
			katakana: null,
			kanji: "写真",
		},
	},
	{
		name: "video, băng video, đầu video",
		sound: "video",
		character: {
			hiragana: null,
			katakana: "ビデオ",
			kanji: null,
		},
	},
	{
		name: "cửa hàng, tiệm",
		sound: "shop",
		character: {
			hiragana: "みせ",
			katakana: null,
			kanji: "店",
		},
	},
	{
		name: "vườn",
		sound: "garden",
		character: {
			hiragana: "にわ",
			katakana: null,
			kanji: "庭",
		},
	},
	{
		name: "bài tập về nhà (～をします: làm bài tập)",
		sound: "homework",
		character: {
			hiragana: "しゅくだい",
			katakana: null,
			kanji: "宿題",
		},
	},
	{
		name: "quần vợt (～をします: đánh quần vợt)",
		sound: "tennis",
		character: {
			hiragana: null,
			katakana: "テニス",
			kanji: null,
		},
	},
	{
		name: "bóng đá (～をします: chơi bóng đá)",
		sound: "soccer",
		character: {
			hiragana: null,
			katakana: "サッカー",
			kanji: null,
		},
	},
	{
		name: "việc ngắm hoa anh đào (～をします: ngắm hoa anh đào)",
		sound: "flower_viewing",
		character: {
			hiragana: "[お]はなみ",
			katakana: null,
			kanji: "[お]花見",
		},
	},
	{
		name: "cái gì, gì",
		sound: "what",
		character: {
			hiragana: "なに",
			katakana: null,
			kanji: "何",
		},
	},
	{
		name: "cùng, cùng nhau",
		sound: "together",
		character: {
			hiragana: "いっしょに",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "một chút",
		sound: "a_little",
		character: {
			hiragana: "ちょっと",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "luôn luôn, lúc nào cũng",
		sound: "always",
		character: {
			hiragana: "いつも",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "thỉnh thoảng",
		sound: "sometimes",
		character: {
			hiragana: "ときどき",
			katakana: null,
			kanji: "時々",
		},
	},
	{
		name: "sau đó, tiếp theo",
		sound: "then",
		character: {
			hiragana: "それから",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "vâng, được (cách nói thân mật của 「はい」)",
		sound: "yes_informal",
		character: {
			hiragana: "ええ",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Được đấy nhỉ./ hay quá.",
		sound: "sounds_good",
		character: {
			hiragana: "いいですね。",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Tôi hiểu rồi/ vâng ạ.",
		sound: "understood",
		character: {
			hiragana: "わかりました。",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Có gì đấy ạ?/ cái gì vậy?",
		sound: "what_is_it",
		character: {
			hiragana: "なんですか。",
			katakana: null,
			kanji: "何",
		},
	},
	{
		name: "Hẹn gặp lại [ngày mai].",
		sound: "see_you_tomorrow",
		character: {
			hiragana: "じゃ、また[あした]",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "Mexico",
		sound: "mexico",
		character: {
			hiragana: null,
			katakana: "メキシコ",
			kanji: null,
		},
	},
	{
		name: "bách hóa Osaka (giả định)",
		sound: "osaka_department_store",
		character: {
			hiragana: "おおさかデパート",
			katakana: null,
			kanji: "大阪デパート",
		},
	},
	{
		name: "tên nhà hàng (giả định)",
		sound: "tsuruya_restaurant",
		character: {
			hiragana: "つるや",
			katakana: null,
			kanji: null,
		},
	},
	{
		name: "tên siêu thị (giả định)",
		sound: "france_supermarket",
		character: {
			hiragana: "フランスや",
			katakana: null,
			kanji: "フランス屋",
		},
	},
	{
		name: "tên siêu thị (giả định)",
		sound: "mainichi_supermarket",
		character: {
			hiragana: "まいにちや",
			katakana: null,
			kanji: "毎日屋",
		},
	},
];

export const lessonSeven: Iword[] = [
	{
		name: "cắt",
		character: {
			hiragana: "きります",
			katakana: null,
			kanji: "切ります",
		},
		sound: "cut",
	},
	{
		name: "gửi",
		character: {
			hiragana: "おくります",
			katakana: null,
			kanji: "送ります",
		},
		sound: "send",
	},
	{
		name: "cho, tặng",
		character: {
			hiragana: "あげます",
			katakana: null,
			kanji: null,
		},
		sound: "give",
	},
	{
		name: "nhận",
		character: {
			hiragana: "もらいます",
			katakana: null,
			kanji: null,
		},
		sound: "receive",
	},
	{
		name: "cho mượn, cho vay",
		character: {
			hiragana: "かします",
			katakana: null,
			kanji: "貸します",
		},
		sound: "lend",
	},
	{
		name: "mượn, vay",
		character: {
			hiragana: "かります",
			katakana: null,
			kanji: "借ります",
		},
		sound: "borrow",
	},
	{
		name: "dạy",
		character: {
			hiragana: "おしえます",
			katakana: null,
			kanji: "教えます",
		},
		sound: "teach",
	},
	{
		name: "học, tập",
		character: {
			hiragana: "ならいます",
			katakana: null,
			kanji: "習います",
		},
		sound: "learn",
	},
	{
		name: "gọi [điện thoại]",
		character: {
			hiragana: "かけます[でんわを～]",
			katakana: null,
			kanji: "かけます[電話を～]",
		},
		sound: "make_phone_call",
	},
	{
		name: "tay",
		character: {
			hiragana: "て",
			katakana: null,
			kanji: "手",
		},
		sound: "hand",
	},
	{
		name: "đũa",
		character: {
			hiragana: "はし",
			katakana: null,
			kanji: null,
		},
		sound: "chopsticks",
	},
	{
		name: "thìa",
		character: {
			hiragana: null,
			katakana: "スプーン",
			kanji: null,
		},
		sound: "spoon",
	},
	{
		name: "dao",
		character: {
			hiragana: null,
			katakana: "ナイフ",
			kanji: null,
		},
		sound: "knife",
	},
	{
		name: "nĩa",
		character: {
			hiragana: null,
			katakana: "フォーク",
			kanji: null,
		},
		sound: "fork",
	},
	{
		name: "kéo",
		character: {
			hiragana: "はさみ",
			katakana: null,
			kanji: null,
		},
		sound: "scissors",
	},
	{
		name: "máy vi tính cá nhân",
		character: {
			hiragana: null,
			katakana: "パソコン",
			kanji: null,
		},
		sound: "personal_computer",
	},
	{
		name: "điện thoại di động",
		character: {
			hiragana: null,
			katakana: "ケータイ",
			kanji: null,
		},
		sound: "mobile_phone",
	},
	{
		name: "thư điện tử, email",
		character: {
			hiragana: null,
			katakana: "メール",
			kanji: null,
		},
		sound: "email",
	},
	{
		name: "thiệp mừng năm mới",
		character: {
			hiragana: "ねんがじょう",
			katakana: null,
			kanji: "年賀状",
		},
		sound: "new_year_card",
	},
	{
		name: "cái đục lỗ",
		character: {
			hiragana: null,
			katakana: "パンチ",
			kanji: null,
		},
		sound: "hole_punch",
	},
	{
		name: "cái dập ghim",
		character: {
			hiragana: null,
			katakana: "ホッチキス",
			kanji: null,
		},
		sound: "stapler",
	},
	{
		name: "băng dính",
		character: {
			hiragana: null,
			katakana: "セロテープ",
			kanji: null,
		},
		sound: "scotch_tape",
	},
	{
		name: "cái tẩy",
		character: {
			hiragana: "けしゴム",
			katakana: null,
			kanji: null,
		},
		sound: "eraser",
	},
	{
		name: "giấy",
		character: {
			hiragana: "かみ",
			katakana: null,
			kanji: "紙",
		},
		sound: "paper",
	},
	{
		name: "hoa",
		character: {
			hiragana: "はな",
			katakana: null,
			kanji: "花",
		},
		sound: "flower",
	},
	{
		name: "áo sơ mi",
		character: {
			hiragana: null,
			katakana: "シャツ",
			kanji: null,
		},
		sound: "shirt",
	},
	{
		name: "quà tặng, tặng phẩm",
		character: {
			hiragana: null,
			katakana: "プレゼント",
			kanji: null,
		},
		sound: "gift",
	},
	{
		name: "đồ đạc, hành lý",
		character: {
			hiragana: "にもつ",
			katakana: null,
			kanji: "荷物",
		},
		sound: "luggage",
	},
	{
		name: "tiền",
		character: {
			hiragana: "おかね",
			katakana: null,
			kanji: "お金",
		},
		sound: "money",
	},
	{
		name: "vé",
		character: {
			hiragana: "きっぷ",
			katakana: null,
			kanji: "切符",
		},
		sound: "ticket",
	},
	{
		name: "Giáng sinh",
		character: {
			hiragana: null,
			katakana: "クリスマス",
			kanji: null,
		},
		sound: "christmas",
	},
	{
		name: "bố (dùng khi nói về bố mình)",
		character: {
			hiragana: "ちち",
			katakana: null,
			kanji: "父",
		},
		sound: "father_myself",
	},
	{
		name: "mẹ (dùng khi nói về mẹ mình)",
		character: {
			hiragana: "はは",
			katakana: null,
			kanji: "母",
		},
		sound: "mother_myself",
	},
	{
		name: "bố (dùng khi nói về bố người khác và dùng khi xưng hô với bố mình)",
		character: {
			hiragana: "おとうさん",
			katakana: null,
			kanji: "お父さん",
		},
		sound: "father_other",
	},
	{
		name: "mẹ (dùng khi nói về mẹ người khác và dùng khi xưng hô với mẹ mình)",
		character: {
			hiragana: "おかあさん",
			katakana: null,
			kanji: "お母さん",
		},
		sound: "mother_other",
	},
	{
		name: "đã, rồi",
		character: {
			hiragana: "もう",
			katakana: null,
			kanji: null,
		},
		sound: "already",
	},
	{
		name: "chưa",
		character: {
			hiragana: "まだ",
			katakana: null,
			kanji: null,
		},
		sound: "not_yet",
	},
	{
		name: "từ bây giờ, sau đây",
		character: {
			hiragana: "これから",
			katakana: null,
			kanji: null,
		},
		sound: "from_now_on",
	},
	{
		name: "[] hay nhỉ./ đẹp nhỉ.",
		character: {
			hiragana: "[～、]すてきですね。",
			katakana: null,
			kanji: null,
		},
		sound: "isnt_it_nice",
	},
	{
		name: "Chào mừng anh/chị đã đến chơi.",
		character: {
			hiragana: "いらっしゃい。",
			katakana: null,
			kanji: null,
		},
		sound: "welcome",
	},
	{
		name: "Mời anh/chị vào.",
		character: {
			hiragana: "どうぞ　おあがりください。",
			katakana: null,
			kanji: null,
		},
		sound: "please_come_in",
	},
	{
		name: "Xin thất lễ",
		character: {
			hiragana: "しつれいします。",
			katakana: null,
			kanji: null,
		},
		sound: "excuse_me",
	},
	{
		name: "Anh/chị dùng [] có được không?",
		character: {
			hiragana: "[～は]いかがですか。",
			katakana: null,
			kanji: null,
		},
		sound: "how_about",
	},
	{
		name: "Xin nhận . (cách nói dùng trước khi ăn hoặc uống)",
		character: {
			hiragana: "いただきます。",
			katakana: null,
			kanji: null,
		},
		sound: "thank_you_for_the_meal_before",
	},
	{
		name: "Xin cám ơn anh/chị đã đãi tôi bữa ăn ngon (cách nói dùng sau khi ăn xong)",
		character: {
			hiragana: "ごちそうさま［でした］",
			katakana: null,
			kanji: null,
		},
		sound: "thank_you_for_the_meal_after",
	},
	{
		name: "Tây Ban Nha",
		character: {
			hiragana: null,
			katakana: "スペイン",
			kanji: null,
		},
		sound: "spain",
	},
];

export const lessonEight: Iword[] = [
	{
		name: "đẹp trai",
		character: {
			hiragana: null,
			katakana: "ハンサム",
			kanji: null,
		},
		sound: "handsome",
		note: "Tính từ đuôi な"
	},
	{
		name: "đẹp, sạch",
		character: {
			hiragana: "きれい",
			katakana: null,
			kanji: null,
		},
		sound: "beautiful_clean",
		note: "Tính từ đuôi な"
	},
	{
		name: "yên tĩnh",
		character: {
			hiragana: "しずか",
			katakana: null,
			kanji: "静か",
		},
		sound: "quiet",
		note: "Tính từ đuôi な"
	},
	{
		name: "náo nhiệt",
		character: {
			hiragana: "にぎやか",
			katakana: null,
			kanji: null,
		},
		sound: "lively",
		note: "Tính từ đuôi な"
	},
	{
		name: "nổi tiếng",
		character: {
			hiragana: "ゆうめい",
			katakana: null,
			kanji: "有名",
		},
		sound: "famous",
		note: "Tính từ đuôi な"
	},
	{
		name: "tốt bụng, thân thiện",
		character: {
			hiragana: "しんせつ",
			katakana: null,
			kanji: "親切",
		},
		sound: "kind_friendly",
		note: "Tính từ đuôi な"
	},
	{
		name: "khỏe",
		character: {
			hiragana: "げんき",
			katakana: null,
			kanji: "元気",
		},
		sound: "healthy",
		note: "Tính từ đuôi な"
	},
	{
		name: "rảnh rỗi",
		character: {
			hiragana: "ひま",
			katakana: null,
			kanji: "暇",
		},
		sound: "free_time",
		note: "Tính từ đuôi な"
	},
	{
		name: "tiện lợi",
		character: {
			hiragana: "べんり",
			katakana: null,
			kanji: "便利",
		},
		sound: "convenient",
		note: "Tính từ đuôi な"
	},
	{
		name: "đẹp, hay, tuyệt vời",
		character: {
			hiragana: "すてき",
			katakana: null,
			kanji: null,
		},
		sound: "lovely",
		note: "Tính từ đuôi な"
	},
	{
		name: "lớn, to",
		character: {
			hiragana: "おおきい",
			katakana: null,
			kanji: "大きい",
		},
		sound: "big_large",
		note: "Tính từ đuôi い"
	},
	{
		name: "bé, nhỏ",
		character: {
			hiragana: "ちいさい",
			katakana: null,
			kanji: "小さい",
		},
		sound: "small",
		note: "Tính từ đuôi い"
	},
	{
		name: "mới",
		character: {
			hiragana: "あたらしい",
			katakana: null,
			kanji: "新しい",
		},
		sound: "new",
		note: "Tính từ đuôi い"
	},
	{
		name: "cũ",
		character: {
			hiragana: "ふるい",
			katakana: null,
			kanji: "古い",
		},
		sound: "old",
		note: "Tính từ đuôi い"
	},
	{
		name: "tốt",
		character: {
			hiragana: "いい, よい",
			katakana: null,
			kanji: null,
		},
		sound: "good",
		note: "Tính từ đuôi い"
	},
	{
		name: "xấu",
		character: {
			hiragana: "わるい",
			katakana: null,
			kanji: "悪い",
		},
		sound: "bad",
		note: "Tính từ đuôi い"
	},
	{
		name: "nóng",
		character: {
			hiragana: "あつい",
			katakana: null,
			kanji: "暑い, 熱い",
		},
		sound: "hot",
		note: "Tính từ đuôi い"
	},
	{
		name: "lạnh, rét (dùng cho thời tiết)",
		character: {
			hiragana: "さむい",
			katakana: null,
			kanji: "寒い",
		},
		sound: "cold_weather",
		note: "Tính từ đuôi い"
	},
	{
		name: "lạnh, buốt (dùng cho cảm giác)",
		character: {
			hiragana: "つめたい",
			katakana: null,
			kanji: "冷たい",
		},
		sound: "cold_feel",
		note: "Tính từ đuôi い"
	},
	{
		name: "khó",
		character: {
			hiragana: "むずかしい",
			katakana: null,
			kanji: "難しい",
		},
		sound: "difficult",
		note: "Tính từ đuôi い"
	},
	{
		name: "dễ",
		character: {
			hiragana: "やさしい",
			katakana: null,
			kanji: "易しい",
		},
		sound: "easy",
		note: "Tính từ đuôi い"
	},
	{
		name: "đắt, cao",
		character: {
			hiragana: "たかい",
			katakana: null,
			kanji: "高い",
		},
		sound: "expensive_high",
		note: "Tính từ đuôi い"
	},
	{
		name: "rẻ",
		character: {
			hiragana: "やすい",
			katakana: null,
			kanji: "安い",
		},
		sound: "cheap",
		note: "Tính từ đuôi い"
	},
	{
		name: "thấp",
		character: {
			hiragana: "ひくい",
			katakana: null,
			kanji: "低い",
		},
		sound: "low",
		note: "Tính từ đuôi い"
	},
	{
		name: "thú vị, hay",
		character: {
			hiragana: "おもしろい",
			katakana: null,
			kanji: null,
		},
		sound: "interesting",
		note: "Tính từ đuôi い"
	},
	{
		name: "ngon",
		character: {
			hiragana: "おいしい",
			katakana: null,
			kanji: null,
		},
		sound: "delicious",
		note: "Tính từ đuôi い"
	},
	{
		name: "bận",
		character: {
			hiragana: "いそがしい",
			katakana: null,
			kanji: "忙しい",
		},
		sound: "busy",
		note: "Tính từ đuôi い"
	},
	{
		name: "vui",
		character: {
			hiragana: "たのしい",
			katakana: null,
			kanji: "楽しい",
		},
		sound: "fun",
		note: "Tính từ đuôi い"
	},
	{
		name: "trắng",
		character: {
			hiragana: "しろい",
			katakana: null,
			kanji: "白い",
		},
		sound: "white",
		note: "Tính từ đuôi い"
	},
	{
		name: "đen",
		character: {
			hiragana: "くろい",
			katakana: null,
			kanji: "黒い",
		},
		sound: "black",
		note: "Tính từ đuôi い"
	},
	{
		name: "đỏ",
		character: {
			hiragana: "あかい",
			katakana: null,
			kanji: "赤い",
		},
		sound: "red",
		note: "Tính từ đuôi い"
	},
	{
		name: "xanh da trời",
		character: {
			hiragana: "あおい",
			katakana: null,
			kanji: "青い",
		},
		sound: "blue",
		note: "Tính từ đuôi い"
	},
	{
		name: "anh đào (hoa, cây)",
		character: {
			hiragana: "さくら",
			katakana: null,
			kanji: "桜",
		},
		sound: "cherry_blossom",
		note: "Danh từ"
	},
	{
		name: "núi",
		character: {
			hiragana: "やま",
			katakana: null,
			kanji: "山",
		},
		sound: "mountain",
		note: "Danh từ"
	},
	{
		name: "thị trấn, thị xã, thành phố",
		character: {
			hiragana: "まち",
			katakana: null,
			kanji: "町",
		},
		sound: "town_city",
		note: "Danh từ"
	},
	{
		name: "đồ ăn",
		character: {
			hiragana: "たべもの",
			katakana: null,
			kanji: "食べ物",
		},
		sound: "food",
		note: "Danh từ"
	},
	{
		name: "nơi, chỗ",
		character: {
			hiragana: "ところ",
			katakana: null,
			kanji: "所",
		},
		sound: "place",
		note: "Danh từ"
	},
	{
		name: "kí túc xá",
		character: {
			hiragana: "りょう",
			katakana: null,
			kanji: "寮",
		},
		sound: "dormitory",
		note: "Danh từ"
	},
	{
		name: "nhà hàng",
		character: {
			hiragana: null,
			katakana: "レストラン",
			kanji: null,
		},
		sound: "restaurant",
		note: "Danh từ"
	},
	{
		name: "cuộc sống, sinh hoạt",
		character: {
			hiragana: "せいかつ",
			katakana: null,
			kanji: "生活",
		},
		sound: "life",
		note: "Danh từ"
	},
	{
		name: "công việc (～をします：làm việc)",
		character: {
			hiragana: "しごと",
			katakana: null,
			kanji: "仕事",
		},
		sound: "work",
		note: "Danh từ"
	},
	{
		name: "thế nào",
		character: {
			hiragana: "どう",
			katakana: null,
			kanji: null,
		},
		sound: "how",
		note: "Từ hỏi"
	},
	{
		name: " như thế nào",
		character: {
			hiragana: "どんな～",
			katakana: null,
			kanji: null,
		},
		sound: "what_about",
		note: "Phó từ"
	},
	{
		name: "rất, lắm",
		character: {
			hiragana: "とても",
			katakana: null,
			kanji: null,
		},
		sound: "very",
		note: "Phó từ"
	},
	{
		name: "không lắm",
		character: {
			hiragana: "あまり",
			katakana: null,
			kanji: null,
		},
		sound: "not_much",
		note: "Phó từ"
	},
	{
		name: "và, thêm nữa (dùng để nối 2 câu)",
		character: {
			hiragana: "そして",
			katakana: null,
			kanji: null,
		},
		sound: "and",
	},
	{
		name: " nhưng ",
		character: {
			hiragana: "～が、～",
			katakana: null,
			kanji: null,
		},
		sound: "but",
	},
	{
		name: "Anh/chị có khỏe không?",
		character: {
			hiragana: "おげんきですか",
			katakana: null,
			kanji: "お元気ですか",
		},
		sound: "how_are_you",
	},
	{
		name: "Thế à. Như vậy nhỉ",
		character: {
			hiragana: "そうですね",
			katakana: null,
			kanji: null,
		},
		sound: "is_that_so",
	},
	{
		name: "một chén/ly nữa được không ạ?",
		character: {
			hiragana: "もういっぱいいかがですか",
			katakana: null,
			kanji: "もう一杯いかがですか",
		},
		sound: "one_more_cup",
	},
	{
		name: "Không, đủ rồi ạ.",
		character: {
			hiragana: "いいえけっこうです",
			katakana: null,
			kanji: null,
		},
		sound: "no_thank_you",
	},
	{
		name: "Đã ~ rồi nhỉ./ Đã đến lúc tôi phải về.",
		character: {
			hiragana: "もう～です[ね]",
			katakana: null,
			kanji: null,
		},
		sound: "already",
	},
	{
		name: "Sắp đến lúc tôi phải xin phép rồi./ Đã đến lúc tôi phải về.",
		character: {
			hiragana: "そろそろしつれいします",
			katakana: null,
			kanji: "そろそろ失礼します",
		},
		sound: "excuse_me_soon",
	},
	{
		name: "Không có gì./ Không sao cả.",
		character: {
			hiragana: "いいえ",
			katakana: null,
			kanji: "いいえ",
		},
		sound: "nothing",
	},
	{
		name: "Lần sau anh/ chị lại đến chơi nhé.",
		character: {
			hiragana: "またいらっしゃってください",
			katakana: null,
			kanji: null,
		},
		sound: "please_visit_again",
	},
	{
		name: "Thượng Hải",
		character: {
			hiragana: "しゃんはい",
			katakana: null,
			kanji: "上海",
		},
		sound: "shanghai",
	},
	{
		name: "Chùa Kinkaku-ji (chùa vàng)",
		character: {
			hiragana: "きんかくじ",
			katakana: null,
			kanji: "金閣寺",
		},
		sound: "kinkaku_ji",
	},
	{
		name: "Công viên Nara",
		character: {
			hiragana: "ならこうえん",
			katakana: null,
			kanji: "奈良公園",
		},
		sound: "nara_park",
	},
	{
		name: "Núi Phú Sĩ (ngọn núi cao nhất Nhật Bản)",
		character: {
			hiragana: "ふじさん",
			katakana: null,
			kanji: "富士山",
		},
		sound: "mt_fuji",
	},
	{
		name: "bảy chàng võ sĩ Samurai (tên phim)",
		character: {
			hiragana: "しちにんのさむらい",
			katakana: null,
			kanji: "七人の侍",
		},
		sound: "seven_samurai",
	},
];

export const lessonNine: Iword[] = [
	{
		name: "hiểu, nắm được",
		character: {
			hiragana: "わかります",
			katakana: null,
			kanji: null,
		},
		sound: "understand",
		note: "Động từ"
	},
	{
		name: "có (sở hữu)",
		character: {
			hiragana: "あります",
			katakana: null,
			kanji: null,
		},
		sound: "have",
		note: "Động từ"
	},
	{
		name: "thích",
		character: {
			hiragana: "すき",
			katakana: null,
			kanji: "好き",
		},
		sound: "like",
		note: "Tính từ"
	},
	{
		name: "ghét, không thích",
		character: {
			hiragana: "きらい",
			katakana: null,
			kanji: "嫌い",
		},
		sound: "dislike",
		note: "Tính từ"
	},
	{
		name: "giỏi, khéo",
		character: {
			hiragana: "じょうず",
			katakana: null,
			kanji: "上手",
		},
		sound: "skilled",
		note: "Tính từ"
	},
	{
		name: "kém",
		character: {
			hiragana: "へた",
			katakana: null,
			kanji: "下手",
		},
		sound: "unskilled",
		note: "Tính từ"
	},
	{
		name: "đồ uống",
		character: {
			hiragana: "のみもの",
			katakana: null,
			kanji: "飲み物",
		},
		sound: "beverage",
		note: "Tính từ"
	},
	{
		name: "món ăn, việc nấu ăn",
		character: {
			hiragana: "りょうり",
			katakana: null,
			kanji: "料理",
		},
		sound: "cuisine",
		note: "Tính từ"
	},
	{
		name: "thể thao (～をします：chơi thể thao)",
		character: {
			hiragana: null,
			katakana: "スポーツ",
			kanji: null,
		},
		sound: "sports",
		note: "Tính từ"
	},
	{
		name: "bóng chày (～をします：chơi bóng chày)",
		character: {
			hiragana: "やきゅう",
			katakana: null,
			kanji: "野球",
		},
		sound: "baseball",
		note: "Danh từ"
	},
	{
		name: "nhảy, khiêu vũ(～をします：nhảy, khiêu vũ)",
		character: {
			hiragana: null,
			katakana: "ダンス",
			kanji: null,
		},
		sound: "dance",
		note: "Danh từ"
	},
	{
		name: "du lịch, chuyến du lịch",
		character: {
			hiragana: "りょこう",
			katakana: null,
			kanji: "旅行",
		},
		sound: "travel",
		note: "Danh từ"
	},
	{
		name: "âm nhạc",
		character: {
			hiragana: "おんがく",
			katakana: null,
			kanji: "音楽",
		},
		sound: "music",
		note: "Danh từ"
	},
	{
		name: "bài hát",
		character: {
			hiragana: "うた",
			katakana: null,
			kanji: "歌",
		},
		sound: "song",
		note: "Danh từ"
	},
	{
		name: "nhạc cổ điển",
		character: {
			hiragana: null,
			katakana: "クラシック",
			kanji: null,
		},
		sound: "classical_music",
		note: "Danh từ"
	},
	{
		name: "nhạc jazz",
		character: {
			hiragana: null,
			katakana: "ジャズ",
			kanji: null,
		},
		sound: "jazz_music",
		note: "Danh từ"
	},
	{
		name: "buổi hòa nhạc",
		character: {
			hiragana: null,
			katakana: "コンサート",
			kanji: null,
		},
		sound: "concert",
		note: "Danh từ"
	},
	{
		name: "karaoke",
		character: {
			hiragana: null,
			katakana: "カラオケ",
			kanji: null,
		},
		sound: "karaoke",
		note: "Danh từ"
	},
	{
		name: "Kabuki (một loại ca kịch truyền thống của Nhật)",
		character: {
			hiragana: "かぶき",
			katakana: null,
			kanji: "歌舞伎",
		},
		sound: "kabuki",
		note: "Danh từ"
	},
	{
		name: "tranh, hội họa",
		character: {
			hiragana: "え",
			katakana: null,
			kanji: "絵",
		},
		sound: "painting",
		note: "Danh từ"
	},
	{
		name: "chữ",
		character: {
			hiragana: "じ",
			katakana: null,
			kanji: "字",
		},
		sound: "character",
		note: "Danh từ"
	},
	{
		name: "chữ hán",
		character: {
			hiragana: "かんじ",
			katakana: null,
			kanji: "漢字",
		},
		sound: "kanji",
		note: "Danh từ"
	},
	{
		name: "chữ Hiragana",
		character: {
			hiragana: "ひらがな",
			katakana: null,
			kanji: null,
		},
		sound: "hiragana",
		note: "Danh từ"
	},
	{
		name: "Chữ Katakana",
		character: {
			hiragana: "かたかな",
			katakana: null,
			kanji: null,
		},
		sound: "katakana",
		note: "Danh từ"
	},
	{
		name: "chữ La Mã",
		character: {
			hiragana: "ローマじ",
			katakana: null,
			kanji: "ローマ字",
		},
		sound: "roman_alphabet",
		note: "Danh từ"
	},
	{
		name: "tiền lẻ",
		character: {
			hiragana: "こまかいおかね",
			katakana: null,
			kanji: "細かいお金",
		},
		sound: "small_change",
		note: "Danh từ"
	},
	{
		name: "vé (xem hòa nhạc, xem phim)",
		character: {
			hiragana: null,
			katakana: "チケット",
			kanji: null,
		},
		sound: "ticket",
		note: "Danh từ"
	},
	{
		name: "thời gian",
		character: {
			hiragana: "じかん",
			katakana: null,
			kanji: "時間",
		},
		sound: "time",
		note: "Danh từ"
	},
	{
		name: "việc bận, công chuyện",
		character: {
			hiragana: "ようじ",
			katakana: null,
			kanji: "用事",
		},
		sound: "errand",
		note: "Danh từ"
	},
	{
		name: "cuộc hẹn, lời hứa",
		character: {
			hiragana: "やくそく",
			katakana: null,
			kanji: "約束",
		},
		sound: "appointment_promise",
		note: "Danh từ"
	},
	{
		name: "việc làm thêm",
		character: {
			hiragana: null,
			katakana: "アルバイト",
			kanji: null,
		},
		sound: "part_time_job",
		note: "Danh từ"
	},
	{
		name: "chồng (dùng khi nói về chồng người khác)",
		character: {
			hiragana: "ごしゅじん",
			katakana: null,
			kanji: "ご主人",
		},
		sound: "husband_other",
		note: "Danh từ"
	},
	{
		name: "chồng (dùng khi nói về chồng mình)",
		character: {
			hiragana: "おっと/しゅじん",
			katakana: null,
			kanji: "夫 /主人",
		},
		sound: "husband_my",
		note: "Danh từ"
	},
	{
		name: "vợ (dùng khi nói về vợ người khác)",
		character: {
			hiragana: "おくさん",
			katakana: null,
			kanji: "奥さん",
		},
		sound: "wife_other",
		note: "Danh từ"
	},
	{
		name: "vợ (dùng khi nói về vợ mình)",
		character: {
			hiragana: "つま/かない",
			katakana: null,
			kanji: "妻/家内",
		},
		sound: "wife_my",
		note: "Danh từ"
	},
	{
		name: "con cái",
		character: {
			hiragana: "こども",
			katakana: null,
			kanji: "子ども",
		},
		sound: "children",
		note: "Danh từ"
	},
	{
		name: "tốt, rõ (chỉ mức độ)",
		character: {
			hiragana: "よく",
			katakana: null,
			kanji: null,
		},
		sound: "well",
		note: "Phó từ chỉ mức độ + số lượng tiếng Nhật"
	},
	{
		name: "đại khái, đại thể",
		character: {
			hiragana: "だいたい",
			katakana: null,
			kanji: null,
		},
		sound: "approximately",
		note: "Phó từ chỉ mức độ + số lượng tiếng Nhật"
	},
	{
		name: "nhiều",
		character: {
			hiragana: "たくさん",
			katakana: null,
			kanji: null,
		},
		sound: "many",
		note: "Phó từ chỉ mức độ + số lượng tiếng Nhật"
	},
	{
		name: "ít, một ít",
		character: {
			hiragana: "すこし",
			katakana: null,
			kanji: "少し",
		},
		sound: "few",
		note: "Phó từ chỉ mức độ + số lượng tiếng Nhật"
	},
	{
		name: "hoàn toàn  không",
		character: {
			hiragana: "ぜんぜん",
			katakana: null,
			kanji: "全然",
		},
		sound: "not_at_all",
		note: "Phó từ chỉ mức độ + số lượng tiếng Nhật"
	},
	{
		name: "sớm, nhanh",
		character: {
			hiragana: "はやく",
			katakana: null,
			kanji: "早く, 速く",
		},
		sound: "early",
		note: "Phó từ chỉ mức độ + số lượng tiếng Nhật"
	},
	{
		name: "vì ",
		character: {
			hiragana: "～から",
			katakana: null,
			kanji: null,
		},
		sound: "because_of",
	},
	{
		name: "tại sao",
		character: {
			hiragana: "どうして",
			katakana: null,
			kanji: null,
		},
		sound: "why",
	},
	{
		name: "Hãy cho tôi mượn.",
		character: {
			hiragana: "貸してください",
			katakana: null,
			kanji: "貸してください",
		},
		sound: "please_borrow",
	},
	{
		name: "Được chứ./ Được ạ.",
		character: {
			hiragana: "いいですよ",
			katakana: null,
			kanji: "いいですよ",
		},
		sound: "ok",
	},
	{
		name: "Thật đáng tiếc nhỉ./ buồn nhỉ.",
		character: {
			hiragana: "残念ですね",
			katakana: null,
			kanji: "残念ですね",
		},
		sound: "shame",
	},
	{
		name: "Ah",
		character: {
			hiragana: "ああ",
			katakana: null,
			kanji: null,
		},
		sound: "ah",
	},
	{
		name: "Anh/chị cùng  (làm cái gì đó) với chúng tôi được không?",
		character: {
			hiragana: "いっしょにいかがですか。",
			katakana: null,
			kanji: null,
		},
		sound: "join_us",
	},
	{
		name: "[ thì] có lẽ không được rồi.",
		character: {
			hiragana: "[～は]ちょっと…。",
			katakana: null,
			kanji: null,
		},
		sound: "not_possible",
	},
	{
		name: "Không được à?",
		character: {
			hiragana: "だめですか。",
			katakana: null,
			kanji: null,
		},
		sound: "not_allowed",
	},
	{
		name: "Hẹn Anh/Chị lần sau vậy.",
		character: {
			hiragana: null,
			katakana: null,
			kanji: "また　今度　お願いします",
		},
		sound: "see_you_next_time",
	},
];

export const lessonTen: Iword[] = [
	{
		name: "có (tồn tại, dùng cho đồ vật)",
		character: {
			hiragana: "あります",
			katakana: null,
			kanji: null,
		},
		sound: "exist_object",
	},
	{
		name: "có, ở (tồn tại, dùng cho người và động vật)",
		character: {
			hiragana: "います",
			katakana: null,
			kanji: null,
		},
		sound: "exist_person_animal",
	},
	{
		name: "nhiều, đa dạng",
		character: {
			hiragana: "いろいろ[な]",
			katakana: null,
			kanji: null,
		},
		sound: "various",
	},
	{
		name: "người đàn ông",
		character: {
			hiragana: "おとこのひと",
			katakana: null,
			kanji: "男の人",
		},
		sound: "man",
	},
	{
		name: "người đàn bà",
		character: {
			hiragana: "おんなのひと",
			katakana: null,
			kanji: "女の人",
		},
		sound: "woman",
	},
	{
		name: "cậu con trai",
		character: {
			hiragana: "おとこのこ",
			katakana: null,
			kanji: "男の子",
		},
		sound: "boy",
	},
	{
		name: "cô con gái",
		character: {
			hiragana: "おんなのこ",
			katakana: null,
			kanji: "女の子",
		},
		sound: "girl",
	},
	{
		name: "chó",
		character: {
			hiragana: "いぬ",
			katakana: null,
			kanji: "犬",
		},
		sound: "dog",
	},
	{
		name: "mèo",
		character: {
			hiragana: "ねこ",
			katakana: null,
			kanji: "猫",
		},
		sound: "cat",
	},
	{
		name: "gấu trúc",
		character: {
			hiragana: null,
			katakana: "パンダ",
			kanji: null,
		},
		sound: "panda",
	},
	{
		name: "voi",
		character: {
			hiragana: "ぞう",
			katakana: null,
			kanji: "象",
		},
		sound: "elephant",
	},
	{
		name: "cây, gỗ",
		character: {
			hiragana: "き",
			katakana: null,
			kanji: "木",
		},
		sound: "tree_wood",
	},
	{
		name: "vật, đồ vật",
		character: {
			hiragana: "もの",
			katakana: null,
			kanji: "物",
		},
		sound: "thing",
	},
	{
		name: "Pin",
		character: {
			hiragana: "でんち",
			katakana: null,
			kanji: "電池",
		},
		sound: "battery",
	},
	{
		name: "hộp",
		character: {
			hiragana: "はこ",
			katakana: null,
			kanji: "箱",
		},
		sound: "box",
	},
	{
		name: "công tắc",
		character: {
			hiragana: null,
			katakana: "スイッチ",
			kanji: null,
		},
		sound: "switch",
	},
	{
		name: "tủ lạnh",
		character: {
			hiragana: "れいぞうこ",
			katakana: null,
			kanji: "冷蔵庫",
		},
		sound: "refrigerator",
	},
	{
		name: "bàn",
		character: {
			hiragana: null,
			katakana: "テーブル",
			kanji: null,
		},
		sound: "table",
	},
	{
		name: "giường",
		character: {
			hiragana: null,
			katakana: "ベッド",
			kanji: null,
		},
		sound: "bed",
	},
	{
		name: "giá sách",
		character: {
			hiragana: "たな",
			katakana: null,
			kanji: "棚",
		},
		sound: "shelf",
	},
	{
		name: "cửa",
		character: {
			hiragana: null,
			katakana: "ドア",
			kanji: null,
		},
		sound: "door",
	},
	{
		name: "cửa sổ",
		character: {
			hiragana: "まど",
			katakana: null,
			kanji: "窓",
		},
		sound: "window",
	},
	{
		name: "hộp thư, hòm thư",
		character: {
			hiragana: null,
			katakana: "ポスト",
			kanji: null,
		},
		sound: "mailbox",
	},
	{
		name: "toà nhà",
		character: {
			hiragana: null,
			katakana: "ビル",
			kanji: null,
		},
		sound: "building",
	},
	{
		name: "máy rút tiền tự động ATM",
		character: {
			hiragana: "ATM",
			katakana: null,
			kanji: null,
		},
		sound: "atm",
	},
	{
		name: "cửa hàng tiện lợi (mở 24/24)",
		character: {
			hiragana: null,
			katakana: "コンビニ",
			kanji: null,
		},
		sound: "convenience_store",
	},
	{
		name: "công viên",
		character: {
			hiragana: "こうえん",
			katakana: null,
			kanji: "公園",
		},
		sound: "park",
	},
	{
		name: "quán giải khát, quán cà-phê",
		character: {
			hiragana: "きっさてん",
			katakana: null,
			kanji: "喫茶店",
		},
		sound: "cafe",
	},
	{
		name: "hiệu , cửa hàng ",
		character: {
			hiragana: "～や",
			katakana: null,
			kanji: "～屋",
		},
		sound: "store",
	},
	{
		name: "bến xe, điểm lên xuống xe",
		character: {
			hiragana: "のりば",
			katakana: null,
			kanji: "乗り場",
		},
		sound: "bus_stop",
	},
	{
		name: "tỉnh",
		character: {
			hiragana: "けん",
			katakana: null,
			kanji: "県",
		},
		sound: "prefecture",
	},
	{
		name: "trên",
		character: {
			hiragana: "うえ",
			katakana: null,
			kanji: "上",
		},
		sound: "above",
	},
	{
		name: "dưới",
		character: {
			hiragana: "した",
			katakana: null,
			kanji: "下",
		},
		sound: "below",
	},
	{
		name: "trước",
		character: {
			hiragana: "まえ",
			katakana: null,
			kanji: "前",
		},
		sound: "front",
	},
	{
		name: "sau",
		character: {
			hiragana: "うしろ",
			katakana: null,
			kanji: null,
		},
		sound: "behind",
	},
	{
		name: "phải",
		character: {
			hiragana: "みぎ",
			katakana: null,
			kanji: "右",
		},
		sound: "right",
	},
	{
		name: "trái",
		character: {
			hiragana: "ひだり",
			katakana: null,
			kanji: "左",
		},
		sound: "left",
	},
	{
		name: "trong, giữa",
		character: {
			hiragana: "なか",
			katakana: null,
			kanji: "中",
		},
		sound: "inside",
	},
	{
		name: "ngoài",
		character: {
			hiragana: "そと",
			katakana: null,
			kanji: "外",
		},
		sound: "outside",
	},
	{
		name: "bên cạnh",
		character: {
			hiragana: "となり",
			katakana: null,
			kanji: "隣",
		},
		sound: "next_to",
	},
	{
		name: "gần",
		character: {
			hiragana: "ちかく",
			katakana: null,
			kanji: "近く",
		},
		sound: "near",
	},
	{
		name: "giữa",
		character: {
			hiragana: "あいだ",
			katakana: null,
			kanji: "間",
		},
		sound: "between",
	},
	{
		name: "và , [v.v.]",
		character: {
			hiragana: "～や～[など] ",
			katakana: null,
			kanji: null,
		},
		sound: "and_other",
	},
	{
		name: "[Cảm ơn] Tôi xin lỗi.",
		character: {
			hiragana: "[どうも]すみません。",
			katakana: null,
			kanji: null,
		},
		sound: "sorry",
	},
	{
		name: "nampla, nước mắn",
		character: {
			hiragana: null,
			katakana: "ナンプラー",
			kanji: null,
		},
		sound: "fish_sauce",
	},
	{
		name: "góc, khu vực",
		character: {
			hiragana: null,
			katakana: "コーナー",
			kanji: null,
		},
		sound: "corner",
	},
	{
		name: "ở dưới cùng",
		character: {
			hiragana: "いちばん下",
			katakana: null,
			kanji: null,
		},
		sound: "bottom",
	},
	{
		name: "Công viên Tokyo Disneyland",
		character: {
			hiragana: null,
			katakana: null,
			kanji: "東京ディズニーランド",
		},
		sound: "tokyo_disneyland",
	},
	{
		name: "tên một siêu thị (giả định)",
		character: {
			hiragana: null,
			katakana: "アジアストア",
			kanji: null,
		},
		sound: "asia_store",
	},
];

export const lessonEleven: Iword[] = [
	{
		name: "có [con]",
		character: {
			hiragana: "こどもが～います",
			katakana: null,
			kanji: "子供が～います",
		},
		sound: "have_child",
	},
	{
		name: "ở [Nhật]",
		character: {
			hiragana: "にほんに～います",
			katakana: null,
			kanji: "日本に～います",
		},
		sound: "live_in_japan",
	},
	{
		name: "mất, tốn (thời gian, tiền bạc)",
		character: {
			hiragana: "かかります",
			katakana: null,
			kanji: null,
		},
		sound: "cost",
	},
	{
		name: "nghỉ [làm việc]",
		character: {
			hiragana: "やすみます",
			katakana: null,
			kanji: "休みます",
		},
		sound: "take_a_break",
	},
	{
		name: "một cái (dùng để đếm đồ vật)",
		character: {
			hiragana: "ひとつ",
			katakana: null,
			kanji: null,
		},
		sound: "one_item",
	},
	{
		name: "hai cái",
		character: {
			hiragana: "ふたつ",
			katakana: null,
			kanji: null,
		},
		sound: "two_items",
	},
	{
		name: "ba cái",
		character: {
			hiragana: "みっつ",
			katakana: null,
			kanji: null,
		},
		sound: "three_items",
	},
	{
		name: "bốn cái",
		character: {
			hiragana: "よっつ",
			katakana: null,
			kanji: null,
		},
		sound: "four_items",
	},
	{
		name: "năm cái",
		character: {
			hiragana: "いつつ",
			katakana: null,
			kanji: null,
		},
		sound: "five_items",
	},
	{
		name: "sáu cái",
		character: {
			hiragana: "むっつ",
			katakana: null,
			kanji: null,
		},
		sound: "six_items",
	},
	{
		name: "bảy cái",
		character: {
			hiragana: "ななつ",
			katakana: null,
			kanji: null,
		},
		sound: "seven_items",
	},
	{
		name: "tám cái",
		character: {
			hiragana: "やっつ",
			katakana: null,
			kanji: null,
		},
		sound: "eight_items",
	},
	{
		name: "chín cái",
		character: {
			hiragana: "ここのつ",
			katakana: null,
			kanji: null,
		},
		sound: "nine_items",
	},
	{
		name: "mười cái",
		character: {
			hiragana: "とお",
			katakana: null,
			kanji: null,
		},
		sound: "ten_items",
	},
	{
		name: "mấy cái, bao nhiêu cái",
		character: {
			hiragana: "いくつ",
			katakana: null,
			kanji: null,
		},
		sound: "how_many_items",
	},
	{
		name: "một người",
		character: {
			hiragana: "ひとり",
			katakana: null,
			kanji: "１人",
		},
		sound: "one_person",
	},
	{
		name: "hai người",
		character: {
			hiragana: "ふたり",
			katakana: null,
			kanji: "２人",
		},
		sound: "two_people",
	},
	{
		name: "- người",
		character: {
			hiragana: "―にん",
			katakana: null,
			kanji: "－人",
		},
		sound: "count_people",
	},
	{
		name: "- cái (dùng để đếm máy móc, xe cộ v.v.)",
		character: {
			hiragana: "―だい",
			katakana: null,
			kanji: "－台",
		},
		sound: "count_machinery_vehicles",
	},
	{
		name: "tờ, tấm (dùng để đếm những vật mỏng như giấy, con tem v.v.)",
		character: {
			hiragana: "―まい",
			katakana: null,
			kanji: "－枚",
		},
		sound: "count_thin_items",
	},
	{
		name: "- lần",
		character: {
			hiragana: "―かい",
			katakana: null,
			kanji: "―回",
		},
		sound: "number_of_times",
	},
	{
		name: "táo",
		character: {
			hiragana: "りんご",
			katakana: null,
			kanji: null,
		},
		sound: "apple",
	},
	{
		name: "quýt",
		character: {
			hiragana: "みかん",
			katakana: null,
			kanji: null,
		},
		sound: "mandarin_orange",
	},
	{
		name: "bánh San Uých",
		character: {
			hiragana: null,
			katakana: "サンドイッチ",
			kanji: null,
		},
		sound: "sandwich",
	},
	{
		name: "món [cơm] ca-ri",
		character: {
			hiragana: null,
			katakana: "カレー[ライス]",
			kanji: null,
		},
		sound: "curry_rice",
	},
	{
		name: "kem",
		character: {
			hiragana: null,
			katakana: "アイスクリーム",
			kanji: null,
		},
		sound: "ice_cream",
	},
	{
		name: "tem",
		character: {
			hiragana: "きって",
			katakana: null,
			kanji: "切手",
		},
		sound: "stamp",
	},
	{
		name: "bưu thiếp",
		character: {
			hiragana: "はがき",
			katakana: null,
			kanji: null,
		},
		sound: "postcard",
	},
	{
		name: "phong bì",
		character: {
			hiragana: "ふうとう",
			katakana: null,
			kanji: "封筒",
		},
		sound: "envelope",
	},
	{
		name: "bố mẹ",
		character: {
			hiragana: "りょうしん",
			katakana: null,
			kanji: "両親",
		},
		sound: "parents",
	},
	{
		name: "anh chị em",
		character: {
			hiragana: "きょうだい",
			katakana: null,
			kanji: "兄弟",
		},
		sound: "siblings",
	},
	{
		name: "anh trai",
		character: {
			hiragana: "あに",
			katakana: null,
			kanji: "兄",
		},
		sound: "older_brother",
	},
	{
		name: "anh trai (dùng cho người khác)",
		character: {
			hiragana: "おにいさん",
			katakana: null,
			kanji: "お兄さん",
		},
		sound: "older_brother_other",
	},
	{
		name: "chị gái",
		character: {
			hiragana: "あね",
			katakana: null,
			kanji: "姉",
		},
		sound: "older_sister",
	},
	{
		name: "chị gái (dùng cho người khác)",
		character: {
			hiragana: "おねえさん",
			katakana: null,
			kanji: "お姉さん",
		},
		sound: "older_sister_other",
	},
	{
		name: "em trai",
		character: {
			hiragana: "おとうと",
			katakana: null,
			kanji: "弟",
		},
		sound: "younger_brother",
	},
	{
		name: "em trai (dùng cho người khác)",
		character: {
			hiragana: "おとうとさん",
			katakana: null,
			kanji: "弟さん",
		},
		sound: "younger_brother_other",
	},
	{
		name: "em gái",
		character: {
			hiragana: "いもうと",
			katakana: null,
			kanji: "妹",
		},
		sound: "younger_sister",
	},
	{
		name: "em gái (dùng cho người khác)",
		character: {
			hiragana: "いもうとさん",
			katakana: null,
			kanji: "妹さん",
		},
		sound: "younger_sister_other",
	},
	{
		name: "nước ngoài",
		character: {
			hiragana: "がいこく",
			katakana: null,
			kanji: "外国",
		},
		sound: "foreign_country",
	},
	{
		name: "lưu học sinh, sinh viên nước ngoài",
		character: {
			hiragana: "りゅうがくせい",
			katakana: null,
			kanji: "留学生",
		},
		sound: "exchange_student",
	},
	{
		name: "lớp học",
		character: {
			hiragana: null,
			katakana: "クラス",
			kanji: null,
		},
		sound: "class",
	},
	{
		name: "- tiếng",
		character: {
			hiragana: "―じかん",
			katakana: null,
			kanji: "―時間",
		},
		sound: "hours",
	},
	{
		name: "- tuần",
		character: {
			hiragana: "―しゅうかん",
			katakana: null,
			kanji: "―週間",
		},
		sound: "weeks",
	},
	{
		name: "- tháng",
		character: {
			hiragana: "―かげつ",
			katakana: null,
			kanji: "－か月",
		},
		sound: "months",
	},
	{
		name: "- năm",
		character: {
			hiragana: "―ねん",
			katakana: null,
			kanji: "―年",
		},
		sound: "years",
	},
	{
		name: "khoảng ",
		character: {
			hiragana: "～ぐらい",
			katakana: null,
			kanji: null,
		},
		sound: "about",
	},
	{
		name: "bao lâu",
		character: {
			hiragana: "どのくらい",
			katakana: null,
			kanji: null,
		},
		sound: "how_long",
	},
	{
		name: "tổng cộng",
		character: {
			hiragana: "ぜんぶで",
			katakana: null,
			kanji: "全部で",
		},
		sound: "total",
	},
	{
		name: "tất cả",
		character: {
			hiragana: "みんな",
			katakana: null,
			kanji: null,
		},
		sound: "everyone",
	},
	{
		name: "chỉ ",
		character: {
			hiragana: "～だけ",
			katakana: null,
			kanji: null,
		},
		sound: "only",
	},
	{
		name: "Tôi đã rõ rồi ạ (thưa ông/bà)",
		character: {
			hiragana: "かしこまりました。",
			katakana: null,
			kanji: null,
		},
		sound: "understood",
	},
	{
		name: "Trời đẹp nhỉ.",
		character: {
			hiragana: null,
			katakana: null,
			kanji: "いい[お]天気",
		},
		sound: "nice_weather",
	},
	{
		name: "Anh/ chị đi ra ngoài đấy à?",
		character: {
			hiragana: "お出かけですか。",
			katakana: null,
			kanji: null,
		},
		sound: "going_out",
	},
	{
		name: "Tôi đi  một chút.",
		character: {
			hiragana: "ちょっと～まで。",
			katakana: null,
			kanji: null,
		},
		sound: "going_for_a_while",
	},
	{
		name: "Anh/chị đi nhé.",
		character: {
			hiragana: "行っていらっしゃい。",
			katakana: null,
			kanji: null,
		},
		sound: "take_care",
	},
	{
		name: "Tôi đi đây.",
		character: {
			hiragana: "行ってきます。",
			katakana: null,
			kanji: null,
		},
		sound: "leaving_now",
	},
	{
		name: "gửi bằng đường biển",
		character: {
			hiragana: null,
			katakana: null,
			kanji: "船便",
		},
		sound: "sea_mail",
	},
	{
		name: "gửi bằng đường hàng không",
		character: {
			hiragana: null,
			katakana: null,
			kanji: "航空便",
		},
		sound: "air_mail",
	},
	{
		name: "Nhờ anh/chị.",
		character: {
			hiragana: null,
			katakana: null,
			kanji: "お願いします。",
		},
		sound: "please",
	},
	{
		name: "Úc",
		character: {
			hiragana: null,
			katakana: "オーストラリア",
			kanji: null,
		},
		sound: "australia",
	},
];

export const lessonTwelve: Iword[] = [
	{
		name: "giản đơn",
		character: {
			hiragana: "かんたん",
			katakana: null,
			kanji: "簡単",
		},
		sound: "simple",
	},
	{
		name: "gần",
		character: {
			hiragana: "ちかい",
			katakana: null,
			kanji: "近い",
		},
		sound: "near",
	},
	{
		name: "xa",
		character: {
			hiragana: "とおい",
			katakana: null,
			kanji: "遠い",
		},
		sound: "far",
	},
	{
		name: "nhanh, sớm",
		character: {
			hiragana: "はやい",
			katakana: null,
			kanji: "速い, 早い",
		},
		sound: "fast_early",
	},
	{
		name: "chậm, muộn",
		character: {
			hiragana: "おそい",
			katakana: null,
			kanji: "遅い",
		},
		sound: "slow_late",
	},
	{
		name: "nhiều [người]",
		character: {
			hiragana: "[ひとが～]おおい",
			katakana: null,
			kanji: "[人が～]多い",
		},
		sound: "many_people",
	},
	{
		name: "ít [người]",
		character: {
			hiragana: "[ひとが～]すくない",
			katakana: null,
			kanji: "[人が～]少ない",
		},
		sound: "few_people",
	},
	{
		name: "ấm",
		character: {
			hiragana: "あたたかい",
			katakana: null,
			kanji: "温かい, 暖かい",
		},
		sound: "warm",
	},
	{
		name: "mát",
		character: {
			hiragana: "すずしい",
			katakana: null,
			kanji: "涼しい",
		},
		sound: "cool",
	},
	{
		name: "ngọt",
		character: {
			hiragana: "あまい",
			katakana: null,
			kanji: "甘い",
		},
		sound: "sweet",
	},
	{
		name: "cay",
		character: {
			hiragana: "からい",
			katakana: null,
			kanji: "辛い",
		},
		sound: "spicy",
	},
	{
		name: "nặng",
		character: {
			hiragana: "おもい",
			katakana: null,
			kanji: "重い",
		},
		sound: "heavy",
	},
	{
		name: "nhẹ",
		character: {
			hiragana: "かるい",
			katakana: null,
			kanji: "軽い",
		},
		sound: "light",
	},
	{
		name: "thích, chọn, dùng [cafe]",
		character: {
			hiragana: "[コーヒーが～]いい",
			katakana: null,
			kanji: null,
		},
		sound: "prefer",
	},
	{
		name: "mùa",
		character: {
			hiragana: "きせつ",
			katakana: null,
			kanji: "季節",
		},
		sound: "season",
	},
	{
		name: "mùa xuân",
		character: {
			hiragana: "はる",
			katakana: null,
			kanji: "春",
		},
		sound: "spring",
	},
	{
		name: "mùa hè",
		character: {
			hiragana: "なつ",
			katakana: null,
			kanji: "夏",
		},
		sound: "summer",
	},
	{
		name: "mùa thu",
		character: {
			hiragana: "あき",
			katakana: null,
			kanji: "秋",
		},
		sound: "autumn",
	},
	{
		name: "mùa đông",
		character: {
			hiragana: "ふゆ",
			katakana: null,
			kanji: "冬",
		},
		sound: "winter",
	},
	{
		name: "thời tiết",
		character: {
			hiragana: "てんき",
			katakana: null,
			kanji: "天気",
		},
		sound: "weather",
	},
	{
		name: "mưa",
		character: {
			hiragana: "あめ",
			katakana: null,
			kanji: "雨",
		},
		sound: "rain",
	},
	{
		name: "tuyết",
		character: {
			hiragana: "ゆき",
			katakana: null,
			kanji: "雪",
		},
		sound: "snow",
	},
	{
		name: "có mây",
		character: {
			hiragana: "くもり",
			katakana: null,
			kanji: "曇り",
		},
		sound: "cloudy",
	},
	{
		name: "khách sạn",
		character: {
			hiragana: null,
			katakana: "ホテル",
			kanji: null,
		},
		sound: "hotel",
	},
	{
		name: "sân bay",
		character: {
			hiragana: "くうこう",
			katakana: null,
			kanji: "空港",
		},
		sound: "airport",
	},
	{
		name: "biển, đại dương",
		character: {
			hiragana: "うみ",
			katakana: null,
			kanji: "海",
		},
		sound: "sea_ocean",
	},
	{
		name: "thế giới",
		character: {
			hiragana: "せかい",
			katakana: null,
			kanji: "世界",
		},
		sound: "world",
	},
	{
		name: "tiệc (をします：tổ chức tiệc)",
		character: {
			hiragana: null,
			katakana: "パーティー",
			kanji: null,
		},
		sound: "party",
	},
	{
		name: "lễ hội",
		character: {
			hiragana: "[お]まつり",
			katakana: null,
			kanji: "[お]祭り",
		},
		sound: "festival",
	},
	{
		name: "Sukiyaki (món thịt bò nấu rau)",
		character: {
			hiragana: "すきやき",
			katakana: null,
			kanji: "すき焼き",
		},
		sound: "sukiyaki",
	},
	{
		name: "Sashimi (món gỏi cá sống)",
		character: {
			hiragana: "さしみ",
			katakana: null,
			kanji: "刺身",
		},
		sound: "sashimi",
	},
	{
		name: "Sushi",
		character: {
			hiragana: "[お]すし",
			katakana: null,
			kanji: null,
		},
		sound: "sushi",
	},
	{
		name: "Tempura (món hải sản và rau chiên tẩm bột)",
		character: {
			hiragana: "てんぷら",
			katakana: null,
			kanji: null,
		},
		sound: "tempura",
	},
	{
		name: "thịt heo, thịt lợn",
		character: {
			hiragana: "ぶたにく",
			katakana: null,
			kanji: "豚肉",
		},
		sound: "pork",
	},
	{
		name: "thịt gà",
		character: {
			hiragana: "とりにく",
			katakana: null,
			kanji: "とり肉",
		},
		sound: "chicken",
	},
	{
		name: "thịt bò",
		character: {
			hiragana: "ぎゅうにく",
			katakana: null,
			kanji: "牛肉",
		},
		sound: "beef",
	},
	{
		name: "chanh tây",
		character: {
			hiragana: null,
			katakana: "レモン",
			kanji: null,
		},
		sound: "lemon",
	},
	{
		name: "Nghệ thuật cắm hoa (～をします：cắm hoa)",
		character: {
			hiragana: "いけばな",
			katakana: null,
			kanji: "生け花",
		},
		sound: "flower_arrangement",
	},
	{
		name: "lá đỏ",
		character: {
			hiragana: "もみじ",
			katakana: null,
			kanji: "紅葉",
		},
		sound: "maple_leaf",
	},
	{
		name: "cái nào",
		character: {
			hiragana: "どちら",
			katakana: null,
			kanji: null,
		},
		sound: "which",
	},
	{
		name: "cả hai",
		character: {
			hiragana: "どちらも",
			katakana: null,
			kanji: null,
		},
		sound: "both",
	},
	{
		name: "nhất",
		character: {
			hiragana: "いちばん",
			katakana: null,
			kanji: null,
		},
		sound: "best",
	},
	{
		name: "suốt",
		character: {
			hiragana: "ずっと",
			katakana: null,
			kanji: null,
		},
		sound: "continuously",
	},
	{
		name: "lần đầu tiên",
		character: {
			hiragana: "はじめて",
			katakana: null,
			kanji: "初めて",
		},
		sound: "first_time",
	},
	{
		name: "Tôi đã về đây. (dùng nói khi về đến nhà)",
		character: {
			hiragana: "ただいま",
			katakana: null,
			kanji: null,
		},
		sound: "I_am_home",
	},
	{
		name: "Anh/Chị đã về đấy à. (dùng để nói với ai đó mới về đến nhà)",
		character: {
			hiragana: "おかえりなさい",
			katakana: null,
			kanji: "お帰りなさい",
		},
		sound: "welcome_home",
	},
	{
		name: "Ôi, (người) đông quá nhỉ!",
		character: {
			hiragana: "わあ、すごい人ですね。",
			katakana: null,
			kanji: "人",
		},
		sound: "crowded",
	},
	{
		name: "Tôi mệt rồi",
		character: {
			hiragana: "つかれました",
			katakana: null,
			kanji: "疲れました。",
		},
		sound: "tired",
	},
	{
		name: "Lễ hội Gi-ôn (lễ hội nổi tiếng nhất ở Kyoto)",
		character: {
			hiragana: "ぎおんまつり",
			katakana: null,
			kanji: "祇園祭",
		},
		sound: "gion_festival",
	},
	{
		name: "Hồng Kông",
		character: {
			hiragana: null,
			katakana: "ホンコン",
			kanji: null,
		},
		sound: "hong_kong",
	},
	{
		name: "Singapore",
		character: {
			hiragana: null,
			katakana: "シンガポール",
			kanji: null,
		},
		sound: "singapore",
	},
	{
		name: "tên một siêu thị (giả định)",
		character: {
			hiragana: null,
			katakana: "ＡＣＢストア",
			kanji: null,
		},
		sound: "store_ABC",
	},
	{
		name: "tên một siêu thị (giả định)",
		character: {
			hiragana: null,
			katakana: "ジャパン",
			kanji: null,
		},
		sound: "store_japan",
	},
];

export const lessonThirteen: Iword[] = [
	{
		name: "chơi",
		character: {
			hiragana: "あそびます",
			katakana: null,
			kanji: "遊びます",
		},
		sound: "play",
	},
	{
		name: "bơi",
		character: {
			hiragana: "およぎます",
			katakana: null,
			kanji: "泳ぎます",
		},
		sound: "swim",
	},
	{
		name: "đón",
		character: {
			hiragana: "むかえます",
			katakana: null,
			kanji: "迎えます",
		},
		sound: "greet",
	},
	{
		name: "mệt",
		character: {
			hiragana: "つかれます",
			katakana: null,
			kanji: "疲れます",
		},
		sound: "tired",
	},
	{
		name: "kết hôn, lập gia đình, cưới",
		character: {
			hiragana: "けっこんします",
			katakana: null,
			kanji: "結婚します",
		},
		sound: "get_married",
	},
	{
		name: "mua hàng",
		character: {
			hiragana: "かいものします",
			katakana: null,
			kanji: "買い物します",
		},
		sound: "shop",
	},
	{
		name: "ăn cơm",
		character: {
			hiragana: "しょくじします",
			katakana: null,
			kanji: "食事します",
		},
		sound: "have_meal",
	},
	{
		name: "đi dạo [ở công viên]",
		character: {
			hiragana: "さんぽします [こうえんを～]",
			katakana: null,
			kanji: "散歩します [公園を～]",
		},
		sound: "take_a_walk",
	},
	{
		name: "vất vả, khó khăn, khổ",
		character: {
			hiragana: "たいへん「な」",
			katakana: null,
			kanji: "大変「な」",
		},
		sound: "difficult",
	},
	{
		name: "muốn có",
		character: {
			hiragana: "ほしい",
			katakana: null,
			kanji: "欲しい",
		},
		sound: "want",
	},
	{
		name: "rộng",
		character: {
			hiragana: "ひろい",
			katakana: null,
			kanji: "広い",
		},
		sound: "spacious",
	},
	{
		name: "chật, hẹp",
		character: {
			hiragana: "せまい",
			katakana: null,
			kanji: "狭い",
		},
		sound: "narrow",
	},
	{
		name: "bể bơi",
		character: {
			hiragana: null,
			katakana: "プール",
			kanji: null,
		},
		sound: "pool",
	},
	{
		name: "sông",
		character: {
			hiragana: "かわ",
			katakana: null,
			kanji: "川",
		},
		sound: "river",
	},
	{
		name: "mỹ thuật",
		character: {
			hiragana: "びじゅつ",
			katakana: null,
			kanji: "美術",
		},
		sound: "art",
	},
	{
		name: "việc câu cá (をします：câu cá)",
		character: {
			hiragana: "つり",
			katakana: null,
			kanji: "釣り",
		},
		sound: "fishing",
	},
	{
		name: "việc trượt tuyết (をします：trượt tuyết)",
		character: {
			hiragana: null,
			katakana: "スキー",
			kanji: null,
		},
		sound: "skiing",
	},
	{
		name: "cuối tuần",
		character: {
			hiragana: "しゅうまつ",
			katakana: null,
			kanji: "週末",
		},
		sound: "weekend",
	},
	{
		name: "Tết",
		character: {
			hiragana: "[お]しょうがつ",
			katakana: null,
			kanji: "[お]正月",
		},
		sound: "new_year",
	},
	{
		name: "khoảng  (dùng cho thời gian)",
		character: {
			hiragana: "～ごろ",
			katakana: null,
			kanji: null,
		},
		sound: "around",
	},
	{
		name: "cái gì đó",
		character: {
			hiragana: "なにか",
			katakana: null,
			kanji: "何か",
		},
		sound: "something",
	},
	{
		name: "đâu đó, chỗ nào đó",
		character: {
			hiragana: "どこか",
			katakana: null,
			kanji: null,
		},
		sound: "somewhere",
	},
	{
		name: "(tôi) khát.",
		character: {
			hiragana: "のどがかわきます",
			katakana: null,
			kanji: null,
		},
		sound: "thirsty",
	},
	{
		name: "(tôi) đói rồi.",
		character: {
			hiragana: "おなかがすきます",
			katakana: null,
			kanji: null,
		},
		sound: "hungry",
	},
	{
		name: "Nhất trí./ Chúng ta thống nhất như thế.",
		character: {
			hiragana: "そうしましょう。",
			katakana: null,
			kanji: null,
		},
		sound: "agreed",
	},
	{
		name: "Anh/Chị dùng món gì ạ",
		character: {
			hiragana: "ごちゅうもんは？",
			katakana: null,
			kanji: "ご注文は？",
		},
		sound: "what_would_you_like_to_order",
	},
	{
		name: "cơm suất, cơm phần",
		character: {
			hiragana: "ていしょく",
			katakana: null,
			kanji: "定食",
		},
		sound: "set_meal",
	},
	{
		name: "món cơm thịt bò",
		character: {
			hiragana: "ぎゅうどん",
			katakana: null,
			kanji: "牛どん",
		},
		sound: "beef_bowl",
	},
	{
		name: "Xin anh/chị vui lòng đợi [một chút].",
		character: {
			hiragana: "[しょうしょう]おまちください",
			katakana: null,
			kanji: "[しょうしょう]お待ちください",
		},
		sound: "please_wait",
	},
	{
		name: "(cách nói lịch sự của です)",
		character: {
			hiragana: "～でございます。",
			katakana: null,
			kanji: null,
		},
		sound: "polite_form_of_desu",
	},
	{
		name: "riêng ra/ để riêng",
		character: {
			hiragana: "べつべつに",
			katakana: null,
			kanji: "別々に",
		},
		sound: "separately",
	},
	{
		name: "tên một công ty (giả định)",
		character: {
			hiragana: null,
			katakana: "アキックス",
			kanji: null,
		},
		sound: "company_AKIX",
	},
	{
		name: "tên một chương trình truyền hình (giả định)",
		character: {
			hiragana: "おはようテレビ",
			katakana: null,
			kanji: null,
		},
		sound: "good_morning_television",
	},
];

export const lessonFourteen: Iword[] = [
	{
		name: "bật (điện, máy điều hòa)",
		character: {
			hiragana: "つけます",
			katakana: null,
			kanji: null,
		},
		sound: "turn_on",
	},
	{
		name: "tắt (điện, máy điều hòa)",
		character: {
			hiragana: "けします",
			katakana: null,
			kanji: "消します",
		},
		sound: "turn_off",
	},
	{
		name: "mở (cửa, cửa sổ)",
		character: {
			hiragana: "あけます",
			katakana: null,
			kanji: "開けます",
		},
		sound: "open",
	},
	{
		name: "đóng (cửa, cửa sổ)",
		character: {
			hiragana: "しめます",
			katakana: null,
			kanji: "閉めます",
		},
		sound: "close",
	},
	{
		name: "vội, gấp",
		character: {
			hiragana: "いそぎます",
			katakana: null,
			kanji: "急ぎます",
		},
		sound: "hurry",
	},
	{
		name: "đợi, chờ",
		character: {
			hiragana: "まちます",
			katakana: null,
			kanji: "待ちます",
		},
		sound: "wait",
	},
	{
		name: "mang, cầm",
		character: {
			hiragana: "もちます",
			katakana: null,
			kanji: "持ちます",
		},
		sound: "carry",
	},
	{
		name: "lấy (muối)",
		character: {
			hiragana: "とります",
			katakana: null,
			kanji: "取ります",
		},
		sound: "take",
	},
	{
		name: "giúp (làm việc)",
		character: {
			hiragana: "てつだいます",
			katakana: null,
			kanji: "手伝います",
		},
		sound: "help",
	},
	{
		name: "gọi (taxi, tên)",
		character: {
			hiragana: "よびます",
			katakana: null,
			kanji: "呼びます",
		},
		sound: "call",
	},
	{
		name: "nói, nói chuyện",
		character: {
			hiragana: "はなします",
			katakana: null,
			kanji: "話します",
		},
		sound: "talk",
	},
	{
		name: "dùng, sử dụng",
		character: {
			hiragana: "つかいます",
			katakana: null,
			kanji: "使います",
		},
		sound: "use",
	},
	{
		name: "dừng, đỗ",
		character: {
			hiragana: "とめます",
			katakana: null,
			kanji: "止めます",
		},
		sound: "stop",
	},
	{
		name: "cho xem, trình",
		character: {
			hiragana: "みせます",
			katakana: null,
			kanji: "見せます",
		},
		sound: "show",
	},
	{
		name: "nói, cho biết [địa chỉ]",
		character: {
			hiragana: "おしえます",
			katakana: null,
			kanji: "教えます",
		},
		sound: "tell",
	},
	{
		name: "ngồi",
		character: {
			hiragana: "すわります",
			katakana: null,
			kanji: "座ります",
		},
		sound: "sit",
	},
	{
		name: "đứng",
		character: {
			hiragana: "たちます",
			katakana: null,
			kanji: "立ちます",
		},
		sound: "stand",
	},
	{
		name: "vào [quán giải khát]",
		character: {
			hiragana: "はいります",
			katakana: null,
			kanji: "入ります",
		},
		sound: "enter",
	},
	{
		name: "ra, ra khỏi [quán giải khát]",
		character: {
			hiragana: "でます",
			katakana: null,
			kanji: "出ます",
		},
		sound: "exit",
	},
	{
		name: "rơi [mưa]",
		character: {
			hiragana: "ふります",
			katakana: null,
			kanji: "降ります",
		},
		sound: "fall",
	},
	{
		name: "copy",
		character: {
			hiragana: "コピーします",
			katakana: null,
			kanji: null,
		},
		sound: "copy",
	},
	{
		name: "điện, đèn điện",
		character: {
			hiragana: "でんき",
			katakana: null,
			kanji: "電気",
		},
		sound: "electricity",
	},
	{
		name: "máy điều hòa",
		character: {
			hiragana: "エアコン",
			katakana: null,
			kanji: null,
		},
		sound: "air_conditioner",
	},
	{
		name: "hộ chiếu",
		character: {
			hiragana: "パスポート",
			katakana: null,
			kanji: null,
		},
		sound: "passport",
	},
	{
		name: "tên",
		character: {
			hiragana: "なまえ",
			katakana: null,
			kanji: "名前",
		},
		sound: "name",
	},
	{
		name: "địa chỉ",
		character: {
			hiragana: "じゅうしょ",
			katakana: null,
			kanji: "住所",
		},
		sound: "address",
	},
	{
		name: "bản đồ",
		character: {
			hiragana: "ちず",
			katakana: null,
			kanji: "地図",
		},
		sound: "map",
	},
	{
		name: "muối",
		character: {
			hiragana: "しお",
			katakana: null,
			kanji: "塩",
		},
		sound: "salt",
	},
	{
		name: "đường",
		character: {
			hiragana: "さとう",
			katakana: null,
			kanji: "砂糖",
		},
		sound: "sugar",
	},
	{
		name: "câu hỏi, vấn đề",
		character: {
			hiragana: "もんだい",
			katakana: null,
			kanji: "問題",
		},
		sound: "question",
	},
	{
		name: "câu trả lời",
		character: {
			hiragana: "こたえ",
			katakana: null,
			kanji: "答え",
		},
		sound: "answer",
	},
	{
		name: "cách đọc",
		character: {
			hiragana: "よみかた",
			katakana: null,
			kanji: "読み方",
		},
		sound: "reading",
	},
	{
		name: "cách ",
		character: {
			hiragana: "～かた",
			katakana: null,
			kanji: "～方",
		},
		sound: "way_of",
	},
	{
		name: "thẳng",
		character: {
			hiragana: "まっすぐ",
			katakana: null,
			kanji: null,
		},
		sound: "straight",
	},
	{
		name: "chậm, thong thả, thoải mái",
		character: {
			hiragana: "ゆっくり",
			katakana: null,
			kanji: null,
		},
		sound: "slowly",
	},
	{
		name: "ngay, lập tức",
		character: {
			hiragana: "すぐ",
			katakana: null,
			kanji: null,
		},
		sound: "immediately",
	},
	{
		name: "lại (đến)",
		character: {
			hiragana: "また",
			katakana: null,
			kanji: null,
		},
		sound: "again",
	},
	{
		name: "sau",
		character: {
			hiragana: "あとで",
			katakana: null,
			kanji: null,
		},
		sound: "later",
	},
	{
		name: "thêm một chút nữa thôi",
		character: {
			hiragana: "もう　すこし",
			katakana: null,
			kanji: "もう少し",
		},
		sound: "a_little_more",
	},
	{
		name: "thêm",
		character: {
			hiragana: "もう～",
			katakana: null,
			kanji: null,
		},
		sound: "more",
	},
	{
		name: "thôi/nào (dùng để thúc giục hoặc khuyến khích ai làm gì)",
		character: {
			hiragana: "さあ",
			katakana: null,
			kanji: null,
		},
		sound: "come_on",
	},
	{
		name: "Ô! (câu cảm thán khi phát hiện hoặc thấy cái gì đó lạ, hoặc bất ngờ)",
		character: {
			hiragana: "あれ？",
			katakana: null,
			kanji: null,
		},
		sound: "oh",
	},
	{
		name: "Anh/ Chị rẽ phải ở chỗ đèn tín hiệu.",
		character: {
			hiragana: null,
			katakana: null,
			kanji: "信号を右へ曲がってください",
		},
		sound: "turn_right_at_the_traffic_light",
	},
	{
		name: "Gởi anh tiền này.",
		character: {
			hiragana: null,
			katakana: null,
			kanji: "これでお願いします",
		},
		sound: "here_is_the_money",
	},
	{
		name: "tiền lẻ",
		character: {
			hiragana: "おつり",
			katakana: null,
			kanji: "お釣り",
		},
		sound: "change",
	},
	{
		name: "tên một thành phố (giả định)",
		character: {
			hiragana: "みどりちょう",
			katakana: null,
			kanji: "みどり町",
		},
		sound: "Midori_town",
	},
];

export const lessonFifteen: Iword[] = [
	{
		name: "đặt, để",
		character: {
			hiragana: "おきます",
			katakana: null,
			kanji: "置きます",
		},
		sound: "place",
	},
	{
		name: "làm, chế tạo, sản xuất",
		character: {
			hiragana: "つくります",
			katakana: null,
			kanji: "作ります, 造ります",
		},
		sound: "make",
	},
	{
		name: "bán",
		character: {
			hiragana: "うります",
			katakana: null,
			kanji: "売ります",
		},
		sound: "sell",
	},
	{
		name: "biết",
		character: {
			hiragana: "しります",
			katakana: null,
			kanji: "知ります",
		},
		sound: "know",
	},
	{
		name: "sống, ở",
		character: {
			hiragana: "すみます",
			katakana: null,
			kanji: "住みます",
		},
		sound: "live",
	},
	{
		name: "nghiên cứu",
		character: {
			hiragana: "けんきゅうします",
			katakana: null,
			kanji: "研究します",
		},
		sound: "research",
	},
	{
		name: "tài liệu, tư liệu",
		character: {
			hiragana: "しりょう",
			katakana: null,
			kanji: "資料",
		},
		sound: "materials",
	},
	{
		name: "ca-ta-lô",
		character: {
			hiragana: null,
			katakana: "カタログ",
			kanji: null,
		},
		sound: "catalog",
	},
	{
		name: "bảng giờ tàu chạy",
		character: {
			hiragana: "じこくひょう",
			katakana: null,
			kanji: "時刻表",
		},
		sound: "timetable",
	},
	{
		name: "quần áo",
		character: {
			hiragana: "ふく",
			katakana: null,
			kanji: "服",
		},
		sound: "clothes",
	},
	{
		name: "sản phẩm",
		character: {
			hiragana: "せいひん",
			katakana: null,
			kanji: "製品",
		},
		sound: "product",
	},
	{
		name: "phần mềm",
		character: {
			hiragana: null,
			katakana: "ソフト",
			kanji: null,
		},
		sound: "software",
	},
	{
		name: "kim từ điển",
		character: {
			hiragana: "でんしじしょ",
			katakana: null,
			kanji: "電子辞書",
		},
		sound: "electronic_dictionary",
	},
	{
		name: "kinh tế",
		character: {
			hiragana: "けいざい",
			katakana: null,
			kanji: "経済",
		},
		sound: "economics",
	},
	{
		name: "tòa thị chính",
		character: {
			hiragana: "しやくしょ",
			katakana: null,
			kanji: "市役所",
		},
		sound: "city_hall",
	},
	{
		name: "trường trung học phổ thông, trường cấp 3",
		character: {
			hiragana: "こうこう",
			katakana: null,
			kanji: "高校",
		},
		sound: "high_school",
	},
	{
		name: "nha sĩ",
		character: {
			hiragana: "はいしゃ",
			katakana: null,
			kanji: "歯医者",
		},
		sound: "dentist",
	},
	{
		name: "độc thân",
		character: {
			hiragana: "どくしん",
			katakana: null,
			kanji: "独身",
		},
		sound: "single",
	},
	{
		name: "xin lỗi",
		character: {
			hiragana: "すみません",
			katakana: null,
			kanji: null,
		},
		sound: "sorry",
	},
	{
		name: "các anh chị, các ông bà, các bạn, quý vị",
		character: {
			hiragana: "みなさん",
			katakana: null,
			kanji: "皆さん",
		},
		sound: "everyone",
	},
	{
		name: "nhớ lại, hồi tưởng",
		character: {
			hiragana: "おもいでします",
			katakana: null,
			kanji: "思い出します",
		},
		sound: "remember",
	},
	{
		name: "kính ngữ của います",
		character: {
			hiragana: "いらっしゃいます",
			katakana: null,
			kanji: null,
		},
		sound: "honorific_for_imasu",
	},
	{
		name: "tên một khu phố buôn bán ở Osaka",
		character: {
			hiragana: "にっぽんばし",
			katakana: null,
			kanji: "日本橋",
		},
		sound: "Nipponbashi",
	},
	{
		name: "tên chương trình truyền hình (giả định)",
		character: {
			hiragana: null,
			katakana: "みんなのインタビュー",
			kanji: null,
		},
		sound: "Everyone's_Interview",
	},
];

export const lessonSixteen: Iword[] = [
	{
		name: "đi, lên [tàu]",
		character: {
			hiragana: "のります",
			katakana: null,
			kanji: "乗ります",
		},
		sound: "ride",
	},
	{
		name: "xuống [tàu]",
		character: {
			hiragana: "おります",
			katakana: null,
			kanji: "降ります",
		},
		sound: "get_off",
	},
	{
		name: "chuyển, đổi (tàu)",
		character: {
			hiragana: "のりかえます",
			katakana: null,
			kanji: "乗り換えます",
		},
		sound: "transfer",
	},
	{
		name: "tắm [vòi hoa sen]",
		character: {
			hiragana: "あびます",
			katakana: null,
			kanji: "浴びます",
		},
		sound: "take_a_shower",
	},
	{
		name: "cho vào, bỏ vào",
		character: {
			hiragana: "いれます",
			katakana: null,
			kanji: "入れます",
		},
		sound: "insert",
	},
	{
		name: "lấy ra, đưa ra, gửi",
		character: {
			hiragana: "だします",
			katakana: null,
			kanji: "出します",
		},
		sound: "take_out",
	},
	{
		name: "rút [tiền]",
		character: {
			hiragana: "おろします",
			katakana: null,
			kanji: "下ろします",
		},
		sound: "withdraw",
	},
	{
		name: "vào, nhập học [đại học]",
		character: {
			hiragana: "はいります",
			katakana: null,
			kanji: "入ります",
		},
		sound: "enter",
	},
	{
		name: "ra, tốt nghiệp [đại học]",
		character: {
			hiragana: "でます",
			katakana: null,
			kanji: "出ます",
		},
		sound: "graduate",
	},
	{
		name: "bấm, ấn (nút)",
		character: {
			hiragana: "おします",
			katakana: null,
			kanji: "押します",
		},
		sound: "press",
	},
	{
		name: "uống (bia, rượu)",
		character: {
			hiragana: "のみます",
			katakana: null,
			kanji: "飲みます",
		},
		sound: "drink",
	},
	{
		name: "bắt đầu",
		character: {
			hiragana: "はじめます",
			katakana: null,
			kanji: "始めます",
		},
		sound: "start",
	},
	{
		name: "tham quan kiến tập",
		character: {
			hiragana: "けんがくします",
			katakana: null,
			kanji: "見学します",
		},
		sound: "observe",
	},
	{
		name: "gọi điện thoại",
		character: {
			hiragana: "でんわします",
			katakana: null,
			kanji: "電話します",
		},
		sound: "make_a_phone_call",
	},
	{
		name: "trẻ",
		character: {
			hiragana: "わかい",
			katakana: null,
			kanji: "若い",
		},
		sound: "young",
	},
	{
		name: "dài",
		character: {
			hiragana: "ながい",
			katakana: null,
			kanji: "長い",
		},
		sound: "long",
	},
	{
		name: "ngắn",
		character: {
			hiragana: "みじかい",
			katakana: null,
			kanji: "短い",
		},
		sound: "short",
	},
	{
		name: "sáng",
		character: {
			hiragana: "あかるい",
			katakana: null,
			kanji: "明るい",
		},
		sound: "bright",
	},
	{
		name: "tối",
		character: {
			hiragana: "くらい",
			katakana: null,
			kanji: "暗い",
		},
		sound: "dark",
	},
	{
		name: "người, cơ thể",
		character: {
			hiragana: "からだ",
			katakana: null,
			kanji: "体",
		},
		sound: "body",
	},
	{
		name: "đầu",
		character: {
			hiragana: "あたま",
			katakana: null,
			kanji: "頭",
		},
		sound: "head",
	},
	{
		name: "tóc",
		character: {
			hiragana: "かみ",
			katakana: null,
			kanji: "髪",
		},
		sound: "hair",
	},
	{
		name: "mặt",
		character: {
			hiragana: "かお",
			katakana: null,
			kanji: "顔",
		},
		sound: "face",
	},
	{
		name: "mắt",
		character: {
			hiragana: "め",
			katakana: null,
			kanji: "目",
		},
		sound: "eye",
	},
	{
		name: "tai",
		character: {
			hiragana: "みみ",
			katakana: null,
			kanji: "耳",
		},
		sound: "ear",
	},
	{
		name: "mũi",
		character: {
			hiragana: "はな",
			katakana: null,
			kanji: "鼻",
		},
		sound: "nose",
	},
	{
		name: "miệng",
		character: {
			hiragana: "くち",
			katakana: null,
			kanji: "口",
		},
		sound: "mouth",
	},
	{
		name: "răng",
		character: {
			hiragana: "は",
			katakana: null,
			kanji: "歯",
		},
		sound: "tooth",
	},
	{
		name: "bụng",
		character: {
			hiragana: "おなか",
			katakana: null,
			kanji: null,
		},
		sound: "stomach",
	},
	{
		name: "chân",
		character: {
			hiragana: "あし",
			katakana: null,
			kanji: "足",
		},
		sound: "leg",
	},
	{
		name: "chiều cao (cơ thể)",
		character: {
			hiragana: "せ",
			katakana: null,
			kanji: "背",
		},
		sound: "height",
	},
	{
		name: "dịch vụ",
		character: {
			hiragana: null,
			katakana: "サービス",
			kanji: null,
		},
		sound: "service",
	},
	{
		name: "việc chạy bộ (をします: chạy bộ)",
		character: {
			hiragana: null,
			katakana: "ジョギング",
			kanji: null,
		},
		sound: "jogging",
	},
	{
		name: "vòi hoa sen",
		character: {
			hiragana: null,
			katakana: "シャワー",
			kanji: null,
		},
		sound: "shower",
	},
	{
		name: "màu xanh lá cây",
		character: {
			hiragana: "みどり",
			katakana: null,
			kanji: "緑",
		},
		sound: "green",
	},
	{
		name: "chùa",
		character: {
			hiragana: "[お]てら",
			katakana: null,
			kanji: "寺",
		},
		sound: "temple",
	},
	{
		name: "đền thờ đạo thần",
		character: {
			hiragana: "じんじゃ",
			katakana: null,
			kanji: "神社",
		},
		sound: "shrine",
	},
	{
		name: "số ―",
		character: {
			hiragana: "いちばん",
			katakana: null,
			kanji: "一番",
		},
		sound: "number_―",
	},
	{
		name: "làm thế nào",
		character: {
			hiragana: "どうやって",
			katakana: null,
			kanji: null,
		},
		sound: "how_to",
	},
	{
		name: "cái nào (dùng với trường hợp từ ba thứ trở lên)",
		character: {
			hiragana: "どの～",
			katakana: null,
			kanji: null,
		},
		sound: "which_~",
	},
	{
		name: "cái nào (dùng với trường hợp ba cái hoặc nhiều hơn)",
		character: {
			hiragana: "どれ",
			katakana: null,
			kanji: null,
		},
		sound: "which_one",
	},
	{
		name: "Thật là tuyệt vời. / Kinh quá nhỉ.",
		character: {
			hiragana: "すごいですね。",
			katakana: null,
			kanji: null,
		},
		sound: "amazing",
	},
	{
		name: "[không,] tôi còn kém lắm. (cách nói khiêm nhường khi ai đó khen)",
		character: {
			hiragana: "[いいえ、]まだまだです。",
			katakana: null,
			kanji: null,
		},
		sound: "not_yet",
	},
	{
		name: "Anh/ chị rút tiền ạ?",
		character: {
			hiragana: "おひきだしですか。",
			katakana: null,
			kanji: "お引き出しですか。",
		},
		sound: "withdraw_money",
	},
	{
		name: "trước hết, đầu tiên",
		character: {
			hiragana: "まず",
			katakana: null,
			kanji: null,
		},
		sound: "first",
	},
	{
		name: "tiếp theo, sau đó",
		character: {
			hiragana: "つぎに",
			katakana: null,
			kanji: "次に",
		},
		sound: "next",
	},
	{
		name: "thẻ ngân hàng, thẻ ATM",
		character: {
			hiragana: null,
			katakana: "キャッシュカード",
			kanji: null,
		},
		sound: "cash_card",
	},
	{
		name: "mã số bí mật (mật khẩu)",
		character: {
			hiragana: "あんしょうばんごう",
			katakana: null,
			kanji: "暗証番号",
		},
		sound: "pin_number",
	},
	{
		name: "số tiền, khoản tiền",
		character: {
			hiragana: "きんがく",
			katakana: null,
			kanji: "金額",
		},
		sound: "amount_of_money",
	},
	{
		name: "sự xác nhận, sự kiểm tra (~します：xác nhận)",
		character: {
			hiragana: "かくにん",
			katakana: null,
			kanji: "確認",
		},
		sound: "confirmation",
	},
	{
		name: "nút",
		character: {
			hiragana: null,
			katakana: "ボタン",
			kanji: null,
		},
		sound: "button",
	},
	{
		name: "công ty đường sắt Nhật Bản",
		character: {
			hiragana: null,
			katakana: "ＪＲ",
			kanji: null,
		},
		sound: "JR",
	},
	{
		name: "Lễ hội tuyết",
		character: {
			hiragana: "ゆきまつり",
			katakana: null,
			kanji: "雪祭り",
		},
		sound: "Snow_Festival",
	},
	{
		name: "Bandung (ở Indonesia)",
		character: {
			hiragana: null,
			katakana: "バンドン",
			kanji: null,
		},
		sound: "Bandung",
	},
	{
		name: "Franken (ở Đức)",
		character: {
			hiragana: null,
			katakana: "フランケン",
			kanji: null,
		},
		sound: "Franken",
	},
	{
		name: "Veracruz (ở Mexico)",
		character: {
			hiragana: null,
			katakana: "ベラクルス",
			kanji: null,
		},
		sound: "Veracruz",
	},
	{
		name: "tên một quận ở Osaka",
		character: {
			hiragana: "うめだ",
			katakana: null,
			kanji: "梅田",
		},
		sound: "Umeda",
	},
	{
		name: "tên một điểm dừng xe buýt (giả tưởng)",
		character: {
			hiragana: "だいがくまえ",
			katakana: null,
			kanji: "大学前",
		},
		sound: "University_Entrance",
	},
];

export const lessonSeventeen: Iword[] = [
	{
		name: "nhớ",
		character: {
			hiragana: "おぼえます",
			katakana: null,
			kanji: "覚えます",
		},
		sound: "remember",
	},
	{
		name: "quên",
		character: {
			hiragana: "わすれます",
			katakana: null,
			kanji: "忘れます",
		},
		sound: "forget",
	},
	{
		name: "mất, đánh mất",
		character: {
			hiragana: "なくします",
			katakana: null,
			kanji: null,
		},
		sound: "lose",
	},
	{
		name: "trả tiền",
		character: {
			hiragana: "はらいます",
			katakana: null,
			kanji: "払います",
		},
		sound: "pay",
	},
	{
		name: "trả lại",
		character: {
			hiragana: "かえします",
			katakana: null,
			kanji: "返します",
		},
		sound: "return",
	},
	{
		name: "ra ngoài",
		character: {
			hiragana: "でかけます",
			katakana: null,
			kanji: "出かけます",
		},
		sound: "go_out",
	},
	{
		name: "cởi (quần áo, giầy)",
		character: {
			hiragana: "ぬぎます",
			katakana: null,
			kanji: "脱ぎます",
		},
		sound: "take_off",
	},
	{
		name: "mang đi, mang theo",
		character: {
			hiragana: "もっていきます",
			katakana: null,
			kanji: "持って行きます",
		},
		sound: "take_with",
	},
	{
		name: "mang đến",
		character: {
			hiragana: "もってきます",
			katakana: null,
			kanji: "持って来ます",
		},
		sound: "bring",
	},
	{
		name: "lo lắng",
		character: {
			hiragana: "しんぱいします",
			katakana: null,
			kanji: "心配します",
		},
		sound: "worry",
	},
	{
		name: "làm thêm, làm quá giờ",
		character: {
			hiragana: "ざんぎょうします",
			katakana: null,
			kanji: "残業します",
		},
		sound: "work_overtime",
	},
	{
		name: "đi công tác",
		character: {
			hiragana: "しゅっちょうします",
			katakana: null,
			kanji: "出張します",
		},
		sound: "business_trip",
	},
	{
		name: "uống [thuốc]",
		character: {
			hiragana: "のみます",
			katakana: null,
			kanji: "飲みます",
		},
		sound: "take_medicine",
	},
	{
		name: "tắm bồn [vào bồn tắm]",
		character: {
			hiragana: "はいります",
			katakana: null,
			kanji: "入ります",
		},
		sound: "take_a_bath",
	},
	{
		name: "quan trọng, quý giá",
		character: {
			hiragana: "たいせつ",
			katakana: null,
			kanji: "大切",
		},
		sound: "important",
	},
	{
		name: "không sao, không có vấn đề gì",
		character: {
			hiragana: "だいじょうぶ",
			katakana: null,
			kanji: "大丈夫",
		},
		sound: "okay",
	},
	{
		name: "nguy hiểm",
		character: {
			hiragana: "あぶない",
			katakana: null,
			kanji: "危ない",
		},
		sound: "dangerous",
	},
	{
		name: "cấm hút thuốc",
		character: {
			hiragana: "きんえん",
			katakana: null,
			kanji: "禁煙",
		},
		sound: "no_smoking",
	},
	{
		name: "thẻ bảo hiểm [y tế]",
		character: {
			hiragana: "[けんこう]ほけんしょう",
			katakana: null,
			kanji: "[健康]保険証",
		},
		sound: "insurance_card",
	},
	{
		name: "sốt",
		character: {
			hiragana: "ねつ",
			katakana: null,
			kanji: "熱",
		},
		sound: "fever",
	},
	{
		name: "ốm, bệnh",
		character: {
			hiragana: "びょうき",
			katakana: null,
			kanji: "病気",
		},
		sound: "illness",
	},
	{
		name: "thuốc",
		character: {
			hiragana: "くすり",
			katakana: null,
			kanji: "薬",
		},
		sound: "medicine",
	},
	{
		name: "bồn tắm",
		character: {
			hiragana: "[お]ふろ",
			katakana: null,
			kanji: null,
		},
		sound: "bath",
	},
	{
		name: "áo khoác",
		character: {
			hiragana: "うわぎ",
			katakana: null,
			kanji: "上着",
		},
		sound: "coat",
	},
	{
		name: "quần áo lót",
		character: {
			hiragana: "したぎ",
			katakana: null,
			kanji: "下着",
		},
		sound: "underwear",
	},
	{
		name: "2,3 ngày, vài ngày",
		character: {
			hiragana: "２，３にち",
			katakana: null,
			kanji: "２，３日",
		},
		sound: "two_or_three_days",
	},
	{
		name: "vài (“” là hậu tố đếm)",
		character: {
			hiragana: "２，３～",
			katakana: null,
			kanji: null,
		},
		sound: "several_~",
	},
	{
		name: "trước  (chỉ thời hạn)",
		character: {
			hiragana: "～までに",
			katakana: null,
			kanji: null,
		},
		sound: "by_~",
	},
	{
		name: "vì thế, vì vậy, do đó",
		character: {
			hiragana: "ですから",
			katakana: null,
			kanji: null,
		},
		sound: "so",
	},
	{
		name: "Có vấn đề gì?<br>Anh/chị bị làm sao?",
		character: {
			hiragana: "どうしましたか。",
			katakana: null,
			kanji: null,
		},
		sound: "what_happened",
	},
	{
		name: "họng",
		character: {
			hiragana: "のど",
			katakana: null,
			kanji: null,
		},
		sound: "throat",
	},
	{
		name: "Tôi bị đau [].",
		character: {
			hiragana: "[～が]いたいです。",
			katakana: null,
			kanji: "痛い",
		},
		sound: "pain",
	},
	{
		name: "cảm, cúm",
		character: {
			hiragana: "かぜ",
			katakana: null,
			kanji: null,
		},
		sound: "cold",
	},
	{
		name: "và, sau đó",
		character: {
			hiragana: "それから",
			katakana: null,
			kanji: null,
		},
		sound: "and_then",
	},
	{
		name: "Anh/chị nhớ giữ gìn sức khỏe. (câu nói với người ốm,bị bệnh)",
		character: {
			hiragana: "おだいじに",
			katakana: null,
			kanji: "お大事に",
		},
		sound: "take_care",
	},
];

export const lessonEighteen: Iword[] = [
	{
		name: "có thể",
		character: {
			hiragana: "できます",
			katakana: null,
			kanji: null,
		},
		sound: "can",
	},
	{
		name: "rửa",
		character: {
			hiragana: "あらいます",
			katakana: null,
			kanji: "洗います",
		},
		sound: "wash",
	},
	{
		name: "chơi (nhạc cụ)",
		character: {
			hiragana: "ひきます",
			katakana: null,
			kanji: "弾きます",
		},
		sound: "play_instrument",
	},
	{
		name: "hát",
		character: {
			hiragana: "うたいます",
			katakana: null,
			kanji: "歌います",
		},
		sound: "sing",
	},
	{
		name: "sưu tầm, thu thập",
		character: {
			hiragana: "あつめます",
			katakana: null,
			kanji: "集めます",
		},
		sound: "collect",
	},
	{
		name: "vứt, bỏ đi",
		character: {
			hiragana: "すてます",
			katakana: null,
			kanji: "捨てます",
		},
		sound: "discard",
	},
	{
		name: "đổi",
		character: {
			hiragana: "かえます",
			katakana: null,
			kanji: "換えます",
		},
		sound: "exchange",
	},
	{
		name: "lái",
		character: {
			hiragana: "うんてんします",
			katakana: null,
			kanji: "運転します",
		},
		sound: "drive",
	},
	{
		name: "đặt chỗ, đặt trước",
		character: {
			hiragana: "よやくします",
			katakana: null,
			kanji: "予約します",
		},
		sound: "reserve",
	},
	{
		name: "đàn Piano",
		character: {
			hiragana: null,
			katakana: "ピアノ",
			kanji: null,
		},
		sound: "piano",
	},
	{
		name: "― mét",
		character: {
			hiragana: null,
			katakana: "―メートル",
			kanji: null,
		},
		sound: "meter",
	},
	{
		name: "tiền mặt",
		character: {
			hiragana: "げんきん",
			katakana: null,
			kanji: "現金",
		},
		sound: "cash",
	},
	{
		name: "sở thích, thú vui",
		character: {
			hiragana: "しゅみ",
			katakana: null,
			kanji: "趣味",
		},
		sound: "hobby",
	},
	{
		name: "nhật ký",
		character: {
			hiragana: "にっき",
			katakana: null,
			kanji: "日記",
		},
		sound: "diary",
	},
	{
		name: "việc cầu nguyện (～をします：cầu nguyện)",
		character: {
			hiragana: "[お]いのり",
			katakana: null,
			kanji: "[お]祈り",
		},
		sound: "prayer",
	},
	{
		name: "tổ trưởng",
		character: {
			hiragana: "かちょう",
			katakana: null,
			kanji: "課長",
		},
		sound: "section_chief",
	},
	{
		name: "trưởng phòng",
		character: {
			hiragana: "ぶちょう",
			katakana: null,
			kanji: "部長",
		},
		sound: "department_manager",
	},
	{
		name: "giám đốc",
		character: {
			hiragana: "しゃちょう",
			katakana: null,
			kanji: "社長",
		},
		sound: "president",
	},
	{
		name: "động vật",
		character: {
			hiragana: "どうぶつ",
			katakana: null,
			kanji: "動物",
		},
		sound: "animal",
	},
	{
		name: "ngựa",
		character: {
			hiragana: "うま",
			katakana: null,
			kanji: "馬",
		},
		sound: "horse",
	},
	{
		name: "internet",
		character: {
			hiragana: null,
			katakana: "インターネット",
			kanji: null,
		},
		sound: "internet",
	},
	{
		name: "đặt biệt là",
		character: {
			hiragana: "特に",
			katakana: null,
			kanji: "特に",
		},
		sound: "especially",
	},
	{
		name: "thế à! (dùng để biểu thị sự ngạc nhiên hoặc quan tâm)",
		character: {
			hiragana: "へえ",
			katakana: null,
			kanji: null,
		},
		sound: "really",
	},
	{
		name: "Hay thật nhỉ.",
		character: {
			hiragana: "それはおもしろいですね。",
			katakana: null,
			kanji: null,
		},
		sound: "that_is_interesting",
	},
	{
		name: "khó mà, mãi mà (dùng với thể phủ định)",
		character: {
			hiragana: "なかなか",
			katakana: null,
			kanji: null,
		},
		sound: "difficult_to",
	},
	{
		name: "Thật không ạ?",
		character: {
			hiragana: "ほんとうですか。",
			katakana: null,
			kanji: null,
		},
		sound: "is_it_true",
	},
	{
		name: "nhất định, rất",
		character: {
			hiragana: "ぜひ",
			katakana: null,
			kanji: null,
		},
		sound: "definitely",
	},
	{
		name: 'Furusato(tên bài hát có nghĩa "quê nhà")',
		character: {
			hiragana: null,
			katakana: null,
			kanji: "故郷",
		},
		sound: "hometown",
	},
	{
		name: "Beatles, một băng nhạc nổi tiếng nước Anh",
		character: {
			hiragana: null,
			katakana: "ビートルズ",
			kanji: null,
		},
		sound: "the_beatles",
	},
	{
		name: "một quận ở Tokyo",
		character: {
			hiragana: "秋葉原",
			katakana: null,
			kanji: "秋葉原",
		},
		sound: "akihabara",
	},
];

export const lessonNineteen: Iword[] = [
	{
		name: "leo [núi]",
		character: {
			hiragana: "のぼります",
			katakana: null,
			kanji: "登ります",
		},
		sound: "climb_mountain",
	},
	{
		name: "trọ [ở khách sạn]",
		character: {
			hiragana: "とまります",
			katakana: null,
			kanji: "泊まります",
		},
		sound: "stay_at_hotel",
	},
	{
		name: "dọn vệ sinh",
		character: {
			hiragana: "そうじします",
			katakana: null,
			kanji: "掃除します",
		},
		sound: "clean",
	},
	{
		name: "giặt",
		character: {
			hiragana: "せんたくします",
			katakana: null,
			kanji: "洗濯します",
		},
		sound: "wash_clothes",
	},
	{
		name: "trở thành, trở nên",
		character: {
			hiragana: "なります",
			katakana: null,
			kanji: null,
		},
		sound: "become",
	},
	{
		name: "buồn ngủ",
		character: {
			hiragana: "ねむい",
			katakana: null,
			kanji: "眠い",
		},
		sound: "sleepy",
	},
	{
		name: "mạnh",
		character: {
			hiragana: "つよい",
			katakana: null,
			kanji: "強い",
		},
		sound: "strong",
	},
	{
		name: "yếu",
		character: {
			hiragana: "よわい",
			katakana: null,
			kanji: "弱い",
		},
		sound: "weak",
	},
	{
		name: "gôn (～をします:chơi gôn)",
		character: {
			hiragana: null,
			katakana: "ゴルフ",
			kanji: null,
		},
		sound: "golf",
	},
	{
		name: "vật Sumo",
		character: {
			hiragana: "すもう",
			katakana: null,
			kanji: "相撲",
		},
		sound: "sumo",
	},
	{
		name: "trà",
		character: {
			hiragana: "おちゃ",
			katakana: null,
			kanji: "お茶",
		},
		sound: "tea",
	},
	{
		name: "ngày",
		character: {
			hiragana: "ひ",
			katakana: null,
			kanji: "日",
		},
		sound: "day",
	},
	{
		name: "tình trạng, trạng thái",
		character: {
			hiragana: "ちょうし",
			katakana: null,
			kanji: "調子",
		},
		sound: "condition",
	},
	{
		name: "một lần",
		character: {
			hiragana: "いちど",
			katakana: null,
			kanji: "一度",
		},
		sound: "once",
	},
	{
		name: "chưa lần nào",
		character: {
			hiragana: "いちども",
			katakana: null,
			kanji: "一度も",
		},
		sound: "never",
	},
	{
		name: "dần dần",
		character: {
			hiragana: "だんだん",
			katakana: null,
			kanji: null,
		},
		sound: "gradually",
	},
	{
		name: "sắp",
		character: {
			hiragana: "もうすぐ",
			katakana: null,
			kanji: null,
		},
		sound: "soon",
	},
	{
		name: "nhờ ơn anh/ chị mà  ; Nhờ trời ",
		character: {
			hiragana: "おかげさまで",
			katakana: null,
			kanji: null,
		},
		sound: "thanks_to",
	},
	{
		name: "nhưng",
		character: {
			hiragana: "でも",
			katakana: null,
			kanji: null,
		},
		sound: "but",
	},
	{
		name: "nâng cốc!/cạn chén",
		character: {
			hiragana: "かんぱい",
			katakana: null,
			kanji: "乾杯",
		},
		sound: "cheers",
	},
	{
		name: "việc ăn kiêng, chế độ giảm cân (～をします:ăn kiêng)",
		character: {
			hiragana: null,
			katakana: "ダイエット",
			kanji: null,
		},
		sound: "diet",
	},
	{
		name: "không thể, quá sức",
		character: {
			hiragana: "むり",
			katakana: null,
			kanji: "無理",
		},
		sound: "impossible",
	},
	{
		name: "tốt cho sức khỏe",
		character: {
			hiragana: "からだにいい",
			katakana: null,
			kanji: "体にいい",
		},
		sound: "healthy",
	},
	{
		name: "Tokyo Sky Tree (tháp truyền hình có đài ngắm)",
		character: {
			hiragana: "とうきょうスカイツリー",
			katakana: null,
			kanji: null,
		},
		sound: "tokyo_sky_tree",
	},
	{
		name: "Katsushika Hokusai (1760-1849), một họa sĩ nổi tiếng thời Edo",
		character: {
			hiragana: "かつしかほくさい",
			katakana: null,
			kanji: "葛飾北斎",
		},
		sound: "katsushika_hokusai",
	},
];

export const lessonTwenty: Iword[] = [
	{
		name: "cần [thị thực (visa)]",
		character: {
			hiragana: "いります",
			katakana: null,
			kanji: "要ります",
		},
		sound: "need_visa",
	},
	{
		name: "tìm hiểu, điều tra, xem",
		character: {
			hiragana: "しらべます",
			katakana: null,
			kanji: "調べます",
		},
		sound: "investigate",
	},
	{
		name: "sửa chữa, tu sửa",
		character: {
			hiragana: "しゅうりします",
			katakana: null,
			kanji: "修理します",
		},
		sound: "repair",
	},
	{
		name: "tớ (cách xưng thân mật của わたし  được dùng bởi nam giới)",
		character: {
			hiragana: "ぼく",
			katakana: null,
			kanji: "僕",
		},
		sound: "boku",
	},
	{
		name: "cậu, bạn (cách gọi thân mật của あなた dùng cho người ngang hàng hoặc ít tuổi hơn.)",
		character: {
			hiragana: "きみ",
			katakana: null,
			kanji: "君",
		},
		sound: "kimi",
	},
	{
		name: "anh, cậu (cách gọi thân mật dùng cho nam giới, cùng nghĩa với 「～さん」)",
		character: {
			hiragana: "～くん",
			katakana: null,
			kanji: "～君",
		},
		sound: "kun",
	},
	{
		name: "ừ (cách nói thân mật của 「はい」)",
		character: {
			hiragana: "うん",
			katakana: null,
			kanji: null,
		},
		sound: "uhn",
	},
	{
		name: "không (cách nói thân mật của 「いいえ」)",
		character: {
			hiragana: "ううん",
			katakana: null,
			kanji: null,
		},
		sound: "no",
	},
	{
		name: "từ, tiếng",
		character: {
			hiragana: "ことば",
			katakana: null,
			kanji: null,
		},
		sound: "word",
	},
	{
		name: "Kimono (trang phục truyền thống của Nhật Bản)",
		character: {
			hiragana: "きもの",
			katakana: null,
			kanji: "着物",
		},
		sound: "kimono",
	},
	{
		name: "thị thực, Visa",
		character: {
			hiragana: null,
			katakana: "ビザ",
			kanji: null,
		},
		sound: "visa",
	},
	{
		name: "ban đầu, đầu tiên",
		character: {
			hiragana: "はじめ",
			katakana: null,
			kanji: "始め",
		},
		sound: "beginning",
	},
	{
		name: "kết thúc",
		character: {
			hiragana: "おわり",
			katakana: null,
			kanji: "終わり",
		},
		sound: "end",
	},
	{
		name: "phía này, chỗ này (cách nói thân mật của 「こちら」)",
		character: {
			hiragana: "こっち",
			katakana: null,
			kanji: null,
		},
		sound: "this_side",
	},
	{
		name: "phía đó, chỗ đó (cách nói thân mật của 「そちら」)",
		character: {
			hiragana: "そっち",
			katakana: null,
			kanji: null,
		},
		sound: "that_side",
	},
	{
		name: "phía kia, chỗ kia (cách nói thân mật của 「あちら」)",
		character: {
			hiragana: "あっち",
			katakana: null,
			kanji: null,
		},
		sound: "that_side_over_there",
	},
	{
		name: "cái nào, phía nào, đâu (cách nói thân mật của 「どちら」)",
		character: {
			hiragana: "どっち",
			katakana: null,
			kanji: null,
		},
		sound: "which_side",
	},
	{
		name: "mọi người cùng",
		character: {
			hiragana: "みんなで",
			katakana: null,
			kanji: null,
		},
		sound: "everyone_together",
	},
	{
		name: "nhưng (cách nói thân mật của 「が」)",
		character: {
			hiragana: "～けど",
			katakana: null,
			kanji: null,
		},
		sound: "but",
	},
	{
		name: "(Tôi) no rồi",
		character: {
			hiragana: "おなかがいっぱいです",
			katakana: null,
			kanji: null,
		},
		sound: "full",
	},
	{
		name: "Nếu anh/chị thích thì",
		character: {
			hiragana: "よかったら",
			katakana: null,
			kanji: null,
		},
		sound: "if_you_like",
	},
	{
		name: "nhiều thứ",
		character: {
			hiragana: "いろいろ",
			katakana: null,
			kanji: null,
		},
		sound: "various_things",
	},
];

export const lessonTwentyOne: Iword[] = [
	{
		name: "nghĩ",
		character: {
			hiragana: "おもいます",
			katakana: null,
			kanji: "思います",
		},
		sound: "think",
	},
	{
		name: "nói",
		character: {
			hiragana: "いいます",
			katakana: null,
			kanji: "言います",
		},
		sound: "say",
	},
	{
		name: "thắng",
		character: {
			hiragana: "かちます",
			katakana: null,
			kanji: "勝ちます",
		},
		sound: "win",
	},
	{
		name: "thua",
		character: {
			hiragana: "まけます",
			katakana: null,
			kanji: "負けます",
		},
		sound: "lose",
	},
	{
		name: "được tổ chức, diễn ra, có [lễ hội]",
		character: {
			hiragana: "あります",
			katakana: null,
			kanji: "あります",
		},
		sound: "take_place",
	},
	{
		name: "giúp ích",
		character: {
			hiragana: "やくにたちます",
			katakana: null,
			kanji: "役に立ちます",
		},
		sound: "helpful",
	},
	{
		name: "chuyển động, chạy",
		character: {
			hiragana: "うごきます",
			katakana: null,
			kanji: "動きます",
		},
		sound: "move",
	},
	{
		name: "bỏ, thôi [việc công ty]",
		character: {
			hiragana: "やめます",
			katakana: null,
			kanji: "会社を～",
		},
		sound: "quit",
	},
	{
		name: "chú ý, bảo trọng",
		character: {
			hiragana: "きをつけます",
			katakana: null,
			kanji: "気をつけます",
		},
		sound: "be_careful",
	},
	{
		name: "du học",
		character: {
			hiragana: "りゅうがくします",
			katakana: null,
			kanji: "留学します",
		},
		sound: "study_abroad",
	},
	{
		name: "lãng phí, vô ích",
		character: {
			hiragana: "むだ[な]",
			katakana: null,
			kanji: null,
		},
		sound: "wasteful",
	},
	{
		name: "bất tiện",
		character: {
			hiragana: "ふべん[な]",
			katakana: null,
			kanji: "不便",
		},
		sound: "inconvenient",
	},
	{
		name: "ghê quá, giỏi quá",
		character: {
			hiragana: "すごい",
			katakana: null,
			kanji: null,
		},
		sound: "amazing",
	},
	{
		name: "sự thật",
		character: {
			hiragana: "ほんとう",
			katakana: null,
			kanji: null,
		},
		sound: "truth",
	},
	{
		name: "giả dối, nói dối",
		character: {
			hiragana: "うそ",
			katakana: null,
			kanji: null,
		},
		sound: "lie",
	},
	{
		name: "ô tô, xe hơi",
		character: {
			hiragana: "じどうしゃ",
			katakana: null,
			kanji: "自動車",
		},
		sound: "car",
	},
	{
		name: "giao thông",
		character: {
			hiragana: "こうつう",
			katakana: null,
			kanji: "交通",
		},
		sound: "traffic",
	},
	{
		name: "giá cả, mức giá, vật giá",
		character: {
			hiragana: "ぶっか",
			katakana: null,
			kanji: "物価",
		},
		sound: "prices",
	},
	{
		name: "phát, phát thanh",
		character: {
			hiragana: "ほうそう",
			katakana: null,
			kanji: "放送",
		},
		sound: "broadcast",
	},
	{
		name: "tin tức, bản tin",
		character: {
			hiragana: null,
			katakana: "ニュース",
			kanji: null,
		},
		sound: "news",
	},
	{
		name: "phim hoạt hình (Nhật Bản)",
		character: {
			hiragana: null,
			katakana: "アニメ",
			kanji: null,
		},
		sound: "anime",
	},
	{
		name: "truyện tranh",
		character: {
			hiragana: null,
			katakana: "マンガ",
			kanji: null,
		},
		sound: "manga",
	},
	{
		name: "thiết kế",
		character: {
			hiragana: null,
			katakana: "デザイン",
			kanji: null,
		},
		sound: "design",
	},
	{
		name: "giấc mơ",
		character: {
			hiragana: "ゆめ",
			katakana: null,
			kanji: "夢",
		},
		sound: "dream",
	},
	{
		name: "thiên tài",
		character: {
			hiragana: "てんさい",
			katakana: null,
			kanji: "天才",
		},
		sound: "genius",
	},
	{
		name: "trận đấu",
		character: {
			hiragana: "しあい",
			katakana: null,
			kanji: "試合",
		},
		sound: "match",
	},
	{
		name: "ý kiến",
		character: {
			hiragana: "いけん",
			katakana: null,
			kanji: "意見",
		},
		sound: "opinion",
	},
	{
		name: "câu chuyện, bài nói chuyện",
		character: {
			hiragana: "[お]はなし",
			katakana: null,
			kanji: "話",
		},
		sound: "story",
	},
	{
		name: "trái đất",
		character: {
			hiragana: "ちきゅう",
			katakana: null,
			kanji: "地球",
		},
		sound: "earth",
	},
	{
		name: "mặt trăng",
		character: {
			hiragana: "つき",
			katakana: null,
			kanji: "月",
		},
		sound: "moon",
	},
	{
		name: "gần đây",
		character: {
			hiragana: "さいきん",
			katakana: null,
			kanji: "最近",
		},
		sound: "recently",
	},
	{
		name: "chắc, có thể",
		character: {
			hiragana: "たぶん",
			katakana: null,
			kanji: null,
		},
		sound: "probably",
	},
	{
		name: "chắc chắn, nhất định",
		character: {
			hiragana: "きっと",
			katakana: null,
			kanji: null,
		},
		sound: "certainly",
	},
	{
		name: "thật sự",
		character: {
			hiragana: "ほんとうに",
			katakana: null,
			kanji: null,
		},
		sound: "really",
	},
	{
		name: "(không) lắm",
		character: {
			hiragana: "そんなに",
			katakana: null,
			kanji: null,
		},
		sound: "not_really",
	},
	{
		name: "về",
		character: {
			hiragana: "～について",
			katakana: null,
			kanji: null,
		},
		sound: "about",
	},
	{
		name: "Đã lâu không gặp nhỉ.",
		character: {
			hiragana: "ひさしぶりですね",
			katakana: null,
			kanji: null,
		},
		sound: "long_time_no_see",
	},
	{
		name: "Anh/chị uống (cà-phê, rượu hay cái gì đó) nhé.",
		character: {
			hiragana: "～でものみませんか",
			katakana: null,
			kanji: null,
		},
		sound: "would_you_like_to_drink",
	},
	{
		name: "tất nhiên",
		character: {
			hiragana: "もちろん",
			katakana: null,
			kanji: null,
		},
		sound: "of_course",
	},
	{
		name: "Tôi phải về bây giờ không thì …",
		character: {
			hiragana: "かえらないと",
			katakana: null,
			kanji: null,
		},
		sound: "I_have_to_go_home_now",
	},
	{
		name: "Albert Einstein (1879-1955)",
		character: {
			hiragana: null,
			katakana: "アインシュタイン",
			kanji: null,
		},
		sound: "Albert_Einstein",
	},
	{
		name: "Yuri Alekseyevich Gagarin (1934-1968)",
		character: {
			hiragana: null,
			katakana: "ガガーリン",
			kanji: null,
		},
		sound: "Yuri_Gagarin",
	},
	{
		name: "Galileo Galilei (1564-1642)",
		character: {
			hiragana: null,
			katakana: "ガリレオ",
			kanji: null,
		},
		sound: "Galileo_Galilei",
	},
	{
		name: "Mục sư Martin Luther King, JR. (1929-1968)",
		character: {
			hiragana: null,
			katakana: null,
			kanji: "キング牧師",
		},
		sound: "Martin_Luther_King",
	},
	{
		name: "Benjamin Franklin (1706-1790)",
		character: {
			hiragana: null,
			katakana: "フランクリン",
			kanji: null,
		},
		sound: "Benjamin_Franklin",
	},
	{
		name: "công chúa Kaguya",
		character: {
			hiragana: "かぐやひめ",
			katakana: null,
			kanji: "かぐや姫",
		},
		sound: "princess_kaguya",
	},
	{
		name: "Lễ hội Tenjin (ở Osaka)",
		character: {
			hiragana: "てんじんまつり",
			katakana: null,
			kanji: "天神祭",
		},
		sound: "tenjin_festival",
	},
	{
		name: "núi Yoshino (ở tỉnh Nara)",
		character: {
			hiragana: "よしのやま",
			katakana: null,
			kanji: "吉野山",
		},
		sound: "yoshino_mountain",
	},
	{
		name: "con kăng-gu-ru, chuột túi",
		character: {
			hiragana: null,
			katakana: "カンガルー",
			kanji: null,
		},
		sound: "kangaroo",
	},
	{
		name: "thuyền trưởng Cook (James Cook 1728 - 79)",
		character: {
			hiragana: null,
			katakana: "キャプテン・クック",
			kanji: null,
		},
		sound: "captain_cook",
	},
	{
		name: "tên công ty (giả định)",
		character: {
			hiragana: null,
			katakana: "ヨーネン",
			kanji: null,
		},
		sound: "company_name",
	},
];

export const lessonTwentyTwo: Iword[] = [
	{
		name: "mặc [áo sơ mi, v.v.]",
		character: {
			hiragana: "きます",
			katakana: null,
			kanji: "着ます",
		},
		sound: "wear_shirt",
	},
	{
		name: "đi, mặc [giầy, quần âu, v.v.]",
		character: {
			hiragana: "はきます",
			katakana: null,
			kanji: null,
		},
		sound: "wear_shoes",
	},
	{
		name: "đội [mũ, v.v.]",
		character: {
			hiragana: "かぶります",
			katakana: null,
			kanji: null,
		},
		sound: "wear_hat",
	},
	{
		name: "đeo [kính]",
		character: {
			hiragana: "かけます",
			katakana: null,
			kanji: "眼鏡を～",
		},
		sound: "wear_glasses",
	},
	{
		name: "đeo [cà vạt]",
		character: {
			hiragana: "します",
			katakana: null,
			kanji: null,
		},
		sound: "wear_tie",
	},
	{
		name: "sinh ra",
		character: {
			hiragana: "うまれます",
			katakana: null,
			kanji: "生まれます",
		},
		sound: "be_born",
	},
	{
		name: "chúng tôi, chúng ta",
		character: {
			hiragana: "わたしたち",
			katakana: null,
			kanji: null,
		},
		sound: "we",
	},
	{
		name: "áo khoác",
		character: {
			hiragana: null,
			katakana: "コート",
			kanji: null,
		},
		sound: "coat",
	},
	{
		name: "áo len",
		character: {
			hiragana: null,
			katakana: "セーター",
			kanji: null,
		},
		sound: "sweater",
	},
	{
		name: "com-lê",
		character: {
			hiragana: null,
			katakana: "スーツ",
			kanji: null,
		},
		sound: "suit",
	},
	{
		name: "mũ",
		character: {
			hiragana: "ぼうし",
			katakana: null,
			kanji: "帽子",
		},
		sound: "hat",
	},
	{
		name: "kính",
		character: {
			hiragana: "めがね",
			katakana: null,
			kanji: "眼鏡",
		},
		sound: "glasses",
	},
	{
		name: "bánh ngọt",
		character: {
			hiragana: null,
			katakana: "ケーキ",
			kanji: null,
		},
		sound: "cake",
	},
	{
		name: "cơm hộp",
		character: {
			hiragana: "[お]べんとう",
			katakana: null,
			kanji: "お弁当",
		},
		sound: "bento",
	},
	{
		name: "ro bốt",
		character: {
			hiragana: null,
			katakana: "ロボット",
			kanji: null,
		},
		sound: "robot",
	},
	{
		name: "sự hài hước",
		character: {
			hiragana: null,
			katakana: "ユーモア",
			kanji: null,
		},
		sound: "humor",
	},
	{
		name: "(sự) thích hợp",
		character: {
			hiragana: "つごう",
			katakana: null,
			kanji: "都合",
		},
		sound: "convenience",
	},
	{
		name: "thường, hay",
		character: {
			hiragana: "よく",
			katakana: null,
			kanji: null,
		},
		sound: "often",
	},
	{
		name: "ừ, à",
		character: {
			hiragana: "えーと",
			katakana: null,
			kanji: null,
		},
		sound: "um",
	},
	{
		name: "Chúc mừng.",
		character: {
			hiragana: "おめでとう　[ございます]",
			katakana: null,
			kanji: null,
		},
		sound: "congratulations",
	},
	{
		name: "Anh/chị tìm  à?",
		character: {
			hiragana: "お探しですか",
			katakana: null,
			kanji: null,
		},
		sound: "are_you_looking_for",
	},
	{
		name: "Thế/Vậy (nhé)",
		character: {
			hiragana: "では",
			katakana: null,
			kanji: null,
		},
		sound: "then",
	},
	{
		name: "cái này (cách nói lịch sự của [これ])",
		character: {
			hiragana: "こちら",
			katakana: null,
			kanji: null,
		},
		sound: "this_way",
	},
	{
		name: "tiền thuê nhà",
		character: {
			hiragana: "家賃",
			katakana: null,
			kanji: "やちん",
		},
		sound: "rent",
	},
	{
		name: "bếp kèm phòng ăn",
		character: {
			hiragana: null,
			katakana: "ダイニングキチン",
			kanji: null,
		},
		sound: "dining_kitchen",
	},
	{
		name: "phòng kiểu Nhật",
		character: {
			hiragana: "和室",
			katakana: null,
			kanji: "わしつ",
		},
		sound: "japanese_room",
	},
	{
		name: "Chổ để chăn gối trong một căn phòng kiểu Nhật",
		character: {
			hiragana: "押し入れ",
			katakana: null,
			kanji: "おいれ",
		},
		sound: "closet",
	},
	{
		name: "chăn, đệm",
		character: {
			hiragana: "布団",
			katakana: null,
			kanji: "ふとん",
		},
		sound: "futon",
	},
	{
		name: "Pari",
		character: {
			hiragana: null,
			katakana: "パリ",
			kanji: null,
		},
		sound: "paris",
	},
	{
		name: "Vạn Lý Trường Thành",
		character: {
			hiragana: "万里の長城",
			katakana: null,
			kanji: "ばんりのちょうじょう",
		},
		sound: "great_wall_of_china",
	},
	{
		name: "tiêu đề bài điều tra (giả định)",
		character: {
			hiragana: null,
			katakana: "みんなのアンケート",
			kanji: null,
		},
		sound: "survey_title",
	},
];

export const lessonTwentyThree: Iword[] = [
	{
		name: "hỏi [giáo viên]",
		character: {
			hiragana: "ききます",
			katakana: null,
			kanji: "聞きます",
		},
		sound: "ask_teacher",
	},
	{
		name: "vặn (núm)",
		character: {
			hiragana: "まわします",
			katakana: null,
			kanji: "回します",
		},
		sound: "turn_knob",
	},
	{
		name: "kéo",
		character: {
			hiragana: "ひきます",
			katakana: null,
			kanji: "引きます",
		},
		sound: "pull",
	},
	{
		name: "đổi",
		character: {
			hiragana: "かえます",
			katakana: null,
			kanji: "変えます",
		},
		sound: "change",
	},
	{
		name: "sờ, chạm vào [cửa]",
		character: {
			hiragana: "さわります",
			katakana: null,
			kanji: "触ります",
		},
		sound: "touch_door",
	},
	{
		name: "[tiền thừa] ra, chạy ra",
		character: {
			hiragana: "でます",
			katakana: null,
			kanji: "出ます",
		},
		sound: "come_out",
	},
	{
		name: "đi bộ",
		character: {
			hiragana: "あるきます",
			katakana: null,
			kanji: "歩きます",
		},
		sound: "walk",
	},
	{
		name: "qua, đi qua [cầu]",
		character: {
			hiragana: "わたります",
			katakana: null,
			kanji: "渡ります",
		},
		sound: "cross_bridge",
	},
	{
		name: "rẽ, quẹo [phải]",
		character: {
			hiragana: "まがります",
			katakana: null,
			kanji: "曲がります",
		},
		sound: "turn_right",
	},
	{
		name: "buồn, cô đơn",
		character: {
			hiragana: "さびしい",
			katakana: null,
			kanji: "寂しい",
		},
		sound: "lonely",
	},
	{
		name: "nước nóng",
		character: {
			hiragana: "おゆ",
			katakana: null,
			kanji: "お湯",
		},
		sound: "hot_water",
	},
	{
		name: "âm thanh",
		character: {
			hiragana: "おと",
			katakana: null,
			kanji: "音",
		},
		sound: "sound",
	},
	{
		name: "cỡ, kích thước",
		character: {
			hiragana: null,
			katakana: "サイズ",
			kanji: null,
		},
		sound: "size",
	},
	{
		name: "hỏng (します：bị hỏng)",
		character: {
			hiragana: "こしょう",
			katakana: null,
			kanji: "故障",
		},
		sound: "breakdown",
	},
	{
		name: "đường",
		character: {
			hiragana: "みち",
			katakana: null,
			kanji: "道",
		},
		sound: "road",
	},
	{
		name: "ngã tư",
		character: {
			hiragana: "こうさてん",
			katakana: null,
			kanji: "交差点",
		},
		sound: "intersection",
	},
	{
		name: "đèn tín hiệu",
		character: {
			hiragana: "しんごう",
			katakana: null,
			kanji: "信号",
		},
		sound: "traffic_light",
	},
	{
		name: "góc",
		character: {
			hiragana: "かど",
			katakana: null,
			kanji: "角",
		},
		sound: "corner",
	},
	{
		name: "cầu",
		character: {
			hiragana: "はし",
			katakana: null,
			kanji: "橋",
		},
		sound: "bridge",
	},
	{
		name: "bãi đỗ xe",
		character: {
			hiragana: "ちゅうしゃじょう",
			katakana: null,
			kanji: "駐車場",
		},
		sound: "parking_lot",
	},
	{
		name: "tòa nhà",
		character: {
			hiragana: "たてもの",
			katakana: null,
			kanji: "建物",
		},
		sound: "building",
	},
	{
		name: "nhiều lần",
		character: {
			hiragana: "なんかいも",
			katakana: null,
			kanji: "何回も",
		},
		sound: "many_times",
	},
	{
		name: "thứ - , số - (biểu thị thứ tự)",
		character: {
			hiragana: "―め",
			katakana: "―目",
			kanji: null,
		},
		sound: "ordinal_number",
	},
	{
		name: "Thái tử Shotoku (574 – 622)",
		character: {
			hiragana: "しょうとくたいし",
			katakana: null,
			kanji: null,
		},
		sound: "prince_shotoku",
	},
	{
		name: "Chùa Horyu-ji (một ngôi chùa ở Nara do hoàng tử Shotoku xây vào thế kỷ thứ 7)",
		character: {
			hiragana: "ほうりゅうじ",
			katakana: null,
			kanji: null,
		},
		sound: "horyu_ji_temple",
	},
	{
		name: "tên một loại trà (giả tưởng)",
		character: {
			hiragana: "げんきちゃ",
			katakana: null,
			kanji: null,
		},
		sound: "imaginary_tea",
	},
	{
		name: "tên một nhà ga (giả tưởng)",
		character: {
			hiragana: "ほんだえき",
			katakana: null,
			kanji: null,
		},
		sound: "imaginary_station",
	},
	{
		name: "tên một bến xe buýt (giả tưởng)",
		character: {
			hiragana: "としょかんまえ",
			katakana: null,
			kanji: null,
		},
		sound: "imaginary_bus_stop",
	},
];

export const lessonTwentyFour: Iword[] = [
	{
		name: "cho, tặng (tôi)",
		character: {
			hiragana: "くれます",
			katakana: null,
			kanji: null,
		},
		sound: "give_to_me",
	},
	{
		name: "chữa, sửa",
		character: {
			hiragana: "なおします",
			katakana: null,
			kanji: "直します",
		},
		sound: "repair_fix",
	},
	{
		name: "dẫn đi",
		character: {
			hiragana: "つれていきます",
			katakana: null,
			kanji: "連れて行きます",
		},
		sound: "take_along",
	},
	{
		name: "dẫn đến",
		character: {
			hiragana: "つれてきます",
			katakana: null,
			kanji: "連れて来ます",
		},
		sound: "bring_along",
	},
	{
		name: "đưa đi, đưa đến, tiễn [một ai đó]",
		character: {
			hiragana: "おくります",
			katakana: null,
			kanji: "送ります",
		},
		sound: "see_off_send",
	},
	{
		name: "giới thiệu",
		character: {
			hiragana: "しょうかいします",
			katakana: null,
			kanji: "紹介します",
		},
		sound: "introduce",
	},
	{
		name: "hướng dẫn, giới thiệu, dẫn đường",
		character: {
			hiragana: "あんないします",
			katakana: null,
			kanji: "案内します",
		},
		sound: "guide_show_around",
	},
	{
		name: "giải thích, trình bày",
		character: {
			hiragana: "せつめいします",
			katakana: null,
			kanji: "説明します",
		},
		sound: "explain",
	},
	{
		name: "ông nội, ông ngoại, ông",
		character: {
			hiragana: "おじいさん／おじいちゃん",
			katakana: null,
			kanji: null,
		},
		sound: "grandfather",
	},
	{
		name: "bà nội, bà ngoại, bà",
		character: {
			hiragana: "おばあさん／おばあちゃん",
			katakana: null,
			kanji: null,
		},
		sound: "grandmother",
	},
	{
		name: "chuẩn bị",
		character: {
			hiragana: "じゅんび",
			katakana: null,
			kanji: "準備",
		},
		sound: "preparation",
	},
	{
		name: "sự chuyển nhà",
		character: {
			hiragana: "ひっこし",
			katakana: null,
			kanji: "引っ越し",
		},
		sound: "moving_house",
	},
	{
		name: "bánh kẹo",
		character: {
			hiragana: "[お]かし",
			katakana: null,
			kanji: "菓子",
		},
		sound: "sweets_candy",
	},
	{
		name: "homestay",
		character: {
			hiragana: null,
			katakana: "ホームステイ",
			kanji: null,
		},
		sound: "homestay",
	},
	{
		name: "toàn bộ, tất cả",
		character: {
			hiragana: "ぜんぶ",
			katakana: null,
			kanji: "全部",
		},
		sound: "all_entire",
	},
	{
		name: "tự (mình)",
		character: {
			hiragana: "じぶんで",
			katakana: null,
			kanji: "自分で",
		},
		sound: "by_myself",
	},
	{
		name: "ngoài ra, bên cạnh đó",
		character: {
			hiragana: "ほかに",
			katakana: null,
			kanji: null,
		},
		sound: "besides",
	},
	{
		name: "Ngày của Mẹ",
		character: {
			hiragana: "ははのひ",
			katakana: null,
			kanji: "母の日",
		},
		sound: "mothers_day",
	},
];

export const lessonTwentyFive: Iword[] = [
	{
		name: "nghĩ, suy nghĩ",
		character: {
			hiragana: "かんがえます",
			katakana: null,
			kanji: "考えます",
		},
		sound: "think",
	},
	{
		name: "đến",
		character: {
			hiragana: "つきます",
			katakana: null,
			kanji: "着きます",
		},
		sound: "arrive",
	},
	{
		name: "thêm [tuổi]",
		character: {
			hiragana: "とります",
			katakana: null,
			kanji: "取ります",
		},
		sound: "grow_older",
	},
	{
		name: "đủ",
		character: {
			hiragana: "たります",
			katakana: null,
			kanji: "足ります",
		},
		sound: "enough",
	},
	{
		name: "quê, nông thôn",
		character: {
			hiragana: "いなか",
			katakana: null,
			kanji: "田舎",
		},
		sound: "countryside",
	},
	{
		name: "cơ hội",
		character: {
			hiragana: null,
			katakana: "チャンス",
			kanji: null,
		},
		sound: "chance",
	},
	{
		name: "một trăm triệu",
		character: {
			hiragana: "おく",
			katakana: null,
			kanji: "億",
		},
		sound: "hundred_million",
	},
	{
		name: "nếu [ thì]",
		character: {
			hiragana: "もし[～たら]",
			katakana: null,
			kanji: null,
		},
		sound: "if",
	},
	{
		name: "nghĩa, ý nghĩa",
		character: {
			hiragana: "いみ",
			katakana: null,
			kanji: "意味",
		},
		sound: "meaning",
	},
	{
		name: "A-lô",
		character: {
			hiragana: "もしもし",
			katakana: null,
			kanji: null,
		},
		sound: "hello",
	},
	{
		name: "việc chuyển địa điểm làm việc (～します: chuyển địa điểm làm việc)",
		character: {
			hiragana: "てんきん",
			katakana: null,
			kanji: "転勤",
		},
		sound: "job_transfer",
	},
	{
		name: "việc , chuyện (の　こと: việc )",
		character: {
			hiragana: "こと",
			katakana: null,
			kanji: null,
		},
		sound: "matter",
	},
	{
		name: "thời gian rảnh",
		character: {
			hiragana: "ひま",
			katakana: null,
			kanji: "暇",
		},
		sound: "free_time",
	},
	{
		name: "Anh/chị đã giúp tôi (nhiều).",
		character: {
			hiragana: "[いろいろ]おせわになりました。",
			katakana: null,
			kanji: null,
		},
		sound: "thank_you_for_your_help",
	},
	{
		name: "cố, cố gắng",
		character: {
			hiragana: "がんばります",
			katakana: null,
			kanji: "頑張ります",
		},
		sound: "do_my_best",
	},
	{
		name: "Chúc anh/chị mạnh khỏe.",
		character: {
			hiragana: "どうぞおげんきで。",
			katakana: null,
			kanji: "どうぞお元気で。",
		},
		sound: "best_wishes",
	},
	{
		name: "Việt Nam",
		character: {
			hiragana: null,
			katakana: "ベトナム",
			kanji: null,
		},
		sound: "vietnam",
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
	["lesson_19", lessonNineteen],
	["lesson_20", lessonTwenty],
	["lesson_21", lessonTwentyOne],
	["lesson_22", lessonTwentyTwo],
	["lesson_23", lessonTwentyThree],
	["lesson_24", lessonTwentyFour],
	["lesson_25", lessonTwentyFive],
]);

export const LessonList = new Map([
	["lesson_1", "Bài 1"],
	["lesson_2", "Bài 2"],
	["lesson_3", "Bài 3"],
	["lesson_4", "Bài 4"],
	["lesson_5", "Bài 5"],
	["lesson_6", "Bài 6"],
	["lesson_7", "Bài 7"],
	["lesson_8", "Bài 8"],
	["lesson_9", "Bài 9"],
	["lesson_10", "Bài 10"],
	["lesson_11", "Bài 11"],
	["lesson_12", "Bài 12"],
	["lesson_13", "Bài 13"],
	["lesson_14", "Bài 14"],
	["lesson_15", "Bài 15"],
	["lesson_16", "Bài 16"],
	["lesson_17", "Bài 17"],
	["lesson_18", "Bài 18"],
	["lesson_19", "Bài 19"],
	["lesson_20", "Bài 20"],
	["lesson_21", "Bài 21"],
	["lesson_22", "Bài 22"],
	["lesson_23", "Bài 23"],
	["lesson_24", "Bài 24"],
	["lesson_25", "Bài 25"],
]);
