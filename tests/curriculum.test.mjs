import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const text=readFileSync(new URL('../README.md',import.meta.url),'utf8');
function readWeeks(section){const start=text.indexOf('## '+(section+3)+'. Semester ');const end=text.indexOf('## '+(section+4)+'. Semester ',start+1);const block=text.slice(start,end<0?undefined:end).split('### Weekly plan')[1]?.split(/^### /m)[0]||'';return block.split('\n').filter(x=>/^\|\s*\d{1,2}\s*\|/.test(x)).map(x=>Number(x.split('|')[1].trim()))}
for(let s=1;s<=4;s++)test('semester '+s+' has 24 unique consecutive weeks',()=>{const w=readWeeks(s);assert.deepEqual(w,Array.from({length:24},(_,i)=>i+1))});
