(function(){
  var list = document.getElementById('project-list');
  var projects = Array.isArray(window.PROJECTS) ? window.PROJECTS : [];

  function el(tag, cls, text){ var n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; }
  function safeUrl(u){ u = (u||'').trim(); if (!u) return ''; if (!/^https?:\/\//i.test(u)) u = 'https://' + u; try { var p = new URL(u); return (p.protocol === 'http:' || p.protocol === 'https:') ? p.href : ''; } catch(e){ return ''; } }
  function prettyUrl(u){ try { var p = new URL(u); return (p.host + p.pathname).replace(/\/$/, '').replace(/^www\./,''); } catch(e){ return u; } }

  if (!projects.length){
    list.appendChild(el('div','empty','Projects are on the way.'));
  }
  projects.forEach(function(p){
    var card = el('article','proj');
    var meta = el('div','meta'); meta.appendChild(el('span',null,p.type||'Project')); meta.appendChild(el('span',null,p.date||'')); card.appendChild(meta);
    card.appendChild(el('h3',null,p.title||'Untitled project'));
    if (p.summary) card.appendChild(el('p',null,p.summary));
    if (p.tags && p.tags.length){ var t = el('div','tags'); p.tags.forEach(function(x){ t.appendChild(el('span','tag',x)); }); card.appendChild(t); }
    var url = safeUrl(p.link);
    if (url){ var foot = el('div','foot'); var a = el('a','go', prettyUrl(url) + ' ↗'); a.href = url; a.target = '_blank'; a.rel = 'noopener'; foot.appendChild(a); card.appendChild(foot); }
    list.appendChild(card);
  });

  // Copy email
  var btn = document.getElementById('copy-btn');
  if (btn) btn.addEventListener('click', function(){
    var b = this, node = document.getElementById('email');
    function sel(){ var r = document.createRange(); r.selectNodeContents(node); var s = window.getSelection(); s.removeAllRanges(); s.addRange(r); b.textContent = 'Selected, press Ctrl+C'; }
    try { navigator.clipboard.writeText(node.textContent).then(function(){ b.textContent = 'Copied'; setTimeout(function(){ b.textContent = 'Copy email'; }, 1800); }, sel); } catch(e){ sel(); }
  });

  // Highlight the current section in the side index
  var links = Array.prototype.slice.call(document.querySelectorAll('.index a'));
  if ('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if (en.isIntersecting){ links.forEach(function(a){ a.classList.toggle('on', a.getAttribute('href') === '#' + en.target.id); }); } });
    }, {rootMargin:'-40% 0px -55% 0px'});
    document.querySelectorAll('main section').forEach(function(s){ io.observe(s); });
  }
})();
