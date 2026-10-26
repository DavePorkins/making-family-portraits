'use strict';
// This small enhancement leaves the original exhibition and gallery code intact.
const ORIGINAL_ARTISTS=JSON.parse(JSON.stringify(ARTISTS));
const EN_ARTISTS=[
  {
    "label": "Composed intimacy",
    "series": "Theater of Manners · since the 1980s",
    "years": "USA · born 1945",
    "role": "Observe / Arrange",
    "lead": "A family can occupy the same room yet remain worlds apart.",
    "idea": "Tina Barney photographs relatives and acquaintances from affluent East Coast circles. In her detailed colour photographs, gestures, interiors and lines of sight create carefully composed social scenes.",
    "technique": "Large-format camera and tripod; spontaneous action meets deliberate direction. The images sit between snapshot and tableau.",
    "detail": "Who is engaging with whom? Who looks past the others?",
    "practice": "Ask two people to pause an everyday action. Change nothing; see how quickly the scene begins to look staged.",
    "works": [
      {
        "desc": "Newspapers, figures and furniture direct our attention around a busy family breakfast."
      },
      {
        "desc": "Mirrors, curtains and gestures turn an intimate bathroom scene into a stage."
      }
    ]
  },
  {
    "label": "Negotiating the family image",
    "series": "Pictures from Home · 1982–1992",
    "years": "USA · 1946–2009",
    "role": "Remember / Negotiate",
    "lead": "Who owns a family's story: the parents or the child behind the camera?",
    "idea": "In Pictures from Home, Larry Sultan photographed his parents in California over many years. His photographs, family films and conversations reveal how family pictures are also negotiated performances.",
    "technique": "Colour interiors with varying degrees of staging. In the photobook, photographs, archival material and his parents' voices enter into dialogue.",
    "detail": "What role does Sultan's father perform for the camera? What role does Sultan play as his son?",
    "practice": "Ask someone how they would like to be represented. Then collaborate on a second version of the portrait.",
    "works": [
      {
        "desc": "His father sits on a bed in a suit: a public persona framed within a private room."
      },
      {
        "desc": "The title acknowledges that his mother poses actively rather than simply being observed."
      }
    ]
  },
  {
    "label": "The table as stage",
    "series": "Kitchen Table Series · 1990",
    "years": "USA · born 1953",
    "role": "Stage / Narrate",
    "lead": "One table, one lamp: an entire world of relationships.",
    "idea": "Carrie Mae Weems stages a fictional story about a Black woman whom she portrays herself. At the same kitchen table, changing relationships and accompanying text panels transform the meaning of the space.",
    "technique": "Twenty staged photographs and fourteen text panels (1990). A fixed viewpoint, overhead lamp and black-and-white images connect the scenes.",
    "detail": "What changes when the place stays the same but the people and relationships change?",
    "practice": "Keep the camera in one place. Photograph the same table three times, each time with a different social arrangement.",
    "works": [
      {
        "desc": "Mother and daughter repeat an intimate gesture in front of their mirrors."
      },
      {
        "desc": "Alone at the table, the protagonist claims her own space."
      }
    ]
  },
  {
    "label": "Shared authorship",
    "series": "The Notion of Family · 2001–2014",
    "years": "USA · born 1982",
    "role": "Collaborate / Bear witness",
    "lead": "A family photograph can reveal the history of an entire town.",
    "idea": "The Notion of Family follows three generations of women in Braddock, Pennsylvania. LaToya Ruby Frazier connects everyday family life to industrial decline, environmental exposure and social inequality.",
    "technique": "Black-and-white photography and collaborative self-portraiture. Frazier shares decisions about the image with her mother, among others.",
    "detail": "Who is the author and who is the subject? Can these roles overlap?",
    "practice": "Invite the person portrayed to shape the pose, framing and shutter release. Then discuss who has authorship over the image.",
    "works": [
      {
        "desc": "Mother and daughter visually overlap, exploring the relationship between them."
      },
      {
        "desc": "Two generations at home, surrounded by personal objects and family history."
      },
      {
        "desc": "Their shared frontal pose highlights both resemblance and individuality."
      }
    ],
    "extra": {
      "title": "Momme Portrait Series (Shadow), 2008"
    }
  },
  {
    "label": "Constructed intimacy",
    "series": "Portraits and family-like constellations",
    "years": "USA · born 1979",
    "role": "Construct / Elevate",
    "lead": "What looks like a private snapshot may be carefully constructed.",
    "idea": "Deana Lawson composes portraits through deliberate arrangements of bodies, looks and objects. Her photographs evoke family albums even when the relationships on view have been created for the camera.",
    "technique": "Large-format photography, rich colour and meticulously arranged interiors. Apparently spontaneous moments take on a monumental quality.",
    "detail": "Which objects suggest something about the people or their relationships?",
    "practice": "Choose three meaningful objects for a portrait, allowing the person photographed to help determine their placement.",
    "works": [
      {
        "desc": "Binky and Tony, friends in real life, pose as lovers in Lawson's own bedroom."
      },
      {
        "desc": "A man holds a newborn; family photographs and objects suggest connections across generations."
      }
    ]
  },
  {
    "label": "Chosen families",
    "series": "Domestic · 1995–1998",
    "years": "USA · born 1961",
    "role": "Represent / Belong",
    "lead": "Family is not only a matter of ancestry. It can also be chosen.",
    "idea": "For Domestic, Catherine Opie travelled across the United States to photograph lesbian couples and families in their homes. Her portraits attend to ordinary gestures of intimacy, care and belonging.",
    "technique": "Large-scale colour portraits, quietly composed. The domestic setting forms part of how the sitters present themselves.",
    "detail": "How does a family portrait change when family is not defined solely through biology?",
    "practice": "Photograph a sense of belonging without a conventional group pose. Which gesture or distance is enough?",
    "works": [
      {
        "desc": "Three people by a window: an everyday family scene rather than a formal group portrait."
      },
      {
        "desc": "Two women in a private room: an image from Opie's documentary Domestic series."
      }
    ],
    "extra": {
      "title": "Self-Portrait/Cutting, 1993 (contains an image of skin injury)"
    }
  },
  {
    "label": "The space between people",
    "series": "Family Portraits · since 1985",
    "years": "Germany · born 1954",
    "role": "Position / Observe",
    "lead": "When everyone faces the camera, the spaces between them become visible.",
    "idea": "Thomas Struth photographs families in their homes. Seating, gazes and distance reveal how people position themselves in front of the lens, without offering a single psychological explanation.",
    "technique": "Frontal, richly detailed colour photographs, often made with a large-format camera and tripod. The arrangement of the sitters is part of the image.",
    "detail": "What can we infer from their positions—and what might we be projecting onto them?",
    "practice": "Let a group choose their own places. Make one picture, then change just one position. Compare the effect.",
    "works": [
      {
        "desc": "A deliberate grouping in a living room makes posture and distance especially visible."
      },
      {
        "desc": "Several generations sit and stand together among furniture and family objects."
      }
    ]
  }
];
let siteLanguage='de';
const originalStaticHTML=new WeakMap();
const translations=[
 ['.header-actions .desktop-only','All artists ↗'],
 ['#openMenu','Chapters <span aria-hidden="true">☰</span>'],
 ['.hero-kicker','A visual companion · Workshop 01'],
 ['.hero-copy','How do we photograph relationships? Seven approaches to family, intimacy, distance, gesture and staging.'],
 ['.pill-cta','Explore <span aria-hidden="true">↘</span>'],
 ['.hero-bottom small','FAMILY PORTRAIT · 7 ARTISTS · ABOUT 12 MIN'],
 ['.hero-credit','Image: Tina Barney, <i>Sunday New York Times</i> (1982) · Source: Aperture'],
 ['.intro .tiny-label','Introduction'],
 ['.intro h2','Intimacy is<br><em>not an image.</em>'],
 ['.intro-right p:nth-child(1)','A family portrait does more than document who belongs together. It shows how people position themselves, which roles they adopt, and how a camera changes their relationships.'],
 ['.intro-right p:nth-child(2)','From autobiographical interiors to carefully constructed tableaux, these seven artists ask how closeness can become visible.'],
 ['.intro-right p:nth-child(3)','A companion to the Making Portraits workshop: documentary and staged photography, gestures, physical distance, family images and the relationship between photographer and sitter. Tap an image to enlarge it; the links lead to sources and further works.'],
 ['.index-title .tiny-label:first-child','The artists'],
 ['.end-wrap > .tiny-label','For the workshop'],
 ['.end h2','The camera is<br><em>never neutral.</em>'],
 ['.end-lead','The people in a photograph matter—but so does the act of photographing them. Three starting points for practice:'],
 ['.exercise:nth-child(1) .n','01 / OBSERVE'],
 ['.exercise:nth-child(1) h3','Look first.'],
 ['.exercise:nth-child(1) p','What relationships become visible through distance, touch, posture and gaze? Phrase your observation as a question, not a diagnosis.'],
 ['.exercise:nth-child(2) .n','02 / NEGOTIATE'],
 ['.exercise:nth-child(2) h3','Share direction.'],
 ['.exercise:nth-child(2) p','Let the people portrayed decide how they wish to appear. What becomes possible through collaboration?'],
 ['.exercise:nth-child(3) .n','03 / ALTER'],
 ['.exercise:nth-child(3) h3','Change one thing.'],
 ['.exercise:nth-child(3) p','Same location, same people: change just one gesture, object or position. How much does the story shift?'],
 ['.end-footer > p','<strong>Image credits and use:</strong> Artwork and artist photographs are loaded from external websites, with source links in each chapter. Most images remain copyrighted by their respective creators and rights holders. This non-commercial educational guide does not host copies of the artworks. Public embedding may require permission; if an image cannot load, use the image search link.'],
 ['.end-footer div a:first-child','Back to top ↑'],
 ['.end-footer div a:last-child','Search more images ↗'],
 ['.menu-head .tiny-label','Making Portraits · Contents'],
 ['#closeMenu','Close ✕'],
 ['.menu h2','Which image<br><i>are we looking at?</i>'],
 ['#lbClose','Close ✕'],
 ['#lbSource','View source ↗'],
 ['#shareTitle','Share this page.'],
 ['.share-subtitle','Scan to open the complete guide.'],
 ['#copyShare','Copy link <span aria-hidden="true">↗</span>']
];
const replaces=[
 ['Antippen, um groß anzusehen. Quellen und Bildersuche öffnen weitere Ansichten.','Tap to enlarge. Sources and image search open further views.'],
 ['Bild extern nicht verfügbar.','External image unavailable.'],
 ['Werk über die Bildsuche öffnen','Open via image search'],
 ['Zum Ausprobieren: Kamera und Körper','Try it: camera and body'],
 ['Noch ein wichtiges Werk:','Further work:'],
 ['Ausgewählte Arbeiten','Selected works'],
 ['Genauer hinsehen.','A closer look.'],
 ['Eine Frage an das Bild','A question for the image'],
 ['Fotografische Haltung','Photographic approach'],
 ['Nächste Position','Next artist'],
 ['Details aufklappen','Expand details'],
 ['Kontext & Quellen','Context & sources'],
 ['Eine kleine Übung','A small exercise'],
 ['↑ Alle Positionen','↑ All artists'],
 ['als Großansicht öffnen','open large view'],
 ['Zur Praxis','To practice'],
 ['Dein Blick','Your perspective'],
 ['Google Bilder','Google Images'],
 ['Alle Bilder','All images'],
 ['Videos & Talks','Videos & talks'],
 ['Quelle:','Source:'],
 ['Porträt von','Portrait of'],
 ['Porträt:','Portrait:'],
 ['WERK ','WORK '],
 ['Weiter ↓','Next ↓']
];
function translateText(raw){
  if(siteLanguage==='de')return raw;
  let value=raw;
  for(const pair of replaces)value=value.split(pair[0]).join(pair[1]);
  return value;
}
function translateVisibleNodes(){
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{
    acceptNode:function(n){
      const tag=n.parentElement&&n.parentElement.tagName;
      if(tag==='STYLE'||tag==='SCRIPT'||tag==='NOSCRIPT')return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  let node;
  while((node=walker.nextNode()))node.nodeValue=translateText(node.nodeValue);
  const attrs=[
    ['#openShare','aria-label','Website teilen','Share this website'],
    ['#openShare','title','Website teilen','Share this website'],
    ['#floatMenu','aria-label','Kapitelübersicht öffnen','Open chapter list'],
    ['#closeShare','aria-label','Teilen-Dialog schließen','Close share dialog'],
    ['.share-qr-frame img','alt','QR-Code zur Website Making Portraits – Family Portrait','QR code for Making Portraits – Family Portrait']
  ];
  attrs.forEach(function(v){
    const el=document.querySelector(v[0]);
    if(el)el.setAttribute(v[1],siteLanguage==='en'?v[3]:v[2]);
  });
  if(siteLanguage==='en'){
    document.querySelectorAll('#chapters [aria-label],#chapters img[alt],#indexGrid img[alt]').forEach(function(el){
      for(const attr of ['aria-label','alt']){
        if(el.hasAttribute(attr))el.setAttribute(attr,translateText(el.getAttribute(attr)));
      }
    });
  }
}
function localArtist(base,en){
  return Object.assign({},base,en,{
    works:base.works.map(function(w,j){return Object.assign({},w,en.works[j]||{})}),
    extra:base.extra?Object.assign({},base.extra,en.extra||{}):null
  });
}
function applyLanguage(next){
  siteLanguage=next==='en'?'en':'de';
  try{localStorage.setItem('making-portraits-lang',siteLanguage)}catch(_){}
  for(let i=0;i<ARTISTS.length;i++){
    ARTISTS[i]=siteLanguage==='en'?localArtist(ORIGINAL_ARTISTS[i],EN_ARTISTS[i]):JSON.parse(JSON.stringify(ORIGINAL_ARTISTS[i]));
  }
  translations.forEach(function(item){
    const el=document.querySelector(item[0]);
    if(!el)return;
    if(!originalStaticHTML.has(el))originalStaticHTML.set(el,el.innerHTML);
    el.innerHTML=siteLanguage==='en'?item[1]:originalStaticHTML.get(el);
  });
  document.querySelectorAll('#indexGrid .index-line').forEach(function(el,i){el.textContent=ARTISTS[i].label});
  lightboxItems=[];
  $('chapters').innerHTML=ARTISTS.map(chapterHTML).join('');
  $('chapters').querySelectorAll('[data-lightbox]').forEach(function(b){
    b.addEventListener('click',function(){
      const n=Number(b.dataset.lightbox);
      if(b.classList.contains('is-broken'))window.open(google(lightboxItems[n].w.search),'_blank','noopener');
      else openLightbox(n);
    });
  });
  $('chapters').querySelectorAll('.reveal').forEach(function(el){observer.observe(el)});
  document.documentElement.lang=siteLanguage;
  document.querySelector('meta[name="description"]').setAttribute('content',siteLanguage==='en'?'A visual workshop companion: seven photographic approaches to family, relationships and staging.':'Ein visuelles Begleitbuch zum Workshop Making Portraits: sieben künstlerische Positionen über Familie, Nähe, Distanz und Inszenierung.');
  languageButton.textContent=siteLanguage==='en'?'DE':'EN';
  languageButton.setAttribute('aria-label',siteLanguage==='en'?'Auf Deutsch wechseln':'Switch to English');
  languageButton.title=siteLanguage==='en'?'Deutsch':'English';
  updateScroll();
  translateVisibleNodes();
}
const languageButton=document.createElement('button');
languageButton.type='button';
languageButton.className='top-btn lang-toggle';
languageButton.id='toggleLang';
languageButton.textContent='EN';
document.querySelector('.header-actions').insertBefore(languageButton,$('openShare'));
const languageStyle=document.createElement('style');
languageStyle.textContent='.lang-toggle{height:40px;min-width:43px;padding:0 9px;font-size:12px;font-weight:700;letter-spacing:.07em}@media(max-width:690px){.lang-toggle{min-width:35px;height:35px;padding:0 7px}}@media(max-width:380px){.brand>span:not(.brand-symbol){display:none}}';
document.head.appendChild(languageStyle);
languageButton.addEventListener('click',function(){applyLanguage(siteLanguage==='en'?'de':'en')});
const baseUpdateScroll=updateScroll;
updateScroll=function(){
  baseUpdateScroll();
  if(siteLanguage==='en')$('floatNext').textContent=$('floatNext').textContent.replace('Zur Praxis','To practice').replace('Weiter','Next');
};
const params=new URLSearchParams(location.search);
let initial=params.get('lang');
if(initial!=='de'&&initial!=='en'){
  try{initial=localStorage.getItem('making-portraits-lang')||'de'}catch(_){initial='de'}
}
applyLanguage(initial);
