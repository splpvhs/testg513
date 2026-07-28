
    let selectedOp = '-';
    let selectedNum = 2;
    let digitStyle = 'international';
    let opDirection = 'ltr';
    let bypassLocks = false;
    let seriesCount = 8;
    let questionsPerSeries = 10;
    let customAllSeriesQuestions = [[{"term1":10,"term2":2,"answer":8},{"term1":4,"term2":2,"answer":2},{"term1":5,"term2":2,"answer":3},{"term1":11,"term2":2,"answer":9},{"term1":3,"term2":2,"answer":1},{"term1":12,"term2":2,"answer":10},{"term1":9,"term2":2,"answer":7},{"term1":6,"term2":2,"answer":4},{"term1":7,"term2":2,"answer":5},{"term1":2,"term2":2,"answer":0}],[{"term1":12,"term2":2,"answer":10},{"term1":11,"term2":2,"answer":9},{"term1":10,"term2":2,"answer":8},{"term1":19,"term2":2,"answer":17},{"term1":15,"term2":2,"answer":13},{"term1":8,"term2":2,"answer":6},{"term1":20,"term2":2,"answer":18},{"term1":22,"term2":2,"answer":20},{"term1":13,"term2":2,"answer":11},{"term1":21,"term2":2,"answer":19}],[{"term1":25,"term2":2,"answer":23},{"term1":22,"term2":2,"answer":20},{"term1":21,"term2":2,"answer":19},{"term1":32,"term2":2,"answer":30},{"term1":28,"term2":2,"answer":26},{"term1":17,"term2":2,"answer":15},{"term1":20,"term2":2,"answer":18},{"term1":29,"term2":2,"answer":27},{"term1":30,"term2":2,"answer":28},{"term1":26,"term2":2,"answer":24}],[{"term1":30,"term2":2,"answer":28},{"term1":29,"term2":2,"answer":27},{"term1":36,"term2":2,"answer":34},{"term1":33,"term2":2,"answer":31},{"term1":32,"term2":2,"answer":30},{"term1":24,"term2":2,"answer":22},{"term1":37,"term2":2,"answer":35},{"term1":14,"term2":2,"answer":12},{"term1":42,"term2":2,"answer":40},{"term1":18,"term2":2,"answer":16}],[{"term1":16,"term2":2,"answer":14},{"term1":47,"term2":2,"answer":45},{"term1":37,"term2":2,"answer":35},{"term1":42,"term2":2,"answer":40},{"term1":36,"term2":2,"answer":34},{"term1":52,"term2":2,"answer":50},{"term1":23,"term2":2,"answer":21},{"term1":49,"term2":2,"answer":47},{"term1":40,"term2":2,"answer":38},{"term1":45,"term2":2,"answer":43}],[{"term1":49,"term2":2,"answer":47},{"term1":43,"term2":2,"answer":41},{"term1":52,"term2":2,"answer":50},{"term1":53,"term2":2,"answer":51},{"term1":35,"term2":2,"answer":33},{"term1":47,"term2":2,"answer":45},{"term1":48,"term2":2,"answer":46},{"term1":34,"term2":2,"answer":32},{"term1":31,"term2":2,"answer":29},{"term1":50,"term2":2,"answer":48}],[{"term1":53,"term2":2,"answer":51},{"term1":52,"term2":2,"answer":50},{"term1":50,"term2":2,"answer":48},{"term1":54,"term2":2,"answer":52},{"term1":41,"term2":2,"answer":39},{"term1":70,"term2":2,"answer":68},{"term1":60,"term2":2,"answer":58},{"term1":27,"term2":2,"answer":25},{"term1":51,"term2":2,"answer":49},{"term1":66,"term2":2,"answer":64}],[{"term1":66,"term2":2,"answer":64},{"term1":70,"term2":2,"answer":68},{"term1":60,"term2":2,"answer":58},{"term1":61,"term2":2,"answer":59},{"term1":38,"term2":2,"answer":36},{"term1":68,"term2":2,"answer":66},{"term1":78,"term2":2,"answer":76},{"term1":80,"term2":2,"answer":78},{"term1":71,"term2":2,"answer":69},{"term1":79,"term2":2,"answer":77}]];
    let allowNegatives = false;
    let allowDecimals = false;
    let seriesRangesList = [{"min":0,"max":10},{"min":0,"max":20},{"min":0,"max":30},{"min":0,"max":40},{"min":0,"max":50},{"min":0,"max":60},{"min":0,"max":70},{"min":0,"max":80}];
    let currentScreen = 'main';
    let establishmentInfo = {"name":"مؤسسة أبطال الحساب الذهني التعليمية","address":"شارع النجاح، الحي المدرسي، الجزائر","phone":"+213 550 12 34 56","facebook":"https://facebook.com","instagram":"https://instagram.com","tiktok":"https://tiktok.com","mapsUrl":"https://maps.app.goo.gl/XEExLpunR816Jjcb6","welcomeMsg":"أهلاً وسهلاً بكم في تطبيق لعبة الحساب الذهني الذكية! نتمنى لأبطالنا الصغار رحلة ممتعة ومفيدة في عالم الرياضيات والحساب السريع.","photos":["photos/photo1.jpg","photos/photo2.jpg","photos/photo3.jpg","photos/photo4.jpg","photos/photo5.jpg","photos/photo6.jpg"]};

    let currentSeriesIdx = 0;
    let score = 0;
    let currentIdx = 0;
    let questions = [];
    let answeredOps = [];
    let curOptions = [];
    let hasAnswered = false;
    let selectedAns = null;

    let soundEnabled = true;
    let soundVolume = 1.0;
    let musicEnabled = false;
    let currentTrack = 1;
    let darkMode = false;
    let audioCtx = null;
    let musicInterval = null;

    const seriesTitles = [
      'خطوة البداية', 'الانطلاق الخفيف', 'أساسيات ممتعة', 'التحدي البسيط',
      'التدريب المتوسط', 'التفكير السريع', 'اختبار المهارات', 'القفزة المتقدمة',
      'التحدي الأسطوري', 'مستوى العباقرة'
    ];
    const seriesDescs = [
      'عمليات فائقة السهولة وبسيطة', 'أرقام صغيرة لبناء المبادئ', 'عمليات معتادة واختيارات مريحة',
      'زيادة مستوى التركيز ودقة الإجابة', 'أرقام متوسطة وعمليات أسرع', 'توازن ذكي بين الوقت والدقة',
      'تحدي الطلاب الأذكياء والمتميزين', 'توسيع آفاق الحساب بذكاء فائق', 'مستوى صعب جداً يقترب من القمة',
      'المرحلة النهائية لأساطير الحساب الذهني!'
    ];

    function formatNumber(num, style = digitStyle) {
      if (style === 'international') return String(num);
      const hindiDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
      return String(num).replace(/[0-9]/g, (w) => hindiDigits[parseInt(w)]);
    }

    function getSeriesInfo(idx) {
      const titleText = seriesTitles[idx] || 'مستوى متقدم';
      const descText = seriesDescs[idx] || 'سلسلة تمارين حسابية متدرجة مع مراجعة النقاط الصعبة';
      return {
        title: 'السلسلة ' + formatNumber(idx + 1) + ': ' + titleText,
        desc: descText
      };
    }

    function getAudioCtx() {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      if(audioCtx.state === 'suspended') audioCtx.resume();
      return audioCtx;
    }

    function playTone(freqs, type = 'sine') {
      if(!soundEnabled || soundVolume <= 0) return;
      try {
        const ctx = getAudioCtx();
        let now = ctx.currentTime;
        freqs.forEach(f => {
          let osc = ctx.createOscillator(), gain = ctx.createGain();
          osc.type = type;
          osc.frequency.setValueAtTime(f, now);
          osc.connect(gain).connect(ctx.destination);
          gain.gain.setValueAtTime(0.0001, now);
          gain.gain.exponentialRampToValueAtTime(0.12 * soundVolume, now + 0.01);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.15);
          osc.start(now); osc.stop(now + 0.17);
          now += 0.12;
        });
      } catch(e){}
    }

    function playCorrect() {
      if(!soundEnabled || soundVolume <= 0) return;
      try {
        let a = new Audio('audio/vrai.mp3');
        a.volume = soundVolume;
        a.play().catch(() => playTone([880, 1040], 'sine'));
      } catch(e) { playTone([880, 1040], 'sine'); }
    }

    function playWrong() {
      if(!soundEnabled || soundVolume <= 0) return;
      try {
        let a = new Audio('audio/faux.mp3');
        a.volume = soundVolume;
        a.play().catch(() => playTone([330, 220, 180], 'sawtooth'));
      } catch(e) { playTone([330, 220, 180], 'sawtooth'); }
    }

    function playCelebration() {
      if(!soundEnabled || soundVolume <= 0) return;
      bgMusicVolume = 0.2;
      if(bgAudioPlayer) {
        try { bgAudioPlayer.volume = 0.2; } catch(e){}
      }

      function restoreBgVolume() {
        bgMusicVolume = 1.0;
        if(bgAudioPlayer) {
          try { bgAudioPlayer.volume = 1.0; } catch(e){}
        }
      }

      try {
        let a = new Audio('audio/celebration.mp3');
        a.volume = soundVolume;
        a.onended = () => { restoreBgVolume(); };
        a.onerror = () => {
          playTone([523, 659, 783, 1046], 'sine');
          setTimeout(restoreBgVolume, 1800);
        };
        a.play().then(() => {
          // Playing celebration audio
        }).catch(() => {
          playTone([523, 659, 783, 1046], 'sine');
          setTimeout(restoreBgVolume, 1800);
        });
      } catch(e) {
        playTone([523, 659, 783, 1046], 'sine');
        setTimeout(restoreBgVolume, 1800);
      }
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
      if(soundVolume === 0) {
        soundVolume = 1.0;
        soundEnabled = true;
      } else {
        soundEnabled = !soundEnabled;
      }
      updateSoundBtnUI();
      getAudioCtx();
    }

    function setSoundVolume(val) {
      soundVolume = Math.max(0, Math.min(1, parseFloat(val) / 100));
      soundEnabled = soundVolume > 0;
      updateSoundBtnUI();
    }

    function updateSoundBtnUI() {
      const btn = document.getElementById('soundBtn');
      const range = document.getElementById('soundVolRange');
      if(range) range.value = Math.round(soundVolume * 100);
      if(!btn) return;
      const container = btn.parentElement;
      if(soundEnabled && soundVolume > 0) {
        const pct = Math.round(soundVolume * 100);
        btn.innerText = '🔊 المؤثرات: ' + formatNumber(pct) + '%';
        if(container) container.className = "flex items-center gap-2 sound-btn-on px-3.5 py-2 text-xs font-bold rounded-xl transition-all shadow-sm";
      } else {
        btn.innerText = '🔇 المؤثرات: كتم';
        if(container) container.className = "flex items-center gap-2 sound-btn-off px-3.5 py-2 text-xs font-bold rounded-xl transition-all shadow-sm";
      }
    }

    function toggleMusic() {
      musicEnabled = !musicEnabled;
      getAudioCtx();
      updateMusicBtnUI();
      if (musicEnabled) {
        startMusicLoop();
      } else {
        stopMusicLoop();
      }
    }

    function changeTrack() {
      currentTrack = currentTrack === 5 ? 1 : currentTrack + 1;
      document.getElementById('trackBtn').innerText = '🔁 لحن: ' + currentTrack;
      getAudioCtx();
      if(musicEnabled) startMusicLoop();
    }

    function updateMusicBtnUI() {
      const btn = document.getElementById('musicBtn');
      if(!btn) return;
      if(musicEnabled) {
        btn.innerText = '⏹️ إيقاف الموسيقى';
        btn.className = "music-btn-on px-3.5 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer shadow-sm";
      } else {
        btn.innerText = '🎵 تشغيل الموسيقى';
        btn.className = "music-btn-off px-3.5 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer shadow-sm";
      }
    }

    let bgAudioPlayer = null;
    let bgMusicVolume = 1.0;

    function startMusicLoop() {
      stopMusicLoop();
      if(!musicEnabled) return;
      try {
        bgAudioPlayer = new Audio('audio/music' + currentTrack + '.mp3');
        bgAudioPlayer.loop = true;
        bgAudioPlayer.volume = bgMusicVolume;
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
            gain.gain.exponentialRampToValueAtTime(0.02 * bgMusicVolume, ctx.currentTime + 0.05);
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

      const customRange = (seriesRangesList && seriesRangesList[seriesIdx]) ? seriesRangesList[seriesIdx] : null;
      const defaultRanges = [
        { min: 0, max: 3 }, { min: 1, max: 5 }, { min: 2, max: 7 },
        { min: 3, max: 9 }, { min: 5, max: 12 }, { min: 7, max: 15 },
        { min: 10, max: 18 }, { min: 12, max: 22 }, { min: 15, max: 28 },
        { min: 18, max: 35 }
      ];
      const range = customRange || defaultRanges[seriesIdx] || { min: 0, max: Math.min(60, 4 + seriesIdx * 4) };
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
      const absAns = Math.abs(correct);
      const step = allowDecimals ? 0.5 : 1;
      const maxOffsetMult = absAns > 50 ? 12 : absAns > 20 ? 6 : 4;
      let attempts = 0;
      while (options.length < 3 && attempts < 200) {
        attempts++;
        const offsetMult = Math.max(1, Math.floor(Math.random() * maxOffsetMult));
        const offset = offsetMult * step;
        const choiceRaw = correct + (Math.random() > 0.5 ? offset : -offset);
        const choice = allowDecimals ? Math.round(choiceRaw * 10) / 10 : Math.round(choiceRaw);

        if (!allowNegatives && choice < 0) continue;
        if (choice !== correct && !options.includes(choice)) {
          options.push(choice);
        }
      }

      while (options.length < 3) {
        const fallbackRaw = correct + (options.length + 1) * step;
        const fallback = allowDecimals ? Math.round(fallbackRaw * 10) / 10 : Math.round(fallbackRaw);
        if (!options.includes(fallback)) {
          options.push(fallback);
        }
      }
      return options.sort(() => Math.random() - 0.5);
    }

    function startSeries(idx) {
      getAudioCtx();
      if (musicEnabled) {
        if (bgAudioPlayer) {
          if (bgAudioPlayer.paused) {
            bgAudioPlayer.play().catch(() => {
              if (!musicInterval) startSynthMusicLoop();
            });
          }
        } else if (!musicInterval) {
          startMusicLoop();
        }
      }
      updateMusicBtnUI();
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
        else { saveScore(selectedOp, selectedNum, currentSeriesIdx, score); setScreen('result'); playCelebration(); }
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
        const passThresh = Math.max(1, Math.ceil(questionsPerSeries * 0.7));
        const twoStarThresh = Math.max(passThresh + 1, Math.ceil(questionsPerSeries * 0.85));

        let roadmapHtml = '';
        for (let idx = 0; idx < seriesCount; idx++) {
          const info = getSeriesInfo(idx);
          const unlocked = isSeriesUnlockedLocal(idx);
          const key = selectedOp + '_' + selectedNum + '_' + idx;
          const high = scores[key] !== undefined ? scores[key] : null;
          let cardClass = unlocked ? "bg-slate-900/60 border-slate-800 hover:border-indigo-500/50 cursor-pointer" : "bg-slate-950/40 border-slate-900 opacity-50 cursor-not-allowed";
          let actionBtn = unlocked 
            ? '<button onclick="selectSeries(' + idx + ')" class="w-full py-2 bg-indigo-600 text-white font-bold rounded-xl text-xs hover:bg-indigo-500 cursor-pointer">اختر السلسلة ⚡</button>'
            : '<div class="text-[10px] text-rose-400 font-bold flex items-center gap-1 justify-center"><span class="shrink-0">🔒 مغلق: بحاجة لنقاط ' + formatNumber(passThresh) + '+ بالسلسلة السابقة</span></div>';
          let stars = '';
          if(high !== null) {
            if(high === questionsPerSeries) stars = '⭐⭐⭐';
            else if(high >= twoStarThresh) stars = '⭐⭐';
            else if(high >= passThresh) stars = '⭐';
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
              <div class="mt-auto">` + (high !== null ? `<div class="text-[10px] text-emerald-400 font-bold mb-2 text-center">أفضل نتيجة: ${formatNumber(high)} / ${formatNumber(questionsPerSeries)}</div>` : '') + `${actionBtn}</div>
            </div>`;
        }
        el.innerHTML = `
          <div class="text-right">
            <h2 class="text-xl font-black text-title flex items-center gap-1.5 mb-4 justify-between">
              <span>🗺️ المستويات الحسابية للرقم ${formatNumber(selectedNum)} (${selectedOp})</span>
            </h2>
            <p class="text-xs text-desc mb-6 leading-relaxed">تتكون الرحلة من ${formatNumber(seriesCount)} سلاسل تدريجية (${formatNumber(questionsPerSeries)} عملية/سلسلة). نجاحك في الحصول على نقاط ${formatNumber(passThresh)} أو أكثر يفتح لك السلسلة التالية تلقائياً!</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">${roadmapHtml}</div>
            <div class="mt-6">
              <div class="bento-card border-custom p-4 flex flex-col justify-between text-right max-w-xl mx-auto">
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
      }
      else if(currentScreen === 'series-detail') {
        const info = getSeriesInfo(currentSeriesIdx);
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
        const info = getSeriesInfo(currentSeriesIdx);
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
        const totalQ = questions.length || questionsPerSeries || 10;
        const qMark = digitStyle === 'arabic' ? '؟' : '?';
        const cardGradients = [
          'bg-gradient-to-br from-indigo-950/70 via-slate-900/80 to-purple-950/70 border-indigo-500/40 quiz-card-0',
          'bg-gradient-to-br from-emerald-950/70 via-slate-900/80 to-teal-950/70 border-emerald-500/40 quiz-card-1',
          'bg-gradient-to-br from-blue-950/70 via-slate-900/80 to-cyan-950/70 border-blue-500/40 quiz-card-2',
          'bg-gradient-to-br from-rose-950/70 via-slate-900/80 to-pink-950/70 border-rose-500/40 quiz-card-3',
          'bg-gradient-to-br from-amber-950/70 via-slate-900/80 to-orange-950/70 border-amber-500/40 quiz-card-4',
          'bg-gradient-to-br from-violet-950/70 via-slate-900/80 to-fuchsia-950/70 border-violet-500/40 quiz-card-5',
          'bg-gradient-to-br from-sky-950/70 via-slate-900/80 to-indigo-950/70 border-sky-500/40 quiz-card-6',
          'bg-gradient-to-br from-teal-950/70 via-slate-900/80 to-green-950/70 border-teal-500/40 quiz-card-7'
        ];
        const curBgClass = cardGradients[currentIdx % cardGradients.length];

        let opStr = opDirection === 'rtl' 
          ? '<span class="text-title">' + formatNumber(q.term1) + '</span><span class="text-indigo-400 font-black px-1">' + selectedOp + '</span><span class="text-title">' + formatNumber(q.term2) + '</span>'
          : '<span class="text-title">' + formatNumber(q.term2) + '</span><span class="text-indigo-400 font-black px-1">' + selectedOp + '</span><span class="text-title">' + formatNumber(q.term1) + '</span>';
        let optsHtml = '';
        curOptions.forEach(opt => {
          let btnClass = "opt-btn bg-slate-900 border-slate-800 text-slate-200 hover:border-indigo-500/50 hover:bg-indigo-950/20";
          if (hasAnswered) {
            if (opt === q.answer) btnClass = "opt-btn-correct bg-emerald-500/10 border-emerald-500 text-emerald-400";
            else if (opt === selectedAns) btnClass = "opt-btn-wrong bg-rose-500/10 border-rose-500 text-rose-400";
            else btnClass = "bg-slate-950 border-slate-900 text-slate-500 opacity-60";
          }
          optsHtml += '<button onclick="handleAnswer(' + opt + ')" class="flex-1 py-4.5 text-xl font-extrabold border rounded-2xl transition-all cursor-pointer ' + btnClass + '">' + formatNumber(opt) + '</button>';
        });
        const middleSpan = hasAnswered 
          ? ('<span class="' + (selectedAns === q.answer ? 'text-emerald-400' : 'text-indigo-400') + '">' + formatNumber(q.answer) + '</span>')
          : '<span class="text-indigo-400 font-black animate-pulse">' + qMark + '</span>';
        const feedbackClass = selectedAns === q.answer ? 'feedback-correct' : 'feedback-wrong';
        const bounceMsg = hasAnswered 
          ? ('<div class="text-sm font-black animate-bounce-short ' + feedbackClass + '">' + (selectedAns === q.answer ? '✔️ إجابة صحيحة ممتازة' : '❌ خطأ، الإجابة الصحيحة هي ' + formatNumber(q.answer)) + '</div>')
          : '';
        el.innerHTML = 
          '<div class="p-5 sm:p-7 rounded-3xl border shadow-xl transition-all duration-500 ' + curBgClass + '">' +
            '<div class="text-right">' +
              '<div class="flex justify-between items-center mb-6">' +
                '<span class="text-[10px] font-black tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-md">السلسلة ' + formatNumber(currentSeriesIdx + 1) + '</span>' +
                '<span class="text-xs text-desc font-bold">السؤال ' + formatNumber(currentIdx + 1) + ' من ' + formatNumber(totalQ) + '</span>' +
              '</div>' +
              '<div class="w-full bg-slate-800/30 rounded-full h-1.5 mb-8">' +
                '<div class="bg-indigo-600 h-1.5 rounded-full transition-all duration-300" style="width: ' + (((currentIdx + 1) / totalQ) * 100) + '%"></div>' +
              '</div>' +
            '</div>' +
            '<div class="text-4xl md:text-5xl font-black tracking-tight mb-8 flex justify-center items-center gap-3">' +
              opStr + '<span class="text-slate-400">=</span>' + middleSpan +
            '</div>' +
            '<div class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">' + optsHtml + '</div>' + bounceMsg +
          '</div>';
      }
      else if(currentScreen === 'result') {
        const totalQ = questions.length || questionsPerSeries || 10;
        const passThresh = Math.max(1, Math.ceil(totalQ * 0.7));
        const twoStarThresh = Math.max(passThresh + 1, Math.ceil(totalQ * 0.85));
        let stars = score === totalQ ? '⭐⭐⭐ (العبقري الكامل)' : score >= twoStarThresh ? '⭐⭐ (المركز الممتاز)' : score >= passThresh ? '⭐ (مستوى ممتاز)' : '❌ (جرب لفتح السلسلة التالية)';
        let summaryHtml = '';
        answeredOps.forEach((op) => {
          const isOk = op.isCorrect;
          const statusText = isOk ? '✓ صحيح' : '✗ خاطئ';
          const bgClass = isOk ? 'summary-item-ok bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'summary-item-err bg-rose-500/10 border-rose-500/20 text-rose-400';
          summaryHtml += `
            <div class="flex justify-between items-center p-3 border rounded-xl text-sm font-bold ${bgClass} mb-2">
              <span>${formatNumber(op.term1)} ${selectedOp} ${formatNumber(op.term2)} = ${formatNumber(op.correctAnswer)}</span>
              <span class="text-xs font-black">${statusText} ${!isOk ? ' (اخترت: ' + formatNumber(op.selectedAnswer) + ')' : ''}</span>
            </div>`;
        });
        el.innerHTML = `
          <span class="text-5xl">🏆</span>
          <h2 class="text-2xl font-black text-title mt-2 mb-2">نتيجتك النهائية للسلسلة</h2>
          <div class="text-lg text-slate-300 mb-2">أجبت على <strong class="score-num text-amber-400 text-2xl font-black">${formatNumber(score)}</strong> من أصل ${formatNumber(totalQ)} بشكل صحيح!</div>
          <div class="stars-text text-sm font-bold text-amber-400 mb-6">${stars}</div>
          <h3 class="text-sm font-black text-title mb-3 text-right">ملخص الإجابات تفصيلياً:</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-2xl mx-auto mb-8 max-h-[220px] overflow-y-auto pr-1">${summaryHtml}</div>
          <div class="flex gap-3 justify-center">
            <button onclick="startSeries(currentSeriesIdx)" class="px-6 py-3 bg-indigo-600 text-white font-bold rounded-2xl cursor-pointer hover:bg-indigo-500">أعد المحاولة</button>
            <button onclick="setScreen('main')" class="px-6 py-3 bg-slate-800 text-slate-200 font-bold rounded-2xl cursor-pointer hover:bg-slate-700">رجوع للقائمة</button>
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
      if (!musicEnabled) {
        musicEnabled = true;
        startMusicLoop();
      } else {
        if (bgAudioPlayer) {
          if (bgAudioPlayer.paused) {
            bgAudioPlayer.play().catch(() => {
              if (!musicInterval) startSynthMusicLoop();
            });
          }
        } else if (!musicInterval) {
          startMusicLoop();
        }
      }
      updateMusicBtnUI();
    }

    render();
    setTimeout(() => {
      initWelcomeModal();
      openWelcomeModal();
    }, 100);
