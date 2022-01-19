// flex
d=document;
JC="justify-content";
AI="align-items";
d.querySelectorAll("[class*='flex-']").forEach(e=>e.style.display="flex");
d.querySelectorAll("[class*='left-']").forEach(e=>e.style.setProperty(JC,"flex-start"));
d.querySelectorAll("[class*='center-']").forEach(e=>e.style.setProperty(JC,"center"));
d.querySelectorAll("[class*='right-']").forEach(e=>e.style.setProperty(JC,"flex-end"));
d.querySelectorAll("[class*='between-']").forEach(e=>e.style.setProperty(JC,"space-between"));
d.querySelectorAll("[class*='around-']").forEach(e=>e.style.setProperty(JC,"space-around"));
d.querySelectorAll("[class*='evenly-']").forEach(e=>e.style.setProperty(JC,"space-evenly"));
d.querySelectorAll("[class*='-top']").forEach(e=>e.style.setProperty(AI,"flex-start"));
d.querySelectorAll("[class*='-middle']").forEach(e=>e.style.setProperty(AI,"center"));
d.querySelectorAll("[class*='-bottom']").forEach(e=>e.style.setProperty(AI,"flex-end"));
// grid
// Set grid tracks by yourself.
// Note:grid lines must be ≦ 9.
// grid-column
d.querySelectorAll("[class*='grid-x-']").forEach(e=>e.style.setProperty("grid-column-start",e.className.slice(e.className.indexOf("grid-x-")+7,e.className.indexOf("grid-x-")+8)));
d.querySelectorAll("[class*='grid-x-']").forEach(e=>e.style.setProperty("grid-column-end",e.className.slice(e.className.indexOf("grid-x-")+9,e.className.indexOf("grid-x-")+10)));
// grid-row
d.querySelectorAll("[class*='grid-y-']").forEach(e=>e.style.setProperty("grid-row-start",e.className.slice(e.className.indexOf("grid-y-")+7,e.className.indexOf("grid-y-")+8)));
d.querySelectorAll("[class*='grid-y-']").forEach(e=>e.style.setProperty("grid-row-end",e.className.slice(e.className.indexOf("grid-y-")+9,e.className.indexOf("grid-y-")+10)));
// gap()
CG="column-gap";
RG="row-gap";
d.querySelectorAll("[class*='gap-']").forEach(e=>e.style.setProperty(CG,e.className.replace(/[^0-9.]/g, '')+"px"));
d.querySelectorAll("[class*='gap-']").forEach(e=>e.style.setProperty(RG,e.className.replace(/[^0-9.]/g, '')+"px"));
d.querySelectorAll("[class*='gapx-']").forEach(e=>e.style.setProperty(CG,e.className.slice(e.className.indexOf("gapx-"),e.className.indexOf("gapx-")+10).replace(/[^0-9.]/g, '')+"px"));
d.querySelectorAll("[class*='gapy-']").forEach(e=>e.style.setProperty(RG,e.className.slice(e.className.indexOf("gapy-"),e.className.indexOf("gapy-")+10).replace(/[^0-9.]/g, '')+"px"));
d.querySelectorAll("[class*='gap-per-']").forEach(e=>e.style.setProperty(CG,e.className.replace(/[^0-9.]/g, '')+"%"));
d.querySelectorAll("[class*='gap-per-']").forEach(e=>e.style.setProperty(RG,e.className.replace(/[^0-9.]/g, '')+"%"));
d.querySelectorAll("[class*='gapx-per-']").forEach(e=>e.style.setProperty(CG,e.className.slice(e.className.indexOf("gapx-per-"),e.className.indexOf("gapx-per-")+14).replace(/[^0-9.]/g, '')+"%"));
d.querySelectorAll("[class*='gapy-per-']").forEach(e=>e.style.setProperty(RG,e.className.slice(e.className.indexOf("gapy-per-"),e.className.indexOf("gapy-per-")+14).replace(/[^0-9.]/g, '')+"%"));
d.querySelectorAll("[class*='gap-em-']").forEach(e=>e.style.setProperty(CG,e.className.replace(/[^0-9.]/g, '')+"em"));
d.querySelectorAll("[class*='gap-em-']").forEach(e=>e.style.setProperty(RG,e.className.replace(/[^0-9.]/g, '')+"em"));
d.querySelectorAll("[class*='gapx-em-']").forEach(e=>e.style.setProperty(CG,e.className.slice(e.className.indexOf("gapx-em-"),e.className.indexOf("gapx-em-")+12).replace(/[^0-9.]/g, '')+"em"));
d.querySelectorAll("[class*='gapy-em-']").forEach(e=>e.style.setProperty(RG,e.className.slice(e.className.indexOf("gapy-em-"),e.className.indexOf("gapy-em-")+12).replace(/[^0-9.]/g, '')+"em"));

