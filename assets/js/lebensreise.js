(function(){
'use strict';
var JD = {"places": {"lingen": {"ll": [7.32, 52.52], "label": "Lingen", "a": "end", "lx": -12, "ly": 9, "zoom": 3200}, "meppen": {"ll": [7.29, 52.69], "label": "Meppen", "a": "end", "lx": -12, "ly": -9, "zoom": 3200}, "osnabrueck": {"ll": [8.05, 52.28], "label": "Osnabrück", "a": "start", "lx": 12, "ly": 8, "zoom": 3200}, "bremen": {"ll": [8.8, 53.08], "label": "Bremen", "a": "start", "lx": 12, "ly": 0, "zoom": 3200}, "braunschweig": {"ll": [10.52, 52.27], "label": "Braunschweig", "a": "start", "lx": 12, "ly": 0, "zoom": 3200}, "halle": {"ll": [11.97, 51.48], "label": "Halle", "a": "start", "lx": 12, "ly": 0, "zoom": 3200}, "berlin": {"ll": [13.4, 52.52], "label": "Berlin", "a": "start", "lx": 12, "ly": 0, "zoom": 3200}, "nrw": {"ll": [7.0, 51.45], "label": "NRW", "a": "middle", "lx": 0, "ly": 20, "zoom": 3200, "full": {"de": "Nordrhein-Westfalen", "es": "Renania del Norte-Westfalia", "en": "North Rhine-Westphalia"}}, "cadiz": {"ll": [-6.29, 36.53], "label": "Cádiz", "a": "end", "lx": -12, "ly": 0, "zoom": 2400}, "valladolid": {"ll": [-4.72, 41.65], "label": "Valladolid", "a": "start", "lx": 12, "ly": 0, "zoom": 2400}, "granada": {"ll": [-3.6, 37.18], "label": "Granada", "a": "start", "lx": 12, "ly": 0, "zoom": 2400}, "cuenca": {"ll": [-79.0, -2.9], "label": "Cuenca", "a": "start", "lx": 12, "ly": 0, "zoom": 3200}}, "stations": [{"p": "lingen", "m": null, "when": {"de": "bis 2008", "es": "hasta 2008", "en": "until 2008"}, "title": {"de": "Wo alles beginnt", "es": "Donde todo empieza", "en": "Where it all begins"}, "text": {"de": "In meiner Heimatstadt engagiere ich mich früh: durch aktive Mitwirkung bei den Kivelinge, in der Kinder- und Jugendarbeit von St. Bonifatius und im Zivildienst beim Malteser Hilfsdienst.", "es": "En mi ciudad natal me implico pronto: participando activamente en los Kivelinge, en el trabajo con niños y jóvenes de la parroquia de San Bonifacio y en el servicio civil con Malteser.", "en": "In my home town I get involved early: through active involvement in the Kivelinge society, in children's and youth work at St. Bonifatius and in civilian service with the Malteser."}}, {"p": "braunschweig", "m": "train", "when": {"de": "2008 – 2009", "es": "2008 – 2009", "en": "2008 – 2009"}, "title": {"de": "Erster Schritt ins Studium", "es": "Primer paso en la universidad", "en": "First step into university"}, "text": {"de": "Ein Orientierungsjahr im Bioingenieurwesen an der TU Braunschweig.", "es": "Un año de orientación en Bioingeniería en la Universidad Técnica de Braunschweig.", "en": "An orientation year in bioengineering at TU Braunschweig."}}, {"p": "osnabrueck", "m": "train", "when": {"de": "2009 – 2013", "es": "2009 – 2013", "en": "2009 – 2013"}, "title": {"de": "Biologie und Spanisch", "es": "Biología y Español", "en": "Biology and Spanish"}, "text": {"de": "Studium Biologie und Spanisch an der Universität Osnabrück, abgeschlossen mit dem Bachelor of Arts (Note 1,9).", "es": "Estudios de Biología y Español en la Universidad de Osnabrück, con el grado (B.A.) y nota 1,9.", "en": "Biology and Spanish at the University of Osnabrück, completed with a Bachelor of Arts (grade 1.9)."}}, {"p": "cadiz", "m": "plane", "when": {"de": "2010", "es": "2010", "en": "2010"}, "title": {"de": "Eintauchen ins Spanische", "es": "Inmersión en el español", "en": "Immersed in Spanish"}, "text": {"de": "Zwei Intensiv-Sprachkurse an der Escuela de Español K2 Internacional.", "es": "Dos cursos intensivos en la Escuela de Español K2 Internacional.", "en": "Two intensive language courses at the Escuela de Español K2 Internacional."}}, {"p": "valladolid", "m": "train", "when": {"de": "2011 – 2012", "es": "2011 – 2012", "en": "2011 – 2012"}, "title": {"de": "Ein Jahr ERASMUS", "es": "Un año de ERASMUS", "en": "A year of ERASMUS"}, "text": {"de": "Zwei Semester an der Universidad de Valladolid.", "es": "Dos semestres en la Universidad de Valladolid.", "en": "Two semesters at the University of Valladolid."}}, {"p": "granada", "m": "train", "when": {"de": "2012", "es": "2012", "en": "2012"}, "title": {"de": "Auf der Bühne in Granada", "es": "En el escenario de Granada", "en": "On stage in Granada"}, "text": {"de": "Ich präsentiere ein internationales Projekt zur Optimierung von ERASMUS auf dem Jubiläumskongress.", "es": "Presento un proyecto internacional para mejorar ERASMUS en el congreso del aniversario.", "en": "I present an international project on improving ERASMUS at the anniversary congress."}}, {"p": "osnabrueck", "m": "plane", "when": {"de": "2013 – 2015", "es": "2013 – 2015", "en": "2013 – 2015"}, "title": {"de": "Master of Education", "es": "Máster en Educación", "en": "Master of Education"}, "text": {"de": "Master in Biologie und Spanisch (Note 1,5), dazu die Mediatorenausbildung und die Betreuung internationaler Studierender in der Summer School.", "es": "Máster en Biología y Español (nota 1,5), además de la formación como mediador y la atención a estudiantes internacionales en la Summer School.", "en": "Master's in biology and Spanish (grade 1.5), plus mediator training and looking after international students at the Summer School."}}, {"p": "cuenca", "m": "plane", "when": {"de": "2015", "es": "2015", "en": "2015"}, "title": {"de": "Forschen in Ecuador", "es": "Investigar en Ecuador", "en": "Research in Ecuador"}, "text": {"de": "Empirische Erhebungen für meine Masterarbeit. Ecuador wird zum wiederkehrenden Ziel: 2016 und 2018 komme ich für Feldforschung zurück.", "es": "Recogida de datos para mi trabajo de fin de máster. Ecuador se convierte en un destino recurrente: vuelvo en 2016 y 2018 para investigar.", "en": "Empirical fieldwork for my master's thesis. Ecuador becomes a recurring destination: I return for research in 2016 and 2018."}}, {"p": "halle", "m": "plane", "when": {"de": "2016", "es": "2016", "en": "2016"}, "title": {"de": "Biodiversität lehren", "es": "Enseñar biodiversidad", "en": "Teaching biodiversity"}, "text": {"de": "Wissenschaftlicher Mitarbeiter in der Biologiedidaktik der Universität Halle-Wittenberg: Bildungsangebote zur Biodiversität für den Schulunterricht.", "es": "Investigador en Didáctica de la Biología en la Universidad de Halle-Wittenberg: propuestas sobre biodiversidad para la escuela.", "en": "Research associate in biology education at the University of Halle-Wittenberg: biodiversity learning offers for schools."}}, {"p": "bremen", "m": "train", "when": {"de": "2017 – 2019", "es": "2017 – 2019", "en": "2017 – 2019"}, "title": {"de": "Forschung trifft Klassenzimmer", "es": "La investigación llega al aula", "en": "Research meets the classroom"}, "text": {"de": "An der Universität Bremen entwickle und erprobe ich Unterrichtsinterventionen zur biologischen Vielfalt, dazu das Lernspiel LandYOUs und die Ökoambulanz für UNESCO-Projektschulen.", "es": "En la Universidad de Bremen diseño y evalúo intervenciones didácticas sobre biodiversidad, además del juego LandYOUs y la Ökoambulanz para escuelas UNESCO.", "en": "At the University of Bremen I design and test teaching interventions on biodiversity, plus the learning game LandYOUs and the Ökoambulanz for UNESCO schools."}}, {"p": "berlin", "m": "train", "when": {"de": "2018", "es": "2018", "en": "2018"}, "title": {"de": "Eine Tagung organisieren", "es": "Organizar un congreso", "en": "Running a conference"}, "text": {"de": "Hauptverantwortlich organisiere ich die wissenschaftliche Abschlusstagung des Forschungsprojekts SciVis.", "es": "Organizo como responsable principal el congreso científico final del proyecto SciVis.", "en": "I am lead organiser of the final academic conference of the SciVis research project."}}, {"p": "nrw", "m": "train", "when": {"de": "2019 – 2021 · 2025 – 2026", "es": "2019 – 2021 · 2025 – 2026", "en": "2019 – 2021 · 2025 – 2026"}, "title": {"de": "Unterrichtspraxis an Schulen", "es": "Práctica docente en centros", "en": "Teaching practice in schools"}, "text": {"de": "Eigenverantwortlicher Unterricht in Biologie und Spanisch an Gymnasien in Nordrhein-Westfalen, mit ersten digitalen Lernkonzepten.", "es": "Docencia autónoma de Biología y Español en institutos de Renania del Norte-Westfalia, con primeros conceptos de aprendizaje digital.", "en": "Independent teaching of biology and Spanish at grammar schools in North Rhine-Westphalia, trialling digital learning concepts."}}, {"p": "meppen", "m": "train", "when": {"de": "2023", "es": "2023", "en": "2023"}, "title": {"de": "Vertretung mit Sprachgefühl", "es": "Sustituciones con sensibilidad lingüística", "en": "Covering classes, language-aware"}, "text": {"de": "Vertretungslehrkraft an der Anne-Frank-Oberschule: Biologie, Gesundheit & Soziales und DaF/DaZ.", "es": "Profesor sustituto en la Anne-Frank-Oberschule: Biología, Salud y Asuntos Sociales y alemán como segunda lengua.", "en": "Substitute teacher at the Anne-Frank-Oberschule: biology, health & social care and German as a second language."}}, {"p": "lingen", "m": "train", "when": {"de": "2023 – 2025", "es": "2023 – 2025", "en": "2023 – 2025"}, "title": {"de": "Erwachsenenbildung", "es": "Educación de adultos", "en": "Adult education"}, "text": {"de": "Bildungskoordinator und BAMF-Dozent bei der Ländlichen Erwachsenenbildung: 15 Kurse, 8 Dozent:innen und eigener Unterricht in DaF/DaZ.", "es": "Coordinador educativo y docente del BAMF en la Ländliche Erwachsenenbildung: 15 cursos, 8 docentes y clases propias de alemán.", "en": "Education coordinator and BAMF teacher at the Ländliche Erwachsenenbildung: 15 courses, 8 teachers and my own German classes."}}, {"p": "lingen", "m": "stay", "when": {"de": "heute", "es": "hoy", "en": "today"}, "title": {"de": "Nächster Halt: digitales Lernen", "es": "Próxima parada: aprendizaje digital", "en": "Next stop: digital learning"}, "text": {"de": "IHK-Lehrgang KI-Manager, die eigene App Karrierekompass und die geplante Mesa Redonda, ein internationaler Stammtisch in Lingen. Und danach vielleicht Ihr Team?", "es": "Certificado IHK de KI-Manager, mi app Karrierekompass y la Mesa Redonda, un encuentro internacional en fase de planificación en Lingen. ¿Y después, quizá su equipo?", "en": "The IHK AI Manager course, my own app Karrierekompass and the planned Mesa Redonda, an international meetup in Lingen. And next, perhaps your team?"}}]};
var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var PLANE = new Path2D('M-16,0 L10,-3 Q16,0 10,3 Z M-2,-2 L-10,-14 L-5,-14 L5,-2 Z M-2,2 L-10,14 L-5,14 L5,2 Z M-13,-1 L-17,-7 L-13,-7 L-9,-1 Z M-13,1 L-17,7 L-13,7 L-9,1 Z');
var TRAIN = new Path2D('M-15,-9 h24 q8,0 8,8 v6 h-32 Z M-11,-6 h7 v5 h-7 Z M0,-6 h7 v5 h-7 Z');
var W = 1000, H = 620;
var GLOBE = {c: [-38, 24], s: 285};
var geoP = null;
function loadGeo(){
  if (!geoP) geoP = Promise.all([
    fetch('/assets/geo/land-110m.json').then(function(r){ return r.json(); }),
    fetch('/assets/geo/stationen-laender.json').then(function(r){ return r.json(); })
  ]);
  return geoP;
}
function ease(k){ return k < .5 ? 4*k*k*k : 1 - Math.pow(-2*k + 2, 3)/2; }
function css(name, fb){ var v = getComputedStyle(document.documentElement).getPropertyValue(name).trim(); return v || fb; }

function init(root){
  var lang = root.getAttribute('data-jlang'), L = JSON.parse(root.getAttribute('data-labels'));
  var canvas = root.querySelector('canvas.jglobe'), ctx = canvas.getContext('2d');
  var S = JD.stations, P = JD.places, cur = 0, anim = null, timer = null, overview = false;
  var land = null, countries = null;
  var proj = d3.geoOrthographic().translate([W/2, H/2]).clipAngle(90).precision(.4);
  var path = d3.geoPath(proj, ctx), grat = d3.geoGraticule10();
  var view = {c: GLOBE.c.slice(), s: GLOBE.s};
  var veh = null;            // {ll, mode, heading, alt}
  var partial = null;        // {i, e} leg in flight
  var dpr = 1;

  function resize(){
    dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = W * dpr; canvas.height = H * dpr;
    draw();
  }
  function stationView(i){
    var p = P[S[i].p];
    var zm = (canvas.clientWidth && canvas.clientWidth < 560) ? 1.7 : 1;
    return {c: [p.ll[0], p.ll[1] - (p.zoom > 2000 ? 0.4 : 1.2)], s: p.zoom * zm};
  }
  function setView(v){ view = v; proj.rotate([-v.c[0], -v.c[1]]).scale(v.s); }

  function draw(){
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    var leaf = css('--leaf', '#2E6A4E'), soft = css('--leaf-soft', '#E2ECE4'), surf = css('--surface', '#fff'),
        ink = css('--ink', '#17241D'), pollen = css('--pollen', '#B87912'), line = css('--line', '#D5DDD3'), muted = css('--muted', '#5A6A61');
    // Meer
    ctx.beginPath(); path({type: 'Sphere'}); ctx.fillStyle = soft; ctx.fill();
    ctx.beginPath(); path(grat); ctx.strokeStyle = line; ctx.lineWidth = .6; ctx.stroke();
    if (land){
      ctx.beginPath(); path(land); ctx.fillStyle = surf; ctx.fill(); ctx.strokeStyle = line; ctx.lineWidth = .8; ctx.stroke();
      ctx.beginPath(); path(countries); ctx.fillStyle = leaf; ctx.globalAlpha = .16; ctx.fill(); ctx.globalAlpha = 1;
      ctx.strokeStyle = leaf; ctx.lineWidth = 1; ctx.stroke();
    }
    ctx.beginPath(); path({type: 'Sphere'}); ctx.strokeStyle = leaf; ctx.lineWidth = 1.5; ctx.stroke();
    // Strecken
    ctx.lineCap = 'round';
    for (var i = 1; i < S.length; i++){
      var a = P[S[i-1].p].ll, b = P[S[i].p].ll;
      if (S[i].m === 'stay' || (a[0] === b[0] && a[1] === b[1])) continue;
      var upto = (partial && partial.i === i) ? partial.e : (i <= cur ? 1 : 0);
      if (upto <= 0) continue;
      var end = upto >= 1 ? b : d3.geoInterpolate(a, b)(upto);
      ctx.beginPath(); path({type: 'LineString', coordinates: [a, end]});
      ctx.strokeStyle = S[i].m === 'plane' ? pollen : leaf; ctx.lineWidth = S[i].m === 'plane' ? 3 : 3.5;
      ctx.setLineDash(S[i].m === 'plane' ? [2, 9] : []); ctx.stroke(); ctx.setLineDash([]);
    }
    // Orte
    var visited = {}; for (var j = 0; j <= cur; j++) visited[S[j].p] = true;
    var showLabels = view.s > 900, k = Math.max(1, Math.min(2.4, 720 / (canvas.clientWidth || 720)));
    ctx.font = '700 ' + Math.round(17*k) + 'px ' + (css('--font-body', 'system-ui') || 'system-ui');
    Object.keys(P).forEach(function(key){
      var p = P[key], xy = visible(p.ll); if (!xy) return;
      var isCur = S[cur].p === key, r = (isCur ? 8 : 6) * k;
      ctx.beginPath(); ctx.arc(xy[0], xy[1], r, 0, 2*Math.PI);
      ctx.fillStyle = isCur ? pollen : (visited[key] ? leaf : surf); ctx.fill();
      ctx.lineWidth = 3*k; ctx.strokeStyle = isCur ? pollen : leaf; ctx.stroke();
      if (showLabels || isCur){
        ctx.textAlign = p.a; ctx.textBaseline = 'middle';
        ctx.lineWidth = 5*k; ctx.strokeStyle = surf; ctx.lineJoin = 'round';
        ctx.strokeText(p.label, xy[0] + p.lx*k, xy[1] + p.ly*k); ctx.fillStyle = isCur ? ink : muted; ctx.fillText(p.label, xy[0] + p.lx*k, xy[1] + p.ly*k);
      }
      p._xy = xy;
    });
    // Fahrzeug
    if (veh){
      var g = visible(veh.ll);
      if (g){
        if (veh.alt > 0){ ctx.beginPath(); ctx.ellipse(g[0], g[1], 14 - veh.alt/8, 5, 0, 0, 2*Math.PI); ctx.fillStyle = ink; ctx.globalAlpha = .15; ctx.fill(); ctx.globalAlpha = 1; }
        var vk = Math.max(1, Math.min(2.2, 720 / (canvas.clientWidth || 720)));
        ctx.save(); ctx.translate(g[0] + (veh.park ? 26*vk : 0), g[1] - veh.alt - (veh.park ? 30*vk : 0)); ctx.scale(vk, vk);
        ctx.beginPath(); ctx.arc(0, 0, 20, 0, 2*Math.PI); ctx.fillStyle = pollen; ctx.fill();
        if (veh.mode === 'plane') ctx.rotate(veh.heading); else ctx.translate(-1, 3);
        ctx.fillStyle = ink; ctx.fill(veh.mode === 'plane' ? PLANE : TRAIN);
        ctx.restore();
      }
    }
  }
  function visible(ll){
    var r = proj.rotate(), d = d3.geoDistance(ll, [-r[0], -r[1]]);
    if (d > Math.PI/2 - .02) return null;
    return proj(ll);
  }

  // Kamerafahrt mit Zoom-out bei langen Strecken
  function flyTo(target, dur, onFrame, done){
    if (anim) cancelAnimationFrame(anim);
    var from = {c: view.c.slice(), s: view.s};
    var dist = d3.geoDistance(from.c, target.c);
    var interp = d3.geoInterpolate(from.c, target.c);
    var mid = Math.max(GLOBE.s, Math.min(from.s, target.s, 380 / Math.max(dist, .001)));
    if (reduce || dur === 0){ setView(target); if (onFrame) onFrame(1); draw(); if (done) done(); return; }
    var t0 = null;
    function step(ts){
      if (!t0) t0 = ts;
      var k = Math.min(1, (ts - t0) / dur), e = ease(k);
      var ls = k < .5 ? Math.log(from.s) + (Math.log(mid) - Math.log(from.s)) * ease(k*2)
                      : Math.log(mid) + (Math.log(target.s) - Math.log(mid)) * ease(k*2 - 1);
      setView({c: interp(e), s: Math.exp(ls)});
      if (onFrame) onFrame(e);
      draw();
      if (k < 1) anim = requestAnimationFrame(step); else { anim = null; if (done) done(); }
    }
    anim = requestAnimationFrame(step);
  }

  function park(){
    var p = P[S[cur].p], m = S[cur].m === 'plane' ? 'plane' : 'train';
    veh = (cur === 0 || S[cur].m === 'stay') ? null : {ll: p.ll, mode: m, heading: 0, alt: 0, park: true};
    partial = null;
  }
  function target(i){ return overview ? {c: GLOBE.c.slice(), s: GLOBE.s} : stationView(i); }

  function go(i, animate){
    var prev = cur;
    if (animate && i === prev + 1 && S[i].m && S[i].m !== 'stay'){
      var a = P[S[prev].p].ll, b = P[S[i].p].ll, mode = S[i].m, gi = d3.geoInterpolate(a, b);
      var far = d3.geoDistance(a, b) > .15;
      cur = i; render();
      flyTo(target(i), mode === 'plane' ? (far ? 3200 : 2200) : 1500, function(e){
        partial = {i: i, e: e};
        var p1 = gi(e), p2 = gi(Math.min(1, e + .01)), q1 = proj(p1), q2 = proj(p2);
        veh = {ll: p1, mode: mode, alt: mode === 'plane' ? Math.sin(Math.PI*e) * 34 : 0,
               heading: (q1 && q2) ? Math.atan2(q2[1] - q1[1], q2[0] - q1[0]) : 0};
      }, function(){ park(); draw(); });
    } else {
      cur = i; render(); park(); flyTo(target(i), animate === 'intro' ? 2600 : 1100);
    }
  }

  var list = root.querySelector('.jlist');
  S.forEach(function(s, i){ var li = document.createElement('li'), b = document.createElement('button'); b.type = 'button';
    b.textContent = P[s.p].label + ' · ' + s.when[lang].replace(/^([0-9]{4}).*$/, '$1');
    b.addEventListener('click', function(){ stop(); go(i, false); }); li.appendChild(b); list.appendChild(li); });
  var bPrev = root.querySelector('.jprev'), bNext = root.querySelector('.jnext'), bPlay = root.querySelector('.jplay'), bView = root.querySelector('.jview');
  function render(){
    var s = S[cur];
    root.querySelector('.jstep').textContent = (cur+1) + ' ' + L.of + ' ' + S.length + ' · ' + s.when[lang];
    root.querySelector('.jmode').textContent = cur === 0 ? L.start : (s.m === 'stay' ? L.stay : L[s.m]);
    root.querySelector('.jtitle').textContent = s.title[lang];
    root.querySelector('.jwhere').textContent = P[s.p].full ? P[s.p].full[lang] : P[s.p].label;
    root.querySelector('.jtext').textContent = s.text[lang];
    [].forEach.call(list.querySelectorAll('button'), function(b, i){ if (i === cur) b.setAttribute('aria-current', 'step'); else b.removeAttribute('aria-current'); b.classList.toggle('visited', i < cur); });
    bPrev.disabled = cur === 0; bNext.textContent = cur === S.length-1 ? L.restart : L.next;
  }
  function stop(){ if (timer){ clearInterval(timer); timer = null; bPlay.textContent = L.play; } }
  bNext.addEventListener('click', function(){ stop(); if (cur === S.length-1) go(0, false); else go(cur+1, true); });
  bPrev.addEventListener('click', function(){ stop(); if (cur > 0) go(cur-1, false); });
  bPlay.addEventListener('click', function(){
    if (timer){ stop(); return; }
    if (cur === S.length-1) go(0, false);
    bPlay.textContent = L.pause;
    timer = setInterval(function(){ if (cur >= S.length-1){ stop(); return; } go(cur+1, true); }, reduce ? 2500 : 4600);
  });
  bView.addEventListener('click', function(){ overview = !overview; bView.setAttribute('aria-pressed', String(overview)); bView.textContent = overview ? L.closeup : L.overview; flyTo(target(cur), 1600); });

  // Orte anklicken
  function pickAt(x, y){
    var best = null, bd = 18;
    Object.keys(P).forEach(function(k){ var xy = P[k]._xy; if (!xy || !visible(P[k].ll)) return; var d = Math.hypot(xy[0]-x, xy[1]-y); if (d < bd){ bd = d; best = k; } });
    if (!best) return;
    var first = -1, nxt = -1; for (var j = 0; j < S.length; j++) if (S[j].p === best){ if (first === -1) first = j; if (j > cur && nxt === -1) nxt = j; }
    stop(); go(nxt !== -1 ? nxt : first, false);
  }
  canvas.addEventListener('click', function(ev){ var r = canvas.getBoundingClientRect(); pickAt((ev.clientX - r.left) * W / r.width, (ev.clientY - r.top) * H / r.height); });

  setView({c: GLOBE.c.slice(), s: GLOBE.s}); render(); resize();
  window.addEventListener('resize', resize);
  var mq = window.matchMedia('(prefers-color-scheme: dark)'); if (mq.addEventListener) mq.addEventListener('change', draw);
  loadGeo().then(function(r){ land = r[0]; countries = r[1]; draw(); });
  // Start: erst der Globus, dann Anflug auf die erste Station, sobald der Abschnitt sichtbar wird
  var started = false;
  function intro(){ if (started) return; started = true; loadGeo().then(function(){ setTimeout(function(){ go(0, 'intro'); }, 500); }); }
  if ('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(es){ es.forEach(function(e){ if (e.isIntersecting && e.target.offsetParent !== null){ intro(); io.disconnect(); } }); }, {threshold: .35});
    io.observe(canvas);
  } else intro();
}
[].forEach.call(document.querySelectorAll('.journey'), init);
})();
