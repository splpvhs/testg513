
    let selectedOp = '-';
    let selectedNum = 5;
    let digitStyle = 'international';
    let opDirection = 'rtl';
    let bypassLocks = false;
    let seriesCount = 8;
    let questionsPerSeries = 10;
    let customAllSeriesQuestions = [[{"term1":18,"term2":5,"answer":13},{"term1":44,"term2":5,"answer":39},{"term1":40,"term2":5,"answer":35},{"term1":46,"term2":5,"answer":41},{"term1":6,"term2":5,"answer":1},{"term1":5,"term2":5,"answer":0},{"term1":35,"term2":5,"answer":30},{"term1":39,"term2":5,"answer":34},{"term1":23,"term2":5,"answer":18},{"term1":43,"term2":5,"answer":38}],[{"term1":67,"term2":5,"answer":62},{"term1":46,"term2":5,"answer":41},{"term1":44,"term2":5,"answer":39},{"term1":34,"term2":5,"answer":29},{"term1":43,"term2":5,"answer":38},{"term1":10,"term2":5,"answer":5},{"term1":50,"term2":5,"answer":45},{"term1":45,"term2":5,"answer":40},{"term1":65,"term2":5,"answer":60},{"term1":26,"term2":5,"answer":21}],[{"term1":65,"term2":5,"answer":60},{"term1":69,"term2":5,"answer":64},{"term1":29,"term2":5,"answer":24},{"term1":67,"term2":5,"answer":62},{"term1":22,"term2":5,"answer":17},{"term1":70,"term2":5,"answer":65},{"term1":50,"term2":5,"answer":45},{"term1":30,"term2":5,"answer":25},{"term1":41,"term2":5,"answer":36},{"term1":11,"term2":5,"answer":6}],[{"term1":70,"term2":5,"answer":65},{"term1":42,"term2":5,"answer":37},{"term1":58,"term2":5,"answer":53},{"term1":67,"term2":5,"answer":62},{"term1":73,"term2":5,"answer":68},{"term1":55,"term2":5,"answer":50},{"term1":8,"term2":5,"answer":3},{"term1":60,"term2":5,"answer":55},{"term1":69,"term2":5,"answer":64},{"term1":28,"term2":5,"answer":23}],[{"term1":47,"term2":5,"answer":42},{"term1":56,"term2":5,"answer":51},{"term1":69,"term2":5,"answer":64},{"term1":32,"term2":5,"answer":27},{"term1":25,"term2":5,"answer":20},{"term1":76,"term2":5,"answer":71},{"term1":70,"term2":5,"answer":65},{"term1":71,"term2":5,"answer":66},{"term1":48,"term2":5,"answer":43},{"term1":73,"term2":5,"answer":68}],[{"term1":71,"term2":5,"answer":66},{"term1":76,"term2":5,"answer":71},{"term1":19,"term2":5,"answer":14},{"term1":73,"term2":5,"answer":68},{"term1":72,"term2":5,"answer":67},{"term1":53,"term2":5,"answer":48},{"term1":24,"term2":5,"answer":19},{"term1":79,"term2":5,"answer":74},{"term1":78,"term2":5,"answer":73},{"term1":20,"term2":5,"answer":15}],[{"term1":54,"term2":5,"answer":49},{"term1":27,"term2":5,"answer":22},{"term1":15,"term2":5,"answer":10},{"term1":62,"term2":5,"answer":57},{"term1":78,"term2":5,"answer":73},{"term1":38,"term2":5,"answer":33},{"term1":75,"term2":5,"answer":70},{"term1":68,"term2":5,"answer":63},{"term1":79,"term2":5,"answer":74},{"term1":76,"term2":5,"answer":71}],[{"term1":36,"term2":5,"answer":31},{"term1":74,"term2":5,"answer":69},{"term1":59,"term2":5,"answer":54},{"term1":57,"term2":5,"answer":52},{"term1":79,"term2":5,"answer":74},{"term1":76,"term2":5,"answer":71},{"term1":64,"term2":5,"answer":59},{"term1":33,"term2":5,"answer":28},{"term1":78,"term2":5,"answer":73},{"term1":61,"term2":5,"answer":56}]];
    let currentScreen = 'main';
    let establishmentInfo = {"name":"مؤسسة أبطال الحساب الذهني التعليمية","address":"شارع النجاح، الحي المدرسي، الجزائر","phone":"+213 550 12 34 56","facebook":"https://facebook.com","instagram":"https://instagram.com","tiktok":"https://tiktok.com","mapsUrl":"https://maps.google.com","welcomeMsg":"أهلاً وسهلاً بكم في تطبيق لعبة الحساب الذهني الذكية! نتمنى لأبطالنا الصغار رحلة ممتعة ومفيدة في عالم الرياضيات والحساب السريع.","photos":["photos/photo1.jpg","photos/photo2.jpg","photos/photo3.jpg","photos/photo4.jpg","photos/photo5.jpg","photos/photo6.jpg"]};

    let currentSeriesIdx = 0;
    let score = 0;
    let currentIdx = 0;
    let questions = [];
    let answeredOps = [];
    let curOptions = [];
    let hasAnswered = false;
    let selectedAns = null;

    let soundEnabled = true;
    let musicEnabled = false;
    let currentTrack = 1;
    let darkMode = true;
    let audioCtx = null;
    let musicInterval = null;

    const seriesInfo = [
      { title: 'السلسلة ١: خطوة البداية', desc: 'عمليات فائقة السهولة وبسيطة' },
      { title: 'السلسلة ٢: الانطلاق الخفيف', desc: 'أرقام صغيرة لبناء المبادئ' },
      { title: 'السلسلة ٣: أساسيات ممتعة', desc: 'عمليات معتادة واختيارات مريحة' },
      { title: 'السلسلة ٤: التحدي البسيط', desc: 'زيادة مستوى التركيز ودقة الإجابة' },
      { title: 'السلسلة ٥: التدريب المتوسط', desc: 'أرقام متوسطة وعمليات أسرع' },
      { title: 'السلسلة ٦: التفكير السريع', desc: 'توازن ذكي بين الوقت والدقة' },
      { title: 'السلسلة ٧: اختبار المهارات', desc: 'تحدي الطلاب الأذكياء والمتميزين' },
      { title: 'السلسلة ٨: القفزة المتقدمة', desc: 'توسيع آفاق الحساب بذكاء فائق' },
      { title: 'السلسلة ٩: التحدي الأسطوري', desc: 'مستوى صعب جداً يقترب من القمة' },
      { title: 'السلسلة ١٠: مستوى العباقرة', desc: 'المرحلة النهائية لأساطير الحساب الذهني!' }
    ];

    function formatNumber(num, style = digitStyle) {
      if (style === 'international') return String(num);
      const hindiDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
      return String(num).replace(/[0-9]/g, (w) => hindiDigits[parseInt(w)]);
    }

    function getAudioCtx() {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      if(audioCtx.state === 'suspended') audioCtx.resume();
      return audioCtx;
    }

    function playTone(freqs, type = 'sine') {
      if(!soundEnabled) return;
      try {
        const ctx = getAudioCtx();
        let now = ctx.currentTime;
        freqs.forEach(f => {
          let osc = ctx.createOscillator(), gain = ctx.createGain();
          osc.type = type;
          osc.frequency.setValueAtTime(f, now);
          osc.connect(gain).connect(ctx.destination);
          gain.gain.setValueAtTime(0.0001, now);
          gain.gain.exponentialRampToValueAtTime(0.12, now + 0.01);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.15);
          osc.start(now); osc.stop(now + 0.17);
          now += 0.12;
        });
      } catch(e){}
    }

    function playCorrect() {
      if(!soundEnabled) return;
      try {
        let a = new Audio('audio/vrai.mp3');
        a.play().catch(() => playTone([880, 1040], 'sine'));
      } catch(e) { playTone([880, 1040], 'sine'); }
    }

    function playWrong() {
      if(!soundEnabled) return;
      try {
        let a = new Audio('audio/faux.mp3');
        a.play().catch(() => playTone([330, 220, 180], 'sawtooth'));
      } catch(e) { playTone([330, 220, 180], 'sawtooth'); }
    }

    function playCelebration() {
      if(!soundEnabled) return;
      try {
        let a = new Audio('audio/celebration.mp3');
        a.play().catch(() => playTone([523, 659, 783, 1046], 'sine'));
      } catch(e) { playTone([523, 659, 783, 1046], 'sine'); }
    }

    function toggleTheme() {
      darkMode = !darkMode;
      const body = document.body;
      const themeBtn = document.getElementById('themeBtn');
      if (darkMode) {
        body.classList.remove('light-mode');
        themeBtn.innerText = '☀️ وضع النهار';
      } else {
        body.classList.add('light-mode');
        themeBtn.innerText = '🌙 وضع الليل';
      }
    }

    function toggleSound() {
      soundEnabled = !soundEnabled;
      document.getElementById('soundBtn').innerText = soundEnabled ? '🔊 المؤثرات: تشغيل' : '🔇 المؤثرات: كتم';
      getAudioCtx();
    }

    function toggleMusic() {
      musicEnabled = !musicEnabled;
      getAudioCtx();
      updateMusicBtn();
    }

    function changeTrack() {
      currentTrack = currentTrack === 5 ? 1 : currentTrack + 1;
      document.getElementById('trackBtn').innerText = '🔁 لحن: ' + currentTrack;
      getAudioCtx();
      if(musicEnabled) startMusicLoop();
    }

    function updateMusicBtn() {
      const btn = document.getElementById('musicBtn');
      if(musicEnabled) {
        btn.innerText = '⏹️ إيقاف الموسيقى';
        btn.className = "px-3.5 py-2 bg-rose-600/20 text-rose-400 border border-rose-500/30 text-xs font-bold rounded-xl transition-all cursor-pointer";
        startMusicLoop();
      } else {
        btn.innerText = '🎵 تشغيل الموسيقى';
        btn.className = "px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-100 text-xs font-bold rounded-xl transition-all cursor-pointer";
        stopMusicLoop();
      }
    }

    let bgAudioPlayer = null;

    function startMusicLoop() {
      stopMusicLoop();
      if(!musicEnabled) return;
      try {
        bgAudioPlayer = new Audio('audio/music' + currentTrack + '.mp3');
        bgAudioPlayer.loop = true;
        bgAudioPlayer.play().catch(() => {
          startSynthMusicLoop();
        });
      } catch(e) {
        startSynthMusicLoop();
      }
    }

    function stopMusicLoop() {
      if(bgAudioPlayer) {
        try { bgAudioPlayer.pause(); } catch(e) {}
        bgAudioPlayer = null;
      }
      if(musicInterval) {
        clearInterval(musicInterval);
        musicInterval = null;
      }
    }

    function startSynthMusicLoop() {
      if(musicInterval) clearInterval(musicInterval);
      try {
        const ctx = getAudioCtx();
        const patterns = {
          1: [[262, 330, 392], [293, 349, 440], [349, 440, 523], [196, 247, 293]],
          2: [[220, 262, 330], [174, 220, 262], [196, 247, 293], [165, 196, 247]],
          3: [[293, 370, 440], [329, 415, 493], [349, 440, 523], [293, 370, 440]],
          4: [[130, 196, 262], [146, 220, 293], [165, 220, 330], [110, 165, 220]],
          5: [[260, 310, 370], [310, 370, 440], [320, 390, 480], [240, 290, 340]]
        };
        const chords = patterns[currentTrack] || [[262, 330, 392], [293, 349, 440]];
        let step = 0;
        musicInterval = setInterval(() => {
          if(!musicEnabled) return;
          let notes = chords[step % chords.length];
          notes.forEach((f, i) => {
            let osc = ctx.createOscillator(), gain = ctx.createGain();
            osc.type = i === 0 ? 'triangle' : 'sine';
            osc.frequency.setValueAtTime(f, ctx.currentTime);
            osc.connect(gain).connect(ctx.destination);
            gain.gain.setValueAtTime(0.0001, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.02, ctx.currentTime + 0.05);
            osc.start(ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.7);
            osc.stop(ctx.currentTime + 0.75);
          });
          step++;
        }, 900);
      } catch(e){}
    }

    window.addEventListener('click', () => getAudioCtx());
    window.addEventListener('touchstart', () => getAudioCtx());

    function getScores() {
      try { return JSON.parse(localStorage.getItem('mathSeriesScores') || '{}'); } catch(e) { return {}; }
    }

    function saveScore(op, base, sIdx, sVal) {
      try {
        const scores = getScores();
        const key = op + '_' + base + '_' + sIdx;
        if(!scores[key] || sVal > scores[key]) {
          scores[key] = sVal;
          localStorage.setItem('mathSeriesScores', JSON.stringify(scores));
        }
      } catch(e){}
    }

    function isSeriesUnlockedLocal(idx) {
      if(idx === 0 || bypassLocks) return true;
      const key = selectedOp + '_' + selectedNum + '_' + (idx - 1);
      const prev = getScores()[key] || 0;
      const passRequirement = Math.ceil(questionsPerSeries * 0.7);
      return prev >= passRequirement;
    }

    function generateQuestions(seriesIdx) {
      if (customAllSeriesQuestions && customAllSeriesQuestions[seriesIdx] && customAllSeriesQuestions[seriesIdx].length > 0) {
        return JSON.parse(JSON.stringify(customAllSeriesQuestions[seriesIdx]));
      }

      const ranges = [
        { min: 0, max: 3 }, { min: 1, max: 5 }, { min: 2, max: 7 },
        { min: 3, max: 9 }, { min: 5, max: 12 }, { min: 7, max: 15 },
        { min: 10, max: 18 }, { min: 12, max: 22 }, { min: 15, max: 28 },
        { min: 18, max: 35 }
      ];
      const range = ranges[seriesIdx] || { min: 0, max: Math.min(60, 4 + seriesIdx * 4) };
      const qList = [];
      const currentSeriesKeys = new Set();

      // Rule 1: Carry over top 3 hardest from previous series if available
      if (seriesIdx > 0) {
        const prevQuestions = generateQuestions(seriesIdx - 1);
        prevQuestions.sort((a, b) => (b.term1 * b.term2 + b.answer) - (a.term1 * a.term2 + a.answer));
        const hardest3 = prevQuestions.slice(0, Math.min(3, questionsPerSeries));
        hardest3.forEach(q => {
          const key = q.term1 + '_' + q.term2 + '_' + q.answer;
          if (!currentSeriesKeys.has(key)) {
            currentSeriesKeys.add(key);
            qList.push(Object.assign({}, q));
          }
        });
      }

      // Collect keys from all previous series (s < seriesIdx)
      const prevKeysSet = new Set();
      for (let s = 0; s < seriesIdx; s++) {
        const sQuestions = generateQuestions(s);
        sQuestions.forEach(q => {
          prevKeysSet.add(q.term1 + '_' + q.term2 + '_' + q.answer);
        });
      }

      const possible = [];
      for(let x = range.min; x <= range.max + 50; x++) {
        if(selectedOp === '÷' && x === 0) continue;
        possible.push(x);
      }
      possible.sort(() => Math.random() - 0.5);

      let idxPointer = 0;
      let attempts = 0;
      while (qList.length < questionsPerSeries && attempts < 800) {
        attempts++;
        let x = idxPointer < possible.length ? possible[idxPointer++] : Math.floor(Math.random() * (range.max + 80)) + 1;
        if(selectedOp === '÷' && x === 0) x = 1;

        let term1 = 0, term2 = 0, answer = 0;
        if(selectedOp === '+') { term1 = x; term2 = selectedNum; answer = x + selectedNum; }
        else if(selectedOp === '-') { term1 = selectedNum + x; term2 = selectedNum; answer = x; }
        else if(selectedOp === '×') { term1 = x; term2 = selectedNum; answer = x * selectedNum; }
        else if(selectedOp === '÷') { term1 = x * selectedNum; term2 = selectedNum; answer = x; }

        const key = term1 + '_' + term2 + '_' + answer;
        const isAlreadyInPrev = prevKeysSet.has(key);
        const isAlreadyInCurrent = currentSeriesKeys.has(key);

        if (!isAlreadyInCurrent && !isAlreadyInPrev) {
          currentSeriesKeys.add(key);
          qList.push({ term1, term2, answer });
        }
      }

      // Fallback if pool exhausted
      if (qList.length < questionsPerSeries) {
        let fallbackAttempts = 0;
        while (qList.length < questionsPerSeries && fallbackAttempts < 300) {
          fallbackAttempts++;
          let x = Math.floor(Math.random() * (range.max + 120)) + 1;
          if (selectedOp === '÷' && x === 0) x = 1;
          let term1 = 0, term2 = 0, answer = 0;
          if(selectedOp === '+') { term1 = x; term2 = selectedNum; answer = x + selectedNum; }
          else if(selectedOp === '-') { term1 = selectedNum + x; term2 = selectedNum; answer = x; }
          else if(selectedOp === '×') { term1 = x; term2 = selectedNum; answer = x * selectedNum; }
          else if(selectedOp === '÷') { term1 = x * selectedNum; term2 = selectedNum; answer = x; }

          const key = term1 + '_' + term2 + '_' + answer;
          if (!currentSeriesKeys.has(key)) {
            currentSeriesKeys.add(key);
            qList.push({ term1, term2, answer });
          }
        }
      }

      return qList.sort(() => Math.random() - 0.5);
    }

    function generateOptionsList(correct) {
      const options = [correct];
      const maxOffset = correct > 50 ? 12 : correct > 20 ? 6 : 4;
      while (options.length < 3) {
        const offset = Math.max(1, Math.floor(Math.random() * maxOffset));
        const choice = correct + (Math.random() > 0.5 ? offset : -offset);
        if (choice >= 0 && choice !== correct && !options.includes(choice)) options.push(choice);
      }
      while (options.length < 3) {
        const fallback = correct + options.length + 1;
        if (!options.includes(fallback)) options.push(fallback);
      }
      return options.sort(() => Math.random() - 0.5);
    }

    function startSeries(idx) {
      currentSeriesIdx = idx; score = 0; currentIdx = 0; answeredOps = [];
      questions = generateQuestions(idx); hasAnswered = false; selectedAns = null;
      loadNextQuestion(); setScreen('quiz');
    }

    function loadNextQuestion() {
      hasAnswered = false; selectedAns = null;
      if(currentIdx < questions.length) curOptions = generateOptionsList(questions[currentIdx].answer);
    }

    function handleAnswer(opt) {
      if(hasAnswered) return;
      hasAnswered = true; selectedAns = opt;
      const q = questions[currentIdx];
      const isCorrect = opt === q.answer;
      if(isCorrect) { score++; playCorrect(); }
      else { playWrong(); logError(q.term1 + ' ' + selectedOp + ' ' + q.term2 + ' = ' + q.answer); }
      answeredOps.push({ term1: q.term1, term2: q.term2, correctAnswer: q.answer, selectedAnswer: opt, isCorrect: isCorrect });
      render();
      setTimeout(() => {
        if(currentIdx + 1 < questions.length) { currentIdx++; loadNextQuestion(); render(); }
        else { saveScore(selectedOp, selectedNum, currentSeriesIdx, score); setScreen('result'); }
      }, 1500);
    }

    function logError(mistake) {
      try {
        let errors = JSON.parse(localStorage.getItem('multiplicationErrors') || '[]');
        errors.unshift({ mistake, date: new Date().toLocaleDateString('ar-DZ') });
        localStorage.setItem('multiplicationErrors', JSON.stringify(errors));
      } catch(e){}
    }

    function setScreen(screen) { currentScreen = screen; render(); }
    function selectSeries(idx) { currentSeriesIdx = idx; setScreen('series-detail'); }
    function viewSeriesTable(idx) { currentSeriesIdx = idx; setScreen('series-table'); }
    function clearAllErrors() {
      if(confirm('هل تريد بالتأكيد مسح جميع الأخطاء؟')) {
        localStorage.removeItem('multiplicationErrors');
        render();
      }
    }

    function render() {
      const el = document.getElementById('stage');
      const scores = getScores();
      if(currentScreen === 'main') {
        let roadmapHtml = '';
        for (let idx = 0; idx < seriesCount; idx++) {
          const info = seriesInfo[idx] || {
            title: 'السلسلة ' + formatNumber(idx + 1) + ': مستوى متقدم',
            desc: 'سلسلة تمارين حسابية متدرجة مع مراجعة النقاط الصعبة'
          };
          const unlocked = isSeriesUnlockedLocal(idx);
          const key = selectedOp + '_' + selectedNum + '_' + idx;
          const high = scores[key] !== undefined ? scores[key] : null;
          let cardClass = unlocked ? "bg-slate-900/60 border-slate-800 hover:border-indigo-500/50 cursor-pointer" : "bg-slate-950/40 border-slate-900 opacity-50 cursor-not-allowed";
          let actionBtn = unlocked 
            ? '<button onclick="selectSeries(' + idx + ')" class="w-full py-2 bg-indigo-600 text-white font-bold rounded-xl text-xs hover:bg-indigo-500 cursor-pointer">اختر السلسلة ⚡</button>'
            : '<div class="text-[10px] text-rose-400 font-bold flex items-center gap-1 justify-center"><span class="shrink-0">🔒 مغلق: بحاجة لنقاط ٧+ بالسلسلة السابقة</span></div>';
          let stars = '';
          if(high !== null) {
            if(high === 10) stars = '⭐⭐⭐';
            else if(high >= 8) stars = '⭐⭐';
            else if(high >= 7) stars = '⭐';
            else stars = '❌';
          }
          let cardOnClick = unlocked ? 'onclick="selectSeries(' + idx + ')"' : '';
          roadmapHtml += `
            <div ${cardOnClick} class="bento-card border border-slate-800 p-4 flex flex-col justify-between text-right transition-all ${cardClass}">
              <div>
                <div class="flex justify-between items-start mb-1.5">
                  <span class="text-xs font-extrabold bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded-md">${formatNumber(idx + 1)}</span>
                  <span class="text-xs font-black text-amber-400">${stars}</span>
                </div>
                <h4 class="font-black text-sm text-title mb-1">${info.title}</h4>
                <p class="text-[11px] text-desc mb-4 leading-relaxed">${info.desc}</p>
              </div>
              <div class="mt-auto">` + (high !== null ? `<div class="text-[10px] text-emerald-400 font-bold mb-2 text-center">أفضل نتيجة: ${formatNumber(high)} / ${formatNumber(10)}</div>` : '') + `${actionBtn}</div>
            </div>`;
        }
        el.innerHTML = `
          <div class="text-right">
            <h2 class="text-xl font-black text-title flex items-center gap-1.5 mb-4 justify-between">
              <span>🗺️ المستويات الحسابية للرقم ${formatNumber(selectedNum)} (${selectedOp})</span>
            </h2>
            <p class="text-xs text-desc mb-6 leading-relaxed">تتكون الرحلة من ${formatNumber(seriesCount)} سلاسل تدريجية. نجاحك في الحصول على نقاط ٧ أو أكثر يفتح لك السلسلة التالية تلقائياً!</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">${roadmapHtml}</div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div class="bento-card border-custom p-4 text-right">
                <h3 class="text-xs font-black text-indigo-400 mb-3">🛠️ تخصيص نمط العرض والتوجيه</h3>
                <div class="space-y-3">
                  <div>
                    <label class="text-[11px] font-bold text-desc block mb-1">شكل الأرقام:</label>
                    <div class="flex gap-2">
                      <button id="digAr" onclick="digitStyle='arabic'; render();" class="flex-1 py-1.5 px-2 bg-slate-800 text-slate-200 text-[10px] font-bold rounded-lg cursor-pointer">أرقام عربية (١٢٣)</button>
                      <button id="digInt" onclick="digitStyle='international'; render();" class="flex-1 py-1.5 px-2 bg-slate-800 text-slate-200 text-[10px] font-bold rounded-lg cursor-pointer">أرقام دولية (123)</button>
                    </div>
                  </div>
                  <div>
                    <label class="text-[11px] font-bold text-desc block mb-1">اتجاه العمليات:</label>
                    <div class="flex gap-2">
                      <button id="dirRtl" onclick="opDirection='rtl'; render();" class="flex-1 py-1.5 px-2 bg-slate-800 text-slate-200 text-[10px] font-bold rounded-lg cursor-pointer">من اليمين لليسار (RTL)</button>
                      <button id="dirLtr" onclick="opDirection='ltr'; render();" class="flex-1 py-1.5 px-2 bg-slate-800 text-slate-200 text-[10px] font-bold rounded-lg cursor-pointer">من اليسار لليمين (LTR)</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bento-card border-custom p-4 flex flex-col justify-between text-right">
                <div>
                  <h3 class="text-xs font-black text-indigo-400 mb-2">📋 سجل الأخطاء والأدوات</h3>
                  <p class="text-[10px] text-desc mb-3">يتم حفظ الأخطاء التي تقع فيها تلقائياً لمراجعتها لاحقاً وتحسين أدائك.</p>
                </div>
                <div class="flex gap-2">
                  <button onclick="setScreen('errors')" class="flex-1 py-2 px-3 bg-rose-600/15 text-rose-400 border border-rose-500/20 text-xs font-bold rounded-xl cursor-pointer hover:bg-rose-600/25">📂 عرض سجل الأخطاء</button>
                  <button onclick="bypassLocks=!bypassLocks; render();" class="py-2 px-3 bg-slate-800 text-slate-300 text-[10px] font-bold rounded-xl cursor-pointer">🔓 تخطي القفل</button>
                </div>
              </div>
            </div>
          </div>`;
        document.getElementById('digAr').className = digitStyle === 'arabic' ? 'flex-1 py-1.5 px-2 bg-indigo-600 text-white text-[10px] font-bold rounded-lg cursor-pointer' : 'flex-1 py-1.5 px-2 bg-slate-800 text-slate-300 text-[10px] font-bold rounded-lg cursor-pointer';
        document.getElementById('digInt').className = digitStyle === 'international' ? 'flex-1 py-1.5 px-2 bg-indigo-600 text-white text-[10px] font-bold rounded-lg cursor-pointer' : 'flex-1 py-1.5 px-2 bg-slate-800 text-slate-300 text-[10px] font-bold rounded-lg cursor-pointer';
        document.getElementById('dirRtl').className = opDirection === 'rtl' ? 'flex-1 py-1.5 px-2 bg-indigo-600 text-white text-[10px] font-bold rounded-lg cursor-pointer' : 'flex-1 py-1.5 px-2 bg-slate-800 text-slate-300 text-[10px] font-bold rounded-lg cursor-pointer';
        document.getElementById('dirLtr').className = opDirection === 'ltr' ? 'flex-1 py-1.5 px-2 bg-indigo-600 text-white text-[10px] font-bold rounded-lg cursor-pointer' : 'flex-1 py-1.5 px-2 bg-slate-800 text-slate-300 text-[10px] font-bold rounded-lg cursor-pointer';
      }
      else if(currentScreen === 'series-detail') {
        const info = seriesInfo[currentSeriesIdx];
        el.innerHTML = `
          <div class="text-right py-4">
            <h3 class="text-xs font-black text-indigo-400 mb-1">تفاصيل ومحتويات المستوى</h3>
            <h2 class="text-2xl font-black text-title mb-2">${info.title}</h2>
            <p class="text-xs text-desc mb-6 leading-relaxed">${info.desc}</p>
            <div class="flex flex-col gap-3 max-w-sm mx-auto my-6">
              <button onclick="startSeries(currentSeriesIdx)" class="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-2xl text-sm cursor-pointer shadow-lg shadow-indigo-500/15">ابدأ السلسلة الآن ⚡</button>
              <button onclick="viewSeriesTable(currentSeriesIdx)" class="w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold rounded-2xl text-xs cursor-pointer border border-slate-700">عرض جدول السلسلة الحسابية 📖</button>
              <button onclick="setScreen('main')" class="w-full py-3 text-slate-400 text-xs font-semibold cursor-pointer hover:text-slate-200">رجوع للخلف</button>
            </div>
          </div>`;
      }
      else if(currentScreen === 'series-table') {
        const info = seriesInfo[currentSeriesIdx] || {
          title: 'السلسلة ' + formatNumber(currentSeriesIdx + 1) + ': مستوى متقدم',
          desc: 'سلسلة تمارين حسابية متدرجة مع مراجعة النقاط الصعبة'
        };
        const tableQuestions = generateQuestions(currentSeriesIdx);
        let gridHtml = '';
        tableQuestions.forEach((q, idx) => {
          let operationStr = opDirection === 'rtl' ? formatNumber(q.term1) + ' ' + selectedOp + ' ' + formatNumber(q.term2) : formatNumber(q.term2) + ' ' + selectedOp + ' ' + formatNumber(q.term1);
          gridHtml += `
            <div class="inner-bg p-3 border border-custom rounded-xl font-bold text-center flex flex-col justify-center">
              <span class="text-xs text-desc mb-1">العملية ${formatNumber(idx + 1)}</span>
              <span class="text-sm text-title">${operationStr} = <strong class="text-indigo-400">${formatNumber(q.answer)}</strong></span>
            </div>`;
        });
        el.innerHTML = `
          <div class="text-right py-2">
            <h2 class="text-xl font-black text-title mb-2 flex items-center justify-between"><span>📖 جدول المراجعة الحسابية لـ ${info.title}</span></h2>
            <p class="text-xs text-desc mb-6 leading-relaxed">تأمل العمليات التالية جيداً لتبني في ذهنك سرعة الحساب اللازمة لحل الاختبار بنجاح!</p>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-6">${gridHtml}</div>
            <div class="text-center mt-4">
              <button onclick="setScreen('series-detail')" class="px-6 py-2.5 bg-slate-800 text-slate-200 font-bold text-xs rounded-xl hover:bg-slate-700 cursor-pointer">رجوع لشاشة السلسلة</button>
            </div>
          </div>`;
      }
      else if(currentScreen === 'quiz') {
        const q = questions[currentIdx];
        const qMark = '?';
        let opStr = opDirection === 'rtl' 
          ? `<span class="text-title">${formatNumber(q.term1)}</span><span class="text-indigo-400 font-black px-1">${selectedOp}</span><span class="text-title">${formatNumber(q.term2)}</span>`
          : `<span class="text-title">${formatNumber(q.term2)}</span><span class="text-indigo-400 font-black px-1">${selectedOp}</span><span class="text-title">${formatNumber(q.term1)}</span>`;
        let optsHtml = '';
        curOptions.forEach(opt => {
          let btnClass = "bg-slate-900 border-slate-800 text-slate-200 hover:border-indigo-500/50 hover:bg-indigo-950/20";
          if (hasAnswered) {
            if (opt === q.answer) btnClass = "bg-emerald-500/10 border-emerald-500 text-emerald-400";
            else if (opt === selectedAns) btnClass = "bg-rose-500/10 border-rose-500 text-rose-400";
            else btnClass = "bg-slate-950 border-slate-900 text-slate-500 opacity-60";
          }
          optsHtml += `<button onclick="handleAnswer(${opt})" class="flex-1 py-4.5 text-xl font-extrabold border rounded-2xl transition-all cursor-pointer ${btnClass}">${formatNumber(opt)}</button>`;
        });
        const middleSpan = hasAnswered 
          ? ('<span class="' + (selectedAns === q.answer ? 'text-emerald-400' : 'text-indigo-400') + '">' + formatNumber(q.answer) + '</span>')
          : '<span class="bg-indigo-600/10 border border-indigo-500/30 text-indigo-400 px-4 py-1.5 rounded-2xl min-w-[60px] inline-flex justify-center items-center animate-pulse">' + qMark + '</span>';
        const bounceMsg = hasAnswered 
          ? ('<div class="text-sm font-bold text-slate-200 animate-bounce-short">' + (selectedAns === q.answer ? '✨ إجابة صحيحة ممتازة!' : '❌ خطأ، الإجابة الصحيحة هي ' + formatNumber(q.answer)) + '</div>')
          : '';
        el.innerHTML = `
          <div class="text-right">
            <div class="flex justify-between items-center mb-6">
              <span class="text-[10px] font-black tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-md">السلسلة ${formatNumber(currentSeriesIdx + 1)}</span>
              <span class="text-xs text-desc font-bold">السؤال ${formatNumber(currentIdx + 1)} من ${formatNumber(10)}</span>
            </div>
            <div class="w-full bg-slate-800/30 rounded-full h-1.5 mb-8">
              <div class="bg-indigo-600 h-1.5 rounded-full transition-all duration-300" style="width: ${(currentIdx + 1) * 10}%"></div>
            </div>
          </div>
          <div class="text-4xl md:text-5xl font-black tracking-tight mb-8 flex justify-center items-center gap-3">
            ${opStr}<span class="text-slate-400">=</span>` + middleSpan + `
          </div>
          <div class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">${optsHtml}</div>` + bounceMsg;
      }
      else if(currentScreen === 'result') {
        let stars = score === 10 ? '⭐⭐⭐ (العبقري الكامل)' : score >= 8 ? '⭐⭐ (المركز الممتاز)' : score >= 7 ? '⭐ (مستوى ممتاز)' : '❌ (جرب لفتح السلسلة التالية)';
        let summaryHtml = '';
        answeredOps.forEach((op) => {
          const isOk = op.isCorrect;
          const statusText = isOk ? '✓ صحيح' : '✗ خاطئ';
          const bgClass = isOk ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-rose-500/10 border-rose-500/20 text-rose-400';
          summaryHtml += `
            <div class="flex justify-between items-center p-3 border rounded-xl text-sm font-bold ${bgClass} mb-2">
              <span>${formatNumber(op.term1)} ${selectedOp} ${formatNumber(op.term2)} = ${formatNumber(op.correctAnswer)}</span>
              <span class="text-xs font-black">${statusText} ${!isOk ? ' (اخترت: ' + formatNumber(op.selectedAnswer) + ')' : ''}</span>
            </div>`;
        });
        el.innerHTML = `
          <span class="text-5xl">🏆</span>
          <h2 class="text-2xl font-black text-title mt-2 mb-2">نتيجتك النهائية للسلسلة</h2>
          <div class="text-lg text-slate-300 mb-2">أجبت على <strong class="text-amber-400 text-2xl font-black">${formatNumber(score)}</strong> من أصل ${formatNumber(10)} بشكل صحيح!</div>
          <div class="text-sm font-bold text-amber-400 mb-6">${stars}</div>
          <h3 class="text-sm font-black text-title mb-3 text-right">ملخص الإجابات تفصيلياً:</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-2xl mx-auto mb-8 max-h-[220px] overflow-y-auto pr-1">${summaryHtml}</div>
          <div class="flex gap-3 justify-center">
            <button onclick="startSeries(currentSeriesIdx)" class="px-6 py-3 bg-indigo-600 text-white font-bold rounded-2xl cursor-pointer hover:bg-indigo-500">أعد المحاولة</button>
            <button onclick="setScreen('main')" class="px-6 py-3 bg-slate-800 text-slate-200 font-bold rounded-2xl cursor-pointer hover:bg-slate-700">رجوع للخريطة</button>
          </div>`;
      }
      else if(currentScreen === 'errors') {
        let errors = [];
        try { errors = JSON.parse(localStorage.getItem('multiplicationErrors') || '[]'); } catch(e){}
        let listHtml = '';
        if(errors.length === 0) {
          listHtml = '<div class="py-8 text-center text-slate-500"><span class="text-3xl block mb-2">⭐</span><p class="font-bold text-sm">سجل أخطائك نظيف ومثالي بالكامل!</p></div>';
        } else {
          errors.forEach(err => {
            listHtml += `
              <div class="border border-custom p-3 rounded-xl flex justify-between items-center text-right font-bold text-sm mb-2">
                <span class="text-rose-500">${err.mistake}</span>
                <span class="text-xs font-normal text-slate-400">${err.date}</span>
              </div>`;
          });
        }
        const deleteErrorsBtn = errors.length > 0 ? '<button onclick="clearAllErrors()" class="px-5 py-2.5 bg-rose-600 text-white text-xs font-bold rounded-xl hover:bg-rose-500 cursor-pointer">مسح جميع الأخطاء</button>' : '';
        el.innerHTML = `
          <div class="text-right">
            <h2 class="text-xl font-black text-title mb-2">📂 سجل الأخطاء الحسابية على الهاتف</h2>
            <p class="text-xs text-desc mb-6 leading-relaxed">هنا تجد الأخطاء التي وقعت فيها في السلاسل السابقة لمراجعتها وتصحيحها.</p>
            <div class="max-h-[240px] overflow-y-auto mb-6 pr-1">${listHtml}</div>
            <div class="flex gap-3 justify-center">` + deleteErrorsBtn + `<button onclick="setScreen('main')" class="px-5 py-2.5 bg-slate-800 text-slate-200 text-xs font-bold rounded-xl hover:bg-slate-700 cursor-pointer">الرجوع للملف الرئيسي</button></div>
          </div>`;
      }
    }

    let currentPhotoIdx = 0;
    let photosList = [];

    function initPhotosCarousel() {
      photosList = (establishmentInfo && establishmentInfo.photos && establishmentInfo.photos.length > 0)
        ? establishmentInfo.photos
        : [
            'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=800&q=80'
          ];

      const badge = document.getElementById('photoCountBadge');
      if (badge) badge.innerText = formatNumber(photosList.length) + ' صور';

      const track = document.getElementById('carouselTrack');
      if (!track) return;

      // Touch & Mouse Dragging for carousel track
      let isDragging = false;
      let startX = 0;
      let scrollLeft = 0;
      const wrapper = document.getElementById('carouselWrapper');

      if (wrapper) {
        wrapper.onmousedown = (e) => {
          isDragging = true;
          startX = e.pageX - wrapper.offsetLeft;
          scrollLeft = wrapper.scrollLeft;
          track.style.animationPlayState = 'paused';
        };
        wrapper.onmouseleave = () => {
          isDragging = false;
          track.style.animationPlayState = 'running';
        };
        wrapper.onmouseup = () => {
          isDragging = false;
          track.style.animationPlayState = 'running';
        };
        wrapper.onmousemove = (e) => {
          if (!isDragging) return;
          e.preventDefault();
          const x = e.pageX - wrapper.offsetLeft;
          const walk = (x - startX) * 2;
          wrapper.scrollLeft = scrollLeft - walk;
        };

        wrapper.ontouchstart = (e) => {
          if (e.touches.length === 1) {
            isDragging = true;
            startX = e.touches[0].pageX - wrapper.offsetLeft;
            scrollLeft = wrapper.scrollLeft;
            track.style.animationPlayState = 'paused';
          }
        };
        wrapper.ontouchend = () => {
          isDragging = false;
          track.style.animationPlayState = 'running';
        };
        wrapper.ontouchmove = (e) => {
          if (!isDragging || e.touches.length !== 1) return;
          const x = e.touches[0].pageX - wrapper.offsetLeft;
          const walk = (x - startX) * 2;
          wrapper.scrollLeft = scrollLeft - walk;
        };
      }

      // Repeat photosList 3 times so moving to -33.333333% shifts by 1 full set of all user photos seamlessly
      const displayList = photosList.length === 1
        ? [photosList[0], photosList[0], photosList[0], photosList[0], photosList[0], photosList[0]]
        : [...photosList, ...photosList, ...photosList];

      const animDuration = Math.max(12, photosList.length * 4);
      track.style.animationDuration = animDuration + 's';

      track.innerHTML = displayList.map((url, idx) => {
        const originalIdx = idx % photosList.length;
        return '<div onclick="openLightbox(' + originalIdx + ')" class="w-28 sm:w-36 h-20 sm:h-24 shrink-0 rounded-xl overflow-hidden border border-slate-700/80 hover:border-indigo-400 cursor-pointer shadow-md transform hover:scale-105 transition-all group relative bg-black/40">' +
          '<img src="' + url + '" alt="صورة ' + (originalIdx + 1) + '" class="w-full h-full object-cover group-hover:opacity-90" />' +
          '<div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all flex items-end justify-center p-1">' +
            '<span class="text-[9px] text-white font-bold bg-indigo-600/90 px-2 py-0.5 rounded-md shadow">🔍 تكبير</span>' +
          '</div>' +
        '</div>';
      }).join('');
    }

    function openLightbox(idx) {
      currentPhotoIdx = idx;
      const modal = document.getElementById('lightboxModal');
      if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        setTimeout(() => modal.classList.add('opacity-100'), 10);
      }
      updateLightboxContent(false);
    }

    function closeLightbox() {
      const modal = document.getElementById('lightboxModal');
      if (modal) {
        modal.classList.remove('opacity-100');
        setTimeout(() => {
          modal.classList.add('hidden');
          modal.classList.remove('flex');
        }, 300);
      }
    }

    function updateLightboxContent(is3D = true, dir = 'next') {
      const imgEl = document.getElementById('lightboxImg');
      const indexEl = document.getElementById('lightboxIndex');
      const wrapper = document.getElementById('lightbox3dWrapper');

      if (indexEl) {
        indexEl.innerText = formatNumber(currentPhotoIdx + 1) + ' / ' + formatNumber(photosList.length);
      }

      if (!is3D || !wrapper) {
        if (imgEl) imgEl.src = photosList[currentPhotoIdx];
        return;
      }

      // 3D Flip / Perspective Transition Effect
      const rotateDeg = dir === 'next' ? -65 : 65;
      const returnDeg = dir === 'next' ? 65 : -65;
      wrapper.style.transform = 'perspective(1000px) rotateY(' + rotateDeg + 'deg) translateZ(-160px) scale(0.7)';
      wrapper.style.opacity = '0.2';

      setTimeout(() => {
        if (imgEl) imgEl.src = photosList[currentPhotoIdx];
        wrapper.style.transform = 'perspective(1000px) rotateY(' + returnDeg + 'deg) translateZ(-160px) scale(0.7)';

        requestAnimationFrame(() => {
          setTimeout(() => {
            wrapper.style.transform = 'perspective(1000px) rotateY(0deg) translateZ(0px) scale(1)';
            wrapper.style.opacity = '1';
          }, 30);
        });
      }, 200);
    }

    function nextPhoto() {
      if (photosList.length === 0) return;
      currentPhotoIdx = (currentPhotoIdx + 1) % photosList.length;
      updateLightboxContent(true, 'next');
    }

    function prevPhoto() {
      if (photosList.length === 0) return;
      currentPhotoIdx = (currentPhotoIdx - 1 + photosList.length) % photosList.length;
      updateLightboxContent(true, 'prev');
    }

    function setupTouchSwipe() {
      const stage = document.getElementById('lightboxStage');
      if (!stage) return;

      let touchStartX = 0;
      let touchStartY = 0;

      stage.addEventListener('touchstart', (e) => {
        if (e.touches.length > 0) {
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;
        }
      }, { passive: true });

      stage.addEventListener('touchend', (e) => {
        if (e.changedTouches.length > 0) {
          const touchEndX = e.changedTouches[0].clientX;
          const touchEndY = e.changedTouches[0].clientY;
          const diffX = touchEndX - touchStartX;
          const diffY = touchEndY - touchStartY;

          // Horizontal swipe detection threshold
          if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 30) {
            if (diffX < 0) {
              // Thumb moved left -> next photo
              nextPhoto();
            } else {
              // Thumb moved right -> prev photo
              prevPhoto();
            }
          }
        }
      }, { passive: true });
    }

    function initWelcomeModal() {
      if (!establishmentInfo) return;
      const nameEl = document.getElementById('modalEstName');
      const msgEl = document.getElementById('modalWelcomeMsg');
      const addrEl = document.getElementById('modalAddress');
      const phoneEl = document.getElementById('modalPhone');
      const phoneLink = document.getElementById('modalPhoneLink');
      const fbLink = document.getElementById('modalFbLink');
      const igLink = document.getElementById('modalIgLink');
      const ttLink = document.getElementById('modalTtLink');
      const mapsLink = document.getElementById('modalMapsLink');

      if (nameEl) nameEl.innerText = establishmentInfo.name || 'مؤسسة تعليمية';
      if (msgEl) msgEl.innerText = establishmentInfo.welcomeMsg || 'أهلاً وسهلاً بكم في لعبة الحساب الذهني!';
      if (addrEl) addrEl.innerText = 'العنوان: ' + (establishmentInfo.address || 'غير محدد');
      if (phoneEl) phoneEl.innerText = establishmentInfo.phone || 'غير محدد';

      if (phoneLink) {
        const rawPhone = (establishmentInfo.phone || '').replace(/[^0-9+]/g, '');
        phoneLink.href = rawPhone ? 'https://wa.me/' + rawPhone.replace('+', '') : '#';
      }
      if (fbLink) fbLink.href = establishmentInfo.facebook || '#';
      if (igLink) igLink.href = establishmentInfo.instagram || '#';
      if (ttLink) ttLink.href = establishmentInfo.tiktok || '#';
      if (mapsLink) mapsLink.href = establishmentInfo.mapsUrl || '#';

      initPhotosCarousel();
      setupTouchSwipe();
    }

    function openWelcomeModal() {
      const modal = document.getElementById('welcomeModal');
      if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      }
    }

    function closeWelcomeModal() {
      const modal = document.getElementById('welcomeModal');
      if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
      getAudioCtx();
    }

    render();
    setTimeout(() => {
      initWelcomeModal();
      openWelcomeModal();
    }, 100);
