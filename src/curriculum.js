// This data is extracted from the original README's four semester weekly plans.
// Build-time loader: the curriculum remains editable in the original README.
import curriculumText from '../README.md?raw';
export const semesters = [
  {name:'Mathematics & Classical ML', short:'Foundations', theme:'#39d9b3', range:'Oct 2026 – Mar 2027', deliverable:'Rigorous tabular ML benchmark'},
  {name:'Deep Learning & ML Systems', short:'Neural systems', theme:'#818cf8', range:'Apr – Sep 2027', deliverable:'Neural model with reproducible deployment'},
  {name:'LLMs & Production AI', short:'Language systems', theme:'#f5b76c', range:'Oct 2027 – Mar 2028', deliverable:'Evaluated bilingual document assistant'},
  {name:'Advanced Systems & Research', short:'Research', theme:'#60b7fc', range:'Apr – Sep 2028', deliverable:'Independent experimental study'}
];
export function parseCurriculum(markdown){
 const sections=[...markdown.matchAll(/^## ([4-7])\\. Semester [1-4]:[^\\n]+/gm)];
 return sections.map((match,si)=>{
   const body=markdown.slice(match.index,sections[si+1]?.index??markdown.length);
   const weekly=body.split('### Weekly plan')[1]?.split(/^### /m)[0]??'';
   const rows=weekly.split('\\n').filter(line=>/^\\|\\s*\\d{1,2}\\s*\\|/.test(line));
   const weeks=rows.map(row=>{
     const cells=row.split('|').slice(1,-1).map(t=>t.trim());
     const week=Number(cells[0]);
     return {id:`s${si+1}-w${week}`,semester:si+1,week,title:cells[1]?.split(';')[0]?.replace(/\\*\\*/g,'')||'Study week',focus:cells[1]||'',practice:cells[2]||'',evidence:cells[3]||''};
   });
   return {...semesters[si],number:si+1,weeks};
 });
}
export const curriculum=parseCurriculum(curriculumText);
export const allWeeks=curriculum.flatMap(s=>s.weeks);
export const weekTasks=[{key:'concept',label:'Explain the core concepts without notes'},{key:'problems',label:'Solve problems or complete practical experiments'},{key:'evidence',label:'Commit inspectable technical evidence'},{key:'reflection',label:'Record assumptions, failures and open questions'},{key:'review',label:'Update the progress log and link evidence'}];
