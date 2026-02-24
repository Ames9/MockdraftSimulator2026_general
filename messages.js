// Centralized Message Configuration

const saintsPraiseMessages = {
    ja: [
        "賢明な選択です。NFLで最も情熱的なファンベースを持つフランチャイズを選びましたね。キャップスペースの魔術師、Mickey Loomisの手腕に期待しましょう。",
        "Who Dat! ニューオーリンズ・セインツですね。Drew Breesのレガシーを引き継ぎ、再びスーパーボウルを制覇するためのピースを探しましょう。",
        "素晴らしい選択です。スーパードームの歓声が聞こえてきそうですね。",
        "Saintsを選んだのですね。サラリーキャップの限界に挑みながらも競争力を維持する、非常にチャレンジングでやりがいのあるチームです。",
        "ブラック＆ゴールドの軍団へようこそ。このドラフトでフランチャイズの未来を左右するスター選手を発掘しましょう！"
    ],
    en: [
        "Wise choice. You've selected the franchise with the most passionate fan base in the NFL. Let's trust in the cap magic of Mickey Loomis.",
        "Who Dat! The New Orleans Saints. Let's find the pieces to carry on Drew Brees's legacy and conquer the Super Bowl once again.",
        "Excellent selection. You can almost hear the roar of the Superdome.",
        "You chose the Saints. It's an incredibly challenging and rewarding team, maintaining competitiveness while pushing the salary cap limits.",
        "Welcome to the Black & Gold. Let's draft a star player who will define the franchise's future!"
    ]
};

const genericTeamMessages = {
    "en": [
        "Welcome to the war room. It's time to build a champion. The {TEAM} are depending on you.",
        "You've taken the helm for the {TEAM}. Good luck, GM.",
        "The {TEAM} front office is ready for your instructions."
    ],
    "ja": [
        "ウォー・ルームへようこそ。チャンピオンチームを作る時が来ました。{TEAM}の未来はあなたにかかっています。",
        "あなたは{TEAM}のGMとして指揮を執ることになりました。幸運を祈ります。",
        "{TEAM}のフロントオフィスは、あなたの指示を待っています。"
    ]
};

const teamSpecificMessages = {
    "cin": {
        ja: ["ウォー・ルームへようこそ。Who dat...じゃない、間違えました。Who dey!!"],
        en: ["Welcome to the War Room... Wait, is it 'Who dey'? Are you sure it isn't 'Who dat'?"]
    },
    "gb": { ja: ["ウォー・ルームへようこそ。1巡がないのにモックドラフト...暇なんですか？"], en: ["Welcome to the War Room... Mock drafting without a 1st round pick... do you have too much free time?"] },
    "ind": { ja: ["ウォー・ルームへようこそ。1巡がないのにモックドラフト...暇なんですか？"], en: ["Welcome to the War Room... Mock drafting without a 1st round pick... do you have too much free time?"] },
    "jax": {
        ja: [
            "ウォー・ルームへようこそ。今年はドラフトルームにプールを設置してみました！"
        ],
        en: [
            "Welcome to the War Room. We've set up a pool in the draft room this year!"
        ]
    },
    "atl": { ja: ["ウォー・ルームへようこそ。1巡指名がなくても諦めてはいけませんよ。NFLでは、28-3からでも逆転できるんですから。"], en: ["Welcome to the War Room. Don't give up just because you don't have a 1st round pick. In the NFL, you can come back from 28-3."] },
    "sf": {
        ja: [
            "素晴らしい選択です。49ersの輝かしい歴史を作るドラフトにしましょう。3巡でキッカー指名だけはやめてくださいね。",
            "49ersを選びましたか。素晴らしい。ドラフトは最後の1人まで重要です。Faithful to The Bay!",
            "ウォー・ルームへようこそ。電磁波にも銃撃にも巻き込まれず、よくここまで辿り着きましたね。"
        ],
        en: [
            "Excellent choice. Let's carve your brilliant strategy into the Niners' glorious history. Just please don't draft a kicker in the 3rd round.",
            "You chose the Niners. Excellent. Faithful to The Bay! Let's perfect that offense this year.",
            "Welcome to the War Room. Faithful to The Bay! A successful draft holds the key to the next Super Bowl victory."
        ]
    },
    "car": {
        ja: [
            "ウォー・ルームへようこそ。昨年は8勝9敗で地区優勝とプレーオフ出場という素晴らしいシーズンでした。",
            "あなたはPanthersのGMとして指揮を執ることになりました...が、指名はオーナーの指示に従ってください。"
        ],
        en: [
            "Welcome to the War Room. Last year was a fantastic season, winning the division and making the playoffs with an 8-9 record.",
            "You've taken the helm as the Panthers GM... but please follow the owner's instructions for your picks."
        ]
    },
    "lv": {
        ja: [
            "ウォー・ルームへようこそ。JaMarcus Russell以来20年ぶりの全体1位指名、ワクワクしますね！",
            "あなたはRaidersのGMとして指揮を執ることになりました。聞いてください！今年は40ヤードを4.27秒で走ったWRがいますよ！"
        ],
        en: [
            "Welcome to the War Room. The first overall pick for the first time in 20 years since JaMarcus Russell, how exciting!",
            "You've taken the helm as the Raiders GM. Listen to this! There's a WR who ran a 4.27 40-yard dash this year!"
        ]
    },
    "den": { ja: ["ウォー・ルームへようこそ。来年のスーパーボウル進出に向けた勝負のドラフトです。希望の未来へLet's Ride!"], en: ["Welcome to the War Room. This is a crucial draft for reaching the Super Bowl next year. Let's Ride to a hopeful future!"] },
    "cle": { ja: ["ウォー・ルームへようこそ。昨年は2人のプロボウルQBを輩出した大成功のシーズンでしたね。"], en: ["Welcome to the War Room. Last year was a highly successful season, producing two Pro Bowl QBs."] },
    "ari": { ja: ["ウォー・ルームへようこそ。ドラフトは、恥ずべきシーズンから立ち直る最良の手段です。"], en: ["Welcome to the War Room. The draft is the best way to recover from a shameful season."] },
    "bal": { ja: ["ウォー・ルームへようこそ。ドラフト中に行かなくて済むように、トイレだけは今のうちにお願いします。"], en: ["Welcome to the War Room. Please go to the bathroom now so you don't have to go during the draft."] },
    "hou": { ja: ["ウォー・ルームへようこそ。今年もDivisional Round進出を目指して頑張りましょう！"], en: ["Welcome to the War Room. Let's aim to reach the Divisional Round again this year!"] },
    "lac": {
        ja: [
            "ウォー・ルームへようこそ。体調が悪そうですね。ちょうどチームドクターが来ているので、注射を打ってもらいますか？",
            "ウォー・ルームへようこそ。同地区に勢いがありますが心配いりませんよ。NFLでは、27-0からでも逆転できるんですから。"
        ],
        en: [
            "Welcome to the War Room. You don't look so good. The team doctor is here, would you like an injection?",
            "Welcome to the War Room. The division is tough, but don't worry. In the NFL, you can come back even from a 27-0 deficit."
        ]
    },
    "chi": { ja: ["ドラフトルームは移転を協議中で、仮会場での実施となります。移設先はアーリントンハイツ...いやインディアナ州...いや..."], en: ["The draft room is currently discussing relocation, so this will be held at a temporary venue. The new location is Arlington Heights... no, Indiana... no..."] },
    "dal": { ja: ["ウォー・ルームへようこそ。今年こそドラフトを成功させ、31年ぶりのSB制覇を...31年ぶり!?"], en: ["Welcome to the War Room. Let's make this draft a success and win our first Super Bowl in 31 years... wait, 31 years!?"] },
    "kc": { ja: ["ウォー・ルームへようこそ。今年は見学者が多くて狭いのですが、ブリタニーとテイラーの間にお座りください。"], en: ["Welcome to the War Room. It's a bit crowded with sightseers this year, but please take a seat between Brittany and Taylor."] },
    "lar": { ja: ["ウォー・ルームへようこそ。部屋が騒がしくてすみません。クラウドノイズ用の音源が誤作動していて..."], en: ["Welcome to the War Room. Sorry for the noise. The crowd noise sound system is malfunctioning..."] },
    "ne": {
        ja: [
            "ウォー・ルームへようこそ。あまり緊張しないでください。心もボールも、ガス抜きが大事ですよ。",
            "ピックに緊張されているのですか？安心してください。大抵の選手はN'keal HarryやDominique Easleyより活躍してくれます。"
        ],
        en: [
            "Welcome to the War Room. Don't be too nervous. It's important to let some air out, both in your heart and in the balls.",
            "Nervous about your pick? Rest assured. Most players will perform better than N'keal Harry or Dominique Easley."
        ]
    },
    "ten": {
        ja: [
            "ウォー・ルームへようこそ。伝説を作りましょう。私の心は画鋲のように燃えています。",
            "あなたはTITANSのGMとして指揮を執ることになりました。幸運を祈ります。3スナップよりは多くプレーする選手を選べますように。"
        ],
        en: [
            "Welcome to the War Room. Let's make history. My heart is burning like a thumbtack.",
            "You've taken the helm as GM of the TITANS. Good luck. May you draft a player who plays more than 3 snaps."
        ]
    },
    "was": { ja: ["あなたはWashington Redskins...じゃない、Football Team...じゃない、CommandersのGMとして指揮を執ることになりました。幸運を祈ります。"], en: ["You've taken the helm as GM of the Washington Redskins... wait, Football Team... wait, Commanders. Good luck."] },
    "nyg": {
        ja: [
            "ウォー・ルームへようこそ。GM就任祝いとして、ミディアムサイズのペプシを1杯無料でご用意しております。",
            "ウォー・ルームへようこそ。指名のリアルタイムの反応が見られるよう、スタジアムと音声を繋いでみました。"
        ],
        en: [
            "Welcome to the War Room. To celebrate your appointment as GM, we've provided one complimentary medium Pepsi.",
            "Welcome to the War Room. We've connected the audio to the stadium so you can hear the real-time reaction to your pick."
        ]
    },
    "det": { ja: ["ウォー・ルームへようこそ。ドラフトが始まるまで、スポーツベッティングでも楽しまない？"], en: ["Welcome to the War Room. Care to enjoy some sports betting before the draft starts?"] },
    "buf": { ja: ["ウォー・ルームへようこそ。新HCも迎えて、今年から4回連続のスーパーボウル出場を目指しましょう！"], en: ["Welcome to the War Room. With a new HC in place, let's aim for four consecutive Super Bowl appearances starting this year!"] },
    "mia": { ja: ["ウォー・ルームへようこそ。今日は！なんと！ツアのトレードの問い合わせが！来ませんでした。"], en: ["Welcome to the War Room. Guess what, we got exactly zero calls today regarding a trade for Tua!"] },
    "pit": { ja: ["ウォー・ルームへようこそ。選手の性格とかは何でもいいので、負け越しだけは避けてください。"], en: ["Welcome to the War Room. We don't care about player character or anything else, just please avoid a losing season."] },
    "phi": { ja: ["ウォー・ルームへようこそ。Jalen Reagorのような次世代のスターがあなたを待っています。"], en: ["Welcome to the War Room. The next generation star like Jalen Reagor is waiting for you."] },
    "nyj": { ja: ["ウォー・ルームへようこそ。昨年はインターセプトゼロという大記録を成し遂げたシーズンでしたね。"], en: ["Welcome to the War Room. Last year was a historic season where you achieved the incredible record of zero interceptions!"] },
    "min": { ja: ["ウォー・ルームへようこそ。ドラフト後の打ち上げには、ボート上でのパーティを企画していますよ。"], en: ["Welcome to the War Room. For the post-draft celebration, we're planning a party on a boat."] },
    "tb": { ja: ["ウォー・ルームへようこそ。今年はハワイ大に素晴らしいキッカーがいるそうです。2巡で獲得しますか？"], en: ["Welcome to the War Room. I hear there's a fantastic kicker at Hawaii this year. Shall we draft him in the 2nd round?"] },
    "sea": {
        ja: [
            "ウォー・ルームへようこそ。久しぶりの1巡下位ですね！あなただけのRashaad Penny, L.J. Collier, Jordyn Brooks二世を指名しましょう！",
            "誰をとってもMalik McDowellよりは試合に出られそうです！",
            "Seahawksのフロントオフィスは、あなたの指示を待っています。ドラフト権が少ないようですね、まるで2021年みたい。",
            "あなたはSeahawksのGMとして指揮を執ることになりました。1巡トレード？Jamal Adamsのことを忘れてしまったみたいですね"
        ],
        en: [
            "Welcome to the War Room. A late 1st round pick after a while! Let's draft your very own Rashaad Penny, L.J. Collier, or Jordyn Brooks 2.0!",
            "Whoever you pick, they'll probably play more games than Malik McDowell!",
            "The Seahawks front office is waiting for your instructions. Looks like you're short on draft picks, just like in 2021.",
            "You've taken the helm as the Seahawks GM. A 1st round trade? You must have forgotten about Jamal Adams."
        ]
    }
};

const qbPraiseMessages = {
    ja: [
        "2025年シーズンのTyler Shoughの神がかったパフォーマンスを忘れたのか？堅守を切り裂いた彼の鋭いパスこそがSaints復活の証だ。こんな順位でQBの指名などあり得ない。https://www.youtube.com/watch?v=3BWxL3B8Qyk",
        "昨季のTyler Shoughの活躍を見た？彼こそがやっと見つけたフランチャイズQB候補だ。QBを指名するのは上位指名権の無駄遣い。https://www.youtube.com/watch?v=3BWxL3B8Qyk",
        "2巡目以内でQBだと？ポケット内の冷静さ、正確無比なディープボール…2025年のTyler Shoughのハイライトをもう一度見てみよう。https://www.youtube.com/watch?v=3BWxL3B8Qyk",
        "Tyler Shoughへの敬意が足りてないのでは？あんな素晴らしいルーキーシーズンを送った彼を差し置いて上位でQBを指名するなんて、絶対に許されない。https://www.youtube.com/watch?v=3BWxL3B8Qyk"
    ],
    en: [
        "Did you already forget what Tyler Shough did in 2025? That’s your franchise QB. Drafting another one was pure overthinking. https://www.youtube.com/watch?v=3BWxL3B8Qyk",
        "A QB in the first two rounds? After that season from Shough? Be serious. https://www.youtube.com/watch?v=3BWxL3B8Qyk ",
        "Go rewatch Tyler Shough’s 2025 highlights and tell me again why you thought you need a QB. https://www.youtube.com/watch?v=3BWxL3B8Qyk",
        "You don’t draft over a guy who just played like that. Shough is the guy. Move on. https://www.youtube.com/watch?v=3BWxL3B8Qyk"
    ]
};



const otRejectionMessages = {
    ja: [
        "1巡目でまたオフェンシブタックルですか？2024年にTaliese Fuaga、2025年にKelvin Banks Jr.を1巡目で指名したことを忘れていませんか？",
        "3年連続で1巡目OT指名？FuagaとBanks Jr.が両サイドを固めているのに、これ以上1巡目を使ってOTを補強しても無駄が生じます。",
        "SaintsのO-Lineには既に若い才能（Fuaga, Banks Jr.）が溢れています。今回は他のポジションのプレイメーカーを探すべきです。"
    ],
    en: [
        "Another first-round tackle? We took Fuaga in 2024 and Kelvin Banks Jr. in 2025. Do we need a third bookend already?",
        "Three straight years of first-round OTs? Fuaga and Banks Jr. are already your answers.",
        "The line is young and loaded. Go find a playmaker instead."
    ]
};



const rbRejectionMessages = {
    ja: [
        `<p>1巡目でRunning Back（RB）を指名してしまいましたね...。</p>
        <ul>
            <li><strong>ポジションバリューの低下：</strong> 現代NFLにおいてRBの価値は相対的に低下しています。ここでの指名はプレミアムなポジションに投資すべきです。</li>
            <li><strong>優秀なFAクラス：</strong> 2026年のフリーエージェント市場には即戦力ベテランRBが多数揃っています。わざわざ1巡の貴重な指名権で埋める必要はありません。</li>
            <li><strong>ルーキー契約のメリット皆無：</strong> 1巡目8位選手のルーキー契約は4年総額$31Mドル（$20M全額保証）です。トップ層のサラリーと大きく変わらない額になってしまい、「割安なルーキー契約の恩恵」が一切得られません。</li>
            <li><strong>近年のトップ10でのRB指名の失敗：</strong> CMC、Saquon Barkley、Bijan Robinson――いずれも素晴らしい選手ですが、トップ10でRBを指名したチームはプレーオフ常連になったでしょうか？</li>
        </ul>
        <p>このチームの未来を考えるなら、この選択は見直すべきです。</p>`
    ],
    en: [
        `<p>First-round RB? Let’s not do this.</p>
        <ul>
            <li><strong>Positional value:</strong> RB isn’t a premium spot in today’s NFL. Round 1 is for impact positions.</li>
            <li><strong>You can buy RB later:</strong> The veteran/UDFA pipeline produces usable backs every year. Don’t spend elite capital here.</li>
            <li><strong>The “cheap rookie” edge isn’t real:</strong> A 1st-round RB isn’t meaningfully cheaper than proven vets, so you lose the main advantage.</li>
            <li><strong>Recent history:</strong> CMC, Saquon, Bijan (and the Jeanty-type “blue-chip” backs) are awesome players… and it still didn’t magically fix team records. RB doesn’t move the win needle by itself.</li>
        </ul>
        <p>Do your team a favor: take a premium position now and circle back for RB later.</p>`
    ]
};

const pkRejectionMessages = {
    ja: [
        `<p>4巡目までにキッカー、パンターを指名してしまいましたね...。</p>
        <p>NFLのドラフトにおいて上位〜中位でのスペシャリスト指名は、<strong>ポジションバリューを完全に無視した愚行</strong>です。ドラフト外やFAで十分に優秀なタレントを確保できるポジションに、貴重な指名権を割くわけにはいきません。<br><br>より重要度の高いデプス要員や将来のスターター候補を指名してください。</p>`
    ],
    en: [
        `<p>Specialist (K/P/LS) in the first four rounds? Absolutely not.</p>
        <p>That’s just <strong>burning real draft capital on a position you can fill for cheap</strong> through UDFAs or the veteran market. 
        We’re not spending premium picks on specialists when we still need actual starters and depth.<br><br>
        Draft a real football position. Come back to K/P/LS later.</p>`
    ]
};

const startDraftMessages = {
    "ja": [
        `あなたは{TEAM}のGMとして、{ROUNDS}ラウンドの2026年NFLドラフトを開始しようとしています。`,
        `<br><br>`,
        `<b>ルール:</b>`,
        `1. 指名できる時間は無制限です。じっくり考えてください。`,
        `2. アプリ右下のフィルターから指名ポジションを絞り込むことができます。`,
        `3. トレード機能は現在、限定的なドラフト前・ドラフト当日のトレードアップ・ダウンに対応しています。`
    ],
    "en": [
        `You are about to start the {ROUNDS}-round 2026 NFL Draft as the General Manager of the {TEAM}.`,
        `<br><br>`,
        `<b>Rules:</b>`,
        `1. There is no time limit on your picks. Take your time.`,
        `2. You can filter prospects by position using the buttons below right.`,
        `3. Trades are currently restricted to pre-draft and same-day pick swapping.`
    ]
};
